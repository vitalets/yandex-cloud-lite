// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/database.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ydb_v1_backup_pb from "../../../../yandex/cloud/ydb/v1/backup_pb";

export class Database extends jspb.Message { 
    getId(): string;
    setId(value: string): Database;
    getFolderId(): string;
    setFolderId(value: string): Database;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Database;
    getName(): string;
    setName(value: string): Database;
    getDescription(): string;
    setDescription(value: string): Database;
    getStatus(): Database.Status;
    setStatus(value: Database.Status): Database;
    getEndpoint(): string;
    setEndpoint(value: string): Database;
    getResourcePresetId(): string;
    setResourcePresetId(value: string): Database;

    hasStorageConfig(): boolean;
    clearStorageConfig(): void;
    getStorageConfig(): StorageConfig | undefined;
    setStorageConfig(value?: StorageConfig): Database;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): ScalePolicy | undefined;
    setScalePolicy(value?: ScalePolicy): Database;
    getNetworkId(): string;
    setNetworkId(value: string): Database;
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): Database;
    addSubnetIds(value: string, index?: number): string;

    hasZonalDatabase(): boolean;
    clearZonalDatabase(): void;
    getZonalDatabase(): ZonalDatabase | undefined;
    setZonalDatabase(value?: ZonalDatabase): Database;

    hasRegionalDatabase(): boolean;
    clearRegionalDatabase(): void;
    getRegionalDatabase(): RegionalDatabase | undefined;
    setRegionalDatabase(value?: RegionalDatabase): Database;

    hasDedicatedDatabase(): boolean;
    clearDedicatedDatabase(): void;
    getDedicatedDatabase(): DedicatedDatabase | undefined;
    setDedicatedDatabase(value?: DedicatedDatabase): Database;

    hasServerlessDatabase(): boolean;
    clearServerlessDatabase(): void;
    getServerlessDatabase(): ServerlessDatabase | undefined;
    setServerlessDatabase(value?: ServerlessDatabase): Database;
    getAssignPublicIps(): boolean;
    setAssignPublicIps(value: boolean): Database;
    getLocationId(): string;
    setLocationId(value: string): Database;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasBackupConfig(): boolean;
    clearBackupConfig(): void;
    getBackupConfig(): yandex_cloud_ydb_v1_backup_pb.BackupConfig | undefined;
    setBackupConfig(value?: yandex_cloud_ydb_v1_backup_pb.BackupConfig): Database;
    getDocumentApiEndpoint(): string;
    setDocumentApiEndpoint(value: string): Database;
    getKinesisApiEndpoint(): string;
    setKinesisApiEndpoint(value: string): Database;

    getDatabaseTypeCase(): Database.DatabaseTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,
        status: Database.Status,
        endpoint: string,
        resourcePresetId: string,
        storageConfig?: StorageConfig.AsObject,
        scalePolicy?: ScalePolicy.AsObject,
        networkId: string,
        subnetIdsList: Array<string>,
        zonalDatabase?: ZonalDatabase.AsObject,
        regionalDatabase?: RegionalDatabase.AsObject,
        dedicatedDatabase?: DedicatedDatabase.AsObject,
        serverlessDatabase?: ServerlessDatabase.AsObject,
        assignPublicIps: boolean,
        locationId: string,

        labelsMap: Array<[string, string]>,
        backupConfig?: yandex_cloud_ydb_v1_backup_pb.BackupConfig.AsObject,
        documentApiEndpoint: string,
        kinesisApiEndpoint: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    UPDATING = 4,
    ERROR = 5,
    DELETING = 6,
    STARTING = 7,
    STOPPED = 8,
    }


    export enum DatabaseTypeCase {
        DATABASE_TYPE_NOT_SET = 0,
        ZONAL_DATABASE = 14,
        REGIONAL_DATABASE = 15,
        DEDICATED_DATABASE = 18,
        SERVERLESS_DATABASE = 19,
    }

}

export class DedicatedDatabase extends jspb.Message { 
    getResourcePresetId(): string;
    setResourcePresetId(value: string): DedicatedDatabase;

    hasStorageConfig(): boolean;
    clearStorageConfig(): void;
    getStorageConfig(): StorageConfig | undefined;
    setStorageConfig(value?: StorageConfig): DedicatedDatabase;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): ScalePolicy | undefined;
    setScalePolicy(value?: ScalePolicy): DedicatedDatabase;
    getNetworkId(): string;
    setNetworkId(value: string): DedicatedDatabase;
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): DedicatedDatabase;
    addSubnetIds(value: string, index?: number): string;
    getAssignPublicIps(): boolean;
    setAssignPublicIps(value: boolean): DedicatedDatabase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DedicatedDatabase.AsObject;
    static toObject(includeInstance: boolean, msg: DedicatedDatabase): DedicatedDatabase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DedicatedDatabase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DedicatedDatabase;
    static deserializeBinaryFromReader(message: DedicatedDatabase, reader: jspb.BinaryReader): DedicatedDatabase;
}

export namespace DedicatedDatabase {
    export type AsObject = {
        resourcePresetId: string,
        storageConfig?: StorageConfig.AsObject,
        scalePolicy?: ScalePolicy.AsObject,
        networkId: string,
        subnetIdsList: Array<string>,
        assignPublicIps: boolean,
    }
}

export class ServerlessDatabase extends jspb.Message { 
    getThrottlingRcuLimit(): number;
    setThrottlingRcuLimit(value: number): ServerlessDatabase;
    getStorageSizeLimit(): number;
    setStorageSizeLimit(value: number): ServerlessDatabase;
    getEnableThrottlingRcuLimit(): boolean;
    setEnableThrottlingRcuLimit(value: boolean): ServerlessDatabase;
    getProvisionedRcuLimit(): number;
    setProvisionedRcuLimit(value: number): ServerlessDatabase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerlessDatabase.AsObject;
    static toObject(includeInstance: boolean, msg: ServerlessDatabase): ServerlessDatabase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerlessDatabase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerlessDatabase;
    static deserializeBinaryFromReader(message: ServerlessDatabase, reader: jspb.BinaryReader): ServerlessDatabase;
}

export namespace ServerlessDatabase {
    export type AsObject = {
        throttlingRcuLimit: number,
        storageSizeLimit: number,
        enableThrottlingRcuLimit: boolean,
        provisionedRcuLimit: number,
    }
}

export class ZonalDatabase extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): ZonalDatabase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZonalDatabase.AsObject;
    static toObject(includeInstance: boolean, msg: ZonalDatabase): ZonalDatabase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZonalDatabase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZonalDatabase;
    static deserializeBinaryFromReader(message: ZonalDatabase, reader: jspb.BinaryReader): ZonalDatabase;
}

export namespace ZonalDatabase {
    export type AsObject = {
        zoneId: string,
    }
}

export class RegionalDatabase extends jspb.Message { 
    getRegionId(): string;
    setRegionId(value: string): RegionalDatabase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionalDatabase.AsObject;
    static toObject(includeInstance: boolean, msg: RegionalDatabase): RegionalDatabase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionalDatabase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionalDatabase;
    static deserializeBinaryFromReader(message: RegionalDatabase, reader: jspb.BinaryReader): RegionalDatabase;
}

export namespace RegionalDatabase {
    export type AsObject = {
        regionId: string,
    }
}

export class ScalePolicy extends jspb.Message { 

    hasFixedScale(): boolean;
    clearFixedScale(): void;
    getFixedScale(): ScalePolicy.FixedScale | undefined;
    setFixedScale(value?: ScalePolicy.FixedScale): ScalePolicy;

    getScaleTypeCase(): ScalePolicy.ScaleTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: ScalePolicy): ScalePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalePolicy;
    static deserializeBinaryFromReader(message: ScalePolicy, reader: jspb.BinaryReader): ScalePolicy;
}

export namespace ScalePolicy {
    export type AsObject = {
        fixedScale?: ScalePolicy.FixedScale.AsObject,
    }


    export class FixedScale extends jspb.Message { 
        getSize(): number;
        setSize(value: number): FixedScale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixedScale.AsObject;
        static toObject(includeInstance: boolean, msg: FixedScale): FixedScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixedScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixedScale;
        static deserializeBinaryFromReader(message: FixedScale, reader: jspb.BinaryReader): FixedScale;
    }

    export namespace FixedScale {
        export type AsObject = {
            size: number,
        }
    }


    export enum ScaleTypeCase {
        SCALE_TYPE_NOT_SET = 0,
        FIXED_SCALE = 1,
    }

}

export class StorageConfig extends jspb.Message { 
    clearStorageOptionsList(): void;
    getStorageOptionsList(): Array<StorageOption>;
    setStorageOptionsList(value: Array<StorageOption>): StorageConfig;
    addStorageOptions(value?: StorageOption, index?: number): StorageOption;
    getStorageSizeLimit(): number;
    setStorageSizeLimit(value: number): StorageConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StorageConfig): StorageConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageConfig;
    static deserializeBinaryFromReader(message: StorageConfig, reader: jspb.BinaryReader): StorageConfig;
}

export namespace StorageConfig {
    export type AsObject = {
        storageOptionsList: Array<StorageOption.AsObject>,
        storageSizeLimit: number,
    }
}

export class StorageOption extends jspb.Message { 
    getStorageTypeId(): string;
    setStorageTypeId(value: string): StorageOption;
    getGroupCount(): number;
    setGroupCount(value: number): StorageOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageOption.AsObject;
    static toObject(includeInstance: boolean, msg: StorageOption): StorageOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageOption;
    static deserializeBinaryFromReader(message: StorageOption, reader: jspb.BinaryReader): StorageOption;
}

export namespace StorageOption {
    export type AsObject = {
        storageTypeId: string,
        groupCount: number,
    }
}
