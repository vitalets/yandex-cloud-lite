// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/backend_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_apploadbalancer_v1_backend_group_service_pb from "../../../../yandex/cloud/apploadbalancer/v1/backend_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_backend_group_pb from "../../../../yandex/cloud/apploadbalancer/v1/backend_group_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IBackendGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBackendGroupServiceService_IGet;
    list: IBackendGroupServiceService_IList;
    create: IBackendGroupServiceService_ICreate;
    update: IBackendGroupServiceService_IUpdate;
    delete: IBackendGroupServiceService_IDelete;
    addBackend: IBackendGroupServiceService_IAddBackend;
    removeBackend: IBackendGroupServiceService_IRemoveBackend;
    updateBackend: IBackendGroupServiceService_IUpdateBackend;
    listOperations: IBackendGroupServiceService_IListOperations;
}

interface IBackendGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup>;
}
interface IBackendGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse>;
}
interface IBackendGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IAddBackend extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/AddBackend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IRemoveBackend extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/RemoveBackend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IUpdateBackend extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/UpdateBackend";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IBackendGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.BackendGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse>;
}

export const BackendGroupServiceService: IBackendGroupServiceService;

export interface IBackendGroupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    addBackend: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeBackend: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateBackend: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse>;
}

export interface IBackendGroupServiceClient {
    get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class BackendGroupServiceClient extends grpc.Client implements IBackendGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.GetBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.CreateBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.DeleteBackendGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.AddBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.RemoveBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateBackend(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.UpdateBackendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_backend_group_service_pb.ListBackendGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}
