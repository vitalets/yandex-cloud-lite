// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_operation_operation_service_pb = require('../../../yandex/cloud/operation/operation_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_CancelOperationRequest(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_service_pb.CancelOperationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.operation.CancelOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_CancelOperationRequest(buffer_arg) {
  return yandex_cloud_operation_operation_service_pb.CancelOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_operation_GetOperationRequest(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_service_pb.GetOperationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.operation.GetOperationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_GetOperationRequest(buffer_arg) {
  return yandex_cloud_operation_operation_service_pb.GetOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing operations for asynchronous API requests.
var OperationServiceService = exports.OperationServiceService = {
  // Returns the specified Operation resource.
get: {
    path: '/yandex.cloud.operation.OperationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_operation_operation_service_pb.GetOperationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_operation_GetOperationRequest,
    requestDeserialize: deserialize_yandex_cloud_operation_GetOperationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Cancels the specified operation.
cancel: {
    path: '/yandex.cloud.operation.OperationService/Cancel',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_operation_operation_service_pb.CancelOperationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_operation_CancelOperationRequest,
    requestDeserialize: deserialize_yandex_cloud_operation_CancelOperationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.OperationServiceClient = grpc.makeGenericClientConstructor(OperationServiceService);
