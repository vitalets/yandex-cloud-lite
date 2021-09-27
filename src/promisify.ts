/**
 * Promisify GRPC client and allow plain objects in and out of method calls.
 */
import { promisify } from 'util';
import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';

interface GrpcStreamingCall<Req extends jspb.Message, Res extends jspb.Message> {
  (
    req: Req,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<Res>;
}
type GrpcCallback<Res extends jspb.Message> = (e: grpc.ServiceError | null, res: Res) => void;
interface GrpcUnaryCall<Req extends jspb.Message, Res extends jspb.Message> {
  (
    req: Req,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    cb: GrpcCallback<Res>
  ): grpc.ClientUnaryCall;
}
interface GrpcUnaryCallWithMeta extends GrpcUnaryCall<jspb.Message, jspb.Message> {
  path: string;
  requestStream: boolean;
  responseStream: boolean;
  // these two props are not show in d.ts but actually exist
  requestType: new () => jspb.Message;
  responseType: new () => jspb.Message;
}
// Here use Partial<...> because often optional request props are marked as required
type ReqAsObject<Req extends jspb.Message> = Partial<ReturnType<Req['toObject']>>;
type GrpcPromisedCall<Req extends jspb.Message, Res extends jspb.Message> = {
  (
    req?: Req | ReqAsObject<Req>,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): Promise<Res>
};
export type GrpcPromisedClient<T> = {
  // check streaming methods first as they extends unary calls
  [K in keyof T]: T[K] extends GrpcStreamingCall<infer _Req, infer _Res>
    ? T[K]
    : T[K] extends GrpcUnaryCall<infer Req, infer Res>
      ? GrpcPromisedCall<Req, Res>
      : T[K]
}

export function promisifyGrpcClient<T extends grpc.Client>(client: T) {
  const methods = Object.keys(client.constructor.prototype) as (keyof typeof client)[];
  methods.forEach(key => {
    const method = client[key] as unknown as GrpcUnaryCallWithMeta;
    if (typeof method === 'function' && method.requestStream === false && method.responseStream === false) {
      // @ts-expect-error valid
      client[key] = promisifyGrpcMethod(client, method);
    }
  });
  return client as unknown as GrpcPromisedClient<T>;
}

function promisifyGrpcMethod<T extends grpc.Client>(client: T, method: GrpcUnaryCallWithMeta) {
  const fn = promisify(method).bind(client);
  return async (
    req?: jspb.Message | Record<string, unknown>,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ) => {
    if (!(req instanceof jspb.Message)) req = fromObject(method, req);
    const res = await fn(req, metadata || new grpc.Metadata(), options || {}) as jspb.Message;
    return res;
  };
}

function fromObject(method: GrpcUnaryCallWithMeta, obj?: Record<string, unknown>) {
  const req = new method.requestType();
  if (obj) {
    Object.keys(obj).forEach(key => {
      const reqMethodName = `set${capitalizeFirstLetter(key)}`;
      // @ts-expect-error valid
      req[reqMethodName](obj[key]);
    });
  }
  return req;
}

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
