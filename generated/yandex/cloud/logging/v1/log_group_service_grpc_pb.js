// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_logging_v1_log_group_service_pb = require('../../../../yandex/cloud/logging/v1/log_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_logging_v1_log_group_pb = require('../../../../yandex/cloud/logging/v1/log_group_pb.js');
var yandex_cloud_logging_v1_log_resource_pb = require('../../../../yandex/cloud/logging/v1/log_resource_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_access_ListAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_ListAccessBindingsResponse(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsResponse(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_SetAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.SetAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.SetAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_SetAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.SetAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_UpdateAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.UpdateAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.UpdateAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_UpdateAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.UpdateAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_CreateLogGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.CreateLogGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_CreateLogGroupRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_DeleteLogGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.DeleteLogGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_DeleteLogGroupRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_GetLogGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.GetLogGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_GetLogGroupRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_GetLogGroupStatsRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.GetLogGroupStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_GetLogGroupStatsRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_GetLogGroupStatsResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.GetLogGroupStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_GetLogGroupStatsResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListLogGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListLogGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListLogGroupsRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListLogGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListLogGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListLogGroupsResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListOperationsRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListOperationsResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListResourcesRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListResourcesRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_ListResourcesResponse(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.ListResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_ListResourcesResponse(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_LogGroup(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_pb.LogGroup)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.LogGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_LogGroup(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_pb.LogGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_logging_v1_UpdateLogGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.logging.v1.UpdateLogGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_logging_v1_UpdateLogGroupRequest(buffer_arg) {
  return yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing log groups.
var LogGroupServiceService = exports.LogGroupServiceService = {
  // Returns the specified log group.
//
// To get the list of all available log groups, make a [List] request.
get: {
    path: '/yandex.cloud.logging.v1.LogGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest,
    responseType: yandex_cloud_logging_v1_log_group_pb.LogGroup,
    requestSerialize: serialize_yandex_cloud_logging_v1_GetLogGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_GetLogGroupRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_LogGroup,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_LogGroup,
  },
  // Returns stats for the specified log group.
stats: {
    path: '/yandex.cloud.logging.v1.LogGroupService/Stats',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest,
    responseType: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_GetLogGroupStatsRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_GetLogGroupStatsRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_GetLogGroupStatsResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_GetLogGroupStatsResponse,
  },
  // Retrieves the list of log groups in the specified folder.
list: {
    path: '/yandex.cloud.logging.v1.LogGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest,
    responseType: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_ListLogGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_ListLogGroupsRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_ListLogGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_ListLogGroupsResponse,
  },
  // Creates a log group in the specified folder.
create: {
    path: '/yandex.cloud.logging.v1.LogGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_logging_v1_CreateLogGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_CreateLogGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified log group.
update: {
    path: '/yandex.cloud.logging.v1.LogGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_logging_v1_UpdateLogGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_UpdateLogGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified log group.
delete: {
    path: '/yandex.cloud.logging.v1.LogGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_logging_v1_DeleteLogGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_DeleteLogGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the resources (type and IDs) in the specified log group.
listResources: {
    path: '/yandex.cloud.logging.v1.LogGroupService/ListResources',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest,
    responseType: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_ListResourcesRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_ListResourcesRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_ListResourcesResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_ListResourcesResponse,
  },
  // Lists operations for the specified log group.
listOperations: {
    path: '/yandex.cloud.logging.v1.LogGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest,
    responseType: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse,
    requestSerialize: serialize_yandex_cloud_logging_v1_ListOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_logging_v1_ListOperationsRequest,
    responseSerialize: serialize_yandex_cloud_logging_v1_ListOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_logging_v1_ListOperationsResponse,
  },
  // Lists existing access bindings for the specified log group.
listAccessBindings: {
    path: '/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified log group.
setAccessBindings: {
    path: '/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified log group.
updateAccessBindings: {
    path: '/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.LogGroupServiceClient = grpc.makeGenericClientConstructor(LogGroupServiceService);
