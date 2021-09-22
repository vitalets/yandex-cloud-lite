// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_host_type_service_pb = require('../../../../yandex/cloud/compute/v1/host_type_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_compute_v1_host_type_pb = require('../../../../yandex/cloud/compute/v1/host_type_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_GetHostTypeRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetHostTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetHostTypeRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_HostType(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_type_pb.HostType)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.HostType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_HostType(buffer_arg) {
  return yandex_cloud_compute_v1_host_type_pb.HostType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostTypesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostTypesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListHostTypesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListHostTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListHostTypesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Set of methods to view possible host configurations.
var HostTypeServiceService = exports.HostTypeServiceService = {
  // Returns information about specified host type.
get: {
    path: '/yandex.cloud.compute.v1.HostTypeService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest,
    responseType: yandex_cloud_compute_v1_host_type_pb.HostType,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetHostTypeRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetHostTypeRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_HostType,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_HostType,
  },
  // List avaliable host types.
list: {
    path: '/yandex.cloud.compute.v1.HostTypeService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest,
    responseType: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListHostTypesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListHostTypesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListHostTypesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListHostTypesResponse,
  },
};

exports.HostTypeServiceClient = grpc.makeGenericClientConstructor(HostTypeServiceService);
