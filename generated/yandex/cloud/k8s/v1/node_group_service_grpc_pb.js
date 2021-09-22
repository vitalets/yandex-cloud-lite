// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_k8s_v1_node_group_service_pb = require('../../../../yandex/cloud/k8s/v1/node_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_k8s_v1_node_group_pb = require('../../../../yandex/cloud/k8s/v1/node_group_pb.js');
var yandex_cloud_k8s_v1_node_pb = require('../../../../yandex/cloud/k8s/v1/node_pb.js');
var yandex_cloud_k8s_v1_version_pb = require('../../../../yandex/cloud/k8s/v1/version_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_k8s_v1_CreateNodeGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.CreateNodeGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_CreateNodeGroupRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_DeleteNodeGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.DeleteNodeGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_DeleteNodeGroupRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_GetNodeGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.GetNodeGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_GetNodeGroupRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupNodesRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupNodesRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupNodesResponse(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupNodesResponse(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupsRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListNodeGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListNodeGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListNodeGroupsResponse(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_NodeGroup(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_pb.NodeGroup)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.NodeGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_NodeGroup(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_pb.NodeGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_UpdateNodeGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.UpdateNodeGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_UpdateNodeGroupRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing node groups.
var NodeGroupServiceService = exports.NodeGroupServiceService = {
  // Returns the specified node group.
//
// To get the list of available node group, make a [List] request.
get: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest,
    responseType: yandex_cloud_k8s_v1_node_group_pb.NodeGroup,
    requestSerialize: serialize_yandex_cloud_k8s_v1_GetNodeGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_GetNodeGroupRequest,
    responseSerialize: serialize_yandex_cloud_k8s_v1_NodeGroup,
    responseDeserialize: deserialize_yandex_cloud_k8s_v1_NodeGroup,
  },
  // Retrieves the list of node group in the specified Kubernetes cluster.
list: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest,
    responseType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse,
    requestSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupsRequest,
    responseSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupsResponse,
  },
  // Creates a node group in the specified Kubernetes cluster.
create: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_k8s_v1_CreateNodeGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_CreateNodeGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified node group.
update: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_k8s_v1_UpdateNodeGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_UpdateNodeGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified node group.
delete: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_k8s_v1_DeleteNodeGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_DeleteNodeGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified node group.
listOperations: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest,
    responseType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupOperationsResponse,
  },
  // Retrieves the list of nodes in the specified Kubernetes cluster.
listNodes: {
    path: '/yandex.cloud.k8s.v1.NodeGroupService/ListNodes',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest,
    responseType: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse,
    requestSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupNodesRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupNodesRequest,
    responseSerialize: serialize_yandex_cloud_k8s_v1_ListNodeGroupNodesResponse,
    responseDeserialize: deserialize_yandex_cloud_k8s_v1_ListNodeGroupNodesResponse,
  },
};

exports.NodeGroupServiceClient = grpc.makeGenericClientConstructor(NodeGroupServiceService);
