// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_mdb_kafka_v1_common_pb from "../../../../../yandex/cloud/mdb/kafka/v1/common_pb";

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
    getEnvironment(): Cluster.Environment;
    setEnvironment(value: Cluster.Environment): Cluster;
    clearMonitoringList(): void;
    getMonitoringList(): Array<Monitoring>;
    setMonitoringList(value: Array<Monitoring>): Cluster;
    addMonitoring(value?: Monitoring, index?: number): Monitoring;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ConfigSpec | undefined;
    setConfig(value?: ConfigSpec): Cluster;
    getNetworkId(): string;
    setNetworkId(value: string): Cluster;
    getHealth(): Cluster.Health;
    setHealth(value: Cluster.Health): Cluster;
    getStatus(): Cluster.Status;
    setStatus(value: Cluster.Status): Cluster;
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
        environment: Cluster.Environment,
        monitoringList: Array<Monitoring.AsObject>,
        config?: ConfigSpec.AsObject,
        networkId: string,
        health: Cluster.Health,
        status: Cluster.Status,
        securityGroupIdsList: Array<string>,
        hostGroupIdsList: Array<string>,
        deletionProtection: boolean,
    }

    export enum Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    PRODUCTION = 1,
    PRESTABLE = 2,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    CREATING = 1,
    RUNNING = 2,
    ERROR = 3,
    UPDATING = 4,
    STOPPING = 5,
    STOPPED = 6,
    STARTING = 7,
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

export class ConfigSpec extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ConfigSpec;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): ConfigSpec.Kafka | undefined;
    setKafka(value?: ConfigSpec.Kafka): ConfigSpec;

    hasZookeeper(): boolean;
    clearZookeeper(): void;
    getZookeeper(): ConfigSpec.Zookeeper | undefined;
    setZookeeper(value?: ConfigSpec.Zookeeper): ConfigSpec;
    clearZoneIdList(): void;
    getZoneIdList(): Array<string>;
    setZoneIdList(value: Array<string>): ConfigSpec;
    addZoneId(value: string, index?: number): string;

    hasBrokersCount(): boolean;
    clearBrokersCount(): void;
    getBrokersCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBrokersCount(value?: google_protobuf_wrappers_pb.Int64Value): ConfigSpec;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): ConfigSpec;
    getUnmanagedTopics(): boolean;
    setUnmanagedTopics(value: boolean): ConfigSpec;
    getSchemaRegistry(): boolean;
    setSchemaRegistry(value: boolean): ConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigSpec): ConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigSpec;
    static deserializeBinaryFromReader(message: ConfigSpec, reader: jspb.BinaryReader): ConfigSpec;
}

export namespace ConfigSpec {
    export type AsObject = {
        version: string,
        kafka?: ConfigSpec.Kafka.AsObject,
        zookeeper?: ConfigSpec.Zookeeper.AsObject,
        zoneIdList: Array<string>,
        brokersCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        assignPublicIp: boolean,
        unmanagedTopics: boolean,
        schemaRegistry: boolean,
    }


    export class Kafka extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Kafka;

        hasKafkaConfig21(): boolean;
        clearKafkaConfig21(): void;
        getKafkaConfig21(): KafkaConfig2_1 | undefined;
        setKafkaConfig21(value?: KafkaConfig2_1): Kafka;

        hasKafkaConfig26(): boolean;
        clearKafkaConfig26(): void;
        getKafkaConfig26(): KafkaConfig2_6 | undefined;
        setKafkaConfig26(value?: KafkaConfig2_6): Kafka;

        hasKafkaConfig28(): boolean;
        clearKafkaConfig28(): void;
        getKafkaConfig28(): KafkaConfig2_8 | undefined;
        setKafkaConfig28(value?: KafkaConfig2_8): Kafka;

        getKafkaConfigCase(): Kafka.KafkaConfigCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Kafka.AsObject;
        static toObject(includeInstance: boolean, msg: Kafka): Kafka.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Kafka, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Kafka;
        static deserializeBinaryFromReader(message: Kafka, reader: jspb.BinaryReader): Kafka;
    }

    export namespace Kafka {
        export type AsObject = {
            resources?: Resources.AsObject,
            kafkaConfig21?: KafkaConfig2_1.AsObject,
            kafkaConfig26?: KafkaConfig2_6.AsObject,
            kafkaConfig28?: KafkaConfig2_8.AsObject,
        }

        export enum KafkaConfigCase {
            KAFKA_CONFIG_NOT_SET = 0,
            KAFKA_CONFIG_2_1 = 2,
            KAFKA_CONFIG_2_6 = 3,
            KAFKA_CONFIG_2_8 = 4,
        }

    }

    export class Zookeeper extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Zookeeper;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Zookeeper.AsObject;
        static toObject(includeInstance: boolean, msg: Zookeeper): Zookeeper.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Zookeeper, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Zookeeper;
        static deserializeBinaryFromReader(message: Zookeeper, reader: jspb.BinaryReader): Zookeeper;
    }

    export namespace Zookeeper {
        export type AsObject = {
            resources?: Resources.AsObject,
        }
    }

}

export class Resources extends jspb.Message { 
    getResourcePresetId(): string;
    setResourcePresetId(value: string): Resources;
    getDiskSize(): number;
    setDiskSize(value: number): Resources;
    getDiskTypeId(): string;
    setDiskTypeId(value: string): Resources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
    export type AsObject = {
        resourcePresetId: string,
        diskSize: number,
        diskTypeId: string,
    }
}

export class KafkaConfig2_1 extends jspb.Message { 
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): KafkaConfig2_1;

    hasLogFlushIntervalMessages(): boolean;
    clearLogFlushIntervalMessages(): void;
    getLogFlushIntervalMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMessages(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogFlushIntervalMs(): boolean;
    clearLogFlushIntervalMs(): void;
    getLogFlushIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogFlushSchedulerIntervalMs(): boolean;
    clearLogFlushSchedulerIntervalMs(): void;
    getLogFlushSchedulerIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushSchedulerIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogRetentionBytes(): boolean;
    clearLogRetentionBytes(): void;
    getLogRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogRetentionHours(): boolean;
    clearLogRetentionHours(): void;
    getLogRetentionHours(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionHours(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogRetentionMinutes(): boolean;
    clearLogRetentionMinutes(): void;
    getLogRetentionMinutes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMinutes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogRetentionMs(): boolean;
    clearLogRetentionMs(): void;
    getLogRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogSegmentBytes(): boolean;
    clearLogSegmentBytes(): void;
    getLogSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasLogPreallocate(): boolean;
    clearLogPreallocate(): void;
    getLogPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_1;

    hasSocketSendBufferBytes(): boolean;
    clearSocketSendBufferBytes(): void;
    getSocketSendBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketSendBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasSocketReceiveBufferBytes(): boolean;
    clearSocketReceiveBufferBytes(): void;
    getSocketReceiveBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketReceiveBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasAutoCreateTopicsEnable(): boolean;
    clearAutoCreateTopicsEnable(): void;
    getAutoCreateTopicsEnable(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoCreateTopicsEnable(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_1;

    hasNumPartitions(): boolean;
    clearNumPartitions(): void;
    getNumPartitions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNumPartitions(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    hasDefaultReplicationFactor(): boolean;
    clearDefaultReplicationFactor(): void;
    getDefaultReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDefaultReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_1;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaConfig2_1.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaConfig2_1): KafkaConfig2_1.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaConfig2_1, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaConfig2_1;
    static deserializeBinaryFromReader(message: KafkaConfig2_1, reader: jspb.BinaryReader): KafkaConfig2_1;
}

export namespace KafkaConfig2_1 {
    export type AsObject = {
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        logFlushIntervalMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushSchedulerIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionHours?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMinutes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logSegmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logPreallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        socketSendBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        socketReceiveBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autoCreateTopicsEnable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        numPartitions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultReplicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class KafkaConfig2_6 extends jspb.Message { 
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): KafkaConfig2_6;

    hasLogFlushIntervalMessages(): boolean;
    clearLogFlushIntervalMessages(): void;
    getLogFlushIntervalMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMessages(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogFlushIntervalMs(): boolean;
    clearLogFlushIntervalMs(): void;
    getLogFlushIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogFlushSchedulerIntervalMs(): boolean;
    clearLogFlushSchedulerIntervalMs(): void;
    getLogFlushSchedulerIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushSchedulerIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogRetentionBytes(): boolean;
    clearLogRetentionBytes(): void;
    getLogRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogRetentionHours(): boolean;
    clearLogRetentionHours(): void;
    getLogRetentionHours(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionHours(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogRetentionMinutes(): boolean;
    clearLogRetentionMinutes(): void;
    getLogRetentionMinutes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMinutes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogRetentionMs(): boolean;
    clearLogRetentionMs(): void;
    getLogRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogSegmentBytes(): boolean;
    clearLogSegmentBytes(): void;
    getLogSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasLogPreallocate(): boolean;
    clearLogPreallocate(): void;
    getLogPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_6;

    hasSocketSendBufferBytes(): boolean;
    clearSocketSendBufferBytes(): void;
    getSocketSendBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketSendBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasSocketReceiveBufferBytes(): boolean;
    clearSocketReceiveBufferBytes(): void;
    getSocketReceiveBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketReceiveBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasAutoCreateTopicsEnable(): boolean;
    clearAutoCreateTopicsEnable(): void;
    getAutoCreateTopicsEnable(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoCreateTopicsEnable(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_6;

    hasNumPartitions(): boolean;
    clearNumPartitions(): void;
    getNumPartitions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNumPartitions(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    hasDefaultReplicationFactor(): boolean;
    clearDefaultReplicationFactor(): void;
    getDefaultReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDefaultReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaConfig2_6.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaConfig2_6): KafkaConfig2_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaConfig2_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaConfig2_6;
    static deserializeBinaryFromReader(message: KafkaConfig2_6, reader: jspb.BinaryReader): KafkaConfig2_6;
}

export namespace KafkaConfig2_6 {
    export type AsObject = {
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        logFlushIntervalMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushSchedulerIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionHours?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMinutes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logSegmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logPreallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        socketSendBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        socketReceiveBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autoCreateTopicsEnable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        numPartitions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultReplicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class KafkaConfig2_8 extends jspb.Message { 
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): KafkaConfig2_8;

    hasLogFlushIntervalMessages(): boolean;
    clearLogFlushIntervalMessages(): void;
    getLogFlushIntervalMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMessages(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogFlushIntervalMs(): boolean;
    clearLogFlushIntervalMs(): void;
    getLogFlushIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogFlushSchedulerIntervalMs(): boolean;
    clearLogFlushSchedulerIntervalMs(): void;
    getLogFlushSchedulerIntervalMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogFlushSchedulerIntervalMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogRetentionBytes(): boolean;
    clearLogRetentionBytes(): void;
    getLogRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogRetentionHours(): boolean;
    clearLogRetentionHours(): void;
    getLogRetentionHours(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionHours(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogRetentionMinutes(): boolean;
    clearLogRetentionMinutes(): void;
    getLogRetentionMinutes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMinutes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogRetentionMs(): boolean;
    clearLogRetentionMs(): void;
    getLogRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogSegmentBytes(): boolean;
    clearLogSegmentBytes(): void;
    getLogSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasLogPreallocate(): boolean;
    clearLogPreallocate(): void;
    getLogPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_8;

    hasSocketSendBufferBytes(): boolean;
    clearSocketSendBufferBytes(): void;
    getSocketSendBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketSendBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasSocketReceiveBufferBytes(): boolean;
    clearSocketReceiveBufferBytes(): void;
    getSocketReceiveBufferBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSocketReceiveBufferBytes(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasAutoCreateTopicsEnable(): boolean;
    clearAutoCreateTopicsEnable(): void;
    getAutoCreateTopicsEnable(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoCreateTopicsEnable(value?: google_protobuf_wrappers_pb.BoolValue): KafkaConfig2_8;

    hasNumPartitions(): boolean;
    clearNumPartitions(): void;
    getNumPartitions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNumPartitions(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    hasDefaultReplicationFactor(): boolean;
    clearDefaultReplicationFactor(): void;
    getDefaultReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDefaultReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): KafkaConfig2_8;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KafkaConfig2_8.AsObject;
    static toObject(includeInstance: boolean, msg: KafkaConfig2_8): KafkaConfig2_8.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KafkaConfig2_8, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KafkaConfig2_8;
    static deserializeBinaryFromReader(message: KafkaConfig2_8, reader: jspb.BinaryReader): KafkaConfig2_8;
}

export namespace KafkaConfig2_8 {
    export type AsObject = {
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        logFlushIntervalMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logFlushSchedulerIntervalMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionHours?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMinutes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logSegmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logPreallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        socketSendBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        socketReceiveBufferBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autoCreateTopicsEnable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        numPartitions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultReplicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class Host extends jspb.Message { 
    getName(): string;
    setName(value: string): Host;
    getClusterId(): string;
    setClusterId(value: string): Host;
    getZoneId(): string;
    setZoneId(value: string): Host;
    getRole(): Host.Role;
    setRole(value: Host.Role): Host;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Host;
    getHealth(): Host.Health;
    setHealth(value: Host.Health): Host;
    getSubnetId(): string;
    setSubnetId(value: string): Host;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): Host;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Host.AsObject;
    static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Host;
    static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
    export type AsObject = {
        name: string,
        clusterId: string,
        zoneId: string,
        role: Host.Role,
        resources?: Resources.AsObject,
        health: Host.Health,
        subnetId: string,
        assignPublicIp: boolean,
    }

    export enum Role {
    ROLE_UNSPECIFIED = 0,
    KAFKA = 1,
    ZOOKEEPER = 2,
    }

    export enum Health {
    UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

}
