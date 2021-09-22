// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_host_group_service_pb = require('../../../../yandex/cloud/compute/v1/host_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_instance_pb = require('../../../../yandex/cloud/compute/v1/instance_pb.js');
var yandex_cloud_compute_v1_host_group_pb = require('../../../../yandex/cloud/compute/v1/host_group_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateHostGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateHostGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateHostGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteHostGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteHostGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteHostGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetHostGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetHostGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetHostGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_HostGroup(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_pb.HostGroup)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.HostGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_HostGroup(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_pb.HostGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupHostsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupHostsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupInstancesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupInstancesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostGroupsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateHostGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateHostGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateHostGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing groups of dedicated hosts.
var HostGroupServiceService = exports.HostGroupServiceService = {
  // Returns the specified host group.
get: {
    path: '/yandex.cloud.compute.v1.HostGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest,
    responseType: yandex_cloud_compute_v1_host_group_pb.HostGroup,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetHostGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetHostGroupRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_HostGroup,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_HostGroup,
  },
  // Retrieves the list of host groups in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.HostGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest,
    responseType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupsResponse,
  },
  // Creates a host group in the specified folder.
create: {
    path: '/yandex.cloud.compute.v1.HostGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateHostGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateHostGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified host group.
update: {
    path: '/yandex.cloud.compute.v1.HostGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateHostGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateHostGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified host group.
delete: {
    path: '/yandex.cloud.compute.v1.HostGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteHostGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteHostGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified host group.
listOperations: {
    path: '/yandex.cloud.compute.v1.HostGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest,
    responseType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupOperationsResponse,
  },
  // Lists instances that belongs to the specified host group.
listInstances: {
    path: '/yandex.cloud.compute.v1.HostGroupService/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest,
    responseType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupInstancesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupInstancesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupInstancesResponse,
  },
  // Lists hosts that belongs to the specified host group.
listHosts: {
    path: '/yandex.cloud.compute.v1.HostGroupService/ListHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest,
    responseType: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupHostsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListHostGroupHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListHostGroupHostsResponse,
  },
};

exports.HostGroupServiceClient = grpc.makeGenericClientConstructor(HostGroupServiceService);
