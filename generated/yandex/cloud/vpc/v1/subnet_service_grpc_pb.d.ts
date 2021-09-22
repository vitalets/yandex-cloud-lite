// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/subnet_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_vpc_v1_subnet_service_pb from "../../../../yandex/cloud/vpc/v1/subnet_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_subnet_pb from "../../../../yandex/cloud/vpc/v1/subnet_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_reference_reference_pb from "../../../../yandex/cloud/reference/reference_pb";

interface ISubnetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISubnetServiceService_IGet;
    list: ISubnetServiceService_IList;
    create: ISubnetServiceService_ICreate;
    update: ISubnetServiceService_IUpdate;
    delete: ISubnetServiceService_IDelete;
    listOperations: ISubnetServiceService_IListOperations;
    move: ISubnetServiceService_IMove;
    listUsedAddresses: ISubnetServiceService_IListUsedAddresses;
}

interface ISubnetServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, yandex_cloud_vpc_v1_subnet_pb.Subnet> {
    path: "/yandex.cloud.vpc.v1.SubnetService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_pb.Subnet>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_pb.Subnet>;
}
interface ISubnetServiceService_IList extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse> {
    path: "/yandex.cloud.vpc.v1.SubnetService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse>;
}
interface ISubnetServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SubnetService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubnetServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SubnetService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubnetServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SubnetService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubnetServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse> {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse>;
}
interface ISubnetServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.SubnetService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ISubnetServiceService_IListUsedAddresses extends grpc.MethodDefinition<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse> {
    path: "/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse>;
}

export const SubnetServiceService: ISubnetServiceService;

export interface ISubnetServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, yandex_cloud_vpc_v1_subnet_pb.Subnet>;
    list: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse>;
    move: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, yandex_cloud_operation_operation_pb.Operation>;
    listUsedAddresses: grpc.handleUnaryCall<yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse>;
}

export interface ISubnetServiceClient {
    get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
    listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
    listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
}

export class SubnetServiceClient extends grpc.Client implements ISubnetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_pb.Subnet) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
    public listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
    public listUsedAddresses(request: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse) => void): grpc.ClientUnaryCall;
}
