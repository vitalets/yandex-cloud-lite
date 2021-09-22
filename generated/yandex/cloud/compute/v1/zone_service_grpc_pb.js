// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_zone_service_pb = require('../../../../yandex/cloud/compute/v1/zone_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_compute_v1_zone_pb = require('../../../../yandex/cloud/compute/v1/zone_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_GetZoneRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetZoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetZoneRequest(buffer_arg) {
  return yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListZonesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListZonesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListZonesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListZonesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListZonesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListZonesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Zone(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_zone_pb.Zone)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Zone');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Zone(buffer_arg) {
  return yandex_cloud_compute_v1_zone_pb.Zone.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods to retrieve information about availability zones.
var ZoneServiceService = exports.ZoneServiceService = {
  // Returns the information about the specified availability zone.
//
// To get the list of availability zones, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.ZoneService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_zone_service_pb.GetZoneRequest,
    responseType: yandex_cloud_compute_v1_zone_pb.Zone,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetZoneRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetZoneRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Zone,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Zone,
  },
  // Retrieves the list of availability zones.
list: {
    path: '/yandex.cloud.compute.v1.ZoneService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_zone_service_pb.ListZonesRequest,
    responseType: yandex_cloud_compute_v1_zone_service_pb.ListZonesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListZonesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListZonesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListZonesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListZonesResponse,
  },
};

exports.ZoneServiceClient = grpc.makeGenericClientConstructor(ZoneServiceService);
