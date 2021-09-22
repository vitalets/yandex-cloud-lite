// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mysql_v1alpha_user_service_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/user_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_user_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/user_pb.js');

function serialize_yandex_cloud_mdb_mysql_v1alpha_CreateUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateUserRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteUserRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_GetUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GetUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GetUserRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_GrantUserPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GrantUserPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GrantUserPermissionRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GrantUserPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_RevokeUserPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.RevokeUserPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_RevokeUserPermissionRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.RevokeUserPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_UpdateUserRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_service_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_UpdateUserRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_service_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_User(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_user_pb.User)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_User(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing MySQL users.
var UserServiceService = exports.UserServiceService = {
  // Returns the specified MySQL user.
//
// To get the list of available MySQL users, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GetUserRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_user_pb.User,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GetUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GetUserRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_User,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_User,
  },
  // Retrieves a list of MySQL users in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.ListUsersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListUsersResponse,
  },
  // Creates a MySQL user in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.CreateUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_CreateUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Modifies the specified MySQL user.
update: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.UpdateUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_UpdateUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_UpdateUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified MySQL user.
delete: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.DeleteUserRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteUserRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteUserRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Grants a permission to the specified MySQL user.
grantPermission: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/GrantPermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.GrantUserPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GrantUserPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GrantUserPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Revokes a permission from the specified MySQL user.
revokePermission: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.UserService/RevokePermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_user_service_pb.RevokeUserPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_RevokeUserPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_RevokeUserPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
