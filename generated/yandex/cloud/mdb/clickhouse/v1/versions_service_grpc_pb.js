// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_clickhouse_v1_versions_service_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/versions_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_clickhouse_v1_version_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/version_pb.js');

function serialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing ClickHouse versions.
var VersionsServiceService = exports.VersionsServiceService = {
  // Returns list of available ClickHouse versions.
list: {
    path: '/yandex.cloud.mdb.clickhouse.v1.VersionsService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_versions_service_pb.ListVersionsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListVersionsResponse,
  },
};

exports.VersionsServiceClient = grpc.makeGenericClientConstructor(VersionsServiceService);
