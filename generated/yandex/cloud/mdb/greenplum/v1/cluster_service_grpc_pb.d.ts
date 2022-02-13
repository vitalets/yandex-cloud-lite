// package: yandex.cloud.mdb.greenplum.v1
// file: yandex/cloud/mdb/greenplum/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_mdb_greenplum_v1_cluster_service_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/cluster_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_greenplum_v1_cluster_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/cluster_pb";
import * as yandex_cloud_mdb_greenplum_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance_pb";
import * as yandex_cloud_mdb_greenplum_v1_config_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/config_pb";
import * as yandex_cloud_mdb_greenplum_v1_host_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/host_pb";

interface IClusterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IClusterServiceService_IGet;
    list: IClusterServiceService_IList;
    create: IClusterServiceService_ICreate;
    update: IClusterServiceService_IUpdate;
    delete: IClusterServiceService_IDelete;
    start: IClusterServiceService_IStart;
    stop: IClusterServiceService_IStop;
    listOperations: IClusterServiceService_IListOperations;
    listMasterHosts: IClusterServiceService_IListMasterHosts;
    listSegmentHosts: IClusterServiceService_IListSegmentHosts;
    listLogs: IClusterServiceService_IListLogs;
}

interface IClusterServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster>;
}
interface IClusterServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse>;
}
interface IClusterServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse>;
}
interface IClusterServiceService_IListMasterHosts extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
}
interface IClusterServiceService_IListSegmentHosts extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
}
interface IClusterServiceService_IListLogs extends grpc.MethodDefinition<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse> {
    path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse>;
}

export const ClusterServiceService: IClusterServiceService;

export interface IClusterServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse>;
    listMasterHosts: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
    listSegmentHosts: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse>;
    listLogs: grpc.handleUnaryCall<yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse>;
}

export interface IClusterServiceClient {
    get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
}

export class ClusterServiceClient extends grpc.Client implements IClusterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listMasterHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listSegmentHosts(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterHostsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
    public listLogs(request: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_greenplum_v1_cluster_service_pb.ListClusterLogsResponse) => void): grpc.ClientUnaryCall;
}
