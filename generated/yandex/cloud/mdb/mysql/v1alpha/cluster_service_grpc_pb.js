// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_type_timeofday_pb = require('../../../../../google/type/timeofday_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_backup_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/backup_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_cluster_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_database_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/database_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_user_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/user_pb.js');
var yandex_cloud_mdb_mysql_v1alpha_config_mysql5_7_pb = require('../../../../../yandex/cloud/mdb/mysql/v1alpha/config/mysql5_7_pb.js');

function serialize_yandex_cloud_mdb_mysql_v1alpha_AddClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.AddClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.AddClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_AddClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.AddClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_BackupClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.BackupClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.BackupClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_BackupClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.BackupClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_Cluster(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_pb.Cluster)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.Cluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_Cluster(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_CreateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.CreateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.DeleteClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.DeleteClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_GetClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.GetClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_GetClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.ListClustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersResponse(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_RestoreClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.RestoreClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.RestoreClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_RestoreClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.RestoreClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_StartClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StartClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.StartClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_StartClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StartClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_StopClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StopClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.StopClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_StopClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StopClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_mysql_v1alpha_UpdateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.mysql.v1alpha.UpdateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_mysql_v1alpha_UpdateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing MySQL clusters.
var ClusterServiceService = exports.ClusterServiceService = {
  // Returns the specified MySQL cluster.
//
// To get the list of available MySQL clusters, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.GetClusterRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_pb.Cluster,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_GetClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_GetClusterRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_Cluster,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_Cluster,
  },
  // Retrieves the list of MySQL clusters that belong to the specified folder.
list: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClustersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClustersResponse,
  },
  // Creates a MySQL cluster in the specified folder.
create: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.CreateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_CreateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_CreateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Modifies the specified MySQL cluster.
update: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.UpdateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_UpdateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_UpdateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified MySQL cluster.
delete: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified MySQL cluster.
start: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StartClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_StartClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_StartClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified MySQL cluster.
stop: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.StopClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_StopClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_StopClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a backup for the specified MySQL cluster.
backup: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Backup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.BackupClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_BackupClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_BackupClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a new MySQL cluster using the specified backup.
restore: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Restore',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.RestoreClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_RestoreClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_RestoreClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves logs for the specified MySQL cluster.
listLogs: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterLogsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterLogsResponse,
  },
  // Retrieves the list of operations for the specified MySQL cluster.
listOperations: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterOperationsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterOperationsResponse,
  },
  // Retrieves the list of available backups for the specified MySQL cluster.
listBackups: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListBackups',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterBackupsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterBackupsResponse,
  },
  // Retrieves a list of hosts for the specified MySQL cluster.
listHosts: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsRequest,
    responseType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.ListClusterHostsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_ListClusterHostsResponse,
  },
  // Creates new hosts for a cluster.
addHosts: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/AddHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.AddClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_AddClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_AddClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified hosts for a cluster.
deleteHosts: {
    path: '/yandex.cloud.mdb.mysql.v1alpha.ClusterService/DeleteHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_mysql_v1alpha_cluster_service_pb.DeleteClusterHostsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_mysql_v1alpha_DeleteClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.ClusterServiceClient = grpc.makeGenericClientConstructor(ClusterServiceService);
