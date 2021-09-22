// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/database_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ydb_v1_database_pb from "../../../../yandex/cloud/ydb/v1/database_pb";
import * as yandex_cloud_ydb_v1_backup_pb from "../../../../yandex/cloud/ydb/v1/backup_pb";

export class RestoreBackupRequest extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): RestoreBackupRequest;
    getDatabaseId(): string;
    setDatabaseId(value: string): RestoreBackupRequest;
    clearPathsToRestoreList(): void;
    getPathsToRestoreList(): Array<string>;
    setPathsToRestoreList(value: Array<string>): RestoreBackupRequest;
    addPathsToRestore(value: string, index?: number): string;
    getTargetPath(): string;
    setTargetPath(value: string): RestoreBackupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreBackupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreBackupRequest): RestoreBackupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreBackupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreBackupRequest;
    static deserializeBinaryFromReader(message: RestoreBackupRequest, reader: jspb.BinaryReader): RestoreBackupRequest;
}

export namespace RestoreBackupRequest {
    export type AsObject = {
        backupId: string,
        databaseId: string,
        pathsToRestoreList: Array<string>,
        targetPath: string,
    }
}

export class RestoreBackupMetadata extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): RestoreBackupMetadata;
    getDatabaseId(): string;
    setDatabaseId(value: string): RestoreBackupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreBackupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreBackupMetadata): RestoreBackupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreBackupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreBackupMetadata;
    static deserializeBinaryFromReader(message: RestoreBackupMetadata, reader: jspb.BinaryReader): RestoreBackupMetadata;
}

export namespace RestoreBackupMetadata {
    export type AsObject = {
        backupId: string,
        databaseId: string,
    }
}

export class BackupDatabaseRequest extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): BackupDatabaseRequest;

    hasBackupSettings(): boolean;
    clearBackupSettings(): void;
    getBackupSettings(): yandex_cloud_ydb_v1_backup_pb.BackupSettings | undefined;
    setBackupSettings(value?: yandex_cloud_ydb_v1_backup_pb.BackupSettings): BackupDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BackupDatabaseRequest): BackupDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupDatabaseRequest;
    static deserializeBinaryFromReader(message: BackupDatabaseRequest, reader: jspb.BinaryReader): BackupDatabaseRequest;
}

export namespace BackupDatabaseRequest {
    export type AsObject = {
        databaseId: string,
        backupSettings?: yandex_cloud_ydb_v1_backup_pb.BackupSettings.AsObject,
    }
}

export class BackupDatabaseMetadata extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): BackupDatabaseMetadata;
    getDatabaseId(): string;
    setDatabaseId(value: string): BackupDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BackupDatabaseMetadata): BackupDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupDatabaseMetadata;
    static deserializeBinaryFromReader(message: BackupDatabaseMetadata, reader: jspb.BinaryReader): BackupDatabaseMetadata;
}

export namespace BackupDatabaseMetadata {
    export type AsObject = {
        backupId: string,
        databaseId: string,
    }
}

export class StartDatabaseRequest extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): StartDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartDatabaseRequest): StartDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartDatabaseRequest;
    static deserializeBinaryFromReader(message: StartDatabaseRequest, reader: jspb.BinaryReader): StartDatabaseRequest;
}

export namespace StartDatabaseRequest {
    export type AsObject = {
        databaseId: string,
    }
}

export class StartDatabaseMetadata extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): StartDatabaseMetadata;
    getDatabaseName(): string;
    setDatabaseName(value: string): StartDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartDatabaseMetadata): StartDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartDatabaseMetadata;
    static deserializeBinaryFromReader(message: StartDatabaseMetadata, reader: jspb.BinaryReader): StartDatabaseMetadata;
}

export namespace StartDatabaseMetadata {
    export type AsObject = {
        databaseId: string,
        databaseName: string,
    }
}

export class StopDatabaseRequest extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): StopDatabaseRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopDatabaseRequest): StopDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopDatabaseRequest;
    static deserializeBinaryFromReader(message: StopDatabaseRequest, reader: jspb.BinaryReader): StopDatabaseRequest;
}

export namespace StopDatabaseRequest {
    export type AsObject = {
        databaseId: string,
    }
}

export class StopDatabaseMetadata extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): StopDatabaseMetadata;
    getDatabaseName(): string;
    setDatabaseName(value: string): StopDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopDatabaseMetadata): StopDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopDatabaseMetadata;
    static deserializeBinaryFromReader(message: StopDatabaseMetadata, reader: jspb.BinaryReader): StopDatabaseMetadata;
}

export namespace StopDatabaseMetadata {
    export type AsObject = {
        databaseId: string,
        databaseName: string,
    }
}

export class GetDatabaseRequest extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): GetDatabaseRequest;

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
        databaseId: string,
    }
}

export class ListDatabasesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListDatabasesRequest;
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
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDatabasesResponse extends jspb.Message { 
    clearDatabasesList(): void;
    getDatabasesList(): Array<yandex_cloud_ydb_v1_database_pb.Database>;
    setDatabasesList(value: Array<yandex_cloud_ydb_v1_database_pb.Database>): ListDatabasesResponse;
    addDatabases(value?: yandex_cloud_ydb_v1_database_pb.Database, index?: number): yandex_cloud_ydb_v1_database_pb.Database;
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
        databasesList: Array<yandex_cloud_ydb_v1_database_pb.Database.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDatabaseRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateDatabaseRequest;
    getName(): string;
    setName(value: string): CreateDatabaseRequest;
    getDescription(): string;
    setDescription(value: string): CreateDatabaseRequest;
    getResourcePresetId(): string;
    setResourcePresetId(value: string): CreateDatabaseRequest;

    hasStorageConfig(): boolean;
    clearStorageConfig(): void;
    getStorageConfig(): yandex_cloud_ydb_v1_database_pb.StorageConfig | undefined;
    setStorageConfig(value?: yandex_cloud_ydb_v1_database_pb.StorageConfig): CreateDatabaseRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_ydb_v1_database_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_ydb_v1_database_pb.ScalePolicy): CreateDatabaseRequest;
    getNetworkId(): string;
    setNetworkId(value: string): CreateDatabaseRequest;
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): CreateDatabaseRequest;
    addSubnetIds(value: string, index?: number): string;

    hasZonalDatabase(): boolean;
    clearZonalDatabase(): void;
    getZonalDatabase(): yandex_cloud_ydb_v1_database_pb.ZonalDatabase | undefined;
    setZonalDatabase(value?: yandex_cloud_ydb_v1_database_pb.ZonalDatabase): CreateDatabaseRequest;

    hasRegionalDatabase(): boolean;
    clearRegionalDatabase(): void;
    getRegionalDatabase(): yandex_cloud_ydb_v1_database_pb.RegionalDatabase | undefined;
    setRegionalDatabase(value?: yandex_cloud_ydb_v1_database_pb.RegionalDatabase): CreateDatabaseRequest;

    hasDedicatedDatabase(): boolean;
    clearDedicatedDatabase(): void;
    getDedicatedDatabase(): yandex_cloud_ydb_v1_database_pb.DedicatedDatabase | undefined;
    setDedicatedDatabase(value?: yandex_cloud_ydb_v1_database_pb.DedicatedDatabase): CreateDatabaseRequest;

    hasServerlessDatabase(): boolean;
    clearServerlessDatabase(): void;
    getServerlessDatabase(): yandex_cloud_ydb_v1_database_pb.ServerlessDatabase | undefined;
    setServerlessDatabase(value?: yandex_cloud_ydb_v1_database_pb.ServerlessDatabase): CreateDatabaseRequest;
    getAssignPublicIps(): boolean;
    setAssignPublicIps(value: boolean): CreateDatabaseRequest;
    getLocationId(): string;
    setLocationId(value: string): CreateDatabaseRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasBackupConfig(): boolean;
    clearBackupConfig(): void;
    getBackupConfig(): yandex_cloud_ydb_v1_backup_pb.BackupConfig | undefined;
    setBackupConfig(value?: yandex_cloud_ydb_v1_backup_pb.BackupConfig): CreateDatabaseRequest;

    getDatabaseTypeCase(): CreateDatabaseRequest.DatabaseTypeCase;

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
        folderId: string,
        name: string,
        description: string,
        resourcePresetId: string,
        storageConfig?: yandex_cloud_ydb_v1_database_pb.StorageConfig.AsObject,
        scalePolicy?: yandex_cloud_ydb_v1_database_pb.ScalePolicy.AsObject,
        networkId: string,
        subnetIdsList: Array<string>,
        zonalDatabase?: yandex_cloud_ydb_v1_database_pb.ZonalDatabase.AsObject,
        regionalDatabase?: yandex_cloud_ydb_v1_database_pb.RegionalDatabase.AsObject,
        dedicatedDatabase?: yandex_cloud_ydb_v1_database_pb.DedicatedDatabase.AsObject,
        serverlessDatabase?: yandex_cloud_ydb_v1_database_pb.ServerlessDatabase.AsObject,
        assignPublicIps: boolean,
        locationId: string,

        labelsMap: Array<[string, string]>,
        backupConfig?: yandex_cloud_ydb_v1_backup_pb.BackupConfig.AsObject,
    }

    export enum DatabaseTypeCase {
        DATABASE_TYPE_NOT_SET = 0,
        ZONAL_DATABASE = 9,
        REGIONAL_DATABASE = 10,
        DEDICATED_DATABASE = 13,
        SERVERLESS_DATABASE = 14,
    }

}

export class CreateDatabaseMetadata extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): CreateDatabaseMetadata;
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
        databaseId: string,
        databaseName: string,
    }
}

export class UpdateDatabaseRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): UpdateDatabaseRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDatabaseRequest;
    getDatabaseId(): string;
    setDatabaseId(value: string): UpdateDatabaseRequest;
    getName(): string;
    setName(value: string): UpdateDatabaseRequest;
    getDescription(): string;
    setDescription(value: string): UpdateDatabaseRequest;
    getResourcePresetId(): string;
    setResourcePresetId(value: string): UpdateDatabaseRequest;

    hasStorageConfig(): boolean;
    clearStorageConfig(): void;
    getStorageConfig(): yandex_cloud_ydb_v1_database_pb.StorageConfig | undefined;
    setStorageConfig(value?: yandex_cloud_ydb_v1_database_pb.StorageConfig): UpdateDatabaseRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_ydb_v1_database_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_ydb_v1_database_pb.ScalePolicy): UpdateDatabaseRequest;
    getNetworkId(): string;
    setNetworkId(value: string): UpdateDatabaseRequest;
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): UpdateDatabaseRequest;
    addSubnetIds(value: string, index?: number): string;

    hasZonalDatabase(): boolean;
    clearZonalDatabase(): void;
    getZonalDatabase(): yandex_cloud_ydb_v1_database_pb.ZonalDatabase | undefined;
    setZonalDatabase(value?: yandex_cloud_ydb_v1_database_pb.ZonalDatabase): UpdateDatabaseRequest;

    hasRegionalDatabase(): boolean;
    clearRegionalDatabase(): void;
    getRegionalDatabase(): yandex_cloud_ydb_v1_database_pb.RegionalDatabase | undefined;
    setRegionalDatabase(value?: yandex_cloud_ydb_v1_database_pb.RegionalDatabase): UpdateDatabaseRequest;

    hasDedicatedDatabase(): boolean;
    clearDedicatedDatabase(): void;
    getDedicatedDatabase(): yandex_cloud_ydb_v1_database_pb.DedicatedDatabase | undefined;
    setDedicatedDatabase(value?: yandex_cloud_ydb_v1_database_pb.DedicatedDatabase): UpdateDatabaseRequest;

    hasServerlessDatabase(): boolean;
    clearServerlessDatabase(): void;
    getServerlessDatabase(): yandex_cloud_ydb_v1_database_pb.ServerlessDatabase | undefined;
    setServerlessDatabase(value?: yandex_cloud_ydb_v1_database_pb.ServerlessDatabase): UpdateDatabaseRequest;
    getAssignPublicIps(): boolean;
    setAssignPublicIps(value: boolean): UpdateDatabaseRequest;
    getLocationId(): string;
    setLocationId(value: string): UpdateDatabaseRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasBackupConfig(): boolean;
    clearBackupConfig(): void;
    getBackupConfig(): yandex_cloud_ydb_v1_backup_pb.BackupConfig | undefined;
    setBackupConfig(value?: yandex_cloud_ydb_v1_backup_pb.BackupConfig): UpdateDatabaseRequest;

    getDatabaseTypeCase(): UpdateDatabaseRequest.DatabaseTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDatabaseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDatabaseRequest): UpdateDatabaseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDatabaseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDatabaseRequest;
    static deserializeBinaryFromReader(message: UpdateDatabaseRequest, reader: jspb.BinaryReader): UpdateDatabaseRequest;
}

export namespace UpdateDatabaseRequest {
    export type AsObject = {
        folderId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        databaseId: string,
        name: string,
        description: string,
        resourcePresetId: string,
        storageConfig?: yandex_cloud_ydb_v1_database_pb.StorageConfig.AsObject,
        scalePolicy?: yandex_cloud_ydb_v1_database_pb.ScalePolicy.AsObject,
        networkId: string,
        subnetIdsList: Array<string>,
        zonalDatabase?: yandex_cloud_ydb_v1_database_pb.ZonalDatabase.AsObject,
        regionalDatabase?: yandex_cloud_ydb_v1_database_pb.RegionalDatabase.AsObject,
        dedicatedDatabase?: yandex_cloud_ydb_v1_database_pb.DedicatedDatabase.AsObject,
        serverlessDatabase?: yandex_cloud_ydb_v1_database_pb.ServerlessDatabase.AsObject,
        assignPublicIps: boolean,
        locationId: string,

        labelsMap: Array<[string, string]>,
        backupConfig?: yandex_cloud_ydb_v1_backup_pb.BackupConfig.AsObject,
    }

    export enum DatabaseTypeCase {
        DATABASE_TYPE_NOT_SET = 0,
        ZONAL_DATABASE = 11,
        REGIONAL_DATABASE = 12,
        DEDICATED_DATABASE = 15,
        SERVERLESS_DATABASE = 16,
    }

}

export class UpdateDatabaseMetadata extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): UpdateDatabaseMetadata;
    getDatabaseName(): string;
    setDatabaseName(value: string): UpdateDatabaseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDatabaseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDatabaseMetadata): UpdateDatabaseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDatabaseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDatabaseMetadata;
    static deserializeBinaryFromReader(message: UpdateDatabaseMetadata, reader: jspb.BinaryReader): UpdateDatabaseMetadata;
}

export namespace UpdateDatabaseMetadata {
    export type AsObject = {
        databaseId: string,
        databaseName: string,
    }
}

export class DeleteDatabaseRequest extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): DeleteDatabaseRequest;

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
        databaseId: string,
    }
}

export class DeleteDatabaseMetadata extends jspb.Message { 
    getDatabaseId(): string;
    setDatabaseId(value: string): DeleteDatabaseMetadata;
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
        databaseId: string,
        databaseName: string,
    }
}
