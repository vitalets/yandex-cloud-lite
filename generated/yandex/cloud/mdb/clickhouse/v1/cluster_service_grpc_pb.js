// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_clickhouse_v1_cluster_service_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/cluster_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_type_timeofday_pb = require('../../../../../google/type/timeofday_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_clickhouse_v1_backup_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/backup_pb.js');
var yandex_cloud_mdb_clickhouse_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/cluster_pb.js');
var yandex_cloud_mdb_clickhouse_v1_database_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/database_pb.js');
var yandex_cloud_mdb_clickhouse_v1_user_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/user_pb.js');
var yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse_pb.js');
var yandex_cloud_mdb_clickhouse_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance_pb.js');

function serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.AddClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.AddClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterZookeeperRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterZookeeperRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.AddClusterZookeeperRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterZookeeperRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterZookeeperRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_BackupClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.BackupClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.BackupClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_BackupClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.BackupClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_Cluster(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.Cluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_Cluster(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterExternalDictionaryRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterExternalDictionaryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateClusterExternalDictionaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterExternalDictionaryRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterExternalDictionaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterShardGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterShardGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.CreateClusterShardGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterShardGroupRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterShardGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterExternalDictionaryRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterExternalDictionaryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteClusterExternalDictionaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterExternalDictionaryRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterExternalDictionaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardGroupRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.DeleteClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetClusterShardGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardGroupRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.GetClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterBackupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterShardGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterShardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClusterShardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClustersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClustersRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ListClustersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ListClustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ListClustersResponse(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_MoveClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.MoveClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.MoveClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_MoveClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.MoveClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_RescheduleMaintenanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RescheduleMaintenanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.RescheduleMaintenanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_RescheduleMaintenanceRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RescheduleMaintenanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_RestoreClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RestoreClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.RestoreClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_RestoreClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RestoreClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_Shard(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.Shard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_Shard(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_ShardGroup(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.ShardGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_ShardGroup(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_StartClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StartClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.StartClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_StartClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StartClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_StopClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StopClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.StopClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_StopClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StopClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_StreamClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.StreamClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_StreamClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_StreamLogRecord(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamLogRecord)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.StreamLogRecord');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_StreamLogRecord(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamLogRecord.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.UpdateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardGroupRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.clickhouse.v1.UpdateClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing ClickHouse clusters.
var ClusterServiceService = exports.ClusterServiceService = {
  // Returns the specified ClickHouse cluster.
//
// To get the list of available ClickHouse clusters, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_Cluster,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_Cluster,
  },
  // Retrieves a list of ClickHouse clusters that belong
// to the specified folder.
list: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClustersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClustersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClustersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClustersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClustersResponse,
  },
  // Creates a ClickHouse cluster in the specified folder.
create: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified ClickHouse cluster.
update: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified ClickHouse cluster.
delete: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified ClickHouse cluster.
start: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StartClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_StartClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_StartClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified ClickHouse cluster.
stop: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StopClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_StopClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_StopClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Moves a ClickHouse cluster to the specified folder.
move: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.MoveClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_MoveClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_MoveClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds a ZooKeeper subcluster to the specified ClickHouse cluster.
addZookeeper: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddZookeeper',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterZookeeperRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterZookeeperRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterZookeeperRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a backup for the specified ClickHouse cluster.
backup: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Backup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.BackupClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_BackupClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_BackupClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a new ClickHouse cluster using the specified backup.
restore: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/Restore',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RestoreClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_RestoreClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_RestoreClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Reschedules planned maintenance operation.
rescheduleMaintenance: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/RescheduleMaintenance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.RescheduleMaintenanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_RescheduleMaintenanceRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_RescheduleMaintenanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves logs for the specified ClickHouse cluster.
listLogs: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterLogsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterLogsResponse,
  },
  // Same as ListLogs but using server-side streaming. Also allows for `tail -f` semantics.
streamLogs: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/StreamLogs',
    requestStream: false,
    responseStream: true,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamClusterLogsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.StreamLogRecord,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_StreamClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_StreamClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_StreamLogRecord,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_StreamLogRecord,
  },
  // Retrieves the list of Operation resources for the specified cluster.
listOperations: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterOperationsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterOperationsResponse,
  },
  // Retrieves the list of available backups for the specified ClickHouse cluster.
listBackups: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListBackups',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterBackupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterBackupsResponse,
  },
  // Retrieves a list of hosts for the specified cluster.
listHosts: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterHostsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterHostsResponse,
  },
  // Creates new hosts for a cluster.
addHosts: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified hosts for a cluster.
deleteHosts: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified shard.
getShard: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_Shard,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_Shard,
  },
  // Retrieves a list of shards that belong to the specified cluster.
listShards: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShards',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardsResponse,
  },
  // Creates a new shard in the specified cluster.
addShard: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/AddShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.AddClusterShardRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_AddClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_AddClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Modifies the specified shard.
updateShard: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified shard.
deleteShard: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified shard group.
getShardGroup: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/GetShardGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.GetClusterShardGroupRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_GetClusterShardGroupRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ShardGroup,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ShardGroup,
  },
  // Retrieves a list of shard groups that belong to specified cluster.
listShardGroups: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/ListShardGroups',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsRequest,
    responseType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.ListClusterShardGroupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_ListClusterShardGroupsResponse,
  },
  // Creates a new shard group in the specified cluster.
createShardGroup: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateShardGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterShardGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterShardGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterShardGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified shard group.
updateShardGroup: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/UpdateShardGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.UpdateClusterShardGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_UpdateClusterShardGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified shard group.
deleteShardGroup: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteShardGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterShardGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterShardGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates an external dictionary for the specified ClickHouse cluster.
createExternalDictionary: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/CreateExternalDictionary',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.CreateClusterExternalDictionaryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterExternalDictionaryRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_CreateClusterExternalDictionaryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified external dictionary.
deleteExternalDictionary: {
    path: '/yandex.cloud.mdb.clickhouse.v1.ClusterService/DeleteExternalDictionary',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_clickhouse_v1_cluster_service_pb.DeleteClusterExternalDictionaryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterExternalDictionaryRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_clickhouse_v1_DeleteClusterExternalDictionaryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.ClusterServiceClient = grpc.makeGenericClientConstructor(ClusterServiceService);
