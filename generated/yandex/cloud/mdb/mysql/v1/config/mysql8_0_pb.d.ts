// package: yandex.cloud.mdb.mysql.v1.config
// file: yandex/cloud/mdb/mysql/v1/config/mysql8_0.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MysqlConfig8_0 extends jspb.Message { 

    hasInnodbBufferPoolSize(): boolean;
    clearInnodbBufferPoolSize(): void;
    getInnodbBufferPoolSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbBufferPoolSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasLongQueryTime(): boolean;
    clearLongQueryTime(): void;
    getLongQueryTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLongQueryTime(value?: google_protobuf_wrappers_pb.DoubleValue): MysqlConfig8_0;

    hasGeneralLog(): boolean;
    clearGeneralLog(): void;
    getGeneralLog(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setGeneralLog(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasAuditLog(): boolean;
    clearAuditLog(): void;
    getAuditLog(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAuditLog(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;
    clearSqlModeList(): void;
    getSqlModeList(): Array<MysqlConfig8_0.SQLMode>;
    setSqlModeList(value: Array<MysqlConfig8_0.SQLMode>): MysqlConfig8_0;
    addSqlMode(value: MysqlConfig8_0.SQLMode, index?: number): MysqlConfig8_0.SQLMode;

    hasMaxAllowedPacket(): boolean;
    clearMaxAllowedPacket(): void;
    getMaxAllowedPacket(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxAllowedPacket(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;
    getDefaultAuthenticationPlugin(): MysqlConfig8_0.AuthPlugin;
    setDefaultAuthenticationPlugin(value: MysqlConfig8_0.AuthPlugin): MysqlConfig8_0;

    hasInnodbFlushLogAtTrxCommit(): boolean;
    clearInnodbFlushLogAtTrxCommit(): void;
    getInnodbFlushLogAtTrxCommit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbFlushLogAtTrxCommit(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbLockWaitTimeout(): boolean;
    clearInnodbLockWaitTimeout(): void;
    getInnodbLockWaitTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLockWaitTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;
    getTransactionIsolation(): MysqlConfig8_0.TransactionIsolation;
    setTransactionIsolation(value: MysqlConfig8_0.TransactionIsolation): MysqlConfig8_0;

    hasInnodbPrintAllDeadlocks(): boolean;
    clearInnodbPrintAllDeadlocks(): void;
    getInnodbPrintAllDeadlocks(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbPrintAllDeadlocks(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasNetReadTimeout(): boolean;
    clearNetReadTimeout(): void;
    getNetReadTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNetReadTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasNetWriteTimeout(): boolean;
    clearNetWriteTimeout(): void;
    getNetWriteTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setNetWriteTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasGroupConcatMaxLen(): boolean;
    clearGroupConcatMaxLen(): void;
    getGroupConcatMaxLen(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGroupConcatMaxLen(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasTmpTableSize(): boolean;
    clearTmpTableSize(): void;
    getTmpTableSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTmpTableSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasMaxHeapTableSize(): boolean;
    clearMaxHeapTableSize(): void;
    getMaxHeapTableSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxHeapTableSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;
    getDefaultTimeZone(): string;
    setDefaultTimeZone(value: string): MysqlConfig8_0;
    getCharacterSetServer(): string;
    setCharacterSetServer(value: string): MysqlConfig8_0;
    getCollationServer(): string;
    setCollationServer(value: string): MysqlConfig8_0;

    hasInnodbAdaptiveHashIndex(): boolean;
    clearInnodbAdaptiveHashIndex(): void;
    getInnodbAdaptiveHashIndex(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbAdaptiveHashIndex(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasInnodbNumaInterleave(): boolean;
    clearInnodbNumaInterleave(): void;
    getInnodbNumaInterleave(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInnodbNumaInterleave(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasInnodbLogBufferSize(): boolean;
    clearInnodbLogBufferSize(): void;
    getInnodbLogBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLogBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbLogFileSize(): boolean;
    clearInnodbLogFileSize(): void;
    getInnodbLogFileSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbLogFileSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbIoCapacity(): boolean;
    clearInnodbIoCapacity(): void;
    getInnodbIoCapacity(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbIoCapacity(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbIoCapacityMax(): boolean;
    clearInnodbIoCapacityMax(): void;
    getInnodbIoCapacityMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbIoCapacityMax(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbReadIoThreads(): boolean;
    clearInnodbReadIoThreads(): void;
    getInnodbReadIoThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbReadIoThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbWriteIoThreads(): boolean;
    clearInnodbWriteIoThreads(): void;
    getInnodbWriteIoThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbWriteIoThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbPurgeThreads(): boolean;
    clearInnodbPurgeThreads(): void;
    getInnodbPurgeThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbPurgeThreads(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbThreadConcurrency(): boolean;
    clearInnodbThreadConcurrency(): void;
    getInnodbThreadConcurrency(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbThreadConcurrency(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbTempDataFileMaxSize(): boolean;
    clearInnodbTempDataFileMaxSize(): void;
    getInnodbTempDataFileMaxSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbTempDataFileMaxSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasThreadCacheSize(): boolean;
    clearThreadCacheSize(): void;
    getThreadCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setThreadCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasThreadStack(): boolean;
    clearThreadStack(): void;
    getThreadStack(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setThreadStack(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasJoinBufferSize(): boolean;
    clearJoinBufferSize(): void;
    getJoinBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setJoinBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasSortBufferSize(): boolean;
    clearSortBufferSize(): void;
    getSortBufferSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSortBufferSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasTableDefinitionCache(): boolean;
    clearTableDefinitionCache(): void;
    getTableDefinitionCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableDefinitionCache(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasTableOpenCache(): boolean;
    clearTableOpenCache(): void;
    getTableOpenCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableOpenCache(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasTableOpenCacheInstances(): boolean;
    clearTableOpenCacheInstances(): void;
    getTableOpenCacheInstances(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTableOpenCacheInstances(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasExplicitDefaultsForTimestamp(): boolean;
    clearExplicitDefaultsForTimestamp(): void;
    getExplicitDefaultsForTimestamp(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExplicitDefaultsForTimestamp(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasAutoIncrementIncrement(): boolean;
    clearAutoIncrementIncrement(): void;
    getAutoIncrementIncrement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoIncrementIncrement(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasAutoIncrementOffset(): boolean;
    clearAutoIncrementOffset(): void;
    getAutoIncrementOffset(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoIncrementOffset(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasSyncBinlog(): boolean;
    clearSyncBinlog(): void;
    getSyncBinlog(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSyncBinlog(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasBinlogCacheSize(): boolean;
    clearBinlogCacheSize(): void;
    getBinlogCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBinlogCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasBinlogGroupCommitSyncDelay(): boolean;
    clearBinlogGroupCommitSyncDelay(): void;
    getBinlogGroupCommitSyncDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBinlogGroupCommitSyncDelay(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;
    getBinlogRowImage(): MysqlConfig8_0.BinlogRowImage;
    setBinlogRowImage(value: MysqlConfig8_0.BinlogRowImage): MysqlConfig8_0;

    hasBinlogRowsQueryLogEvents(): boolean;
    clearBinlogRowsQueryLogEvents(): void;
    getBinlogRowsQueryLogEvents(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setBinlogRowsQueryLogEvents(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasRplSemiSyncMasterWaitForSlaveCount(): boolean;
    clearRplSemiSyncMasterWaitForSlaveCount(): void;
    getRplSemiSyncMasterWaitForSlaveCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRplSemiSyncMasterWaitForSlaveCount(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;
    getSlaveParallelType(): MysqlConfig8_0.SlaveParallelType;
    setSlaveParallelType(value: MysqlConfig8_0.SlaveParallelType): MysqlConfig8_0;

    hasSlaveParallelWorkers(): boolean;
    clearSlaveParallelWorkers(): void;
    getSlaveParallelWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlaveParallelWorkers(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasRegexpTimeLimit(): boolean;
    clearRegexpTimeLimit(): void;
    getRegexpTimeLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRegexpTimeLimit(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasMdbPreserveBinlogBytes(): boolean;
    clearMdbPreserveBinlogBytes(): void;
    getMdbPreserveBinlogBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbPreserveBinlogBytes(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInteractiveTimeout(): boolean;
    clearInteractiveTimeout(): void;
    getInteractiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInteractiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasWaitTimeout(): boolean;
    clearWaitTimeout(): void;
    getWaitTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setWaitTimeout(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasMdbOfflineModeEnableLag(): boolean;
    clearMdbOfflineModeEnableLag(): void;
    getMdbOfflineModeEnableLag(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbOfflineModeEnableLag(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasMdbOfflineModeDisableLag(): boolean;
    clearMdbOfflineModeDisableLag(): void;
    getMdbOfflineModeDisableLag(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbOfflineModeDisableLag(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasRangeOptimizerMaxMemSize(): boolean;
    clearRangeOptimizerMaxMemSize(): void;
    getRangeOptimizerMaxMemSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRangeOptimizerMaxMemSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasSlowQueryLog(): boolean;
    clearSlowQueryLog(): void;
    getSlowQueryLog(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSlowQueryLog(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;

    hasSlowQueryLogAlwaysWriteTime(): boolean;
    clearSlowQueryLogAlwaysWriteTime(): void;
    getSlowQueryLogAlwaysWriteTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSlowQueryLogAlwaysWriteTime(value?: google_protobuf_wrappers_pb.DoubleValue): MysqlConfig8_0;
    getLogSlowRateType(): MysqlConfig8_0.LogSlowRateType;
    setLogSlowRateType(value: MysqlConfig8_0.LogSlowRateType): MysqlConfig8_0;

    hasLogSlowRateLimit(): boolean;
    clearLogSlowRateLimit(): void;
    getLogSlowRateLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogSlowRateLimit(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasLogSlowSpStatements(): boolean;
    clearLogSlowSpStatements(): void;
    getLogSlowSpStatements(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogSlowSpStatements(value?: google_protobuf_wrappers_pb.BoolValue): MysqlConfig8_0;
    clearLogSlowFilterList(): void;
    getLogSlowFilterList(): Array<MysqlConfig8_0.LogSlowFilterType>;
    setLogSlowFilterList(value: Array<MysqlConfig8_0.LogSlowFilterType>): MysqlConfig8_0;
    addLogSlowFilter(value: MysqlConfig8_0.LogSlowFilterType, index?: number): MysqlConfig8_0.LogSlowFilterType;

    hasMdbPriorityChoiceMaxLag(): boolean;
    clearMdbPriorityChoiceMaxLag(): void;
    getMdbPriorityChoiceMaxLag(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMdbPriorityChoiceMaxLag(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    hasInnodbPageSize(): boolean;
    clearInnodbPageSize(): void;
    getInnodbPageSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbPageSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig8_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfig8_0.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfig8_0): MysqlConfig8_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfig8_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfig8_0;
    static deserializeBinaryFromReader(message: MysqlConfig8_0, reader: jspb.BinaryReader): MysqlConfig8_0;
}

export namespace MysqlConfig8_0 {
    export type AsObject = {
        innodbBufferPoolSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        longQueryTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        generalLog?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        auditLog?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sqlModeList: Array<MysqlConfig8_0.SQLMode>,
        maxAllowedPacket?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultAuthenticationPlugin: MysqlConfig8_0.AuthPlugin,
        innodbFlushLogAtTrxCommit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbLockWaitTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        transactionIsolation: MysqlConfig8_0.TransactionIsolation,
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
        binlogRowImage: MysqlConfig8_0.BinlogRowImage,
        binlogRowsQueryLogEvents?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        rplSemiSyncMasterWaitForSlaveCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        slaveParallelType: MysqlConfig8_0.SlaveParallelType,
        slaveParallelWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        regexpTimeLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbPreserveBinlogBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        interactiveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        waitTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbOfflineModeEnableLag?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mdbOfflineModeDisableLag?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        rangeOptimizerMaxMemSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        slowQueryLog?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        slowQueryLogAlwaysWriteTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        logSlowRateType: MysqlConfig8_0.LogSlowRateType,
        logSlowRateLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logSlowSpStatements?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logSlowFilterList: Array<MysqlConfig8_0.LogSlowFilterType>,
        mdbPriorityChoiceMaxLag?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        innodbPageSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
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
    ONLY_FULL_GROUP_BY = 15,
    PAD_CHAR_TO_FULL_LENGTH = 16,
    PIPES_AS_CONCAT = 17,
    REAL_AS_FLOAT = 18,
    STRICT_ALL_TABLES = 19,
    STRICT_TRANS_TABLES = 20,
    TIME_TRUNCATE_FRACTIONAL = 21,
    ANSI = 22,
    TRADITIONAL = 23,
    NO_DIR_IN_CREATE = 24,
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

    export enum LogSlowRateType {
    LOG_SLOW_RATE_TYPE_UNSPECIFIED = 0,
    SESSION = 1,
    QUERY = 2,
    }

    export enum LogSlowFilterType {
    LOG_SLOW_FILTER_TYPE_UNSPECIFIED = 0,
    FULL_SCAN = 1,
    FULL_JOIN = 2,
    TMP_TABLE = 3,
    TMP_TABLE_ON_DISK = 4,
    FILESORT = 5,
    FILESORT_ON_DISK = 6,
    }

}

export class MysqlConfigSet8_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MysqlConfig8_0 | undefined;
    setEffectiveConfig(value?: MysqlConfig8_0): MysqlConfigSet8_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MysqlConfig8_0 | undefined;
    setUserConfig(value?: MysqlConfig8_0): MysqlConfigSet8_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MysqlConfig8_0 | undefined;
    setDefaultConfig(value?: MysqlConfig8_0): MysqlConfigSet8_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfigSet8_0.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfigSet8_0): MysqlConfigSet8_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfigSet8_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfigSet8_0;
    static deserializeBinaryFromReader(message: MysqlConfigSet8_0, reader: jspb.BinaryReader): MysqlConfigSet8_0;
}

export namespace MysqlConfigSet8_0 {
    export type AsObject = {
        effectiveConfig?: MysqlConfig8_0.AsObject,
        userConfig?: MysqlConfig8_0.AsObject,
        defaultConfig?: MysqlConfig8_0.AsObject,
    }
}
