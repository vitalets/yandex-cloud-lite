// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/cache_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_cache_service_pb from "../../../../yandex/cloud/cdn/v1/cache_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ICacheServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    purge: ICacheServiceService_IPurge;
    prefetch: ICacheServiceService_IPrefetch;
}

interface ICacheServiceService_IPurge extends grpc.MethodDefinition<yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.CacheService/Purge";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ICacheServiceService_IPrefetch extends grpc.MethodDefinition<yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.CacheService/Prefetch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const CacheServiceService: ICacheServiceService;

export interface ICacheServiceServer extends grpc.UntypedServiceImplementation {
    purge: grpc.handleUnaryCall<yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, yandex_cloud_operation_operation_pb.Operation>;
    prefetch: grpc.handleUnaryCall<yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface ICacheServiceClient {
    purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class CacheServiceClient extends grpc.Client implements ICacheServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public purge(request: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public prefetch(request: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
