import { Session } from '../../src';
import { YC_OAUTH_TOKEN } from '../../.env.json';

describe('session', () => {
  it('getIamToken (jwt)', async () => {
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });

  it('getIamToken (oauth)', async () => {
    const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });
});
