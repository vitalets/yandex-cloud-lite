// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_compute_v1_disk_type_pb from "../../../../yandex/cloud/compute/v1/disk_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetDiskTypeRequest extends jspb.Message { 
    getDiskTypeId(): string;
    setDiskTypeId(value: string): GetDiskTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDiskTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDiskTypeRequest): GetDiskTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDiskTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDiskTypeRequest;
    static deserializeBinaryFromReader(message: GetDiskTypeRequest, reader: jspb.BinaryReader): GetDiskTypeRequest;
}

export namespace GetDiskTypeRequest {
    export type AsObject = {
        diskTypeId: string,
    }
}

export class ListDiskTypesRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListDiskTypesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDiskTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskTypesRequest): ListDiskTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskTypesRequest;
    static deserializeBinaryFromReader(message: ListDiskTypesRequest, reader: jspb.BinaryReader): ListDiskTypesRequest;
}

export namespace ListDiskTypesRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListDiskTypesResponse extends jspb.Message { 
    clearDiskTypesList(): void;
    getDiskTypesList(): Array<yandex_cloud_compute_v1_disk_type_pb.DiskType>;
    setDiskTypesList(value: Array<yandex_cloud_compute_v1_disk_type_pb.DiskType>): ListDiskTypesResponse;
    addDiskTypes(value?: yandex_cloud_compute_v1_disk_type_pb.DiskType, index?: number): yandex_cloud_compute_v1_disk_type_pb.DiskType;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDiskTypesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskTypesResponse): ListDiskTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskTypesResponse;
    static deserializeBinaryFromReader(message: ListDiskTypesResponse, reader: jspb.BinaryReader): ListDiskTypesResponse;
}

export namespace ListDiskTypesResponse {
    export type AsObject = {
        diskTypesList: Array<yandex_cloud_compute_v1_disk_type_pb.DiskType.AsObject>,
        nextPageToken: string,
    }
}
