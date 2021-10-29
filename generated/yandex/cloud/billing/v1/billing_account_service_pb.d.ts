// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/billing_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_billing_v1_billing_account_pb from "../../../../yandex/cloud/billing/v1/billing_account_pb";
import * as yandex_cloud_billing_v1_billable_object_pb from "../../../../yandex/cloud/billing/v1/billable_object_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetBillingAccountRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBillingAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBillingAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBillingAccountRequest): GetBillingAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBillingAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBillingAccountRequest;
    static deserializeBinaryFromReader(message: GetBillingAccountRequest, reader: jspb.BinaryReader): GetBillingAccountRequest;
}

export namespace GetBillingAccountRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListBillingAccountsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListBillingAccountsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBillingAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBillingAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBillingAccountsRequest): ListBillingAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBillingAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBillingAccountsRequest;
    static deserializeBinaryFromReader(message: ListBillingAccountsRequest, reader: jspb.BinaryReader): ListBillingAccountsRequest;
}

export namespace ListBillingAccountsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListBillingAccountsResponse extends jspb.Message { 
    clearBillingAccountsList(): void;
    getBillingAccountsList(): Array<yandex_cloud_billing_v1_billing_account_pb.BillingAccount>;
    setBillingAccountsList(value: Array<yandex_cloud_billing_v1_billing_account_pb.BillingAccount>): ListBillingAccountsResponse;
    addBillingAccounts(value?: yandex_cloud_billing_v1_billing_account_pb.BillingAccount, index?: number): yandex_cloud_billing_v1_billing_account_pb.BillingAccount;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBillingAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBillingAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBillingAccountsResponse): ListBillingAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBillingAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBillingAccountsResponse;
    static deserializeBinaryFromReader(message: ListBillingAccountsResponse, reader: jspb.BinaryReader): ListBillingAccountsResponse;
}

export namespace ListBillingAccountsResponse {
    export type AsObject = {
        billingAccountsList: Array<yandex_cloud_billing_v1_billing_account_pb.BillingAccount.AsObject>,
        nextPageToken: string,
    }
}

export class ListBillableObjectBindingsRequest extends jspb.Message { 
    getBillingAccountId(): string;
    setBillingAccountId(value: string): ListBillableObjectBindingsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListBillableObjectBindingsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBillableObjectBindingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBillableObjectBindingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBillableObjectBindingsRequest): ListBillableObjectBindingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBillableObjectBindingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBillableObjectBindingsRequest;
    static deserializeBinaryFromReader(message: ListBillableObjectBindingsRequest, reader: jspb.BinaryReader): ListBillableObjectBindingsRequest;
}

export namespace ListBillableObjectBindingsRequest {
    export type AsObject = {
        billingAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListBillableObjectBindingsResponse extends jspb.Message { 
    clearBillableObjectBindingsList(): void;
    getBillableObjectBindingsList(): Array<yandex_cloud_billing_v1_billable_object_pb.BillableObjectBinding>;
    setBillableObjectBindingsList(value: Array<yandex_cloud_billing_v1_billable_object_pb.BillableObjectBinding>): ListBillableObjectBindingsResponse;
    addBillableObjectBindings(value?: yandex_cloud_billing_v1_billable_object_pb.BillableObjectBinding, index?: number): yandex_cloud_billing_v1_billable_object_pb.BillableObjectBinding;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBillableObjectBindingsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBillableObjectBindingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBillableObjectBindingsResponse): ListBillableObjectBindingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBillableObjectBindingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBillableObjectBindingsResponse;
    static deserializeBinaryFromReader(message: ListBillableObjectBindingsResponse, reader: jspb.BinaryReader): ListBillableObjectBindingsResponse;
}

export namespace ListBillableObjectBindingsResponse {
    export type AsObject = {
        billableObjectBindingsList: Array<yandex_cloud_billing_v1_billable_object_pb.BillableObjectBinding.AsObject>,
        nextPageToken: string,
    }
}

export class BindBillableObjectRequest extends jspb.Message { 
    getBillingAccountId(): string;
    setBillingAccountId(value: string): BindBillableObjectRequest;

    hasBillableObject(): boolean;
    clearBillableObject(): void;
    getBillableObject(): yandex_cloud_billing_v1_billable_object_pb.BillableObject | undefined;
    setBillableObject(value?: yandex_cloud_billing_v1_billable_object_pb.BillableObject): BindBillableObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindBillableObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BindBillableObjectRequest): BindBillableObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindBillableObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindBillableObjectRequest;
    static deserializeBinaryFromReader(message: BindBillableObjectRequest, reader: jspb.BinaryReader): BindBillableObjectRequest;
}

export namespace BindBillableObjectRequest {
    export type AsObject = {
        billingAccountId: string,
        billableObject?: yandex_cloud_billing_v1_billable_object_pb.BillableObject.AsObject,
    }
}

export class BindBillableObjectMetadata extends jspb.Message { 
    getBillableObjectId(): string;
    setBillableObjectId(value: string): BindBillableObjectMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindBillableObjectMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BindBillableObjectMetadata): BindBillableObjectMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindBillableObjectMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindBillableObjectMetadata;
    static deserializeBinaryFromReader(message: BindBillableObjectMetadata, reader: jspb.BinaryReader): BindBillableObjectMetadata;
}

export namespace BindBillableObjectMetadata {
    export type AsObject = {
        billableObjectId: string,
    }
}
