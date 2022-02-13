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

export class ConnectionPoolerConfig extends jspb.Message { 
    getMode(): ConnectionPoolerConfig.PoolMode;
    setMode(value: ConnectionPoolerConfig.PoolMode): ConnectionPoolerConfig;

    hasSize(): boolean;
    clearSize(): void;
    getSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSize(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionPoolerConfig;

    hasClientIdleTimeout(): boolean;
    clearClientIdleTimeout(): void;
    getClientIdleTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setClientIdleTimeout(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionPoolerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionPoolerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionPoolerConfig): ConnectionPoolerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionPoolerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionPoolerConfig;
    static deserializeBinaryFromReader(message: ConnectionPoolerConfig, reader: jspb.BinaryReader): ConnectionPoolerConfig;
}

export namespace ConnectionPoolerConfig {
    export type AsObject = {
        mode: ConnectionPoolerConfig.PoolMode,
        size?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        clientIdleTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }

    export enum PoolMode {
    POOL_MODE_UNSPECIFIED = 0,
    SESSION = 1,
    TRANSACTION = 2,
    }

}

export class MasterSubclusterConfig extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): MasterSubclusterConfig;

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
    }
}

export class SegmentSubclusterConfig extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): SegmentSubclusterConfig;

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
    }
}

export class GreenplumConfig6_17 extends jspb.Message { 

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasMaxSlotWalKeepSize(): boolean;
    clearMaxSlotWalKeepSize(): void;
    getMaxSlotWalKeepSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxSlotWalKeepSize(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasGpWorkfileLimitPerSegment(): boolean;
    clearGpWorkfileLimitPerSegment(): void;
    getGpWorkfileLimitPerSegment(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitPerSegment(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasGpWorkfileLimitPerQuery(): boolean;
    clearGpWorkfileLimitPerQuery(): void;
    getGpWorkfileLimitPerQuery(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitPerQuery(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasGpWorkfileLimitFilesPerQuery(): boolean;
    clearGpWorkfileLimitFilesPerQuery(): void;
    getGpWorkfileLimitFilesPerQuery(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitFilesPerQuery(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasMaxPreparedTransactions(): boolean;
    clearMaxPreparedTransactions(): void;
    getMaxPreparedTransactions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPreparedTransactions(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_17;

    hasGpWorkfileCompression(): boolean;
    clearGpWorkfileCompression(): void;
    getGpWorkfileCompression(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setGpWorkfileCompression(value?: google_protobuf_wrappers_pb.BoolValue): GreenplumConfig6_17;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumConfig6_17.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumConfig6_17): GreenplumConfig6_17.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumConfig6_17, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumConfig6_17;
    static deserializeBinaryFromReader(message: GreenplumConfig6_17, reader: jspb.BinaryReader): GreenplumConfig6_17;
}

export namespace GreenplumConfig6_17 {
    export type AsObject = {
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxSlotWalKeepSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitPerSegment?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitPerQuery?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitFilesPerQuery?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPreparedTransactions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileCompression?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GreenplumConfig6_19 extends jspb.Message { 

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasMaxSlotWalKeepSize(): boolean;
    clearMaxSlotWalKeepSize(): void;
    getMaxSlotWalKeepSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxSlotWalKeepSize(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasGpWorkfileLimitPerSegment(): boolean;
    clearGpWorkfileLimitPerSegment(): void;
    getGpWorkfileLimitPerSegment(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitPerSegment(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasGpWorkfileLimitPerQuery(): boolean;
    clearGpWorkfileLimitPerQuery(): void;
    getGpWorkfileLimitPerQuery(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitPerQuery(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasGpWorkfileLimitFilesPerQuery(): boolean;
    clearGpWorkfileLimitFilesPerQuery(): void;
    getGpWorkfileLimitFilesPerQuery(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setGpWorkfileLimitFilesPerQuery(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasMaxPreparedTransactions(): boolean;
    clearMaxPreparedTransactions(): void;
    getMaxPreparedTransactions(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxPreparedTransactions(value?: google_protobuf_wrappers_pb.Int64Value): GreenplumConfig6_19;

    hasGpWorkfileCompression(): boolean;
    clearGpWorkfileCompression(): void;
    getGpWorkfileCompression(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setGpWorkfileCompression(value?: google_protobuf_wrappers_pb.BoolValue): GreenplumConfig6_19;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumConfig6_19.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumConfig6_19): GreenplumConfig6_19.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumConfig6_19, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumConfig6_19;
    static deserializeBinaryFromReader(message: GreenplumConfig6_19, reader: jspb.BinaryReader): GreenplumConfig6_19;
}

export namespace GreenplumConfig6_19 {
    export type AsObject = {
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxSlotWalKeepSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitPerSegment?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitPerQuery?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileLimitFilesPerQuery?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxPreparedTransactions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        gpWorkfileCompression?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GreenplumConfigSet6_17 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): GreenplumConfig6_17 | undefined;
    setEffectiveConfig(value?: GreenplumConfig6_17): GreenplumConfigSet6_17;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): GreenplumConfig6_17 | undefined;
    setUserConfig(value?: GreenplumConfig6_17): GreenplumConfigSet6_17;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): GreenplumConfig6_17 | undefined;
    setDefaultConfig(value?: GreenplumConfig6_17): GreenplumConfigSet6_17;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumConfigSet6_17.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumConfigSet6_17): GreenplumConfigSet6_17.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumConfigSet6_17, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumConfigSet6_17;
    static deserializeBinaryFromReader(message: GreenplumConfigSet6_17, reader: jspb.BinaryReader): GreenplumConfigSet6_17;
}

export namespace GreenplumConfigSet6_17 {
    export type AsObject = {
        effectiveConfig?: GreenplumConfig6_17.AsObject,
        userConfig?: GreenplumConfig6_17.AsObject,
        defaultConfig?: GreenplumConfig6_17.AsObject,
    }
}

export class GreenplumConfigSet6_19 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): GreenplumConfig6_19 | undefined;
    setEffectiveConfig(value?: GreenplumConfig6_19): GreenplumConfigSet6_19;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): GreenplumConfig6_19 | undefined;
    setUserConfig(value?: GreenplumConfig6_19): GreenplumConfigSet6_19;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): GreenplumConfig6_19 | undefined;
    setDefaultConfig(value?: GreenplumConfig6_19): GreenplumConfigSet6_19;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumConfigSet6_19.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumConfigSet6_19): GreenplumConfigSet6_19.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumConfigSet6_19, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumConfigSet6_19;
    static deserializeBinaryFromReader(message: GreenplumConfigSet6_19, reader: jspb.BinaryReader): GreenplumConfigSet6_19;
}

export namespace GreenplumConfigSet6_19 {
    export type AsObject = {
        effectiveConfig?: GreenplumConfig6_19.AsObject,
        userConfig?: GreenplumConfig6_19.AsObject,
        defaultConfig?: GreenplumConfig6_19.AsObject,
    }
}

export class ConnectionPoolerConfigSet extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): ConnectionPoolerConfig | undefined;
    setEffectiveConfig(value?: ConnectionPoolerConfig): ConnectionPoolerConfigSet;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): ConnectionPoolerConfig | undefined;
    setUserConfig(value?: ConnectionPoolerConfig): ConnectionPoolerConfigSet;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): ConnectionPoolerConfig | undefined;
    setDefaultConfig(value?: ConnectionPoolerConfig): ConnectionPoolerConfigSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionPoolerConfigSet.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionPoolerConfigSet): ConnectionPoolerConfigSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionPoolerConfigSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionPoolerConfigSet;
    static deserializeBinaryFromReader(message: ConnectionPoolerConfigSet, reader: jspb.BinaryReader): ConnectionPoolerConfigSet;
}

export namespace ConnectionPoolerConfigSet {
    export type AsObject = {
        effectiveConfig?: ConnectionPoolerConfig.AsObject,
        userConfig?: ConnectionPoolerConfig.AsObject,
        defaultConfig?: ConnectionPoolerConfig.AsObject,
    }
}
