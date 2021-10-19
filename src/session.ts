import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { createCredentials } from './grpc-credentials';
import { getEnpoint } from './endpoints';
import { promisifyGrpcClient } from './grpc-promisify';
import { OperationService, WaitOperationOptions } from './operation';
import { IamTokenService } from './iam-token';
import { ServiceAccountService } from './service-account';
import { AuthKeyFile } from './auth-key-file';

export type SessionOptions = {
  iamToken?: string;
  oauthToken?: string;
  authKeyFile?: string;
  serviceAccountId?: string;
}

export class Session {
  private authKeyFile?: AuthKeyFile;
  private iamTokenService: IamTokenService;
  private operationService?: OperationService;
  private saService?: ServiceAccountService;

  constructor(public options: SessionOptions) {
    if (options.authKeyFile) this.authKeyFile = new AuthKeyFile(options.authKeyFile);
    this.iamTokenService = new IamTokenService(this, this.authKeyFile);
  }

  createClient<T extends typeof grpc.Client>(ctor: T, { endpoint = '', useToken = true } = {}) {
    const credentials = createCredentials(useToken ? () => this.getIamToken() : undefined);
    endpoint = endpoint || getEnpoint(ctor);
    const client = new ctor(endpoint, credentials) as InstanceType<T>;
    return promisifyGrpcClient(client);
  }

  /**
   * Get iam token
   */
  async getIamToken(): Promise<string> {
    return this.iamTokenService.getIamToken();
  }

  /**
   * Get service account info (if possible)
   */
  async getServiceAccount() {
    const serviceAccountId = this.options.serviceAccountId
      || (await this.authKeyFile?.getData())?.service_account_id;
    if (serviceAccountId) {
      this.saService = this.saService || new ServiceAccountService(this, serviceAccountId);
      return this.saService.get();
    }
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
