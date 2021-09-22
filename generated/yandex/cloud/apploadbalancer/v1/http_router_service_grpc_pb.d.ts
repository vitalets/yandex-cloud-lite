// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/http_router_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_apploadbalancer_v1_http_router_service_pb from "../../../../yandex/cloud/apploadbalancer/v1/http_router_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_http_router_pb from "../../../../yandex/cloud/apploadbalancer/v1/http_router_pb";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IHttpRouterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IHttpRouterServiceService_IGet;
    list: IHttpRouterServiceService_IList;
    create: IHttpRouterServiceService_ICreate;
    update: IHttpRouterServiceService_IUpdate;
    delete: IHttpRouterServiceService_IDelete;
    listOperations: IHttpRouterServiceService_IListOperations;
}

interface IHttpRouterServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter>;
}
interface IHttpRouterServiceService_IList extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse>;
}
interface IHttpRouterServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHttpRouterServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHttpRouterServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IHttpRouterServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse> {
    path: "/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse>;
}

export const HttpRouterServiceService: IHttpRouterServiceService;

export interface IHttpRouterServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter>;
    list: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse>;
}

export interface IHttpRouterServiceClient {
    get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
}

export class HttpRouterServiceClient extends grpc.Client implements IHttpRouterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse) => void): grpc.ClientUnaryCall;
}
