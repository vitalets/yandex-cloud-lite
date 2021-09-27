# yandex-cloud-lite
Minimal GRPC client to access Yandex Cloud services from Node.js.

## Motivation
The main reason is that you can use GRPC API of any Yandex Cloud service as soon as proto files appear in [official repository](https://github.com/yandex-cloud/cloudapi).

## Installation
```
npm i yandex-cloud-lite
```

## Usage
```ts
import { Session } from 'yandex-cloud-lite';
import { FunctionServiceClient } from 'yandex-cloud-lite/generated/yandex/cloud/serverless/functions/v1/function_service_grpc_pb';

listFunctions();

async function listFunctions() {
  const session = new Session({ oauthToken: '<your_oauth_token>' });
  const client = session.createClient(FunctionServiceClient);
  const res = await client.list({ folderId: '<your_folder_id>' });
  console.log(res.toObject());
}

/*
OUTPUT:
{
  functionsList: [
    {
      id: 'xxx',
      folderId: 'yyy',
      createdAt: [Object],
      name: 'test-fn',
      description: 'Test function',
      labelsMap: [],
      logGroupId: 'zzz',
      httpInvokeUrl: 'https://functions.yandexcloud.net/xxx',
      status: 2
    },
    ...
  ],
  nextPageToken: ''
}
*/
```

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
