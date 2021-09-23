
describe('session', () => {
  it('getIamToken', async () => {
    const iamToken = await session.getIamToken();
    assert.match(iamToken, /.+/);
  });
});
