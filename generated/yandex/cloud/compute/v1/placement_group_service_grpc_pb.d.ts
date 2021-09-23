// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/placement_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_compute_v1_placement_group_service_pb from "../../../../yandex/cloud/compute/v1/placement_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_compute_v1_placement_group_pb from "../../../../yandex/cloud/compute/v1/placement_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IPlacementGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IPlacementGroupServiceService_IGet;
    list: IPlacementGroupServiceService_IList;
    create: IPlacementGroupServiceService_ICreate;
    update: IPlacementGroupServiceService_IUpdate;
    delete: IPlacementGroupServiceService_IDelete;
    listInstances: IPlacementGroupServiceService_IListInstances;
    listOperations: IPlacementGroupServiceService_IListOperations;
}

interface IPlacementGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, yandex_cloud_compute_v1_placement_group_pb.PlacementGroup> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_pb.PlacementGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_pb.PlacementGroup>;
}
interface IPlacementGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse>;
}
interface IPlacementGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IPlacementGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IPlacementGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IPlacementGroupServiceService_IListInstances extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListInstances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse>;
}
interface IPlacementGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse> {
    path: "/yandex.cloud.compute.v1.PlacementGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse>;
}

export const PlacementGroupServiceService: IPlacementGroupServiceService;

export interface IPlacementGroupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, yandex_cloud_compute_v1_placement_group_pb.PlacementGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listInstances: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse>;
}

export interface IPlacementGroupServiceClient {
    get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class PlacementGroupServiceClient extends grpc.Client implements IPlacementGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_placement_group_service_pb.GetPlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_placement_group_service_pb.CreatePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_placement_group_service_pb.UpdatePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_placement_group_service_pb.DeletePlacementGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_placement_group_service_pb.ListPlacementGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}
