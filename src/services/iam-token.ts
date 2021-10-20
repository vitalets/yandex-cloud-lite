/**
 * Getting iam token.
 */
import jwt from 'jsonwebtoken';
import { IamTokenServiceClient } from '../../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
import { GrpcPromisedClient } from '../helpers/grpc-promisify';
import { Session } from '../session';
import { AuthKeyFile, AuthKeyData } from '../helpers/auth-key-file';

export class IamTokenService {
  iamTokenPromise?: Promise<string>;
  api: GrpcPromisedClient<IamTokenServiceClient>;

  constructor(private session: Session, private authKeyFile?: AuthKeyFile) {
    this.api = session.createClient(IamTokenServiceClient, { useToken: false });
  }

  async getIamToken() {
    if (!this.iamTokenPromise) this.iamTokenPromise = this.requestIamToken();
    return this.iamTokenPromise;
  }

  private async requestIamToken() {
    const { iamToken, oauthToken, authKeyFile } = this.session.options;
    if (iamToken) return iamToken;
    if (oauthToken) return this.requestByOauthToken(oauthToken);
    if (authKeyFile) return this.requestByAuthKeyFile();
    throw new Error(`You should provide one of: iamToken, oauthToken, authKeyFile`);
  }

  async requestByOauthToken(oauthToken: string) {
    const res = await this.api.create({ yandexPassportOauthToken: oauthToken });
    return res.getIamToken();
  }

  async requestByAuthKeyFile() {
    const authKeyData = await this.authKeyFile!.getData();
    const jwt = this.getJwtRequest(authKeyData);
    const res = await this.api.create({ jwt });
    return res.getIamToken();
  }

  private getJwtRequest({ id, service_account_id, private_key }: AuthKeyData) {
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
