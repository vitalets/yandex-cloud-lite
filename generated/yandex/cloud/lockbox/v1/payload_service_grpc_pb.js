// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_lockbox_v1_payload_service_pb = require('../../../../yandex/cloud/lockbox/v1/payload_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_lockbox_v1_payload_pb = require('../../../../yandex/cloud/lockbox/v1/payload_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_lockbox_v1_GetPayloadRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.GetPayloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_GetPayloadRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_Payload(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_payload_pb.Payload)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.Payload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_Payload(buffer_arg) {
  return yandex_cloud_lockbox_v1_payload_pb.Payload.deserializeBinary(new Uint8Array(buffer_arg));
}


// Set of methods to access payload of secrets.
var PayloadServiceService = exports.PayloadServiceService = {
  // Returns the payload of the specified secret.
//
// To get the list of all available secrets, make a [SecretService.List] request.
get: {
    path: '/yandex.cloud.lockbox.v1.PayloadService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest,
    responseType: yandex_cloud_lockbox_v1_payload_pb.Payload,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_GetPayloadRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_GetPayloadRequest,
    responseSerialize: serialize_yandex_cloud_lockbox_v1_Payload,
    responseDeserialize: deserialize_yandex_cloud_lockbox_v1_Payload,
  },
};

exports.PayloadServiceClient = grpc.makeGenericClientConstructor(PayloadServiceService);
