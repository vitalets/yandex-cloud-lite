// package: yandex.cloud.mdb.postgresql.v1.config
// file: yandex/cloud/mdb/postgresql/v1/config/host14.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class PostgresqlHostConfig14 extends jspb.Message { 

    hasRecoveryMinApplyDelay(): boolean;
    clearRecoveryMinApplyDelay(): void;
    getRecoveryMinApplyDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setRecoveryMinApplyDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasSharedBuffers(): boolean;
    clearSharedBuffers(): void;
    getSharedBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSharedBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasTempBuffers(): boolean;
    clearTempBuffers(): void;
    getTempBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasWorkMem(): boolean;
    clearWorkMem(): void;
    getWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasTempFileLimit(): boolean;
    clearTempFileLimit(): void;
    getTempFileLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempFileLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasBackendFlushAfter(): boolean;
    clearBackendFlushAfter(): void;
    getBackendFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasOldSnapshotThreshold(): boolean;
    clearOldSnapshotThreshold(): void;
    getOldSnapshotThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOldSnapshotThreshold(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasMaxStandbyStreamingDelay(): boolean;
    clearMaxStandbyStreamingDelay(): void;
    getMaxStandbyStreamingDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxStandbyStreamingDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;
    getConstraintExclusion(): PostgresqlHostConfig14.ConstraintExclusion;
    setConstraintExclusion(value: PostgresqlHostConfig14.ConstraintExclusion): PostgresqlHostConfig14;

    hasCursorTupleFraction(): boolean;
    clearCursorTupleFraction(): void;
    getCursorTupleFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCursorTupleFraction(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlHostConfig14;

    hasFromCollapseLimit(): boolean;
    clearFromCollapseLimit(): void;
    getFromCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFromCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasJoinCollapseLimit(): boolean;
    clearJoinCollapseLimit(): void;
    getJoinCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setJoinCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;
    getForceParallelMode(): PostgresqlHostConfig14.ForceParallelMode;
    setForceParallelMode(value: PostgresqlHostConfig14.ForceParallelMode): PostgresqlHostConfig14;
    getClientMinMessages(): PostgresqlHostConfig14.LogLevel;
    setClientMinMessages(value: PostgresqlHostConfig14.LogLevel): PostgresqlHostConfig14;
    getLogMinMessages(): PostgresqlHostConfig14.LogLevel;
    setLogMinMessages(value: PostgresqlHostConfig14.LogLevel): PostgresqlHostConfig14;
    getLogMinErrorStatement(): PostgresqlHostConfig14.LogLevel;
    setLogMinErrorStatement(value: PostgresqlHostConfig14.LogLevel): PostgresqlHostConfig14;

    hasLogMinDurationStatement(): boolean;
    clearLogMinDurationStatement(): void;
    getLogMinDurationStatement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogMinDurationStatement(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasLogCheckpoints(): boolean;
    clearLogCheckpoints(): void;
    getLogCheckpoints(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogCheckpoints(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasLogConnections(): boolean;
    clearLogConnections(): void;
    getLogConnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogConnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasLogDisconnections(): boolean;
    clearLogDisconnections(): void;
    getLogDisconnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDisconnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasLogDuration(): boolean;
    clearLogDuration(): void;
    getLogDuration(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDuration(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;
    getLogErrorVerbosity(): PostgresqlHostConfig14.LogErrorVerbosity;
    setLogErrorVerbosity(value: PostgresqlHostConfig14.LogErrorVerbosity): PostgresqlHostConfig14;

    hasLogLockWaits(): boolean;
    clearLogLockWaits(): void;
    getLogLockWaits(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogLockWaits(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;
    getLogStatement(): PostgresqlHostConfig14.LogStatement;
    setLogStatement(value: PostgresqlHostConfig14.LogStatement): PostgresqlHostConfig14;

    hasLogTempFiles(): boolean;
    clearLogTempFiles(): void;
    getLogTempFiles(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogTempFiles(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;
    getSearchPath(): string;
    setSearchPath(value: string): PostgresqlHostConfig14;

    hasRowSecurity(): boolean;
    clearRowSecurity(): void;
    getRowSecurity(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRowSecurity(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;
    getDefaultTransactionIsolation(): PostgresqlHostConfig14.TransactionIsolation;
    setDefaultTransactionIsolation(value: PostgresqlHostConfig14.TransactionIsolation): PostgresqlHostConfig14;

    hasStatementTimeout(): boolean;
    clearStatementTimeout(): void;
    getStatementTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStatementTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasLockTimeout(): boolean;
    clearLockTimeout(): void;
    getLockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasIdleInTransactionSessionTimeout(): boolean;
    clearIdleInTransactionSessionTimeout(): void;
    getIdleInTransactionSessionTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIdleInTransactionSessionTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;
    getByteaOutput(): PostgresqlHostConfig14.ByteaOutput;
    setByteaOutput(value: PostgresqlHostConfig14.ByteaOutput): PostgresqlHostConfig14;
    getXmlbinary(): PostgresqlHostConfig14.XmlBinary;
    setXmlbinary(value: PostgresqlHostConfig14.XmlBinary): PostgresqlHostConfig14;
    getXmloption(): PostgresqlHostConfig14.XmlOption;
    setXmloption(value: PostgresqlHostConfig14.XmlOption): PostgresqlHostConfig14;

    hasGinPendingListLimit(): boolean;
    clearGinPendingListLimit(): void;
    getGinPendingListLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGinPendingListLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasDeadlockTimeout(): boolean;
    clearDeadlockTimeout(): void;
    getDeadlockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeadlockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasMaxLocksPerTransaction(): boolean;
    clearMaxLocksPerTransaction(): void;
    getMaxLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasMaxPredLocksPerTransaction(): boolean;
    clearMaxPredLocksPerTransaction(): void;
    getMaxPredLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPredLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasArrayNulls(): boolean;
    clearArrayNulls(): void;
    getArrayNulls(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setArrayNulls(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;
    getBackslashQuote(): PostgresqlHostConfig14.BackslashQuote;
    setBackslashQuote(value: PostgresqlHostConfig14.BackslashQuote): PostgresqlHostConfig14;

    hasDefaultWithOids(): boolean;
    clearDefaultWithOids(): void;
    getDefaultWithOids(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDefaultWithOids(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEscapeStringWarning(): boolean;
    clearEscapeStringWarning(): void;
    getEscapeStringWarning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEscapeStringWarning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasLoCompatPrivileges(): boolean;
    clearLoCompatPrivileges(): void;
    getLoCompatPrivileges(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLoCompatPrivileges(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasQuoteAllIdentifiers(): boolean;
    clearQuoteAllIdentifiers(): void;
    getQuoteAllIdentifiers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setQuoteAllIdentifiers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasStandardConformingStrings(): boolean;
    clearStandardConformingStrings(): void;
    getStandardConformingStrings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStandardConformingStrings(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasSynchronizeSeqscans(): boolean;
    clearSynchronizeSeqscans(): void;
    getSynchronizeSeqscans(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSynchronizeSeqscans(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasTransformNullEquals(): boolean;
    clearTransformNullEquals(): void;
    getTransformNullEquals(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTransformNullEquals(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasExitOnError(): boolean;
    clearExitOnError(): void;
    getExitOnError(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExitOnError(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasSeqPageCost(): boolean;
    clearSeqPageCost(): void;
    getSeqPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSeqPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlHostConfig14;

    hasRandomPageCost(): boolean;
    clearRandomPageCost(): void;
    getRandomPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRandomPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlHostConfig14;

    hasEnableBitmapscan(): boolean;
    clearEnableBitmapscan(): void;
    getEnableBitmapscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableBitmapscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableHashagg(): boolean;
    clearEnableHashagg(): void;
    getEnableHashagg(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashagg(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableHashjoin(): boolean;
    clearEnableHashjoin(): void;
    getEnableHashjoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashjoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableIndexscan(): boolean;
    clearEnableIndexscan(): void;
    getEnableIndexscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableIndexonlyscan(): boolean;
    clearEnableIndexonlyscan(): void;
    getEnableIndexonlyscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexonlyscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableMaterial(): boolean;
    clearEnableMaterial(): void;
    getEnableMaterial(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMaterial(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableMergejoin(): boolean;
    clearEnableMergejoin(): void;
    getEnableMergejoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMergejoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableNestloop(): boolean;
    clearEnableNestloop(): void;
    getEnableNestloop(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableNestloop(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableSeqscan(): boolean;
    clearEnableSeqscan(): void;
    getEnableSeqscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSeqscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableSort(): boolean;
    clearEnableSort(): void;
    getEnableSort(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSort(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasEnableTidscan(): boolean;
    clearEnableTidscan(): void;
    getEnableTidscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableTidscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlHostConfig14;

    hasMaxParallelWorkers(): boolean;
    clearMaxParallelWorkers(): void;
    getMaxParallelWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasMaxParallelWorkersPerGather(): boolean;
    clearMaxParallelWorkersPerGather(): void;
    getMaxParallelWorkersPerGather(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkersPerGather(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;
    getTimezone(): string;
    setTimezone(value: string): PostgresqlHostConfig14;

    hasEffectiveIoConcurrency(): boolean;
    clearEffectiveIoConcurrency(): void;
    getEffectiveIoConcurrency(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveIoConcurrency(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    hasEffectiveCacheSize(): boolean;
    clearEffectiveCacheSize(): void;
    getEffectiveCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlHostConfig14;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresqlHostConfig14.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresqlHostConfig14): PostgresqlHostConfig14.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresqlHostConfig14, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresqlHostConfig14;
    static deserializeBinaryFromReader(message: PostgresqlHostConfig14, reader: jspb.BinaryReader): PostgresqlHostConfig14;
}

export namespace PostgresqlHostConfig14 {
    export type AsObject = {
        recoveryMinApplyDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sharedBuffers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tempBuffers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        workMem?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tempFileLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        backendFlushAfter?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        oldSnapshotThreshold?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxStandbyStreamingDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        constraintExclusion: PostgresqlHostConfig14.ConstraintExclusion,
        cursorTupleFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fromCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        joinCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        forceParallelMode: PostgresqlHostConfig14.ForceParallelMode,
        clientMinMessages: PostgresqlHostConfig14.LogLevel,
        logMinMessages: PostgresqlHostConfig14.LogLevel,
        logMinErrorStatement: PostgresqlHostConfig14.LogLevel,
        logMinDurationStatement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logCheckpoints?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logConnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDisconnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDuration?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logErrorVerbosity: PostgresqlHostConfig14.LogErrorVerbosity,
        logLockWaits?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logStatement: PostgresqlHostConfig14.LogStatement,
        logTempFiles?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        searchPath: string,
        rowSecurity?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        defaultTransactionIsolation: PostgresqlHostConfig14.TransactionIsolation,
        statementTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        idleInTransactionSessionTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        byteaOutput: PostgresqlHostConfig14.ByteaOutput,
        xmlbinary: PostgresqlHostConfig14.XmlBinary,
        xmloption: PostgresqlHostConfig14.XmlOption,
        ginPendingListLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        deadlockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPredLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        arrayNulls?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        backslashQuote: PostgresqlHostConfig14.BackslashQuote,
        defaultWithOids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        escapeStringWarning?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        loCompatPrivileges?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        quoteAllIdentifiers?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        standardConformingStrings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        synchronizeSeqscans?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        transformNullEquals?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        exitOnError?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        seqPageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        randomPageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        enableBitmapscan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableHashagg?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableHashjoin?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableIndexscan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableIndexonlyscan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableMaterial?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableMergejoin?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableNestloop?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableSeqscan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableSort?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableTidscan?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maxParallelWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxParallelWorkersPerGather?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        timezone: string,
        effectiveIoConcurrency?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        effectiveCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export enum ConstraintExclusion {
    CONSTRAINT_EXCLUSION_UNSPECIFIED = 0,
    CONSTRAINT_EXCLUSION_ON = 1,
    CONSTRAINT_EXCLUSION_OFF = 2,
    CONSTRAINT_EXCLUSION_PARTITION = 3,
    }

    export enum ForceParallelMode {
    FORCE_PARALLEL_MODE_UNSPECIFIED = 0,
    FORCE_PARALLEL_MODE_ON = 1,
    FORCE_PARALLEL_MODE_OFF = 2,
    FORCE_PARALLEL_MODE_REGRESS = 3,
    }

    export enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    LOG_LEVEL_DEBUG5 = 1,
    LOG_LEVEL_DEBUG4 = 2,
    LOG_LEVEL_DEBUG3 = 3,
    LOG_LEVEL_DEBUG2 = 4,
    LOG_LEVEL_DEBUG1 = 5,
    LOG_LEVEL_LOG = 6,
    LOG_LEVEL_NOTICE = 7,
    LOG_LEVEL_WARNING = 8,
    LOG_LEVEL_ERROR = 9,
    LOG_LEVEL_FATAL = 10,
    LOG_LEVEL_PANIC = 11,
    }

    export enum LogErrorVerbosity {
    LOG_ERROR_VERBOSITY_UNSPECIFIED = 0,
    LOG_ERROR_VERBOSITY_TERSE = 1,
    LOG_ERROR_VERBOSITY_DEFAULT = 2,
    LOG_ERROR_VERBOSITY_VERBOSE = 3,
    }

    export enum LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    }

    export enum TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    }

    export enum ByteaOutput {
    BYTEA_OUTPUT_UNSPECIFIED = 0,
    BYTEA_OUTPUT_HEX = 1,
    BYTEA_OUTPUT_ESCAPED = 2,
    }

    export enum XmlBinary {
    XML_BINARY_UNSPECIFIED = 0,
    XML_BINARY_BASE64 = 1,
    XML_BINARY_HEX = 2,
    }

    export enum XmlOption {
    XML_OPTION_UNSPECIFIED = 0,
    XML_OPTION_DOCUMENT = 1,
    XML_OPTION_CONTENT = 2,
    }

    export enum BackslashQuote {
    BACKSLASH_QUOTE_UNSPECIFIED = 0,
    BACKSLASH_QUOTE = 1,
    BACKSLASH_QUOTE_ON = 2,
    BACKSLASH_QUOTE_OFF = 3,
    BACKSLASH_QUOTE_SAFE_ENCODING = 4,
    }

}
