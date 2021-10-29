// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/provider_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_provider_service_pb from "../../../../yandex/cloud/cdn/v1/provider_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IProviderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    activate: IProviderServiceService_IActivate;
    listActivated: IProviderServiceService_IListActivated;
}

interface IProviderServiceService_IActivate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.ProviderService/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProviderServiceService_IListActivated extends grpc.MethodDefinition<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse> {
    path: "/yandex.cloud.cdn.v1.ProviderService/ListActivated";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse>;
}

export const ProviderServiceService: IProviderServiceService;

export interface IProviderServiceServer extends grpc.UntypedServiceImplementation {
    activate: grpc.handleUnaryCall<yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, yandex_cloud_operation_operation_pb.Operation>;
    listActivated: grpc.handleUnaryCall<yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse>;
}

export interface IProviderServiceClient {
    activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
    listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
    listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
}

export class ProviderServiceClient extends grpc.Client implements IProviderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_cdn_v1_provider_service_pb.ActivateProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
    public listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
    public listActivated(request: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_provider_service_pb.ListActivatedProvidersResponse) => void): grpc.ClientUnaryCall;
}
