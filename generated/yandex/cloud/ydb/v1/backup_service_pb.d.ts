// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/backup_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ydb_v1_backup_pb from "../../../../yandex/cloud/ydb/v1/backup_pb";

export class ListPathsRequest extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): ListPathsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListPathsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListPathsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPathsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPathsRequest): ListPathsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPathsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPathsRequest;
    static deserializeBinaryFromReader(message: ListPathsRequest, reader: jspb.BinaryReader): ListPathsRequest;
}

export namespace ListPathsRequest {
    export type AsObject = {
        backupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListPathsResponse extends jspb.Message { 
    clearPathsList(): void;
    getPathsList(): Array<string>;
    setPathsList(value: Array<string>): ListPathsResponse;
    addPaths(value: string, index?: number): string;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListPathsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPathsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPathsResponse): ListPathsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPathsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPathsResponse;
    static deserializeBinaryFromReader(message: ListPathsResponse, reader: jspb.BinaryReader): ListPathsResponse;
}

export namespace ListPathsResponse {
    export type AsObject = {
        pathsList: Array<string>,
        nextPageToken: string,
    }
}

export class GetBackupRequest extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): GetBackupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBackupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBackupRequest): GetBackupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBackupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBackupRequest;
    static deserializeBinaryFromReader(message: GetBackupRequest, reader: jspb.BinaryReader): GetBackupRequest;
}

export namespace GetBackupRequest {
    export type AsObject = {
        backupId: string,
    }
}

export class ListBackupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListBackupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListBackupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBackupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackupsRequest): ListBackupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackupsRequest;
    static deserializeBinaryFromReader(message: ListBackupsRequest, reader: jspb.BinaryReader): ListBackupsRequest;
}

export namespace ListBackupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListBackupsResponse extends jspb.Message { 
    clearBackupsList(): void;
    getBackupsList(): Array<yandex_cloud_ydb_v1_backup_pb.Backup>;
    setBackupsList(value: Array<yandex_cloud_ydb_v1_backup_pb.Backup>): ListBackupsResponse;
    addBackups(value?: yandex_cloud_ydb_v1_backup_pb.Backup, index?: number): yandex_cloud_ydb_v1_backup_pb.Backup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBackupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackupsResponse): ListBackupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackupsResponse;
    static deserializeBinaryFromReader(message: ListBackupsResponse, reader: jspb.BinaryReader): ListBackupsResponse;
}

export namespace ListBackupsResponse {
    export type AsObject = {
        backupsList: Array<yandex_cloud_ydb_v1_backup_pb.Backup.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteBackupRequest extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): DeleteBackupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBackupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBackupRequest): DeleteBackupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBackupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBackupRequest;
    static deserializeBinaryFromReader(message: DeleteBackupRequest, reader: jspb.BinaryReader): DeleteBackupRequest;
}

export namespace DeleteBackupRequest {
    export type AsObject = {
        backupId: string,
    }
}

export class DeleteBackupMetadata extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): DeleteBackupMetadata;
    getDatabaseId(): string;
    setDatabaseId(value: string): DeleteBackupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBackupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBackupMetadata): DeleteBackupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBackupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBackupMetadata;
    static deserializeBinaryFromReader(message: DeleteBackupMetadata, reader: jspb.BinaryReader): DeleteBackupMetadata;
}

export namespace DeleteBackupMetadata {
    export type AsObject = {
        backupId: string,
        databaseId: string,
    }
}
