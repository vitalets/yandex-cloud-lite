// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/sku_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_billing_v1_sku_service_pb from "../../../../yandex/cloud/billing/v1/sku_service_pb";
import * as yandex_cloud_billing_v1_sku_pb from "../../../../yandex/cloud/billing/v1/sku_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ISkuServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ISkuServiceService_IGet;
    list: ISkuServiceService_IList;
}

interface ISkuServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, yandex_cloud_billing_v1_sku_pb.Sku> {
    path: "/yandex.cloud.billing.v1.SkuService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_sku_pb.Sku>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_sku_pb.Sku>;
}
interface ISkuServiceService_IList extends grpc.MethodDefinition<yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse> {
    path: "/yandex.cloud.billing.v1.SkuService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse>;
}

export const SkuServiceService: ISkuServiceService;

export interface ISkuServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, yandex_cloud_billing_v1_sku_pb.Sku>;
    list: grpc.handleUnaryCall<yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse>;
}

export interface ISkuServiceClient {
    get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
}

export class SkuServiceClient extends grpc.Client implements ISkuServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_pb.Sku) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse) => void): grpc.ClientUnaryCall;
}
