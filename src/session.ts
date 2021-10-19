import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { createCredentials } from './grpc-credentials';
import { getEnpoint } from './endpoints';
import { promisifyGrpcClient } from './grpc-promisify';
import { OperationService, WaitOperationOptions } from './operation';
import { IamTokenService } from './iam-token';

export type SessionOptions = {
  iamToken?: string;
  oauthToken?: string;
  authKeyFile?: string;
}

export class Session {
  private iamTokenService: IamTokenService;
  private operationService?: OperationService;

  constructor(public options: SessionOptions) {
    this.iamTokenService = new IamTokenService(this);
  }

  createClient<T extends typeof grpc.Client>(ctor: T, { endpoint = '', useToken = true } = {}) {
    const credentials = createCredentials(useToken ? () => this.getIamToken() : undefined);
    endpoint = endpoint || getEnpoint(ctor);
    const client = new ctor(endpoint, credentials) as InstanceType<T>;
    return promisifyGrpcClient(client);
  }

  async getIamToken(): Promise<string> {
    return this.iamTokenService.getIamToken();
  }

  /**
   * Waits untils operation finishes
   * todo: use Parameters<>?
   */
  async waitOperation<T extends typeof jspb.Message>(
    operation: Operation,
    responseClass: T,
    options: WaitOperationOptions = {}
  ) {
    this.operationService = this.operationService || new OperationService(this);
    return this.operationService.wait(operation, responseClass, options);
  }
}
