// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/target_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_apploadbalancer_v1_target_group_service_pb from "../../../../yandex/cloud/apploadbalancer/v1/target_group_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_target_group_pb from "../../../../yandex/cloud/apploadbalancer/v1/target_group_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ITargetGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ITargetGroupServiceService_IGet;
    list: ITargetGroupServiceService_IList;
    create: ITargetGroupServiceService_ICreate;
    update: ITargetGroupServiceService_IUpdate;
    delete: ITargetGroupServiceService_IDelete;
    addTargets: ITargetGroupServiceService_IAddTargets;
    removeTargets: ITargetGroupServiceService_IRemoveTargets;
    listOperations: ITargetGroupServiceService_IListOperations;
}

interface ITargetGroupServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup>;
}
interface ITargetGroupServiceService_IList extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse>;
}
interface ITargetGroupServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITargetGroupServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITargetGroupServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITargetGroupServiceService_IAddTargets extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/AddTargets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITargetGroupServiceService_IRemoveTargets extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/RemoveTargets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ITargetGroupServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.TargetGroupService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse>;
}

export const TargetGroupServiceService: ITargetGroupServiceService;

export interface ITargetGroupServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup>;
    list: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    addTargets: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeTargets: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse>;
}

export interface ITargetGroupServiceClient {
    get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class TargetGroupServiceClient extends grpc.Client implements ITargetGroupServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.GetTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.CreateTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.UpdateTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.DeleteTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.AddTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeTargets(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.RemoveTargetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_target_group_service_pb.ListTargetGroupOperationsResponse) => void): grpc.ClientUnaryCall;
}
