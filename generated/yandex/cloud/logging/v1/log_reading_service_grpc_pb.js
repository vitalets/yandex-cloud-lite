// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_logging_v1_log_reading_service_pb = require('../../../../yandex/cloud/logging/v1/log_reading_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_logging_v1_log_entry_pb = require('../../../../yandex/cloud/logging/v1/log_entry_pb.js');

function serialize_yandex_cloud_logging_v1_ReadRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ReadRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ReadResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ReadResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for reading from log groups. To make a request use `reader.logging.yandexcloud.net`.
var LogReadingServiceService = exports.LogReadingServiceService = {
  // Read log entries from the specified log group.
read: {
    path: '/yandex.cloud.logging.v1.LogReadingService/Read',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest,
    responseType: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_ReadRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_ReadRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_ReadResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_ReadResponse,
  },
};

exports.LogReadingServiceClient = grpc.makeGenericClientConstructor(LogReadingServiceService);
