// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/versions_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_version_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/version_pb";

export class ListVersionsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListVersionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
    static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListVersionsResponse extends jspb.Message { 
    clearVersionList(): void;
    getVersionList(): Array<yandex_cloud_mdb_clickhouse_v1_version_pb.Version>;
    setVersionList(value: Array<yandex_cloud_mdb_clickhouse_v1_version_pb.Version>): ListVersionsResponse;
    addVersion(value?: yandex_cloud_mdb_clickhouse_v1_version_pb.Version, index?: number): yandex_cloud_mdb_clickhouse_v1_version_pb.Version;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListVersionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
    static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
    export type AsObject = {
        versionList: Array<yandex_cloud_mdb_clickhouse_v1_version_pb.Version.AsObject>,
        nextPageToken: string,
    }
}
