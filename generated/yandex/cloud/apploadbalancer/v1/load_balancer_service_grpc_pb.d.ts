// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/load_balancer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_apploadbalancer_v1_load_balancer_service_pb from "../../../../yandex/cloud/apploadbalancer/v1/load_balancer_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_load_balancer_pb from "../../../../yandex/cloud/apploadbalancer/v1/load_balancer_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ILoadBalancerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: ILoadBalancerServiceService_IGet;
    list: ILoadBalancerServiceService_IList;
    create: ILoadBalancerServiceService_ICreate;
    update: ILoadBalancerServiceService_IUpdate;
    delete: ILoadBalancerServiceService_IDelete;
    start: ILoadBalancerServiceService_IStart;
    stop: ILoadBalancerServiceService_IStop;
    addListener: ILoadBalancerServiceService_IAddListener;
    removeListener: ILoadBalancerServiceService_IRemoveListener;
    updateListener: ILoadBalancerServiceService_IUpdateListener;
    addSniMatch: ILoadBalancerServiceService_IAddSniMatch;
    updateSniMatch: ILoadBalancerServiceService_IUpdateSniMatch;
    removeSniMatch: ILoadBalancerServiceService_IRemoveSniMatch;
    getTargetStates: ILoadBalancerServiceService_IGetTargetStates;
    listOperations: ILoadBalancerServiceService_IListOperations;
}

interface ILoadBalancerServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer>;
}
interface ILoadBalancerServiceService_IList extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse>;
}
interface ILoadBalancerServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IStart extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IStop extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IAddListener extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IRemoveListener extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IUpdateListener extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IAddSniMatch extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IUpdateSniMatch extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IRemoveSniMatch extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface ILoadBalancerServiceService_IGetTargetStates extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse>;
}
interface ILoadBalancerServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse>;
}

export const LoadBalancerServiceService: ILoadBalancerServiceService;

export interface ILoadBalancerServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer>;
    list: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    start: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    stop: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, yandex_cloud_operation_operation_pb.Operation>;
    addListener: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeListener: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateListener: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, yandex_cloud_operation_operation_pb.Operation>;
    addSniMatch: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateSniMatch: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeSniMatch: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, yandex_cloud_operation_operation_pb.Operation>;
    getTargetStates: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse>;
}

export interface ILoadBalancerServiceClient {
    get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class LoadBalancerServiceClient extends grpc.Client implements ILoadBalancerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public start(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public stop(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateListener(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeSniMatch(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public getTargetStates(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse) => void): grpc.ClientUnaryCall;
}
