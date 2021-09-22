// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_reading_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_logging_v1_log_reading_service_pb from "../../../../yandex/cloud/logging/v1/log_reading_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_logging_v1_log_entry_pb from "../../../../yandex/cloud/logging/v1/log_entry_pb";

interface ILogReadingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: ILogReadingServiceService_IRead;
}

interface ILogReadingServiceService_IRead extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse> {
    path: "/yandex.cloud.logging.v1.LogReadingService/Read";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse>;
}

export const LogReadingServiceService: ILogReadingServiceService;

export interface ILogReadingServiceServer {
    read: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse>;
}

export interface ILogReadingServiceClient {
    read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
}

export class LogReadingServiceClient extends grpc.Client implements ILogReadingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
    public read(request: yandex_cloud_logging_v1_log_reading_service_pb.ReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_reading_service_pb.ReadResponse) => void): grpc.ClientUnaryCall;
}
