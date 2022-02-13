// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_resource_service_pb = require('../../../../yandex/cloud/cdn/v1/resource_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_cdn_v1_origin_pb = require('../../../../yandex/cloud/cdn/v1/origin_pb.js');
var yandex_cloud_cdn_v1_resource_pb = require('../../../../yandex/cloud/cdn/v1/resource_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_CreateResourceRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.CreateResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_CreateResourceRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_DeleteResourceRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.DeleteResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_DeleteResourceRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetProviderCNameRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetProviderCNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetProviderCNameRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetProviderCNameResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetProviderCNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetProviderCNameResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_GetResourceRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.GetResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_GetResourceRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListResourcesRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListResourcesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListResourcesRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListResourcesResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListResourcesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListResourcesResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_Resource(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_pb.Resource)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.Resource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_Resource(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_pb.Resource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_UpdateResourceRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.UpdateResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_UpdateResourceRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
// Provider's resources management service.
//
var ResourceServiceService = exports.ResourceServiceService = {
  // Get client's CDN resource by resource id.
get: {
    path: '/yandex.cloud.cdn.v1.ResourceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest,
    responseType: yandex_cloud_cdn_v1_resource_pb.Resource,
    requestSerialize: serialize_yandex_cloud_cdn_v1_GetResourceRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_GetResourceRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_Resource,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_Resource,
  },
  // Lists CDN resources.
list: {
    path: '/yandex.cloud.cdn.v1.ResourceService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest,
    responseType: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ListResourcesRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ListResourcesRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_ListResourcesResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_ListResourcesResponse,
  },
  // Creates client's CDN resource.
create: {
    path: '/yandex.cloud.cdn.v1.ResourceService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_CreateResourceRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_CreateResourceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates of client's CDN resource. (PATCH behavior)
update: {
    path: '/yandex.cloud.cdn.v1.ResourceService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_UpdateResourceRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_UpdateResourceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes client's CDN resource.
delete: {
    path: '/yandex.cloud.cdn.v1.ResourceService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_DeleteResourceRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_DeleteResourceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Get Provider's CNAME (edge endpoint) bind to specified folder id.
// Returns UNIMPLEMENTED error, if provider doesn't support CNAME request.
getProviderCName: {
    path: '/yandex.cloud.cdn.v1.ResourceService/GetProviderCName',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest,
    responseType: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_GetProviderCNameRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_GetProviderCNameRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_GetProviderCNameResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_GetProviderCNameResponse,
  },
};

exports.ResourceServiceClient = grpc.makeGenericClientConstructor(ResourceServiceService);
