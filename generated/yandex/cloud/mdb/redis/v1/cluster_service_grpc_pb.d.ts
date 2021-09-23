// package: yandex.cloud.mdb.redis.v1
// file: yandex/cloud/mdb/redis/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_redis_v1_cluster_service_pb from "../../../../../yandex/cloud/mdb/redis/v1/cluster_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_redis_v1_backup_pb from "../../../../../yandex/cloud/mdb/redis/v1/backup_pb";
import * as yandex_cloud_mdb_redis_v1_cluster_pb from "../../../../../yandex/cloud/mdb/redis/v1/cluster_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis5_0_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis6_0_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis6_2_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2_pb";
import * as yandex_cloud_mdb_redis_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/redis/v1/maintenance_pb";

interface IClusterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IClusterServiceService_IGet;
    list: IClusterServiceService_IList;
    create: IClusterServiceService_ICreate;
    update: IClusterServiceService_IUpdate;
    delete: IClusterServiceService_IDelete;
    start: IClusterServiceService_IStart;
    stop: IClusterServiceService_IStop;
    move: IClusterServiceService_IMove;
    backup: IClusterServiceService_IBackup;
    restore: IClusterServiceService_IRestore;
    rescheduleMaintenance: IClusterServiceService_IRescheduleMaintenance;
    startFailover: IClusterServiceService_IStartFailover;
    listLogs: IClusterServiceService_IListLogs;
    streamLogs: IClusterServiceService_IStreamLogs;
    listOperations: IClusterServiceService_IListOperations;
    listBackups: IClusterServiceService_IListBackups;
    listHosts: IClusterServiceService_IListHosts;
    addHosts: IClusterServiceService_IAddHosts;
    deleteHosts: IClusterServiceService_IDeleteHosts;
    getShard: IClusterServiceService_IGetShard;
    listShards: IClusterServiceService_IListShards;
    addShard: IClusterServiceService_IAddShard;
    deleteShard: IClusterServiceService_IDeleteShard;
    rebalance: IClusterServiceService_IRebalance;
}

interface IClusterServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_mdb_redis_v1_cluster_pb.Cluster> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_pb.Cluster>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_pb.Cluster>;
}
interface IClusterServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse>;
}
interface IClusterServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IBackup extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Backup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IRestore extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Restore";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IRescheduleMaintenance extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/RescheduleMaintenance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStartFailover extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/StartFailover";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IListLogs extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse>;
}
interface IClusterServiceService_IStreamLogs extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/StreamLogs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
}
interface IClusterServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse>;
}
interface IClusterServiceService_IListBackups extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListBackups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse>;
}
interface IClusterServiceService_IListHosts extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse>;
}
interface IClusterServiceService_IAddHosts extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IDeleteHosts extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IGetShard extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, yandex_cloud_mdb_redis_v1_cluster_pb.Shard> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/GetShard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_pb.Shard>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_pb.Shard>;
}
interface IClusterServiceService_IListShards extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListShards";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse>;
}
interface IClusterServiceService_IAddShard extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddShard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IDeleteShard extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteShard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IRebalance extends grpc.MethodDefinition<yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.redis.v1.ClusterService/Rebalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ClusterServiceService: IClusterServiceService;

export interface IClusterServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_mdb_redis_v1_cluster_pb.Cluster>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    move: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    backup: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    restore: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    rescheduleMaintenance: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, yandex_cloud_operation_operation_pb.Operation>;
    startFailover: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, yandex_cloud_operation_operation_pb.Operation>;
    listLogs: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse>;
    streamLogs: grpc.handleServerStreamingCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse>;
    listBackups: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse>;
    listHosts: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse>;
    addHosts: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteHosts: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, yandex_cloud_operation_operation_pb.Operation>;
    getShard: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, yandex_cloud_mdb_redis_v1_cluster_pb.Shard>;
    listShards: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse>;
    addShard: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteShard: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, yandex_cloud_operation_operation_pb.Operation>;
    rebalance: grpc.handleUnaryCall<yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IClusterServiceClient {
    get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    streamLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    streamLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class ClusterServiceClient extends grpc.Client implements IClusterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.MoveClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public backup(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.BackupClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public restore(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RestoreClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rescheduleMaintenance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RescheduleMaintenanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public startFailover(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StartClusterFailoverRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    public streamLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    public streamLogs(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamClusterLogsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<yandex_cloud_mdb_redis_v1_cluster_service_pb.StreamLogRecord>;
    public listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    public listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    public listBackups(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterBackupsResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteHosts(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    public getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    public getShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.GetClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_pb.Shard) => void): grpc.ClientUnaryCall;
    public listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    public listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    public listShards(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_redis_v1_cluster_service_pb.ListClusterShardsResponse) => void): grpc.ClientUnaryCall;
    public addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.AddClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteShard(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.DeleteClusterShardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public rebalance(request: yandex_cloud_mdb_redis_v1_cluster_service_pb.RebalanceClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
