// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_disk_type_service_pb = require('../../../../yandex/cloud/compute/v1/disk_type_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_compute_v1_disk_type_pb = require('../../../../yandex/cloud/compute/v1/disk_type_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_DiskType(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_type_pb.DiskType)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DiskType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DiskType(buffer_arg) {
  return yandex_cloud_compute_v1_disk_type_pb.DiskType.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetDiskTypeRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetDiskTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetDiskTypeRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskTypesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskTypesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListDiskTypesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListDiskTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListDiskTypesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods to retrieve information about disk types.
var DiskTypeServiceService = exports.DiskTypeServiceService = {
  // Returns the information about specified disk type.
//
// To get the list of available disk types, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.DiskTypeService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest,
    responseType: yandex_cloud_compute_v1_disk_type_pb.DiskType,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetDiskTypeRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetDiskTypeRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_DiskType,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_DiskType,
  },
  // Retrieves the list of disk types for the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.DiskTypeService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest,
    responseType: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListDiskTypesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskTypesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListDiskTypesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListDiskTypesResponse,
  },
};

exports.DiskTypeServiceClient = grpc.makeGenericClientConstructor(DiskTypeServiceService);
