// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/billing_account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BillingAccount extends jspb.Message { 
    getId(): string;
    setId(value: string): BillingAccount;
    getName(): string;
    setName(value: string): BillingAccount;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BillingAccount;
    getCountryCode(): string;
    setCountryCode(value: string): BillingAccount;
    getCurrency(): string;
    setCurrency(value: string): BillingAccount;
    getActive(): boolean;
    setActive(value: boolean): BillingAccount;
    getBalance(): string;
    setBalance(value: string): BillingAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BillingAccount.AsObject;
    static toObject(includeInstance: boolean, msg: BillingAccount): BillingAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BillingAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BillingAccount;
    static deserializeBinaryFromReader(message: BillingAccount, reader: jspb.BinaryReader): BillingAccount;
}

export namespace BillingAccount {
    export type AsObject = {
        id: string,
        name: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        countryCode: string,
        currency: string,
        active: boolean,
        balance: string,
    }
}
