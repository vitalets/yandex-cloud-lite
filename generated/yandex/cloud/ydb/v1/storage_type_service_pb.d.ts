// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/storage_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ydb_v1_storage_type_pb from "../../../../yandex/cloud/ydb/v1/storage_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetStorageTypeRequest extends jspb.Message { 
    getStorageTypeId(): string;
    setStorageTypeId(value: string): GetStorageTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStorageTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStorageTypeRequest): GetStorageTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStorageTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStorageTypeRequest;
    static deserializeBinaryFromReader(message: GetStorageTypeRequest, reader: jspb.BinaryReader): GetStorageTypeRequest;
}

export namespace GetStorageTypeRequest {
    export type AsObject = {
        storageTypeId: string,
    }
}

export class ListStorageTypesRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListStorageTypesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListStorageTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStorageTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStorageTypesRequest): ListStorageTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStorageTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStorageTypesRequest;
    static deserializeBinaryFromReader(message: ListStorageTypesRequest, reader: jspb.BinaryReader): ListStorageTypesRequest;
}

export namespace ListStorageTypesRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListStorageTypesResponse extends jspb.Message { 
    clearStorageTypesList(): void;
    getStorageTypesList(): Array<yandex_cloud_ydb_v1_storage_type_pb.StorageType>;
    setStorageTypesList(value: Array<yandex_cloud_ydb_v1_storage_type_pb.StorageType>): ListStorageTypesResponse;
    addStorageTypes(value?: yandex_cloud_ydb_v1_storage_type_pb.StorageType, index?: number): yandex_cloud_ydb_v1_storage_type_pb.StorageType;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListStorageTypesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStorageTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStorageTypesResponse): ListStorageTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStorageTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStorageTypesResponse;
    static deserializeBinaryFromReader(message: ListStorageTypesResponse, reader: jspb.BinaryReader): ListStorageTypesResponse;
}

export namespace ListStorageTypesResponse {
    export type AsObject = {
        storageTypesList: Array<yandex_cloud_ydb_v1_storage_type_pb.StorageType.AsObject>,
        nextPageToken: string,
    }
}
