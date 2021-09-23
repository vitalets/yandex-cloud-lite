// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/folder_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_resourcemanager_v1_folder_service_pb from "../../../../yandex/cloud/resourcemanager/v1/folder_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_resourcemanager_v1_folder_pb from "../../../../yandex/cloud/resourcemanager/v1/folder_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IFolderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFolderServiceService_IGet;
    list: IFolderServiceService_IList;
    create: IFolderServiceService_ICreate;
    update: IFolderServiceService_IUpdate;
    delete: IFolderServiceService_IDelete;
    listOperations: IFolderServiceService_IListOperations;
    listAccessBindings: IFolderServiceService_IListAccessBindings;
    setAccessBindings: IFolderServiceService_ISetAccessBindings;
    updateAccessBindings: IFolderServiceService_IUpdateAccessBindings;
}

interface IFolderServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, yandex_cloud_resourcemanager_v1_folder_pb.Folder> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_pb.Folder>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_pb.Folder>;
}
interface IFolderServiceService_IList extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse>;
}
interface IFolderServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFolderServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFolderServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFolderServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse>;
}
interface IFolderServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IFolderServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFolderServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const FolderServiceService: IFolderServiceService;

export interface IFolderServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, yandex_cloud_resourcemanager_v1_folder_pb.Folder>;
    list: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IFolderServiceClient {
    get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class FolderServiceClient extends grpc.Client implements IFolderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_pb.Folder) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
