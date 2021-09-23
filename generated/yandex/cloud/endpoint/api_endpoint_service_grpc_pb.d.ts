// package: yandex.cloud.endpoint
// file: yandex/cloud/endpoint/api_endpoint_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_endpoint_api_endpoint_service_pb from "../../../yandex/cloud/endpoint/api_endpoint_service_pb";
import * as yandex_cloud_endpoint_api_endpoint_pb from "../../../yandex/cloud/endpoint/api_endpoint_pb";

interface IApiEndpointServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IApiEndpointServiceService_IGet;
    list: IApiEndpointServiceService_IList;
}

interface IApiEndpointServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint> {
    path: "/yandex.cloud.endpoint.ApiEndpointService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint>;
    responseDeserialize: grpc.deserialize<yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint>;
}
interface IApiEndpointServiceService_IList extends grpc.MethodDefinition<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse> {
    path: "/yandex.cloud.endpoint.ApiEndpointService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse>;
}

export const ApiEndpointServiceService: IApiEndpointServiceService;

export interface IApiEndpointServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint>;
    list: grpc.handleUnaryCall<yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse>;
}

export interface IApiEndpointServiceClient {
    get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
}

export class ApiEndpointServiceClient extends grpc.Client implements IApiEndpointServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_endpoint_api_endpoint_service_pb.GetApiEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_endpoint_api_endpoint_service_pb.ListApiEndpointsResponse) => void): grpc.ClientUnaryCall;
}
