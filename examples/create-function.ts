/**
 * Example of waiting operation to complete.
 * Creating serverless function.
 *
 * Usage:
 * npx ts-node examples/create-function
 */
import { Session } from '../src';
import { FunctionServiceClient } from '../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';
import { CreateFunctionMetadata } from '../generated/yandex/cloud/serverless/functions/v1/function_service_pb';

createFunction();

async function createFunction() {
  const session = new Session({ authKeyFile: 'auth-key.json' });
  const fnApi = session.createClient(FunctionServiceClient);
  const { folderId } = await session.getServiceAccount() || {};
  const operation = await fnApi.create({ folderId, name: 'my-test-fn' });
  const res = await session.waitOperation(operation, CreateFunctionMetadata);

  console.log(res.getFunctionId());
}
