// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/raw_logs_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_cdn_v1_raw_logs_service_pb from "../../../../yandex/cloud/cdn/v1/raw_logs_service_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_raw_logs_pb from "../../../../yandex/cloud/cdn/v1/raw_logs_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IRawLogsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    activate: IRawLogsServiceService_IActivate;
    deactivate: IRawLogsServiceService_IDeactivate;
    get: IRawLogsServiceService_IGet;
    update: IRawLogsServiceService_IUpdate;
}

interface IRawLogsServiceService_IActivate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Activate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRawLogsServiceService_IDeactivate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Deactivate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IRawLogsServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse> {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse>;
}
interface IRawLogsServiceService_IUpdate extends grpc.MethodDefinition<yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.cdn.v1.RawLogsService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const RawLogsServiceService: IRawLogsServiceService;

export interface IRawLogsServiceServer extends grpc.UntypedServiceImplementation {
    activate: grpc.handleUnaryCall<yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation>;
    deactivate: grpc.handleUnaryCall<yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation>;
    get: grpc.handleUnaryCall<yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse>;
    update: grpc.handleUnaryCall<yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IRawLogsServiceClient {
    activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class RawLogsServiceClient extends grpc.Client implements IRawLogsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public activate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.ActivateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public deactivate(request: yandex_cloud_cdn_v1_raw_logs_service_pb.DeactivateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_cdn_v1_raw_logs_service_pb.GetRawLogsResponse) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public update(request: yandex_cloud_cdn_v1_raw_logs_service_pb.UpdateRawLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
