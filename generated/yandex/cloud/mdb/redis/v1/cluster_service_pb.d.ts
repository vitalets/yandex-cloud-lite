// package: yandex.cloud.mdb.redis.v1
// file: yandex/cloud/mdb/redis/v1/cluster_service.proto

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
import * as yandex_cloud_mdb_redis_v1_backup_pb from "../../../../../yandex/cloud/mdb/redis/v1/backup_pb";
import * as yandex_cloud_mdb_redis_v1_cluster_pb from "../../../../../yandex/cloud/mdb/redis/v1/cluster_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis5_0_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis6_0_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0_pb";
import * as yandex_cloud_mdb_redis_v1_config_redis6_2_pb from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2_pb";
import * as yandex_cloud_mdb_redis_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/redis/v1/maintenance_pb";

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
    getClustersList(): Array<yandex_cloud_mdb_redis_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster, index?: number): yandex_cloud_mdb_redis_v1_cluster_pb.Cluster;
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
        clustersList: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.AsObject>,
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
    getEnvironment(): yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment): CreateClusterRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ConfigSpec | undefined;
    setConfigSpec(value?: ConfigSpec): CreateClusterRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): CreateClusterRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;
    getNetworkId(): string;
    setNetworkId(value: string): CreateClusterRequest;
    getSharded(): boolean;
    setSharded(value: boolean): CreateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    hasTlsEnabled(): boolean;
    clearTlsEnabled(): void;
    getTlsEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTlsEnabled(value?: google_protobuf_wrappers_pb.BoolValue): CreateClusterRequest;
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
        environment: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment,
        configSpec?: ConfigSpec.AsObject,
        hostSpecsList: Array<HostSpec.AsObject>,
        networkId: string,
        sharded: boolean,
        securityGroupIdsList: Array<string>,
        tlsEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
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

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_redis_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_redis_v1_maintenance_pb.MaintenanceWindow): UpdateClusterRequest;
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
        maintenanceWindow?: yandex_cloud_mdb_redis_v1_maintenance_pb.MaintenanceWindow.AsObject,
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
    getEnvironment(): yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment): RestoreClusterRequest;

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
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): RestoreClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    hasTlsEnabled(): boolean;
    clearTlsEnabled(): void;
    getTlsEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setTlsEnabled(value?: google_protobuf_wrappers_pb.BoolValue): RestoreClusterRequest;

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
        environment: yandex_cloud_mdb_redis_v1_cluster_pb.Cluster.Environment,
        configSpec?: ConfigSpec.AsObject,
        hostSpecsList: Array<HostSpec.AsObject>,
        networkId: string,
        folderId: string,
        securityGroupIdsList: Array<string>,
        tlsEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
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

export class StartClusterFailoverRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterFailoverRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterFailoverRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterFailoverRequest): StartClusterFailoverRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterFailoverRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterFailoverRequest;
    static deserializeBinaryFromReader(message: StartClusterFailoverRequest, reader: jspb.BinaryReader): StartClusterFailoverRequest;
}

export namespace StartClusterFailoverRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class StartClusterFailoverMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterFailoverMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterFailoverMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterFailoverMetadata): StartClusterFailoverMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterFailoverMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterFailoverMetadata;
    static deserializeBinaryFromReader(message: StartClusterFailoverMetadata, reader: jspb.BinaryReader): StartClusterFailoverMetadata;
}

export namespace StartClusterFailoverMetadata {
    export type AsObject = {
        clusterId: string,
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
    REDIS = 1,
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
    REDIS = 1,
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
    getBackupsList(): Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup>;
    setBackupsList(value: Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup>): ListClusterBackupsResponse;
    addBackups(value?: yandex_cloud_mdb_redis_v1_backup_pb.Backup, index?: number): yandex_cloud_mdb_redis_v1_backup_pb.Backup;
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
        backupsList: Array<yandex_cloud_mdb_redis_v1_backup_pb.Backup.AsObject>,
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
    getHostsList(): Array<yandex_cloud_mdb_redis_v1_cluster_pb.Host>;
    setHostsList(value: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Host>): ListClusterHostsResponse;
    addHosts(value?: yandex_cloud_mdb_redis_v1_cluster_pb.Host, index?: number): yandex_cloud_mdb_redis_v1_cluster_pb.Host;
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
        hostsList: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Host.AsObject>,
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
    getShardsList(): Array<yandex_cloud_mdb_redis_v1_cluster_pb.Shard>;
    setShardsList(value: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Shard>): ListClusterShardsResponse;
    addShards(value?: yandex_cloud_mdb_redis_v1_cluster_pb.Shard, index?: number): yandex_cloud_mdb_redis_v1_cluster_pb.Shard;
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
        shardsList: Array<yandex_cloud_mdb_redis_v1_cluster_pb.Shard.AsObject>,
        nextPageToken: string,
    }
}

export class AddClusterShardRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddClusterShardRequest;
    getShardName(): string;
    setShardName(value: string): AddClusterShardRequest;
    clearHostSpecsList(): void;
    getHostSpecsList(): Array<HostSpec>;
    setHostSpecsList(value: Array<HostSpec>): AddClusterShardRequest;
    addHostSpecs(value?: HostSpec, index?: number): HostSpec;

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
        hostSpecsList: Array<HostSpec.AsObject>,
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

export class RebalanceClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RebalanceClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RebalanceClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RebalanceClusterRequest): RebalanceClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RebalanceClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RebalanceClusterRequest;
    static deserializeBinaryFromReader(message: RebalanceClusterRequest, reader: jspb.BinaryReader): RebalanceClusterRequest;
}

export namespace RebalanceClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class RebalanceClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RebalanceClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RebalanceClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RebalanceClusterMetadata): RebalanceClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RebalanceClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RebalanceClusterMetadata;
    static deserializeBinaryFromReader(message: RebalanceClusterMetadata, reader: jspb.BinaryReader): RebalanceClusterMetadata;
}

export namespace RebalanceClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class HostSpec extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): HostSpec;
    getSubnetId(): string;
    setSubnetId(value: string): HostSpec;
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
        subnetId: string,
        shardName: string,
    }
}

export class ConfigSpec extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ConfigSpec;

    hasRedisConfig50(): boolean;
    clearRedisConfig50(): void;
    getRedisConfig50(): yandex_cloud_mdb_redis_v1_config_redis5_0_pb.RedisConfig5_0 | undefined;
    setRedisConfig50(value?: yandex_cloud_mdb_redis_v1_config_redis5_0_pb.RedisConfig5_0): ConfigSpec;

    hasRedisConfig60(): boolean;
    clearRedisConfig60(): void;
    getRedisConfig60(): yandex_cloud_mdb_redis_v1_config_redis6_0_pb.RedisConfig6_0 | undefined;
    setRedisConfig60(value?: yandex_cloud_mdb_redis_v1_config_redis6_0_pb.RedisConfig6_0): ConfigSpec;

    hasRedisConfig62(): boolean;
    clearRedisConfig62(): void;
    getRedisConfig62(): yandex_cloud_mdb_redis_v1_config_redis6_2_pb.RedisConfig6_2 | undefined;
    setRedisConfig62(value?: yandex_cloud_mdb_redis_v1_config_redis6_2_pb.RedisConfig6_2): ConfigSpec;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_mdb_redis_v1_cluster_pb.Resources | undefined;
    setResources(value?: yandex_cloud_mdb_redis_v1_cluster_pb.Resources): ConfigSpec;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): ConfigSpec;

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): yandex_cloud_mdb_redis_v1_cluster_pb.Access | undefined;
    setAccess(value?: yandex_cloud_mdb_redis_v1_cluster_pb.Access): ConfigSpec;

    getRedisSpecCase(): ConfigSpec.RedisSpecCase;

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
        redisConfig50?: yandex_cloud_mdb_redis_v1_config_redis5_0_pb.RedisConfig5_0.AsObject,
        redisConfig60?: yandex_cloud_mdb_redis_v1_config_redis6_0_pb.RedisConfig6_0.AsObject,
        redisConfig62?: yandex_cloud_mdb_redis_v1_config_redis6_2_pb.RedisConfig6_2.AsObject,
        resources?: yandex_cloud_mdb_redis_v1_cluster_pb.Resources.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        access?: yandex_cloud_mdb_redis_v1_cluster_pb.Access.AsObject,
    }

    export enum RedisSpecCase {
        REDIS_SPEC_NOT_SET = 0,
        REDIS_CONFIG_5_0 = 2,
        REDIS_CONFIG_6_0 = 6,
        REDIS_CONFIG_6_2 = 7,
    }

}
