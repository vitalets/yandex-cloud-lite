// package: yandex.cloud.mdb.redis.v1
// file: yandex/cloud/mdb/redis/v1/backup_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_redis_v1_backup_pb from "../../../../../yandex/cloud/mdb/redis/v1/backup_pb";

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
    getBackupsList(): Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup>;
    setBackupsList(value: Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup>): ListBackupsResponse;
    addBackups(value?: yandex_cloud_mdb_redis_v1_backup_pb.Backup, index?: number): yandex_cloud_mdb_redis_v1_backup_pb.Backup;
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
        backupsList: Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup.AsObject>,
        nextPageToken: string,
    }
}
