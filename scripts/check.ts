import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';
import 'dotenv/config';

import { Session } from '../src';

// import { IamTokenServiceClient } from '../generated/yandex/cloud/iam/v1/iam_token_service_grpc_pb';
// import { CreateIamTokenRequest, CreateIamTokenResponse } from '../generated/yandex/cloud/iam/v1/iam_token_service_pb';

import { FunctionServiceClient } from '../generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';
import { ListFunctionsRequest, ListFunctionsResponse } from '../generated/yandex/cloud/serverless/functions/v1/function_service_pb';

import { LogReadingServiceClient } from '../generated/yandex/cloud/logging/v1/log_reading_service_grpc_pb';
import { ReadRequest, Criteria } from '../generated/yandex/cloud/logging/v1/log_reading_service_pb';

const { YC_OAUTH_TOKEN = '', LOG_GROUP_ID = '', FOLDER_ID = '' } = process.env;

main();

type x = ListFunctionsRequest.AsObject

async function main() {
  const session = new Session({ oauthToken: YC_OAUTH_TOKEN });
  //const iamToken = await session.getIamToken();
  //console.log(iamToken);

  //const iamToken = await session.getIamToken();
  //console.log(iamToken);

  // const fnClient = session.createClient(FunctionServiceClient);
  // const functions = await fnClient.list({ folderId: FOLDER_ID });
  // console.log(functions);

  const logsClient = session.createClient(LogReadingServiceClient);
  const req = new ReadRequest();
  const criteria = new Criteria();
  criteria.setPageSize(5);
  criteria.setLogGroupId(LOG_GROUP_ID);
  req.setCriteria(criteria);
  const logs = await logsClient.read(req);
  console.log(logs);
}


// async function getFunctionsList(iamToken: string) {
//   const endpoint = 'serverless-functions.api.cloud.yandex.net:443';
//   const credentials = createAuthCredentials(iamToken);
//   const client = new FunctionServiceClient(endpoint, credentials);
//   const req = new ListFunctionsRequest();
//   req.setFolderId(FOLDER_ID);
//   const metadata = new grpc.Metadata();
//   metadata.set('authorization', 'Bearer ' + iamToken);
//   const res = await promisify(client.list).call(client, req) as ListFunctionsResponse;
//   return res.toObject();
// }

// async function getLogs(iamToken: string) {
//   const endpoint = 'reader.logging.yandexcloud.net:443';
//   const credentials = createAuthCredentials(iamToken);
//   const client = new LogReadingServiceClient(endpoint, credentials);
//   const req = new ReadRequest();
//   const criteria = new Criteria();
//   criteria.setPageSize(5);
//   criteria.setLogGroupId(LOG_GROUP_ID);
//   req.setCriteria(criteria);
//   const res = await promisify(client.read).call(client, req) as ReadResponse;
//   return res.toObject().entriesList.map(l => {
//     return [
//       l.timestamp && new Date(l.timestamp.seconds * 1000 + l.timestamp.nanos / (1000 * 1000)).toISOString(),
//       l.message
//     ].join(' ');
//   });
// }

// function createAuthCredentials(iamToken: string) {
//   return grpc.credentials.combineChannelCredentials(
//     grpc.credentials.createSsl(),
//     grpc.credentials.createFromMetadataGenerator((_, cb) => cb(null, createAuthMetadata(iamToken))),
//   );
// }

// function createAuthMetadata(iamToken: string) {
//   const metadata = new grpc.Metadata();
//   metadata.set('authorization', 'Bearer ' + iamToken);
//   return metadata;
// }

