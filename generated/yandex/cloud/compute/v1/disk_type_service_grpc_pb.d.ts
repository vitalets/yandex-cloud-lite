// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_disk_type_service_pb from "../../../../yandex/cloud/compute/v1/disk_type_service_pb";
import * as yandex_cloud_compute_v1_disk_type_pb from "../../../../yandex/cloud/compute/v1/disk_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IDiskTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDiskTypeServiceService_IGet;
    list: IDiskTypeServiceService_IList;
}

interface IDiskTypeServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, yandex_cloud_compute_v1_disk_type_pb.DiskType> {
    path: "/yandex.cloud.compute.v1.DiskTypeService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_type_pb.DiskType>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_type_pb.DiskType>;
}
interface IDiskTypeServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse> {
    path: "/yandex.cloud.compute.v1.DiskTypeService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse>;
}

export const DiskTypeServiceService: IDiskTypeServiceService;

export interface IDiskTypeServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, yandex_cloud_compute_v1_disk_type_pb.DiskType>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse>;
}

export interface IDiskTypeServiceClient {
    get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
}

export class DiskTypeServiceClient extends grpc.Client implements IDiskTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_type_service_pb.GetDiskTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_pb.DiskType) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_type_service_pb.ListDiskTypesResponse) => void): grpc.ClientUnaryCall;
}
