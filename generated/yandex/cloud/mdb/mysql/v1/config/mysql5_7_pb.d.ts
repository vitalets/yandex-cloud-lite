// package: yandex.cloud.mdb.mysql.v1.config
// file: yandex/cloud/mdb/mysql/v1/config/mysql5_7.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MysqlConfig5_7 extends jspb.Message { 

    hasInnodbBufferPoolSize(): boolean;
    clearInnodbBufferPoolSize(): void;
    getInnodbBufferPoolSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbBufferPoolSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasLongQueryTime(): boolean;
    clearLongQueryTime(): void;
    getLongQueryTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLongQueryTime(value?: google_protobuf_wrappers_pb.DoubleValue): MysqlConfig5_7;

    hasGeneralLog(): boolean;
    clearGeneralLog(): void;
    getGeneralLog(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setGeneralLog(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasAuditLog(): boolean;
    clearAuditLog(): void;
    getAuditLog(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAuditLog(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;
    clearSqlModeList(): void;
    getSqlModeList(): Array<MysqlConfig5_7.SQLMode>;
    setSqlModeList(value: Array<MysqlConfig5_7.SQLMode>): MysqlConfig5_7;
    addSqlMode(value: MysqlConfig5_7.SQLMode, index?: number): MysqlConfig5_7.SQLMode;

    hasMaxAllowedPacket(): boolean;
    clearMaxAllowedPacket(): void;
    getMaxAllowedPacket(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxAllowedPacket(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;
    getDefaultAuthenticationPlugin(): MysqlConfig5_7.AuthPlugin;
    setDefaultAuthenticationPlugin(value: MysqlConfig5_7.AuthPlugin): MysqlConfig5_7;

    hasInnodbFlushLogAtTrxCommit(): boolean;
    clearInnodbFlushLogAtTrxCommit(): void;
    getInnodbFlushLogAtTrxCommit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbFlushLogAtTrxCommit(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbLockWaitTimeout(): boolean;
    clearInnodbLockWaitTimeout(): void;
    getInnodbLockWaitTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLockWaitTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;
    getTransactionIsolation(): MysqlConfig5_7.TransactionIsolation;
    setTransactionIsolation(value: MysqlConfig5_7.TransactionIsolation): MysqlConfig5_7;

    hasInnodbPrintAllDeadlocks(): boolean;
    clearInnodbPrintAllDeadlocks(): void;
    getInnodbPrintAllDeadlocks(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbPrintAllDeadlocks(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasNetReadTimeout(): boolean;
    clearNetReadTimeout(): void;
    getNetReadTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNetReadTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasNetWriteTimeout(): boolean;
    clearNetWriteTimeout(): void;
    getNetWriteTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNetWriteTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasGroupConcatMaxLen(): boolean;
    clearGroupConcatMaxLen(): void;
    getGroupConcatMaxLen(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGroupConcatMaxLen(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasTmpTableSize(): boolean;
    clearTmpTableSize(): void;
    getTmpTableSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTmpTableSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMaxHeapTableSize(): boolean;
    clearMaxHeapTableSize(): void;
    getMaxHeapTableSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxHeapTableSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;
    getDefaultTimeZone(): string;
    setDefaultTimeZone(value: string): MysqlConfig5_7;
    getCharacterSetServer(): string;
    setCharacterSetServer(value: string): MysqlConfig5_7;
    getCollationServer(): string;
    setCollationServer(value: string): MysqlConfig5_7;

    hasInnodbAdaptiveHashIndex(): boolean;
    clearInnodbAdaptiveHashIndex(): void;
    getInnodbAdaptiveHashIndex(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbAdaptiveHashIndex(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasInnodbNumaInterleave(): boolean;
    clearInnodbNumaInterleave(): void;
    getInnodbNumaInterleave(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbNumaInterleave(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasInnodbLogBufferSize(): boolean;
    clearInnodbLogBufferSize(): void;
    getInnodbLogBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLogBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbLogFileSize(): boolean;
    clearInnodbLogFileSize(): void;
    getInnodbLogFileSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLogFileSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbIoCapacity(): boolean;
    clearInnodbIoCapacity(): void;
    getInnodbIoCapacity(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbIoCapacity(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbIoCapacityMax(): boolean;
    clearInnodbIoCapacityMax(): void;
    getInnodbIoCapacityMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbIoCapacityMax(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbReadIoThreads(): boolean;
    clearInnodbReadIoThreads(): void;
    getInnodbReadIoThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbReadIoThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbWriteIoThreads(): boolean;
    clearInnodbWriteIoThreads(): void;
    getInnodbWriteIoThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbWriteIoThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbPurgeThreads(): boolean;
    clearInnodbPurgeThreads(): void;
    getInnodbPurgeThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbPurgeThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbThreadConcurrency(): boolean;
    clearInnodbThreadConcurrency(): void;
    getInnodbThreadConcurrency(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbThreadConcurrency(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInnodbTempDataFileMaxSize(): boolean;
    clearInnodbTempDataFileMaxSize(): void;
    getInnodbTempDataFileMaxSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbTempDataFileMaxSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasThreadCacheSize(): boolean;
    clearThreadCacheSize(): void;
    getThreadCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setThreadCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasThreadStack(): boolean;
    clearThreadStack(): void;
    getThreadStack(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setThreadStack(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasJoinBufferSize(): boolean;
    clearJoinBufferSize(): void;
    getJoinBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setJoinBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasSortBufferSize(): boolean;
    clearSortBufferSize(): void;
    getSortBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSortBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasTableDefinitionCache(): boolean;
    clearTableDefinitionCache(): void;
    getTableDefinitionCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableDefinitionCache(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasTableOpenCache(): boolean;
    clearTableOpenCache(): void;
    getTableOpenCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableOpenCache(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasTableOpenCacheInstances(): boolean;
    clearTableOpenCacheInstances(): void;
    getTableOpenCacheInstances(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableOpenCacheInstances(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasExplicitDefaultsForTimestamp(): boolean;
    clearExplicitDefaultsForTimestamp(): void;
    getExplicitDefaultsForTimestamp(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExplicitDefaultsForTimestamp(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasAutoIncrementIncrement(): boolean;
    clearAutoIncrementIncrement(): void;
    getAutoIncrementIncrement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoIncrementIncrement(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasAutoIncrementOffset(): boolean;
    clearAutoIncrementOffset(): void;
    getAutoIncrementOffset(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoIncrementOffset(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasSyncBinlog(): boolean;
    clearSyncBinlog(): void;
    getSyncBinlog(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSyncBinlog(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasBinlogCacheSize(): boolean;
    clearBinlogCacheSize(): void;
    getBinlogCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBinlogCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasBinlogGroupCommitSyncDelay(): boolean;
    clearBinlogGroupCommitSyncDelay(): void;
    getBinlogGroupCommitSyncDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBinlogGroupCommitSyncDelay(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;
    getBinlogRowImage(): MysqlConfig5_7.BinlogRowImage;
    setBinlogRowImage(value: MysqlConfig5_7.BinlogRowImage): MysqlConfig5_7;

    hasBinlogRowsQueryLogEvents(): boolean;
    clearBinlogRowsQueryLogEvents(): void;
    getBinlogRowsQueryLogEvents(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setBinlogRowsQueryLogEvents(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig5_7;

    hasRplSemiSyncMasterWaitForSlaveCount(): boolean;
    clearRplSemiSyncMasterWaitForSlaveCount(): void;
    getRplSemiSyncMasterWaitForSlaveCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRplSemiSyncMasterWaitForSlaveCount(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;
    getSlaveParallelType(): MysqlConfig5_7.SlaveParallelType;
    setSlaveParallelType(value: MysqlConfig5_7.SlaveParallelType): MysqlConfig5_7;

    hasSlaveParallelWorkers(): boolean;
    clearSlaveParallelWorkers(): void;
    getSlaveParallelWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlaveParallelWorkers(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMdbPreserveBinlogBytes(): boolean;
    clearMdbPreserveBinlogBytes(): void;
    getMdbPreserveBinlogBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbPreserveBinlogBytes(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasInteractiveTimeout(): boolean;
    clearInteractiveTimeout(): void;
    getInteractiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInteractiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasWaitTimeout(): boolean;
    clearWaitTimeout(): void;
    getWaitTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setWaitTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMdbOfflineModeEnableLag(): boolean;
    clearMdbOfflineModeEnableLag(): void;
    getMdbOfflineModeEnableLag(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbOfflineModeEnableLag(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMdbOfflineModeDisableLag(): boolean;
    clearMdbOfflineModeDisableLag(): void;
    getMdbOfflineModeDisableLag(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbOfflineModeDisableLag(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasRangeOptimizerMaxMemSize(): boolean;
    clearRangeOptimizerMaxMemSize(): void;
    getRangeOptimizerMaxMemSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRangeOptimizerMaxMemSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfig5_7.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfig5_7): MysqlConfig5_7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfig5_7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfig5_7;
    static deserializeBinaryFromReader(message: MysqlConfig5_7, reader: jspb.BinaryReader): MysqlConfig5_7;
}

export namespace MysqlConfig5_7 {
    export type AsObject = {
        innodbBufferPoolSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        longQueryTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        generalLog?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        auditLog?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sqlModeList: Array<MysqlConfig5_7.SQLMode>,
        maxAllowedPacket?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultAuthenticationPlugin: MysqlConfig5_7.AuthPlugin,
        innodbFlushLogAtTrxCommit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbLockWaitTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        transactionIsolation: MysqlConfig5_7.TransactionIsolation,
        innodbPrintAllDeadlocks?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        netReadTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        netWriteTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        groupConcatMaxLen?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tmpTableSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxHeapTableSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultTimeZone: string,
        characterSetServer: string,
        collationServer: string,
        innodbAdaptiveHashIndex?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        innodbNumaInterleave?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        innodbLogBufferSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbLogFileSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbIoCapacity?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbIoCapacityMax?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbReadIoThreads?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbWriteIoThreads?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbPurgeThreads?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbThreadConcurrency?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbTempDataFileMaxSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        threadCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        threadStack?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        joinBufferSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sortBufferSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tableDefinitionCache?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tableOpenCache?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tableOpenCacheInstances?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        explicitDefaultsForTimestamp?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoIncrementIncrement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autoIncrementOffset?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        syncBinlog?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        binlogCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        binlogGroupCommitSyncDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        binlogRowImage: MysqlConfig5_7.BinlogRowImage,
        binlogRowsQueryLogEvents?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        rplSemiSyncMasterWaitForSlaveCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        slaveParallelType: MysqlConfig5_7.SlaveParallelType,
        slaveParallelWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbPreserveBinlogBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        interactiveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        waitTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbOfflineModeEnableLag?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbOfflineModeDisableLag?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        rangeOptimizerMaxMemSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export enum SQLMode {
    SQLMODE_UNSPECIFIED = 0,
    ALLOW_INVALID_DATES = 1,
    ANSI_QUOTES = 2,
    ERROR_FOR_DIVISION_BY_ZERO = 3,
    HIGH_NOT_PRECEDENCE = 4,
    IGNORE_SPACE = 5,
    NO_AUTO_VALUE_ON_ZERO = 6,
    NO_BACKSLASH_ESCAPES = 7,
    NO_ENGINE_SUBSTITUTION = 8,
    NO_UNSIGNED_SUBTRACTION = 9,
    NO_ZERO_DATE = 10,
    NO_ZERO_IN_DATE = 11,
    NO_FIELD_OPTIONS = 12,
    NO_KEY_OPTIONS = 13,
    NO_TABLE_OPTIONS = 14,
    ONLY_FULL_GROUP_BY = 15,
    PAD_CHAR_TO_FULL_LENGTH = 16,
    PIPES_AS_CONCAT = 17,
    REAL_AS_FLOAT = 18,
    STRICT_ALL_TABLES = 19,
    STRICT_TRANS_TABLES = 20,
    ANSI = 21,
    TRADITIONAL = 22,
    DB2 = 23,
    MAXDB = 24,
    MSSQL = 25,
    MYSQL323 = 26,
    MYSQL40 = 27,
    ORACLE = 28,
    POSTGRESQL = 29,
    NO_AUTO_CREATE_USER = 30,
    NO_DIR_IN_CREATE = 31,
    }

    export enum AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    MYSQL_NATIVE_PASSWORD = 1,
    CACHING_SHA2_PASSWORD = 2,
    SHA256_PASSWORD = 3,
    }

    export enum TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    READ_COMMITTED = 1,
    REPEATABLE_READ = 2,
    SERIALIZABLE = 3,
    }

    export enum BinlogRowImage {
    BINLOG_ROW_IMAGE_UNSPECIFIED = 0,
    FULL = 1,
    MINIMAL = 2,
    NOBLOB = 3,
    }

    export enum SlaveParallelType {
    SLAVE_PARALLEL_TYPE_UNSPECIFIED = 0,
    DATABASE = 1,
    LOGICAL_CLOCK = 2,
    }

}

export class MysqlConfigSet5_7 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MysqlConfig5_7 | undefined;
    setEffectiveConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MysqlConfig5_7 | undefined;
    setUserConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MysqlConfig5_7 | undefined;
    setDefaultConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfigSet5_7.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfigSet5_7): MysqlConfigSet5_7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfigSet5_7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfigSet5_7;
    static deserializeBinaryFromReader(message: MysqlConfigSet5_7, reader: jspb.BinaryReader): MysqlConfigSet5_7;
}

export namespace MysqlConfigSet5_7 {
    export type AsObject = {
        effectiveConfig?: MysqlConfig5_7.AsObject,
        userConfig?: MysqlConfig5_7.AsObject,
        defaultConfig?: MysqlConfig5_7.AsObject,
    }
}
