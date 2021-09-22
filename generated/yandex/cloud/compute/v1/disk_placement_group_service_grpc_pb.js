// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_disk_placement_group_service_pb = require('../../../../yandex/cloud/compute/v1/disk_placement_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_disk_pb = require('../../../../yandex/cloud/compute/v1/disk_pb.js');
var yandex_cloud_compute_v1_disk_placement_group_pb = require('../../../../yandex/cloud/compute/v1/disk_placement_group_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateDiskPlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateDiskPlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateDiskPlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteDiskPlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteDiskPlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteDiskPlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DiskPlacementGroup(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DiskPlacementGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DiskPlacementGroup(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetDiskPlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetDiskPlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetDiskPlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupDisksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupDisksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskPlacementGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateDiskPlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateDiskPlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateDiskPlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing DiskPlacementGroup resources.
var DiskPlacementGroupServiceService = exports.DiskPlacementGroupServiceService = {
  // Returns the specified placement group.
get: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest,
    responseType: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetDiskPlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetDiskPlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_DiskPlacementGroup,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_DiskPlacementGroup,
  },
  // Retrieves the list of placement groups in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest,
    responseType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupsResponse,
  },
  // Creates a placement group in the specified folder.
create: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateDiskPlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateDiskPlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified placement group.
update: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateDiskPlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateDiskPlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified placement group.
delete: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteDiskPlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteDiskPlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists disks for the specified placement group.
listDisks: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest,
    responseType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupDisksResponse,
  },
  // Lists operations for the specified placement group.
listOperations: {
    path: '/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest,
    responseType: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskPlacementGroupOperationsResponse,
  },
};

exports.DiskPlacementGroupServiceClient = grpc.makeGenericClientConstructor(DiskPlacementGroupServiceService);
