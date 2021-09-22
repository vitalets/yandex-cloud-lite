// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/image_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_image_service_pb from "../../../../yandex/cloud/compute/v1/image_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_image_pb from "../../../../yandex/cloud/compute/v1/image_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IImageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IImageServiceService_IGet;
    getLatestByFamily: IImageServiceService_IGetLatestByFamily;
    list: IImageServiceService_IList;
    create: IImageServiceService_ICreate;
    update: IImageServiceService_IUpdate;
    delete: IImageServiceService_IDelete;
    listOperations: IImageServiceService_IListOperations;
}

interface IImageServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.GetImageRequest, yandex_cloud_compute_v1_image_pb.Image> {
    path: "/yandex.cloud.compute.v1.ImageService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.GetImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.GetImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_image_pb.Image>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_pb.Image>;
}
interface IImageServiceService_IGetLatestByFamily extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, yandex_cloud_compute_v1_image_pb.Image> {
    path: "/yandex.cloud.compute.v1.ImageService/GetLatestByFamily";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_image_pb.Image>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_pb.Image>;
}
interface IImageServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, yandex_cloud_compute_v1_image_service_pb.ListImagesResponse> {
    path: "/yandex.cloud.compute.v1.ImageService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.ListImagesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.ListImagesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.ListImagesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.ListImagesResponse>;
}
interface IImageServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.ImageService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.CreateImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.CreateImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IImageServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.ImageService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IImageServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.ImageService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IImageServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse> {
    path: "/yandex.cloud.compute.v1.ImageService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse>;
}

export const ImageServiceService: IImageServiceService;

export interface IImageServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.GetImageRequest, yandex_cloud_compute_v1_image_pb.Image>;
    getLatestByFamily: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, yandex_cloud_compute_v1_image_pb.Image>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, yandex_cloud_compute_v1_image_service_pb.ListImagesResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse>;
}

export interface IImageServiceClient {
    get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class ImageServiceClient extends grpc.Client implements IImageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_image_service_pb.GetImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public getLatestByFamily(request: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_pb.Image) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse) => void): grpc.ClientUnaryCall;
}
