// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_sqlserver_v1_user_service_pb = require('../../../../../yandex/cloud/mdb/sqlserver/v1/user_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_sqlserver_v1_user_pb = require('../../../../../yandex/cloud/mdb/sqlserver/v1/user_pb.js');

function serialize_yandex_cloud_mdb_sqlserver_v1_CreateUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_CreateUserRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_DeleteUserRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_GetUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_GetUserRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_GrantUserPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.GrantUserPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.GrantUserPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_GrantUserPermissionRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.GrantUserPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_ListUsersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_ListUsersRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_ListUsersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_ListUsersResponse(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_RevokeUserPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.RevokeUserPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.RevokeUserPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_RevokeUserPermissionRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.RevokeUserPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_service_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_UpdateUserRequest(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_service_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_sqlserver_v1_User(arg) {
  if (!(arg instanceof yandex_cloud_mdb_sqlserver_v1_user_pb.User)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.sqlserver.v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_sqlserver_v1_User(buffer_arg) {
  return yandex_cloud_mdb_sqlserver_v1_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing SQL Server users.
var UserServiceService = exports.UserServiceService = {
  // Returns the specified SQL Server user.
//
// To get the list of available SQL Server users, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.GetUserRequest,
    responseType: yandex_cloud_mdb_sqlserver_v1_user_pb.User,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_GetUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_GetUserRequest,
    responseSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_User,
    responseDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_User,
  },
  // Retrieves a list of SQL Server users in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersRequest,
    responseType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.ListUsersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_ListUsersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_ListUsersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_ListUsersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_ListUsersResponse,
  },
  // Creates an SQL Server user in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.CreateUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_CreateUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_CreateUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Modifies the specified SQL Server user.
update: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.UpdateUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_UpdateUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_UpdateUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified SQL Server user.
delete: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.DeleteUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_DeleteUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_DeleteUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Grants a permission to the specified SQL Server user.
grantPermission: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/GrantPermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.GrantUserPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_GrantUserPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_GrantUserPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Revokes a permission from the specified SQL Server user.
revokePermission: {
    path: '/yandex.cloud.mdb.sqlserver.v1.UserService/RevokePermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_sqlserver_v1_user_service_pb.RevokeUserPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_sqlserver_v1_RevokeUserPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_sqlserver_v1_RevokeUserPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
