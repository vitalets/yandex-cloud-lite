// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_filesystem_service_pb = require('../../../../yandex/cloud/compute/v1/filesystem_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_filesystem_pb = require('../../../../yandex/cloud/compute/v1/filesystem_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Filesystem(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_pb.Filesystem)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Filesystem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Filesystem(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_pb.Filesystem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListFilesystemOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListFilesystemOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListFilesystemOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListFilesystemOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListFilesystemOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListFilesystemOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListFilesystemsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListFilesystemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListFilesystemsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListFilesystemsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListFilesystemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListFilesystemsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing filesystems.
var FilesystemServiceService = exports.FilesystemServiceService = {
  // Returns the specified filesystem.
//
// To get the list of available filesystems, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.FilesystemService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest,
    responseType: yandex_cloud_compute_v1_filesystem_pb.Filesystem,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Filesystem,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Filesystem,
  },
  // Lists filesystems in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.FilesystemService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest,
    responseType: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListFilesystemsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListFilesystemsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListFilesystemsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListFilesystemsResponse,
  },
  // Creates a filesystem in the specified folder.
create: {
    path: '/yandex.cloud.compute.v1.FilesystemService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified filesystem.
update: {
    path: '/yandex.cloud.compute.v1.FilesystemService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified filesystem.
//
// Deleting a filesystem removes its data permanently and is irreversible.
//
// It is not possible to delete a filesystem that is attached to an instance.
delete: {
    path: '/yandex.cloud.compute.v1.FilesystemService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified filesystem.
listOperations: {
    path: '/yandex.cloud.compute.v1.FilesystemService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest,
    responseType: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListFilesystemOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListFilesystemOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListFilesystemOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListFilesystemOperationsResponse,
  },
};

exports.FilesystemServiceClient = grpc.makeGenericClientConstructor(FilesystemServiceService);
