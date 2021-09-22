// package: yandex.cloud.mdb.greenplum.v1
// file: yandex/cloud/mdb/greenplum/v1/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Resources extends jspb.Message { 
    getResourcePresetId(): string;
    setResourcePresetId(value: string): Resources;
    getDiskSize(): number;
    setDiskSize(value: number): Resources;
    getDiskTypeId(): string;
    setDiskTypeId(value: string): Resources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
    export type AsObject = {
        resourcePresetId: string,
        diskSize: number,
        diskTypeId: string,
    }
}

export class MasterSubclusterConfig extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): MasterSubclusterConfig;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): GreenplumMasterConfigSet | undefined;
    setConfig(value?: GreenplumMasterConfigSet): MasterSubclusterConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterSubclusterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: MasterSubclusterConfig): MasterSubclusterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterSubclusterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterSubclusterConfig;
    static deserializeBinaryFromReader(message: MasterSubclusterConfig, reader: jspb.BinaryReader): MasterSubclusterConfig;
}

export namespace MasterSubclusterConfig {
    export type AsObject = {
        resources?: Resources.AsObject,
        config?: GreenplumMasterConfigSet.AsObject,
    }
}

export class SegmentSubclusterConfig extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): SegmentSubclusterConfig;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): GreenplumSegmentConfigSet | undefined;
    setConfig(value?: GreenplumSegmentConfigSet): SegmentSubclusterConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SegmentSubclusterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SegmentSubclusterConfig): SegmentSubclusterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SegmentSubclusterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SegmentSubclusterConfig;
    static deserializeBinaryFromReader(message: SegmentSubclusterConfig, reader: jspb.BinaryReader): SegmentSubclusterConfig;
}

export namespace SegmentSubclusterConfig {
    export type AsObject = {
        resources?: Resources.AsObject,
        config?: GreenplumSegmentConfigSet.AsObject,
    }
}

export class GreenplumMasterConfig extends jspb.Message { 
    getLogLevel(): GreenplumMasterConfig.LogLevel;
    setLogLevel(value: GreenplumMasterConfig.LogLevel): GreenplumMasterConfig;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumMasterConfig;

    hasTimezone(): boolean;
    clearTimezone(): void;
    getTimezone(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTimezone(value?: google_protobuf_wrappers_pb.StringValue): GreenplumMasterConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumMasterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumMasterConfig): GreenplumMasterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumMasterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumMasterConfig;
    static deserializeBinaryFromReader(message: GreenplumMasterConfig, reader: jspb.BinaryReader): GreenplumMasterConfig;
}

export namespace GreenplumMasterConfig {
    export type AsObject = {
        logLevel: GreenplumMasterConfig.LogLevel,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        timezone?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }

    export enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    }

}

export class GreenplumSegmentConfig extends jspb.Message { 
    getLogLevel(): GreenplumSegmentConfig.LogLevel;
    setLogLevel(value: GreenplumSegmentConfig.LogLevel): GreenplumSegmentConfig;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumSegmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumSegmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumSegmentConfig): GreenplumSegmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumSegmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumSegmentConfig;
    static deserializeBinaryFromReader(message: GreenplumSegmentConfig, reader: jspb.BinaryReader): GreenplumSegmentConfig;
}

export namespace GreenplumSegmentConfig {
    export type AsObject = {
        logLevel: GreenplumSegmentConfig.LogLevel,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export enum LogLevel {
    LOG_LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFORMATION = 3,
    WARNING = 4,
    ERROR = 5,
    }

}

export class GreenplumMasterConfigSet extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): GreenplumMasterConfig | undefined;
    setEffectiveConfig(value?: GreenplumMasterConfig): GreenplumMasterConfigSet;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): GreenplumMasterConfig | undefined;
    setUserConfig(value?: GreenplumMasterConfig): GreenplumMasterConfigSet;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): GreenplumMasterConfig | undefined;
    setDefaultConfig(value?: GreenplumMasterConfig): GreenplumMasterConfigSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumMasterConfigSet.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumMasterConfigSet): GreenplumMasterConfigSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumMasterConfigSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumMasterConfigSet;
    static deserializeBinaryFromReader(message: GreenplumMasterConfigSet, reader: jspb.BinaryReader): GreenplumMasterConfigSet;
}

export namespace GreenplumMasterConfigSet {
    export type AsObject = {
        effectiveConfig?: GreenplumMasterConfig.AsObject,
        userConfig?: GreenplumMasterConfig.AsObject,
        defaultConfig?: GreenplumMasterConfig.AsObject,
    }
}

export class GreenplumSegmentConfigSet extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): GreenplumSegmentConfig | undefined;
    setEffectiveConfig(value?: GreenplumSegmentConfig): GreenplumSegmentConfigSet;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): GreenplumSegmentConfig | undefined;
    setUserConfig(value?: GreenplumSegmentConfig): GreenplumSegmentConfigSet;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): GreenplumSegmentConfig | undefined;
    setDefaultConfig(value?: GreenplumSegmentConfig): GreenplumSegmentConfigSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumSegmentConfigSet.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumSegmentConfigSet): GreenplumSegmentConfigSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumSegmentConfigSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumSegmentConfigSet;
    static deserializeBinaryFromReader(message: GreenplumSegmentConfigSet, reader: jspb.BinaryReader): GreenplumSegmentConfigSet;
}

export namespace GreenplumSegmentConfigSet {
    export type AsObject = {
        effectiveConfig?: GreenplumSegmentConfig.AsObject,
        userConfig?: GreenplumSegmentConfig.AsObject,
        defaultConfig?: GreenplumSegmentConfig.AsObject,
    }
}
