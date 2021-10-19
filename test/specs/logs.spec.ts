import { LogReadingServiceClient } from '../../generated/yandex/cloud/logging/v1/log_reading_service_grpc_pb';
import { ReadRequest, Criteria } from '../../generated/yandex/cloud/logging/v1/log_reading_service_pb';
import { LOG_GROUP_ID } from '../../.env.json';

describe('logs', () => {
  it('read', async () => {
    const client = session.createClient(LogReadingServiceClient);
    const req = new ReadRequest();
    const criteria = new Criteria();
    criteria.setPageSize(5);
    criteria.setLogGroupId(LOG_GROUP_ID);
    req.setCriteria(criteria);
    const res = await client.read(req);
    assert.ok(res.getEntriesList().length > 0);
  });
});
