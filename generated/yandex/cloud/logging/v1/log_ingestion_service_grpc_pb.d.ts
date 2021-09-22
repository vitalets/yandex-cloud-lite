// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_ingestion_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_logging_v1_log_ingestion_service_pb from "../../../../yandex/cloud/logging/v1/log_ingestion_service_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";
import * as yandex_cloud_logging_v1_log_entry_pb from "../../../../yandex/cloud/logging/v1/log_entry_pb";
import * as yandex_cloud_logging_v1_log_resource_pb from "../../../../yandex/cloud/logging/v1/log_resource_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

interface ILogIngestionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    write: ILogIngestionServiceService_IWrite;
}

interface ILogIngestionServiceService_IWrite extends grpc.MethodDefinition<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse> {
    path: "/yandex.cloud.logging.v1.LogIngestionService/Write";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse>;
}

export const LogIngestionServiceService: ILogIngestionServiceService;

export interface ILogIngestionServiceServer {
    write: grpc.handleUnaryCall<yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse>;
}

export interface ILogIngestionServiceClient {
    write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
}

export class LogIngestionServiceClient extends grpc.Client implements ILogIngestionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
    public write(request: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_logging_v1_log_ingestion_service_pb.WriteResponse) => void): grpc.ClientUnaryCall;
}
