// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/cache_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class PurgeCacheRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): PurgeCacheRequest;
    clearPathsList(): void;
    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): PurgeCacheRequest;
    addPaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurgeCacheRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PurgeCacheRequest): PurgeCacheRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurgeCacheRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurgeCacheRequest;
    static deserializeBinaryFromReader(message: PurgeCacheRequest, reader: jspb.BinaryReader): PurgeCacheRequest;
}

export namespace PurgeCacheRequest {
    export type AsObject = {
        resourceId: string,
        pathsList: Array<string>,
    }
}

export class PurgeCacheMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): PurgeCacheMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurgeCacheMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PurgeCacheMetadata): PurgeCacheMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurgeCacheMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurgeCacheMetadata;
    static deserializeBinaryFromReader(message: PurgeCacheMetadata, reader: jspb.BinaryReader): PurgeCacheMetadata;
}

export namespace PurgeCacheMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class PrefetchCacheRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): PrefetchCacheRequest;
    clearPathsList(): void;
    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): PrefetchCacheRequest;
    addPaths(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrefetchCacheRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrefetchCacheRequest): PrefetchCacheRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrefetchCacheRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrefetchCacheRequest;
    static deserializeBinaryFromReader(message: PrefetchCacheRequest, reader: jspb.BinaryReader): PrefetchCacheRequest;
}

export namespace PrefetchCacheRequest {
    export type AsObject = {
        resourceId: string,
        pathsList: Array<string>,
    }
}

export class PrefetchCacheMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): PrefetchCacheMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrefetchCacheMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PrefetchCacheMetadata): PrefetchCacheMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrefetchCacheMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrefetchCacheMetadata;
    static deserializeBinaryFromReader(message: PrefetchCacheMetadata, reader: jspb.BinaryReader): PrefetchCacheMetadata;
}

export namespace PrefetchCacheMetadata {
    export type AsObject = {
        resourceId: string,
    }
}
