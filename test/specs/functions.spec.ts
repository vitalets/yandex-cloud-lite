import { FunctionServiceClient } from '../../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';

const { FOLDER_ID = '' } = process.env;

describe('functions', () => {
  it('list', async () => {
    const client = session.createClient(FunctionServiceClient);
    const functions = await client.list({ folderId: FOLDER_ID });
    assert.ok(functions.functionsList.length > 0);
  });
});