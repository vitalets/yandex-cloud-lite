import { LogReadingServiceClient } from '../../generated/yandex/cloud/logging/v1/log_reading_service_grpc_pb';
import { LogGroupServiceClient } from '../../generated/yandex/cloud/logging/v1/log_group_service_grpc_pb';
import { ReadRequest, Criteria } from '../../generated/yandex/cloud/logging/v1/log_reading_service_pb';

describe('logs', () => {
  it('read', async () => {
    const logGroupsApi = session.createClient(LogGroupServiceClient);
    const logsApi = session.createClient(LogReadingServiceClient);
    const { folderId } = await session.getServiceAccount() || {};
    const groups = await logGroupsApi.list({ folderId, filter: 'name="default"'});
    const defaultGroup = groups.getGroupsList()[0];
    const criteria = new Criteria().setPageSize(5).setLogGroupId(defaultGroup.getId());
    const req = new ReadRequest().setCriteria(criteria);
    const res = await logsApi.read(req);
    assert.ok(res.getEntriesList().length > 0);
  });
});
