// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/resource_preset_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ydb_v1_resource_preset_pb from "../../../../yandex/cloud/ydb/v1/resource_preset_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetResourcePresetRequest extends jspb.Message { 
    getResourcePresetId(): string;
    setResourcePresetId(value: string): GetResourcePresetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResourcePresetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetResourcePresetRequest): GetResourcePresetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResourcePresetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResourcePresetRequest;
    static deserializeBinaryFromReader(message: GetResourcePresetRequest, reader: jspb.BinaryReader): GetResourcePresetRequest;
}

export namespace GetResourcePresetRequest {
    export type AsObject = {
        resourcePresetId: string,
    }
}

export class ListResourcePresetsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListResourcePresetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListResourcePresetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcePresetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcePresetsRequest): ListResourcePresetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcePresetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcePresetsRequest;
    static deserializeBinaryFromReader(message: ListResourcePresetsRequest, reader: jspb.BinaryReader): ListResourcePresetsRequest;
}

export namespace ListResourcePresetsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListResourcePresetsResponse extends jspb.Message { 
    clearResourcePresetsList(): void;
    getResourcePresetsList(): Array<yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset>;
    setResourcePresetsList(value: Array<yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset>): ListResourcePresetsResponse;
    addResourcePresets(value?: yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset, index?: number): yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListResourcePresetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcePresetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcePresetsResponse): ListResourcePresetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcePresetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcePresetsResponse;
    static deserializeBinaryFromReader(message: ListResourcePresetsResponse, reader: jspb.BinaryReader): ListResourcePresetsResponse;
}

export namespace ListResourcePresetsResponse {
    export type AsObject = {
        resourcePresetsList: Array<yandex_cloud_ydb_v1_resource_preset_pb.ResourcePreset.AsObject>,
        nextPageToken: string,
    }
}
