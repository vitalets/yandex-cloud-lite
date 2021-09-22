// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_user_account_service_pb = require('../../../../yandex/cloud/iam/v1/user_account_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_iam_v1_user_account_pb = require('../../../../yandex/cloud/iam/v1/user_account_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_GetUserAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetUserAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetUserAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing user accounts. Currently applicable only for [Yandex.Passport accounts](/docs/iam/concepts/#passport).
var UserAccountServiceService = exports.UserAccountServiceService = {
  // Returns the specified UserAccount resource.
get: {
    path: '/yandex.cloud.iam.v1.UserAccountService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_user_account_service_pb.GetUserAccountRequest,
    responseType: yandex_cloud_iam_v1_user_account_pb.UserAccount,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetUserAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetUserAccountRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_UserAccount,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_UserAccount,
  },
};

exports.UserAccountServiceClient = grpc.makeGenericClientConstructor(UserAccountServiceService);
