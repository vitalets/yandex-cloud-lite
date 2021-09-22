// package: yandex.cloud.loadbalancer.v1
// file: yandex/cloud/loadbalancer/v1/target_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class TargetGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): TargetGroup;
    getFolderId(): string;
    setFolderId(value: string): TargetGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TargetGroup;
    getName(): string;
    setName(value: string): TargetGroup;
    getDescription(): string;
    setDescription(value: string): TargetGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getRegionId(): string;
    setRegionId(value: string): TargetGroup;
    clearTargetsList(): void;
    getTargetsList(): Array<Target>;
    setTargetsList(value: Array<Target>): TargetGroup;
    addTargets(value?: Target, index?: number): Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetGroup.AsObject;
    static toObject(includeInstance: boolean, msg: TargetGroup): TargetGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetGroup;
    static deserializeBinaryFromReader(message: TargetGroup, reader: jspb.BinaryReader): TargetGroup;
}

export namespace TargetGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        regionId: string,
        targetsList: Array<Target.AsObject>,
    }
}

export class Target extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): Target;
    getAddress(): string;
    setAddress(value: string): Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
    export type AsObject = {
        subnetId: string,
        address: string,
    }
}
