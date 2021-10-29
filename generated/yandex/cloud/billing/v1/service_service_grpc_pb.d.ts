// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/service_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_billing_v1_service_service_pb from "../../../../yandex/cloud/billing/v1/service_service_pb";
import * as yandex_cloud_billing_v1_service_pb from "../../../../yandex/cloud/billing/v1/service_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IServiceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IServiceServiceService_IGet;
    list: IServiceServiceService_IList;
}

interface IServiceServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, yandex_cloud_billing_v1_service_pb.Service> {
    path: "/yandex.cloud.billing.v1.ServiceService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_service_service_pb.GetServiceRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_service_service_pb.GetServiceRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_service_pb.Service>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_service_pb.Service>;
}
interface IServiceServiceService_IList extends grpc.MethodDefinition<yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, yandex_cloud_billing_v1_service_service_pb.ListServicesResponse> {
    path: "/yandex.cloud.billing.v1.ServiceService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_service_service_pb.ListServicesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_service_service_pb.ListServicesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_service_service_pb.ListServicesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_service_service_pb.ListServicesResponse>;
}

export const ServiceServiceService: IServiceServiceService;

export interface IServiceServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, yandex_cloud_billing_v1_service_pb.Service>;
    list: grpc.handleUnaryCall<yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, yandex_cloud_billing_v1_service_service_pb.ListServicesResponse>;
}

export interface IServiceServiceClient {
    get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
}

export class ServiceServiceClient extends grpc.Client implements IServiceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_pb.Service) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse) => void): grpc.ClientUnaryCall;
}
