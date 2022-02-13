// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_kafka_v1_cluster_service_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/cluster_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_mdb_kafka_v1_cluster_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/cluster_pb.js');
var yandex_cloud_mdb_kafka_v1_topic_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/topic_pb.js');
var yandex_cloud_mdb_kafka_v1_user_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/user_pb.js');
var yandex_cloud_mdb_kafka_v1_maintenance_pb = require('../../../../../yandex/cloud/mdb/kafka/v1/maintenance_pb.js');

function serialize_yandex_cloud_mdb_kafka_v1_Cluster(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.Cluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_Cluster(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_CreateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.CreateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.CreateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_CreateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.CreateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_DeleteClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.DeleteClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.DeleteClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_DeleteClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.DeleteClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_GetClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.GetClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.GetClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_GetClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.GetClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClusterOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClustersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClustersRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_ListClustersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.ListClustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_ListClustersResponse(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_MoveClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.MoveClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.MoveClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_MoveClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.MoveClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_RescheduleMaintenanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.RescheduleMaintenanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.RescheduleMaintenanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_RescheduleMaintenanceRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.RescheduleMaintenanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_StartClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.StartClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.StartClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_StartClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.StartClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_StopClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.StopClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.StopClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_StopClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.StopClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_StreamClusterLogsRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamClusterLogsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.StreamClusterLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_StreamClusterLogsRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamClusterLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_StreamLogRecord(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamLogRecord)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.StreamLogRecord');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_StreamLogRecord(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamLogRecord.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_kafka_v1_UpdateClusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_kafka_v1_cluster_service_pb.UpdateClusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.kafka.v1.UpdateClusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_kafka_v1_UpdateClusterRequest(buffer_arg) {
  return yandex_cloud_mdb_kafka_v1_cluster_service_pb.UpdateClusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Apache Kafka® clusters.
var ClusterServiceService = exports.ClusterServiceService = {
  // Returns the specified Apache Kafka® cluster.
//
// To get the list of available Apache Kafka® clusters, make a [List] request.
get: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.GetClusterRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_GetClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_GetClusterRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_Cluster,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_Cluster,
  },
  // Retrieves the list of Apache Kafka® clusters that belong to the specified folder.
list: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClustersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClustersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClustersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClustersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClustersResponse,
  },
  // Creates a new Apache Kafka® cluster in the specified folder.
create: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.CreateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_CreateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_CreateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified Apache Kafka® cluster.
update: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.UpdateClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_UpdateClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_UpdateClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified Apache Kafka® cluster.
delete: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.DeleteClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_DeleteClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_DeleteClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Moves the specified Apache Kafka® cluster to the specified folder.
move: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.MoveClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_MoveClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_MoveClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified Apache Kafka® cluster.
start: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.StartClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_StartClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_StartClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified Apache Kafka® cluster.
stop: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.StopClusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_StopClusterRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_StopClusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Reschedule planned maintenance operation.
rescheduleMaintenance: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/RescheduleMaintenance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.RescheduleMaintenanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_RescheduleMaintenanceRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_RescheduleMaintenanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves logs for the specified Apache Kafka® cluster.
//
// For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
listLogs: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/ListLogs',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterLogsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterLogsResponse,
  },
  // Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics.
streamLogs: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/StreamLogs',
    requestStream: false,
    responseStream: true,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamClusterLogsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.StreamLogRecord,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_StreamClusterLogsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_StreamClusterLogsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_StreamLogRecord,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_StreamLogRecord,
  },
  // Retrieves the list of operations for the specified Apache Kafka® cluster.
listOperations: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterOperationsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterOperationsResponse,
  },
  // Retrieves a list of hosts for the specified Apache Kafka® cluster.
listHosts: {
    path: '/yandex.cloud.mdb.kafka.v1.ClusterService/ListHosts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsRequest,
    responseType: yandex_cloud_mdb_kafka_v1_cluster_service_pb.ListClusterHostsResponse,
    requestSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsRequest,
    responseSerialize: serialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_kafka_v1_ListClusterHostsResponse,
  },
};

exports.ClusterServiceClient = grpc.makeGenericClientConstructor(ClusterServiceService);
