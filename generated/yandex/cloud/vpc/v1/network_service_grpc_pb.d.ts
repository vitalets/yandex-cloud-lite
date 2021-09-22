// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/network_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_vpc_v1_network_service_pb from "../../../../yandex/cloud/vpc/v1/network_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_network_pb from "../../../../yandex/cloud/vpc/v1/network_pb";
import * as yandex_cloud_vpc_v1_subnet_pb from "../../../../yandex/cloud/vpc/v1/subnet_pb";
import * as yandex_cloud_vpc_v1_security_group_pb from "../../../../yandex/cloud/vpc/v1/security_group_pb";
import * as yandex_cloud_vpc_v1_route_table_pb from "../../../../yandex/cloud/vpc/v1/route_table_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface INetworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: INetworkServiceService_IGet;
    list: INetworkServiceService_IList;
    create: INetworkServiceService_ICreate;
    update: INetworkServiceService_IUpdate;
    delete: INetworkServiceService_IDelete;
    listSubnets: INetworkServiceService_IListSubnets;
    listSecurityGroups: INetworkServiceService_IListSecurityGroups;
    listRouteTables: INetworkServiceService_IListRouteTables;
    listOperations: INetworkServiceService_IListOperations;
    move: INetworkServiceService_IMove;
}

interface INetworkServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, yandex_cloud_vpc_v1_network_pb.Network> {
    path: "/yandex.cloud.vpc.v1.NetworkService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_pb.Network>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_pb.Network>;
}
interface INetworkServiceService_IList extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse> {
    path: "/yandex.cloud.vpc.v1.NetworkService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse>;
}
interface INetworkServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.NetworkService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.NetworkService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.NetworkService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkServiceService_IListSubnets extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse> {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListSubnets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse>;
}
interface INetworkServiceService_IListSecurityGroups extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse> {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListSecurityGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse>;
}
interface INetworkServiceService_IListRouteTables extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse> {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListRouteTables";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse>;
}
interface INetworkServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse> {
    path: "/yandex.cloud.vpc.v1.NetworkService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse>;
}
interface INetworkServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.NetworkService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const NetworkServiceService: INetworkServiceService;

export interface INetworkServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, yandex_cloud_vpc_v1_network_pb.Network>;
    list: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, yandex_cloud_operation_operation_pb.Operation>;
    listSubnets: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse>;
    listSecurityGroups: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse>;
    listRouteTables: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse>;
    move: grpc.handleUnaryCall<yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface INetworkServiceClient {
    get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class NetworkServiceClient extends grpc.Client implements INetworkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_pb.Network) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    public listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    public listSubnets(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse) => void): grpc.ClientUnaryCall;
    public listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public listSecurityGroups(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse) => void): grpc.ClientUnaryCall;
    public listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public listRouteTables(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
