import * as grpc from '@grpc/grpc-js';

export function createCredentials(iamTokenGetter?: () => Promise<string>) {
  const sslCredentials = grpc.credentials.createSsl();
  if (iamTokenGetter) {
    const tokenCredentials = createTokenCredentials(iamTokenGetter);
    return grpc.credentials.combineChannelCredentials(sslCredentials, tokenCredentials);
  } else {
    return sslCredentials;
  }
}

function createTokenCredentials(iamTokenGetter: () => Promise<string>) {
  return grpc.credentials.createFromMetadataGenerator((_, cb) => iamTokenGetter()
    .then(iamToken => cb(null, createTokenMetadata(iamToken)))
    .catch(e => cb(e))
  );
}

function createTokenMetadata(iamToken: string) {
  const metadata = new grpc.Metadata();
  metadata.set('authorization', 'Bearer ' + iamToken);
  return metadata;
}

