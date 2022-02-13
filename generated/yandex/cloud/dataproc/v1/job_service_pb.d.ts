// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/job_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_dataproc_v1_job_pb from "../../../../yandex/cloud/dataproc/v1/job_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";

export class GetJobRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetJobRequest;
    getJobId(): string;
    setJobId(value: string): GetJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobRequest): GetJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobRequest;
    static deserializeBinaryFromReader(message: GetJobRequest, reader: jspb.BinaryReader): GetJobRequest;
}

export namespace GetJobRequest {
    export type AsObject = {
        clusterId: string,
        jobId: string,
    }
}

export class ListJobsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListJobsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListJobsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListJobsRequest;
    getFilter(): string;
    setFilter(value: string): ListJobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
    static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListJobsResponse extends jspb.Message { 
    clearJobsList(): void;
    getJobsList(): Array<yandex_cloud_dataproc_v1_job_pb.Job>;
    setJobsList(value: Array<yandex_cloud_dataproc_v1_job_pb.Job>): ListJobsResponse;
    addJobs(value?: yandex_cloud_dataproc_v1_job_pb.Job, index?: number): yandex_cloud_dataproc_v1_job_pb.Job;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListJobsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
    static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
    export type AsObject = {
        jobsList: Array<yandex_cloud_dataproc_v1_job_pb.Job.AsObject>,
        nextPageToken: string,
    }
}

export class CreateJobRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateJobRequest;
    getName(): string;
    setName(value: string): CreateJobRequest;

    hasMapreduceJob(): boolean;
    clearMapreduceJob(): void;
    getMapreduceJob(): yandex_cloud_dataproc_v1_job_pb.MapreduceJob | undefined;
    setMapreduceJob(value?: yandex_cloud_dataproc_v1_job_pb.MapreduceJob): CreateJobRequest;

    hasSparkJob(): boolean;
    clearSparkJob(): void;
    getSparkJob(): yandex_cloud_dataproc_v1_job_pb.SparkJob | undefined;
    setSparkJob(value?: yandex_cloud_dataproc_v1_job_pb.SparkJob): CreateJobRequest;

    hasPysparkJob(): boolean;
    clearPysparkJob(): void;
    getPysparkJob(): yandex_cloud_dataproc_v1_job_pb.PysparkJob | undefined;
    setPysparkJob(value?: yandex_cloud_dataproc_v1_job_pb.PysparkJob): CreateJobRequest;

    hasHiveJob(): boolean;
    clearHiveJob(): void;
    getHiveJob(): yandex_cloud_dataproc_v1_job_pb.HiveJob | undefined;
    setHiveJob(value?: yandex_cloud_dataproc_v1_job_pb.HiveJob): CreateJobRequest;

    getJobSpecCase(): CreateJobRequest.JobSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
    static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
        mapreduceJob?: yandex_cloud_dataproc_v1_job_pb.MapreduceJob.AsObject,
        sparkJob?: yandex_cloud_dataproc_v1_job_pb.SparkJob.AsObject,
        pysparkJob?: yandex_cloud_dataproc_v1_job_pb.PysparkJob.AsObject,
        hiveJob?: yandex_cloud_dataproc_v1_job_pb.HiveJob.AsObject,
    }

    export enum JobSpecCase {
        JOB_SPEC_NOT_SET = 0,
        MAPREDUCE_JOB = 3,
        SPARK_JOB = 4,
        PYSPARK_JOB = 5,
        HIVE_JOB = 6,
    }

}

export class CreateJobMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateJobMetadata;
    getJobId(): string;
    setJobId(value: string): CreateJobMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJobMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJobMetadata): CreateJobMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJobMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJobMetadata;
    static deserializeBinaryFromReader(message: CreateJobMetadata, reader: jspb.BinaryReader): CreateJobMetadata;
}

export namespace CreateJobMetadata {
    export type AsObject = {
        clusterId: string,
        jobId: string,
    }
}

export class CancelJobRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CancelJobRequest;
    getJobId(): string;
    setJobId(value: string): CancelJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelJobRequest): CancelJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelJobRequest;
    static deserializeBinaryFromReader(message: CancelJobRequest, reader: jspb.BinaryReader): CancelJobRequest;
}

export namespace CancelJobRequest {
    export type AsObject = {
        clusterId: string,
        jobId: string,
    }
}

export class ListJobLogRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListJobLogRequest;
    getJobId(): string;
    setJobId(value: string): ListJobLogRequest;
    getPageSize(): number;
    setPageSize(value: number): ListJobLogRequest;
    getPageToken(): string;
    setPageToken(value: string): ListJobLogRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobLogRequest): ListJobLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobLogRequest;
    static deserializeBinaryFromReader(message: ListJobLogRequest, reader: jspb.BinaryReader): ListJobLogRequest;
}

export namespace ListJobLogRequest {
    export type AsObject = {
        clusterId: string,
        jobId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListJobLogResponse extends jspb.Message { 
    getContent(): string;
    setContent(value: string): ListJobLogResponse;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListJobLogResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobLogResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobLogResponse): ListJobLogResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobLogResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobLogResponse;
    static deserializeBinaryFromReader(message: ListJobLogResponse, reader: jspb.BinaryReader): ListJobLogResponse;
}

export namespace ListJobLogResponse {
    export type AsObject = {
        content: string,
        nextPageToken: string,
    }
}
