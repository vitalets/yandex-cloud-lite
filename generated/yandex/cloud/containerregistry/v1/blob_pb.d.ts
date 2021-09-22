// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/blob.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Blob extends jspb.Message { 
    getId(): string;
    setId(value: string): Blob;
    getDigest(): string;
    setDigest(value: string): Blob;
    getSize(): number;
    setSize(value: number): Blob;
    clearUrlsList(): void;
    getUrlsList(): Array<string>;
    setUrlsList(value: Array<string>): Blob;
    addUrls(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Blob.AsObject;
    static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Blob;
    static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
}

export namespace Blob {
    export type AsObject = {
        id: string,
        digest: string,
        size: number,
        urlsList: Array<string>,
    }
}
