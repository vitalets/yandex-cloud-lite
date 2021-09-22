// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_logging_v1_log_group_service_pb from "../../../../yandex/cloud/logging/v1/log_group_service_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_logging_v1_log_group_pb from "../../../../yandex/cloud/logging/v1/log_group_pb";
import * as yandex_cloud_logging_v1_log_resource_pb from "../../../../yandex/cloud/logging/v1/log_resource_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ILogGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ILogGroupServiceService_IGet;
    stats: ILogGroupServiceService_IStats;
    list: ILogGroupServiceService_IList;
    create: ILogGroupServiceService_ICreate;
    update: ILogGroupServiceService_IUpdate;
    delete: ILogGroupServiceService_IDelete;
    listResources: ILogGroupServiceService_IListResources;
    listOperations: ILogGroupServiceService_IListOperations;
    listAccessBindings: ILogGroupServiceService_IListAccessBindings;
    setAccessBindings: ILogGroupServiceService_ISetAccessBindings;
    updateAccessBindings: ILogGroupServiceService_IUpdateAccessBindings;
}

interface ILogGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, yandex_cloud_logging_v1_log_group_pb.LogGroup> {
    path: "/yandex.cloud.logging.v1.LogGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_pb.LogGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_pb.LogGroup>;
}
interface ILogGroupServiceService_IStats extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse> {
    path: "/yandex.cloud.logging.v1.LogGroupService/Stats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse>;
}
interface ILogGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse> {
    path: "/yandex.cloud.logging.v1.LogGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse>;
}
interface ILogGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.logging.v1.LogGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILogGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.logging.v1.LogGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILogGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.logging.v1.LogGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILogGroupServiceService_IListResources extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse> {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListResources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse>;
}
interface ILogGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse> {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse>;
}
interface ILogGroupServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.logging.v1.LogGroupService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface ILogGroupServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.logging.v1.LogGroupService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILogGroupServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.logging.v1.LogGroupService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const LogGroupServiceService: ILogGroupServiceService;

export interface ILogGroupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, yandex_cloud_logging_v1_log_group_pb.LogGroup>;
    stats: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse>;
    list: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listResources: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ILogGroupServiceClient {
    get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class LogGroupServiceClient extends grpc.Client implements ILogGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_pb.LogGroup) => void): grpc.ClientUnaryCall;
    public stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    public stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    public stats(request: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.GetLogGroupStatsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListLogGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_logging_v1_log_group_service_pb.CreateLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_logging_v1_log_group_service_pb.UpdateLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_logging_v1_log_group_service_pb.DeleteLogGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public listResources(request: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_group_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
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
