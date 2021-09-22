// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_type_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_compute_v1_host_type_pb from "../../../../yandex/cloud/compute/v1/host_type_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetHostTypeRequest extends jspb.Message { 
    getHostTypeId(): string;
    setHostTypeId(value: string): GetHostTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHostTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHostTypeRequest): GetHostTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHostTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHostTypeRequest;
    static deserializeBinaryFromReader(message: GetHostTypeRequest, reader: jspb.BinaryReader): GetHostTypeRequest;
}

export namespace GetHostTypeRequest {
    export type AsObject = {
        hostTypeId: string,
    }
}

export class ListHostTypesRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListHostTypesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHostTypesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostTypesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostTypesRequest): ListHostTypesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostTypesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostTypesRequest;
    static deserializeBinaryFromReader(message: ListHostTypesRequest, reader: jspb.BinaryReader): ListHostTypesRequest;
}

export namespace ListHostTypesRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListHostTypesResponse extends jspb.Message { 
    clearHostTypesList(): void;
    getHostTypesList(): Array<yandex_cloud_compute_v1_host_type_pb.HostType>;
    setHostTypesList(value: Array<yandex_cloud_compute_v1_host_type_pb.HostType>): ListHostTypesResponse;
    addHostTypes(value?: yandex_cloud_compute_v1_host_type_pb.HostType, index?: number): yandex_cloud_compute_v1_host_type_pb.HostType;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHostTypesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostTypesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostTypesResponse): ListHostTypesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostTypesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostTypesResponse;
    static deserializeBinaryFromReader(message: ListHostTypesResponse, reader: jspb.BinaryReader): ListHostTypesResponse;
}

export namespace ListHostTypesResponse {
    export type AsObject = {
        hostTypesList: Array<yandex_cloud_compute_v1_host_type_pb.HostType.AsObject>,
        nextPageToken: string,
    }
}
