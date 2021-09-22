// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ydb_v1_database_service_pb = require('../../../../yandex/cloud/ydb/v1/database_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_ydb_v1_database_pb = require('../../../../yandex/cloud/ydb/v1/database_pb.js');
var yandex_cloud_ydb_v1_backup_pb = require('../../../../yandex/cloud/ydb/v1/backup_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_BackupDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.BackupDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_BackupDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_CreateDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.CreateDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_CreateDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_Database(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_pb.Database)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.Database');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_Database(buffer_arg) {
  return yandex_cloud_ydb_v1_database_pb.Database.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_DeleteDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.DeleteDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_DeleteDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_GetDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.GetDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_GetDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListDatabasesRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListDatabasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListDatabasesRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_ListDatabasesResponse(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.ListDatabasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_ListDatabasesResponse(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_RestoreBackupRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.RestoreBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_RestoreBackupRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_StartDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.StartDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_StartDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_StopDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.StopDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_StopDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ydb_v1_UpdateDatabaseRequest(arg) {
  if (!(arg instanceof yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ydb.v1.UpdateDatabaseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ydb_v1_UpdateDatabaseRequest(buffer_arg) {
  return yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing databases.
var DatabaseServiceService = exports.DatabaseServiceService = {
  // Returns the specified database.
get: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.GetDatabaseRequest,
    responseType: yandex_cloud_ydb_v1_database_pb.Database,
    requestSerialize: serialize_yandex_cloud_ydb_v1_GetDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_GetDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_Database,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_Database,
  },
  // Retrieves a list of databases.
list: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesRequest,
    responseType: yandex_cloud_ydb_v1_database_service_pb.ListDatabasesResponse,
    requestSerialize: serialize_yandex_cloud_ydb_v1_ListDatabasesRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_ListDatabasesRequest,
    responseSerialize: serialize_yandex_cloud_ydb_v1_ListDatabasesResponse,
    responseDeserialize: deserialize_yandex_cloud_ydb_v1_ListDatabasesResponse,
  },
  // Creates a new database.
create: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.CreateDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_CreateDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_CreateDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Modifies the specified database.
update: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.UpdateDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_UpdateDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_UpdateDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified database.
start: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.StartDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_StartDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_StartDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified database.
stop: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.StopDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_StopDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_StopDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified database.
delete: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.DeleteDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_DeleteDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_DeleteDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Restores the specified backup
restore: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Restore',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.RestoreBackupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_RestoreBackupRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_RestoreBackupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  backup: {
    path: '/yandex.cloud.ydb.v1.DatabaseService/Backup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ydb_v1_database_service_pb.BackupDatabaseRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ydb_v1_BackupDatabaseRequest,
    requestDeserialize: deserialize_yandex_cloud_ydb_v1_BackupDatabaseRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.DatabaseServiceClient = grpc.makeGenericClientConstructor(DatabaseServiceService);
