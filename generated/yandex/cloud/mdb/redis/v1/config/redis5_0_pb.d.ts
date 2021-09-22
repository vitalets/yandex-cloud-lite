// package: yandex.cloud.mdb.redis.v1.config
// file: yandex/cloud/mdb/redis/v1/config/redis5_0.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class RedisConfig5_0 extends jspb.Message { 
    getMaxmemoryPolicy(): RedisConfig5_0.MaxmemoryPolicy;
    setMaxmemoryPolicy(value: RedisConfig5_0.MaxmemoryPolicy): RedisConfig5_0;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTimeout(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig5_0;
    getPassword(): string;
    setPassword(value: string): RedisConfig5_0;

    hasDatabases(): boolean;
    clearDatabases(): void;
    getDatabases(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDatabases(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig5_0;

    hasSlowlogLogSlowerThan(): boolean;
    clearSlowlogLogSlowerThan(): void;
    getSlowlogLogSlowerThan(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogLogSlowerThan(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig5_0;

    hasSlowlogMaxLen(): boolean;
    clearSlowlogMaxLen(): void;
    getSlowlogMaxLen(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogMaxLen(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig5_0;
    getNotifyKeyspaceEvents(): string;
    setNotifyKeyspaceEvents(value: string): RedisConfig5_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfig5_0.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfig5_0): RedisConfig5_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfig5_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfig5_0;
    static deserializeBinaryFromReader(message: RedisConfig5_0, reader: jspb.BinaryReader): RedisConfig5_0;
}

export namespace RedisConfig5_0 {
    export type AsObject = {
        maxmemoryPolicy: RedisConfig5_0.MaxmemoryPolicy,
        timeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        password: string,
        databases?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        slowlogLogSlowerThan?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        slowlogMaxLen?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        notifyKeyspaceEvents: string,
    }

    export enum MaxmemoryPolicy {
    MAXMEMORY_POLICY_UNSPECIFIED = 0,
    VOLATILE_LRU = 1,
    ALLKEYS_LRU = 2,
    VOLATILE_LFU = 3,
    ALLKEYS_LFU = 4,
    VOLATILE_RANDOM = 5,
    ALLKEYS_RANDOM = 6,
    VOLATILE_TTL = 7,
    NOEVICTION = 8,
    }

}

export class RedisConfigSet5_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): RedisConfig5_0 | undefined;
    setEffectiveConfig(value?: RedisConfig5_0): RedisConfigSet5_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): RedisConfig5_0 | undefined;
    setUserConfig(value?: RedisConfig5_0): RedisConfigSet5_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): RedisConfig5_0 | undefined;
    setDefaultConfig(value?: RedisConfig5_0): RedisConfigSet5_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfigSet5_0.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfigSet5_0): RedisConfigSet5_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfigSet5_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfigSet5_0;
    static deserializeBinaryFromReader(message: RedisConfigSet5_0, reader: jspb.BinaryReader): RedisConfigSet5_0;
}

export namespace RedisConfigSet5_0 {
    export type AsObject = {
        effectiveConfig?: RedisConfig5_0.AsObject,
        userConfig?: RedisConfig5_0.AsObject,
        defaultConfig?: RedisConfig5_0.AsObject,
    }
}
