/**
 * Getting iam token.
 */
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { IamTokenServiceClient } from '../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
import { Session } from './session';
import { appendMessageToError } from './utils';

export interface KeyData {
  id: string;
  service_account_id: string;
  public_key: string;
  private_key: string;
}

export async function requestIamTokenByOauthToken(session: Session, oauthToken: string) {
  const iamClient = session.createClient(IamTokenServiceClient, { useToken: false });
  const res = await iamClient.create({ yandexPassportOauthToken: oauthToken });
  return res.getIamToken();
}

export async function requestIamTokenByKeyFile(session: Session, keyFile: string) {
  const keyData = await readKeyFile(keyFile);
  const jwt = getJwtRequest(keyData);
  const iamClient = session.createClient(IamTokenServiceClient, { useToken: false });
  const res = await iamClient.create({ jwt });
  return res.getIamToken();
}

async function readKeyFile(keyFile: string) {
  const content = await fs.promises.readFile(keyFile, 'utf8');
  try {
    return JSON.parse(content) as KeyData;
  } catch (e) {
    throw appendMessageToError(e, `keyFile: ${keyFile}`);
  }
}

function getJwtRequest(keyData: KeyData) {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: keyData.service_account_id,
    aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
    iat: now,
    exp: now + 3600,
  };
  const options: jwt.SignOptions = {
    algorithm: 'PS256',
    keyid: keyData.id,
  };
  return jwt.sign(payload, keyData.private_key, options);
}
