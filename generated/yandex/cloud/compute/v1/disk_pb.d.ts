// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Disk extends jspb.Message { 
    getId(): string;
    setId(value: string): Disk;
    getFolderId(): string;
    setFolderId(value: string): Disk;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Disk;
    getName(): string;
    setName(value: string): Disk;
    getDescription(): string;
    setDescription(value: string): Disk;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getTypeId(): string;
    setTypeId(value: string): Disk;
    getZoneId(): string;
    setZoneId(value: string): Disk;
    getSize(): number;
    setSize(value: number): Disk;
    getBlockSize(): number;
    setBlockSize(value: number): Disk;
    clearProductIdsList(): void;
    getProductIdsList(): Array<string>;
    setProductIdsList(value: Array<string>): Disk;
    addProductIds(value: string, index?: number): string;
    getStatus(): Disk.Status;
    setStatus(value: Disk.Status): Disk;

    hasSourceImageId(): boolean;
    clearSourceImageId(): void;
    getSourceImageId(): string;
    setSourceImageId(value: string): Disk;

    hasSourceSnapshotId(): boolean;
    clearSourceSnapshotId(): void;
    getSourceSnapshotId(): string;
    setSourceSnapshotId(value: string): Disk;
    clearInstanceIdsList(): void;
    getInstanceIdsList(): Array<string>;
    setInstanceIdsList(value: Array<string>): Disk;
    addInstanceIds(value: string, index?: number): string;

    hasDiskPlacementPolicy(): boolean;
    clearDiskPlacementPolicy(): void;
    getDiskPlacementPolicy(): DiskPlacementPolicy | undefined;
    setDiskPlacementPolicy(value?: DiskPlacementPolicy): Disk;

    getSourceCase(): Disk.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Disk.AsObject;
    static toObject(includeInstance: boolean, msg: Disk): Disk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Disk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Disk;
    static deserializeBinaryFromReader(message: Disk, reader: jspb.BinaryReader): Disk;
}

export namespace Disk {
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
        productIdsList: Array<string>,
        status: Disk.Status,
        sourceImageId: string,
        sourceSnapshotId: string,
        instanceIdsList: Array<string>,
        diskPlacementPolicy?: DiskPlacementPolicy.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    DELETING = 4,
    }


    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        SOURCE_IMAGE_ID = 12,
        SOURCE_SNAPSHOT_ID = 13,
    }

}

export class DiskPlacementPolicy extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): DiskPlacementPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskPlacementPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: DiskPlacementPolicy): DiskPlacementPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskPlacementPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskPlacementPolicy;
    static deserializeBinaryFromReader(message: DiskPlacementPolicy, reader: jspb.BinaryReader): DiskPlacementPolicy;
}

export namespace DiskPlacementPolicy {
    export type AsObject = {
        placementGroupId: string,
    }
}
