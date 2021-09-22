// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_k8s_v1_cluster_service_pb from "../../../../yandex/cloud/k8s/v1/cluster_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_k8s_v1_cluster_pb from "../../../../yandex/cloud/k8s/v1/cluster_pb";
import * as yandex_cloud_k8s_v1_node_group_pb from "../../../../yandex/cloud/k8s/v1/node_group_pb";
import * as yandex_cloud_k8s_v1_node_pb from "../../../../yandex/cloud/k8s/v1/node_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IClusterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IClusterServiceService_IGet;
    list: IClusterServiceService_IList;
    create: IClusterServiceService_ICreate;
    update: IClusterServiceService_IUpdate;
    delete: IClusterServiceService_IDelete;
    stop: IClusterServiceService_IStop;
    start: IClusterServiceService_IStart;
    listNodeGroups: IClusterServiceService_IListNodeGroups;
    listOperations: IClusterServiceService_IListOperations;
    listNodes: IClusterServiceService_IListNodes;
}

interface IClusterServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_k8s_v1_cluster_pb.Cluster> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_pb.Cluster>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_pb.Cluster>;
}
interface IClusterServiceService_IList extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse> {
    path: "/yandex.cloud.k8s.v1.ClusterService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse>;
}
interface IClusterServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.ClusterService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IClusterServiceService_IListNodeGroups extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse> {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodeGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse>;
}
interface IClusterServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse> {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse>;
}
interface IClusterServiceService_IListNodes extends grpc.MethodDefinition<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse> {
    path: "/yandex.cloud.k8s.v1.ClusterService/ListNodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse>;
}

export const ClusterServiceService: IClusterServiceService;

export interface IClusterServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, yandex_cloud_k8s_v1_cluster_pb.Cluster>;
    list: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, yandex_cloud_operation_operation_pb.Operation>;
    listNodeGroups: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse>;
    listNodes: grpc.handleUnaryCall<yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse>;
}

export interface IClusterServiceClient {
    get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
}

export class ClusterServiceClient extends grpc.Client implements IClusterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_k8s_v1_cluster_service_pb.GetClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_pb.Cluster) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClustersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_cluster_service_pb.CreateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_cluster_service_pb.UpdateClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_cluster_service_pb.DeleteClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_k8s_v1_cluster_service_pb.StopClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_k8s_v1_cluster_service_pb.StartClusterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public listNodeGroups(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_cluster_service_pb.ListClusterNodesResponse) => void): grpc.ClientUnaryCall;
}
