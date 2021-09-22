// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_vpc_v1_security_group_service_pb = require('../../../../yandex/cloud/vpc/v1/security_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_vpc_v1_security_group_pb = require('../../../../yandex/cloud/vpc/v1/security_group_pb.js');
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

function serialize_yandex_cloud_vpc_v1_CreateSecurityGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.CreateSecurityGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_CreateSecurityGroupRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_DeleteSecurityGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.DeleteSecurityGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_DeleteSecurityGroupRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetSecurityGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetSecurityGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetSecurityGroupRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSecurityGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSecurityGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSecurityGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSecurityGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSecurityGroupsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSecurityGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSecurityGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSecurityGroupsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_MoveSecurityGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.MoveSecurityGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_MoveSecurityGroupRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_SecurityGroup(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_pb.SecurityGroup)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.SecurityGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_SecurityGroup(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_pb.SecurityGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateSecurityGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRuleRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateSecurityGroupRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRuleRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRulesRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateSecurityGroupRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRulesRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SecurityGroupServiceService = exports.SecurityGroupServiceService = {
  get: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.GetSecurityGroupRequest,
    responseType: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetSecurityGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetSecurityGroupRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_SecurityGroup,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_SecurityGroup,
  },
  list: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsRequest,
    responseType: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListSecurityGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListSecurityGroupsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListSecurityGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListSecurityGroupsResponse,
  },
  create: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.CreateSecurityGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_CreateSecurityGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_CreateSecurityGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  update: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  updateRules: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRules',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRulesRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRulesRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRulesRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // update rule description or labels
updateRule: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/UpdateRule',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.UpdateSecurityGroupRuleRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRuleRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateSecurityGroupRuleRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  delete: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.DeleteSecurityGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_DeleteSecurityGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_DeleteSecurityGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  move: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.MoveSecurityGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_MoveSecurityGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_MoveSecurityGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  listOperations: {
    path: '/yandex.cloud.vpc.v1.SecurityGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsRequest,
    responseType: yandex_cloud_vpc_v1_security_group_service_pb.ListSecurityGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListSecurityGroupOperationsResponse,
  },
};

exports.SecurityGroupServiceClient = grpc.makeGenericClientConstructor(SecurityGroupServiceService);
