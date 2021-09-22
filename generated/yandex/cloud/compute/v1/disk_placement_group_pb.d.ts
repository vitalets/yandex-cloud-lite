// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_placement_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DiskPlacementGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): DiskPlacementGroup;
    getFolderId(): string;
    setFolderId(value: string): DiskPlacementGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DiskPlacementGroup;
    getName(): string;
    setName(value: string): DiskPlacementGroup;
    getDescription(): string;
    setDescription(value: string): DiskPlacementGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): DiskPlacementGroup;
    getStatus(): DiskPlacementGroup.Status;
    setStatus(value: DiskPlacementGroup.Status): DiskPlacementGroup;

    hasSpreadPlacementStrategy(): boolean;
    clearSpreadPlacementStrategy(): void;
    getSpreadPlacementStrategy(): DiskSpreadPlacementStrategy | undefined;
    setSpreadPlacementStrategy(value?: DiskSpreadPlacementStrategy): DiskPlacementGroup;

    getPlacementStrategyCase(): DiskPlacementGroup.PlacementStrategyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskPlacementGroup.AsObject;
    static toObject(includeInstance: boolean, msg: DiskPlacementGroup): DiskPlacementGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskPlacementGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskPlacementGroup;
    static deserializeBinaryFromReader(message: DiskPlacementGroup, reader: jspb.BinaryReader): DiskPlacementGroup;
}

export namespace DiskPlacementGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        status: DiskPlacementGroup.Status,
        spreadPlacementStrategy?: DiskSpreadPlacementStrategy.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    DELETING = 4,
    }


    export enum PlacementStrategyCase {
        PLACEMENT_STRATEGY_NOT_SET = 0,
        SPREAD_PLACEMENT_STRATEGY = 8,
    }

}

export class DiskSpreadPlacementStrategy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskSpreadPlacementStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: DiskSpreadPlacementStrategy): DiskSpreadPlacementStrategy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskSpreadPlacementStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskSpreadPlacementStrategy;
    static deserializeBinaryFromReader(message: DiskSpreadPlacementStrategy, reader: jspb.BinaryReader): DiskSpreadPlacementStrategy;
}

export namespace DiskSpreadPlacementStrategy {
    export type AsObject = {
    }
}
