// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/scanner_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_scanner_pb from "../../../../yandex/cloud/containerregistry/v1/scanner_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ScanRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): ScanRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScanRequest): ScanRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanRequest;
    static deserializeBinaryFromReader(message: ScanRequest, reader: jspb.BinaryReader): ScanRequest;
}

export namespace ScanRequest {
    export type AsObject = {
        imageId: string,
    }
}

export class ScanMetadata extends jspb.Message { 
    getScanResultId(): string;
    setScanResultId(value: string): ScanMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ScanMetadata): ScanMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanMetadata;
    static deserializeBinaryFromReader(message: ScanMetadata, reader: jspb.BinaryReader): ScanMetadata;
}

export namespace ScanMetadata {
    export type AsObject = {
        scanResultId: string,
    }
}

export class GetScanResultRequest extends jspb.Message { 
    getScanResultId(): string;
    setScanResultId(value: string): GetScanResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetScanResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetScanResultRequest): GetScanResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetScanResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetScanResultRequest;
    static deserializeBinaryFromReader(message: GetScanResultRequest, reader: jspb.BinaryReader): GetScanResultRequest;
}

export namespace GetScanResultRequest {
    export type AsObject = {
        scanResultId: string,
    }
}

export class GetLastScanResultRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): GetLastScanResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastScanResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastScanResultRequest): GetLastScanResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastScanResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastScanResultRequest;
    static deserializeBinaryFromReader(message: GetLastScanResultRequest, reader: jspb.BinaryReader): GetLastScanResultRequest;
}

export namespace GetLastScanResultRequest {
    export type AsObject = {
        imageId: string,
    }
}

export class ListScanResultsRequest extends jspb.Message { 

    hasImageId(): boolean;
    clearImageId(): void;
    getImageId(): string;
    setImageId(value: string): ListScanResultsRequest;

    hasRepositoryId(): boolean;
    clearRepositoryId(): void;
    getRepositoryId(): string;
    setRepositoryId(value: string): ListScanResultsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListScanResultsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListScanResultsRequest;
    getFilter(): string;
    setFilter(value: string): ListScanResultsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListScanResultsRequest;

    getIdCase(): ListScanResultsRequest.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScanResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScanResultsRequest): ListScanResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScanResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScanResultsRequest;
    static deserializeBinaryFromReader(message: ListScanResultsRequest, reader: jspb.BinaryReader): ListScanResultsRequest;
}

export namespace ListScanResultsRequest {
    export type AsObject = {
        imageId: string,
        repositoryId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        IMAGE_ID = 1,
        REPOSITORY_ID = 2,
    }

}

export class ListScanResultsResponse extends jspb.Message { 
    clearScanResultsList(): void;
    getScanResultsList(): Array<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>;
    setScanResultsList(value: Array<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult>): ListScanResultsResponse;
    addScanResults(value?: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult, index?: number): yandex_cloud_containerregistry_v1_scanner_pb.ScanResult;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListScanResultsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScanResultsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListScanResultsResponse): ListScanResultsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScanResultsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScanResultsResponse;
    static deserializeBinaryFromReader(message: ListScanResultsResponse, reader: jspb.BinaryReader): ListScanResultsResponse;
}

export namespace ListScanResultsResponse {
    export type AsObject = {
        scanResultsList: Array<yandex_cloud_containerregistry_v1_scanner_pb.ScanResult.AsObject>,
        nextPageToken: string,
    }
}

export class ListVulnerabilitiesRequest extends jspb.Message { 
    getScanResultId(): string;
    setScanResultId(value: string): ListVulnerabilitiesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListVulnerabilitiesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListVulnerabilitiesRequest;
    getFilter(): string;
    setFilter(value: string): ListVulnerabilitiesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListVulnerabilitiesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVulnerabilitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVulnerabilitiesRequest): ListVulnerabilitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVulnerabilitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVulnerabilitiesRequest;
    static deserializeBinaryFromReader(message: ListVulnerabilitiesRequest, reader: jspb.BinaryReader): ListVulnerabilitiesRequest;
}

export namespace ListVulnerabilitiesRequest {
    export type AsObject = {
        scanResultId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListVulnerabilitiesResponse extends jspb.Message { 
    clearVulnerabilitiesList(): void;
    getVulnerabilitiesList(): Array<yandex_cloud_containerregistry_v1_scanner_pb.Vulnerability>;
    setVulnerabilitiesList(value: Array<yandex_cloud_containerregistry_v1_scanner_pb.Vulnerability>): ListVulnerabilitiesResponse;
    addVulnerabilities(value?: yandex_cloud_containerregistry_v1_scanner_pb.Vulnerability, index?: number): yandex_cloud_containerregistry_v1_scanner_pb.Vulnerability;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListVulnerabilitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVulnerabilitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVulnerabilitiesResponse): ListVulnerabilitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVulnerabilitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVulnerabilitiesResponse;
    static deserializeBinaryFromReader(message: ListVulnerabilitiesResponse, reader: jspb.BinaryReader): ListVulnerabilitiesResponse;
}

export namespace ListVulnerabilitiesResponse {
    export type AsObject = {
        vulnerabilitiesList: Array<yandex_cloud_containerregistry_v1_scanner_pb.Vulnerability.AsObject>,
        nextPageToken: string,
    }
}
