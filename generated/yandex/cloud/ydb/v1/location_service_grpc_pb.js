// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ydb_v1_location_service_pb = require('../../../../yandex/cloud/ydb/v1/location_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_ydb_v1_location_pb = require('../../../../yandex/cloud/ydb/v1/location_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_ydb_v1_GetLocationRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.GetLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_GetLocationRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListLocationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListLocationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListLocationsRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListLocationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListLocationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListLocationsResponse(buffer_arg) {
  return yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_Location(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_location_pb.Location)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.Location');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_Location(buffer_arg) {
  return yandex_cloud_ydb_v1_location_pb.Location.deserializeBinary(new Uint8Array(buffer_arg));
}


var LocationServiceService = exports.LocationServiceService = {
  // Returns the specified location.
get: {
    path: '/yandex.cloud.ydb.v1.LocationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_location_service_pb.GetLocationRequest,
    responseType: yandex_cloud_ydb_v1_location_pb.Location,
    requestSerialize: serialize_yandex_cloud_ydb_v1_GetLocationRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_GetLocationRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_Location,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_Location,
  },
  // Returns the list of available locations.
list: {
    path: '/yandex.cloud.ydb.v1.LocationService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_location_service_pb.ListLocationsRequest,
    responseType: yandex_cloud_ydb_v1_location_service_pb.ListLocationsResponse,
    requestSerialize: serialize_yandex_cloud_ydb_v1_ListLocationsRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_ListLocationsRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_ListLocationsResponse,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_ListLocationsResponse,
  },
};

exports.LocationServiceClient = grpc.makeGenericClientConstructor(LocationServiceService);
