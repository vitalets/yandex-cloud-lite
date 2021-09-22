// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/payload_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_lockbox_v1_payload_service_pb from "../../../../yandex/cloud/lockbox/v1/payload_service_pb";
import * as yandex_cloud_lockbox_v1_payload_pb from "../../../../yandex/cloud/lockbox/v1/payload_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface IPayloadServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IPayloadServiceService_IGet;
}

interface IPayloadServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, yandex_cloud_lockbox_v1_payload_pb.Payload> {
    path: "/yandex.cloud.lockbox.v1.PayloadService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_lockbox_v1_payload_pb.Payload>;
    responseDeserialize: grpc.deserialize<yandex_cloud_lockbox_v1_payload_pb.Payload>;
}

export const PayloadServiceService: IPayloadServiceService;

export interface IPayloadServiceServer {
    get: grpc.handleUnaryCall<yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, yandex_cloud_lockbox_v1_payload_pb.Payload>;
}

export interface IPayloadServiceClient {
    get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
}

export class PayloadServiceClient extends grpc.Client implements IPayloadServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_lockbox_v1_payload_service_pb.GetPayloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_lockbox_v1_payload_pb.Payload) => void): grpc.ClientUnaryCall;
}
