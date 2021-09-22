// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_placement_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_disk_placement_group_service_pb from "../../../../yandex/cloud/compute/v1/disk_placement_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_compute_v1_disk_placement_group_pb from "../../../../yandex/cloud/compute/v1/disk_placement_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IDiskPlacementGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IDiskPlacementGroupServiceService_IGet;
    list: IDiskPlacementGroupServiceService_IList;
    create: IDiskPlacementGroupServiceService_ICreate;
    update: IDiskPlacementGroupServiceService_IUpdate;
    delete: IDiskPlacementGroupServiceService_IDelete;
    listDisks: IDiskPlacementGroupServiceService_IListDisks;
    listOperations: IDiskPlacementGroupServiceService_IListOperations;
}

interface IDiskPlacementGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup>;
}
interface IDiskPlacementGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse>;
}
interface IDiskPlacementGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskPlacementGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskPlacementGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IDiskPlacementGroupServiceService_IListDisks extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListDisks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse>;
}
interface IDiskPlacementGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse> {
    path: "/yandex.cloud.compute.v1.DiskPlacementGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse>;
}

export const DiskPlacementGroupServiceService: IDiskPlacementGroupServiceService;

export interface IDiskPlacementGroupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listDisks: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse>;
}

export interface IDiskPlacementGroupServiceClient {
    get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class DiskPlacementGroupServiceClient extends grpc.Client implements IDiskPlacementGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.GetDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.CreateDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.UpdateDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.DeleteDiskPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    public listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    public listDisks(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupDisksResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_disk_placement_group_service_pb.ListDiskPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}
