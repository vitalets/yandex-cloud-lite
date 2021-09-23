import * as grpc from '@grpc/grpc-js';

const endpoints: Record<string, string> = {
  'yandex.cloud.iam.v1.IamTokenService': 'iam.api.cloud.yandex.net:443',
  'yandex.cloud.serverless.functions.v1.FunctionService': 'serverless-functions.api.cloud.yandex.net:443',
  'yandex.cloud.logging.v1.LogReadingService': 'reader.logging.yandexcloud.net:443',
};

export function getEnpoint(ctor: typeof grpc.Client) {
  const serviceName = detectServiceName(ctor);
  const endpoint = endpoints[serviceName];
  if (!endpoint) throw new Error(`Service name "${serviceName}" not mapped to endpoint`);
  return endpoint;
}

function detectServiceName(ctor: typeof grpc.Client) {
  const path = Object.values(ctor.prototype).find(v => typeof v === 'function' && v.path)?.path;
  if (!path) throw new Error(`Can't detect service name: ${ctor}`);
  return path.split('/')[1];
}
