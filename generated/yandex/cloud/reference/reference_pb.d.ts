// package: yandex.cloud.reference
// file: yandex/cloud/reference/reference.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Reference extends jspb.Message { 

    hasReferrer(): boolean;
    clearReferrer(): void;
    getReferrer(): Referrer | undefined;
    setReferrer(value?: Referrer): Reference;
    getType(): Reference.Type;
    setType(value: Reference.Type): Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reference.AsObject;
    static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reference;
    static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
    export type AsObject = {
        referrer?: Referrer.AsObject,
        type: Reference.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    MANAGED_BY = 1,
    USED_BY = 2,
    }

}

export class Referrer extends jspb.Message { 
    getType(): string;
    setType(value: string): Referrer;
    getId(): string;
    setId(value: string): Referrer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Referrer.AsObject;
    static toObject(includeInstance: boolean, msg: Referrer): Referrer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Referrer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Referrer;
    static deserializeBinaryFromReader(message: Referrer, reader: jspb.BinaryReader): Referrer;
}

export namespace Referrer {
    export type AsObject = {
        type: string,
        id: string,
    }
}
