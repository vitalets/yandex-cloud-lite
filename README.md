# yandex-cloud-lite
Alternative implementation of [yandex-cloud SDK](https://github.com/yandex-cloud/nodejs-sdk) for Node.js.

## Motivation
The main reason is that you can access any Yandex Cloud services as soon as proto files apper in [cloudapi repository](https://github.com/yandex-cloud/cloudapi).

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
  const functions = await client.list({ folderId: '<your_folder_id>' });
  console.log(functions);
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
