// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_dataproc_v1_common_pb from "../../../../yandex/cloud/dataproc/v1/common_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class Cluster extends jspb.Message { 
    getId(): string;
    setId(value: string): Cluster;
    getFolderId(): string;
    setFolderId(value: string): Cluster;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
    getName(): string;
    setName(value: string): Cluster;
    getDescription(): string;
    setDescription(value: string): Cluster;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearMonitoringList(): void;
    getMonitoringList(): Array<Monitoring>;
    setMonitoringList(value: Array<Monitoring>): Cluster;
    addMonitoring(value?: Monitoring, index?: number): Monitoring;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ClusterConfig | undefined;
    setConfig(value?: ClusterConfig): Cluster;
    getHealth(): yandex_cloud_dataproc_v1_common_pb.Health;
    setHealth(value: yandex_cloud_dataproc_v1_common_pb.Health): Cluster;
    getStatus(): Cluster.Status;
    setStatus(value: Cluster.Status): Cluster;
    getZoneId(): string;
    setZoneId(value: string): Cluster;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Cluster;
    getBucket(): string;
    setBucket(value: string): Cluster;
    getUiProxy(): boolean;
    setUiProxy(value: boolean): Cluster;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): Cluster;
    addSecurityGroupIds(value: string, index?: number): string;
    clearHostGroupIdsList(): void;
    getHostGroupIdsList(): Array<string>;
    setHostGroupIdsList(value: Array<string>): Cluster;
    addHostGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): Cluster;
    getLogGroupId(): string;
    setLogGroupId(value: string): Cluster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        monitoringList: Array<Monitoring.AsObject>,
        config?: ClusterConfig.AsObject,
        health: yandex_cloud_dataproc_v1_common_pb.Health,
        status: Cluster.Status,
        zoneId: string,
        serviceAccountId: string,
        bucket: string,
        uiProxy: boolean,
        securityGroupIdsList: Array<string>,
        hostGroupIdsList: Array<string>,
        deletionProtection: boolean,
        logGroupId: string,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    CREATING = 1,
    RUNNING = 2,
    ERROR = 3,
    STOPPING = 4,
    STOPPED = 5,
    STARTING = 6,
    }

}

export class Monitoring extends jspb.Message { 
    getName(): string;
    setName(value: string): Monitoring;
    getDescription(): string;
    setDescription(value: string): Monitoring;
    getLink(): string;
    setLink(value: string): Monitoring;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Monitoring.AsObject;
    static toObject(includeInstance: boolean, msg: Monitoring): Monitoring.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Monitoring, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Monitoring;
    static deserializeBinaryFromReader(message: Monitoring, reader: jspb.BinaryReader): Monitoring;
}

export namespace Monitoring {
    export type AsObject = {
        name: string,
        description: string,
        link: string,
    }
}

export class HadoopConfig extends jspb.Message { 
    clearServicesList(): void;
    getServicesList(): Array<HadoopConfig.Service>;
    setServicesList(value: Array<HadoopConfig.Service>): HadoopConfig;
    addServices(value: HadoopConfig.Service, index?: number): HadoopConfig.Service;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    clearSshPublicKeysList(): void;
    getSshPublicKeysList(): Array<string>;
    setSshPublicKeysList(value: Array<string>): HadoopConfig;
    addSshPublicKeys(value: string, index?: number): string;
    clearInitializationActionsList(): void;
    getInitializationActionsList(): Array<InitializationAction>;
    setInitializationActionsList(value: Array<InitializationAction>): HadoopConfig;
    addInitializationActions(value?: InitializationAction, index?: number): InitializationAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HadoopConfig.AsObject;
    static toObject(includeInstance: boolean, msg: HadoopConfig): HadoopConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HadoopConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HadoopConfig;
    static deserializeBinaryFromReader(message: HadoopConfig, reader: jspb.BinaryReader): HadoopConfig;
}

export namespace HadoopConfig {
    export type AsObject = {
        servicesList: Array<HadoopConfig.Service>,

        propertiesMap: Array<[string, string]>,
        sshPublicKeysList: Array<string>,
        initializationActionsList: Array<InitializationAction.AsObject>,
    }

    export enum Service {
    SERVICE_UNSPECIFIED = 0,
    HDFS = 1,
    YARN = 2,
    MAPREDUCE = 3,
    HIVE = 4,
    TEZ = 5,
    ZOOKEEPER = 6,
    HBASE = 7,
    SQOOP = 8,
    FLUME = 9,
    SPARK = 10,
    ZEPPELIN = 11,
    OOZIE = 12,
    LIVY = 13,
    }

}

export class ClusterConfig extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): ClusterConfig;

    hasHadoop(): boolean;
    clearHadoop(): void;
    getHadoop(): HadoopConfig | undefined;
    setHadoop(value?: HadoopConfig): ClusterConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterConfig): ClusterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterConfig;
    static deserializeBinaryFromReader(message: ClusterConfig, reader: jspb.BinaryReader): ClusterConfig;
}

export namespace ClusterConfig {
    export type AsObject = {
        versionId: string,
        hadoop?: HadoopConfig.AsObject,
    }
}

export class InitializationAction extends jspb.Message { 
    getUri(): string;
    setUri(value: string): InitializationAction;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): InitializationAction;
    addArgs(value: string, index?: number): string;
    getTimeout(): number;
    setTimeout(value: number): InitializationAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitializationAction.AsObject;
    static toObject(includeInstance: boolean, msg: InitializationAction): InitializationAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitializationAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitializationAction;
    static deserializeBinaryFromReader(message: InitializationAction, reader: jspb.BinaryReader): InitializationAction;
}

export namespace InitializationAction {
    export type AsObject = {
        uri: string,
        argsList: Array<string>,
        timeout: number,
    }
}
