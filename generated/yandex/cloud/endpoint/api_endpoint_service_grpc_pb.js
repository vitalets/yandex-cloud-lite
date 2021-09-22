// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_endpoint_api_endpoint_service_pb = require('../../../yandex/cloud/endpoint/api_endpoint_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var yandex_cloud_endpoint_api_endpoint_pb = require('../../../yandex/cloud/endpoint/api_endpoint_pb.js');

function serialize_yandex_cloud_endpoint_ApiEndpoint(arg) {
  if (!(arg instanceof yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint)) {
    throw new Error('Expected argument of type yandex.cloud.endpoint.ApiEndpoint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_endpoint_ApiEndpoint(buffer_arg) {
  return yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_endpoint_GetApiEndpointRequest(arg) {
  if (!(arg instanceof yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest)) {
    throw new Error('Expected argument of type yandex.cloud.endpoint.GetApiEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_endpoint_GetApiEndpointRequest(buffer_arg) {
  return yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_endpoint_ListApiEndpointsRequest(arg) {
  if (!(arg instanceof yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.endpoint.ListApiEndpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_endpoint_ListApiEndpointsRequest(buffer_arg) {
  return yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_endpoint_ListApiEndpointsResponse(arg) {
  if (!(arg instanceof yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.endpoint.ListApiEndpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_endpoint_ListApiEndpointsResponse(buffer_arg) {
  return yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiEndpointServiceService = exports.ApiEndpointServiceService = {
  get: {
    path: '/yandex.cloud.endpoint.ApiEndpointService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest,
    responseType: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint,
    requestSerialize: serialize_yandex_cloud_endpoint_GetApiEndpointRequest,
    requestDeserialize: deserialize_yandex_cloud_endpoint_GetApiEndpointRequest,
    responseSerialize: serialize_yandex_cloud_endpoint_ApiEndpoint,
    responseDeserialize: deserialize_yandex_cloud_endpoint_ApiEndpoint,
  },
  list: {
    path: '/yandex.cloud.endpoint.ApiEndpointService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest,
    responseType: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse,
    requestSerialize: serialize_yandex_cloud_endpoint_ListApiEndpointsRequest,
    requestDeserialize: deserialize_yandex_cloud_endpoint_ListApiEndpointsRequest,
    responseSerialize: serialize_yandex_cloud_endpoint_ListApiEndpointsResponse,
    responseDeserialize: deserialize_yandex_cloud_endpoint_ListApiEndpointsResponse,
  },
};

exports.ApiEndpointServiceClient = grpc.makeGenericClientConstructor(ApiEndpointServiceService);
