// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/resource_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_resource_service_pb from "../../../../yandex/cloud/cdn/v1/resource_service_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_cdn_v1_resource_pb from "../../../../yandex/cloud/cdn/v1/resource_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IResourceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IResourceServiceService_IGet;
    list: IResourceServiceService_IList;
    create: IResourceServiceService_ICreate;
    update: IResourceServiceService_IUpdate;
    delete: IResourceServiceService_IDelete;
    getProviderCName: IResourceServiceService_IGetProviderCName;
}

interface IResourceServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, yandex_cloud_cdn_v1_resource_pb.Resource> {
    path: "/yandex.cloud.cdn.v1.ResourceService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_pb.Resource>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_pb.Resource>;
}
interface IResourceServiceService_IList extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse> {
    path: "/yandex.cloud.cdn.v1.ResourceService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse>;
}
interface IResourceServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.ResourceService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IResourceServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.ResourceService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IResourceServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.ResourceService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IResourceServiceService_IGetProviderCName extends grpc.MethodDefinition<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse> {
    path: "/yandex.cloud.cdn.v1.ResourceService/GetProviderCName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse>;
}

export const ResourceServiceService: IResourceServiceService;

export interface IResourceServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, yandex_cloud_cdn_v1_resource_pb.Resource>;
    list: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, yandex_cloud_operation_operation_pb.Operation>;
    getProviderCName: grpc.handleUnaryCall<yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse>;
}

export interface IResourceServiceClient {
    get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
    getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
    getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
}

export class ResourceServiceClient extends grpc.Client implements IResourceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_resource_service_pb.GetResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_pb.Resource) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.ListResourcesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_resource_service_pb.CreateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_resource_service_pb.UpdateResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_resource_service_pb.DeleteResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
    public getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
    public getProviderCName(request: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_resource_service_pb.GetProviderCNameResponse) => void): grpc.ClientUnaryCall;
}
