// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/repository_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_containerregistry_v1_repository_service_pb from "../../../../yandex/cloud/containerregistry/v1/repository_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_containerregistry_v1_repository_pb from "../../../../yandex/cloud/containerregistry/v1/repository_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IRepositoryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IRepositoryServiceService_IGet;
    getByName: IRepositoryServiceService_IGetByName;
    list: IRepositoryServiceService_IList;
    listAccessBindings: IRepositoryServiceService_IListAccessBindings;
    upsert: IRepositoryServiceService_IUpsert;
    delete: IRepositoryServiceService_IDelete;
    setAccessBindings: IRepositoryServiceService_ISetAccessBindings;
    updateAccessBindings: IRepositoryServiceService_IUpdateAccessBindings;
}

interface IRepositoryServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, yandex_cloud_containerregistry_v1_repository_pb.Repository> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_pb.Repository>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_pb.Repository>;
}
interface IRepositoryServiceService_IGetByName extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, yandex_cloud_containerregistry_v1_repository_pb.Repository> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/GetByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_pb.Repository>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_pb.Repository>;
}
interface IRepositoryServiceService_IList extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse>;
}
interface IRepositoryServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IRepositoryServiceService_IUpsert extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/Upsert";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRepositoryServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRepositoryServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRepositoryServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const RepositoryServiceService: IRepositoryServiceService;

export interface IRepositoryServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, yandex_cloud_containerregistry_v1_repository_pb.Repository>;
    getByName: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, yandex_cloud_containerregistry_v1_repository_pb.Repository>;
    list: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    upsert: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, yandex_cloud_operation_operation_pb.Operation>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IRepositoryServiceClient {
    get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class RepositoryServiceClient extends grpc.Client implements IRepositoryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public getByName(request: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_pb.Repository) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public upsert(request: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
