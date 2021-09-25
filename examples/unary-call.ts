/**
 * Example of GRPC unary call.
 * Getting list of all API gateways.
 *
 * Usage:
 * npx ts-node examples/unary-call.ts
 */
import 'dotenv/config';
import { Session } from '../src';
import { ApiGatewayServiceClient } from '../generated/yandex/cloud/serverless/apigateway/v1/apigateway_service_grpc_pb';

const { YC_OAUTH_TOKEN = '', FOLDER_ID = '' } = process.env;

main();

async function main() {
  const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
  const client = session.createClient(ApiGatewayServiceClient);
  const res = await client.list({ folderId: FOLDER_ID });

  console.log(res);
}

