// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_origin_group_service_pb = require('../../../../yandex/cloud/cdn/v1/origin_group_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_cdn_v1_origin_pb = require('../../../../yandex/cloud/cdn/v1/origin_pb.js');
var yandex_cloud_cdn_v1_origin_group_pb = require('../../../../yandex/cloud/cdn/v1/origin_group_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_CreateOriginGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.CreateOriginGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_CreateOriginGroupRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_DeleteOriginGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.DeleteOriginGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_DeleteOriginGroupRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetOriginGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetOriginGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetOriginGroupRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListOriginGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListOriginGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListOriginGroupsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListOriginGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListOriginGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListOriginGroupsResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_OriginGroup(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_pb.OriginGroup)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.OriginGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_OriginGroup(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_pb.OriginGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_UpdateOriginGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.UpdateOriginGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_UpdateOriginGroupRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


//
// Origin Groups management service.
//
var OriginGroupServiceService = exports.OriginGroupServiceService = {
  // Gets origin group with specified origin group id.
get: {
    path: '/yandex.cloud.cdn.v1.OriginGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest,
    responseType: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup,
    requestSerialize: serialize_yandex_cloud_cdn_v1_GetOriginGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_GetOriginGroupRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_OriginGroup,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_OriginGroup,
  },
  // Lists origins of origin group.
list: {
    path: '/yandex.cloud.cdn.v1.OriginGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest,
    responseType: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ListOriginGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ListOriginGroupsRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_ListOriginGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_ListOriginGroupsResponse,
  },
  // Creates origin group.
create: {
    path: '/yandex.cloud.cdn.v1.OriginGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_CreateOriginGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_CreateOriginGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates origin group.
update: {
    path: '/yandex.cloud.cdn.v1.OriginGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_UpdateOriginGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_UpdateOriginGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes origin group with specified origin group id.
delete: {
    path: '/yandex.cloud.cdn.v1.OriginGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_DeleteOriginGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_DeleteOriginGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.OriginGroupServiceClient = grpc.makeGenericClientConstructor(OriginGroupServiceService);
