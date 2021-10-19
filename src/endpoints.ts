/**
 * See: https://cloud.yandex.ru/docs/api-design-guide/concepts/endpoints
 * curl https://api.cloud.yandex.net/endpoints
 */
import * as grpc from '@grpc/grpc-js';

export function getEnpoint(ctor: typeof grpc.Client) {
  const serviceName = detectServiceName(ctor);
  const endpoint = endpoints[serviceName];
  if (!endpoint) throw new Error([
    `Service name "${serviceName}" not mapped to endpoint.`,
    `You can pass custom endpoint as second argument to session.createClient().`,
  ].join(' '));
  return endpoint;
}

function detectServiceName(ctor: typeof grpc.Client) {
  const path = Object.values(ctor.prototype).find(v => typeof v === 'function' && v.path)?.path;
  if (!path) throw new Error(`Can't detect service name: ${ctor}`);
  return path.split('/')[1];
}

const endpoints: Record<string, string> = {
  'yandex.cloud.iam.v1.IamTokenService': 'iam.api.cloud.yandex.net:443',
  'yandex.cloud.iam.v1.ServiceAccountService': 'iam.api.cloud.yandex.net:443',
  'yandex.cloud.logging.v1.LogReadingService': 'reader.logging.yandexcloud.net:443',
  'yandex.cloud.logging.v1.LogGroupService': 'logging.api.cloud.yandex.net:443',
  'yandex.cloud.operation.OperationService': 'operation.api.cloud.yandex.net:443',
  'yandex.cloud.serverless.functions.v1.FunctionService': 'serverless-functions.api.cloud.yandex.net:443',
  'yandex.cloud.serverless.apigateway.v1.ApiGatewayService': 'serverless-apigateway.api.cloud.yandex.net:443',
  'speechkit.tts.v3.Synthesizer': 'tts.api.cloud.yandex.net:443',
  // Feel free to add endpoints via PR.
  // You can always pass custom endpoint as second argument to session.createClient().
};
