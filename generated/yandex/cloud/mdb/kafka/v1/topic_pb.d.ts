// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/topic.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_kafka_v1_common_pb from "../../../../../yandex/cloud/mdb/kafka/v1/common_pb";

export class Topic extends jspb.Message { 
    getName(): string;
    setName(value: string): Topic;
    getClusterId(): string;
    setClusterId(value: string): Topic;

    hasPartitions(): boolean;
    clearPartitions(): void;
    getPartitions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPartitions(value?: google_protobuf_wrappers_pb.Int64Value): Topic;

    hasReplicationFactor(): boolean;
    clearReplicationFactor(): void;
    getReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): Topic;

    hasTopicConfig21(): boolean;
    clearTopicConfig21(): void;
    getTopicConfig21(): TopicConfig2_1 | undefined;
    setTopicConfig21(value?: TopicConfig2_1): Topic;

    hasTopicConfig26(): boolean;
    clearTopicConfig26(): void;
    getTopicConfig26(): TopicConfig2_6 | undefined;
    setTopicConfig26(value?: TopicConfig2_6): Topic;

    hasTopicConfig28(): boolean;
    clearTopicConfig28(): void;
    getTopicConfig28(): TopicConfig2_8 | undefined;
    setTopicConfig28(value?: TopicConfig2_8): Topic;

    getTopicConfigCase(): Topic.TopicConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Topic.AsObject;
    static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Topic;
    static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
    export type AsObject = {
        name: string,
        clusterId: string,
        partitions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        replicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        topicConfig21?: TopicConfig2_1.AsObject,
        topicConfig26?: TopicConfig2_6.AsObject,
        topicConfig28?: TopicConfig2_8.AsObject,
    }

    export enum TopicConfigCase {
        TOPIC_CONFIG_NOT_SET = 0,
        TOPIC_CONFIG_2_1 = 5,
        TOPIC_CONFIG_2_6 = 6,
        TOPIC_CONFIG_2_8 = 7,
    }

}

export class TopicSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): TopicSpec;

    hasPartitions(): boolean;
    clearPartitions(): void;
    getPartitions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPartitions(value?: google_protobuf_wrappers_pb.Int64Value): TopicSpec;

    hasReplicationFactor(): boolean;
    clearReplicationFactor(): void;
    getReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): TopicSpec;

    hasTopicConfig21(): boolean;
    clearTopicConfig21(): void;
    getTopicConfig21(): TopicConfig2_1 | undefined;
    setTopicConfig21(value?: TopicConfig2_1): TopicSpec;

    hasTopicConfig26(): boolean;
    clearTopicConfig26(): void;
    getTopicConfig26(): TopicConfig2_6 | undefined;
    setTopicConfig26(value?: TopicConfig2_6): TopicSpec;

    hasTopicConfig28(): boolean;
    clearTopicConfig28(): void;
    getTopicConfig28(): TopicConfig2_8 | undefined;
    setTopicConfig28(value?: TopicConfig2_8): TopicSpec;

    getTopicConfigCase(): TopicSpec.TopicConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicSpec.AsObject;
    static toObject(includeInstance: boolean, msg: TopicSpec): TopicSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicSpec;
    static deserializeBinaryFromReader(message: TopicSpec, reader: jspb.BinaryReader): TopicSpec;
}

export namespace TopicSpec {
    export type AsObject = {
        name: string,
        partitions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        replicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        topicConfig21?: TopicConfig2_1.AsObject,
        topicConfig26?: TopicConfig2_6.AsObject,
        topicConfig28?: TopicConfig2_8.AsObject,
    }

    export enum TopicConfigCase {
        TOPIC_CONFIG_NOT_SET = 0,
        TOPIC_CONFIG_2_1 = 4,
        TOPIC_CONFIG_2_6 = 5,
        TOPIC_CONFIG_2_8 = 6,
    }

}

export class TopicConfig2_1 extends jspb.Message { 
    getCleanupPolicy(): TopicConfig2_1.CleanupPolicy;
    setCleanupPolicy(value: TopicConfig2_1.CleanupPolicy): TopicConfig2_1;
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): TopicConfig2_1;

    hasDeleteRetentionMs(): boolean;
    clearDeleteRetentionMs(): void;
    getDeleteRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeleteRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasFileDeleteDelayMs(): boolean;
    clearFileDeleteDelayMs(): void;
    getFileDeleteDelayMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFileDeleteDelayMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasFlushMessages(): boolean;
    clearFlushMessages(): void;
    getFlushMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMessages(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasFlushMs(): boolean;
    clearFlushMs(): void;
    getFlushMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasMinCompactionLagMs(): boolean;
    clearMinCompactionLagMs(): void;
    getMinCompactionLagMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinCompactionLagMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasRetentionBytes(): boolean;
    clearRetentionBytes(): void;
    getRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasRetentionMs(): boolean;
    clearRetentionMs(): void;
    getRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasMaxMessageBytes(): boolean;
    clearMaxMessageBytes(): void;
    getMaxMessageBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxMessageBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasMinInsyncReplicas(): boolean;
    clearMinInsyncReplicas(): void;
    getMinInsyncReplicas(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinInsyncReplicas(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasSegmentBytes(): boolean;
    clearSegmentBytes(): void;
    getSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_1;

    hasPreallocate(): boolean;
    clearPreallocate(): void;
    getPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): TopicConfig2_1;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicConfig2_1.AsObject;
    static toObject(includeInstance: boolean, msg: TopicConfig2_1): TopicConfig2_1.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicConfig2_1, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicConfig2_1;
    static deserializeBinaryFromReader(message: TopicConfig2_1, reader: jspb.BinaryReader): TopicConfig2_1;
}

export namespace TopicConfig2_1 {
    export type AsObject = {
        cleanupPolicy: TopicConfig2_1.CleanupPolicy,
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        deleteRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fileDeleteDelayMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minCompactionLagMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxMessageBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minInsyncReplicas?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        segmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        preallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    CLEANUP_POLICY_DELETE = 1,
    CLEANUP_POLICY_COMPACT = 2,
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    }

}

export class TopicConfig2_6 extends jspb.Message { 
    getCleanupPolicy(): TopicConfig2_6.CleanupPolicy;
    setCleanupPolicy(value: TopicConfig2_6.CleanupPolicy): TopicConfig2_6;
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): TopicConfig2_6;

    hasDeleteRetentionMs(): boolean;
    clearDeleteRetentionMs(): void;
    getDeleteRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeleteRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasFileDeleteDelayMs(): boolean;
    clearFileDeleteDelayMs(): void;
    getFileDeleteDelayMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFileDeleteDelayMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasFlushMessages(): boolean;
    clearFlushMessages(): void;
    getFlushMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMessages(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasFlushMs(): boolean;
    clearFlushMs(): void;
    getFlushMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasMinCompactionLagMs(): boolean;
    clearMinCompactionLagMs(): void;
    getMinCompactionLagMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinCompactionLagMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasRetentionBytes(): boolean;
    clearRetentionBytes(): void;
    getRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasRetentionMs(): boolean;
    clearRetentionMs(): void;
    getRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasMaxMessageBytes(): boolean;
    clearMaxMessageBytes(): void;
    getMaxMessageBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxMessageBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasMinInsyncReplicas(): boolean;
    clearMinInsyncReplicas(): void;
    getMinInsyncReplicas(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinInsyncReplicas(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasSegmentBytes(): boolean;
    clearSegmentBytes(): void;
    getSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_6;

    hasPreallocate(): boolean;
    clearPreallocate(): void;
    getPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): TopicConfig2_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicConfig2_6.AsObject;
    static toObject(includeInstance: boolean, msg: TopicConfig2_6): TopicConfig2_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicConfig2_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicConfig2_6;
    static deserializeBinaryFromReader(message: TopicConfig2_6, reader: jspb.BinaryReader): TopicConfig2_6;
}

export namespace TopicConfig2_6 {
    export type AsObject = {
        cleanupPolicy: TopicConfig2_6.CleanupPolicy,
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        deleteRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fileDeleteDelayMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minCompactionLagMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxMessageBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minInsyncReplicas?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        segmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        preallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    CLEANUP_POLICY_DELETE = 1,
    CLEANUP_POLICY_COMPACT = 2,
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    }

}

export class TopicConfig2_8 extends jspb.Message { 
    getCleanupPolicy(): TopicConfig2_8.CleanupPolicy;
    setCleanupPolicy(value: TopicConfig2_8.CleanupPolicy): TopicConfig2_8;
    getCompressionType(): yandex_cloud_mdb_kafka_v1_common_pb.CompressionType;
    setCompressionType(value: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType): TopicConfig2_8;

    hasDeleteRetentionMs(): boolean;
    clearDeleteRetentionMs(): void;
    getDeleteRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeleteRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasFileDeleteDelayMs(): boolean;
    clearFileDeleteDelayMs(): void;
    getFileDeleteDelayMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFileDeleteDelayMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasFlushMessages(): boolean;
    clearFlushMessages(): void;
    getFlushMessages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMessages(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasFlushMs(): boolean;
    clearFlushMs(): void;
    getFlushMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFlushMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasMinCompactionLagMs(): boolean;
    clearMinCompactionLagMs(): void;
    getMinCompactionLagMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinCompactionLagMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasRetentionBytes(): boolean;
    clearRetentionBytes(): void;
    getRetentionBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasRetentionMs(): boolean;
    clearRetentionMs(): void;
    getRetentionMs(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRetentionMs(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasMaxMessageBytes(): boolean;
    clearMaxMessageBytes(): void;
    getMaxMessageBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxMessageBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasMinInsyncReplicas(): boolean;
    clearMinInsyncReplicas(): void;
    getMinInsyncReplicas(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinInsyncReplicas(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasSegmentBytes(): boolean;
    clearSegmentBytes(): void;
    getSegmentBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSegmentBytes(value?: google_protobuf_wrappers_pb.Int64Value): TopicConfig2_8;

    hasPreallocate(): boolean;
    clearPreallocate(): void;
    getPreallocate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPreallocate(value?: google_protobuf_wrappers_pb.BoolValue): TopicConfig2_8;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicConfig2_8.AsObject;
    static toObject(includeInstance: boolean, msg: TopicConfig2_8): TopicConfig2_8.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicConfig2_8, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicConfig2_8;
    static deserializeBinaryFromReader(message: TopicConfig2_8, reader: jspb.BinaryReader): TopicConfig2_8;
}

export namespace TopicConfig2_8 {
    export type AsObject = {
        cleanupPolicy: TopicConfig2_8.CleanupPolicy,
        compressionType: yandex_cloud_mdb_kafka_v1_common_pb.CompressionType,
        deleteRetentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fileDeleteDelayMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMessages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        flushMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minCompactionLagMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        retentionMs?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxMessageBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minInsyncReplicas?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        segmentBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        preallocate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    CLEANUP_POLICY_DELETE = 1,
    CLEANUP_POLICY_COMPACT = 2,
    CLEANUP_POLICY_COMPACT_AND_DELETE = 3,
    }

}
