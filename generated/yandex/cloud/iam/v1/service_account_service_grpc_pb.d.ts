// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/service_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_iam_v1_service_account_service_pb from "../../../../yandex/cloud/iam/v1/service_account_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_service_account_pb from "../../../../yandex/cloud/iam/v1/service_account_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IServiceAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IServiceAccountServiceService_IGet;
    list: IServiceAccountServiceService_IList;
    create: IServiceAccountServiceService_ICreate;
    update: IServiceAccountServiceService_IUpdate;
    delete: IServiceAccountServiceService_IDelete;
    listAccessBindings: IServiceAccountServiceService_IListAccessBindings;
    setAccessBindings: IServiceAccountServiceService_ISetAccessBindings;
    updateAccessBindings: IServiceAccountServiceService_IUpdateAccessBindings;
    listOperations: IServiceAccountServiceService_IListOperations;
}

interface IServiceAccountServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, yandex_cloud_iam_v1_service_account_pb.ServiceAccount> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_pb.ServiceAccount>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_pb.ServiceAccount>;
}
interface IServiceAccountServiceService_IList extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse>;
}
interface IServiceAccountServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IServiceAccountServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IServiceAccountServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IServiceAccountServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IServiceAccountServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IServiceAccountServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IServiceAccountServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse> {
    path: "/yandex.cloud.iam.v1.ServiceAccountService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse>;
}

export const ServiceAccountServiceService: IServiceAccountServiceService;

export interface IServiceAccountServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, yandex_cloud_iam_v1_service_account_pb.ServiceAccount>;
    list: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, yandex_cloud_operation_operation_pb.Operation>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse>;
}

export interface IServiceAccountServiceClient {
    get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceAccountServiceClient extends grpc.Client implements IServiceAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_pb.ServiceAccount) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse) => void): grpc.ClientUnaryCall;
}
