// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_dataproc_v1_common_pb from "../../../../yandex/cloud/dataproc/v1/common_pb";
import * as yandex_cloud_dataproc_v1_cluster_pb from "../../../../yandex/cloud/dataproc/v1/cluster_pb";
import * as yandex_cloud_dataproc_v1_subcluster_pb from "../../../../yandex/cloud/dataproc/v1/subcluster_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";

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
    getClustersList(): Array<yandex_cloud_dataproc_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_dataproc_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_dataproc_v1_cluster_pb.Cluster, index?: number): yandex_cloud_dataproc_v1_cluster_pb.Cluster;
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
        clustersList: Array<yandex_cloud_dataproc_v1_cluster_pb.Cluster.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSubclusterConfigSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateSubclusterConfigSpec;
    getRole(): yandex_cloud_dataproc_v1_subcluster_pb.Role;
    setRole(value: yandex_cloud_dataproc_v1_subcluster_pb.Role): CreateSubclusterConfigSpec;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_dataproc_v1_common_pb.Resources | undefined;
    setResources(value?: yandex_cloud_dataproc_v1_common_pb.Resources): CreateSubclusterConfigSpec;
    getSubnetId(): string;
    setSubnetId(value: string): CreateSubclusterConfigSpec;
    getHostsCount(): number;
    setHostsCount(value: number): CreateSubclusterConfigSpec;

    hasAutoscalingConfig(): boolean;
    clearAutoscalingConfig(): void;
    getAutoscalingConfig(): yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig | undefined;
    setAutoscalingConfig(value?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig): CreateSubclusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubclusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubclusterConfigSpec): CreateSubclusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubclusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubclusterConfigSpec;
    static deserializeBinaryFromReader(message: CreateSubclusterConfigSpec, reader: jspb.BinaryReader): CreateSubclusterConfigSpec;
}

export namespace CreateSubclusterConfigSpec {
    export type AsObject = {
        name: string,
        role: yandex_cloud_dataproc_v1_subcluster_pb.Role,
        resources?: yandex_cloud_dataproc_v1_common_pb.Resources.AsObject,
        subnetId: string,
        hostsCount: number,
        autoscalingConfig?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig.AsObject,
    }
}

export class UpdateSubclusterConfigSpec extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateSubclusterConfigSpec;
    getName(): string;
    setName(value: string): UpdateSubclusterConfigSpec;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_dataproc_v1_common_pb.Resources | undefined;
    setResources(value?: yandex_cloud_dataproc_v1_common_pb.Resources): UpdateSubclusterConfigSpec;
    getHostsCount(): number;
    setHostsCount(value: number): UpdateSubclusterConfigSpec;

    hasAutoscalingConfig(): boolean;
    clearAutoscalingConfig(): void;
    getAutoscalingConfig(): yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig | undefined;
    setAutoscalingConfig(value?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig): UpdateSubclusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubclusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubclusterConfigSpec): UpdateSubclusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubclusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubclusterConfigSpec;
    static deserializeBinaryFromReader(message: UpdateSubclusterConfigSpec, reader: jspb.BinaryReader): UpdateSubclusterConfigSpec;
}

export namespace UpdateSubclusterConfigSpec {
    export type AsObject = {
        id: string,
        name: string,
        resources?: yandex_cloud_dataproc_v1_common_pb.Resources.AsObject,
        hostsCount: number,
        autoscalingConfig?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig.AsObject,
    }
}

export class CreateClusterConfigSpec extends jspb.Message { 
    getVersionId(): string;
    setVersionId(value: string): CreateClusterConfigSpec;

    hasHadoop(): boolean;
    clearHadoop(): void;
    getHadoop(): yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig | undefined;
    setHadoop(value?: yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig): CreateClusterConfigSpec;
    clearSubclustersSpecList(): void;
    getSubclustersSpecList(): Array<CreateSubclusterConfigSpec>;
    setSubclustersSpecList(value: Array<CreateSubclusterConfigSpec>): CreateClusterConfigSpec;
    addSubclustersSpec(value?: CreateSubclusterConfigSpec, index?: number): CreateSubclusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterConfigSpec): CreateClusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterConfigSpec;
    static deserializeBinaryFromReader(message: CreateClusterConfigSpec, reader: jspb.BinaryReader): CreateClusterConfigSpec;
}

export namespace CreateClusterConfigSpec {
    export type AsObject = {
        versionId: string,
        hadoop?: yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig.AsObject,
        subclustersSpecList: Array<CreateSubclusterConfigSpec.AsObject>,
    }
}

export class UpdateClusterConfigSpec extends jspb.Message { 
    clearSubclustersSpecList(): void;
    getSubclustersSpecList(): Array<UpdateSubclusterConfigSpec>;
    setSubclustersSpecList(value: Array<UpdateSubclusterConfigSpec>): UpdateClusterConfigSpec;
    addSubclustersSpec(value?: UpdateSubclusterConfigSpec, index?: number): UpdateSubclusterConfigSpec;

    hasHadoop(): boolean;
    clearHadoop(): void;
    getHadoop(): yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig | undefined;
    setHadoop(value?: yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig): UpdateClusterConfigSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterConfigSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterConfigSpec): UpdateClusterConfigSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterConfigSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterConfigSpec;
    static deserializeBinaryFromReader(message: UpdateClusterConfigSpec, reader: jspb.BinaryReader): UpdateClusterConfigSpec;
}

export namespace UpdateClusterConfigSpec {
    export type AsObject = {
        subclustersSpecList: Array<UpdateSubclusterConfigSpec.AsObject>,
        hadoop?: yandex_cloud_dataproc_v1_cluster_pb.HadoopConfig.AsObject,
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

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): CreateClusterConfigSpec | undefined;
    setConfigSpec(value?: CreateClusterConfigSpec): CreateClusterRequest;
    getZoneId(): string;
    setZoneId(value: string): CreateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateClusterRequest;
    getBucket(): string;
    setBucket(value: string): CreateClusterRequest;
    getUiProxy(): boolean;
    setUiProxy(value: boolean): CreateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    clearHostGroupIdsList(): void;
    getHostGroupIdsList(): Array<string>;
    setHostGroupIdsList(value: Array<string>): CreateClusterRequest;
    addHostGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateClusterRequest;
    getLogGroupId(): string;
    setLogGroupId(value: string): CreateClusterRequest;

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
        configSpec?: CreateClusterConfigSpec.AsObject,
        zoneId: string,
        serviceAccountId: string,
        bucket: string,
        uiProxy: boolean,
        securityGroupIdsList: Array<string>,
        hostGroupIdsList: Array<string>,
        deletionProtection: boolean,
        logGroupId: string,
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
    getConfigSpec(): UpdateClusterConfigSpec | undefined;
    setConfigSpec(value?: UpdateClusterConfigSpec): UpdateClusterRequest;
    getName(): string;
    setName(value: string): UpdateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateClusterRequest;
    getBucket(): string;
    setBucket(value: string): UpdateClusterRequest;
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): UpdateClusterRequest;
    getUiProxy(): boolean;
    setUiProxy(value: boolean): UpdateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): UpdateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateClusterRequest;
    getLogGroupId(): string;
    setLogGroupId(value: string): UpdateClusterRequest;

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
        configSpec?: UpdateClusterConfigSpec.AsObject,
        name: string,
        serviceAccountId: string,
        bucket: string,
        decommissionTimeout: number,
        uiProxy: boolean,
        securityGroupIdsList: Array<string>,
        deletionProtection: boolean,
        logGroupId: string,
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
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): DeleteClusterRequest;

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
        decommissionTimeout: number,
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
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): StopClusterRequest;

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
        decommissionTimeout: number,
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
    getFilter(): string;
    setFilter(value: string): ListClusterHostsRequest;

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
        filter: string,
    }
}

export class ListClusterHostsResponse extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<yandex_cloud_dataproc_v1_subcluster_pb.Host>;
    setHostsList(value: Array<yandex_cloud_dataproc_v1_subcluster_pb.Host>): ListClusterHostsResponse;
    addHosts(value?: yandex_cloud_dataproc_v1_subcluster_pb.Host, index?: number): yandex_cloud_dataproc_v1_subcluster_pb.Host;
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
        hostsList: Array<yandex_cloud_dataproc_v1_subcluster_pb.Host.AsObject>,
        nextPageToken: string,
    }
}

export class ListUILinksRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListUILinksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUILinksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUILinksRequest): ListUILinksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUILinksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUILinksRequest;
    static deserializeBinaryFromReader(message: ListUILinksRequest, reader: jspb.BinaryReader): ListUILinksRequest;
}

export namespace ListUILinksRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class UILink extends jspb.Message { 
    getName(): string;
    setName(value: string): UILink;
    getUrl(): string;
    setUrl(value: string): UILink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UILink.AsObject;
    static toObject(includeInstance: boolean, msg: UILink): UILink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UILink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UILink;
    static deserializeBinaryFromReader(message: UILink, reader: jspb.BinaryReader): UILink;
}

export namespace UILink {
    export type AsObject = {
        name: string,
        url: string,
    }
}

export class ListUILinksResponse extends jspb.Message { 
    clearLinksList(): void;
    getLinksList(): Array<UILink>;
    setLinksList(value: Array<UILink>): ListUILinksResponse;
    addLinks(value?: UILink, index?: number): UILink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUILinksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUILinksResponse): ListUILinksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUILinksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUILinksResponse;
    static deserializeBinaryFromReader(message: ListUILinksResponse, reader: jspb.BinaryReader): ListUILinksResponse;
}

export namespace ListUILinksResponse {
    export type AsObject = {
        linksList: Array<UILink.AsObject>,
    }
}
