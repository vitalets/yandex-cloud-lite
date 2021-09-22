// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/filesystem_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_filesystem_service_pb from "../../../../yandex/cloud/compute/v1/filesystem_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_filesystem_pb from "../../../../yandex/cloud/compute/v1/filesystem_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IFilesystemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IFilesystemServiceService_IGet;
    list: IFilesystemServiceService_IList;
    create: IFilesystemServiceService_ICreate;
    update: IFilesystemServiceService_IUpdate;
    delete: IFilesystemServiceService_IDelete;
    listOperations: IFilesystemServiceService_IListOperations;
}

interface IFilesystemServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, yandex_cloud_compute_v1_filesystem_pb.Filesystem> {
    path: "/yandex.cloud.compute.v1.FilesystemService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_pb.Filesystem>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_pb.Filesystem>;
}
interface IFilesystemServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse> {
    path: "/yandex.cloud.compute.v1.FilesystemService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse>;
}
interface IFilesystemServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.FilesystemService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFilesystemServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.FilesystemService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFilesystemServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.FilesystemService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IFilesystemServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse> {
    path: "/yandex.cloud.compute.v1.FilesystemService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse>;
}

export const FilesystemServiceService: IFilesystemServiceService;

export interface IFilesystemServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, yandex_cloud_compute_v1_filesystem_pb.Filesystem>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse>;
}

export interface IFilesystemServiceClient {
    get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class FilesystemServiceClient extends grpc.Client implements IFilesystemServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_filesystem_service_pb.GetFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_pb.Filesystem) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_filesystem_service_pb.CreateFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_filesystem_service_pb.UpdateFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_filesystem_service_pb.DeleteFilesystemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_filesystem_service_pb.ListFilesystemOperationsResponse) => void): grpc.ClientUnaryCall;
}
