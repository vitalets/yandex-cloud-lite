// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_origin_group_service_pb from "../../../../yandex/cloud/cdn/v1/origin_group_service_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_cdn_v1_origin_group_pb from "../../../../yandex/cloud/cdn/v1/origin_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IOriginGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IOriginGroupServiceService_IGet;
    list: IOriginGroupServiceService_IList;
    create: IOriginGroupServiceService_ICreate;
    update: IOriginGroupServiceService_IUpdate;
    delete: IOriginGroupServiceService_IDelete;
}

interface IOriginGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, yandex_cloud_cdn_v1_origin_group_pb.OriginGroup> {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_pb.OriginGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_pb.OriginGroup>;
}
interface IOriginGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse> {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse>;
}
interface IOriginGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOriginGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOriginGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const OriginGroupServiceService: IOriginGroupServiceService;

export interface IOriginGroupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, yandex_cloud_cdn_v1_origin_group_pb.OriginGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IOriginGroupServiceClient {
    get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class OriginGroupServiceClient extends grpc.Client implements IOriginGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_origin_group_service_pb.GetOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_group_service_pb.ListOriginGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_group_service_pb.CreateOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_group_service_pb.UpdateOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_group_service_pb.DeleteOriginGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
