// package: yandex.cloud.loadbalancer.v1
// file: yandex/cloud/loadbalancer/v1/network_load_balancer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb from "../../../../yandex/cloud/loadbalancer/v1/network_load_balancer_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_loadbalancer_v1_network_load_balancer_pb from "../../../../yandex/cloud/loadbalancer/v1/network_load_balancer_pb";

interface INetworkLoadBalancerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: INetworkLoadBalancerServiceService_IGet;
    list: INetworkLoadBalancerServiceService_IList;
    create: INetworkLoadBalancerServiceService_ICreate;
    update: INetworkLoadBalancerServiceService_IUpdate;
    delete: INetworkLoadBalancerServiceService_IDelete;
    start: INetworkLoadBalancerServiceService_IStart;
    stop: INetworkLoadBalancerServiceService_IStop;
    attachTargetGroup: INetworkLoadBalancerServiceService_IAttachTargetGroup;
    detachTargetGroup: INetworkLoadBalancerServiceService_IDetachTargetGroup;
    getTargetStates: INetworkLoadBalancerServiceService_IGetTargetStates;
    addListener: INetworkLoadBalancerServiceService_IAddListener;
    removeListener: INetworkLoadBalancerServiceService_IRemoveListener;
    listOperations: INetworkLoadBalancerServiceService_IListOperations;
}

interface INetworkLoadBalancerServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer>;
    responseDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer>;
}
interface INetworkLoadBalancerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse>;
}
interface INetworkLoadBalancerServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IAttachTargetGroup extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IDetachTargetGroup extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IGetTargetStates extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse>;
}
interface INetworkLoadBalancerServiceService_IAddListener extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IRemoveListener extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface INetworkLoadBalancerServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse> {
    path: "/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse>;
}

export const NetworkLoadBalancerServiceService: INetworkLoadBalancerServiceService;

export interface INetworkLoadBalancerServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer>;
    list: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    attachTargetGroup: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    detachTargetGroup: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, yandex_cloud_operation_operation_pb.Operation>;
    getTargetStates: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse>;
    addListener: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeListener: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse>;
}

export interface INetworkLoadBalancerServiceClient {
    get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class NetworkLoadBalancerServiceClient extends grpc.Client implements INetworkLoadBalancerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public attachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public detachTargetGroup(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
}
