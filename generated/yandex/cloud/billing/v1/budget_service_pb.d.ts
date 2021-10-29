// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/budget_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_billing_v1_budget_pb from "../../../../yandex/cloud/billing/v1/budget_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetBudgetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBudgetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBudgetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBudgetRequest): GetBudgetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBudgetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBudgetRequest;
    static deserializeBinaryFromReader(message: GetBudgetRequest, reader: jspb.BinaryReader): GetBudgetRequest;
}

export namespace GetBudgetRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListBudgetsRequest extends jspb.Message { 
    getBillingAccountId(): string;
    setBillingAccountId(value: string): ListBudgetsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListBudgetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBudgetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBudgetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBudgetsRequest): ListBudgetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBudgetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBudgetsRequest;
    static deserializeBinaryFromReader(message: ListBudgetsRequest, reader: jspb.BinaryReader): ListBudgetsRequest;
}

export namespace ListBudgetsRequest {
    export type AsObject = {
        billingAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListBudgetsResponse extends jspb.Message { 
    clearBudgetsList(): void;
    getBudgetsList(): Array<yandex_cloud_billing_v1_budget_pb.Budget>;
    setBudgetsList(value: Array<yandex_cloud_billing_v1_budget_pb.Budget>): ListBudgetsResponse;
    addBudgets(value?: yandex_cloud_billing_v1_budget_pb.Budget, index?: number): yandex_cloud_billing_v1_budget_pb.Budget;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBudgetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBudgetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBudgetsResponse): ListBudgetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBudgetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBudgetsResponse;
    static deserializeBinaryFromReader(message: ListBudgetsResponse, reader: jspb.BinaryReader): ListBudgetsResponse;
}

export namespace ListBudgetsResponse {
    export type AsObject = {
        budgetsList: Array<yandex_cloud_billing_v1_budget_pb.Budget.AsObject>,
        nextPageToken: string,
    }
}

export class CreateBudgetRequest extends jspb.Message { 
    getBillingAccountId(): string;
    setBillingAccountId(value: string): CreateBudgetRequest;
    getName(): string;
    setName(value: string): CreateBudgetRequest;

    hasCostBudgetSpec(): boolean;
    clearCostBudgetSpec(): void;
    getCostBudgetSpec(): yandex_cloud_billing_v1_budget_pb.CostBudgetSpec | undefined;
    setCostBudgetSpec(value?: yandex_cloud_billing_v1_budget_pb.CostBudgetSpec): CreateBudgetRequest;

    hasExpenseBudgetSpec(): boolean;
    clearExpenseBudgetSpec(): void;
    getExpenseBudgetSpec(): yandex_cloud_billing_v1_budget_pb.ExpenseBudgetSpec | undefined;
    setExpenseBudgetSpec(value?: yandex_cloud_billing_v1_budget_pb.ExpenseBudgetSpec): CreateBudgetRequest;

    hasBalanceBudgetSpec(): boolean;
    clearBalanceBudgetSpec(): void;
    getBalanceBudgetSpec(): yandex_cloud_billing_v1_budget_pb.BalanceBudgetSpec | undefined;
    setBalanceBudgetSpec(value?: yandex_cloud_billing_v1_budget_pb.BalanceBudgetSpec): CreateBudgetRequest;

    getBudgetSpecCase(): CreateBudgetRequest.BudgetSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBudgetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBudgetRequest): CreateBudgetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBudgetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBudgetRequest;
    static deserializeBinaryFromReader(message: CreateBudgetRequest, reader: jspb.BinaryReader): CreateBudgetRequest;
}

export namespace CreateBudgetRequest {
    export type AsObject = {
        billingAccountId: string,
        name: string,
        costBudgetSpec?: yandex_cloud_billing_v1_budget_pb.CostBudgetSpec.AsObject,
        expenseBudgetSpec?: yandex_cloud_billing_v1_budget_pb.ExpenseBudgetSpec.AsObject,
        balanceBudgetSpec?: yandex_cloud_billing_v1_budget_pb.BalanceBudgetSpec.AsObject,
    }

    export enum BudgetSpecCase {
        BUDGET_SPEC_NOT_SET = 0,
        COST_BUDGET_SPEC = 3,
        EXPENSE_BUDGET_SPEC = 4,
        BALANCE_BUDGET_SPEC = 5,
    }

}

export class CreateBudgetMetadata extends jspb.Message { 
    getBudgetId(): string;
    setBudgetId(value: string): CreateBudgetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBudgetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBudgetMetadata): CreateBudgetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBudgetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBudgetMetadata;
    static deserializeBinaryFromReader(message: CreateBudgetMetadata, reader: jspb.BinaryReader): CreateBudgetMetadata;
}

export namespace CreateBudgetMetadata {
    export type AsObject = {
        budgetId: string,
    }
}
