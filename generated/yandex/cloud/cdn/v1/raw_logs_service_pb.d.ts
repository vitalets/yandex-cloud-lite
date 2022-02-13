// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/raw_logs_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_raw_logs_pb from "../../../../yandex/cloud/cdn/v1/raw_logs_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ActivateRawLogsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): ActivateRawLogsRequest;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings | undefined;
    setSettings(value?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings): ActivateRawLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateRawLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateRawLogsRequest): ActivateRawLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateRawLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateRawLogsRequest;
    static deserializeBinaryFromReader(message: ActivateRawLogsRequest, reader: jspb.BinaryReader): ActivateRawLogsRequest;
}

export namespace ActivateRawLogsRequest {
    export type AsObject = {
        resourceId: string,
        settings?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings.AsObject,
    }
}

export class ActivateRawLogsMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): ActivateRawLogsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateRawLogsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateRawLogsMetadata): ActivateRawLogsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateRawLogsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateRawLogsMetadata;
    static deserializeBinaryFromReader(message: ActivateRawLogsMetadata, reader: jspb.BinaryReader): ActivateRawLogsMetadata;
}

export namespace ActivateRawLogsMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class ActivateRawLogsResponse extends jspb.Message { 
    getStatus(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus;
    setStatus(value: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus): ActivateRawLogsResponse;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings | undefined;
    setSettings(value?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings): ActivateRawLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateRawLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateRawLogsResponse): ActivateRawLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateRawLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateRawLogsResponse;
    static deserializeBinaryFromReader(message: ActivateRawLogsResponse, reader: jspb.BinaryReader): ActivateRawLogsResponse;
}

export namespace ActivateRawLogsResponse {
    export type AsObject = {
        status: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus,
        settings?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings.AsObject,
    }
}

export class DeactivateRawLogsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): DeactivateRawLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateRawLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateRawLogsRequest): DeactivateRawLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateRawLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateRawLogsRequest;
    static deserializeBinaryFromReader(message: DeactivateRawLogsRequest, reader: jspb.BinaryReader): DeactivateRawLogsRequest;
}

export namespace DeactivateRawLogsRequest {
    export type AsObject = {
        resourceId: string,
    }
}

export class DeactivateRawLogsMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): DeactivateRawLogsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateRawLogsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateRawLogsMetadata): DeactivateRawLogsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateRawLogsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateRawLogsMetadata;
    static deserializeBinaryFromReader(message: DeactivateRawLogsMetadata, reader: jspb.BinaryReader): DeactivateRawLogsMetadata;
}

export namespace DeactivateRawLogsMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class GetRawLogsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): GetRawLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRawLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRawLogsRequest): GetRawLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRawLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRawLogsRequest;
    static deserializeBinaryFromReader(message: GetRawLogsRequest, reader: jspb.BinaryReader): GetRawLogsRequest;
}

export namespace GetRawLogsRequest {
    export type AsObject = {
        resourceId: string,
    }
}

export class GetRawLogsResponse extends jspb.Message { 
    getStatus(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus;
    setStatus(value: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus): GetRawLogsResponse;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings | undefined;
    setSettings(value?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings): GetRawLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRawLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRawLogsResponse): GetRawLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRawLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRawLogsResponse;
    static deserializeBinaryFromReader(message: GetRawLogsResponse, reader: jspb.BinaryReader): GetRawLogsResponse;
}

export namespace GetRawLogsResponse {
    export type AsObject = {
        status: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus,
        settings?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings.AsObject,
    }
}

export class UpdateRawLogsRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateRawLogsRequest;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings | undefined;
    setSettings(value?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings): UpdateRawLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRawLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRawLogsRequest): UpdateRawLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRawLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRawLogsRequest;
    static deserializeBinaryFromReader(message: UpdateRawLogsRequest, reader: jspb.BinaryReader): UpdateRawLogsRequest;
}

export namespace UpdateRawLogsRequest {
    export type AsObject = {
        resourceId: string,
        settings?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings.AsObject,
    }
}

export class UpdateRawLogsResponse extends jspb.Message { 
    getStatus(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus;
    setStatus(value: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus): UpdateRawLogsResponse;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings | undefined;
    setSettings(value?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings): UpdateRawLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRawLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRawLogsResponse): UpdateRawLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRawLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRawLogsResponse;
    static deserializeBinaryFromReader(message: UpdateRawLogsResponse, reader: jspb.BinaryReader): UpdateRawLogsResponse;
}

export namespace UpdateRawLogsResponse {
    export type AsObject = {
        status: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsStatus,
        settings?: yandex_cloud_cdn_v1_raw_logs_pb.RawLogsSettings.AsObject,
    }
}

export class UpdateRawLogsMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateRawLogsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRawLogsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRawLogsMetadata): UpdateRawLogsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRawLogsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRawLogsMetadata;
    static deserializeBinaryFromReader(message: UpdateRawLogsMetadata, reader: jspb.BinaryReader): UpdateRawLogsMetadata;
}

export namespace UpdateRawLogsMetadata {
    export type AsObject = {
        resourceId: string,
    }
}
