// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetOriginRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetOriginRequest;
    getOriginId(): number;
    setOriginId(value: number): GetOriginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOriginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOriginRequest): GetOriginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOriginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOriginRequest;
    static deserializeBinaryFromReader(message: GetOriginRequest, reader: jspb.BinaryReader): GetOriginRequest;
}

export namespace GetOriginRequest {
    export type AsObject = {
        folderId: string,
        originId: number,
    }
}

export class ListOriginsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListOriginsRequest;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): ListOriginsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginsRequest): ListOriginsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginsRequest;
    static deserializeBinaryFromReader(message: ListOriginsRequest, reader: jspb.BinaryReader): ListOriginsRequest;
}

export namespace ListOriginsRequest {
    export type AsObject = {
        folderId: string,
        originGroupId: number,
    }
}

export class ListOriginsResponse extends jspb.Message { 
    clearOriginsList(): void;
    getOriginsList(): Array<yandex_cloud_cdn_v1_origin_pb.Origin>;
    setOriginsList(value: Array<yandex_cloud_cdn_v1_origin_pb.Origin>): ListOriginsResponse;
    addOrigins(value?: yandex_cloud_cdn_v1_origin_pb.Origin, index?: number): yandex_cloud_cdn_v1_origin_pb.Origin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginsResponse): ListOriginsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginsResponse;
    static deserializeBinaryFromReader(message: ListOriginsResponse, reader: jspb.BinaryReader): ListOriginsResponse;
}

export namespace ListOriginsResponse {
    export type AsObject = {
        originsList: Array<yandex_cloud_cdn_v1_origin_pb.Origin.AsObject>,
    }
}

export class CreateOriginRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateOriginRequest;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): CreateOriginRequest;
    getSource(): string;
    setSource(value: string): CreateOriginRequest;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): CreateOriginRequest;

    hasBackup(): boolean;
    clearBackup(): void;
    getBackup(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setBackup(value?: google_protobuf_wrappers_pb.BoolValue): CreateOriginRequest;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): yandex_cloud_cdn_v1_origin_pb.OriginMeta | undefined;
    setMeta(value?: yandex_cloud_cdn_v1_origin_pb.OriginMeta): CreateOriginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOriginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOriginRequest): CreateOriginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOriginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOriginRequest;
    static deserializeBinaryFromReader(message: CreateOriginRequest, reader: jspb.BinaryReader): CreateOriginRequest;
}

export namespace CreateOriginRequest {
    export type AsObject = {
        folderId: string,
        originGroupId: number,
        source: string,
        enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        backup?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        meta?: yandex_cloud_cdn_v1_origin_pb.OriginMeta.AsObject,
    }
}

export class CreateOriginMetadata extends jspb.Message { 
    getOriginId(): number;
    setOriginId(value: number): CreateOriginMetadata;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): CreateOriginMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOriginMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOriginMetadata): CreateOriginMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOriginMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOriginMetadata;
    static deserializeBinaryFromReader(message: CreateOriginMetadata, reader: jspb.BinaryReader): CreateOriginMetadata;
}

export namespace CreateOriginMetadata {
    export type AsObject = {
        originId: number,
        originGroupId: number,
    }
}

export class UpdateOriginRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): UpdateOriginRequest;
    getOriginId(): number;
    setOriginId(value: number): UpdateOriginRequest;
    getSource(): string;
    setSource(value: string): UpdateOriginRequest;
    getEnabled(): boolean;
    setEnabled(value: boolean): UpdateOriginRequest;
    getBackup(): boolean;
    setBackup(value: boolean): UpdateOriginRequest;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): yandex_cloud_cdn_v1_origin_pb.OriginMeta | undefined;
    setMeta(value?: yandex_cloud_cdn_v1_origin_pb.OriginMeta): UpdateOriginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOriginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOriginRequest): UpdateOriginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOriginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOriginRequest;
    static deserializeBinaryFromReader(message: UpdateOriginRequest, reader: jspb.BinaryReader): UpdateOriginRequest;
}

export namespace UpdateOriginRequest {
    export type AsObject = {
        folderId: string,
        originId: number,
        source: string,
        enabled: boolean,
        backup: boolean,
        meta?: yandex_cloud_cdn_v1_origin_pb.OriginMeta.AsObject,
    }
}

export class UpdateOriginMetadata extends jspb.Message { 
    getOriginId(): number;
    setOriginId(value: number): UpdateOriginMetadata;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): UpdateOriginMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOriginMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOriginMetadata): UpdateOriginMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOriginMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOriginMetadata;
    static deserializeBinaryFromReader(message: UpdateOriginMetadata, reader: jspb.BinaryReader): UpdateOriginMetadata;
}

export namespace UpdateOriginMetadata {
    export type AsObject = {
        originId: number,
        originGroupId: number,
    }
}

export class DeleteOriginRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): DeleteOriginRequest;
    getOriginId(): number;
    setOriginId(value: number): DeleteOriginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOriginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOriginRequest): DeleteOriginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOriginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOriginRequest;
    static deserializeBinaryFromReader(message: DeleteOriginRequest, reader: jspb.BinaryReader): DeleteOriginRequest;
}

export namespace DeleteOriginRequest {
    export type AsObject = {
        folderId: string,
        originId: number,
    }
}

export class DeleteOriginMetadata extends jspb.Message { 
    getOriginId(): number;
    setOriginId(value: number): DeleteOriginMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOriginMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOriginMetadata): DeleteOriginMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOriginMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOriginMetadata;
    static deserializeBinaryFromReader(message: DeleteOriginMetadata, reader: jspb.BinaryReader): DeleteOriginMetadata;
}

export namespace DeleteOriginMetadata {
    export type AsObject = {
        originId: number,
    }
}
