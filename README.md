# yandex-cloud-lite
Минимальный Node.js клиент для доступа к API сервисов Yandex Cloud по GRPC.

## Зачем
Отличия от официального клиента [nodejs-sdk](https://github.com/yandex-cloud/nodejs-sdk):

* можно работать с любыми сервисами, для которых есть  [proto-файлы](https://github.com/yandex-cloud/cloudapi). Например, API Gateway ([#25](https://github.com/yandex-cloud/nodejs-sdk/issues/25)) и Cloud logging ([#34](https://github.com/yandex-cloud/nodejs-sdk/issues/34))

* вместо устаревшего пакета [grpc](https://www.npmjs.com/package/grpc#nodejs-grpc-library) используется [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) (см. [#18](https://github.com/yandex-cloud/nodejs-sdk/issues/18))

* для генерации js/ts вместо [protobufjs](https://github.com/protobufjs/protobuf.js) используется [google-protobuf](https://github.com/protocolbuffers/protobuf/tree/master/js). Обе либы не без изъянов, но есть [мнение]((https://github.com/protobufjs/protobuf.js/issues/1327)), что protobufjs умирает (хотя в комментах не все с этим согласны)

* нет зависимости от aws-sdk (см. [#30](https://github.com/yandex-cloud/nodejs-sdk/issues/18))

## Установка
```
npm i yandex-cloud-lite
```

## Пример использования
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

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
