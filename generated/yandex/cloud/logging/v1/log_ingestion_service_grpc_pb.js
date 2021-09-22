// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_logging_v1_log_ingestion_service_pb = require('../../../../yandex/cloud/logging/v1/log_ingestion_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
var yandex_cloud_logging_v1_log_entry_pb = require('../../../../yandex/cloud/logging/v1/log_entry_pb.js');
var yandex_cloud_logging_v1_log_resource_pb = require('../../../../yandex/cloud/logging/v1/log_resource_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_logging_v1_WriteRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.WriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_WriteRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_WriteResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.WriteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_WriteResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for writing to log groups. To make a request use `ingester.logging.yandexcloud.net`.
var LogIngestionServiceService = exports.LogIngestionServiceService = {
  // Write log entries to specified destination.
write: {
    path: '/yandex.cloud.logging.v1.LogIngestionService/Write',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest,
    responseType: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_WriteRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_WriteRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_WriteResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_WriteResponse,
  },
};

exports.LogIngestionServiceClient = grpc.makeGenericClientConstructor(LogIngestionServiceService);
