// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/image_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_containerregistry_v1_image_service_pb from "../../../../yandex/cloud/containerregistry/v1/image_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_image_pb from "../../../../yandex/cloud/containerregistry/v1/image_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IImageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IImageServiceService_IList;
    get: IImageServiceService_IGet;
    delete: IImageServiceService_IDelete;
}

interface IImageServiceService_IList extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse> {
    path: "/yandex.cloud.containerregistry.v1.ImageService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse>;
}
interface IImageServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, yandex_cloud_containerregistry_v1_image_pb.Image> {
    path: "/yandex.cloud.containerregistry.v1.ImageService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_image_pb.Image>;
    responseDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_image_pb.Image>;
}
interface IImageServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.containerregistry.v1.ImageService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ImageServiceService: IImageServiceService;

export interface IImageServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse>;
    get: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, yandex_cloud_containerregistry_v1_image_pb.Image>;
    delete: grpc.handleUnaryCall<yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IImageServiceClient {
    list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class ImageServiceClient extends grpc.Client implements IImageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_containerregistry_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
