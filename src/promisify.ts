/**
 * Promisify GRPC client and allow plain objects in and out of method calls.
 */
import { promisify } from 'util';
import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';

type GrpcCallback<Res extends jspb.Message> = (e: grpc.ServiceError | null, res: Res) => void;
type GrpcUnaryCall<Req extends jspb.Message, Res extends jspb.Message> = {
  (
    req: Req,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    cb: GrpcCallback<Res>
  ): grpc.ClientUnaryCall;
};
type GrpcMethodMeta = {
  path: string;
  requestStream: boolean;
  responseStream: boolean;
  requestType: jspb.Message;
  responseType: jspb.Message;
}
// Here use Partial<...> because often optional request props are marked as required
type ReqAsObject<Req extends jspb.Message> = Partial<ReturnType<Req['toObject']>>;
type ResAsObject<Res extends jspb.Message> = ReturnType<Res['toObject']>;
type GrpcPromisedCall<Req extends jspb.Message, Res extends jspb.Message> = {
  (
    req?: Req | ReqAsObject<Req>,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): Promise<ResAsObject<Res>>
};
export type GrpcPromisedClient<T> = {
  [K in keyof T]: T[K] extends GrpcUnaryCall<infer Req, infer Res>
    ? GrpcPromisedCall<Req, Res>
    : T[K]
}

export function promisifyGrpcClient<T extends grpc.Client>(client: T) {
  const methods = Object.keys(client.constructor.prototype) as (keyof typeof client)[];
  methods.forEach(key => {
    const method = client[key];
    const methodMeta = method as unknown as GrpcMethodMeta;
    if (typeof method === 'function' && methodMeta.responseStream === false) {
      // @ts-expect-error valid
      client[key] = promisifyGrpcMethod(client, method);
    }
  });
  return client as unknown as GrpcPromisedClient<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function promisifyGrpcMethod<T extends grpc.Client>(client: T, method: any) {
  const fn = promisify(method).bind(client);
  return async (
    req?: jspb.Message | Record<string, unknown>,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ) => {
    if (!(req instanceof jspb.Message)) req = fromObject(method, req);
    const args = [ req, metadata, options ].filter(Boolean);
    const res = await fn(...args) as jspb.Message;
    return res.toObject();
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromObject(method: any, obj?: Record<string, unknown>) {
  const req = new method.requestType();
  if (obj) {
    Object.keys(obj).forEach(key => {
      const reqMethodName = `set${capitalizeFirstLetter(key)}`;
      req[reqMethodName](obj[key]);
    });
  }
  return req;
}

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
