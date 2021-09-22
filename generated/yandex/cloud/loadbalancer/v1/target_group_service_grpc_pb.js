// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_loadbalancer_v1_target_group_service_pb = require('../../../../yandex/cloud/loadbalancer/v1/target_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_loadbalancer_v1_target_group_pb = require('../../../../yandex/cloud/loadbalancer/v1/target_group_pb.js');

function serialize_yandex_cloud_loadbalancer_v1_AddTargetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.AddTargetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.AddTargetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_AddTargetsRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.AddTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_CreateTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.CreateTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_CreateTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_DeleteTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.DeleteTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_DeleteTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_GetTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.GetTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.GetTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_GetTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.GetTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListTargetGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListTargetGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListTargetGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsResponse(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_RemoveTargetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.RemoveTargetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.RemoveTargetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_RemoveTargetsRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.RemoveTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_TargetGroup(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_pb.TargetGroup)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.TargetGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_TargetGroup(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_pb.TargetGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_UpdateTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.UpdateTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_UpdateTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing TargetGroup resources.
var TargetGroupServiceService = exports.TargetGroupServiceService = {
  // Returns the specified TargetGroup resource.
get: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.GetTargetGroupRequest,
    responseType: yandex_cloud_loadbalancer_v1_target_group_pb.TargetGroup,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_GetTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_GetTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_TargetGroup,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_TargetGroup,
  },
  // Retrieves the list of TargetGroup resources in the specified folder.
list: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest,
    responseType: yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupsResponse,
  },
  // Creates a target group in the specified folder and adds the specified targets to it.
create: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_CreateTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_CreateTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified target group.
update: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_UpdateTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_UpdateTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified target group.
delete: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_DeleteTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_DeleteTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds targets to the target group.
addTargets: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/AddTargets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.AddTargetsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_AddTargetsRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_AddTargetsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes targets from the target group.
removeTargets: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/RemoveTargets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.RemoveTargetsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_RemoveTargetsRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_RemoveTargetsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified target group.
listOperations: {
    path: '/yandex.cloud.loadbalancer.v1.TargetGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest,
    responseType: yandex_cloud_loadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListTargetGroupOperationsResponse,
  },
};

exports.TargetGroupServiceClient = grpc.makeGenericClientConstructor(TargetGroupServiceService);
