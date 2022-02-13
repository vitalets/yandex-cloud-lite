// package: yandex.cloud.mdb.greenplum.v1
// file: yandex/cloud/mdb/greenplum/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_greenplum_v1_cluster_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/cluster_pb";
import * as yandex_cloud_mdb_greenplum_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance_pb";
import * as yandex_cloud_mdb_greenplum_v1_config_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/config_pb";
import * as yandex_cloud_mdb_greenplum_v1_host_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/host_pb";

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
    getClustersList(): Array<yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster, index?: number): yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster;
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
        clustersList: Array<yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster.AsObject>,
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
    getEnvironment(): yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster.Environment): CreateClusterRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig | undefined;
    setConfig(value?: yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig): CreateClusterRequest;

    hasMasterConfig(): boolean;
    clearMasterConfig(): void;
    getMasterConfig(): MasterSubclusterConfigSpec | undefined;
    setMasterConfig(value?: MasterSubclusterConfigSpec): CreateClusterRequest;

    hasSegmentConfig(): boolean;
    clearSegmentConfig(): void;
    getSegmentConfig(): SegmentSubclusterConfigSpec | undefined;
    setSegmentConfig(value?: SegmentSubclusterConfigSpec): CreateClusterRequest;
    getMasterHostCount(): number;
    setMasterHostCount(value: number): CreateClusterRequest;
    getSegmentInHost(): number;
    setSegmentInHost(value: number): CreateClusterRequest;
    getSegmentHostCount(): number;
    setSegmentHostCount(value: number): CreateClusterRequest;
    getUserName(): string;
    setUserName(value: string): CreateClusterRequest;
    getUserPassword(): string;
    setUserPassword(value: string): CreateClusterRequest;
    getNetworkId(): string;
    setNetworkId(value: string): CreateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateClusterRequest;
    clearHostGroupIdsList(): void;
    getHostGroupIdsList(): Array<string>;
    setHostGroupIdsList(value: Array<string>): CreateClusterRequest;
    addHostGroupIds(value: string, index?: number): string;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow): CreateClusterRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): ConfigSpec | undefined;
    setConfigSpec(value?: ConfigSpec): CreateClusterRequest;

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
        environment: yandex_cloud_mdb_greenplum_v1_cluster_pb.Cluster.Environment,
        config?: yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig.AsObject,
        masterConfig?: MasterSubclusterConfigSpec.AsObject,
        segmentConfig?: SegmentSubclusterConfigSpec.AsObject,
        masterHostCount: number,
        segmentInHost: number,
        segmentHostCount: number,
        userName: string,
        userPassword: string,
        networkId: string,
        securityGroupIdsList: Array<string>,
        deletionProtection: boolean,
        hostGroupIdsList: Array<string>,
        maintenanceWindow?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow.AsObject,
        configSpec?: ConfigSpec.AsObject,
    }
}

export class ConfigSpec extends jspb.Message { 

    hasGreenplumConfig617(): boolean;
    clearGreenplumConfig617(): void;
    getGreenplumConfig617(): yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_17 | undefined;
    setGreenplumConfig617(value?: yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_17): ConfigSpec;

    hasGreenplumConfig619(): boolean;
    clearGreenplumConfig619(): void;
    getGreenplumConfig619(): yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_19 | undefined;
    setGreenplumConfig619(value?: yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_19): ConfigSpec;

    hasPool(): boolean;
    clearPool(): void;
    getPool(): yandex_cloud_mdb_greenplum_v1_config_pb.ConnectionPoolerConfig | undefined;
    setPool(value?: yandex_cloud_mdb_greenplum_v1_config_pb.ConnectionPoolerConfig): ConfigSpec;

    getGreenplumConfigCase(): ConfigSpec.GreenplumConfigCase;

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
        greenplumConfig617?: yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_17.AsObject,
        greenplumConfig619?: yandex_cloud_mdb_greenplum_v1_config_pb.GreenplumConfig6_19.AsObject,
        pool?: yandex_cloud_mdb_greenplum_v1_config_pb.ConnectionPoolerConfig.AsObject,
    }

    export enum GreenplumConfigCase {
        GREENPLUM_CONFIG_NOT_SET = 0,
        GREENPLUM_CONFIG_6_17 = 1,
        GREENPLUM_CONFIG_6_19 = 2,
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
    getName(): string;
    setName(value: string): UpdateClusterRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig | undefined;
    setConfig(value?: yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig): UpdateClusterRequest;

    hasMasterConfig(): boolean;
    clearMasterConfig(): void;
    getMasterConfig(): MasterSubclusterConfigSpec | undefined;
    setMasterConfig(value?: MasterSubclusterConfigSpec): UpdateClusterRequest;

    hasSegmentConfig(): boolean;
    clearSegmentConfig(): void;
    getSegmentConfig(): SegmentSubclusterConfigSpec | undefined;
    setSegmentConfig(value?: SegmentSubclusterConfigSpec): UpdateClusterRequest;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow): UpdateClusterRequest;
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
        name: string,
        config?: yandex_cloud_mdb_greenplum_v1_cluster_pb.GreenplumConfig.AsObject,
        masterConfig?: MasterSubclusterConfigSpec.AsObject,
        segmentConfig?: SegmentSubclusterConfigSpec.AsObject,
        maintenanceWindow?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow.AsObject,
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
    getHostsList(): Array<yandex_cloud_mdb_greenplum_v1_host_pb.Host>;
    setHostsList(value: Array<yandex_cloud_mdb_greenplum_v1_host_pb.Host>): ListClusterHostsResponse;
    addHosts(value?: yandex_cloud_mdb_greenplum_v1_host_pb.Host, index?: number): yandex_cloud_mdb_greenplum_v1_host_pb.Host;
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
        hostsList: Array<yandex_cloud_mdb_greenplum_v1_host_pb.Host.AsObject>,
        nextPageToken: string,
    }
}

export class MasterSubclusterConfigSpec extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_mdb_greenplum_v1_config_pb.Resources | undefined;
    setResources(value?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources): MasterSubclusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterSubclusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: MasterSubclusterConfigSpec): MasterSubclusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterSubclusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterSubclusterConfigSpec;
    static deserializeBinaryFromReader(message: MasterSubclusterConfigSpec, reader: jspb.BinaryReader): MasterSubclusterConfigSpec;
}

export namespace MasterSubclusterConfigSpec {
    export type AsObject = {
        resources?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources.AsObject,
    }
}

export class SegmentSubclusterConfigSpec extends jspb.Message { 

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_mdb_greenplum_v1_config_pb.Resources | undefined;
    setResources(value?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources): SegmentSubclusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SegmentSubclusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: SegmentSubclusterConfigSpec): SegmentSubclusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SegmentSubclusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SegmentSubclusterConfigSpec;
    static deserializeBinaryFromReader(message: SegmentSubclusterConfigSpec, reader: jspb.BinaryReader): SegmentSubclusterConfigSpec;
}

export namespace SegmentSubclusterConfigSpec {
    export type AsObject = {
        resources?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources.AsObject,
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
    getAlwaysNextPageToken(): boolean;
    setAlwaysNextPageToken(value: boolean): ListClusterLogsRequest;
    getFilter(): string;
    setFilter(value: string): ListClusterLogsRequest;

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
        alwaysNextPageToken: boolean,
        filter: string,
    }

    export enum ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    GREENPLUM = 1,
    GREENPLUM_POOLER = 2,
    }

}
