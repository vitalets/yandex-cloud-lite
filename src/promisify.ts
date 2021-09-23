/**
 * Promisify GRPC client and allow plain objects in and out of method calls.
 */
import { promisify } from 'util';
import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';

type GrpcCallback<Res extends jspb.Message> = (e: grpc.ServiceError | null, res: Res) => void;
type GrpcAsyncMethod<Req extends jspb.Message, Res extends jspb.Message> = {
  (req: Req, m: grpc.Metadata, o: Partial<grpc.CallOptions>, cb: GrpcCallback<Res>): void;
};

export type PromisedGrpcClient<T> = {
  [K in keyof T]: T[K] extends GrpcAsyncMethod<infer Req, infer Res>
    ? (req?: Req | Partial<ReturnType<Req['toObject']>>) => Promise<ReturnType<Res['toObject']>>
    : never
}

export function promisifyGrpcClient<T extends grpc.Client>(client: T) {
  const methods = Object.keys(client.constructor.prototype) as (keyof typeof client)[];
  methods.forEach(key => {
    const method = client[key];
    if (typeof method === 'function') {
      const fn = promisify(method).bind(client);
      // @ts-expect-error valid
      client[key] = async (req?: jspb.Message | Record<string, unknown>) => {
        if (!(req instanceof jspb.Message)) req = fromObject(method, req);
        const res = await fn(req) as jspb.Message;
        return res.toObject();
      };
    }
  });
  return client as unknown as PromisedGrpcClient<T>;
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
