// package: yandex.cloud.serverless.apigateway.v1
// file: yandex/cloud/serverless/apigateway/v1/apigateway_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_serverless_apigateway_v1_apigateway_service_pb from "../../../../../yandex/cloud/serverless/apigateway/v1/apigateway_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_apigateway_v1_apigateway_pb from "../../../../../yandex/cloud/serverless/apigateway/v1/apigateway_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

interface IApiGatewayServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IApiGatewayServiceService_IGet;
    list: IApiGatewayServiceService_IList;
    create: IApiGatewayServiceService_ICreate;
    update: IApiGatewayServiceService_IUpdate;
    delete: IApiGatewayServiceService_IDelete;
    addDomain: IApiGatewayServiceService_IAddDomain;
    removeDomain: IApiGatewayServiceService_IRemoveDomain;
    getOpenapiSpec: IApiGatewayServiceService_IGetOpenapiSpec;
    listOperations: IApiGatewayServiceService_IListOperations;
    listAccessBindings: IApiGatewayServiceService_IListAccessBindings;
    setAccessBindings: IApiGatewayServiceService_ISetAccessBindings;
    updateAccessBindings: IApiGatewayServiceService_IUpdateAccessBindings;
}

interface IApiGatewayServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway>;
}
interface IApiGatewayServiceService_IList extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse>;
}
interface IApiGatewayServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IAddDomain extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IRemoveDomain extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IGetOpenapiSpec extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse>;
}
interface IApiGatewayServiceService_IListOperations extends grpc.MethodDefinition<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse>;
}
interface IApiGatewayServiceService_IListAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
}
interface IApiGatewayServiceService_ISetAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.SetAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IApiGatewayServiceService_IUpdateAccessBindings extends grpc.MethodDefinition<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const ApiGatewayServiceService: IApiGatewayServiceService;

export interface IApiGatewayServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway>;
    list: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, yandex_cloud_operation_operation_pb.Operation>;
    addDomain: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, yandex_cloud_operation_operation_pb.Operation>;
    removeDomain: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, yandex_cloud_operation_operation_pb.Operation>;
    getOpenapiSpec: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse>;
    listOperations: grpc.handleUnaryCall<yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse>;
    listAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.ListAccessBindingsRequest, yandex_cloud_access_access_pb.ListAccessBindingsResponse>;
    setAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.SetAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
    updateAccessBindings: grpc.handleUnaryCall<yandex_cloud_access_access_pb.UpdateAccessBindingsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IApiGatewayServiceClient {
    get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
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

export class ApiGatewayServiceClient extends grpc.Client implements IApiGatewayServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public addDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public removeDomain(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    public getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    public getOpenapiSpec(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
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
