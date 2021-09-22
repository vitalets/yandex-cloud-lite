// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HostGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): HostGroup;
    getFolderId(): string;
    setFolderId(value: string): HostGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): HostGroup;
    getName(): string;
    setName(value: string): HostGroup;
    getDescription(): string;
    setDescription(value: string): HostGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): HostGroup;
    getStatus(): HostGroup.Status;
    setStatus(value: HostGroup.Status): HostGroup;
    getTypeId(): string;
    setTypeId(value: string): HostGroup;
    getMaintenancePolicy(): MaintenancePolicy;
    setMaintenancePolicy(value: MaintenancePolicy): HostGroup;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): ScalePolicy | undefined;
    setScalePolicy(value?: ScalePolicy): HostGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostGroup.AsObject;
    static toObject(includeInstance: boolean, msg: HostGroup): HostGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostGroup;
    static deserializeBinaryFromReader(message: HostGroup, reader: jspb.BinaryReader): HostGroup;
}

export namespace HostGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        status: HostGroup.Status,
        typeId: string,
        maintenancePolicy: MaintenancePolicy,
        scalePolicy?: ScalePolicy.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    UPDATING = 3,
    DELETING = 4,
    }

}

export class Host extends jspb.Message { 
    getId(): string;
    setId(value: string): Host;
    getStatus(): Host.Status;
    setStatus(value: Host.Status): Host;
    getServerId(): string;
    setServerId(value: string): Host;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Host.AsObject;
    static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Host;
    static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
    export type AsObject = {
        id: string,
        status: Host.Status,
        serverId: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    UP = 1,
    DOWN = 2,
    }

}

export class ScalePolicy extends jspb.Message { 

    hasFixedScale(): boolean;
    clearFixedScale(): void;
    getFixedScale(): ScalePolicy.FixedScale | undefined;
    setFixedScale(value?: ScalePolicy.FixedScale): ScalePolicy;

    getScaleTypeCase(): ScalePolicy.ScaleTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: ScalePolicy): ScalePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalePolicy;
    static deserializeBinaryFromReader(message: ScalePolicy, reader: jspb.BinaryReader): ScalePolicy;
}

export namespace ScalePolicy {
    export type AsObject = {
        fixedScale?: ScalePolicy.FixedScale.AsObject,
    }


    export class FixedScale extends jspb.Message { 
        getSize(): number;
        setSize(value: number): FixedScale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixedScale.AsObject;
        static toObject(includeInstance: boolean, msg: FixedScale): FixedScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixedScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixedScale;
        static deserializeBinaryFromReader(message: FixedScale, reader: jspb.BinaryReader): FixedScale;
    }

    export namespace FixedScale {
        export type AsObject = {
            size: number,
        }
    }


    export enum ScaleTypeCase {
        SCALE_TYPE_NOT_SET = 0,
        FIXED_SCALE = 1,
    }

}

export enum MaintenancePolicy {
    MAINTENANCE_POLICY_UNSPECIFIED = 0,
    RESTART = 1,
    MIGRATE = 2,
}
