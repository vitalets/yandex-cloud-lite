// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_provider_service_pb = require('../../../../yandex/cloud/cdn/v1/provider_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_ActivateProviderRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ActivateProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ActivateProviderRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListActivatedProvidersRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListActivatedProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListActivatedProvidersRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_ListActivatedProvidersResponse(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.ListActivatedProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_ListActivatedProvidersResponse(buffer_arg) {
  return yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Provider Service resources.
var ProviderServiceService = exports.ProviderServiceService = {
  // Activate provider for specified client.
activate: {
    path: '/yandex.cloud.cdn.v1.ProviderService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ActivateProviderRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ActivateProviderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // List activated providers for specified client.
listActivated: {
    path: '/yandex.cloud.cdn.v1.ProviderService/ListActivated',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest,
    responseType: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse,
    requestSerialize: serialize_yandex_cloud_cdn_v1_ListActivatedProvidersRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_ListActivatedProvidersRequest,
    responseSerialize: serialize_yandex_cloud_cdn_v1_ListActivatedProvidersResponse,
    responseDeserialize: deserialize_yandex_cloud_cdn_v1_ListActivatedProvidersResponse,
  },
};

exports.ProviderServiceClient = grpc.makeGenericClientConstructor(ProviderServiceService);
