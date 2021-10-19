import assert from 'assert';
import 'dotenv/config';
import { Session } from '../src';

// const { YC_OAUTH_TOKEN = '' } = process.env;

type AssertType = typeof assert;

declare global {
  const assert: AssertType;
  const session: Session;
}

before(() => {
  // default session
  const session = new Session({ keyFile: './.secret-yc-key.json' });

  Object.assign(global, {
    assert,
    session,
  });
});

