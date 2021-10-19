import { Session } from '../../src';

describe('session', () => {
  it('getIamToken by jwt', async () => {
    const session = new Session({ keyFile: './.secret-yc-key.json' });
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });

  it.skip('getIamToken by oauth', async () => {
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });
});
