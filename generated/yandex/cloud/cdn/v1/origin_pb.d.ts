// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Origin extends jspb.Message { 
    getId(): number;
    setId(value: number): Origin;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): Origin;
    getSource(): string;
    setSource(value: string): Origin;
    getEnabled(): boolean;
    setEnabled(value: boolean): Origin;
    getBackup(): boolean;
    setBackup(value: boolean): Origin;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): OriginMeta | undefined;
    setMeta(value?: OriginMeta): Origin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Origin.AsObject;
    static toObject(includeInstance: boolean, msg: Origin): Origin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Origin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Origin;
    static deserializeBinaryFromReader(message: Origin, reader: jspb.BinaryReader): Origin;
}

export namespace Origin {
    export type AsObject = {
        id: number,
        originGroupId: number,
        source: string,
        enabled: boolean,
        backup: boolean,
        meta?: OriginMeta.AsObject,
    }
}

export class OriginParams extends jspb.Message { 
    getSource(): string;
    setSource(value: string): OriginParams;
    getEnabled(): boolean;
    setEnabled(value: boolean): OriginParams;
    getBackup(): boolean;
    setBackup(value: boolean): OriginParams;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): OriginMeta | undefined;
    setMeta(value?: OriginMeta): OriginParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OriginParams.AsObject;
    static toObject(includeInstance: boolean, msg: OriginParams): OriginParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginParams;
    static deserializeBinaryFromReader(message: OriginParams, reader: jspb.BinaryReader): OriginParams;
}

export namespace OriginParams {
    export type AsObject = {
        source: string,
        enabled: boolean,
        backup: boolean,
        meta?: OriginMeta.AsObject,
    }
}

export class OriginMeta extends jspb.Message { 

    hasCommon(): boolean;
    clearCommon(): void;
    getCommon(): OriginNamedMeta | undefined;
    setCommon(value?: OriginNamedMeta): OriginMeta;

    hasBucket(): boolean;
    clearBucket(): void;
    getBucket(): OriginNamedMeta | undefined;
    setBucket(value?: OriginNamedMeta): OriginMeta;

    hasWebsite(): boolean;
    clearWebsite(): void;
    getWebsite(): OriginNamedMeta | undefined;
    setWebsite(value?: OriginNamedMeta): OriginMeta;

    hasBalancer(): boolean;
    clearBalancer(): void;
    getBalancer(): OriginBalancerMeta | undefined;
    setBalancer(value?: OriginBalancerMeta): OriginMeta;

    getOriginMetaVariantCase(): OriginMeta.OriginMetaVariantCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OriginMeta.AsObject;
    static toObject(includeInstance: boolean, msg: OriginMeta): OriginMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginMeta;
    static deserializeBinaryFromReader(message: OriginMeta, reader: jspb.BinaryReader): OriginMeta;
}

export namespace OriginMeta {
    export type AsObject = {
        common?: OriginNamedMeta.AsObject,
        bucket?: OriginNamedMeta.AsObject,
        website?: OriginNamedMeta.AsObject,
        balancer?: OriginBalancerMeta.AsObject,
    }

    export enum OriginMetaVariantCase {
        ORIGIN_META_VARIANT_NOT_SET = 0,
        COMMON = 1,
        BUCKET = 2,
        WEBSITE = 3,
        BALANCER = 4,
    }

}

export class OriginNamedMeta extends jspb.Message { 
    getName(): string;
    setName(value: string): OriginNamedMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OriginNamedMeta.AsObject;
    static toObject(includeInstance: boolean, msg: OriginNamedMeta): OriginNamedMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginNamedMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginNamedMeta;
    static deserializeBinaryFromReader(message: OriginNamedMeta, reader: jspb.BinaryReader): OriginNamedMeta;
}

export namespace OriginNamedMeta {
    export type AsObject = {
        name: string,
    }
}

export class OriginBalancerMeta extends jspb.Message { 
    getId(): string;
    setId(value: string): OriginBalancerMeta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OriginBalancerMeta.AsObject;
    static toObject(includeInstance: boolean, msg: OriginBalancerMeta): OriginBalancerMeta.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginBalancerMeta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginBalancerMeta;
    static deserializeBinaryFromReader(message: OriginBalancerMeta, reader: jspb.BinaryReader): OriginBalancerMeta;
}

export namespace OriginBalancerMeta {
    export type AsObject = {
        id: string,
    }
}
