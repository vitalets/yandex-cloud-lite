// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/route_table_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_vpc_v1_route_table_service_pb from "../../../../yandex/cloud/vpc/v1/route_table_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_route_table_pb from "../../../../yandex/cloud/vpc/v1/route_table_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IRouteTableServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IRouteTableServiceService_IGet;
    list: IRouteTableServiceService_IList;
    create: IRouteTableServiceService_ICreate;
    update: IRouteTableServiceService_IUpdate;
    delete: IRouteTableServiceService_IDelete;
    listOperations: IRouteTableServiceService_IListOperations;
    move: IRouteTableServiceService_IMove;
}

interface IRouteTableServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, yandex_cloud_vpc_v1_route_table_pb.RouteTable> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_pb.RouteTable>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_pb.RouteTable>;
}
interface IRouteTableServiceService_IList extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse>;
}
interface IRouteTableServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRouteTableServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRouteTableServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRouteTableServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse>;
}
interface IRouteTableServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.RouteTableService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const RouteTableServiceService: IRouteTableServiceService;

export interface IRouteTableServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, yandex_cloud_vpc_v1_route_table_pb.RouteTable>;
    list: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse>;
    move: grpc.handleUnaryCall<yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IRouteTableServiceClient {
    get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class RouteTableServiceClient extends grpc.Client implements IRouteTableServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_pb.RouteTable) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
