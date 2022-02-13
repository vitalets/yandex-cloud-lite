// package: yandex.cloud.mdb.postgresql.v1.config
// file: yandex/cloud/mdb/postgresql/v1/config/postgresql12.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class PostgresqlConfig12 extends jspb.Message { 

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasSharedBuffers(): boolean;
    clearSharedBuffers(): void;
    getSharedBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSharedBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasTempBuffers(): boolean;
    clearTempBuffers(): void;
    getTempBuffers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempBuffers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxPreparedTransactions(): boolean;
    clearMaxPreparedTransactions(): void;
    getMaxPreparedTransactions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPreparedTransactions(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasWorkMem(): boolean;
    clearWorkMem(): void;
    getWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaintenanceWorkMem(): boolean;
    clearMaintenanceWorkMem(): void;
    getMaintenanceWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaintenanceWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutovacuumWorkMem(): boolean;
    clearAutovacuumWorkMem(): void;
    getAutovacuumWorkMem(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumWorkMem(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasTempFileLimit(): boolean;
    clearTempFileLimit(): void;
    getTempFileLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempFileLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasVacuumCostDelay(): boolean;
    clearVacuumCostDelay(): void;
    getVacuumCostDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasVacuumCostPageHit(): boolean;
    clearVacuumCostPageHit(): void;
    getVacuumCostPageHit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageHit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasVacuumCostPageMiss(): boolean;
    clearVacuumCostPageMiss(): void;
    getVacuumCostPageMiss(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageMiss(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasVacuumCostPageDirty(): boolean;
    clearVacuumCostPageDirty(): void;
    getVacuumCostPageDirty(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostPageDirty(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasVacuumCostLimit(): boolean;
    clearVacuumCostLimit(): void;
    getVacuumCostLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setVacuumCostLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasBgwriterDelay(): boolean;
    clearBgwriterDelay(): void;
    getBgwriterDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasBgwriterLruMaxpages(): boolean;
    clearBgwriterLruMaxpages(): void;
    getBgwriterLruMaxpages(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterLruMaxpages(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasBgwriterLruMultiplier(): boolean;
    clearBgwriterLruMultiplier(): void;
    getBgwriterLruMultiplier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setBgwriterLruMultiplier(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasBgwriterFlushAfter(): boolean;
    clearBgwriterFlushAfter(): void;
    getBgwriterFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBgwriterFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasBackendFlushAfter(): boolean;
    clearBackendFlushAfter(): void;
    getBackendFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasOldSnapshotThreshold(): boolean;
    clearOldSnapshotThreshold(): void;
    getOldSnapshotThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOldSnapshotThreshold(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    getWalLevel(): PostgresqlConfig12.WalLevel;
    setWalLevel(value: PostgresqlConfig12.WalLevel): PostgresqlConfig12;
    getSynchronousCommit(): PostgresqlConfig12.SynchronousCommit;
    setSynchronousCommit(value: PostgresqlConfig12.SynchronousCommit): PostgresqlConfig12;

    hasCheckpointTimeout(): boolean;
    clearCheckpointTimeout(): void;
    getCheckpointTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCheckpointTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasCheckpointCompletionTarget(): boolean;
    clearCheckpointCompletionTarget(): void;
    getCheckpointCompletionTarget(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCheckpointCompletionTarget(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasCheckpointFlushAfter(): boolean;
    clearCheckpointFlushAfter(): void;
    getCheckpointFlushAfter(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCheckpointFlushAfter(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxWalSize(): boolean;
    clearMaxWalSize(): void;
    getMaxWalSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxWalSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMinWalSize(): boolean;
    clearMinWalSize(): void;
    getMinWalSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinWalSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxStandbyStreamingDelay(): boolean;
    clearMaxStandbyStreamingDelay(): void;
    getMaxStandbyStreamingDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxStandbyStreamingDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasDefaultStatisticsTarget(): boolean;
    clearDefaultStatisticsTarget(): void;
    getDefaultStatisticsTarget(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDefaultStatisticsTarget(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    getConstraintExclusion(): PostgresqlConfig12.ConstraintExclusion;
    setConstraintExclusion(value: PostgresqlConfig12.ConstraintExclusion): PostgresqlConfig12;

    hasCursorTupleFraction(): boolean;
    clearCursorTupleFraction(): void;
    getCursorTupleFraction(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setCursorTupleFraction(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasFromCollapseLimit(): boolean;
    clearFromCollapseLimit(): void;
    getFromCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFromCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasJoinCollapseLimit(): boolean;
    clearJoinCollapseLimit(): void;
    getJoinCollapseLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setJoinCollapseLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    getForceParallelMode(): PostgresqlConfig12.ForceParallelMode;
    setForceParallelMode(value: PostgresqlConfig12.ForceParallelMode): PostgresqlConfig12;
    getClientMinMessages(): PostgresqlConfig12.LogLevel;
    setClientMinMessages(value: PostgresqlConfig12.LogLevel): PostgresqlConfig12;
    getLogMinMessages(): PostgresqlConfig12.LogLevel;
    setLogMinMessages(value: PostgresqlConfig12.LogLevel): PostgresqlConfig12;
    getLogMinErrorStatement(): PostgresqlConfig12.LogLevel;
    setLogMinErrorStatement(value: PostgresqlConfig12.LogLevel): PostgresqlConfig12;

    hasLogMinDurationStatement(): boolean;
    clearLogMinDurationStatement(): void;
    getLogMinDurationStatement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogMinDurationStatement(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasLogCheckpoints(): boolean;
    clearLogCheckpoints(): void;
    getLogCheckpoints(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogCheckpoints(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasLogConnections(): boolean;
    clearLogConnections(): void;
    getLogConnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogConnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasLogDisconnections(): boolean;
    clearLogDisconnections(): void;
    getLogDisconnections(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDisconnections(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasLogDuration(): boolean;
    clearLogDuration(): void;
    getLogDuration(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogDuration(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getLogErrorVerbosity(): PostgresqlConfig12.LogErrorVerbosity;
    setLogErrorVerbosity(value: PostgresqlConfig12.LogErrorVerbosity): PostgresqlConfig12;

    hasLogLockWaits(): boolean;
    clearLogLockWaits(): void;
    getLogLockWaits(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogLockWaits(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getLogStatement(): PostgresqlConfig12.LogStatement;
    setLogStatement(value: PostgresqlConfig12.LogStatement): PostgresqlConfig12;

    hasLogTempFiles(): boolean;
    clearLogTempFiles(): void;
    getLogTempFiles(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogTempFiles(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    getSearchPath(): string;
    setSearchPath(value: string): PostgresqlConfig12;

    hasRowSecurity(): boolean;
    clearRowSecurity(): void;
    getRowSecurity(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRowSecurity(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getDefaultTransactionIsolation(): PostgresqlConfig12.TransactionIsolation;
    setDefaultTransactionIsolation(value: PostgresqlConfig12.TransactionIsolation): PostgresqlConfig12;

    hasStatementTimeout(): boolean;
    clearStatementTimeout(): void;
    getStatementTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setStatementTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasLockTimeout(): boolean;
    clearLockTimeout(): void;
    getLockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasIdleInTransactionSessionTimeout(): boolean;
    clearIdleInTransactionSessionTimeout(): void;
    getIdleInTransactionSessionTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIdleInTransactionSessionTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    getByteaOutput(): PostgresqlConfig12.ByteaOutput;
    setByteaOutput(value: PostgresqlConfig12.ByteaOutput): PostgresqlConfig12;
    getXmlbinary(): PostgresqlConfig12.XmlBinary;
    setXmlbinary(value: PostgresqlConfig12.XmlBinary): PostgresqlConfig12;
    getXmloption(): PostgresqlConfig12.XmlOption;
    setXmloption(value: PostgresqlConfig12.XmlOption): PostgresqlConfig12;

    hasGinPendingListLimit(): boolean;
    clearGinPendingListLimit(): void;
    getGinPendingListLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGinPendingListLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasDeadlockTimeout(): boolean;
    clearDeadlockTimeout(): void;
    getDeadlockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDeadlockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxLocksPerTransaction(): boolean;
    clearMaxLocksPerTransaction(): void;
    getMaxLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxPredLocksPerTransaction(): boolean;
    clearMaxPredLocksPerTransaction(): void;
    getMaxPredLocksPerTransaction(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPredLocksPerTransaction(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasArrayNulls(): boolean;
    clearArrayNulls(): void;
    getArrayNulls(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setArrayNulls(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getBackslashQuote(): PostgresqlConfig12.BackslashQuote;
    setBackslashQuote(value: PostgresqlConfig12.BackslashQuote): PostgresqlConfig12;

    hasDefaultWithOids(): boolean;
    clearDefaultWithOids(): void;
    getDefaultWithOids(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDefaultWithOids(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEscapeStringWarning(): boolean;
    clearEscapeStringWarning(): void;
    getEscapeStringWarning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEscapeStringWarning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasLoCompatPrivileges(): boolean;
    clearLoCompatPrivileges(): void;
    getLoCompatPrivileges(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLoCompatPrivileges(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasOperatorPrecedenceWarning(): boolean;
    clearOperatorPrecedenceWarning(): void;
    getOperatorPrecedenceWarning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOperatorPrecedenceWarning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasQuoteAllIdentifiers(): boolean;
    clearQuoteAllIdentifiers(): void;
    getQuoteAllIdentifiers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setQuoteAllIdentifiers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasStandardConformingStrings(): boolean;
    clearStandardConformingStrings(): void;
    getStandardConformingStrings(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setStandardConformingStrings(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasSynchronizeSeqscans(): boolean;
    clearSynchronizeSeqscans(): void;
    getSynchronizeSeqscans(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSynchronizeSeqscans(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasTransformNullEquals(): boolean;
    clearTransformNullEquals(): void;
    getTransformNullEquals(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTransformNullEquals(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasExitOnError(): boolean;
    clearExitOnError(): void;
    getExitOnError(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setExitOnError(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasSeqPageCost(): boolean;
    clearSeqPageCost(): void;
    getSeqPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setSeqPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasRandomPageCost(): boolean;
    clearRandomPageCost(): void;
    getRandomPageCost(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setRandomPageCost(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasAutovacuumMaxWorkers(): boolean;
    clearAutovacuumMaxWorkers(): void;
    getAutovacuumMaxWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumMaxWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutovacuumVacuumCostDelay(): boolean;
    clearAutovacuumVacuumCostDelay(): void;
    getAutovacuumVacuumCostDelay(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumVacuumCostDelay(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutovacuumVacuumCostLimit(): boolean;
    clearAutovacuumVacuumCostLimit(): void;
    getAutovacuumVacuumCostLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumVacuumCostLimit(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutovacuumNaptime(): boolean;
    clearAutovacuumNaptime(): void;
    getAutovacuumNaptime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutovacuumNaptime(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasArchiveTimeout(): boolean;
    clearArchiveTimeout(): void;
    getArchiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setArchiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasTrackActivityQuerySize(): boolean;
    clearTrackActivityQuerySize(): void;
    getTrackActivityQuerySize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTrackActivityQuerySize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasEnableBitmapscan(): boolean;
    clearEnableBitmapscan(): void;
    getEnableBitmapscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableBitmapscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableHashagg(): boolean;
    clearEnableHashagg(): void;
    getEnableHashagg(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashagg(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableHashjoin(): boolean;
    clearEnableHashjoin(): void;
    getEnableHashjoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHashjoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableIndexscan(): boolean;
    clearEnableIndexscan(): void;
    getEnableIndexscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableIndexonlyscan(): boolean;
    clearEnableIndexonlyscan(): void;
    getEnableIndexonlyscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableIndexonlyscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableMaterial(): boolean;
    clearEnableMaterial(): void;
    getEnableMaterial(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMaterial(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableMergejoin(): boolean;
    clearEnableMergejoin(): void;
    getEnableMergejoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableMergejoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableNestloop(): boolean;
    clearEnableNestloop(): void;
    getEnableNestloop(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableNestloop(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableSeqscan(): boolean;
    clearEnableSeqscan(): void;
    getEnableSeqscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSeqscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableSort(): boolean;
    clearEnableSort(): void;
    getEnableSort(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableSort(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableTidscan(): boolean;
    clearEnableTidscan(): void;
    getEnableTidscan(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableTidscan(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasMaxWorkerProcesses(): boolean;
    clearMaxWorkerProcesses(): void;
    getMaxWorkerProcesses(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxWorkerProcesses(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxParallelWorkers(): boolean;
    clearMaxParallelWorkers(): void;
    getMaxParallelWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasMaxParallelWorkersPerGather(): boolean;
    clearMaxParallelWorkersPerGather(): void;
    getMaxParallelWorkersPerGather(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelWorkersPerGather(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutovacuumVacuumScaleFactor(): boolean;
    clearAutovacuumVacuumScaleFactor(): void;
    getAutovacuumVacuumScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutovacuumVacuumScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasAutovacuumAnalyzeScaleFactor(): boolean;
    clearAutovacuumAnalyzeScaleFactor(): void;
    getAutovacuumAnalyzeScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutovacuumAnalyzeScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasDefaultTransactionReadOnly(): boolean;
    clearDefaultTransactionReadOnly(): void;
    getDefaultTransactionReadOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDefaultTransactionReadOnly(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getTimezone(): string;
    setTimezone(value: string): PostgresqlConfig12;

    hasEnableParallelAppend(): boolean;
    clearEnableParallelAppend(): void;
    getEnableParallelAppend(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableParallelAppend(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnableParallelHash(): boolean;
    clearEnableParallelHash(): void;
    getEnableParallelHash(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableParallelHash(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnablePartitionPruning(): boolean;
    clearEnablePartitionPruning(): void;
    getEnablePartitionPruning(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionPruning(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnablePartitionwiseAggregate(): boolean;
    clearEnablePartitionwiseAggregate(): void;
    getEnablePartitionwiseAggregate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionwiseAggregate(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasEnablePartitionwiseJoin(): boolean;
    clearEnablePartitionwiseJoin(): void;
    getEnablePartitionwiseJoin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnablePartitionwiseJoin(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasJit(): boolean;
    clearJit(): void;
    getJit(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setJit(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasMaxParallelMaintenanceWorkers(): boolean;
    clearMaxParallelMaintenanceWorkers(): void;
    getMaxParallelMaintenanceWorkers(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxParallelMaintenanceWorkers(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasParallelLeaderParticipation(): boolean;
    clearParallelLeaderParticipation(): void;
    getParallelLeaderParticipation(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setParallelLeaderParticipation(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasVacuumCleanupIndexScaleFactor(): boolean;
    clearVacuumCleanupIndexScaleFactor(): void;
    getVacuumCleanupIndexScaleFactor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setVacuumCleanupIndexScaleFactor(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasLogTransactionSampleRate(): boolean;
    clearLogTransactionSampleRate(): void;
    getLogTransactionSampleRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLogTransactionSampleRate(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;
    getPlanCacheMode(): PostgresqlConfig12.PlanCacheMode;
    setPlanCacheMode(value: PostgresqlConfig12.PlanCacheMode): PostgresqlConfig12;

    hasEffectiveIoConcurrency(): boolean;
    clearEffectiveIoConcurrency(): void;
    getEffectiveIoConcurrency(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveIoConcurrency(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasEffectiveCacheSize(): boolean;
    clearEffectiveCacheSize(): void;
    getEffectiveCacheSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEffectiveCacheSize(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;
    clearSharedPreloadLibrariesList(): void;
    getSharedPreloadLibrariesList(): Array<PostgresqlConfig12.SharedPreloadLibraries>;
    setSharedPreloadLibrariesList(value: Array<PostgresqlConfig12.SharedPreloadLibraries>): PostgresqlConfig12;
    addSharedPreloadLibraries(value: PostgresqlConfig12.SharedPreloadLibraries, index?: number): PostgresqlConfig12.SharedPreloadLibraries;

    hasAutoExplainLogMinDuration(): boolean;
    clearAutoExplainLogMinDuration(): void;
    getAutoExplainLogMinDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAutoExplainLogMinDuration(value?: google_protobuf_wrappers_pb.Int64Value): PostgresqlConfig12;

    hasAutoExplainLogAnalyze(): boolean;
    clearAutoExplainLogAnalyze(): void;
    getAutoExplainLogAnalyze(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogAnalyze(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainLogBuffers(): boolean;
    clearAutoExplainLogBuffers(): void;
    getAutoExplainLogBuffers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogBuffers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainLogTiming(): boolean;
    clearAutoExplainLogTiming(): void;
    getAutoExplainLogTiming(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogTiming(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainLogTriggers(): boolean;
    clearAutoExplainLogTriggers(): void;
    getAutoExplainLogTriggers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogTriggers(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainLogVerbose(): boolean;
    clearAutoExplainLogVerbose(): void;
    getAutoExplainLogVerbose(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogVerbose(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainLogNestedStatements(): boolean;
    clearAutoExplainLogNestedStatements(): void;
    getAutoExplainLogNestedStatements(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutoExplainLogNestedStatements(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasAutoExplainSampleRate(): boolean;
    clearAutoExplainSampleRate(): void;
    getAutoExplainSampleRate(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setAutoExplainSampleRate(value?: google_protobuf_wrappers_pb.DoubleValue): PostgresqlConfig12;

    hasPgHintPlanEnableHint(): boolean;
    clearPgHintPlanEnableHint(): void;
    getPgHintPlanEnableHint(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPgHintPlanEnableHint(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;

    hasPgHintPlanEnableHintTable(): boolean;
    clearPgHintPlanEnableHintTable(): void;
    getPgHintPlanEnableHintTable(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPgHintPlanEnableHintTable(value?: google_protobuf_wrappers_pb.BoolValue): PostgresqlConfig12;
    getPgHintPlanDebugPrint(): PostgresqlConfig12.PgHintPlanDebugPrint;
    setPgHintPlanDebugPrint(value: PostgresqlConfig12.PgHintPlanDebugPrint): PostgresqlConfig12;
    getPgHintPlanMessageLevel(): PostgresqlConfig12.LogLevel;
    setPgHintPlanMessageLevel(value: PostgresqlConfig12.LogLevel): PostgresqlConfig12;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresqlConfig12.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresqlConfig12): PostgresqlConfig12.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresqlConfig12, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresqlConfig12;
    static deserializeBinaryFromReader(message: PostgresqlConfig12, reader: jspb.BinaryReader): PostgresqlConfig12;
}

export namespace PostgresqlConfig12 {
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
        walLevel: PostgresqlConfig12.WalLevel,
        synchronousCommit: PostgresqlConfig12.SynchronousCommit,
        checkpointTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        checkpointCompletionTarget?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        checkpointFlushAfter?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxWalSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minWalSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxStandbyStreamingDelay?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        defaultStatisticsTarget?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        constraintExclusion: PostgresqlConfig12.ConstraintExclusion,
        cursorTupleFraction?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        fromCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        joinCollapseLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        forceParallelMode: PostgresqlConfig12.ForceParallelMode,
        clientMinMessages: PostgresqlConfig12.LogLevel,
        logMinMessages: PostgresqlConfig12.LogLevel,
        logMinErrorStatement: PostgresqlConfig12.LogLevel,
        logMinDurationStatement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logCheckpoints?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logConnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDisconnections?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logDuration?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logErrorVerbosity: PostgresqlConfig12.LogErrorVerbosity,
        logLockWaits?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        logStatement: PostgresqlConfig12.LogStatement,
        logTempFiles?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        searchPath: string,
        rowSecurity?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        defaultTransactionIsolation: PostgresqlConfig12.TransactionIsolation,
        statementTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        lockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        idleInTransactionSessionTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        byteaOutput: PostgresqlConfig12.ByteaOutput,
        xmlbinary: PostgresqlConfig12.XmlBinary,
        xmloption: PostgresqlConfig12.XmlOption,
        ginPendingListLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        deadlockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPredLocksPerTransaction?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        arrayNulls?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        backslashQuote: PostgresqlConfig12.BackslashQuote,
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
        logTransactionSampleRate?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
        planCacheMode: PostgresqlConfig12.PlanCacheMode,
        effectiveIoConcurrency?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        effectiveCacheSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sharedPreloadLibrariesList: Array<PostgresqlConfig12.SharedPreloadLibraries>,
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
        pgHintPlanDebugPrint: PostgresqlConfig12.PgHintPlanDebugPrint,
        pgHintPlanMessageLevel: PostgresqlConfig12.LogLevel,
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

    export enum PlanCacheMode {
    PLAN_CACHE_MODE_UNSPECIFIED = 0,
    PLAN_CACHE_MODE_AUTO = 1,
    PLAN_CACHE_MODE_FORCE_CUSTOM_PLAN = 2,
    PLAN_CACHE_MODE_FORCE_GENERIC_PLAN = 3,
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

export class PostgresqlConfigSet12 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): PostgresqlConfig12 | undefined;
    setEffectiveConfig(value?: PostgresqlConfig12): PostgresqlConfigSet12;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): PostgresqlConfig12 | undefined;
    setUserConfig(value?: PostgresqlConfig12): PostgresqlConfigSet12;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): PostgresqlConfig12 | undefined;
    setDefaultConfig(value?: PostgresqlConfig12): PostgresqlConfigSet12;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresqlConfigSet12.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresqlConfigSet12): PostgresqlConfigSet12.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresqlConfigSet12, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresqlConfigSet12;
    static deserializeBinaryFromReader(message: PostgresqlConfigSet12, reader: jspb.BinaryReader): PostgresqlConfigSet12;
}

export namespace PostgresqlConfigSet12 {
    export type AsObject = {
        effectiveConfig?: PostgresqlConfig12.AsObject,
        userConfig?: PostgresqlConfig12.AsObject,
        defaultConfig?: PostgresqlConfig12.AsObject,
    }
}
