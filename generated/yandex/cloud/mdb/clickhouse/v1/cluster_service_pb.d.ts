// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_backup_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/backup_pb";
import * as yandex_cloud_mdb_clickhouse_v1_cluster_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/cluster_pb";
import * as yandex_cloud_mdb_clickhouse_v1_database_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/database_pb";
import * as yandex_cloud_mdb_clickhouse_v1_user_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/user_pb";
import * as yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse_pb";
import * as yandex_cloud_mdb_clickhouse_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance_pb";

export class GetClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
    static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class ListClustersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListClustersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClustersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClustersRequest;
    getFilter(): string;
    setFilter(value: string): ListClustersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
    static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListClustersResponse extends jspb.Message { 
    clearClustersList(): void;
    getClustersList(): Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster, index?: number): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClustersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
    static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
    export type AsObject = {
        clustersList: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.AsObject>,
        nextPageToken: string,
    }
}

export class CreateClusterRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateClusterRequest;
    getName(): string;
    setName(value: string): CreateClusterRequest;
    getDescription(): string;
    setDescription(value: string): CreateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getEnvironment(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment): CreateClusterRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ConfigSpec | undefined;
    setConfigSpec(value?: ConfigSpec): CreateClusterRequest;
    clearDatabaseSpecsList(): void;
    getDatabaseSpecsList(): Array<yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec>;
    setDatabaseSpecsList(value: Array<yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec>): CreateClusterRequest;
    addDatabaseSpecs(value?: yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec, index?: number): yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec;
    clearUserSpecsList(): void;
    getUserSpecsList(): Array<yandex_cloud_mdb_clickhouse_v1_user_pb.UserSpec>;
    setUserSpecsList(value: Array<yandex_cloud_mdb_clickhouse_v1_user_pb.UserSpec>): CreateClusterRequest;
    addUserSpecs(value?: yandex_cloud_mdb_clickhouse_v1_user_pb.UserSpec, index?: number): yandex_cloud_mdb_clickhouse_v1_user_pb.UserSpec;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): CreateClusterRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;
    getNetworkId(): string;
    setNetworkId(value: string): CreateClusterRequest;
    getShardName(): string;
    setShardName(value: string): CreateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
    static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        environment: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment,
        configSpec?: ConfigSpec.AsObject,
        databaseSpecsList: Array<yandex_cloud_mdb_clickhouse_v1_database_pb.DatabaseSpec.AsObject>,
        userSpecsList: Array<yandex_cloud_mdb_clickhouse_v1_user_pb.UserSpec.AsObject>,
        hostSpecsList: Array<HostSpec.AsObject>,
        networkId: string,
        shardName: string,
        serviceAccountId: string,
        securityGroupIdsList: Array<string>,
        deletionProtection: boolean,
    }
}

export class CreateClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterMetadata): CreateClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterMetadata;
    static deserializeBinaryFromReader(message: CreateClusterMetadata, reader: jspb.BinaryReader): CreateClusterMetadata;
}

export namespace CreateClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class UpdateClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterRequest;
    getDescription(): string;
    setDescription(value: string): UpdateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ConfigSpec | undefined;
    setConfigSpec(value?: ConfigSpec): UpdateClusterRequest;
    getName(): string;
    setName(value: string): UpdateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateClusterRequest;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow): UpdateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): UpdateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
    static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
    export type AsObject = {
        clusterId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,

        labelsMap: Array<[string, string]>,
        configSpec?: ConfigSpec.AsObject,
        name: string,
        serviceAccountId: string,
        maintenanceWindow?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow.AsObject,
        securityGroupIdsList: Array<string>,
        deletionProtection: boolean,
    }
}

export class UpdateClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterMetadata): UpdateClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterMetadata;
    static deserializeBinaryFromReader(message: UpdateClusterMetadata, reader: jspb.BinaryReader): UpdateClusterMetadata;
}

export namespace UpdateClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class DeleteClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
    static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class DeleteClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterMetadata): DeleteClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterMetadata, reader: jspb.BinaryReader): DeleteClusterMetadata;
}

export namespace DeleteClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class StartClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterRequest): StartClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterRequest;
    static deserializeBinaryFromReader(message: StartClusterRequest, reader: jspb.BinaryReader): StartClusterRequest;
}

export namespace StartClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class StartClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterMetadata): StartClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterMetadata;
    static deserializeBinaryFromReader(message: StartClusterMetadata, reader: jspb.BinaryReader): StartClusterMetadata;
}

export namespace StartClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class StopClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StopClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopClusterRequest): StopClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopClusterRequest;
    static deserializeBinaryFromReader(message: StopClusterRequest, reader: jspb.BinaryReader): StopClusterRequest;
}

export namespace StopClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class StopClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StopClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopClusterMetadata): StopClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopClusterMetadata;
    static deserializeBinaryFromReader(message: StopClusterMetadata, reader: jspb.BinaryReader): StopClusterMetadata;
}

export namespace StopClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class MoveClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): MoveClusterRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveClusterRequest): MoveClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveClusterRequest;
    static deserializeBinaryFromReader(message: MoveClusterRequest, reader: jspb.BinaryReader): MoveClusterRequest;
}

export namespace MoveClusterRequest {
    export type AsObject = {
        clusterId: string,
        destinationFolderId: string,
    }
}

export class MoveClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): MoveClusterMetadata;
    getSourceFolderId(): string;
    setSourceFolderId(value: string): MoveClusterMetadata;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveClusterMetadata): MoveClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveClusterMetadata;
    static deserializeBinaryFromReader(message: MoveClusterMetadata, reader: jspb.BinaryReader): MoveClusterMetadata;
}

export namespace MoveClusterMetadata {
    export type AsObject = {
        clusterId: string,
        sourceFolderId: string,
        destinationFolderId: string,
    }
}

export class AddClusterZookeeperRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterZookeeperRequest;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources | undefined;
    setResources(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources): AddClusterZookeeperRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): AddClusterZookeeperRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterZookeeperRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterZookeeperRequest): AddClusterZookeeperRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterZookeeperRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterZookeeperRequest;
    static deserializeBinaryFromReader(message: AddClusterZookeeperRequest, reader: jspb.BinaryReader): AddClusterZookeeperRequest;
}

export namespace AddClusterZookeeperRequest {
    export type AsObject = {
        clusterId: string,
        resources?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources.AsObject,
        hostSpecsList: Array<HostSpec.AsObject>,
    }
}

export class AddClusterZookeeperMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterZookeeperMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterZookeeperMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterZookeeperMetadata): AddClusterZookeeperMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterZookeeperMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterZookeeperMetadata;
    static deserializeBinaryFromReader(message: AddClusterZookeeperMetadata, reader: jspb.BinaryReader): AddClusterZookeeperMetadata;
}

export namespace AddClusterZookeeperMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class BackupClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): BackupClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BackupClusterRequest): BackupClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupClusterRequest;
    static deserializeBinaryFromReader(message: BackupClusterRequest, reader: jspb.BinaryReader): BackupClusterRequest;
}

export namespace BackupClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class BackupClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): BackupClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BackupClusterMetadata): BackupClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupClusterMetadata;
    static deserializeBinaryFromReader(message: BackupClusterMetadata, reader: jspb.BinaryReader): BackupClusterMetadata;
}

export namespace BackupClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class RestoreClusterRequest extends jspb.Message { 
    getBackupId(): string;
    setBackupId(value: string): RestoreClusterRequest;
    getName(): string;
    setName(value: string): RestoreClusterRequest;
    getDescription(): string;
    setDescription(value: string): RestoreClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getEnvironment(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment): RestoreClusterRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ConfigSpec | undefined;
    setConfigSpec(value?: ConfigSpec): RestoreClusterRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): RestoreClusterRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;
    getNetworkId(): string;
    setNetworkId(value: string): RestoreClusterRequest;
    getFolderId(): string;
    setFolderId(value: string): RestoreClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): RestoreClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): RestoreClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreClusterRequest): RestoreClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreClusterRequest;
    static deserializeBinaryFromReader(message: RestoreClusterRequest, reader: jspb.BinaryReader): RestoreClusterRequest;
}

export namespace RestoreClusterRequest {
    export type AsObject = {
        backupId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        environment: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Cluster.Environment,
        configSpec?: ConfigSpec.AsObject,
        hostSpecsList: Array<HostSpec.AsObject>,
        networkId: string,
        folderId: string,
        serviceAccountId: string,
        securityGroupIdsList: Array<string>,
    }
}

export class RestoreClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RestoreClusterMetadata;
    getBackupId(): string;
    setBackupId(value: string): RestoreClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreClusterMetadata): RestoreClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreClusterMetadata;
    static deserializeBinaryFromReader(message: RestoreClusterMetadata, reader: jspb.BinaryReader): RestoreClusterMetadata;
}

export namespace RestoreClusterMetadata {
    export type AsObject = {
        clusterId: string,
        backupId: string,
    }
}

export class RescheduleMaintenanceRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RescheduleMaintenanceRequest;
    getRescheduleType(): RescheduleMaintenanceRequest.RescheduleType;
    setRescheduleType(value: RescheduleMaintenanceRequest.RescheduleType): RescheduleMaintenanceRequest;

    hasDelayedUntil(): boolean;
    clearDelayedUntil(): void;
    getDelayedUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDelayedUntil(value?: google_protobuf_timestamp_pb.Timestamp): RescheduleMaintenanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RescheduleMaintenanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RescheduleMaintenanceRequest): RescheduleMaintenanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RescheduleMaintenanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RescheduleMaintenanceRequest;
    static deserializeBinaryFromReader(message: RescheduleMaintenanceRequest, reader: jspb.BinaryReader): RescheduleMaintenanceRequest;
}

export namespace RescheduleMaintenanceRequest {
    export type AsObject = {
        clusterId: string,
        rescheduleType: RescheduleMaintenanceRequest.RescheduleType,
        delayedUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum RescheduleType {
    RESCHEDULE_TYPE_UNSPECIFIED = 0,
    IMMEDIATE = 1,
    NEXT_AVAILABLE_WINDOW = 2,
    SPECIFIC_TIME = 3,
    }

}

export class RescheduleMaintenanceMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RescheduleMaintenanceMetadata;

    hasDelayedUntil(): boolean;
    clearDelayedUntil(): void;
    getDelayedUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDelayedUntil(value?: google_protobuf_timestamp_pb.Timestamp): RescheduleMaintenanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RescheduleMaintenanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RescheduleMaintenanceMetadata): RescheduleMaintenanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RescheduleMaintenanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RescheduleMaintenanceMetadata;
    static deserializeBinaryFromReader(message: RescheduleMaintenanceMetadata, reader: jspb.BinaryReader): RescheduleMaintenanceMetadata;
}

export namespace RescheduleMaintenanceMetadata {
    export type AsObject = {
        clusterId: string,
        delayedUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class LogRecord extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogRecord;

    getMessageMap(): jspb.Map<string, string>;
    clearMessageMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogRecord.AsObject;
    static toObject(includeInstance: boolean, msg: LogRecord): LogRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogRecord;
    static deserializeBinaryFromReader(message: LogRecord, reader: jspb.BinaryReader): LogRecord;
}

export namespace LogRecord {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        messageMap: Array<[string, string]>,
    }
}

export class ListClusterLogsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterLogsRequest;
    clearColumnFilterList(): void;
    getColumnFilterList(): Array<string>;
    setColumnFilterList(value: Array<string>): ListClusterLogsRequest;
    addColumnFilter(value: string, index?: number): string;
    getServiceType(): ListClusterLogsRequest.ServiceType;
    setServiceType(value: ListClusterLogsRequest.ServiceType): ListClusterLogsRequest;

    hasFromTime(): boolean;
    clearFromTime(): void;
    getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): ListClusterLogsRequest;

    hasToTime(): boolean;
    clearToTime(): void;
    getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setToTime(value?: google_protobuf_timestamp_pb.Timestamp): ListClusterLogsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterLogsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterLogsRequest): ListClusterLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterLogsRequest;
    static deserializeBinaryFromReader(message: ListClusterLogsRequest, reader: jspb.BinaryReader): ListClusterLogsRequest;
}

export namespace ListClusterLogsRequest {
    export type AsObject = {
        clusterId: string,
        columnFilterList: Array<string>,
        serviceType: ListClusterLogsRequest.ServiceType,
        fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pageSize: number,
        pageToken: string,
    }

    export enum ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    CLICKHOUSE = 1,
    }

}

export class ListClusterLogsResponse extends jspb.Message { 
    clearLogsList(): void;
    getLogsList(): Array<LogRecord>;
    setLogsList(value: Array<LogRecord>): ListClusterLogsResponse;
    addLogs(value?: LogRecord, index?: number): LogRecord;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterLogsResponse): ListClusterLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterLogsResponse;
    static deserializeBinaryFromReader(message: ListClusterLogsResponse, reader: jspb.BinaryReader): ListClusterLogsResponse;
}

export namespace ListClusterLogsResponse {
    export type AsObject = {
        logsList: Array<LogRecord.AsObject>,
        nextPageToken: string,
    }
}

export class StreamLogRecord extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): LogRecord | undefined;
    setRecord(value?: LogRecord): StreamLogRecord;
    getNextRecordToken(): string;
    setNextRecordToken(value: string): StreamLogRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogRecord.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogRecord): StreamLogRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogRecord;
    static deserializeBinaryFromReader(message: StreamLogRecord, reader: jspb.BinaryReader): StreamLogRecord;
}

export namespace StreamLogRecord {
    export type AsObject = {
        record?: LogRecord.AsObject,
        nextRecordToken: string,
    }
}

export class StreamClusterLogsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StreamClusterLogsRequest;
    clearColumnFilterList(): void;
    getColumnFilterList(): Array<string>;
    setColumnFilterList(value: Array<string>): StreamClusterLogsRequest;
    addColumnFilter(value: string, index?: number): string;
    getServiceType(): StreamClusterLogsRequest.ServiceType;
    setServiceType(value: StreamClusterLogsRequest.ServiceType): StreamClusterLogsRequest;

    hasFromTime(): boolean;
    clearFromTime(): void;
    getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): StreamClusterLogsRequest;

    hasToTime(): boolean;
    clearToTime(): void;
    getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setToTime(value?: google_protobuf_timestamp_pb.Timestamp): StreamClusterLogsRequest;
    getRecordToken(): string;
    setRecordToken(value: string): StreamClusterLogsRequest;
    getFilter(): string;
    setFilter(value: string): StreamClusterLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamClusterLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamClusterLogsRequest): StreamClusterLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamClusterLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamClusterLogsRequest;
    static deserializeBinaryFromReader(message: StreamClusterLogsRequest, reader: jspb.BinaryReader): StreamClusterLogsRequest;
}

export namespace StreamClusterLogsRequest {
    export type AsObject = {
        clusterId: string,
        columnFilterList: Array<string>,
        serviceType: StreamClusterLogsRequest.ServiceType,
        fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        recordToken: string,
        filter: string,
    }

    export enum ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    CLICKHOUSE = 1,
    }

}

export class ListClusterOperationsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterOperationsRequest): ListClusterOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterOperationsRequest;
    static deserializeBinaryFromReader(message: ListClusterOperationsRequest, reader: jspb.BinaryReader): ListClusterOperationsRequest;
}

export namespace ListClusterOperationsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListClusterOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterOperationsResponse): ListClusterOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterOperationsResponse;
    static deserializeBinaryFromReader(message: ListClusterOperationsResponse, reader: jspb.BinaryReader): ListClusterOperationsResponse;
}

export namespace ListClusterOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class ListClusterBackupsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterBackupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterBackupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterBackupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterBackupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterBackupsRequest): ListClusterBackupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterBackupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterBackupsRequest;
    static deserializeBinaryFromReader(message: ListClusterBackupsRequest, reader: jspb.BinaryReader): ListClusterBackupsRequest;
}

export namespace ListClusterBackupsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterBackupsResponse extends jspb.Message { 
    clearBackupsList(): void;
    getBackupsList(): Array<yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup>;
    setBackupsList(value: Array<yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup>): ListClusterBackupsResponse;
    addBackups(value?: yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup, index?: number): yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterBackupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterBackupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterBackupsResponse): ListClusterBackupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterBackupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterBackupsResponse;
    static deserializeBinaryFromReader(message: ListClusterBackupsResponse, reader: jspb.BinaryReader): ListClusterBackupsResponse;
}

export namespace ListClusterBackupsResponse {
    export type AsObject = {
        backupsList: Array<yandex_cloud_mdb_clickhouse_v1_backup_pb.Backup.AsObject>,
        nextPageToken: string,
    }
}

export class ListClusterHostsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterHostsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterHostsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterHostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterHostsRequest): ListClusterHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterHostsRequest;
    static deserializeBinaryFromReader(message: ListClusterHostsRequest, reader: jspb.BinaryReader): ListClusterHostsRequest;
}

export namespace ListClusterHostsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterHostsResponse extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host>;
    setHostsList(value: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host>): ListClusterHostsResponse;
    addHosts(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host, index?: number): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterHostsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterHostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterHostsResponse): ListClusterHostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterHostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterHostsResponse;
    static deserializeBinaryFromReader(message: ListClusterHostsResponse, reader: jspb.BinaryReader): ListClusterHostsResponse;
}

export namespace ListClusterHostsResponse {
    export type AsObject = {
        hostsList: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host.AsObject>,
        nextPageToken: string,
    }
}

export class AddClusterHostsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterHostsRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): AddClusterHostsRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;

    hasCopySchema(): boolean;
    clearCopySchema(): void;
    getCopySchema(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCopySchema(value?: google_protobuf_wrappers_pb.BoolValue): AddClusterHostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterHostsRequest): AddClusterHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterHostsRequest;
    static deserializeBinaryFromReader(message: AddClusterHostsRequest, reader: jspb.BinaryReader): AddClusterHostsRequest;
}

export namespace AddClusterHostsRequest {
    export type AsObject = {
        clusterId: string,
        hostSpecsList: Array<HostSpec.AsObject>,
        copySchema?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class AddClusterHostsMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterHostsMetadata;
    clearHostNamesList(): void;
    getHostNamesList(): Array<string>;
    setHostNamesList(value: Array<string>): AddClusterHostsMetadata;
    addHostNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterHostsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterHostsMetadata): AddClusterHostsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterHostsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterHostsMetadata;
    static deserializeBinaryFromReader(message: AddClusterHostsMetadata, reader: jspb.BinaryReader): AddClusterHostsMetadata;
}

export namespace AddClusterHostsMetadata {
    export type AsObject = {
        clusterId: string,
        hostNamesList: Array<string>,
    }
}

export class DeleteClusterHostsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterHostsRequest;
    clearHostNamesList(): void;
    getHostNamesList(): Array<string>;
    setHostNamesList(value: Array<string>): DeleteClusterHostsRequest;
    addHostNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterHostsRequest): DeleteClusterHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterHostsRequest;
    static deserializeBinaryFromReader(message: DeleteClusterHostsRequest, reader: jspb.BinaryReader): DeleteClusterHostsRequest;
}

export namespace DeleteClusterHostsRequest {
    export type AsObject = {
        clusterId: string,
        hostNamesList: Array<string>,
    }
}

export class DeleteClusterHostsMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterHostsMetadata;
    clearHostNamesList(): void;
    getHostNamesList(): Array<string>;
    setHostNamesList(value: Array<string>): DeleteClusterHostsMetadata;
    addHostNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterHostsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterHostsMetadata): DeleteClusterHostsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterHostsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterHostsMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterHostsMetadata, reader: jspb.BinaryReader): DeleteClusterHostsMetadata;
}

export namespace DeleteClusterHostsMetadata {
    export type AsObject = {
        clusterId: string,
        hostNamesList: Array<string>,
    }
}

export class GetClusterShardRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetClusterShardRequest;
    getShardName(): string;
    setShardName(value: string): GetClusterShardRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClusterShardRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClusterShardRequest): GetClusterShardRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClusterShardRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClusterShardRequest;
    static deserializeBinaryFromReader(message: GetClusterShardRequest, reader: jspb.BinaryReader): GetClusterShardRequest;
}

export namespace GetClusterShardRequest {
    export type AsObject = {
        clusterId: string,
        shardName: string,
    }
}

export class ListClusterShardsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterShardsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterShardsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterShardsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterShardsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterShardsRequest): ListClusterShardsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterShardsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterShardsRequest;
    static deserializeBinaryFromReader(message: ListClusterShardsRequest, reader: jspb.BinaryReader): ListClusterShardsRequest;
}

export namespace ListClusterShardsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterShardsResponse extends jspb.Message { 
    clearShardsList(): void;
    getShardsList(): Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard>;
    setShardsList(value: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard>): ListClusterShardsResponse;
    addShards(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard, index?: number): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterShardsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterShardsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterShardsResponse): ListClusterShardsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterShardsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterShardsResponse;
    static deserializeBinaryFromReader(message: ListClusterShardsResponse, reader: jspb.BinaryReader): ListClusterShardsResponse;
}

export namespace ListClusterShardsResponse {
    export type AsObject = {
        shardsList: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.Shard.AsObject>,
        nextPageToken: string,
    }
}

export class AddClusterShardRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterShardRequest;
    getShardName(): string;
    setShardName(value: string): AddClusterShardRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ShardConfigSpec | undefined;
    setConfigSpec(value?: ShardConfigSpec): AddClusterShardRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): AddClusterShardRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;

    hasCopySchema(): boolean;
    clearCopySchema(): void;
    getCopySchema(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCopySchema(value?: google_protobuf_wrappers_pb.BoolValue): AddClusterShardRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterShardRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterShardRequest): AddClusterShardRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterShardRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterShardRequest;
    static deserializeBinaryFromReader(message: AddClusterShardRequest, reader: jspb.BinaryReader): AddClusterShardRequest;
}

export namespace AddClusterShardRequest {
    export type AsObject = {
        clusterId: string,
        shardName: string,
        configSpec?: ShardConfigSpec.AsObject,
        hostSpecsList: Array<HostSpec.AsObject>,
        copySchema?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class AddClusterShardMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterShardMetadata;
    getShardName(): string;
    setShardName(value: string): AddClusterShardMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddClusterShardMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddClusterShardMetadata): AddClusterShardMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddClusterShardMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddClusterShardMetadata;
    static deserializeBinaryFromReader(message: AddClusterShardMetadata, reader: jspb.BinaryReader): AddClusterShardMetadata;
}

export namespace AddClusterShardMetadata {
    export type AsObject = {
        clusterId: string,
        shardName: string,
    }
}

export class UpdateClusterShardRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterShardRequest;
    getShardName(): string;
    setShardName(value: string): UpdateClusterShardRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterShardRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ShardConfigSpec | undefined;
    setConfigSpec(value?: ShardConfigSpec): UpdateClusterShardRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterShardRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterShardRequest): UpdateClusterShardRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterShardRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterShardRequest;
    static deserializeBinaryFromReader(message: UpdateClusterShardRequest, reader: jspb.BinaryReader): UpdateClusterShardRequest;
}

export namespace UpdateClusterShardRequest {
    export type AsObject = {
        clusterId: string,
        shardName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        configSpec?: ShardConfigSpec.AsObject,
    }
}

export class UpdateClusterShardMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterShardMetadata;
    getShardName(): string;
    setShardName(value: string): UpdateClusterShardMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterShardMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterShardMetadata): UpdateClusterShardMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterShardMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterShardMetadata;
    static deserializeBinaryFromReader(message: UpdateClusterShardMetadata, reader: jspb.BinaryReader): UpdateClusterShardMetadata;
}

export namespace UpdateClusterShardMetadata {
    export type AsObject = {
        clusterId: string,
        shardName: string,
    }
}

export class DeleteClusterShardRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterShardRequest;
    getShardName(): string;
    setShardName(value: string): DeleteClusterShardRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterShardRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterShardRequest): DeleteClusterShardRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterShardRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterShardRequest;
    static deserializeBinaryFromReader(message: DeleteClusterShardRequest, reader: jspb.BinaryReader): DeleteClusterShardRequest;
}

export namespace DeleteClusterShardRequest {
    export type AsObject = {
        clusterId: string,
        shardName: string,
    }
}

export class DeleteClusterShardMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterShardMetadata;
    getShardName(): string;
    setShardName(value: string): DeleteClusterShardMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterShardMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterShardMetadata): DeleteClusterShardMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterShardMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterShardMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterShardMetadata, reader: jspb.BinaryReader): DeleteClusterShardMetadata;
}

export namespace DeleteClusterShardMetadata {
    export type AsObject = {
        clusterId: string,
        shardName: string,
    }
}

export class GetClusterShardGroupRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetClusterShardGroupRequest;
    getShardGroupName(): string;
    setShardGroupName(value: string): GetClusterShardGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClusterShardGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClusterShardGroupRequest): GetClusterShardGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClusterShardGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClusterShardGroupRequest;
    static deserializeBinaryFromReader(message: GetClusterShardGroupRequest, reader: jspb.BinaryReader): GetClusterShardGroupRequest;
}

export namespace GetClusterShardGroupRequest {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
    }
}

export class ListClusterShardGroupsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterShardGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterShardGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterShardGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterShardGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterShardGroupsRequest): ListClusterShardGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterShardGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterShardGroupsRequest;
    static deserializeBinaryFromReader(message: ListClusterShardGroupsRequest, reader: jspb.BinaryReader): ListClusterShardGroupsRequest;
}

export namespace ListClusterShardGroupsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterShardGroupsResponse extends jspb.Message { 
    clearShardGroupsList(): void;
    getShardGroupsList(): Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup>;
    setShardGroupsList(value: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup>): ListClusterShardGroupsResponse;
    addShardGroups(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup, index?: number): yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterShardGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterShardGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterShardGroupsResponse): ListClusterShardGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterShardGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterShardGroupsResponse;
    static deserializeBinaryFromReader(message: ListClusterShardGroupsResponse, reader: jspb.BinaryReader): ListClusterShardGroupsResponse;
}

export namespace ListClusterShardGroupsResponse {
    export type AsObject = {
        shardGroupsList: Array<yandex_cloud_mdb_clickhouse_v1_cluster_pb.ShardGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateClusterShardGroupRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterShardGroupRequest;
    getShardGroupName(): string;
    setShardGroupName(value: string): CreateClusterShardGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateClusterShardGroupRequest;
    clearShardNamesList(): void;
    getShardNamesList(): Array<string>;
    setShardNamesList(value: Array<string>): CreateClusterShardGroupRequest;
    addShardNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterShardGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterShardGroupRequest): CreateClusterShardGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterShardGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterShardGroupRequest;
    static deserializeBinaryFromReader(message: CreateClusterShardGroupRequest, reader: jspb.BinaryReader): CreateClusterShardGroupRequest;
}

export namespace CreateClusterShardGroupRequest {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
        description: string,
        shardNamesList: Array<string>,
    }
}

export class CreateClusterShardGroupMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterShardGroupMetadata;
    getShardGroupName(): string;
    setShardGroupName(value: string): CreateClusterShardGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterShardGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterShardGroupMetadata): CreateClusterShardGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterShardGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterShardGroupMetadata;
    static deserializeBinaryFromReader(message: CreateClusterShardGroupMetadata, reader: jspb.BinaryReader): CreateClusterShardGroupMetadata;
}

export namespace CreateClusterShardGroupMetadata {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
    }
}

export class UpdateClusterShardGroupRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterShardGroupRequest;
    getShardGroupName(): string;
    setShardGroupName(value: string): UpdateClusterShardGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterShardGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateClusterShardGroupRequest;
    clearShardNamesList(): void;
    getShardNamesList(): Array<string>;
    setShardNamesList(value: Array<string>): UpdateClusterShardGroupRequest;
    addShardNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterShardGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterShardGroupRequest): UpdateClusterShardGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterShardGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterShardGroupRequest;
    static deserializeBinaryFromReader(message: UpdateClusterShardGroupRequest, reader: jspb.BinaryReader): UpdateClusterShardGroupRequest;
}

export namespace UpdateClusterShardGroupRequest {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,
        shardNamesList: Array<string>,
    }
}

export class UpdateClusterShardGroupMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterShardGroupMetadata;
    getShardGroupName(): string;
    setShardGroupName(value: string): UpdateClusterShardGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterShardGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterShardGroupMetadata): UpdateClusterShardGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterShardGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterShardGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateClusterShardGroupMetadata, reader: jspb.BinaryReader): UpdateClusterShardGroupMetadata;
}

export namespace UpdateClusterShardGroupMetadata {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
    }
}

export class DeleteClusterShardGroupRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterShardGroupRequest;
    getShardGroupName(): string;
    setShardGroupName(value: string): DeleteClusterShardGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterShardGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterShardGroupRequest): DeleteClusterShardGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterShardGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterShardGroupRequest;
    static deserializeBinaryFromReader(message: DeleteClusterShardGroupRequest, reader: jspb.BinaryReader): DeleteClusterShardGroupRequest;
}

export namespace DeleteClusterShardGroupRequest {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
    }
}

export class DeleteClusterShardGroupMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterShardGroupMetadata;
    getShardGroupName(): string;
    setShardGroupName(value: string): DeleteClusterShardGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterShardGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterShardGroupMetadata): DeleteClusterShardGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterShardGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterShardGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterShardGroupMetadata, reader: jspb.BinaryReader): DeleteClusterShardGroupMetadata;
}

export namespace DeleteClusterShardGroupMetadata {
    export type AsObject = {
        clusterId: string,
        shardGroupName: string,
    }
}

export class CreateClusterExternalDictionaryRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterExternalDictionaryRequest;

    hasExternalDictionary(): boolean;
    clearExternalDictionary(): void;
    getExternalDictionary(): yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig.ExternalDictionary | undefined;
    setExternalDictionary(value?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig.ExternalDictionary): CreateClusterExternalDictionaryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterExternalDictionaryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterExternalDictionaryRequest): CreateClusterExternalDictionaryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterExternalDictionaryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterExternalDictionaryRequest;
    static deserializeBinaryFromReader(message: CreateClusterExternalDictionaryRequest, reader: jspb.BinaryReader): CreateClusterExternalDictionaryRequest;
}

export namespace CreateClusterExternalDictionaryRequest {
    export type AsObject = {
        clusterId: string,
        externalDictionary?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig.ExternalDictionary.AsObject,
    }
}

export class CreateClusterExternalDictionaryMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterExternalDictionaryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterExternalDictionaryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterExternalDictionaryMetadata): CreateClusterExternalDictionaryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterExternalDictionaryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterExternalDictionaryMetadata;
    static deserializeBinaryFromReader(message: CreateClusterExternalDictionaryMetadata, reader: jspb.BinaryReader): CreateClusterExternalDictionaryMetadata;
}

export namespace CreateClusterExternalDictionaryMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class DeleteClusterExternalDictionaryRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterExternalDictionaryRequest;
    getExternalDictionaryName(): string;
    setExternalDictionaryName(value: string): DeleteClusterExternalDictionaryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterExternalDictionaryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterExternalDictionaryRequest): DeleteClusterExternalDictionaryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterExternalDictionaryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterExternalDictionaryRequest;
    static deserializeBinaryFromReader(message: DeleteClusterExternalDictionaryRequest, reader: jspb.BinaryReader): DeleteClusterExternalDictionaryRequest;
}

export namespace DeleteClusterExternalDictionaryRequest {
    export type AsObject = {
        clusterId: string,
        externalDictionaryName: string,
    }
}

export class DeleteClusterExternalDictionaryMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterExternalDictionaryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterExternalDictionaryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterExternalDictionaryMetadata): DeleteClusterExternalDictionaryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterExternalDictionaryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterExternalDictionaryMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterExternalDictionaryMetadata, reader: jspb.BinaryReader): DeleteClusterExternalDictionaryMetadata;
}

export namespace DeleteClusterExternalDictionaryMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class HostSpec extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): HostSpec;
    getType(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host.Type;
    setType(value: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host.Type): HostSpec;
    getSubnetId(): string;
    setSubnetId(value: string): HostSpec;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): HostSpec;
    getShardName(): string;
    setShardName(value: string): HostSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostSpec.AsObject;
    static toObject(includeInstance: boolean, msg: HostSpec): HostSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostSpec;
    static deserializeBinaryFromReader(message: HostSpec, reader: jspb.BinaryReader): HostSpec;
}

export namespace HostSpec {
    export type AsObject = {
        zoneId: string,
        type: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Host.Type,
        subnetId: string,
        assignPublicIp: boolean,
        shardName: string,
    }
}

export class ConfigSpec extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ConfigSpec;

    hasClickhouse(): boolean;
    clearClickhouse(): void;
    getClickhouse(): ConfigSpec.Clickhouse | undefined;
    setClickhouse(value?: ConfigSpec.Clickhouse): ConfigSpec;

    hasZookeeper(): boolean;
    clearZookeeper(): void;
    getZookeeper(): ConfigSpec.Zookeeper | undefined;
    setZookeeper(value?: ConfigSpec.Zookeeper): ConfigSpec;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): ConfigSpec;

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Access | undefined;
    setAccess(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Access): ConfigSpec;

    hasCloudStorage(): boolean;
    clearCloudStorage(): void;
    getCloudStorage(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.CloudStorage | undefined;
    setCloudStorage(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.CloudStorage): ConfigSpec;

    hasSqlDatabaseManagement(): boolean;
    clearSqlDatabaseManagement(): void;
    getSqlDatabaseManagement(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSqlDatabaseManagement(value?: google_protobuf_wrappers_pb.BoolValue): ConfigSpec;

    hasSqlUserManagement(): boolean;
    clearSqlUserManagement(): void;
    getSqlUserManagement(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSqlUserManagement(value?: google_protobuf_wrappers_pb.BoolValue): ConfigSpec;
    getAdminPassword(): string;
    setAdminPassword(value: string): ConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigSpec): ConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigSpec;
    static deserializeBinaryFromReader(message: ConfigSpec, reader: jspb.BinaryReader): ConfigSpec;
}

export namespace ConfigSpec {
    export type AsObject = {
        version: string,
        clickhouse?: ConfigSpec.Clickhouse.AsObject,
        zookeeper?: ConfigSpec.Zookeeper.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        access?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Access.AsObject,
        cloudStorage?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.CloudStorage.AsObject,
        sqlDatabaseManagement?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sqlUserManagement?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        adminPassword: string,
    }


    export class Clickhouse extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig | undefined;
        setConfig(value?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig): Clickhouse;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources | undefined;
        setResources(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources): Clickhouse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Clickhouse.AsObject;
        static toObject(includeInstance: boolean, msg: Clickhouse): Clickhouse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Clickhouse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Clickhouse;
        static deserializeBinaryFromReader(message: Clickhouse, reader: jspb.BinaryReader): Clickhouse;
    }

    export namespace Clickhouse {
        export type AsObject = {
            config?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig.AsObject,
            resources?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources.AsObject,
        }
    }

    export class Zookeeper extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources | undefined;
        setResources(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources): Zookeeper;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Zookeeper.AsObject;
        static toObject(includeInstance: boolean, msg: Zookeeper): Zookeeper.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Zookeeper, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Zookeeper;
        static deserializeBinaryFromReader(message: Zookeeper, reader: jspb.BinaryReader): Zookeeper;
    }

    export namespace Zookeeper {
        export type AsObject = {
            resources?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources.AsObject,
        }
    }

}

export class ShardConfigSpec extends jspb.Message { 

    hasClickhouse(): boolean;
    clearClickhouse(): void;
    getClickhouse(): ShardConfigSpec.Clickhouse | undefined;
    setClickhouse(value?: ShardConfigSpec.Clickhouse): ShardConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShardConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ShardConfigSpec): ShardConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShardConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShardConfigSpec;
    static deserializeBinaryFromReader(message: ShardConfigSpec, reader: jspb.BinaryReader): ShardConfigSpec;
}

export namespace ShardConfigSpec {
    export type AsObject = {
        clickhouse?: ShardConfigSpec.Clickhouse.AsObject,
    }


    export class Clickhouse extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig | undefined;
        setConfig(value?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig): Clickhouse;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources | undefined;
        setResources(value?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources): Clickhouse;

        hasWeight(): boolean;
        clearWeight(): void;
        getWeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setWeight(value?: google_protobuf_wrappers_pb.Int64Value): Clickhouse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Clickhouse.AsObject;
        static toObject(includeInstance: boolean, msg: Clickhouse): Clickhouse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Clickhouse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Clickhouse;
        static deserializeBinaryFromReader(message: Clickhouse, reader: jspb.BinaryReader): Clickhouse;
    }

    export namespace Clickhouse {
        export type AsObject = {
            config?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfig.AsObject,
            resources?: yandex_cloud_mdb_clickhouse_v1_cluster_pb.Resources.AsObject,
            weight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
    }

}
