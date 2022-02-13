// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/project.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Project extends jspb.Message { 
    getId(): string;
    setId(value: string): Project;
    getFolderId(): string;
    setFolderId(value: string): Project;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Project;
    getName(): string;
    setName(value: string): Project;
    getDescription(): string;
    setDescription(value: string): Project;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): Project.Settings | undefined;
    setSettings(value?: Project.Settings): Project;

    hasLimits(): boolean;
    clearLimits(): void;
    getLimits(): Project.Limits | undefined;
    setLimits(value?: Project.Limits): Project;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,
        settings?: Project.Settings.AsObject,
        limits?: Project.Limits.AsObject,
    }


    export class Settings extends jspb.Message { 
        getServiceAccountId(): string;
        setServiceAccountId(value: string): Settings;
        getSubnetId(): string;
        setSubnetId(value: string): Settings;
        getDataProcClusterId(): string;
        setDataProcClusterId(value: string): Settings;
        getCommitMode(): Project.Settings.CommitMode;
        setCommitMode(value: Project.Settings.CommitMode): Settings;
        clearSecurityGroupIdsList(): void;
        getSecurityGroupIdsList(): Array<string>;
        setSecurityGroupIdsList(value: Array<string>): Settings;
        addSecurityGroupIds(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Settings.AsObject;
        static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Settings;
        static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
    }

    export namespace Settings {
        export type AsObject = {
            serviceAccountId: string,
            subnetId: string,
            dataProcClusterId: string,
            commitMode: Project.Settings.CommitMode,
            securityGroupIdsList: Array<string>,
        }

        export enum CommitMode {
    COMMIT_MODE_UNSPECIFIED = 0,
    STANDARD = 1,
    AUTO = 2,
        }

    }

    export class Limits extends jspb.Message { 

        hasMaxUnitsPerHour(): boolean;
        clearMaxUnitsPerHour(): void;
        getMaxUnitsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxUnitsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): Limits;

        hasMaxUnitsPerExecution(): boolean;
        clearMaxUnitsPerExecution(): void;
        getMaxUnitsPerExecution(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setMaxUnitsPerExecution(value?: google_protobuf_wrappers_pb.Int64Value): Limits;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Limits.AsObject;
        static toObject(includeInstance: boolean, msg: Limits): Limits.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Limits, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Limits;
        static deserializeBinaryFromReader(message: Limits, reader: jspb.BinaryReader): Limits;
    }

    export namespace Limits {
        export type AsObject = {
            maxUnitsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
            maxUnitsPerExecution?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}
