import { FunctionServiceClient } from '../../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';
import { FOLDER_ID } from '../../.env.json';

describe('functions', () => {
  it('list', async () => {
    const client = session.createClient(FunctionServiceClient);
    const res = await client.list({ folderId: FOLDER_ID });
    assert.ok(res.getFunctionsList().length > 0);
  });
});
