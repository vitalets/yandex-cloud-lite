import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';
import { OperationServiceClient } from '../generated/yandex/cloud/operation/operation_service_grpc_pb';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { createCredentials } from './grpc-credentials';
import { getEnpoint } from './endpoints';
import { promisifyGrpcClient, GrpcPromisedClient } from './grpc-promisify';
import { WaitOperation, WaitOperationOptions } from './operation';
import { requestIamTokenByKeyFile, requestIamTokenByOauthToken } from './iam-token';

export type SessionOptions = {
  oauthToken?: string;
  iamToken?: string;
  keyFile?: string;
}

export class Session {
  private iamTokenPromise?: Promise<string>;
  private operationsClient?: GrpcPromisedClient<OperationServiceClient>;

  constructor(private options: SessionOptions) { }

  createClient<T extends typeof grpc.Client>(ctor: T, { endpoint = '', useToken = true } = {}) {
    const credentials = createCredentials(useToken ? () => this.getIamToken() : undefined);
    endpoint = endpoint || getEnpoint(ctor);
    const client = new ctor(endpoint, credentials) as InstanceType<T>;
    return promisifyGrpcClient(client);
  }

  async getIamToken(): Promise<string> {
    if (!this.iamTokenPromise) this.iamTokenPromise = this.requestIamToken();
    return this.iamTokenPromise;
  }

  /**
   * Waits untils operation finishes
   */
  async waitOperation<T extends typeof jspb.Message>(
    operation: Operation,
    responseClass: T,
    options?: WaitOperationOptions
    ) {
    this.operationsClient = this.operationsClient || this.createClient(OperationServiceClient);
    return new WaitOperation(this.operationsClient, operation, responseClass, options).run();
  }

  private async requestIamToken() {
    const { iamToken, oauthToken, keyFile } = this.options;
    if (iamToken) return iamToken;
    if (oauthToken) return requestIamTokenByOauthToken(this, oauthToken);
    if (keyFile) return requestIamTokenByKeyFile(this, keyFile);
    throw new Error(`You should provide one of: iamToken, oauthToken, keyFile`);
  }
}
