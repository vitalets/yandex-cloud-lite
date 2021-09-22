// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mysql_v1alpha_database_service_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/database_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_database_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/database_pb.js');

function serialize_yandex_cloud_mdb_mysql_v1alpha_CreateDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_service_pb.CreateDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.CreateDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_service_pb.CreateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_Database(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_pb.Database)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.Database');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_Database(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_service_pb.DeleteDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.DeleteDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_service_pb.DeleteDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_GetDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_service_pb.GetDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GetDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GetDatabaseRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_service_pb.GetDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListDatabasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListDatabasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing MySQL databases.
var DatabaseServiceService = exports.DatabaseServiceService = {
  // Returns the specified MySQL database.
//
// To get the list of available MySQL databases, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.DatabaseService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_database_service_pb.GetDatabaseRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_database_pb.Database,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GetDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GetDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_Database,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_Database,
  },
  // Retrieves the list of MySQL databases in the specified cluster.
list: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.DatabaseService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_database_service_pb.ListDatabasesResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListDatabasesResponse,
  },
  // Creates a new MySQL database in the specified cluster.
create: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.DatabaseService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_database_service_pb.CreateDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_CreateDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified MySQL database.
delete: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.DatabaseService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_database_service_pb.DeleteDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.DatabaseServiceClient = grpc.makeGenericClientConstructor(DatabaseServiceService);
