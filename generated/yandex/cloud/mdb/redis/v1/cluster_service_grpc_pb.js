// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_redis_v1_cluster_service_pb = require('../../../../../yandex/cloud/mdb/redis/v1/cluster_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_type_timeofday_pb = require('../../../../../google/type/timeofday_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_redis_v1_backup_pb = require('../../../../../yandex/cloud/mdb/redis/v1/backup_pb.js');
var yandex_cloud_mdb_redis_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/redis/v1/cluster_pb.js');
var yandex_cloud_mdb_redis_v1_config_redis5_0_pb = require('../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0_pb.js');
var yandex_cloud_mdb_redis_v1_config_redis6_0_pb = require('../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0_pb.js');
var yandex_cloud_mdb_redis_v1_config_redis6_2_pb = require('../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2_pb.js');
var yandex_cloud_mdb_redis_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/redis/v1/maintenance_pb.js');

function serialize_yandex_cloud_mdb_redis_v1_AddClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.AddClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_AddClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_AddClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.AddClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_AddClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_BackupClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.BackupClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_BackupClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_Cluster(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_pb.Cluster)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.Cluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_Cluster(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_CreateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.CreateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_CreateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_DeleteClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_DeleteClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.DeleteClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_DeleteClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_GetClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.GetClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_GetClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_GetClusterShardRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.GetClusterShardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_GetClusterShardRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterHostsResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterLogsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterLogsResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterShardsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterShardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterShardsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClusterShardsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClusterShardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClusterShardsResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClustersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClustersRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_ListClustersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.ListClustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_ListClustersResponse(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_MoveClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.MoveClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_MoveClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_RebalanceClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.RebalanceClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_RebalanceClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_RescheduleMaintenanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_RescheduleMaintenanceRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_RestoreClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.RestoreClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_RestoreClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_Shard(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_pb.Shard)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.Shard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_Shard(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_pb.Shard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_StartClusterFailoverRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_StartClusterFailoverRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_StartClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.StartClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_StartClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_StopClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.StopClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_StopClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_StreamClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_StreamClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_StreamLogRecord(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.StreamLogRecord');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_StreamLogRecord(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_redis_v1_UpdateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.redis.v1.UpdateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_redis_v1_UpdateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Redis clusters.
var ClusterServiceService = exports.ClusterServiceService = {
  // Returns the specified Redis cluster.
//
// To get the list of available Redis clusters, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_GetClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_GetClusterRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_Cluster,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_Cluster,
  },
  // Retrieves the list of Redis clusters that belong
// to the specified folder.
list: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClustersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClustersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClustersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClustersResponse,
  },
  // Creates a Redis cluster in the specified folder.
create: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_CreateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_CreateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified Redis cluster.
update: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_UpdateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_UpdateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified Redis cluster.
delete: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_DeleteClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Start the specified Redis cluster.
start: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_StartClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_StartClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stop the specified Redis cluster.
stop: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_StopClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_StopClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Moves a Redis cluster to the specified folder.
move: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_MoveClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_MoveClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a backup for the specified Redis cluster.
backup: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Backup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_BackupClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_BackupClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a new Redis cluster using the specified backup.
restore: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Restore',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_RestoreClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_RestoreClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Reschedules planned maintenance operation.
rescheduleMaintenance: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/RescheduleMaintenance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_RescheduleMaintenanceRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_RescheduleMaintenanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Start a manual failover on the specified Redis cluster.
startFailover: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/StartFailover',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_StartClusterFailoverRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_StartClusterFailoverRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves logs for the specified Redis cluster.
listLogs: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterLogsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterLogsResponse,
  },
  // Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics.
streamLogs: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/StreamLogs',
    requestStream: false,
    responseStream: true,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_StreamClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_StreamClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_StreamLogRecord,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_StreamLogRecord,
  },
  // Retrieves the list of operations for the specified cluster.
listOperations: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterOperationsResponse,
  },
  // Retrieves the list of available backups for the specified Redis cluster.
listBackups: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/ListBackups',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterBackupsResponse,
  },
  // Retrieves a list of hosts for the specified cluster.
listHosts: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/ListHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterHostsResponse,
  },
  // Creates new hosts for a cluster.
addHosts: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/AddHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_AddClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_AddClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified hosts for a cluster.
deleteHosts: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/DeleteHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_DeleteClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified shard.
getShard: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/GetShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_pb.Shard,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_GetClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_GetClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_Shard,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_Shard,
  },
  // Retrieves a list of shards.
listShards: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/ListShards',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest,
    responseType: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterShardsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterShardsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_redis_v1_ListClusterShardsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_redis_v1_ListClusterShardsResponse,
  },
  // Creates a new shard.
addShard: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/AddShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_AddClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_AddClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified shard.
deleteShard: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/DeleteShard',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_DeleteClusterShardRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_DeleteClusterShardRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Rebalances the cluster. Evenly distributes all the hash slots between the shards.
rebalance: {
    path: '/yandex.cloud.mdb.redis.v1.ClusterService/Rebalance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_redis_v1_RebalanceClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_redis_v1_RebalanceClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.ClusterServiceClient = grpc.makeGenericClientConstructor(ClusterServiceService);
