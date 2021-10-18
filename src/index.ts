import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';
import { IamTokenServiceClient } from '../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
import { OperationServiceClient } from '../generated/yandex/cloud/operation/operation_service_grpc_pb';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { createCredentials } from './credentials';
import { getEnpoint } from './endpoints';
import { promisifyGrpcClient, GrpcPromisedClient } from './promisify';
import { WaitOperation, WaitOperationOptions } from './operation';

// re-export some useful types
export {
  Timestamp,
  Duration,
  GrpcPromisedClient,
};

type SessionOptions = {
  oauthToken?: string;
  iamToken?: string;
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
    if (this.options.iamToken) return this.options.iamToken;
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
    if (!this.options.oauthToken) throw new Error(`You should provide oauthToken`);
    const iamClient = this.createClient(IamTokenServiceClient, { useToken: false });
    const res = await iamClient.create({ yandexPassportOauthToken: this.options.oauthToken });
    return res.getIamToken();
  }
}
