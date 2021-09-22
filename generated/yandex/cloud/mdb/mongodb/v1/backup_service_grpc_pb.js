// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mongodb_v1_backup_service_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/backup_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_mongodb_v1_backup_pb = require('../../../../../yandex/cloud/mdb/mongodb/v1/backup_pb.js');

function serialize_yandex_cloud_mdb_mongodb_v1_Backup(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mongodb_v1_backup_pb.Backup)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mongodb.v1.Backup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mongodb_v1_Backup(buffer_arg) {
  return yandex_cloud_mdb_mongodb_v1_backup_pb.Backup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mongodb_v1_DeleteBackupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mongodb.v1.DeleteBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mongodb_v1_DeleteBackupRequest(buffer_arg) {
  return yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mongodb_v1_GetBackupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mongodb.v1.GetBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mongodb_v1_GetBackupRequest(buffer_arg) {
  return yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mongodb_v1_ListBackupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mongodb.v1.ListBackupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mongodb_v1_ListBackupsRequest(buffer_arg) {
  return yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mongodb_v1_ListBackupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mongodb.v1.ListBackupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mongodb_v1_ListBackupsResponse(buffer_arg) {
  return yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing MongoDB Backup resources.
var BackupServiceService = exports.BackupServiceService = {
  // Returns the specified MongoDB backup.
//
// To get the list of available MongoDB backups, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mongodb.v1.BackupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mongodb_v1_backup_service_pb.GetBackupRequest,
    responseType: yandex_cloud_mdb_mongodb_v1_backup_pb.Backup,
    requestSerialize: serialize_yandex_cloud_mdb_mongodb_v1_GetBackupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mongodb_v1_GetBackupRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mongodb_v1_Backup,
    responseDeserialize: deserialize_yandex_cloud_mdb_mongodb_v1_Backup,
  },
  // Retrieves the list of backups available for the specified folder.
list: {
    path: '/yandex.cloud.mdb.mongodb.v1.BackupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsRequest,
    responseType: yandex_cloud_mdb_mongodb_v1_backup_service_pb.ListBackupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mongodb_v1_ListBackupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mongodb_v1_ListBackupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mongodb_v1_ListBackupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mongodb_v1_ListBackupsResponse,
  },
  // Returns the list of available backups for the specified MongoDB cluster.
delete: {
    path: '/yandex.cloud.mdb.mongodb.v1.BackupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mongodb_v1_backup_service_pb.DeleteBackupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mongodb_v1_DeleteBackupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mongodb_v1_DeleteBackupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.BackupServiceClient = grpc.makeGenericClientConstructor(BackupServiceService);
