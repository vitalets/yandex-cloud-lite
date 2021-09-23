// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_compute_v1_disk_service_pb from "../../../../yandex/cloud/compute/v1/disk_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IDiskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDiskServiceService_IGet;
    list: IDiskServiceService_IList;
    create: IDiskServiceService_ICreate;
    update: IDiskServiceService_IUpdate;
    delete: IDiskServiceService_IDelete;
    listOperations: IDiskServiceService_IListOperations;
}

interface IDiskServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, yandex_cloud_compute_v1_disk_pb.Disk> {
    path: "/yandex.cloud.compute.v1.DiskService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_pb.Disk>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_pb.Disk>;
}
interface IDiskServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse> {
    path: "/yandex.cloud.compute.v1.DiskService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse>;
}
interface IDiskServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse> {
    path: "/yandex.cloud.compute.v1.DiskService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse>;
}

export const DiskServiceService: IDiskServiceService;

export interface IDiskServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, yandex_cloud_compute_v1_disk_pb.Disk>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse>;
}

export interface IDiskServiceClient {
    get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class DiskServiceClient extends grpc.Client implements IDiskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_service_pb.GetDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_pb.Disk) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_service_pb.ListDisksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDisksResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_service_pb.CreateDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_service_pb.UpdateDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_service_pb.DeleteDiskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_service_pb.ListDiskOperationsResponse) => void): grpc.ClientUnaryCall;
}
