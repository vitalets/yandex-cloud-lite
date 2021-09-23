// package: yandex.cloud.serverless.mdbproxy.v1
// file: yandex/cloud/serverless/mdbproxy/v1/proxy_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb from "../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_mdbproxy_v1_proxy_pb from "../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IProxyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IProxyServiceService_IGet;
    list: IProxyServiceService_IList;
    create: IProxyServiceService_ICreate;
    update: IProxyServiceService_IUpdate;
    delete: IProxyServiceService_IDelete;
    listOperations: IProxyServiceService_IListOperations;
    listAccessBindings: IProxyServiceService_IListAccessBindings;
    setAccessBindings: IProxyServiceService_ISetAccessBindings;
    updateAccessBindings: IProxyServiceService_IUpdateAccessBindings;
}

interface IProxyServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy>;
}
interface IProxyServiceService_IList extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse>;
}
interface IProxyServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProxyServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProxyServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProxyServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse>;
}
interface IProxyServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IProxyServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IProxyServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ProxyServiceService: IProxyServiceService;

export interface IProxyServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy>;
    list: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, yandex_cloud_operation_operation_pb.Operation>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IProxyServiceClient {
    get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class ProxyServiceClient extends grpc.Client implements IProxyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public listAccessBindings(request: yandex_cloud_access_access_pb.ListAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_access_access_pb.ListAccessBindingsResponse) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public setAccessBindings(request: yandex_cloud_access_access_pb.SetAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public updateAccessBindings(request: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
