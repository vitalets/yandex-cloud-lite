/**
 * Getting iam token.
 */
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { IamTokenServiceClient } from '../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
import { GrpcPromisedClient } from './grpc-promisify';
import { Session } from './session';
import { appendMessageToError } from './utils';

export interface KeyData {
  id: string;
  service_account_id: string;
  public_key: string;
  private_key: string;
}

export class IamTokenService {
  iamTokenPromise?: Promise<string>;
  api: GrpcPromisedClient<IamTokenServiceClient>;
  keyData?: KeyData;

  constructor(public session: Session) {
    this.api = session.createClient(IamTokenServiceClient, { useToken: false });
  }

  async getIamToken(): Promise<string> {
    return this.iamTokenPromise || (this.iamTokenPromise = this.requestIamToken());
  }

  private async requestIamToken() {
    const { iamToken, oauthToken, authKeyFile } = this.session.options;
    if (iamToken) return iamToken;
    if (oauthToken) return this.requestByOauthToken(oauthToken);
    if (authKeyFile) return this.requestByAuthKeyFile(authKeyFile);
    throw new Error(`You should provide one of: iamToken, oauthToken, authKeyFile`);
  }

  async requestByOauthToken(oauthToken: string) {
    const res = await this.api.create({ yandexPassportOauthToken: oauthToken });
    return res.getIamToken();
  }

  async requestByAuthKeyFile(authKeyFile: string) {
    await this.readAuthKeyFile(authKeyFile);
    const jwt = this.getJwtRequest();
    const res = await this.api.create({ jwt });
    return res.getIamToken();
  }

  private async readAuthKeyFile(authKeyFile: string) {
    const content = await fs.promises.readFile(authKeyFile, 'utf8');
    try {
      this.keyData = JSON.parse(content);
    } catch (e) {
      throw appendMessageToError(e, `file: ${authKeyFile}`);
    }
  }

  private getJwtRequest() {
    const { id, service_account_id, private_key } = this.keyData!;
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: service_account_id,
      aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
      iat: now,
      exp: now + 3600,
    };
    const options: jwt.SignOptions = {
      algorithm: 'PS256',
      keyid: id,
    };
    return jwt.sign(payload, private_key, options);
  }
}
