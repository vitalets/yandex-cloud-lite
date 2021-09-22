// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/database_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_database_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/database_pb";

export class GetDatabaseRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetDatabaseRequest;
    getDatabaseName(): string;
    setDatabaseName(value: string): GetDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatabaseRequest): GetDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatabaseRequest;
    static deserializeBinaryFromReader(message: GetDatabaseRequest, reader: jspb.BinaryReader): GetDatabaseRequest;
}

export namespace GetDatabaseRequest {
    export type AsObject = {
        clusterId: string,
        databaseName: string,
    }
}

export class ListDatabasesRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListDatabasesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDatabasesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDatabasesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatabasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatabasesRequest): ListDatabasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatabasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatabasesRequest;
    static deserializeBinaryFromReader(message: ListDatabasesRequest, reader: jspb.BinaryReader): ListDatabasesRequest;
}

export namespace ListDatabasesRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDatabasesResponse extends jspb.Message { 
    clearDatabasesList(): void;
    getDatabasesList(): Array<yandex_cloud_mdb_clickhouse_v1_database_pb.Database>;
    setDatabasesList(value: Array<yandex_cloud_mdb_clickhouse_v1_database_pb.Database>): ListDatabasesResponse;
    addDatabases(value?: yandex_cloud_mdb_clickhouse_v1_database_pb.Database, index?: number): yandex_cloud_mdb_clickhouse_v1_database_pb.Database;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDatabasesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDatabasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDatabasesResponse): ListDatabasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDatabasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDatabasesResponse;
    static deserializeBinaryFromReader(message: ListDatabasesResponse, reader: jspb.BinaryReader): ListDatabasesResponse;
}

export namespace ListDatabasesResponse {
    export type AsObject = {
        databasesList: Array<yandex_cloud_mdb_clickhouse_v1_database_pb.Database.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDatabaseRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateDatabaseRequest;

    hasDatabaseSpec(): boolean;
    clearDatabaseSpec(): void;
    getDatabaseSpec(): yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec | undefined;
    setDatabaseSpec(value?: yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec): CreateDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDatabaseRequest): CreateDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDatabaseRequest;
    static deserializeBinaryFromReader(message: CreateDatabaseRequest, reader: jspb.BinaryReader): CreateDatabaseRequest;
}

export namespace CreateDatabaseRequest {
    export type AsObject = {
        clusterId: string,
        databaseSpec?: yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec.AsObject,
    }
}

export class CreateDatabaseMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateDatabaseMetadata;
    getDatabaseName(): string;
    setDatabaseName(value: string): CreateDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDatabaseMetadata): CreateDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDatabaseMetadata;
    static deserializeBinaryFromReader(message: CreateDatabaseMetadata, reader: jspb.BinaryReader): CreateDatabaseMetadata;
}

export namespace CreateDatabaseMetadata {
    export type AsObject = {
        clusterId: string,
        databaseName: string,
    }
}

export class DeleteDatabaseRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteDatabaseRequest;
    getDatabaseName(): string;
    setDatabaseName(value: string): DeleteDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatabaseRequest): DeleteDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatabaseRequest;
    static deserializeBinaryFromReader(message: DeleteDatabaseRequest, reader: jspb.BinaryReader): DeleteDatabaseRequest;
}

export namespace DeleteDatabaseRequest {
    export type AsObject = {
        clusterId: string,
        databaseName: string,
    }
}

export class DeleteDatabaseMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteDatabaseMetadata;
    getDatabaseName(): string;
    setDatabaseName(value: string): DeleteDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDatabaseMetadata): DeleteDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDatabaseMetadata;
    static deserializeBinaryFromReader(message: DeleteDatabaseMetadata, reader: jspb.BinaryReader): DeleteDatabaseMetadata;
}

export namespace DeleteDatabaseMetadata {
    export type AsObject = {
        clusterId: string,
        databaseName: string,
    }
}
