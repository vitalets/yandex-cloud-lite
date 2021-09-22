// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_host_type_service_pb from "../../../../yandex/cloud/compute/v1/host_type_service_pb";
import * as yandex_cloud_compute_v1_host_type_pb from "../../../../yandex/cloud/compute/v1/host_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IHostTypeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IHostTypeServiceService_IGet;
    list: IHostTypeServiceService_IList;
}

interface IHostTypeServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, yandex_cloud_compute_v1_host_type_pb.HostType> {
    path: "/yandex.cloud.compute.v1.HostTypeService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_type_pb.HostType>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_type_pb.HostType>;
}
interface IHostTypeServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse> {
    path: "/yandex.cloud.compute.v1.HostTypeService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse>;
}

export const HostTypeServiceService: IHostTypeServiceService;

export interface IHostTypeServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, yandex_cloud_compute_v1_host_type_pb.HostType>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse>;
}

export interface IHostTypeServiceClient {
    get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
}

export class HostTypeServiceClient extends grpc.Client implements IHostTypeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_host_type_service_pb.GetHostTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_pb.HostType) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_type_service_pb.ListHostTypesResponse) => void): grpc.ClientUnaryCall;
}
