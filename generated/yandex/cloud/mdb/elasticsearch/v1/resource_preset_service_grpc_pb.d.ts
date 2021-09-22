// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/resource_preset_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/resource_preset_service_pb";
import * as yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/resource_preset_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IResourcePresetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IResourcePresetServiceService_IGet;
    list: IResourcePresetServiceService_IList;
}

interface IResourcePresetServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ResourcePresetService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset>;
}
interface IResourcePresetServiceService_IList extends grpc.MethodDefinition<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse> {
    path: "/yandex.cloud.mdb.elasticsearch.v1.ResourcePresetService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse>;
}

export const ResourcePresetServiceService: IResourcePresetServiceService;

export interface IResourcePresetServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset>;
    list: grpc.handleUnaryCall<yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse>;
}

export interface IResourcePresetServiceClient {
    get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
}

export class ResourcePresetServiceClient extends grpc.Client implements IResourcePresetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.GetResourcePresetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_pb.ResourcePreset) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_mdb_elasticsearch_v1_resource_preset_service_pb.ListResourcePresetsResponse) => void): grpc.ClientUnaryCall;
}
