// package: yandex.cloud.dataproc.manager.v1
// file: yandex/cloud/dataproc/manager/v1/manager_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_dataproc_manager_v1_manager_service_pb from "../../../../../yandex/cloud/dataproc/manager/v1/manager_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IDataprocManagerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    report: IDataprocManagerServiceService_IReport;
}

interface IDataprocManagerServiceService_IReport extends grpc.MethodDefinition<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply> {
    path: "/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply>;
}

export const DataprocManagerServiceService: IDataprocManagerServiceService;

export interface IDataprocManagerServiceServer extends grpc.UntypedServiceImplementation {
    report: grpc.handleUnaryCall<yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply>;
}

export interface IDataprocManagerServiceClient {
    report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
    report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
    report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
}

export class DataprocManagerServiceClient extends grpc.Client implements IDataprocManagerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
    public report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
    public report(request: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply) => void): grpc.ClientUnaryCall;
}
