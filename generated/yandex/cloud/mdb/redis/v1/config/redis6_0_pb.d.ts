// package: yandex.cloud.mdb.redis.v1.config
// file: yandex/cloud/mdb/redis/v1/config/redis6_0.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class RedisConfig6_0 extends jspb.Message { 
    getMaxmemoryPolicy(): RedisConfig6_0.MaxmemoryPolicy;
    setMaxmemoryPolicy(value: RedisConfig6_0.MaxmemoryPolicy): RedisConfig6_0;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTimeout(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_0;
    getPassword(): string;
    setPassword(value: string): RedisConfig6_0;

    hasDatabases(): boolean;
    clearDatabases(): void;
    getDatabases(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDatabases(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_0;

    hasSlowlogLogSlowerThan(): boolean;
    clearSlowlogLogSlowerThan(): void;
    getSlowlogLogSlowerThan(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogLogSlowerThan(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_0;

    hasSlowlogMaxLen(): boolean;
    clearSlowlogMaxLen(): void;
    getSlowlogMaxLen(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogMaxLen(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_0;
    getNotifyKeyspaceEvents(): string;
    setNotifyKeyspaceEvents(value: string): RedisConfig6_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfig6_0.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfig6_0): RedisConfig6_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfig6_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfig6_0;
    static deserializeBinaryFromReader(message: RedisConfig6_0, reader: jspb.BinaryReader): RedisConfig6_0;
}

export namespace RedisConfig6_0 {
    export type AsObject = {
        maxmemoryPolicy: RedisConfig6_0.MaxmemoryPolicy,
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

export class RedisConfigSet6_0 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): RedisConfig6_0 | undefined;
    setEffectiveConfig(value?: RedisConfig6_0): RedisConfigSet6_0;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): RedisConfig6_0 | undefined;
    setUserConfig(value?: RedisConfig6_0): RedisConfigSet6_0;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): RedisConfig6_0 | undefined;
    setDefaultConfig(value?: RedisConfig6_0): RedisConfigSet6_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfigSet6_0.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfigSet6_0): RedisConfigSet6_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfigSet6_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfigSet6_0;
    static deserializeBinaryFromReader(message: RedisConfigSet6_0, reader: jspb.BinaryReader): RedisConfigSet6_0;
}

export namespace RedisConfigSet6_0 {
    export type AsObject = {
        effectiveConfig?: RedisConfig6_0.AsObject,
        userConfig?: RedisConfig6_0.AsObject,
        defaultConfig?: RedisConfig6_0.AsObject,
    }
}
