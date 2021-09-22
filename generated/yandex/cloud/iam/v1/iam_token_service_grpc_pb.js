// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_iam_token_service_pb = require('../../../../yandex/cloud/iam/v1/iam_token_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_CreateIamTokenForServiceAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateIamTokenForServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateIamTokenForServiceAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_CreateIamTokenRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateIamTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateIamTokenRequest(buffer_arg) {
  return yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_CreateIamTokenResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateIamTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateIamTokenResponse(buffer_arg) {
  return yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing IAM tokens.
var IamTokenServiceService = exports.IamTokenServiceService = {
  // Creates an IAM token for the specified identity.
create: {
    path: '/yandex.cloud.iam.v1.IamTokenService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenRequest,
    responseType: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_CreateIamTokenRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_CreateIamTokenRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_CreateIamTokenResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_CreateIamTokenResponse,
  },
  // Create iam token for service account.
createForServiceAccount: {
    path: '/yandex.cloud.iam.v1.IamTokenService/CreateForServiceAccount',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenForServiceAccountRequest,
    responseType: yandex_cloud_iam_v1_iam_token_service_pb.CreateIamTokenResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_CreateIamTokenForServiceAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_CreateIamTokenForServiceAccountRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_CreateIamTokenResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_CreateIamTokenResponse,
  },
};

exports.IamTokenServiceClient = grpc.makeGenericClientConstructor(IamTokenServiceService);
