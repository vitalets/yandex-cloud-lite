// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_clickhouse_v1_database_service_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/database_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_clickhouse_v1_database_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/database_pb.js');

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_service_pb.CreateDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_service_pb.CreateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_Database(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_pb.Database)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.Database');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_Database(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_service_pb.DeleteDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_service_pb.DeleteDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_service_pb.GetDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_service_pb.GetDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListDatabasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListDatabasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing ClickHouse Database resources.
// NOTE: these methods are available only if database management through SQL is disabled.
var DatabaseServiceService = exports.DatabaseServiceService = {
  // Returns the specified ClickHouse Database resource.
//
// To get the list of available ClickHouse Database resources, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_database_service_pb.GetDatabaseRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_database_pb.Database,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_Database,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_Database,
  },
  // Retrieves the list of ClickHouse Database resources in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_database_service_pb.ListDatabasesResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListDatabasesResponse,
  },
  // Creates a new ClickHouse database in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_database_service_pb.CreateDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified ClickHouse database.
delete: {
    path: '/yandex.cloud.mdb.clickhouse.v1.DatabaseService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_database_service_pb.DeleteDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.DatabaseServiceClient = grpc.makeGenericClientConstructor(DatabaseServiceService);
