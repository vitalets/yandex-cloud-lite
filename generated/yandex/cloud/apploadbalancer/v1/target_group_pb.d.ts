// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/target_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class TargetGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): TargetGroup;
    getName(): string;
    setName(value: string): TargetGroup;
    getDescription(): string;
    setDescription(value: string): TargetGroup;
    getFolderId(): string;
    setFolderId(value: string): TargetGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearTargetsList(): void;
    getTargetsList(): Array<Target>;
    setTargetsList(value: Array<Target>): TargetGroup;
    addTargets(value?: Target, index?: number): Target;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TargetGroup;

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
        name: string,
        description: string,
        folderId: string,

        labelsMap: Array<[string, string]>,
        targetsList: Array<Target.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Target extends jspb.Message { 

    hasIpAddress(): boolean;
    clearIpAddress(): void;
    getIpAddress(): string;
    setIpAddress(value: string): Target;
    getSubnetId(): string;
    setSubnetId(value: string): Target;

    getAddressTypeCase(): Target.AddressTypeCase;

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
        ipAddress: string,
        subnetId: string,
    }

    export enum AddressTypeCase {
        ADDRESS_TYPE_NOT_SET = 0,
        IP_ADDRESS = 1,
    }

}
