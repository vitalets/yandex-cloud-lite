// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/sku_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_billing_v1_sku_pb from "../../../../yandex/cloud/billing/v1/sku_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetSkuRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetSkuRequest;
    getCurrency(): string;
    setCurrency(value: string): GetSkuRequest;
    getBillingAccountId(): string;
    setBillingAccountId(value: string): GetSkuRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSkuRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSkuRequest): GetSkuRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSkuRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSkuRequest;
    static deserializeBinaryFromReader(message: GetSkuRequest, reader: jspb.BinaryReader): GetSkuRequest;
}

export namespace GetSkuRequest {
    export type AsObject = {
        id: string,
        currency: string,
        billingAccountId: string,
    }
}

export class ListSkusRequest extends jspb.Message { 
    getCurrency(): string;
    setCurrency(value: string): ListSkusRequest;
    getBillingAccountId(): string;
    setBillingAccountId(value: string): ListSkusRequest;
    getFilter(): string;
    setFilter(value: string): ListSkusRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSkusRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSkusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSkusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSkusRequest): ListSkusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSkusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSkusRequest;
    static deserializeBinaryFromReader(message: ListSkusRequest, reader: jspb.BinaryReader): ListSkusRequest;
}

export namespace ListSkusRequest {
    export type AsObject = {
        currency: string,
        billingAccountId: string,
        filter: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSkusResponse extends jspb.Message { 
    clearSkusList(): void;
    getSkusList(): Array<yandex_cloud_billing_v1_sku_pb.Sku>;
    setSkusList(value: Array<yandex_cloud_billing_v1_sku_pb.Sku>): ListSkusResponse;
    addSkus(value?: yandex_cloud_billing_v1_sku_pb.Sku, index?: number): yandex_cloud_billing_v1_sku_pb.Sku;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSkusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSkusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSkusResponse): ListSkusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSkusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSkusResponse;
    static deserializeBinaryFromReader(message: ListSkusResponse, reader: jspb.BinaryReader): ListSkusResponse;
}

export namespace ListSkusResponse {
    export type AsObject = {
        skusList: Array<yandex_cloud_billing_v1_sku_pb.Sku.AsObject>,
        nextPageToken: string,
    }
}
