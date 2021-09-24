import * as grpc from '@grpc/grpc-js';
import { IamTokenServiceClient } from '../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
import { createCredentials } from './credentials';
import { getEnpoint } from './endpoints';
import { promisifyGrpcClient, PromisedGrpcClient } from './promisify';

export { PromisedGrpcClient };

type SessionOptions = {
  oauthToken?: string;
  iamToken?: string;
}

export class Session {
  private iamTokenPromise?: Promise<string>;

  constructor(private options: SessionOptions) { }

  createClient<T extends typeof grpc.Client>(ctor: T, { endpoint = '', useToken = true } = {}) {
    const credentials = createCredentials(useToken ? () => this.getIamToken() : undefined);
    endpoint = endpoint || getEnpoint(ctor);
    const client = new ctor(endpoint, credentials) as InstanceType<T>;
    return promisifyGrpcClient(client);
  }

  async getIamToken(): Promise<string> {
    if (this.options.iamToken) return this.options.iamToken;
    if (!this.iamTokenPromise) this.iamTokenPromise = this.requestIamToken();
    return this.iamTokenPromise;
  }

  private async requestIamToken() {
    if (!this.options.oauthToken) throw new Error(`You should provide oauthToken`);
    const iamClient = this.createClient(IamTokenServiceClient, { useToken: false });
    const res = await iamClient.create({ yandexPassportOauthToken: this.options.oauthToken });
    return res.iamToken;
  }
}
