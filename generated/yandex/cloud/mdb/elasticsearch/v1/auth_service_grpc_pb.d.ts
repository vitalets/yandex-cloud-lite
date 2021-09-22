// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_mdb_elasticsearch_v1_auth_service_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/auth_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_elasticsearch_v1_auth_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listProviders: IAuthServiceService_IListProviders;
    getProvider: IAuthServiceService_IGetProvider;
    addProviders: IAuthServiceService_IAddProviders;
    updateProviders: IAuthServiceService_IUpdateProviders;
    deleteProviders: IAuthServiceService_IDeleteProviders;
    updateProvider: IAuthServiceService_IUpdateProvider;
    deleteProvider: IAuthServiceService_IDeleteProvider;
}

interface IAuthServiceService_IListProviders extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse>;
}
interface IAuthServiceService_IGetProvider extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
}
interface IAuthServiceService_IAddProviders extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAuthServiceService_IUpdateProviders extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAuthServiceService_IDeleteProviders extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAuthServiceService_IUpdateProvider extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IAuthServiceService_IDeleteProvider extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    listProviders: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse>;
    getProvider: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
    addProviders: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateProviders: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteProviders: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateProvider: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, yandex_cloud_operation_operation_pb.Operation>;
    deleteProvider: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IAuthServiceClient {
    listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    public listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    public listProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
    public getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    public getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    public getProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider) => void): grpc.ClientUnaryCall;
    public addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProviders(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteProvider(request: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
