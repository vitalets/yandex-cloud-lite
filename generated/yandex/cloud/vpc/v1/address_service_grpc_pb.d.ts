// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/address_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_vpc_v1_address_service_pb from "../../../../yandex/cloud/vpc/v1/address_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_vpc_v1_address_pb from "../../../../yandex/cloud/vpc/v1/address_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IAddressServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IAddressServiceService_IGet;
    getByValue: IAddressServiceService_IGetByValue;
    list: IAddressServiceService_IList;
    create: IAddressServiceService_ICreate;
    update: IAddressServiceService_IUpdate;
    delete: IAddressServiceService_IDelete;
    listOperations: IAddressServiceService_IListOperations;
    move: IAddressServiceService_IMove;
}

interface IAddressServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, yandex_cloud_vpc_v1_address_pb.Address> {
    path: "/yandex.cloud.vpc.v1.AddressService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_pb.Address>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_pb.Address>;
}
interface IAddressServiceService_IGetByValue extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, yandex_cloud_vpc_v1_address_pb.Address> {
    path: "/yandex.cloud.vpc.v1.AddressService/GetByValue";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_pb.Address>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_pb.Address>;
}
interface IAddressServiceService_IList extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse> {
    path: "/yandex.cloud.vpc.v1.AddressService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse>;
}
interface IAddressServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.AddressService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAddressServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.AddressService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAddressServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.AddressService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAddressServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse> {
    path: "/yandex.cloud.vpc.v1.AddressService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse>;
}
interface IAddressServiceService_IMove extends grpc.MethodDefinition<yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.vpc.v1.AddressService/Move";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const AddressServiceService: IAddressServiceService;

export interface IAddressServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, yandex_cloud_vpc_v1_address_pb.Address>;
    getByValue: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, yandex_cloud_vpc_v1_address_pb.Address>;
    list: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse>;
    move: grpc.handleUnaryCall<yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IAddressServiceClient {
    get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class AddressServiceClient extends grpc.Client implements IAddressServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public getByValue(request: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_pb.Address) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public move(request: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
