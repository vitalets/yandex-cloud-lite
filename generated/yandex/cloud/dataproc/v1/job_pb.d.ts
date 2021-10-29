// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/job.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Job extends jspb.Message { 
    getId(): string;
    setId(value: string): Job;
    getClusterId(): string;
    setClusterId(value: string): Job;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Job;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Job;

    hasFinishedAt(): boolean;
    clearFinishedAt(): void;
    getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Job;
    getName(): string;
    setName(value: string): Job;
    getCreatedBy(): string;
    setCreatedBy(value: string): Job;
    getStatus(): Job.Status;
    setStatus(value: Job.Status): Job;

    hasMapreduceJob(): boolean;
    clearMapreduceJob(): void;
    getMapreduceJob(): MapreduceJob | undefined;
    setMapreduceJob(value?: MapreduceJob): Job;

    hasSparkJob(): boolean;
    clearSparkJob(): void;
    getSparkJob(): SparkJob | undefined;
    setSparkJob(value?: SparkJob): Job;

    hasPysparkJob(): boolean;
    clearPysparkJob(): void;
    getPysparkJob(): PysparkJob | undefined;
    setPysparkJob(value?: PysparkJob): Job;

    hasHiveJob(): boolean;
    clearHiveJob(): void;
    getHiveJob(): HiveJob | undefined;
    setHiveJob(value?: HiveJob): Job;

    hasApplicationInfo(): boolean;
    clearApplicationInfo(): void;
    getApplicationInfo(): ApplicationInfo | undefined;
    setApplicationInfo(value?: ApplicationInfo): Job;

    getJobSpecCase(): Job.JobSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Job.AsObject;
    static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Job;
    static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
    export type AsObject = {
        id: string,
        clusterId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        createdBy: string,
        status: Job.Status,
        mapreduceJob?: MapreduceJob.AsObject,
        sparkJob?: SparkJob.AsObject,
        pysparkJob?: PysparkJob.AsObject,
        hiveJob?: HiveJob.AsObject,
        applicationInfo?: ApplicationInfo.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    PENDING = 2,
    RUNNING = 3,
    ERROR = 4,
    DONE = 5,
    }


    export enum JobSpecCase {
        JOB_SPEC_NOT_SET = 0,
        MAPREDUCE_JOB = 8,
        SPARK_JOB = 9,
        PYSPARK_JOB = 10,
        HIVE_JOB = 11,
    }

}

export class ApplicationAttempt extends jspb.Message { 
    getId(): string;
    setId(value: string): ApplicationAttempt;
    getAmContainerId(): string;
    setAmContainerId(value: string): ApplicationAttempt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationAttempt.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationAttempt): ApplicationAttempt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationAttempt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationAttempt;
    static deserializeBinaryFromReader(message: ApplicationAttempt, reader: jspb.BinaryReader): ApplicationAttempt;
}

export namespace ApplicationAttempt {
    export type AsObject = {
        id: string,
        amContainerId: string,
    }
}

export class ApplicationInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): ApplicationInfo;
    clearApplicationAttemptsList(): void;
    getApplicationAttemptsList(): Array<ApplicationAttempt>;
    setApplicationAttemptsList(value: Array<ApplicationAttempt>): ApplicationInfo;
    addApplicationAttempts(value?: ApplicationAttempt, index?: number): ApplicationAttempt;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationInfo): ApplicationInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationInfo;
    static deserializeBinaryFromReader(message: ApplicationInfo, reader: jspb.BinaryReader): ApplicationInfo;
}

export namespace ApplicationInfo {
    export type AsObject = {
        id: string,
        applicationAttemptsList: Array<ApplicationAttempt.AsObject>,
    }
}

export class MapreduceJob extends jspb.Message { 
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): MapreduceJob;
    addArgs(value: string, index?: number): string;
    clearJarFileUrisList(): void;
    getJarFileUrisList(): Array<string>;
    setJarFileUrisList(value: Array<string>): MapreduceJob;
    addJarFileUris(value: string, index?: number): string;
    clearFileUrisList(): void;
    getFileUrisList(): Array<string>;
    setFileUrisList(value: Array<string>): MapreduceJob;
    addFileUris(value: string, index?: number): string;
    clearArchiveUrisList(): void;
    getArchiveUrisList(): Array<string>;
    setArchiveUrisList(value: Array<string>): MapreduceJob;
    addArchiveUris(value: string, index?: number): string;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;

    hasMainJarFileUri(): boolean;
    clearMainJarFileUri(): void;
    getMainJarFileUri(): string;
    setMainJarFileUri(value: string): MapreduceJob;

    hasMainClass(): boolean;
    clearMainClass(): void;
    getMainClass(): string;
    setMainClass(value: string): MapreduceJob;

    getDriverCase(): MapreduceJob.DriverCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapreduceJob.AsObject;
    static toObject(includeInstance: boolean, msg: MapreduceJob): MapreduceJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapreduceJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapreduceJob;
    static deserializeBinaryFromReader(message: MapreduceJob, reader: jspb.BinaryReader): MapreduceJob;
}

export namespace MapreduceJob {
    export type AsObject = {
        argsList: Array<string>,
        jarFileUrisList: Array<string>,
        fileUrisList: Array<string>,
        archiveUrisList: Array<string>,

        propertiesMap: Array<[string, string]>,
        mainJarFileUri: string,
        mainClass: string,
    }

    export enum DriverCase {
        DRIVER_NOT_SET = 0,
        MAIN_JAR_FILE_URI = 6,
        MAIN_CLASS = 7,
    }

}

export class SparkJob extends jspb.Message { 
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): SparkJob;
    addArgs(value: string, index?: number): string;
    clearJarFileUrisList(): void;
    getJarFileUrisList(): Array<string>;
    setJarFileUrisList(value: Array<string>): SparkJob;
    addJarFileUris(value: string, index?: number): string;
    clearFileUrisList(): void;
    getFileUrisList(): Array<string>;
    setFileUrisList(value: Array<string>): SparkJob;
    addFileUris(value: string, index?: number): string;
    clearArchiveUrisList(): void;
    getArchiveUrisList(): Array<string>;
    setArchiveUrisList(value: Array<string>): SparkJob;
    addArchiveUris(value: string, index?: number): string;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    getMainJarFileUri(): string;
    setMainJarFileUri(value: string): SparkJob;
    getMainClass(): string;
    setMainClass(value: string): SparkJob;
    clearPackagesList(): void;
    getPackagesList(): Array<string>;
    setPackagesList(value: Array<string>): SparkJob;
    addPackages(value: string, index?: number): string;
    clearRepositoriesList(): void;
    getRepositoriesList(): Array<string>;
    setRepositoriesList(value: Array<string>): SparkJob;
    addRepositories(value: string, index?: number): string;
    clearExcludePackagesList(): void;
    getExcludePackagesList(): Array<string>;
    setExcludePackagesList(value: Array<string>): SparkJob;
    addExcludePackages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SparkJob.AsObject;
    static toObject(includeInstance: boolean, msg: SparkJob): SparkJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SparkJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SparkJob;
    static deserializeBinaryFromReader(message: SparkJob, reader: jspb.BinaryReader): SparkJob;
}

export namespace SparkJob {
    export type AsObject = {
        argsList: Array<string>,
        jarFileUrisList: Array<string>,
        fileUrisList: Array<string>,
        archiveUrisList: Array<string>,

        propertiesMap: Array<[string, string]>,
        mainJarFileUri: string,
        mainClass: string,
        packagesList: Array<string>,
        repositoriesList: Array<string>,
        excludePackagesList: Array<string>,
    }
}

export class PysparkJob extends jspb.Message { 
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): PysparkJob;
    addArgs(value: string, index?: number): string;
    clearJarFileUrisList(): void;
    getJarFileUrisList(): Array<string>;
    setJarFileUrisList(value: Array<string>): PysparkJob;
    addJarFileUris(value: string, index?: number): string;
    clearFileUrisList(): void;
    getFileUrisList(): Array<string>;
    setFileUrisList(value: Array<string>): PysparkJob;
    addFileUris(value: string, index?: number): string;
    clearArchiveUrisList(): void;
    getArchiveUrisList(): Array<string>;
    setArchiveUrisList(value: Array<string>): PysparkJob;
    addArchiveUris(value: string, index?: number): string;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    getMainPythonFileUri(): string;
    setMainPythonFileUri(value: string): PysparkJob;
    clearPythonFileUrisList(): void;
    getPythonFileUrisList(): Array<string>;
    setPythonFileUrisList(value: Array<string>): PysparkJob;
    addPythonFileUris(value: string, index?: number): string;
    clearPackagesList(): void;
    getPackagesList(): Array<string>;
    setPackagesList(value: Array<string>): PysparkJob;
    addPackages(value: string, index?: number): string;
    clearRepositoriesList(): void;
    getRepositoriesList(): Array<string>;
    setRepositoriesList(value: Array<string>): PysparkJob;
    addRepositories(value: string, index?: number): string;
    clearExcludePackagesList(): void;
    getExcludePackagesList(): Array<string>;
    setExcludePackagesList(value: Array<string>): PysparkJob;
    addExcludePackages(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PysparkJob.AsObject;
    static toObject(includeInstance: boolean, msg: PysparkJob): PysparkJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PysparkJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PysparkJob;
    static deserializeBinaryFromReader(message: PysparkJob, reader: jspb.BinaryReader): PysparkJob;
}

export namespace PysparkJob {
    export type AsObject = {
        argsList: Array<string>,
        jarFileUrisList: Array<string>,
        fileUrisList: Array<string>,
        archiveUrisList: Array<string>,

        propertiesMap: Array<[string, string]>,
        mainPythonFileUri: string,
        pythonFileUrisList: Array<string>,
        packagesList: Array<string>,
        repositoriesList: Array<string>,
        excludePackagesList: Array<string>,
    }
}

export class QueryList extends jspb.Message { 
    clearQueriesList(): void;
    getQueriesList(): Array<string>;
    setQueriesList(value: Array<string>): QueryList;
    addQueries(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryList.AsObject;
    static toObject(includeInstance: boolean, msg: QueryList): QueryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryList;
    static deserializeBinaryFromReader(message: QueryList, reader: jspb.BinaryReader): QueryList;
}

export namespace QueryList {
    export type AsObject = {
        queriesList: Array<string>,
    }
}

export class HiveJob extends jspb.Message { 

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    getContinueOnFailure(): boolean;
    setContinueOnFailure(value: boolean): HiveJob;

    getScriptVariablesMap(): jspb.Map<string, string>;
    clearScriptVariablesMap(): void;
    clearJarFileUrisList(): void;
    getJarFileUrisList(): Array<string>;
    setJarFileUrisList(value: Array<string>): HiveJob;
    addJarFileUris(value: string, index?: number): string;

    hasQueryFileUri(): boolean;
    clearQueryFileUri(): void;
    getQueryFileUri(): string;
    setQueryFileUri(value: string): HiveJob;

    hasQueryList(): boolean;
    clearQueryList(): void;
    getQueryList(): QueryList | undefined;
    setQueryList(value?: QueryList): HiveJob;

    getQueryTypeCase(): HiveJob.QueryTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HiveJob.AsObject;
    static toObject(includeInstance: boolean, msg: HiveJob): HiveJob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HiveJob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HiveJob;
    static deserializeBinaryFromReader(message: HiveJob, reader: jspb.BinaryReader): HiveJob;
}

export namespace HiveJob {
    export type AsObject = {

        propertiesMap: Array<[string, string]>,
        continueOnFailure: boolean,

        scriptVariablesMap: Array<[string, string]>,
        jarFileUrisList: Array<string>,
        queryFileUri: string,
        queryList?: QueryList.AsObject,
    }

    export enum QueryTypeCase {
        QUERY_TYPE_NOT_SET = 0,
        QUERY_FILE_URI = 5,
        QUERY_LIST = 6,
    }

}
