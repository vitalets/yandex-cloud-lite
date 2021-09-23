// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/storage_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_ydb_v1_storage_type_service_pb from "../../../../yandex/cloud/ydb/v1/storage_type_service_pb";
import * as yandex_cloud_ydb_v1_storage_type_pb from "../../../../yandex/cloud/ydb/v1/storage_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IStorageTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IStorageTypeServiceService_IGet;
    list: IStorageTypeServiceService_IList;
}

interface IStorageTypeServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, yandex_cloud_ydb_v1_storage_type_pb.StorageType> {
    path: "/yandex.cloud.ydb.v1.StorageTypeService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_storage_type_pb.StorageType>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_storage_type_pb.StorageType>;
}
interface IStorageTypeServiceService_IList extends grpc.MethodDefinition<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse> {
    path: "/yandex.cloud.ydb.v1.StorageTypeService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse>;
}

export const StorageTypeServiceService: IStorageTypeServiceService;

export interface IStorageTypeServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, yandex_cloud_ydb_v1_storage_type_pb.StorageType>;
    list: grpc.handleUnaryCall<yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse>;
}

export interface IStorageTypeServiceClient {
    get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
}

export class StorageTypeServiceClient extends grpc.Client implements IStorageTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_ydb_v1_storage_type_service_pb.GetStorageTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_pb.StorageType) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ydb_v1_storage_type_service_pb.ListStorageTypesResponse) => void): grpc.ClientUnaryCall;
}
