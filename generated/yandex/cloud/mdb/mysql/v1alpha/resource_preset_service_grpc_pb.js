// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/resource_preset_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_resource_preset_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/resource_preset_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_mdb_mysql_v1alpha_GetResourcePresetRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.GetResourcePresetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GetResourcePresetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GetResourcePresetRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.GetResourcePresetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListResourcePresetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListResourcePresetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ResourcePreset(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_resource_preset_pb.ResourcePreset)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ResourcePreset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ResourcePreset(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_resource_preset_pb.ResourcePreset.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing resource presets.
var ResourcePresetServiceService = exports.ResourcePresetServiceService = {
  // Returns the specified resource preset.
//
// To get the list of available resource presets, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ResourcePresetService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.GetResourcePresetRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_resource_preset_pb.ResourcePreset,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GetResourcePresetRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GetResourcePresetRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ResourcePreset,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ResourcePreset,
  },
  // Retrieves the list of available resource presets.
list: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ResourcePresetService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_resource_preset_service_pb.ListResourcePresetsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListResourcePresetsResponse,
  },
};

exports.ResourcePresetServiceClient = grpc.makeGenericClientConstructor(ResourcePresetServiceService);
