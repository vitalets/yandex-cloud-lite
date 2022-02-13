// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/endpoint_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_datatransfer_v1_endpoint_service_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint_service_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_datatransfer_v1_endpoint_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";

interface IEndpointServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IEndpointServiceService_IGet;
    list: IEndpointServiceService_IList;
    create: IEndpointServiceService_ICreate;
    update: IEndpointServiceService_IUpdate;
    delete: IEndpointServiceService_IDelete;
}

interface IEndpointServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint> {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint>;
}
interface IEndpointServiceService_IList extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse> {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse>;
}
interface IEndpointServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IEndpointServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IEndpointServiceService_IDelete extends grpc.MethodDefinition<yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const EndpointServiceService: IEndpointServiceService;

export interface IEndpointServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint>;
    list: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, yandex_cloud_operation_operation_pb.Operation>;
    update: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, yandex_cloud_operation_operation_pb.Operation>;
    delete: grpc.handleUnaryCall<yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IEndpointServiceClient {
    get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class EndpointServiceClient extends grpc.Client implements IEndpointServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public delete(request: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
