/**
 * Example of waiting operation to complete.
 * Creating serverless function.
 *
 * Usage:
 * npx ts-node examples/create-function
 */
import 'dotenv/config';
import { Session } from '../src';
import { FunctionServiceClient } from '../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';
import { CreateFunctionMetadata } from '../generated/yandex/cloud/serverless/functions/v1/function_service_pb';

const { YC_OAUTH_TOKEN = '', FOLDER_ID = '' } = process.env;

createFunction();

async function createFunction() {
  const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
  const client = session.createClient(FunctionServiceClient);
  const operation = await client.create({  name: 'my-test-fn', folderId: FOLDER_ID });
  const res = await session.waitOperation(operation, CreateFunctionMetadata);

  console.log(res.getFunctionId());
}
