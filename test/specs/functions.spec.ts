import { FunctionServiceClient } from '../../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';

describe('functions', () => {
  it('list', async () => {
    const fnApi = session.createClient(FunctionServiceClient);
    const { folderId } = await session.getServiceAccount() || {};
    const res = await fnApi.list({ folderId });
    assert.ok(res.getFunctionsList().length > 0);
  });
});
