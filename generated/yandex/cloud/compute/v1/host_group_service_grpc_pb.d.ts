// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_compute_v1_host_group_service_pb from "../../../../yandex/cloud/compute/v1/host_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_compute_v1_host_group_pb from "../../../../yandex/cloud/compute/v1/host_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IHostGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IHostGroupServiceService_IGet;
    list: IHostGroupServiceService_IList;
    create: IHostGroupServiceService_ICreate;
    update: IHostGroupServiceService_IUpdate;
    delete: IHostGroupServiceService_IDelete;
    listOperations: IHostGroupServiceService_IListOperations;
    listInstances: IHostGroupServiceService_IListInstances;
    listHosts: IHostGroupServiceService_IListHosts;
}

interface IHostGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, yandex_cloud_compute_v1_host_group_pb.HostGroup> {
    path: "/yandex.cloud.compute.v1.HostGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_pb.HostGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_pb.HostGroup>;
}
interface IHostGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse> {
    path: "/yandex.cloud.compute.v1.HostGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse>;
}
interface IHostGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.HostGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHostGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.HostGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHostGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.compute.v1.HostGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHostGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse> {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse>;
}
interface IHostGroupServiceService_IListInstances extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse> {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListInstances";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse>;
}
interface IHostGroupServiceService_IListHosts extends grpc.MethodDefinition<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse> {
    path: "/yandex.cloud.compute.v1.HostGroupService/ListHosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse>;
}

export const HostGroupServiceService: IHostGroupServiceService;

export interface IHostGroupServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, yandex_cloud_compute_v1_host_group_pb.HostGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse>;
    listInstances: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse>;
    listHosts: grpc.handleUnaryCall<yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse>;
}

export interface IHostGroupServiceClient {
    get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
    listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
}

export class HostGroupServiceClient extends grpc.Client implements IHostGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_compute_v1_host_group_service_pb.GetHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_pb.HostGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_compute_v1_host_group_service_pb.CreateHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_compute_v1_host_group_service_pb.UpdateHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_compute_v1_host_group_service_pb.DeleteHostGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listInstances(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupInstancesResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
    public listHosts(request: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_compute_v1_host_group_service_pb.ListHostGroupHostsResponse) => void): grpc.ClientUnaryCall;
}
