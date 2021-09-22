// package: yandex.cloud.mdb.redis.v1.config
// file: yandex/cloud/mdb/redis/v1/config/redis6_2.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class RedisConfig6_2 extends jspb.Message { 
    getMaxmemoryPolicy(): RedisConfig6_2.MaxmemoryPolicy;
    setMaxmemoryPolicy(value: RedisConfig6_2.MaxmemoryPolicy): RedisConfig6_2;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTimeout(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_2;
    getPassword(): string;
    setPassword(value: string): RedisConfig6_2;

    hasDatabases(): boolean;
    clearDatabases(): void;
    getDatabases(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setDatabases(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_2;

    hasSlowlogLogSlowerThan(): boolean;
    clearSlowlogLogSlowerThan(): void;
    getSlowlogLogSlowerThan(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogLogSlowerThan(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_2;

    hasSlowlogMaxLen(): boolean;
    clearSlowlogMaxLen(): void;
    getSlowlogMaxLen(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSlowlogMaxLen(value?: google_protobuf_wrappers_pb.Int64Value): RedisConfig6_2;
    getNotifyKeyspaceEvents(): string;
    setNotifyKeyspaceEvents(value: string): RedisConfig6_2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfig6_2.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfig6_2): RedisConfig6_2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfig6_2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfig6_2;
    static deserializeBinaryFromReader(message: RedisConfig6_2, reader: jspb.BinaryReader): RedisConfig6_2;
}

export namespace RedisConfig6_2 {
    export type AsObject = {
        maxmemoryPolicy: RedisConfig6_2.MaxmemoryPolicy,
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

export class RedisConfigSet6_2 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): RedisConfig6_2 | undefined;
    setEffectiveConfig(value?: RedisConfig6_2): RedisConfigSet6_2;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): RedisConfig6_2 | undefined;
    setUserConfig(value?: RedisConfig6_2): RedisConfigSet6_2;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): RedisConfig6_2 | undefined;
    setDefaultConfig(value?: RedisConfig6_2): RedisConfigSet6_2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisConfigSet6_2.AsObject;
    static toObject(includeInstance: boolean, msg: RedisConfigSet6_2): RedisConfigSet6_2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisConfigSet6_2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisConfigSet6_2;
    static deserializeBinaryFromReader(message: RedisConfigSet6_2, reader: jspb.BinaryReader): RedisConfigSet6_2;
}

export namespace RedisConfigSet6_2 {
    export type AsObject = {
        effectiveConfig?: RedisConfig6_2.AsObject,
        userConfig?: RedisConfig6_2.AsObject,
        defaultConfig?: RedisConfig6_2.AsObject,
    }
}
