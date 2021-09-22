// package: yandex.cloud.mdb.clickhouse.v1.config
// file: yandex/cloud/mdb/clickhouse/v1/config/clickhouse.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class ClickhouseConfig extends jspb.Message { 
    getLogLevel(): ClickhouseConfig.LogLevel;
    setLogLevel(value: ClickhouseConfig.LogLevel): ClickhouseConfig;

    hasMergeTree(): boolean;
    clearMergeTree(): void;
    getMergeTree(): ClickhouseConfig.MergeTree | undefined;
    setMergeTree(value?: ClickhouseConfig.MergeTree): ClickhouseConfig;
    clearCompressionList(): void;
    getCompressionList(): Array<ClickhouseConfig.Compression>;
    setCompressionList(value: Array<ClickhouseConfig.Compression>): ClickhouseConfig;
    addCompression(value?: ClickhouseConfig.Compression, index?: number): ClickhouseConfig.Compression;
    clearDictionariesList(): void;
    getDictionariesList(): Array<ClickhouseConfig.ExternalDictionary>;
    setDictionariesList(value: Array<ClickhouseConfig.ExternalDictionary>): ClickhouseConfig;
    addDictionaries(value?: ClickhouseConfig.ExternalDictionary, index?: number): ClickhouseConfig.ExternalDictionary;
    clearGraphiteRollupList(): void;
    getGraphiteRollupList(): Array<ClickhouseConfig.GraphiteRollup>;
    setGraphiteRollupList(value: Array<ClickhouseConfig.GraphiteRollup>): ClickhouseConfig;
    addGraphiteRollup(value?: ClickhouseConfig.GraphiteRollup, index?: number): ClickhouseConfig.GraphiteRollup;

    hasKafka(): boolean;
    clearKafka(): void;
    getKafka(): ClickhouseConfig.Kafka | undefined;
    setKafka(value?: ClickhouseConfig.Kafka): ClickhouseConfig;
    clearKafkaTopicsList(): void;
    getKafkaTopicsList(): Array<ClickhouseConfig.KafkaTopic>;
    setKafkaTopicsList(value: Array<ClickhouseConfig.KafkaTopic>): ClickhouseConfig;
    addKafkaTopics(value?: ClickhouseConfig.KafkaTopic, index?: number): ClickhouseConfig.KafkaTopic;

    hasRabbitmq(): boolean;
    clearRabbitmq(): void;
    getRabbitmq(): ClickhouseConfig.Rabbitmq | undefined;
    setRabbitmq(value?: ClickhouseConfig.Rabbitmq): ClickhouseConfig;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMaxConcurrentQueries(): boolean;
    clearMaxConcurrentQueries(): void;
    getMaxConcurrentQueries(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConcurrentQueries(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasKeepAliveTimeout(): boolean;
    clearKeepAliveTimeout(): void;
    getKeepAliveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setKeepAliveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasUncompressedCacheSize(): boolean;
    clearUncompressedCacheSize(): void;
    getUncompressedCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setUncompressedCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMarkCacheSize(): boolean;
    clearMarkCacheSize(): void;
    getMarkCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMarkCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMaxTableSizeToDrop(): boolean;
    clearMaxTableSizeToDrop(): void;
    getMaxTableSizeToDrop(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxTableSizeToDrop(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMaxPartitionSizeToDrop(): boolean;
    clearMaxPartitionSizeToDrop(): void;
    getMaxPartitionSizeToDrop(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPartitionSizeToDrop(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasBuiltinDictionariesReloadInterval(): boolean;
    clearBuiltinDictionariesReloadInterval(): void;
    getBuiltinDictionariesReloadInterval(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBuiltinDictionariesReloadInterval(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;
    getTimezone(): string;
    setTimezone(value: string): ClickhouseConfig;
    getGeobaseUri(): string;
    setGeobaseUri(value: string): ClickhouseConfig;

    hasQueryLogRetentionSize(): boolean;
    clearQueryLogRetentionSize(): void;
    getQueryLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setQueryLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasQueryLogRetentionTime(): boolean;
    clearQueryLogRetentionTime(): void;
    getQueryLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setQueryLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasQueryThreadLogEnabled(): boolean;
    clearQueryThreadLogEnabled(): void;
    getQueryThreadLogEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setQueryThreadLogEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ClickhouseConfig;

    hasQueryThreadLogRetentionSize(): boolean;
    clearQueryThreadLogRetentionSize(): void;
    getQueryThreadLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setQueryThreadLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasQueryThreadLogRetentionTime(): boolean;
    clearQueryThreadLogRetentionTime(): void;
    getQueryThreadLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setQueryThreadLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasPartLogRetentionSize(): boolean;
    clearPartLogRetentionSize(): void;
    getPartLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPartLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasPartLogRetentionTime(): boolean;
    clearPartLogRetentionTime(): void;
    getPartLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPartLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMetricLogEnabled(): boolean;
    clearMetricLogEnabled(): void;
    getMetricLogEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setMetricLogEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ClickhouseConfig;

    hasMetricLogRetentionSize(): boolean;
    clearMetricLogRetentionSize(): void;
    getMetricLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMetricLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasMetricLogRetentionTime(): boolean;
    clearMetricLogRetentionTime(): void;
    getMetricLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMetricLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasTraceLogEnabled(): boolean;
    clearTraceLogEnabled(): void;
    getTraceLogEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTraceLogEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ClickhouseConfig;

    hasTraceLogRetentionSize(): boolean;
    clearTraceLogRetentionSize(): void;
    getTraceLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTraceLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasTraceLogRetentionTime(): boolean;
    clearTraceLogRetentionTime(): void;
    getTraceLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTraceLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasTextLogEnabled(): boolean;
    clearTextLogEnabled(): void;
    getTextLogEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTextLogEnabled(value?: google_protobuf_wrappers_pb.BoolValue): ClickhouseConfig;

    hasTextLogRetentionSize(): boolean;
    clearTextLogRetentionSize(): void;
    getTextLogRetentionSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTextLogRetentionSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasTextLogRetentionTime(): boolean;
    clearTextLogRetentionTime(): void;
    getTextLogRetentionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTextLogRetentionTime(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;
    getTextLogLevel(): ClickhouseConfig.LogLevel;
    setTextLogLevel(value: ClickhouseConfig.LogLevel): ClickhouseConfig;

    hasBackgroundPoolSize(): boolean;
    clearBackgroundPoolSize(): void;
    getBackgroundPoolSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackgroundPoolSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    hasBackgroundSchedulePoolSize(): boolean;
    clearBackgroundSchedulePoolSize(): void;
    getBackgroundSchedulePoolSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackgroundSchedulePoolSize(value?: google_protobuf_wrappers_pb.Int64Value): ClickhouseConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClickhouseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ClickhouseConfig): ClickhouseConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClickhouseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClickhouseConfig;
    static deserializeBinaryFromReader(message: ClickhouseConfig, reader: jspb.BinaryReader): ClickhouseConfig;
}

export namespace ClickhouseConfig {
    export type AsObject = {
        logLevel: ClickhouseConfig.LogLevel,
        mergeTree?: ClickhouseConfig.MergeTree.AsObject,
        compressionList: Array<ClickhouseConfig.Compression.AsObject>,
        dictionariesList: Array<ClickhouseConfig.ExternalDictionary.AsObject>,
        graphiteRollupList: Array<ClickhouseConfig.GraphiteRollup.AsObject>,
        kafka?: ClickhouseConfig.Kafka.AsObject,
        kafkaTopicsList: Array<ClickhouseConfig.KafkaTopic.AsObject>,
        rabbitmq?: ClickhouseConfig.Rabbitmq.AsObject,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxConcurrentQueries?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        keepAliveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        uncompressedCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        markCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxTableSizeToDrop?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPartitionSizeToDrop?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        builtinDictionariesReloadInterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        timezone: string,
        geobaseUri: string,
        queryLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        queryLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        queryThreadLogEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        queryThreadLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        queryThreadLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        partLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        partLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        metricLogEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        metricLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        metricLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        traceLogEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        traceLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        traceLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        textLogEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        textLogRetentionSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        textLogRetentionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        textLogLevel: ClickhouseConfig.LogLevel,
        backgroundPoolSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        backgroundSchedulePoolSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }


    export class MergeTree extends jspb.Message { 

        hasReplicatedDeduplicationWindow(): boolean;
        clearReplicatedDeduplicationWindow(): void;
        getReplicatedDeduplicationWindow(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setReplicatedDeduplicationWindow(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasReplicatedDeduplicationWindowSeconds(): boolean;
        clearReplicatedDeduplicationWindowSeconds(): void;
        getReplicatedDeduplicationWindowSeconds(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setReplicatedDeduplicationWindowSeconds(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasPartsToDelayInsert(): boolean;
        clearPartsToDelayInsert(): void;
        getPartsToDelayInsert(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setPartsToDelayInsert(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasPartsToThrowInsert(): boolean;
        clearPartsToThrowInsert(): void;
        getPartsToThrowInsert(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setPartsToThrowInsert(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasMaxReplicatedMergesInQueue(): boolean;
        clearMaxReplicatedMergesInQueue(): void;
        getMaxReplicatedMergesInQueue(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxReplicatedMergesInQueue(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(): boolean;
        clearNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(): void;
        getNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasMaxBytesToMergeAtMinSpaceInPool(): boolean;
        clearMaxBytesToMergeAtMinSpaceInPool(): void;
        getMaxBytesToMergeAtMinSpaceInPool(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxBytesToMergeAtMinSpaceInPool(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        hasMaxBytesToMergeAtMaxSpaceInPool(): boolean;
        clearMaxBytesToMergeAtMaxSpaceInPool(): void;
        getMaxBytesToMergeAtMaxSpaceInPool(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxBytesToMergeAtMaxSpaceInPool(value?: google_protobuf_wrappers_pb.Int64Value): MergeTree;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MergeTree.AsObject;
        static toObject(includeInstance: boolean, msg: MergeTree): MergeTree.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MergeTree, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MergeTree;
        static deserializeBinaryFromReader(message: MergeTree, reader: jspb.BinaryReader): MergeTree;
    }

    export namespace MergeTree {
        export type AsObject = {
            replicatedDeduplicationWindow?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            replicatedDeduplicationWindowSeconds?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            partsToDelayInsert?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            partsToThrowInsert?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxReplicatedMergesInQueue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxBytesToMergeAtMinSpaceInPool?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxBytesToMergeAtMaxSpaceInPool?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

    export class Kafka extends jspb.Message { 
        getSecurityProtocol(): ClickhouseConfig.Kafka.SecurityProtocol;
        setSecurityProtocol(value: ClickhouseConfig.Kafka.SecurityProtocol): Kafka;
        getSaslMechanism(): ClickhouseConfig.Kafka.SaslMechanism;
        setSaslMechanism(value: ClickhouseConfig.Kafka.SaslMechanism): Kafka;
        getSaslUsername(): string;
        setSaslUsername(value: string): Kafka;
        getSaslPassword(): string;
        setSaslPassword(value: string): Kafka;

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
            securityProtocol: ClickhouseConfig.Kafka.SecurityProtocol,
            saslMechanism: ClickhouseConfig.Kafka.SaslMechanism,
            saslUsername: string,
            saslPassword: string,
        }

        export enum SecurityProtocol {
    SECURITY_PROTOCOL_UNSPECIFIED = 0,
    SECURITY_PROTOCOL_PLAINTEXT = 1,
    SECURITY_PROTOCOL_SSL = 2,
    SECURITY_PROTOCOL_SASL_PLAINTEXT = 3,
    SECURITY_PROTOCOL_SASL_SSL = 4,
        }

        export enum SaslMechanism {
    SASL_MECHANISM_UNSPECIFIED = 0,
    SASL_MECHANISM_GSSAPI = 1,
    SASL_MECHANISM_PLAIN = 2,
    SASL_MECHANISM_SCRAM_SHA_256 = 3,
    SASL_MECHANISM_SCRAM_SHA_512 = 4,
        }

    }

    export class KafkaTopic extends jspb.Message { 
        getName(): string;
        setName(value: string): KafkaTopic;

        hasSettings(): boolean;
        clearSettings(): void;
        getSettings(): ClickhouseConfig.Kafka | undefined;
        setSettings(value?: ClickhouseConfig.Kafka): KafkaTopic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KafkaTopic.AsObject;
        static toObject(includeInstance: boolean, msg: KafkaTopic): KafkaTopic.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KafkaTopic, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KafkaTopic;
        static deserializeBinaryFromReader(message: KafkaTopic, reader: jspb.BinaryReader): KafkaTopic;
    }

    export namespace KafkaTopic {
        export type AsObject = {
            name: string,
            settings?: ClickhouseConfig.Kafka.AsObject,
        }
    }

    export class Rabbitmq extends jspb.Message { 
        getUsername(): string;
        setUsername(value: string): Rabbitmq;
        getPassword(): string;
        setPassword(value: string): Rabbitmq;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rabbitmq.AsObject;
        static toObject(includeInstance: boolean, msg: Rabbitmq): Rabbitmq.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rabbitmq, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rabbitmq;
        static deserializeBinaryFromReader(message: Rabbitmq, reader: jspb.BinaryReader): Rabbitmq;
    }

    export namespace Rabbitmq {
        export type AsObject = {
            username: string,
            password: string,
        }
    }

    export class Compression extends jspb.Message { 
        getMethod(): ClickhouseConfig.Compression.Method;
        setMethod(value: ClickhouseConfig.Compression.Method): Compression;
        getMinPartSize(): number;
        setMinPartSize(value: number): Compression;
        getMinPartSizeRatio(): number;
        setMinPartSizeRatio(value: number): Compression;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Compression.AsObject;
        static toObject(includeInstance: boolean, msg: Compression): Compression.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Compression, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Compression;
        static deserializeBinaryFromReader(message: Compression, reader: jspb.BinaryReader): Compression;
    }

    export namespace Compression {
        export type AsObject = {
            method: ClickhouseConfig.Compression.Method,
            minPartSize: number,
            minPartSizeRatio: number,
        }

        export enum Method {
    METHOD_UNSPECIFIED = 0,
    LZ4 = 1,
    ZSTD = 2,
        }

    }

    export class ExternalDictionary extends jspb.Message { 
        getName(): string;
        setName(value: string): ExternalDictionary;

        hasStructure(): boolean;
        clearStructure(): void;
        getStructure(): ClickhouseConfig.ExternalDictionary.Structure | undefined;
        setStructure(value?: ClickhouseConfig.ExternalDictionary.Structure): ExternalDictionary;

        hasLayout(): boolean;
        clearLayout(): void;
        getLayout(): ClickhouseConfig.ExternalDictionary.Layout | undefined;
        setLayout(value?: ClickhouseConfig.ExternalDictionary.Layout): ExternalDictionary;

        hasFixedLifetime(): boolean;
        clearFixedLifetime(): void;
        getFixedLifetime(): number;
        setFixedLifetime(value: number): ExternalDictionary;

        hasLifetimeRange(): boolean;
        clearLifetimeRange(): void;
        getLifetimeRange(): ClickhouseConfig.ExternalDictionary.Range | undefined;
        setLifetimeRange(value?: ClickhouseConfig.ExternalDictionary.Range): ExternalDictionary;

        hasHttpSource(): boolean;
        clearHttpSource(): void;
        getHttpSource(): ClickhouseConfig.ExternalDictionary.HttpSource | undefined;
        setHttpSource(value?: ClickhouseConfig.ExternalDictionary.HttpSource): ExternalDictionary;

        hasMysqlSource(): boolean;
        clearMysqlSource(): void;
        getMysqlSource(): ClickhouseConfig.ExternalDictionary.MysqlSource | undefined;
        setMysqlSource(value?: ClickhouseConfig.ExternalDictionary.MysqlSource): ExternalDictionary;

        hasClickhouseSource(): boolean;
        clearClickhouseSource(): void;
        getClickhouseSource(): ClickhouseConfig.ExternalDictionary.ClickhouseSource | undefined;
        setClickhouseSource(value?: ClickhouseConfig.ExternalDictionary.ClickhouseSource): ExternalDictionary;

        hasMongodbSource(): boolean;
        clearMongodbSource(): void;
        getMongodbSource(): ClickhouseConfig.ExternalDictionary.MongodbSource | undefined;
        setMongodbSource(value?: ClickhouseConfig.ExternalDictionary.MongodbSource): ExternalDictionary;

        hasPostgresqlSource(): boolean;
        clearPostgresqlSource(): void;
        getPostgresqlSource(): ClickhouseConfig.ExternalDictionary.PostgresqlSource | undefined;
        setPostgresqlSource(value?: ClickhouseConfig.ExternalDictionary.PostgresqlSource): ExternalDictionary;

        getLifetimeCase(): ExternalDictionary.LifetimeCase;
        getSourceCase(): ExternalDictionary.SourceCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExternalDictionary.AsObject;
        static toObject(includeInstance: boolean, msg: ExternalDictionary): ExternalDictionary.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExternalDictionary, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExternalDictionary;
        static deserializeBinaryFromReader(message: ExternalDictionary, reader: jspb.BinaryReader): ExternalDictionary;
    }

    export namespace ExternalDictionary {
        export type AsObject = {
            name: string,
            structure?: ClickhouseConfig.ExternalDictionary.Structure.AsObject,
            layout?: ClickhouseConfig.ExternalDictionary.Layout.AsObject,
            fixedLifetime: number,
            lifetimeRange?: ClickhouseConfig.ExternalDictionary.Range.AsObject,
            httpSource?: ClickhouseConfig.ExternalDictionary.HttpSource.AsObject,
            mysqlSource?: ClickhouseConfig.ExternalDictionary.MysqlSource.AsObject,
            clickhouseSource?: ClickhouseConfig.ExternalDictionary.ClickhouseSource.AsObject,
            mongodbSource?: ClickhouseConfig.ExternalDictionary.MongodbSource.AsObject,
            postgresqlSource?: ClickhouseConfig.ExternalDictionary.PostgresqlSource.AsObject,
        }


        export class HttpSource extends jspb.Message { 
            getUrl(): string;
            setUrl(value: string): HttpSource;
            getFormat(): string;
            setFormat(value: string): HttpSource;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): HttpSource.AsObject;
            static toObject(includeInstance: boolean, msg: HttpSource): HttpSource.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: HttpSource, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): HttpSource;
            static deserializeBinaryFromReader(message: HttpSource, reader: jspb.BinaryReader): HttpSource;
        }

        export namespace HttpSource {
            export type AsObject = {
                url: string,
                format: string,
            }
        }

        export class MysqlSource extends jspb.Message { 
            getDb(): string;
            setDb(value: string): MysqlSource;
            getTable(): string;
            setTable(value: string): MysqlSource;
            getPort(): number;
            setPort(value: number): MysqlSource;
            getUser(): string;
            setUser(value: string): MysqlSource;
            getPassword(): string;
            setPassword(value: string): MysqlSource;
            clearReplicasList(): void;
            getReplicasList(): Array<ClickhouseConfig.ExternalDictionary.MysqlSource.Replica>;
            setReplicasList(value: Array<ClickhouseConfig.ExternalDictionary.MysqlSource.Replica>): MysqlSource;
            addReplicas(value?: ClickhouseConfig.ExternalDictionary.MysqlSource.Replica, index?: number): ClickhouseConfig.ExternalDictionary.MysqlSource.Replica;
            getWhere(): string;
            setWhere(value: string): MysqlSource;
            getInvalidateQuery(): string;
            setInvalidateQuery(value: string): MysqlSource;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MysqlSource.AsObject;
            static toObject(includeInstance: boolean, msg: MysqlSource): MysqlSource.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MysqlSource, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MysqlSource;
            static deserializeBinaryFromReader(message: MysqlSource, reader: jspb.BinaryReader): MysqlSource;
        }

        export namespace MysqlSource {
            export type AsObject = {
                db: string,
                table: string,
                port: number,
                user: string,
                password: string,
                replicasList: Array<ClickhouseConfig.ExternalDictionary.MysqlSource.Replica.AsObject>,
                where: string,
                invalidateQuery: string,
            }


            export class Replica extends jspb.Message { 
                getHost(): string;
                setHost(value: string): Replica;
                getPriority(): number;
                setPriority(value: number): Replica;
                getPort(): number;
                setPort(value: number): Replica;
                getUser(): string;
                setUser(value: string): Replica;
                getPassword(): string;
                setPassword(value: string): Replica;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Replica.AsObject;
                static toObject(includeInstance: boolean, msg: Replica): Replica.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Replica, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Replica;
                static deserializeBinaryFromReader(message: Replica, reader: jspb.BinaryReader): Replica;
            }

            export namespace Replica {
                export type AsObject = {
                    host: string,
                    priority: number,
                    port: number,
                    user: string,
                    password: string,
                }
            }

        }

        export class ClickhouseSource extends jspb.Message { 
            getDb(): string;
            setDb(value: string): ClickhouseSource;
            getTable(): string;
            setTable(value: string): ClickhouseSource;
            getHost(): string;
            setHost(value: string): ClickhouseSource;
            getPort(): number;
            setPort(value: number): ClickhouseSource;
            getUser(): string;
            setUser(value: string): ClickhouseSource;
            getPassword(): string;
            setPassword(value: string): ClickhouseSource;
            getWhere(): string;
            setWhere(value: string): ClickhouseSource;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ClickhouseSource.AsObject;
            static toObject(includeInstance: boolean, msg: ClickhouseSource): ClickhouseSource.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ClickhouseSource, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ClickhouseSource;
            static deserializeBinaryFromReader(message: ClickhouseSource, reader: jspb.BinaryReader): ClickhouseSource;
        }

        export namespace ClickhouseSource {
            export type AsObject = {
                db: string,
                table: string,
                host: string,
                port: number,
                user: string,
                password: string,
                where: string,
            }
        }

        export class MongodbSource extends jspb.Message { 
            getDb(): string;
            setDb(value: string): MongodbSource;
            getCollection(): string;
            setCollection(value: string): MongodbSource;
            getHost(): string;
            setHost(value: string): MongodbSource;
            getPort(): number;
            setPort(value: number): MongodbSource;
            getUser(): string;
            setUser(value: string): MongodbSource;
            getPassword(): string;
            setPassword(value: string): MongodbSource;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MongodbSource.AsObject;
            static toObject(includeInstance: boolean, msg: MongodbSource): MongodbSource.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MongodbSource, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MongodbSource;
            static deserializeBinaryFromReader(message: MongodbSource, reader: jspb.BinaryReader): MongodbSource;
        }

        export namespace MongodbSource {
            export type AsObject = {
                db: string,
                collection: string,
                host: string,
                port: number,
                user: string,
                password: string,
            }
        }

        export class PostgresqlSource extends jspb.Message { 
            getDb(): string;
            setDb(value: string): PostgresqlSource;
            getTable(): string;
            setTable(value: string): PostgresqlSource;
            clearHostsList(): void;
            getHostsList(): Array<string>;
            setHostsList(value: Array<string>): PostgresqlSource;
            addHosts(value: string, index?: number): string;
            getPort(): number;
            setPort(value: number): PostgresqlSource;
            getUser(): string;
            setUser(value: string): PostgresqlSource;
            getPassword(): string;
            setPassword(value: string): PostgresqlSource;
            getInvalidateQuery(): string;
            setInvalidateQuery(value: string): PostgresqlSource;
            getSslMode(): ClickhouseConfig.ExternalDictionary.PostgresqlSource.SslMode;
            setSslMode(value: ClickhouseConfig.ExternalDictionary.PostgresqlSource.SslMode): PostgresqlSource;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PostgresqlSource.AsObject;
            static toObject(includeInstance: boolean, msg: PostgresqlSource): PostgresqlSource.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PostgresqlSource, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PostgresqlSource;
            static deserializeBinaryFromReader(message: PostgresqlSource, reader: jspb.BinaryReader): PostgresqlSource;
        }

        export namespace PostgresqlSource {
            export type AsObject = {
                db: string,
                table: string,
                hostsList: Array<string>,
                port: number,
                user: string,
                password: string,
                invalidateQuery: string,
                sslMode: ClickhouseConfig.ExternalDictionary.PostgresqlSource.SslMode,
            }

            export enum SslMode {
    SSL_MODE_UNSPECIFIED = 0,
    DISABLE = 1,
    ALLOW = 2,
    PREFER = 3,
    VERIFY_CA = 4,
    VERIFY_FULL = 5,
            }

        }

        export class Structure extends jspb.Message { 

            hasId(): boolean;
            clearId(): void;
            getId(): ClickhouseConfig.ExternalDictionary.Structure.Id | undefined;
            setId(value?: ClickhouseConfig.ExternalDictionary.Structure.Id): Structure;

            hasKey(): boolean;
            clearKey(): void;
            getKey(): ClickhouseConfig.ExternalDictionary.Structure.Key | undefined;
            setKey(value?: ClickhouseConfig.ExternalDictionary.Structure.Key): Structure;

            hasRangeMin(): boolean;
            clearRangeMin(): void;
            getRangeMin(): ClickhouseConfig.ExternalDictionary.Structure.Attribute | undefined;
            setRangeMin(value?: ClickhouseConfig.ExternalDictionary.Structure.Attribute): Structure;

            hasRangeMax(): boolean;
            clearRangeMax(): void;
            getRangeMax(): ClickhouseConfig.ExternalDictionary.Structure.Attribute | undefined;
            setRangeMax(value?: ClickhouseConfig.ExternalDictionary.Structure.Attribute): Structure;
            clearAttributesList(): void;
            getAttributesList(): Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute>;
            setAttributesList(value: Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute>): Structure;
            addAttributes(value?: ClickhouseConfig.ExternalDictionary.Structure.Attribute, index?: number): ClickhouseConfig.ExternalDictionary.Structure.Attribute;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Structure.AsObject;
            static toObject(includeInstance: boolean, msg: Structure): Structure.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Structure, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Structure;
            static deserializeBinaryFromReader(message: Structure, reader: jspb.BinaryReader): Structure;
        }

        export namespace Structure {
            export type AsObject = {
                id?: ClickhouseConfig.ExternalDictionary.Structure.Id.AsObject,
                key?: ClickhouseConfig.ExternalDictionary.Structure.Key.AsObject,
                rangeMin?: ClickhouseConfig.ExternalDictionary.Structure.Attribute.AsObject,
                rangeMax?: ClickhouseConfig.ExternalDictionary.Structure.Attribute.AsObject,
                attributesList: Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute.AsObject>,
            }


            export class Attribute extends jspb.Message { 
                getName(): string;
                setName(value: string): Attribute;
                getType(): string;
                setType(value: string): Attribute;
                getNullValue(): string;
                setNullValue(value: string): Attribute;
                getExpression(): string;
                setExpression(value: string): Attribute;
                getHierarchical(): boolean;
                setHierarchical(value: boolean): Attribute;
                getInjective(): boolean;
                setInjective(value: boolean): Attribute;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Attribute.AsObject;
                static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Attribute;
                static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
            }

            export namespace Attribute {
                export type AsObject = {
                    name: string,
                    type: string,
                    nullValue: string,
                    expression: string,
                    hierarchical: boolean,
                    injective: boolean,
                }
            }

            export class Id extends jspb.Message { 
                getName(): string;
                setName(value: string): Id;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Id.AsObject;
                static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Id;
                static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
            }

            export namespace Id {
                export type AsObject = {
                    name: string,
                }
            }

            export class Key extends jspb.Message { 
                clearAttributesList(): void;
                getAttributesList(): Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute>;
                setAttributesList(value: Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute>): Key;
                addAttributes(value?: ClickhouseConfig.ExternalDictionary.Structure.Attribute, index?: number): ClickhouseConfig.ExternalDictionary.Structure.Attribute;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Key.AsObject;
                static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Key;
                static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
            }

            export namespace Key {
                export type AsObject = {
                    attributesList: Array<ClickhouseConfig.ExternalDictionary.Structure.Attribute.AsObject>,
                }
            }

        }

        export class Layout extends jspb.Message { 
            getType(): ClickhouseConfig.ExternalDictionary.Layout.Type;
            setType(value: ClickhouseConfig.ExternalDictionary.Layout.Type): Layout;
            getSizeInCells(): number;
            setSizeInCells(value: number): Layout;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Layout.AsObject;
            static toObject(includeInstance: boolean, msg: Layout): Layout.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Layout, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Layout;
            static deserializeBinaryFromReader(message: Layout, reader: jspb.BinaryReader): Layout;
        }

        export namespace Layout {
            export type AsObject = {
                type: ClickhouseConfig.ExternalDictionary.Layout.Type,
                sizeInCells: number,
            }

            export enum Type {
    TYPE_UNSPECIFIED = 0,
    FLAT = 1,
    HASHED = 2,
    COMPLEX_KEY_HASHED = 3,
    RANGE_HASHED = 4,
    CACHE = 5,
    COMPLEX_KEY_CACHE = 6,
            }

        }

        export class Range extends jspb.Message { 
            getMin(): number;
            setMin(value: number): Range;
            getMax(): number;
            setMax(value: number): Range;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Range.AsObject;
            static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Range;
            static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
        }

        export namespace Range {
            export type AsObject = {
                min: number,
                max: number,
            }
        }


        export enum LifetimeCase {
            LIFETIME_NOT_SET = 0,
            FIXED_LIFETIME = 4,
            LIFETIME_RANGE = 5,
        }

        export enum SourceCase {
            SOURCE_NOT_SET = 0,
            HTTP_SOURCE = 6,
            MYSQL_SOURCE = 7,
            CLICKHOUSE_SOURCE = 8,
            MONGODB_SOURCE = 9,
            POSTGRESQL_SOURCE = 10,
        }

    }

    export class GraphiteRollup extends jspb.Message { 
        getName(): string;
        setName(value: string): GraphiteRollup;
        clearPatternsList(): void;
        getPatternsList(): Array<ClickhouseConfig.GraphiteRollup.Pattern>;
        setPatternsList(value: Array<ClickhouseConfig.GraphiteRollup.Pattern>): GraphiteRollup;
        addPatterns(value?: ClickhouseConfig.GraphiteRollup.Pattern, index?: number): ClickhouseConfig.GraphiteRollup.Pattern;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GraphiteRollup.AsObject;
        static toObject(includeInstance: boolean, msg: GraphiteRollup): GraphiteRollup.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GraphiteRollup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GraphiteRollup;
        static deserializeBinaryFromReader(message: GraphiteRollup, reader: jspb.BinaryReader): GraphiteRollup;
    }

    export namespace GraphiteRollup {
        export type AsObject = {
            name: string,
            patternsList: Array<ClickhouseConfig.GraphiteRollup.Pattern.AsObject>,
        }


        export class Pattern extends jspb.Message { 
            getRegexp(): string;
            setRegexp(value: string): Pattern;
            getFunction(): string;
            setFunction(value: string): Pattern;
            clearRetentionList(): void;
            getRetentionList(): Array<ClickhouseConfig.GraphiteRollup.Pattern.Retention>;
            setRetentionList(value: Array<ClickhouseConfig.GraphiteRollup.Pattern.Retention>): Pattern;
            addRetention(value?: ClickhouseConfig.GraphiteRollup.Pattern.Retention, index?: number): ClickhouseConfig.GraphiteRollup.Pattern.Retention;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Pattern.AsObject;
            static toObject(includeInstance: boolean, msg: Pattern): Pattern.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Pattern, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Pattern;
            static deserializeBinaryFromReader(message: Pattern, reader: jspb.BinaryReader): Pattern;
        }

        export namespace Pattern {
            export type AsObject = {
                regexp: string,
                pb_function: string,
                retentionList: Array<ClickhouseConfig.GraphiteRollup.Pattern.Retention.AsObject>,
            }


            export class Retention extends jspb.Message { 
                getAge(): number;
                setAge(value: number): Retention;
                getPrecision(): number;
                setPrecision(value: number): Retention;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Retention.AsObject;
                static toObject(includeInstance: boolean, msg: Retention): Retention.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Retention, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Retention;
                static deserializeBinaryFromReader(message: Retention, reader: jspb.BinaryReader): Retention;
            }

            export namespace Retention {
                export type AsObject = {
                    age: number,
                    precision: number,
                }
            }

        }

    }


    export enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    }

}

export class ClickhouseConfigSet extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): ClickhouseConfig | undefined;
    setEffectiveConfig(value?: ClickhouseConfig): ClickhouseConfigSet;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): ClickhouseConfig | undefined;
    setUserConfig(value?: ClickhouseConfig): ClickhouseConfigSet;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): ClickhouseConfig | undefined;
    setDefaultConfig(value?: ClickhouseConfig): ClickhouseConfigSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClickhouseConfigSet.AsObject;
    static toObject(includeInstance: boolean, msg: ClickhouseConfigSet): ClickhouseConfigSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClickhouseConfigSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClickhouseConfigSet;
    static deserializeBinaryFromReader(message: ClickhouseConfigSet, reader: jspb.BinaryReader): ClickhouseConfigSet;
}

export namespace ClickhouseConfigSet {
    export type AsObject = {
        effectiveConfig?: ClickhouseConfig.AsObject,
        userConfig?: ClickhouseConfig.AsObject,
        defaultConfig?: ClickhouseConfig.AsObject,
    }
}
