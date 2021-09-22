// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_role_service_pb = require('../../../../yandex/cloud/iam/v1/role_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_iam_v1_role_pb = require('../../../../yandex/cloud/iam/v1/role_pb.js');

function serialize_yandex_cloud_iam_v1_GetRoleRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_role_service_pb.GetRoleRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetRoleRequest(buffer_arg) {
  return yandex_cloud_iam_v1_role_service_pb.GetRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListRolesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_role_service_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListRolesRequest(buffer_arg) {
  return yandex_cloud_iam_v1_role_service_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListRolesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_role_service_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListRolesResponse(buffer_arg) {
  return yandex_cloud_iam_v1_role_service_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_Role(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_role_pb.Role)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.Role');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_Role(buffer_arg) {
  return yandex_cloud_iam_v1_role_pb.Role.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Role resources.
var RoleServiceService = exports.RoleServiceService = {
  // Returns the specified Role resource.
//
// To get the list of available Role resources, make a [List] request.
get: {
    path: '/yandex.cloud.iam.v1.RoleService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_role_service_pb.GetRoleRequest,
    responseType: yandex_cloud_iam_v1_role_pb.Role,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetRoleRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetRoleRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_Role,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_Role,
  },
  // Retrieves the list of Role resources.
list: {
    path: '/yandex.cloud.iam.v1.RoleService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_role_service_pb.ListRolesRequest,
    responseType: yandex_cloud_iam_v1_role_service_pb.ListRolesResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListRolesRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListRolesRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListRolesResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListRolesResponse,
  },
};

exports.RoleServiceClient = grpc.makeGenericClientConstructor(RoleServiceService);
