// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/job_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as yandex_cloud_dataproc_v1_job_service_pb from "../../../../yandex/cloud/dataproc/v1/job_service_pb";
import * as yandex_cloud_dataproc_v1_job_pb from "../../../../yandex/cloud/dataproc/v1/job_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IJobServiceService_IList;
    create: IJobServiceService_ICreate;
    get: IJobServiceService_IGet;
    listLog: IJobServiceService_IListLog;
}

interface IJobServiceService_IList extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse> {
    path: "/yandex.cloud.dataproc.v1.JobService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse>;
}
interface IJobServiceService_ICreate extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, yandex_cloud_operation_operation_pb.Operation> {
    path: "/yandex.cloud.dataproc.v1.JobService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_operation_operation_pb.Operation>;
    responseDeserialize: grpc.deserialize<yandex_cloud_operation_operation_pb.Operation>;
}
interface IJobServiceService_IGet extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, yandex_cloud_dataproc_v1_job_pb.Job> {
    path: "/yandex.cloud.dataproc.v1.JobService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_pb.Job>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_pb.Job>;
}
interface IJobServiceService_IListLog extends grpc.MethodDefinition<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse> {
    path: "/yandex.cloud.dataproc.v1.JobService/ListLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse>;
}

export const JobServiceService: IJobServiceService;

export interface IJobServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse>;
    create: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, yandex_cloud_operation_operation_pb.Operation>;
    get: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, yandex_cloud_dataproc_v1_job_pb.Job>;
    listLog: grpc.handleUnaryCall<yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse>;
}

export interface IJobServiceClient {
    list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
    listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
    listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
}

export class JobServiceClient extends grpc.Client implements IJobServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public list(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public create(request: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_operation_operation_pb.Operation) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    public get(request: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_pb.Job) => void): grpc.ClientUnaryCall;
    public listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
    public listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
    public listLog(request: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse) => void): grpc.ClientUnaryCall;
}
