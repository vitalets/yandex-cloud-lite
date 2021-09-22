// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_apploadbalancer_v1_backend_group_service_pb = require('../../../../yandex/cloud/apploadbalancer/v1/backend_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_apploadbalancer_v1_backend_group_pb = require('../../../../yandex/cloud/apploadbalancer/v1/backend_group_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_apploadbalancer_v1_AddBackendRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.AddBackendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_AddBackendRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_BackendGroup(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.BackendGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_BackendGroup(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_CreateBackendGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.CreateBackendGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_CreateBackendGroupRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_DeleteBackendGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.DeleteBackendGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_DeleteBackendGroupRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetBackendGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetBackendGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetBackendGroupRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListBackendGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListBackendGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListBackendGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_RemoveBackendRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.RemoveBackendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_RemoveBackendRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateBackendGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateBackendGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateBackendGroupRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateBackendRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateBackendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateBackendRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing backend groups.
var BackendGroupServiceService = exports.BackendGroupServiceService = {
  // Returns the specified backend group.
//
// To get the list of all available backend groups, make a [List] request.
get: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest,
    responseType: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetBackendGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetBackendGroupRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_BackendGroup,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_BackendGroup,
  },
  // Lists backend groups in the specified folder.
list: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest,
    responseType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupsResponse,
  },
  // Creates a backend group in the specified folder.
create: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_CreateBackendGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_CreateBackendGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified backend group.
update: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateBackendGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateBackendGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified backend group.
delete: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_DeleteBackendGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_DeleteBackendGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds backends to the specified backend group.
addBackend: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_AddBackendRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_AddBackendRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes backends from the specified backend group.
removeBackend: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_RemoveBackendRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_RemoveBackendRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified backend.
updateBackend: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateBackendRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateBackendRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified backend group.
listOperations: {
    path: '/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest,
    responseType: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListBackendGroupOperationsResponse,
  },
};

exports.BackendGroupServiceClient = grpc.makeGenericClientConstructor(BackendGroupServiceService);
