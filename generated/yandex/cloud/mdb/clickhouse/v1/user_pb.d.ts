// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getClusterId(): string;
    setClusterId(value: string): User;
    clearPermissionsList(): void;
    getPermissionsList(): Array<Permission>;
    setPermissionsList(value: Array<Permission>): User;
    addPermissions(value?: Permission, index?: number): Permission;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): UserSettings | undefined;
    setSettings(value?: UserSettings): User;
    clearQuotasList(): void;
    getQuotasList(): Array<UserQuota>;
    setQuotasList(value: Array<UserQuota>): User;
    addQuotas(value?: UserQuota, index?: number): UserQuota;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        clusterId: string,
        permissionsList: Array<Permission.AsObject>,
        settings?: UserSettings.AsObject,
        quotasList: Array<UserQuota.AsObject>,
    }
}

export class Permission extends jspb.Message { 
    getDatabaseName(): string;
    setDatabaseName(value: string): Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permission.AsObject;
    static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permission;
    static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
    export type AsObject = {
        databaseName: string,
    }
}

export class UserSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): UserSpec;
    getPassword(): string;
    setPassword(value: string): UserSpec;
    clearPermissionsList(): void;
    getPermissionsList(): Array<Permission>;
    setPermissionsList(value: Array<Permission>): UserSpec;
    addPermissions(value?: Permission, index?: number): Permission;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): UserSettings | undefined;
    setSettings(value?: UserSettings): UserSpec;
    clearQuotasList(): void;
    getQuotasList(): Array<UserQuota>;
    setQuotasList(value: Array<UserQuota>): UserSpec;
    addQuotas(value?: UserQuota, index?: number): UserQuota;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UserSpec): UserSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSpec;
    static deserializeBinaryFromReader(message: UserSpec, reader: jspb.BinaryReader): UserSpec;
}

export namespace UserSpec {
    export type AsObject = {
        name: string,
        password: string,
        permissionsList: Array<Permission.AsObject>,
        settings?: UserSettings.AsObject,
        quotasList: Array<UserQuota.AsObject>,
    }
}

export class UserSettings extends jspb.Message { 

    hasReadonly(): boolean;
    clearReadonly(): void;
    getReadonly(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReadonly(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasAllowDdl(): boolean;
    clearAllowDdl(): void;
    getAllowDdl(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAllowDdl(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasInsertQuorum(): boolean;
    clearInsertQuorum(): void;
    getInsertQuorum(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInsertQuorum(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasConnectTimeout(): boolean;
    clearConnectTimeout(): void;
    getConnectTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setConnectTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasReceiveTimeout(): boolean;
    clearReceiveTimeout(): void;
    getReceiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReceiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasSendTimeout(): boolean;
    clearSendTimeout(): void;
    getSendTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSendTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasInsertQuorumTimeout(): boolean;
    clearInsertQuorumTimeout(): void;
    getInsertQuorumTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInsertQuorumTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasSelectSequentialConsistency(): boolean;
    clearSelectSequentialConsistency(): void;
    getSelectSequentialConsistency(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSelectSequentialConsistency(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasMaxReplicaDelayForDistributedQueries(): boolean;
    clearMaxReplicaDelayForDistributedQueries(): void;
    getMaxReplicaDelayForDistributedQueries(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxReplicaDelayForDistributedQueries(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasFallbackToStaleReplicasForDistributedQueries(): boolean;
    clearFallbackToStaleReplicasForDistributedQueries(): void;
    getFallbackToStaleReplicasForDistributedQueries(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setFallbackToStaleReplicasForDistributedQueries(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasReplicationAlterPartitionsSync(): boolean;
    clearReplicationAlterPartitionsSync(): void;
    getReplicationAlterPartitionsSync(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReplicationAlterPartitionsSync(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getDistributedProductMode(): UserSettings.DistributedProductMode;
    setDistributedProductMode(value: UserSettings.DistributedProductMode): UserSettings;

    hasDistributedAggregationMemoryEfficient(): boolean;
    clearDistributedAggregationMemoryEfficient(): void;
    getDistributedAggregationMemoryEfficient(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setDistributedAggregationMemoryEfficient(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasDistributedDdlTaskTimeout(): boolean;
    clearDistributedDdlTaskTimeout(): void;
    getDistributedDdlTaskTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDistributedDdlTaskTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasSkipUnavailableShards(): boolean;
    clearSkipUnavailableShards(): void;
    getSkipUnavailableShards(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSkipUnavailableShards(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasCompile(): boolean;
    clearCompile(): void;
    getCompile(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCompile(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasMinCountToCompile(): boolean;
    clearMinCountToCompile(): void;
    getMinCountToCompile(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinCountToCompile(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasCompileExpressions(): boolean;
    clearCompileExpressions(): void;
    getCompileExpressions(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCompileExpressions(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasMinCountToCompileExpression(): boolean;
    clearMinCountToCompileExpression(): void;
    getMinCountToCompileExpression(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinCountToCompileExpression(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBlockSize(): boolean;
    clearMaxBlockSize(): void;
    getMaxBlockSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBlockSize(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMinInsertBlockSizeRows(): boolean;
    clearMinInsertBlockSizeRows(): void;
    getMinInsertBlockSizeRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinInsertBlockSizeRows(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMinInsertBlockSizeBytes(): boolean;
    clearMinInsertBlockSizeBytes(): void;
    getMinInsertBlockSizeBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinInsertBlockSizeBytes(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxInsertBlockSize(): boolean;
    clearMaxInsertBlockSize(): void;
    getMaxInsertBlockSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxInsertBlockSize(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMinBytesToUseDirectIo(): boolean;
    clearMinBytesToUseDirectIo(): void;
    getMinBytesToUseDirectIo(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinBytesToUseDirectIo(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasUseUncompressedCache(): boolean;
    clearUseUncompressedCache(): void;
    getUseUncompressedCache(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseUncompressedCache(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasMergeTreeMaxRowsToUseCache(): boolean;
    clearMergeTreeMaxRowsToUseCache(): void;
    getMergeTreeMaxRowsToUseCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMergeTreeMaxRowsToUseCache(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMergeTreeMaxBytesToUseCache(): boolean;
    clearMergeTreeMaxBytesToUseCache(): void;
    getMergeTreeMaxBytesToUseCache(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMergeTreeMaxBytesToUseCache(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMergeTreeMinRowsForConcurrentRead(): boolean;
    clearMergeTreeMinRowsForConcurrentRead(): void;
    getMergeTreeMinRowsForConcurrentRead(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMergeTreeMinRowsForConcurrentRead(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMergeTreeMinBytesForConcurrentRead(): boolean;
    clearMergeTreeMinBytesForConcurrentRead(): void;
    getMergeTreeMinBytesForConcurrentRead(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMergeTreeMinBytesForConcurrentRead(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesBeforeExternalGroupBy(): boolean;
    clearMaxBytesBeforeExternalGroupBy(): void;
    getMaxBytesBeforeExternalGroupBy(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesBeforeExternalGroupBy(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesBeforeExternalSort(): boolean;
    clearMaxBytesBeforeExternalSort(): void;
    getMaxBytesBeforeExternalSort(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesBeforeExternalSort(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasGroupByTwoLevelThreshold(): boolean;
    clearGroupByTwoLevelThreshold(): void;
    getGroupByTwoLevelThreshold(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGroupByTwoLevelThreshold(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasGroupByTwoLevelThresholdBytes(): boolean;
    clearGroupByTwoLevelThresholdBytes(): void;
    getGroupByTwoLevelThresholdBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGroupByTwoLevelThresholdBytes(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPriority(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxThreads(): boolean;
    clearMaxThreads(): void;
    getMaxThreads(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxThreads(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxMemoryUsage(): boolean;
    clearMaxMemoryUsage(): void;
    getMaxMemoryUsage(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxMemoryUsage(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxMemoryUsageForUser(): boolean;
    clearMaxMemoryUsageForUser(): void;
    getMaxMemoryUsageForUser(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxMemoryUsageForUser(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxNetworkBandwidth(): boolean;
    clearMaxNetworkBandwidth(): void;
    getMaxNetworkBandwidth(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxNetworkBandwidth(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxNetworkBandwidthForUser(): boolean;
    clearMaxNetworkBandwidthForUser(): void;
    getMaxNetworkBandwidthForUser(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxNetworkBandwidthForUser(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasForceIndexByDate(): boolean;
    clearForceIndexByDate(): void;
    getForceIndexByDate(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setForceIndexByDate(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasForcePrimaryKey(): boolean;
    clearForcePrimaryKey(): void;
    getForcePrimaryKey(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setForcePrimaryKey(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasMaxRowsToRead(): boolean;
    clearMaxRowsToRead(): void;
    getMaxRowsToRead(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsToRead(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesToRead(): boolean;
    clearMaxBytesToRead(): void;
    getMaxBytesToRead(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesToRead(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getReadOverflowMode(): UserSettings.OverflowMode;
    setReadOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxRowsToGroupBy(): boolean;
    clearMaxRowsToGroupBy(): void;
    getMaxRowsToGroupBy(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsToGroupBy(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getGroupByOverflowMode(): UserSettings.GroupByOverflowMode;
    setGroupByOverflowMode(value: UserSettings.GroupByOverflowMode): UserSettings;

    hasMaxRowsToSort(): boolean;
    clearMaxRowsToSort(): void;
    getMaxRowsToSort(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsToSort(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesToSort(): boolean;
    clearMaxBytesToSort(): void;
    getMaxBytesToSort(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesToSort(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getSortOverflowMode(): UserSettings.OverflowMode;
    setSortOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxResultRows(): boolean;
    clearMaxResultRows(): void;
    getMaxResultRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxResultRows(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxResultBytes(): boolean;
    clearMaxResultBytes(): void;
    getMaxResultBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxResultBytes(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getResultOverflowMode(): UserSettings.OverflowMode;
    setResultOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxRowsInDistinct(): boolean;
    clearMaxRowsInDistinct(): void;
    getMaxRowsInDistinct(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsInDistinct(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesInDistinct(): boolean;
    clearMaxBytesInDistinct(): void;
    getMaxBytesInDistinct(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesInDistinct(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getDistinctOverflowMode(): UserSettings.OverflowMode;
    setDistinctOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxRowsToTransfer(): boolean;
    clearMaxRowsToTransfer(): void;
    getMaxRowsToTransfer(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsToTransfer(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesToTransfer(): boolean;
    clearMaxBytesToTransfer(): void;
    getMaxBytesToTransfer(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesToTransfer(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getTransferOverflowMode(): UserSettings.OverflowMode;
    setTransferOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxExecutionTime(): boolean;
    clearMaxExecutionTime(): void;
    getMaxExecutionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxExecutionTime(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getTimeoutOverflowMode(): UserSettings.OverflowMode;
    setTimeoutOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxRowsInSet(): boolean;
    clearMaxRowsInSet(): void;
    getMaxRowsInSet(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsInSet(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesInSet(): boolean;
    clearMaxBytesInSet(): void;
    getMaxBytesInSet(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesInSet(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getSetOverflowMode(): UserSettings.OverflowMode;
    setSetOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxRowsInJoin(): boolean;
    clearMaxRowsInJoin(): void;
    getMaxRowsInJoin(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxRowsInJoin(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxBytesInJoin(): boolean;
    clearMaxBytesInJoin(): void;
    getMaxBytesInJoin(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxBytesInJoin(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getJoinOverflowMode(): UserSettings.OverflowMode;
    setJoinOverflowMode(value: UserSettings.OverflowMode): UserSettings;

    hasMaxColumnsToRead(): boolean;
    clearMaxColumnsToRead(): void;
    getMaxColumnsToRead(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxColumnsToRead(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxTemporaryColumns(): boolean;
    clearMaxTemporaryColumns(): void;
    getMaxTemporaryColumns(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxTemporaryColumns(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxTemporaryNonConstColumns(): boolean;
    clearMaxTemporaryNonConstColumns(): void;
    getMaxTemporaryNonConstColumns(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxTemporaryNonConstColumns(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxQuerySize(): boolean;
    clearMaxQuerySize(): void;
    getMaxQuerySize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxQuerySize(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxAstDepth(): boolean;
    clearMaxAstDepth(): void;
    getMaxAstDepth(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxAstDepth(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxAstElements(): boolean;
    clearMaxAstElements(): void;
    getMaxAstElements(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxAstElements(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMaxExpandedAstElements(): boolean;
    clearMaxExpandedAstElements(): void;
    getMaxExpandedAstElements(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxExpandedAstElements(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMinExecutionSpeed(): boolean;
    clearMinExecutionSpeed(): void;
    getMinExecutionSpeed(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinExecutionSpeed(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasMinExecutionSpeedBytes(): boolean;
    clearMinExecutionSpeedBytes(): void;
    getMinExecutionSpeedBytes(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMinExecutionSpeedBytes(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getCountDistinctImplementation(): UserSettings.CountDistinctImplementation;
    setCountDistinctImplementation(value: UserSettings.CountDistinctImplementation): UserSettings;

    hasInputFormatValuesInterpretExpressions(): boolean;
    clearInputFormatValuesInterpretExpressions(): void;
    getInputFormatValuesInterpretExpressions(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInputFormatValuesInterpretExpressions(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasInputFormatDefaultsForOmittedFields(): boolean;
    clearInputFormatDefaultsForOmittedFields(): void;
    getInputFormatDefaultsForOmittedFields(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setInputFormatDefaultsForOmittedFields(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasOutputFormatJsonQuote64bitIntegers(): boolean;
    clearOutputFormatJsonQuote64bitIntegers(): void;
    getOutputFormatJsonQuote64bitIntegers(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOutputFormatJsonQuote64bitIntegers(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasOutputFormatJsonQuoteDenormals(): boolean;
    clearOutputFormatJsonQuoteDenormals(): void;
    getOutputFormatJsonQuoteDenormals(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOutputFormatJsonQuoteDenormals(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasLowCardinalityAllowInNativeFormat(): boolean;
    clearLowCardinalityAllowInNativeFormat(): void;
    getLowCardinalityAllowInNativeFormat(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLowCardinalityAllowInNativeFormat(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasEmptyResultForAggregationByEmptySet(): boolean;
    clearEmptyResultForAggregationByEmptySet(): void;
    getEmptyResultForAggregationByEmptySet(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEmptyResultForAggregationByEmptySet(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasJoinedSubqueryRequiresAlias(): boolean;
    clearJoinedSubqueryRequiresAlias(): void;
    getJoinedSubqueryRequiresAlias(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setJoinedSubqueryRequiresAlias(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasJoinUseNulls(): boolean;
    clearJoinUseNulls(): void;
    getJoinUseNulls(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setJoinUseNulls(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasTransformNullIn(): boolean;
    clearTransformNullIn(): void;
    getTransformNullIn(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTransformNullIn(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasHttpConnectionTimeout(): boolean;
    clearHttpConnectionTimeout(): void;
    getHttpConnectionTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHttpConnectionTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasHttpReceiveTimeout(): boolean;
    clearHttpReceiveTimeout(): void;
    getHttpReceiveTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHttpReceiveTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasHttpSendTimeout(): boolean;
    clearHttpSendTimeout(): void;
    getHttpSendTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHttpSendTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasEnableHttpCompression(): boolean;
    clearEnableHttpCompression(): void;
    getEnableHttpCompression(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnableHttpCompression(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasSendProgressInHttpHeaders(): boolean;
    clearSendProgressInHttpHeaders(): void;
    getSendProgressInHttpHeaders(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSendProgressInHttpHeaders(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;

    hasHttpHeadersProgressInterval(): boolean;
    clearHttpHeadersProgressInterval(): void;
    getHttpHeadersProgressInterval(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setHttpHeadersProgressInterval(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasAddHttpCorsHeader(): boolean;
    clearAddHttpCorsHeader(): void;
    getAddHttpCorsHeader(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAddHttpCorsHeader(value?: google_protobuf_wrappers_pb.BoolValue): UserSettings;
    getQuotaMode(): UserSettings.QuotaMode;
    setQuotaMode(value: UserSettings.QuotaMode): UserSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSettings.AsObject;
    static toObject(includeInstance: boolean, msg: UserSettings): UserSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSettings;
    static deserializeBinaryFromReader(message: UserSettings, reader: jspb.BinaryReader): UserSettings;
}

export namespace UserSettings {
    export type AsObject = {
        readonly?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        allowDdl?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        insertQuorum?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        connectTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        receiveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sendTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        insertQuorumTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        selectSequentialConsistency?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maxReplicaDelayForDistributedQueries?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fallbackToStaleReplicasForDistributedQueries?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        replicationAlterPartitionsSync?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        distributedProductMode: UserSettings.DistributedProductMode,
        distributedAggregationMemoryEfficient?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        distributedDdlTaskTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        skipUnavailableShards?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        compile?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        minCountToCompile?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        compileExpressions?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        minCountToCompileExpression?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBlockSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minInsertBlockSizeRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minInsertBlockSizeBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxInsertBlockSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minBytesToUseDirectIo?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        useUncompressedCache?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        mergeTreeMaxRowsToUseCache?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mergeTreeMaxBytesToUseCache?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mergeTreeMinRowsForConcurrentRead?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        mergeTreeMinBytesForConcurrentRead?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesBeforeExternalGroupBy?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesBeforeExternalSort?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        groupByTwoLevelThreshold?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        groupByTwoLevelThresholdBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        priority?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxThreads?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxMemoryUsage?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxMemoryUsageForUser?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxNetworkBandwidth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxNetworkBandwidthForUser?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        forceIndexByDate?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        forcePrimaryKey?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        maxRowsToRead?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesToRead?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        readOverflowMode: UserSettings.OverflowMode,
        maxRowsToGroupBy?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        groupByOverflowMode: UserSettings.GroupByOverflowMode,
        maxRowsToSort?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesToSort?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        sortOverflowMode: UserSettings.OverflowMode,
        maxResultRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxResultBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        resultOverflowMode: UserSettings.OverflowMode,
        maxRowsInDistinct?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesInDistinct?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        distinctOverflowMode: UserSettings.OverflowMode,
        maxRowsToTransfer?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesToTransfer?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        transferOverflowMode: UserSettings.OverflowMode,
        maxExecutionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        timeoutOverflowMode: UserSettings.OverflowMode,
        maxRowsInSet?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesInSet?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        setOverflowMode: UserSettings.OverflowMode,
        maxRowsInJoin?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxBytesInJoin?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        joinOverflowMode: UserSettings.OverflowMode,
        maxColumnsToRead?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxTemporaryColumns?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxTemporaryNonConstColumns?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxQuerySize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxAstDepth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxAstElements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxExpandedAstElements?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minExecutionSpeed?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        minExecutionSpeedBytes?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        countDistinctImplementation: UserSettings.CountDistinctImplementation,
        inputFormatValuesInterpretExpressions?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        inputFormatDefaultsForOmittedFields?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        outputFormatJsonQuote64bitIntegers?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        outputFormatJsonQuoteDenormals?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        lowCardinalityAllowInNativeFormat?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        emptyResultForAggregationByEmptySet?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        joinedSubqueryRequiresAlias?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        joinUseNulls?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        transformNullIn?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        httpConnectionTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        httpReceiveTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        httpSendTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        enableHttpCompression?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sendProgressInHttpHeaders?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        httpHeadersProgressInterval?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        addHttpCorsHeader?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        quotaMode: UserSettings.QuotaMode,
    }

    export enum OverflowMode {
    OVERFLOW_MODE_UNSPECIFIED = 0,
    OVERFLOW_MODE_THROW = 1,
    OVERFLOW_MODE_BREAK = 2,
    }

    export enum GroupByOverflowMode {
    GROUP_BY_OVERFLOW_MODE_UNSPECIFIED = 0,
    GROUP_BY_OVERFLOW_MODE_THROW = 1,
    GROUP_BY_OVERFLOW_MODE_BREAK = 2,
    GROUP_BY_OVERFLOW_MODE_ANY = 3,
    }

    export enum DistributedProductMode {
    DISTRIBUTED_PRODUCT_MODE_UNSPECIFIED = 0,
    DISTRIBUTED_PRODUCT_MODE_DENY = 1,
    DISTRIBUTED_PRODUCT_MODE_LOCAL = 2,
    DISTRIBUTED_PRODUCT_MODE_GLOBAL = 3,
    DISTRIBUTED_PRODUCT_MODE_ALLOW = 4,
    }

    export enum QuotaMode {
    QUOTA_MODE_UNSPECIFIED = 0,
    QUOTA_MODE_DEFAULT = 1,
    QUOTA_MODE_KEYED = 2,
    QUOTA_MODE_KEYED_BY_IP = 3,
    }

    export enum CountDistinctImplementation {
    COUNT_DISTINCT_IMPLEMENTATION_UNSPECIFIED = 0,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ = 1,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED = 2,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_COMBINED_64 = 3,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_HLL_12 = 4,
    COUNT_DISTINCT_IMPLEMENTATION_UNIQ_EXACT = 5,
    }

}

export class UserQuota extends jspb.Message { 

    hasIntervalDuration(): boolean;
    clearIntervalDuration(): void;
    getIntervalDuration(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIntervalDuration(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    hasQueries(): boolean;
    clearQueries(): void;
    getQueries(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setQueries(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    hasErrors(): boolean;
    clearErrors(): void;
    getErrors(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setErrors(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    hasResultRows(): boolean;
    clearResultRows(): void;
    getResultRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setResultRows(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    hasReadRows(): boolean;
    clearReadRows(): void;
    getReadRows(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReadRows(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    hasExecutionTime(): boolean;
    clearExecutionTime(): void;
    getExecutionTime(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setExecutionTime(value?: google_protobuf_wrappers_pb.Int64Value): UserQuota;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserQuota.AsObject;
    static toObject(includeInstance: boolean, msg: UserQuota): UserQuota.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserQuota, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserQuota;
    static deserializeBinaryFromReader(message: UserQuota, reader: jspb.BinaryReader): UserQuota;
}

export namespace UserQuota {
    export type AsObject = {
        intervalDuration?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        queries?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        errors?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        resultRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        readRows?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        executionTime?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}
