/**
 * Example of GRPC unary call.
 * Getting list of all API gateways.
 *
 * Usage:
 * npx ts-node examples/list-gateways
 */
import 'dotenv/config';
import { Session } from '../src';
import { ApiGatewayServiceClient } from '../generated/yandex/cloud/serverless/apigateway/v1/apigateway_service_grpc_pb';

listGateways();

async function listGateways() {
  const session = new Session({ authKeyFile: 'auth-key.json' });
  const { folderId } = await session.getServiceAccount() || {};
  const api = session.createClient(ApiGatewayServiceClient);
  const res = await api.list({ folderId });

  console.log(res.toObject());
}

