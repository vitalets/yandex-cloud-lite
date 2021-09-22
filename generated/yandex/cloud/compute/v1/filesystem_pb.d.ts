// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/filesystem.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Filesystem extends jspb.Message { 
    getId(): string;
    setId(value: string): Filesystem;
    getFolderId(): string;
    setFolderId(value: string): Filesystem;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Filesystem;
    getName(): string;
    setName(value: string): Filesystem;
    getDescription(): string;
    setDescription(value: string): Filesystem;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getTypeId(): string;
    setTypeId(value: string): Filesystem;
    getZoneId(): string;
    setZoneId(value: string): Filesystem;
    getSize(): number;
    setSize(value: number): Filesystem;
    getBlockSize(): number;
    setBlockSize(value: number): Filesystem;
    getStatus(): Filesystem.Status;
    setStatus(value: Filesystem.Status): Filesystem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filesystem.AsObject;
    static toObject(includeInstance: boolean, msg: Filesystem): Filesystem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filesystem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filesystem;
    static deserializeBinaryFromReader(message: Filesystem, reader: jspb.BinaryReader): Filesystem;
}

export namespace Filesystem {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        typeId: string,
        zoneId: string,
        size: number,
        blockSize: number,
        status: Filesystem.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    DELETING = 4,
    }

}
