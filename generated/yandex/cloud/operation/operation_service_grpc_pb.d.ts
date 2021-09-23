// package: yandex.cloud.operation
// file: yandex/cloud/operation/operation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_operation_operation_service_pb from "../../../yandex/cloud/operation/operation_service_pb";
import * as yandex_cloud_operation_operation_pb from "../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../yandex/cloud/validation_pb";

interface IOperationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IOperationServiceService_IGet;
    cancel: IOperationServiceService_ICancel;
}

interface IOperationServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_operation_operation_service_pb.GetOperationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.operation.OperationService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_operation_operation_service_pb.GetOperationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_operation_operation_service_pb.GetOperationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IOperationServiceService_ICancel extends grpc.MethodDefinition<yandex_cloud_operation_operation_service_pb.CancelOperationRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.operation.OperationService/Cancel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_operation_operation_service_pb.CancelOperationRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_operation_operation_service_pb.CancelOperationRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}

export const OperationServiceService: IOperationServiceService;

export interface IOperationServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<yandex_cloud_operation_operation_service_pb.GetOperationRequest, yandex_cloud_operation_operation_pb.Operation>;
    cancel: grpc.handleUnaryCall<yandex_cloud_operation_operation_service_pb.CancelOperationRequest, yandex_cloud_operation_operation_pb.Operation>;
}

export interface IOperationServiceClient {
    get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}

export class OperationServiceClient extends grpc.Client implements IOperationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_operation_operation_service_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public cancel(request: yandex_cloud_operation_operation_service_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
}
