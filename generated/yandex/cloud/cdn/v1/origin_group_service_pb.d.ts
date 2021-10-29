// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_cdn_v1_origin_group_pb from "../../../../yandex/cloud/cdn/v1/origin_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetOriginGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetOriginGroupRequest;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): GetOriginGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOriginGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOriginGroupRequest): GetOriginGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOriginGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOriginGroupRequest;
    static deserializeBinaryFromReader(message: GetOriginGroupRequest, reader: jspb.BinaryReader): GetOriginGroupRequest;
}

export namespace GetOriginGroupRequest {
    export type AsObject = {
        folderId: string,
        originGroupId: number,
    }
}

export class ListOriginGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListOriginGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListOriginGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOriginGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginGroupsRequest): ListOriginGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginGroupsRequest;
    static deserializeBinaryFromReader(message: ListOriginGroupsRequest, reader: jspb.BinaryReader): ListOriginGroupsRequest;
}

export namespace ListOriginGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListOriginGroupsResponse extends jspb.Message { 
    clearOriginGroupsList(): void;
    getOriginGroupsList(): Array<yandex_cloud_cdn_v1_origin_group_pb.OriginGroup>;
    setOriginGroupsList(value: Array<yandex_cloud_cdn_v1_origin_group_pb.OriginGroup>): ListOriginGroupsResponse;
    addOriginGroups(value?: yandex_cloud_cdn_v1_origin_group_pb.OriginGroup, index?: number): yandex_cloud_cdn_v1_origin_group_pb.OriginGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOriginGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOriginGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOriginGroupsResponse): ListOriginGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOriginGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOriginGroupsResponse;
    static deserializeBinaryFromReader(message: ListOriginGroupsResponse, reader: jspb.BinaryReader): ListOriginGroupsResponse;
}

export namespace ListOriginGroupsResponse {
    export type AsObject = {
        originGroupsList: Array<yandex_cloud_cdn_v1_origin_group_pb.OriginGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateOriginGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateOriginGroupRequest;
    getName(): string;
    setName(value: string): CreateOriginGroupRequest;

    hasUseNext(): boolean;
    clearUseNext(): void;
    getUseNext(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseNext(value?: google_protobuf_wrappers_pb.BoolValue): CreateOriginGroupRequest;
    clearOriginsList(): void;
    getOriginsList(): Array<yandex_cloud_cdn_v1_origin_pb.OriginParams>;
    setOriginsList(value: Array<yandex_cloud_cdn_v1_origin_pb.OriginParams>): CreateOriginGroupRequest;
    addOrigins(value?: yandex_cloud_cdn_v1_origin_pb.OriginParams, index?: number): yandex_cloud_cdn_v1_origin_pb.OriginParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOriginGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOriginGroupRequest): CreateOriginGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOriginGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOriginGroupRequest;
    static deserializeBinaryFromReader(message: CreateOriginGroupRequest, reader: jspb.BinaryReader): CreateOriginGroupRequest;
}

export namespace CreateOriginGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        useNext?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        originsList: Array<yandex_cloud_cdn_v1_origin_pb.OriginParams.AsObject>,
    }
}

export class CreateOriginGroupMetadata extends jspb.Message { 
    getOriginGroupId(): number;
    setOriginGroupId(value: number): CreateOriginGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOriginGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOriginGroupMetadata): CreateOriginGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOriginGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOriginGroupMetadata;
    static deserializeBinaryFromReader(message: CreateOriginGroupMetadata, reader: jspb.BinaryReader): CreateOriginGroupMetadata;
}

export namespace CreateOriginGroupMetadata {
    export type AsObject = {
        originGroupId: number,
    }
}

export class UpdateOriginGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): UpdateOriginGroupRequest;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): UpdateOriginGroupRequest;

    hasGroupName(): boolean;
    clearGroupName(): void;
    getGroupName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setGroupName(value?: google_protobuf_wrappers_pb.StringValue): UpdateOriginGroupRequest;

    hasUseNext(): boolean;
    clearUseNext(): void;
    getUseNext(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setUseNext(value?: google_protobuf_wrappers_pb.BoolValue): UpdateOriginGroupRequest;
    clearOriginsList(): void;
    getOriginsList(): Array<yandex_cloud_cdn_v1_origin_pb.OriginParams>;
    setOriginsList(value: Array<yandex_cloud_cdn_v1_origin_pb.OriginParams>): UpdateOriginGroupRequest;
    addOrigins(value?: yandex_cloud_cdn_v1_origin_pb.OriginParams, index?: number): yandex_cloud_cdn_v1_origin_pb.OriginParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOriginGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOriginGroupRequest): UpdateOriginGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOriginGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOriginGroupRequest;
    static deserializeBinaryFromReader(message: UpdateOriginGroupRequest, reader: jspb.BinaryReader): UpdateOriginGroupRequest;
}

export namespace UpdateOriginGroupRequest {
    export type AsObject = {
        folderId: string,
        originGroupId: number,
        groupName?: google_protobuf_wrappers_pb.StringValue.AsObject,
        useNext?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        originsList: Array<yandex_cloud_cdn_v1_origin_pb.OriginParams.AsObject>,
    }
}

export class UpdateOriginGroupMetadata extends jspb.Message { 
    getOriginGroupId(): number;
    setOriginGroupId(value: number): UpdateOriginGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOriginGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOriginGroupMetadata): UpdateOriginGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOriginGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOriginGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateOriginGroupMetadata, reader: jspb.BinaryReader): UpdateOriginGroupMetadata;
}

export namespace UpdateOriginGroupMetadata {
    export type AsObject = {
        originGroupId: number,
    }
}

export class DeleteOriginGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): DeleteOriginGroupRequest;
    getOriginGroupId(): number;
    setOriginGroupId(value: number): DeleteOriginGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOriginGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOriginGroupRequest): DeleteOriginGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOriginGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOriginGroupRequest;
    static deserializeBinaryFromReader(message: DeleteOriginGroupRequest, reader: jspb.BinaryReader): DeleteOriginGroupRequest;
}

export namespace DeleteOriginGroupRequest {
    export type AsObject = {
        folderId: string,
        originGroupId: number,
    }
}

export class DeleteOriginGroupMetadata extends jspb.Message { 
    getOriginGroupId(): number;
    setOriginGroupId(value: number): DeleteOriginGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteOriginGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteOriginGroupMetadata): DeleteOriginGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteOriginGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteOriginGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteOriginGroupMetadata, reader: jspb.BinaryReader): DeleteOriginGroupMetadata;
}

export namespace DeleteOriginGroupMetadata {
    export type AsObject = {
        originGroupId: number,
    }
}
