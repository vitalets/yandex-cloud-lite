// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/snapshot.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Snapshot extends jspb.Message { 
    getId(): string;
    setId(value: string): Snapshot;
    getFolderId(): string;
    setFolderId(value: string): Snapshot;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Snapshot;
    getName(): string;
    setName(value: string): Snapshot;
    getDescription(): string;
    setDescription(value: string): Snapshot;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStorageSize(): number;
    setStorageSize(value: number): Snapshot;
    getDiskSize(): number;
    setDiskSize(value: number): Snapshot;
    clearProductIdsList(): void;
    getProductIdsList(): Array<string>;
    setProductIdsList(value: Array<string>): Snapshot;
    addProductIds(value: string, index?: number): string;
    getStatus(): Snapshot.Status;
    setStatus(value: Snapshot.Status): Snapshot;
    getSourceDiskId(): string;
    setSourceDiskId(value: string): Snapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Snapshot.AsObject;
    static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Snapshot;
    static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        storageSize: number,
        diskSize: number,
        productIdsList: Array<string>,
        status: Snapshot.Status,
        sourceDiskId: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    DELETING = 4,
    }

}
