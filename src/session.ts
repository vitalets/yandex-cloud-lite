import * as jspb from 'google-protobuf';
import * as grpc from '@grpc/grpc-js';
import { Operation } from '../generated/yandex/cloud/operation/operation_pb';
import { createCredentials } from './helpers/grpc-credentials';
import { promisifyGrpcClient } from './helpers/grpc-promisify';
import { AuthKeyFile } from './helpers/auth-key-file';
import { OperationService, WaitOperationOptions } from './services/operation';
import { IamTokenService } from './services/iam-token';
import { ServiceAccountService } from './services/service-account';
import { getEnpoint } from './endpoints';
import { CliConfig } from './helpers/cli-config';

export type SessionOptions = {
  iamToken?: string;
  oauthToken?: string;
  authKeyFile?: string;
  useCliConfig?: boolean | string;
  serviceAccountId?: string;
  folderId?: string;
}

export class Session {
  private authKeyFile?: AuthKeyFile;
  private cliConfig?: CliConfig;
  private iamTokenService: IamTokenService;
  private operationService?: OperationService;
  private saService?: ServiceAccountService;

  constructor(public options: SessionOptions) {
    const { authKeyFile, useCliConfig } = options;
    if (authKeyFile) this.authKeyFile = new AuthKeyFile(authKeyFile);
    if (useCliConfig) this.cliConfig = new CliConfig(useCliConfig);
    this.iamTokenService = new IamTokenService(this, this.authKeyFile, this.cliConfig);
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
   * Get folder id.
   */
  async getFolderId() {
    const { folderId, authKeyFile, useCliConfig } = this.options;
    if (folderId) return folderId;
    if (authKeyFile) {
      const data = await this.getServiceAccount();
      return data?.folderId || '';
    }
    if (useCliConfig) {
      const data = await this.cliConfig?.getData();
      return data?.folderId || '';
    }
    return '';
  }

  /**
   * Get service account info (if possible)
   */
  async getServiceAccount() {
    const serviceAccountId = await this.getServiceAccountId();
    if (serviceAccountId) {
      this.saService = this.saService || new ServiceAccountService(this, serviceAccountId);
      return this.saService.getData();
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

  private async getServiceAccountId() {
    const { serviceAccountId } = this.options;
    if (serviceAccountId) return serviceAccountId;
    if (this.authKeyFile) {
      const data = await this.authKeyFile.getData();
      return data.service_account_id;
    }
    return '';
  }
}
