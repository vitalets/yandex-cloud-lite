// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/node_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_k8s_v1_node_group_service_pb from "../../../../yandex/cloud/k8s/v1/node_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_k8s_v1_node_group_pb from "../../../../yandex/cloud/k8s/v1/node_group_pb";
import * as yandex_cloud_k8s_v1_node_pb from "../../../../yandex/cloud/k8s/v1/node_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface INodeGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: INodeGroupServiceService_IGet;
    list: INodeGroupServiceService_IList;
    create: INodeGroupServiceService_ICreate;
    update: INodeGroupServiceService_IUpdate;
    delete: INodeGroupServiceService_IDelete;
    listOperations: INodeGroupServiceService_IListOperations;
    listNodes: INodeGroupServiceService_IListNodes;
}

interface INodeGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, yandex_cloud_k8s_v1_node_group_pb.NodeGroup> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>;
}
interface INodeGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse>;
}
interface INodeGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INodeGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INodeGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INodeGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse>;
}
interface INodeGroupServiceService_IListNodes extends grpc.MethodDefinition<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse> {
    path: "/yandex.cloud.k8s.v1.NodeGroupService/ListNodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse>;
}

export const NodeGroupServiceService: INodeGroupServiceService;

export interface INodeGroupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, yandex_cloud_k8s_v1_node_group_pb.NodeGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse>;
    listNodes: grpc.handleUnaryCall<yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse>;
}

export interface INodeGroupServiceClient {
    get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
    listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
}

export class NodeGroupServiceClient extends grpc.Client implements INodeGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_k8s_v1_node_group_service_pb.GetNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_pb.NodeGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_k8s_v1_node_group_service_pb.CreateNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_k8s_v1_node_group_service_pb.UpdateNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_k8s_v1_node_group_service_pb.DeleteNodeGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
    public listNodes(request: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_k8s_v1_node_group_service_pb.ListNodeGroupNodesResponse) => void): grpc.ClientUnaryCall;
}
