// package: yandex.cloud.dataproc.manager.v1
// file: yandex/cloud/dataproc/manager/v1/job_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_dataproc_manager_v1_job_service_pb from "../../../../../yandex/cloud/dataproc/manager/v1/job_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_dataproc_manager_v1_job_pb from "../../../../../yandex/cloud/dataproc/manager/v1/job_pb";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listActive: IJobServiceService_IListActive;
    updateStatus: IJobServiceService_IUpdateStatus;
}

interface IJobServiceService_IListActive extends grpc.MethodDefinition<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse> {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse>;
}
interface IJobServiceService_IUpdateStatus extends grpc.MethodDefinition<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse> {
    path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse>;
}

export const JobServiceService: IJobServiceService;

export interface IJobServiceServer extends grpc.UntypedServiceImplementation {
    listActive: grpc.handleUnaryCall<yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse>;
    updateStatus: grpc.handleUnaryCall<yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse>;
}

export interface IJobServiceClient {
    listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
    updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
    updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
}

export class JobServiceClient extends grpc.Client implements IJobServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public listActive(request: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
    public updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
    public updateStatus(request: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse) => void): grpc.ClientUnaryCall;
}
