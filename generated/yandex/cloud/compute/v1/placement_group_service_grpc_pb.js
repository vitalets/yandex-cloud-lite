// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_placement_group_service_pb = require('../../../../yandex/cloud/compute/v1/placement_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_instance_pb = require('../../../../yandex/cloud/compute/v1/instance_pb.js');
var yandex_cloud_compute_v1_placement_group_pb = require('../../../../yandex/cloud/compute/v1/placement_group_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreatePlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreatePlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreatePlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeletePlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeletePlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeletePlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetPlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetPlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetPlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListPlacementGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListPlacementGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListPlacementGroupsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_PlacementGroup(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_pb.PlacementGroup)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.PlacementGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_PlacementGroup(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_pb.PlacementGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdatePlacementGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdatePlacementGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdatePlacementGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing placement groups.
var PlacementGroupServiceService = exports.PlacementGroupServiceService = {
  // Returns the specified placement group.
//
// To get the list of all available placement groups, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest,
    responseType: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetPlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetPlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_PlacementGroup,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_PlacementGroup,
  },
  // Retrieves the list of placement groups in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest,
    responseType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupsResponse,
  },
  // Creates a placement group in the specified folder.
create: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreatePlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreatePlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified placement group.
update: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdatePlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdatePlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified placement group.
delete: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeletePlacementGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeletePlacementGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists instances for the specified placement group.
listInstances: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest,
    responseType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupInstancesResponse,
  },
  // Lists operations for the specified placement group.
listOperations: {
    path: '/yandex.cloud.compute.v1.PlacementGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest,
    responseType: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListPlacementGroupOperationsResponse,
  },
};

exports.PlacementGroupServiceClient = grpc.makeGenericClientConstructor(PlacementGroupServiceService);
