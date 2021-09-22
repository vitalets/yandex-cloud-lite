// package: yandex.cloud.marketplace.v1.metering
// file: yandex/cloud/marketplace/v1/metering/usage_record.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class UsageRecord extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): UsageRecord;
    getSkuId(): string;
    setSkuId(value: string): UsageRecord;
    getQuantity(): number;
    setQuantity(value: number): UsageRecord;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): UsageRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsageRecord.AsObject;
    static toObject(includeInstance: boolean, msg: UsageRecord): UsageRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsageRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsageRecord;
    static deserializeBinaryFromReader(message: UsageRecord, reader: jspb.BinaryReader): UsageRecord;
}

export namespace UsageRecord {
    export type AsObject = {
        uuid: string,
        skuId: string,
        quantity: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AcceptedUsageRecord extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): AcceptedUsageRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AcceptedUsageRecord.AsObject;
    static toObject(includeInstance: boolean, msg: AcceptedUsageRecord): AcceptedUsageRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AcceptedUsageRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AcceptedUsageRecord;
    static deserializeBinaryFromReader(message: AcceptedUsageRecord, reader: jspb.BinaryReader): AcceptedUsageRecord;
}

export namespace AcceptedUsageRecord {
    export type AsObject = {
        uuid: string,
    }
}

export class RejectedUsageRecord extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): RejectedUsageRecord;
    getReason(): RejectedUsageRecord.Reason;
    setReason(value: RejectedUsageRecord.Reason): RejectedUsageRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RejectedUsageRecord.AsObject;
    static toObject(includeInstance: boolean, msg: RejectedUsageRecord): RejectedUsageRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RejectedUsageRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RejectedUsageRecord;
    static deserializeBinaryFromReader(message: RejectedUsageRecord, reader: jspb.BinaryReader): RejectedUsageRecord;
}

export namespace RejectedUsageRecord {
    export type AsObject = {
        uuid: string,
        reason: RejectedUsageRecord.Reason,
    }

    export enum Reason {
    REASON_UNSPECIFIED = 0,
    DUPLICATE = 1,
    EXPIRED = 2,
    INVALID_TIMESTAMP = 3,
    INVALID_SKU_ID = 4,
    INVALID_PRODUCT_ID = 5,
    INVALID_QUANTITY = 6,
    INVALID_ID = 7,
    }

}
