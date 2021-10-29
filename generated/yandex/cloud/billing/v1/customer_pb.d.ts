// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/customer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Customer extends jspb.Message { 
    getId(): string;
    setId(value: string): Customer;
    getBillingAccountId(): string;
    setBillingAccountId(value: string): Customer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Customer.AsObject;
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Customer;
    static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
    export type AsObject = {
        id: string,
        billingAccountId: string,
    }
}

export class CustomerPerson extends jspb.Message { 
    getName(): string;
    setName(value: string): CustomerPerson;
    getLongname(): string;
    setLongname(value: string): CustomerPerson;
    getPhone(): string;
    setPhone(value: string): CustomerPerson;
    getEmail(): string;
    setEmail(value: string): CustomerPerson;
    getPostCode(): string;
    setPostCode(value: string): CustomerPerson;
    getPostAddress(): string;
    setPostAddress(value: string): CustomerPerson;
    getLegalAddress(): string;
    setLegalAddress(value: string): CustomerPerson;
    getTin(): string;
    setTin(value: string): CustomerPerson;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerPerson.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerPerson): CustomerPerson.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerPerson, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerPerson;
    static deserializeBinaryFromReader(message: CustomerPerson, reader: jspb.BinaryReader): CustomerPerson;
}

export namespace CustomerPerson {
    export type AsObject = {
        name: string,
        longname: string,
        phone: string,
        email: string,
        postCode: string,
        postAddress: string,
        legalAddress: string,
        tin: string,
    }
}
