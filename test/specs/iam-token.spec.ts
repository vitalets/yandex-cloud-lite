import { Session } from '../../src';
import { YC_OAUTH_TOKEN } from '../../.env.json';

describe('getIamToken', () => {
  it('authKeyFile', async () => {
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });

  it('oauthToken', async () => {
    const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });

  it('useCliConfig', async () => {
    const session = new Session({ useCliConfig: true });
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });
});
