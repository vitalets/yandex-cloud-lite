// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/billable_object.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BillableObject extends jspb.Message { 
    getId(): string;
    setId(value: string): BillableObject;
    getType(): string;
    setType(value: string): BillableObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BillableObject.AsObject;
    static toObject(includeInstance: boolean, msg: BillableObject): BillableObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BillableObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BillableObject;
    static deserializeBinaryFromReader(message: BillableObject, reader: jspb.BinaryReader): BillableObject;
}

export namespace BillableObject {
    export type AsObject = {
        id: string,
        type: string,
    }
}

export class BillableObjectBinding extends jspb.Message { 

    hasEffectiveTime(): boolean;
    clearEffectiveTime(): void;
    getEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): BillableObjectBinding;

    hasBillableObject(): boolean;
    clearBillableObject(): void;
    getBillableObject(): BillableObject | undefined;
    setBillableObject(value?: BillableObject): BillableObjectBinding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BillableObjectBinding.AsObject;
    static toObject(includeInstance: boolean, msg: BillableObjectBinding): BillableObjectBinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BillableObjectBinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BillableObjectBinding;
    static deserializeBinaryFromReader(message: BillableObjectBinding, reader: jspb.BinaryReader): BillableObjectBinding;
}

export namespace BillableObjectBinding {
    export type AsObject = {
        effectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        billableObject?: BillableObject.AsObject,
    }
}
