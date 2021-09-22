// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/payload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Payload extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): Payload;
    clearEntriesList(): void;
    getEntriesList(): Array<Payload.Entry>;
    setEntriesList(value: Array<Payload.Entry>): Payload;
    addEntries(value?: Payload.Entry, index?: number): Payload.Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
    export type AsObject = {
        versionId: string,
        entriesList: Array<Payload.Entry.AsObject>,
    }


    export class Entry extends jspb.Message { 
        getKey(): string;
        setKey(value: string): Entry;

        hasTextValue(): boolean;
        clearTextValue(): void;
        getTextValue(): string;
        setTextValue(value: string): Entry;

        hasBinaryValue(): boolean;
        clearBinaryValue(): void;
        getBinaryValue(): Uint8Array | string;
        getBinaryValue_asU8(): Uint8Array;
        getBinaryValue_asB64(): string;
        setBinaryValue(value: Uint8Array | string): Entry;

        getValueCase(): Entry.ValueCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Entry.AsObject;
        static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Entry;
        static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
    }

    export namespace Entry {
        export type AsObject = {
            key: string,
            textValue: string,
            binaryValue: Uint8Array | string,
        }

        export enum ValueCase {
            VALUE_NOT_SET = 0,
            TEXT_VALUE = 2,
            BINARY_VALUE = 3,
        }

    }

}
