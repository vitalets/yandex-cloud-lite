// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/placement_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class PlacementGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): PlacementGroup;
    getFolderId(): string;
    setFolderId(value: string): PlacementGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PlacementGroup;
    getName(): string;
    setName(value: string): PlacementGroup;
    getDescription(): string;
    setDescription(value: string): PlacementGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSpreadPlacementStrategy(): boolean;
    clearSpreadPlacementStrategy(): void;
    getSpreadPlacementStrategy(): SpreadPlacementStrategy | undefined;
    setSpreadPlacementStrategy(value?: SpreadPlacementStrategy): PlacementGroup;

    getPlacementStrategyCase(): PlacementGroup.PlacementStrategyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementGroup.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementGroup): PlacementGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementGroup;
    static deserializeBinaryFromReader(message: PlacementGroup, reader: jspb.BinaryReader): PlacementGroup;
}

export namespace PlacementGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        spreadPlacementStrategy?: SpreadPlacementStrategy.AsObject,
    }

    export enum PlacementStrategyCase {
        PLACEMENT_STRATEGY_NOT_SET = 0,
        SPREAD_PLACEMENT_STRATEGY = 7,
    }

}

export class SpreadPlacementStrategy extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpreadPlacementStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: SpreadPlacementStrategy): SpreadPlacementStrategy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpreadPlacementStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpreadPlacementStrategy;
    static deserializeBinaryFromReader(message: SpreadPlacementStrategy, reader: jspb.BinaryReader): SpreadPlacementStrategy;
}

export namespace SpreadPlacementStrategy {
    export type AsObject = {
    }
}
