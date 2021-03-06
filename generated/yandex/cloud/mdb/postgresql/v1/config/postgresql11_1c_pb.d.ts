// package: yandex.cloud.mdb.postgresql.v1.config
// file: yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class PostgresqlConfig11_1C extends jspb.Message { 

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasSharedBuffers(): boolean;
    clearSharedBuffers(): void;
    getSharedBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSharedBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasTempBuffers(): boolean;
    clearTempBuffers(): void;
    getTempBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxPreparedTransactions(): boolean;
    clearMaxPreparedTransactions(): void;
    getMaxPreparedTransactions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPreparedTransactions(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasWorkMem(): boolean;
    clearWorkMem(): void;
    getWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaintenanceWorkMem(): boolean;
    clearMaintenanceWorkMem(): void;
    getMaintenanceWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaintenanceWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutovacuumWorkMem(): boolean;
    clearAutovacuumWorkMem(): void;
    getAutovacuumWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasTempFileLimit(): boolean;
    clearTempFileLimit(): void;
    getTempFileLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempFileLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasVacuumCostDelay(): boolean;
    clearVacuumCostDelay(): void;
    getVacuumCostDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasVacuumCostPageHit(): boolean;
    clearVacuumCostPageHit(): void;
    getVacuumCostPageHit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageHit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasVacuumCostPageMiss(): boolean;
    clearVacuumCostPageMiss(): void;
    getVacuumCostPageMiss(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageMiss(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasVacuumCostPageDirty(): boolean;
    clearVacuumCostPageDirty(): void;
    getVacuumCostPageDirty(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageDirty(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasVacuumCostLimit(): boolean;
    clearVacuumCostLimit(): void;
    getVacuumCostLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasBgwriterDelay(): boolean;
    clearBgwriterDelay(): void;
    getBgwriterDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasBgwriterLruMaxpages(): boolean;
    clearBgwriterLruMaxpages(): void;
    getBgwriterLruMaxpages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterLruMaxpages(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasBgwriterLruMultiplier(): boolean;
    clearBgwriterLruMultiplier(): void;
    getBgwriterLruMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBgwriterLruMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasBgwriterFlushAfter(): boolean;
    clearBgwriterFlushAfter(): void;
    getBgwriterFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasBackendFlushAfter(): boolean;
    clearBackendFlushAfter(): void;
    getBackendFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasOldSnapshotThreshold(): boolean;
    clearOldSnapshotThreshold(): void;
    getOldSnapshotThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOldSnapshotThreshold(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    getWalLevel(): PostgresqlConfig11_1C.WalLevel;
    setWalLevel(value: PostgresqlConfig11_1C.WalLevel): PostgresqlConfig11_1C;
    getSynchronousCommit(): PostgresqlConfig11_1C.SynchronousCommit;
    setSynchronousCommit(value: PostgresqlConfig11_1C.SynchronousCommit): PostgresqlConfig11_1C;

    hasCheckpointTimeout(): boolean;
    clearCheckpointTimeout(): void;
    getCheckpointTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCheckpointTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasCheckpointCompletionTarget(): boolean;
    clearCheckpointCompletionTarget(): void;
    getCheckpointCompletionTarget(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCheckpointCompletionTarget(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasCheckpointFlushAfter(): boolean;
    clearCheckpointFlushAfter(): void;
    getCheckpointFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCheckpointFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxWalSize(): boolean;
    clearMaxWalSize(): void;
    getMaxWalSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxWalSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMinWalSize(): boolean;
    clearMinWalSize(): void;
    getMinWalSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinWalSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxStandbyStreamingDelay(): boolean;
    clearMaxStandbyStreamingDelay(): void;
    getMaxStandbyStreamingDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxStandbyStreamingDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasDefaultStatisticsTarget(): boolean;
    clearDefaultStatisticsTarget(): void;
    getDefaultStatisticsTarget(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDefaultStatisticsTarget(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    getConstraintExclusion(): PostgresqlConfig11_1C.ConstraintExclusion;
    setConstraintExclusion(value: PostgresqlConfig11_1C.ConstraintExclusion): PostgresqlConfig11_1C;

    hasCursorTupleFraction(): boolean;
    clearCursorTupleFraction(): void;
    getCursorTupleFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCursorTupleFraction(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasFromCollapseLimit(): boolean;
    clearFromCollapseLimit(): void;
    getFromCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFromCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasJoinCollapseLimit(): boolean;
    clearJoinCollapseLimit(): void;
    getJoinCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setJoinCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    getForceParallelMode(): PostgresqlConfig11_1C.ForceParallelMode;
    setForceParallelMode(value: PostgresqlConfig11_1C.ForceParallelMode): PostgresqlConfig11_1C;
    getClientMinMessages(): PostgresqlConfig11_1C.LogLevel;
    setClientMinMessages(value: PostgresqlConfig11_1C.LogLevel): PostgresqlConfig11_1C;
    getLogMinMessages(): PostgresqlConfig11_1C.LogLevel;
    setLogMinMessages(value: PostgresqlConfig11_1C.LogLevel): PostgresqlConfig11_1C;
    getLogMinErrorStatement(): PostgresqlConfig11_1C.LogLevel;
    setLogMinErrorStatement(value: PostgresqlConfig11_1C.LogLevel): PostgresqlConfig11_1C;

    hasLogMinDurationStatement(): boolean;
    clearLogMinDurationStatement(): void;
    getLogMinDurationStatement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogMinDurationStatement(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasLogCheckpoints(): boolean;
    clearLogCheckpoints(): void;
    getLogCheckpoints(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogCheckpoints(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasLogConnections(): boolean;
    clearLogConnections(): void;
    getLogConnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogConnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasLogDisconnections(): boolean;
    clearLogDisconnections(): void;
    getLogDisconnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDisconnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasLogDuration(): boolean;
    clearLogDuration(): void;
    getLogDuration(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDuration(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getLogErrorVerbosity(): PostgresqlConfig11_1C.LogErrorVerbosity;
    setLogErrorVerbosity(value: PostgresqlConfig11_1C.LogErrorVerbosity): PostgresqlConfig11_1C;

    hasLogLockWaits(): boolean;
    clearLogLockWaits(): void;
    getLogLockWaits(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogLockWaits(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getLogStatement(): PostgresqlConfig11_1C.LogStatement;
    setLogStatement(value: PostgresqlConfig11_1C.LogStatement): PostgresqlConfig11_1C;

    hasLogTempFiles(): boolean;
    clearLogTempFiles(): void;
    getLogTempFiles(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogTempFiles(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    getSearchPath(): string;
    setSearchPath(value: string): PostgresqlConfig11_1C;

    hasRowSecurity(): boolean;
    clearRowSecurity(): void;
    getRowSecurity(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRowSecurity(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getDefaultTransactionIsolation(): PostgresqlConfig11_1C.TransactionIsolation;
    setDefaultTransactionIsolation(value: PostgresqlConfig11_1C.TransactionIsolation): PostgresqlConfig11_1C;

    hasStatementTimeout(): boolean;
    clearStatementTimeout(): void;
    getStatementTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStatementTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasLockTimeout(): boolean;
    clearLockTimeout(): void;
    getLockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasIdleInTransactionSessionTimeout(): boolean;
    clearIdleInTransactionSessionTimeout(): void;
    getIdleInTransactionSessionTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIdleInTransactionSessionTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    getByteaOutput(): PostgresqlConfig11_1C.ByteaOutput;
    setByteaOutput(value: PostgresqlConfig11_1C.ByteaOutput): PostgresqlConfig11_1C;
    getXmlbinary(): PostgresqlConfig11_1C.XmlBinary;
    setXmlbinary(value: PostgresqlConfig11_1C.XmlBinary): PostgresqlConfig11_1C;
    getXmloption(): PostgresqlConfig11_1C.XmlOption;
    setXmloption(value: PostgresqlConfig11_1C.XmlOption): PostgresqlConfig11_1C;

    hasGinPendingListLimit(): boolean;
    clearGinPendingListLimit(): void;
    getGinPendingListLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGinPendingListLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasDeadlockTimeout(): boolean;
    clearDeadlockTimeout(): void;
    getDeadlockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeadlockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxLocksPerTransaction(): boolean;
    clearMaxLocksPerTransaction(): void;
    getMaxLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxPredLocksPerTransaction(): boolean;
    clearMaxPredLocksPerTransaction(): void;
    getMaxPredLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPredLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasArrayNulls(): boolean;
    clearArrayNulls(): void;
    getArrayNulls(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setArrayNulls(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getBackslashQuote(): PostgresqlConfig11_1C.BackslashQuote;
    setBackslashQuote(value: PostgresqlConfig11_1C.BackslashQuote): PostgresqlConfig11_1C;

    hasDefaultWithOids(): boolean;
    clearDefaultWithOids(): void;
    getDefaultWithOids(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDefaultWithOids(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEscapeStringWarning(): boolean;
    clearEscapeStringWarning(): void;
    getEscapeStringWarning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEscapeStringWarning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasLoCompatPrivileges(): boolean;
    clearLoCompatPrivileges(): void;
    getLoCompatPrivileges(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLoCompatPrivileges(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasOperatorPrecedenceWarning(): boolean;
    clearOperatorPrecedenceWarning(): void;
    getOperatorPrecedenceWarning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOperatorPrecedenceWarning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasQuoteAllIdentifiers(): boolean;
    clearQuoteAllIdentifiers(): void;
    getQuoteAllIdentifiers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setQuoteAllIdentifiers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasStandardConformingStrings(): boolean;
    clearStandardConformingStrings(): void;
    getStandardConformingStrings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStandardConformingStrings(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasSynchronizeSeqscans(): boolean;
    clearSynchronizeSeqscans(): void;
    getSynchronizeSeqscans(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSynchronizeSeqscans(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasTransformNullEquals(): boolean;
    clearTransformNullEquals(): void;
    getTransformNullEquals(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTransformNullEquals(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasExitOnError(): boolean;
    clearExitOnError(): void;
    getExitOnError(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExitOnError(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasSeqPageCost(): boolean;
    clearSeqPageCost(): void;
    getSeqPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSeqPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasRandomPageCost(): boolean;
    clearRandomPageCost(): void;
    getRandomPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRandomPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasAutovacuumMaxWorkers(): boolean;
    clearAutovacuumMaxWorkers(): void;
    getAutovacuumMaxWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumMaxWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutovacuumVacuumCostDelay(): boolean;
    clearAutovacuumVacuumCostDelay(): void;
    getAutovacuumVacuumCostDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumVacuumCostDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutovacuumVacuumCostLimit(): boolean;
    clearAutovacuumVacuumCostLimit(): void;
    getAutovacuumVacuumCostLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumVacuumCostLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutovacuumNaptime(): boolean;
    clearAutovacuumNaptime(): void;
    getAutovacuumNaptime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumNaptime(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasArchiveTimeout(): boolean;
    clearArchiveTimeout(): void;
    getArchiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setArchiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasTrackActivityQuerySize(): boolean;
    clearTrackActivityQuerySize(): void;
    getTrackActivityQuerySize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTrackActivityQuerySize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasEnableBitmapscan(): boolean;
    clearEnableBitmapscan(): void;
    getEnableBitmapscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableBitmapscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableHashagg(): boolean;
    clearEnableHashagg(): void;
    getEnableHashagg(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashagg(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableHashjoin(): boolean;
    clearEnableHashjoin(): void;
    getEnableHashjoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashjoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableIndexscan(): boolean;
    clearEnableIndexscan(): void;
    getEnableIndexscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableIndexonlyscan(): boolean;
    clearEnableIndexonlyscan(): void;
    getEnableIndexonlyscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexonlyscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableMaterial(): boolean;
    clearEnableMaterial(): void;
    getEnableMaterial(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMaterial(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableMergejoin(): boolean;
    clearEnableMergejoin(): void;
    getEnableMergejoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMergejoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableNestloop(): boolean;
    clearEnableNestloop(): void;
    getEnableNestloop(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableNestloop(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableSeqscan(): boolean;
    clearEnableSeqscan(): void;
    getEnableSeqscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSeqscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableSort(): boolean;
    clearEnableSort(): void;
    getEnableSort(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSort(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableTidscan(): boolean;
    clearEnableTidscan(): void;
    getEnableTidscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableTidscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasMaxWorkerProcesses(): boolean;
    clearMaxWorkerProcesses(): void;
    getMaxWorkerProcesses(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxWorkerProcesses(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxParallelWorkers(): boolean;
    clearMaxParallelWorkers(): void;
    getMaxParallelWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasMaxParallelWorkersPerGather(): boolean;
    clearMaxParallelWorkersPerGather(): void;
    getMaxParallelWorkersPerGather(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkersPerGather(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutovacuumVacuumScaleFactor(): boolean;
    clearAutovacuumVacuumScaleFactor(): void;
    getAutovacuumVacuumScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutovacuumVacuumScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasAutovacuumAnalyzeScaleFactor(): boolean;
    clearAutovacuumAnalyzeScaleFactor(): void;
    getAutovacuumAnalyzeScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutovacuumAnalyzeScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasDefaultTransactionReadOnly(): boolean;
    clearDefaultTransactionReadOnly(): void;
    getDefaultTransactionReadOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDefaultTransactionReadOnly(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getTimezone(): string;
    setTimezone(value: string): PostgresqlConfig11_1C;

    hasEnableParallelAppend(): boolean;
    clearEnableParallelAppend(): void;
    getEnableParallelAppend(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableParallelAppend(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnableParallelHash(): boolean;
    clearEnableParallelHash(): void;
    getEnableParallelHash(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableParallelHash(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnablePartitionPruning(): boolean;
    clearEnablePartitionPruning(): void;
    getEnablePartitionPruning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionPruning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnablePartitionwiseAggregate(): boolean;
    clearEnablePartitionwiseAggregate(): void;
    getEnablePartitionwiseAggregate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionwiseAggregate(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasEnablePartitionwiseJoin(): boolean;
    clearEnablePartitionwiseJoin(): void;
    getEnablePartitionwiseJoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionwiseJoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasJit(): boolean;
    clearJit(): void;
    getJit(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setJit(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasMaxParallelMaintenanceWorkers(): boolean;
    clearMaxParallelMaintenanceWorkers(): void;
    getMaxParallelMaintenanceWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelMaintenanceWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasParallelLeaderParticipation(): boolean;
    clearParallelLeaderParticipation(): void;
    getParallelLeaderParticipation(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setParallelLeaderParticipation(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasVacuumCleanupIndexScaleFactor(): boolean;
    clearVacuumCleanupIndexScaleFactor(): void;
    getVacuumCleanupIndexScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVacuumCleanupIndexScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasEffectiveIoConcurrency(): boolean;
    clearEffectiveIoConcurrency(): void;
    getEffectiveIoConcurrency(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveIoConcurrency(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasEffectiveCacheSize(): boolean;
    clearEffectiveCacheSize(): void;
    getEffectiveCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;
    clearSharedPreloadLibrariesList(): void;
    getSharedPreloadLibrariesList(): Array<PostgresqlConfig11_1C.SharedPreloadLibraries>;
    setSharedPreloadLibrariesList(value: Array<PostgresqlConfig11_1C.SharedPreloadLibraries>): PostgresqlConfig11_1C;
    addSharedPreloadLibraries(value: PostgresqlConfig11_1C.SharedPreloadLibraries, index?: number): PostgresqlConfig11_1C.SharedPreloadLibraries;

    hasAutoExplainLogMinDuration(): boolean;
    clearAutoExplainLogMinDuration(): void;
    getAutoExplainLogMinDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoExplainLogMinDuration(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig11_1C;

    hasAutoExplainLogAnalyze(): boolean;
    clearAutoExplainLogAnalyze(): void;
    getAutoExplainLogAnalyze(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogAnalyze(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainLogBuffers(): boolean;
    clearAutoExplainLogBuffers(): void;
    getAutoExplainLogBuffers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogBuffers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainLogTiming(): boolean;
    clearAutoExplainLogTiming(): void;
    getAutoExplainLogTiming(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogTiming(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainLogTriggers(): boolean;
    clearAutoExplainLogTriggers(): void;
    getAutoExplainLogTriggers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogTriggers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainLogVerbose(): boolean;
    clearAutoExplainLogVerbose(): void;
    getAutoExplainLogVerbose(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogVerbose(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainLogNestedStatements(): boolean;
    clearAutoExplainLogNestedStatements(): void;
    getAutoExplainLogNestedStatements(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogNestedStatements(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasAutoExplainSampleRate(): boolean;
    clearAutoExplainSampleRate(): void;
    getAutoExplainSampleRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutoExplainSampleRate(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig11_1C;

    hasPgHintPlanEnableHint(): boolean;
    clearPgHintPlanEnableHint(): void;
    getPgHintPlanEnableHint(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPgHintPlanEnableHint(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;

    hasPgHintPlanEnableHintTable(): boolean;
    clearPgHintPlanEnableHintTable(): void;
    getPgHintPlanEnableHintTable(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPgHintPlanEnableHintTable(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig11_1C;
    getPgHintPlanDebugPrint(): PostgresqlConfig11_1C.PgHintPlanDebugPrint;
    setPgHintPlanDebugPrint(value: PostgresqlConfig11_1C.PgHintPlanDebugPrint): PostgresqlConfig11_1C;
    getPgHintPlanMessageLevel(): PostgresqlConfig11_1C.LogLevel;
    setPgHintPlanMessageLevel(value: PostgresqlConfig11_1C.LogLevel): PostgresqlConfig11_1C;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresqlConfig11_1C.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresqlConfig11_1C): PostgresqlConfig11_1C.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresqlConfig11_1C, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresqlConfig11_1C;
    static deserializeBinaryFromReader(message: PostgresqlConfig11_1C, reader: jspb.BinaryReader): PostgresqlConfig11_1C;
}

export namespace PostgresqlConfig11_1C {
    export type AsObject = {
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sharedBuffers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tempBuffers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPreparedTransactions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        workMem?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maintenanceWorkMem?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autovacuumWorkMem?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        tempFileLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        vacuumCostDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        vacuumCostPageHit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        vacuumCostPageMiss?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        vacuumCostPageDirty?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        vacuumCostLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        bgwriterDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        bgwriterLruMaxpages?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        bgwriterLruMultiplier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        bgwriterFlushAfter?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        backendFlushAfter?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        oldSnapshotThreshold?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        walLevel: PostgresqlConfig11_1C.WalLevel,
        synchronousCommit: PostgresqlConfig11_1C.SynchronousCommit,
        checkpointTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        checkpointCompletionTarget?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        checkpointFlushAfter?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxWalSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minWalSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxStandbyStreamingDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultStatisticsTarget?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        constraintExclusion: PostgresqlConfig11_1C.ConstraintExclusion,
        cursorTupleFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fromCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        joinCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        forceParallelMode: PostgresqlConfig11_1C.ForceParallelMode,
        clientMinMessages: PostgresqlConfig11_1C.LogLevel,
        logMinMessages: PostgresqlConfig11_1C.LogLevel,
        logMinErrorStatement: PostgresqlConfig11_1C.LogLevel,
        logMinDurationStatement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logCheckpoints?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logConnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDisconnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDuration?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logErrorVerbosity: PostgresqlConfig11_1C.LogErrorVerbosity,
        logLockWaits?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logStatement: PostgresqlConfig11_1C.LogStatement,
        logTempFiles?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        searchPath: string,
        rowSecurity?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        defaultTransactionIsolation: PostgresqlConfig11_1C.TransactionIsolation,
        statementTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        idleInTransactionSessionTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        byteaOutput: PostgresqlConfig11_1C.ByteaOutput,
        xmlbinary: PostgresqlConfig11_1C.XmlBinary,
        xmloption: PostgresqlConfig11_1C.XmlOption,
        ginPendingListLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        deadlockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPredLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        arrayNulls?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        backslashQuote: PostgresqlConfig11_1C.BackslashQuote,
        defaultWithOids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        escapeStringWarning?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        loCompatPrivileges?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        operatorPrecedenceWarning?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        quoteAllIdentifiers?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        standardConformingStrings?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        synchronizeSeqscans?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        transformNullEquals?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        exitOnError?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        seqPageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        randomPageCost?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        autovacuumMaxWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autovacuumVacuumCostDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autovacuumVacuumCostLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autovacuumNaptime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        archiveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        trackActivityQuerySize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
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
        maxWorkerProcesses?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxParallelWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxParallelWorkersPerGather?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autovacuumVacuumScaleFactor?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        autovacuumAnalyzeScaleFactor?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        defaultTransactionReadOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        timezone: string,
        enableParallelAppend?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enableParallelHash?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enablePartitionPruning?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enablePartitionwiseAggregate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        enablePartitionwiseJoin?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        jit?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maxParallelMaintenanceWorkers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        parallelLeaderParticipation?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        vacuumCleanupIndexScaleFactor?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        effectiveIoConcurrency?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        effectiveCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sharedPreloadLibrariesList: Array<PostgresqlConfig11_1C.SharedPreloadLibraries>,
        autoExplainLogMinDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        autoExplainLogAnalyze?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainLogBuffers?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainLogTiming?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainLogTriggers?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainLogVerbose?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainLogNestedStatements?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        autoExplainSampleRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        pgHintPlanEnableHint?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        pgHintPlanEnableHintTable?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        pgHintPlanDebugPrint: PostgresqlConfig11_1C.PgHintPlanDebugPrint,
        pgHintPlanMessageLevel: PostgresqlConfig11_1C.LogLevel,
    }

    export enum WalLevel {
    WAL_LEVEL_UNSPECIFIED = 0,
    WAL_LEVEL_REPLICA = 1,
    WAL_LEVEL_LOGICAL = 2,
    }

    export enum SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
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

    export enum PgHintPlanDebugPrint {
    PG_HINT_PLAN_DEBUG_PRINT_UNSPECIFIED = 0,
    PG_HINT_PLAN_DEBUG_PRINT_OFF = 1,
    PG_HINT_PLAN_DEBUG_PRINT_ON = 2,
    PG_HINT_PLAN_DEBUG_PRINT_DETAILED = 3,
    PG_HINT_PLAN_DEBUG_PRINT_VERBOSE = 4,
    }

    export enum SharedPreloadLibraries {
    SHARED_PRELOAD_LIBRARIES_UNSPECIFIED = 0,
    SHARED_PRELOAD_LIBRARIES_AUTO_EXPLAIN = 1,
    SHARED_PRELOAD_LIBRARIES_PG_HINT_PLAN = 2,
    SHARED_PRELOAD_LIBRARIES_TIMESCALEDB = 3,
    SHARED_PRELOAD_LIBRARIES_PG_QUALSTATS = 4,
    }

}

export class PostgresqlConfigSet11_1C extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): PostgresqlConfig11_1C | undefined;
    setEffectiveConfig(value?: PostgresqlConfig11_1C): PostgresqlConfigSet11_1C;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): PostgresqlConfig11_1C | undefined;
    setUserConfig(value?: PostgresqlConfig11_1C): PostgresqlConfigSet11_1C;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): PostgresqlConfig11_1C | undefined;
    setDefaultConfig(value?: PostgresqlConfig11_1C): PostgresqlConfigSet11_1C;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresqlConfigSet11_1C.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresqlConfigSet11_1C): PostgresqlConfigSet11_1C.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresqlConfigSet11_1C, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresqlConfigSet11_1C;
    static deserializeBinaryFromReader(message: PostgresqlConfigSet11_1C, reader: jspb.BinaryReader): PostgresqlConfigSet11_1C;
}

export namespace PostgresqlConfigSet11_1C {
    export type AsObject = {
        effectiveConfig?: PostgresqlConfig11_1C.AsObject,
        userConfig?: PostgresqlConfig11_1C.AsObject,
        defaultConfig?: PostgresqlConfig11_1C.AsObject,
    }
}
