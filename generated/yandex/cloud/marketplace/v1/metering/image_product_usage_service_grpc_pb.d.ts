// package: yandex.cloud.marketplace.v1.metering
// file: yandex/cloud/marketplace/v1/metering/image_product_usage_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb from "../../../../../yandex/cloud/marketplace/v1/metering/image_product_usage_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_marketplace_v1_metering_usage_record_pb from "../../../../../yandex/cloud/marketplace/v1/metering/usage_record_pb";

interface IImageProductUsageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    write: IImageProductUsageServiceService_IWrite;
}

interface IImageProductUsageServiceService_IWrite extends grpc.MethodDefinition<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse> {
    path: "/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse>;
}

export const ImageProductUsageServiceService: IImageProductUsageServiceService;

export interface IImageProductUsageServiceServer {
    write: grpc.handleUnaryCall<yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse>;
}

export interface IImageProductUsageServiceClient {
    write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
    write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
    write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
}

export class ImageProductUsageServiceClient extends grpc.Client implements IImageProductUsageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
    public write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
    public write(request: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse) => void): grpc.ClientUnaryCall;
}
