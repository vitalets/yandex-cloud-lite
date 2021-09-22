// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_disk_service_pb = require('../../../../yandex/cloud/compute/v1/disk_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_disk_pb = require('../../../../yandex/cloud/compute/v1/disk_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Disk(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_pb.Disk)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Disk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Disk(buffer_arg) {
  return yandex_cloud_compute_v1_disk_pb.Disk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDisksRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDisksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDisksRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDisksResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDisksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDisksResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Disk resources.
var DiskServiceService = exports.DiskServiceService = {
  // Returns the specified Disk resource.
//
// To get the list of available Disk resources, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.DiskService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest,
    responseType: yandex_cloud_compute_v1_disk_pb.Disk,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetDiskRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Disk,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Disk,
  },
  // Retrieves the list of Disk resources in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.DiskService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest,
    responseType: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDisksRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDisksRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDisksResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDisksResponse,
  },
  // Creates a disk in the specified folder.
//
// You can create an empty disk or restore it from a snapshot or an image.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.compute.v1.DiskService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateDiskRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified disk.
update: {
    path: '/yandex.cloud.compute.v1.DiskService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateDiskRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified disk.
//
// Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete
// any snapshots or images previously made from the disk. You must delete snapshots and images separately.
//
// It is not possible to delete a disk that is attached to an instance.
delete: {
    path: '/yandex.cloud.compute.v1.DiskService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteDiskRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified disk.
listOperations: {
    path: '/yandex.cloud.compute.v1.DiskService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest,
    responseType: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDiskOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDiskOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskOperationsResponse,
  },
};

exports.DiskServiceClient = grpc.makeGenericClientConstructor(DiskServiceService);
