// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_origin_service_pb = require('../../../../yandex/cloud/cdn/v1/origin_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_cdn_v1_origin_pb = require('../../../../yandex/cloud/cdn/v1/origin_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_CreateOriginRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.CreateOriginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_CreateOriginRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_DeleteOriginRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.DeleteOriginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_DeleteOriginRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetOriginRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetOriginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetOriginRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListOriginsRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListOriginsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListOriginsRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListOriginsResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListOriginsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListOriginsResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_Origin(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_pb.Origin)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.Origin');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_Origin(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_pb.Origin.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_UpdateOriginRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.UpdateOriginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_UpdateOriginRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
// Origin management service.
// Origin is not a standalone entity. It can live only within origin group.
//
var OriginServiceService = exports.OriginServiceService = {
  // Get origin in origin group.
get: {
    path: '/yandex.cloud.cdn.v1.OriginService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest,
    responseType: yandex_cloud_cdn_v1_origin_pb.Origin,
    requestSerialize: serialize_yandex_cloud_cdn_v1_GetOriginRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_GetOriginRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_Origin,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_Origin,
  },
  // Lists origins of origin group.
list: {
    path: '/yandex.cloud.cdn.v1.OriginService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest,
    responseType: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ListOriginsRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ListOriginsRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_ListOriginsResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_ListOriginsResponse,
  },
  // Creates origin inside origin group.
create: {
    path: '/yandex.cloud.cdn.v1.OriginService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_CreateOriginRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_CreateOriginRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates origin from origin group.
update: {
    path: '/yandex.cloud.cdn.v1.OriginService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_UpdateOriginRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_UpdateOriginRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes origin from origin group.
delete: {
    path: '/yandex.cloud.cdn.v1.OriginService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_DeleteOriginRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_DeleteOriginRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.OriginServiceClient = grpc.makeGenericClientConstructor(OriginServiceService);
