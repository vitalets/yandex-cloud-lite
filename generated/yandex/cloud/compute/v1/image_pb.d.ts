// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/image.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Image extends jspb.Message { 
    getId(): string;
    setId(value: string): Image;
    getFolderId(): string;
    setFolderId(value: string): Image;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Image;
    getName(): string;
    setName(value: string): Image;
    getDescription(): string;
    setDescription(value: string): Image;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getFamily(): string;
    setFamily(value: string): Image;
    getStorageSize(): number;
    setStorageSize(value: number): Image;
    getMinDiskSize(): number;
    setMinDiskSize(value: number): Image;
    clearProductIdsList(): void;
    getProductIdsList(): Array<string>;
    setProductIdsList(value: Array<string>): Image;
    addProductIds(value: string, index?: number): string;
    getStatus(): Image.Status;
    setStatus(value: Image.Status): Image;

    hasOs(): boolean;
    clearOs(): void;
    getOs(): Os | undefined;
    setOs(value?: Os): Image;
    getPooled(): boolean;
    setPooled(value: boolean): Image;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        family: string,
        storageSize: number,
        minDiskSize: number,
        productIdsList: Array<string>,
        status: Image.Status,
        os?: Os.AsObject,
        pooled: boolean,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    DELETING = 4,
    }

}

export class Os extends jspb.Message { 
    getType(): Os.Type;
    setType(value: Os.Type): Os;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Os.AsObject;
    static toObject(includeInstance: boolean, msg: Os): Os.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Os, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Os;
    static deserializeBinaryFromReader(message: Os, reader: jspb.BinaryReader): Os;
}

export namespace Os {
    export type AsObject = {
        type: Os.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    LINUX = 1,
    WINDOWS = 2,
    }

}
