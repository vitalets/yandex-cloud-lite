// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mysql_v1alpha_backup_service_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/backup_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_backup_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/backup_pb.js');

function serialize_yandex_cloud_mdb_mysql_v1alpha_Backup(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_backup_pb.Backup)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.Backup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_Backup(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_backup_pb.Backup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_GetBackupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.GetBackupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GetBackupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GetBackupRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.GetBackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListBackupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListBackupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing MySQL backups.
var BackupServiceService = exports.BackupServiceService = {
  // Returns the specified MySQL backup.
//
// To get the list of available MySQL backups, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.BackupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.GetBackupRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_backup_pb.Backup,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GetBackupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GetBackupRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_Backup,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_Backup,
  },
  // Retrieves the list of MySQL backups available for the specified folder.
list: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.BackupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_backup_service_pb.ListBackupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListBackupsResponse,
  },
};

exports.BackupServiceClient = grpc.makeGenericClientConstructor(BackupServiceService);
