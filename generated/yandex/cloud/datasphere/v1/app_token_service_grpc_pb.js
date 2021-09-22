// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datasphere_v1_app_token_service_pb = require('../../../../yandex/cloud/datasphere/v1/app_token_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_AppTokenValidateRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.AppTokenValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_AppTokenValidateRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing app tokens.
var AppTokenServiceService = exports.AppTokenServiceService = {
  // Validates app token.
validate: {
    path: '/yandex.cloud.datasphere.v1.AppTokenService/Validate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_app_token_service_pb.AppTokenValidateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_AppTokenValidateRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_AppTokenValidateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AppTokenServiceClient = grpc.makeGenericClientConstructor(AppTokenServiceService);
