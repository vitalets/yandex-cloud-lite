// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ydb_v1_storage_type_service_pb = require('../../../../yandex/cloud/ydb/v1/storage_type_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_ydb_v1_storage_type_pb = require('../../../../yandex/cloud/ydb/v1/storage_type_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_ydb_v1_GetStorageTypeRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.GetStorageTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_GetStorageTypeRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListStorageTypesRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListStorageTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListStorageTypesRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListStorageTypesResponse(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListStorageTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListStorageTypesResponse(buffer_arg) {
  return yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_StorageType(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_storage_type_pb.StorageType)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.StorageType');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_StorageType(buffer_arg) {
  return yandex_cloud_ydb_v1_storage_type_pb.StorageType.deserializeBinary(new Uint8Array(buffer_arg));
}


var StorageTypeServiceService = exports.StorageTypeServiceService = {
  // Returns the specified storage types.
get: {
    path: '/yandex.cloud.ydb.v1.StorageTypeService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest,
    responseType: yandex_cloud_ydb_v1_storage_type_pb.StorageType,
    requestSerialize: serialize_yandex_cloud_ydb_v1_GetStorageTypeRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_GetStorageTypeRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_StorageType,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_StorageType,
  },
  // Returns the list of available storage types.
list: {
    path: '/yandex.cloud.ydb.v1.StorageTypeService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest,
    responseType: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse,
    requestSerialize: serialize_yandex_cloud_ydb_v1_ListStorageTypesRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_ListStorageTypesRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_ListStorageTypesResponse,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_ListStorageTypesResponse,
  },
};

exports.StorageTypeServiceClient = grpc.makeGenericClientConstructor(StorageTypeServiceService);
