// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_raw_logs_service_pb = require('../../../../yandex/cloud/cdn/v1/raw_logs_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_cdn_v1_raw_logs_pb = require('../../../../yandex/cloud/cdn/v1/raw_logs_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_ActivateRawLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ActivateRawLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ActivateRawLogsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_DeactivateRawLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.DeactivateRawLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_DeactivateRawLogsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetRawLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetRawLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetRawLogsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetRawLogsResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetRawLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetRawLogsResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_UpdateRawLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.UpdateRawLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_UpdateRawLogsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


var RawLogsServiceService = exports.RawLogsServiceService = {
  activate: {
    path: '/yandex.cloud.cdn.v1.RawLogsService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ActivateRawLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ActivateRawLogsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  deactivate: {
    path: '/yandex.cloud.cdn.v1.RawLogsService/Deactivate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_DeactivateRawLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_DeactivateRawLogsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  get: {
    path: '/yandex.cloud.cdn.v1.RawLogsService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest,
    responseType: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_GetRawLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_GetRawLogsRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_GetRawLogsResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_GetRawLogsResponse,
  },
  update: {
    path: '/yandex.cloud.cdn.v1.RawLogsService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_UpdateRawLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_UpdateRawLogsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.RawLogsServiceClient = grpc.makeGenericClientConstructor(RawLogsServiceService);
