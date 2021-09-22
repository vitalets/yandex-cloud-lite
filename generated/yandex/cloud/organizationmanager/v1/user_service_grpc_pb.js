// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_organizationmanager_v1_user_service_pb = require('../../../../yandex/cloud/organizationmanager/v1/user_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_oauth_claims_pb = require('../../../../yandex/cloud/oauth/claims_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_DeleteMembershipRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.DeleteMembershipRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_DeleteMembershipRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListMembersRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListMembersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListMembersRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListMembersResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListMembersResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Organization users.
var UserServiceService = exports.UserServiceService = {
  // List organization active members.
listMembers: {
    path: '/yandex.cloud.organizationmanager.v1.UserService/ListMembers',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersRequest,
    responseType: yandex_cloud_organizationmanager_v1_user_service_pb.ListMembersResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_ListMembersRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListMembersRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_ListMembersResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListMembersResponse,
  },
  // Delete user membership.
deleteMembership: {
    path: '/yandex.cloud.organizationmanager.v1.UserService/DeleteMembership',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_user_service_pb.DeleteMembershipRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_DeleteMembershipRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_DeleteMembershipRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
