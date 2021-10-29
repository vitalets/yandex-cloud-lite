// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_origin_service_pb from "../../../../yandex/cloud/cdn/v1/origin_service_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IOriginServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IOriginServiceService_IGet;
    list: IOriginServiceService_IList;
    create: IOriginServiceService_ICreate;
    update: IOriginServiceService_IUpdate;
    delete: IOriginServiceService_IDelete;
}

interface IOriginServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, yandex_cloud_cdn_v1_origin_pb.Origin> {
    path: "/yandex.cloud.cdn.v1.OriginService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_pb.Origin>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_pb.Origin>;
}
interface IOriginServiceService_IList extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse> {
    path: "/yandex.cloud.cdn.v1.OriginService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse>;
}
interface IOriginServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOriginServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOriginServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.OriginService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const OriginServiceService: IOriginServiceService;

export interface IOriginServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, yandex_cloud_cdn_v1_origin_pb.Origin>;
    list: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IOriginServiceClient {
    get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class OriginServiceClient extends grpc.Client implements IOriginServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_origin_service_pb.GetOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_pb.Origin) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_origin_service_pb.ListOriginsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_cdn_v1_origin_service_pb.CreateOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_origin_service_pb.UpdateOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_cdn_v1_origin_service_pb.DeleteOriginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
