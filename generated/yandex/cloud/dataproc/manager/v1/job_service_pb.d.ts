// package: yandex.cloud.dataproc.manager.v1
// file: yandex/cloud/dataproc/manager/v1/job_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_dataproc_manager_v1_job_pb from "../../../../../yandex/cloud/dataproc/manager/v1/job_pb";

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
    getJobsList(): Array<yandex_cloud_dataproc_manager_v1_job_pb.Job>;
    setJobsList(value: Array<yandex_cloud_dataproc_manager_v1_job_pb.Job>): ListJobsResponse;
    addJobs(value?: yandex_cloud_dataproc_manager_v1_job_pb.Job, index?: number): yandex_cloud_dataproc_manager_v1_job_pb.Job;
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
        jobsList: Array<yandex_cloud_dataproc_manager_v1_job_pb.Job.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateJobStatusRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateJobStatusRequest;
    getJobId(): string;
    setJobId(value: string): UpdateJobStatusRequest;
    getStatus(): yandex_cloud_dataproc_manager_v1_job_pb.Job.Status;
    setStatus(value: yandex_cloud_dataproc_manager_v1_job_pb.Job.Status): UpdateJobStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateJobStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateJobStatusRequest): UpdateJobStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateJobStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateJobStatusRequest;
    static deserializeBinaryFromReader(message: UpdateJobStatusRequest, reader: jspb.BinaryReader): UpdateJobStatusRequest;
}

export namespace UpdateJobStatusRequest {
    export type AsObject = {
        clusterId: string,
        jobId: string,
        status: yandex_cloud_dataproc_manager_v1_job_pb.Job.Status,
    }
}

export class UpdateJobStatusResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateJobStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateJobStatusResponse): UpdateJobStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateJobStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateJobStatusResponse;
    static deserializeBinaryFromReader(message: UpdateJobStatusResponse, reader: jspb.BinaryReader): UpdateJobStatusResponse;
}

export namespace UpdateJobStatusResponse {
    export type AsObject = {
    }
}
