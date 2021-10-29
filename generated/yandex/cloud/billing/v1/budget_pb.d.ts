// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/budget.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class Budget extends jspb.Message { 
    getId(): string;
    setId(value: string): Budget;
    getName(): string;
    setName(value: string): Budget;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Budget;
    getBillingAccountId(): string;
    setBillingAccountId(value: string): Budget;
    getStatus(): BudgetStatus;
    setStatus(value: BudgetStatus): Budget;

    hasCostBudget(): boolean;
    clearCostBudget(): void;
    getCostBudget(): CostBudgetSpec | undefined;
    setCostBudget(value?: CostBudgetSpec): Budget;

    hasExpenseBudget(): boolean;
    clearExpenseBudget(): void;
    getExpenseBudget(): ExpenseBudgetSpec | undefined;
    setExpenseBudget(value?: ExpenseBudgetSpec): Budget;

    hasBalanceBudget(): boolean;
    clearBalanceBudget(): void;
    getBalanceBudget(): BalanceBudgetSpec | undefined;
    setBalanceBudget(value?: BalanceBudgetSpec): Budget;

    getBudgetSpecCase(): Budget.BudgetSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Budget.AsObject;
    static toObject(includeInstance: boolean, msg: Budget): Budget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Budget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Budget;
    static deserializeBinaryFromReader(message: Budget, reader: jspb.BinaryReader): Budget;
}

export namespace Budget {
    export type AsObject = {
        id: string,
        name: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        billingAccountId: string,
        status: BudgetStatus,
        costBudget?: CostBudgetSpec.AsObject,
        expenseBudget?: ExpenseBudgetSpec.AsObject,
        balanceBudget?: BalanceBudgetSpec.AsObject,
    }

    export enum BudgetSpecCase {
        BUDGET_SPEC_NOT_SET = 0,
        COST_BUDGET = 6,
        EXPENSE_BUDGET = 7,
        BALANCE_BUDGET = 8,
    }

}

export class CostBudgetSpec extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): CostBudgetSpec;
    clearNotificationUserAccountIdsList(): void;
    getNotificationUserAccountIdsList(): Array<string>;
    setNotificationUserAccountIdsList(value: Array<string>): CostBudgetSpec;
    addNotificationUserAccountIds(value: string, index?: number): string;
    clearThresholdRulesList(): void;
    getThresholdRulesList(): Array<ThresholdRule>;
    setThresholdRulesList(value: Array<ThresholdRule>): CostBudgetSpec;
    addThresholdRules(value?: ThresholdRule, index?: number): ThresholdRule;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ConsumptionFilter | undefined;
    setFilter(value?: ConsumptionFilter): CostBudgetSpec;

    hasResetPeriod(): boolean;
    clearResetPeriod(): void;
    getResetPeriod(): ResetPeriodType;
    setResetPeriod(value: ResetPeriodType): CostBudgetSpec;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): string;
    setStartDate(value: string): CostBudgetSpec;
    getEndDate(): string;
    setEndDate(value: string): CostBudgetSpec;

    getStartTypeCase(): CostBudgetSpec.StartTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CostBudgetSpec.AsObject;
    static toObject(includeInstance: boolean, msg: CostBudgetSpec): CostBudgetSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CostBudgetSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CostBudgetSpec;
    static deserializeBinaryFromReader(message: CostBudgetSpec, reader: jspb.BinaryReader): CostBudgetSpec;
}

export namespace CostBudgetSpec {
    export type AsObject = {
        amount: string,
        notificationUserAccountIdsList: Array<string>,
        thresholdRulesList: Array<ThresholdRule.AsObject>,
        filter?: ConsumptionFilter.AsObject,
        resetPeriod: ResetPeriodType,
        startDate: string,
        endDate: string,
    }

    export enum StartTypeCase {
        START_TYPE_NOT_SET = 0,
        RESET_PERIOD = 5,
        START_DATE = 6,
    }

}

export class ExpenseBudgetSpec extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): ExpenseBudgetSpec;
    clearNotificationUserAccountIdsList(): void;
    getNotificationUserAccountIdsList(): Array<string>;
    setNotificationUserAccountIdsList(value: Array<string>): ExpenseBudgetSpec;
    addNotificationUserAccountIds(value: string, index?: number): string;
    clearThresholdRulesList(): void;
    getThresholdRulesList(): Array<ThresholdRule>;
    setThresholdRulesList(value: Array<ThresholdRule>): ExpenseBudgetSpec;
    addThresholdRules(value?: ThresholdRule, index?: number): ThresholdRule;

    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): ConsumptionFilter | undefined;
    setFilter(value?: ConsumptionFilter): ExpenseBudgetSpec;

    hasResetPeriod(): boolean;
    clearResetPeriod(): void;
    getResetPeriod(): ResetPeriodType;
    setResetPeriod(value: ResetPeriodType): ExpenseBudgetSpec;

    hasStartDate(): boolean;
    clearStartDate(): void;
    getStartDate(): string;
    setStartDate(value: string): ExpenseBudgetSpec;
    getEndDate(): string;
    setEndDate(value: string): ExpenseBudgetSpec;

    getStartTypeCase(): ExpenseBudgetSpec.StartTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExpenseBudgetSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExpenseBudgetSpec): ExpenseBudgetSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExpenseBudgetSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExpenseBudgetSpec;
    static deserializeBinaryFromReader(message: ExpenseBudgetSpec, reader: jspb.BinaryReader): ExpenseBudgetSpec;
}

export namespace ExpenseBudgetSpec {
    export type AsObject = {
        amount: string,
        notificationUserAccountIdsList: Array<string>,
        thresholdRulesList: Array<ThresholdRule.AsObject>,
        filter?: ConsumptionFilter.AsObject,
        resetPeriod: ResetPeriodType,
        startDate: string,
        endDate: string,
    }

    export enum StartTypeCase {
        START_TYPE_NOT_SET = 0,
        RESET_PERIOD = 5,
        START_DATE = 6,
    }

}

export class BalanceBudgetSpec extends jspb.Message { 
    getAmount(): string;
    setAmount(value: string): BalanceBudgetSpec;
    clearNotificationUserAccountIdsList(): void;
    getNotificationUserAccountIdsList(): Array<string>;
    setNotificationUserAccountIdsList(value: Array<string>): BalanceBudgetSpec;
    addNotificationUserAccountIds(value: string, index?: number): string;
    clearThresholdRulesList(): void;
    getThresholdRulesList(): Array<ThresholdRule>;
    setThresholdRulesList(value: Array<ThresholdRule>): BalanceBudgetSpec;
    addThresholdRules(value?: ThresholdRule, index?: number): ThresholdRule;
    getStartDate(): string;
    setStartDate(value: string): BalanceBudgetSpec;
    getEndDate(): string;
    setEndDate(value: string): BalanceBudgetSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceBudgetSpec.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceBudgetSpec): BalanceBudgetSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceBudgetSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceBudgetSpec;
    static deserializeBinaryFromReader(message: BalanceBudgetSpec, reader: jspb.BinaryReader): BalanceBudgetSpec;
}

export namespace BalanceBudgetSpec {
    export type AsObject = {
        amount: string,
        notificationUserAccountIdsList: Array<string>,
        thresholdRulesList: Array<ThresholdRule.AsObject>,
        startDate: string,
        endDate: string,
    }
}

export class ConsumptionFilter extends jspb.Message { 
    clearServiceIdsList(): void;
    getServiceIdsList(): Array<string>;
    setServiceIdsList(value: Array<string>): ConsumptionFilter;
    addServiceIds(value: string, index?: number): string;
    clearCloudFoldersFiltersList(): void;
    getCloudFoldersFiltersList(): Array<CloudFoldersConsumptionFilter>;
    setCloudFoldersFiltersList(value: Array<CloudFoldersConsumptionFilter>): ConsumptionFilter;
    addCloudFoldersFilters(value?: CloudFoldersConsumptionFilter, index?: number): CloudFoldersConsumptionFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsumptionFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ConsumptionFilter): ConsumptionFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsumptionFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsumptionFilter;
    static deserializeBinaryFromReader(message: ConsumptionFilter, reader: jspb.BinaryReader): ConsumptionFilter;
}

export namespace ConsumptionFilter {
    export type AsObject = {
        serviceIdsList: Array<string>,
        cloudFoldersFiltersList: Array<CloudFoldersConsumptionFilter.AsObject>,
    }
}

export class CloudFoldersConsumptionFilter extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): CloudFoldersConsumptionFilter;
    clearFolderIdsList(): void;
    getFolderIdsList(): Array<string>;
    setFolderIdsList(value: Array<string>): CloudFoldersConsumptionFilter;
    addFolderIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudFoldersConsumptionFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CloudFoldersConsumptionFilter): CloudFoldersConsumptionFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudFoldersConsumptionFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudFoldersConsumptionFilter;
    static deserializeBinaryFromReader(message: CloudFoldersConsumptionFilter, reader: jspb.BinaryReader): CloudFoldersConsumptionFilter;
}

export namespace CloudFoldersConsumptionFilter {
    export type AsObject = {
        cloudId: string,
        folderIdsList: Array<string>,
    }
}

export class ThresholdRule extends jspb.Message { 
    getType(): ThresholdType;
    setType(value: ThresholdType): ThresholdRule;
    getAmount(): string;
    setAmount(value: string): ThresholdRule;
    clearNotificationUserAccountIdsList(): void;
    getNotificationUserAccountIdsList(): Array<string>;
    setNotificationUserAccountIdsList(value: Array<string>): ThresholdRule;
    addNotificationUserAccountIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThresholdRule.AsObject;
    static toObject(includeInstance: boolean, msg: ThresholdRule): ThresholdRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThresholdRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThresholdRule;
    static deserializeBinaryFromReader(message: ThresholdRule, reader: jspb.BinaryReader): ThresholdRule;
}

export namespace ThresholdRule {
    export type AsObject = {
        type: ThresholdType,
        amount: string,
        notificationUserAccountIdsList: Array<string>,
    }
}

export enum BudgetStatus {
    BUDGET_STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    FINISHED = 3,
}

export enum ResetPeriodType {
    RESET_PERIOD_TYPE_UNSPECIFIED = 0,
    MONTHLY = 1,
    QUARTER = 2,
    ANNUALLY = 3,
}

export enum ThresholdType {
    THRESHOLD_TYPE_UNSPECIFIED = 0,
    PERCENT = 1,
    AMOUNT = 2,
}
