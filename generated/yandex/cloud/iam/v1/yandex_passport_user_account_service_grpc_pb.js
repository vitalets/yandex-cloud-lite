// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_yandex_passport_user_account_service_pb = require('../../../../yandex/cloud/iam/v1/yandex_passport_user_account_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_iam_v1_user_account_pb = require('../../../../yandex/cloud/iam/v1/user_account_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_GetUserAccountByLoginRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetUserAccountByLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetUserAccountByLoginRequest(buffer_arg) {
  return yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_UserAccount(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_user_account_pb.UserAccount)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.UserAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_UserAccount(buffer_arg) {
  return yandex_cloud_iam_v1_user_account_pb.UserAccount.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing YandexPassportUserAccount resources.
var YandexPassportUserAccountServiceService = exports.YandexPassportUserAccountServiceService = {
  // Returns the specified YandexPassportUserAccount resource.
getByLogin: {
    path: '/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_yandex_passport_user_account_service_pb.GetUserAccountByLoginRequest,
    responseType: yandex_cloud_iam_v1_user_account_pb.UserAccount,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetUserAccountByLoginRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetUserAccountByLoginRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_UserAccount,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_UserAccount,
  },
};

exports.YandexPassportUserAccountServiceClient = grpc.makeGenericClientConstructor(YandexPassportUserAccountServiceService);
