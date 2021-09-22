// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_k8s_v1_cluster_pb from "../../../../yandex/cloud/k8s/v1/cluster_pb";
import * as yandex_cloud_k8s_v1_node_group_pb from "../../../../yandex/cloud/k8s/v1/node_group_pb";
import * as yandex_cloud_k8s_v1_node_pb from "../../../../yandex/cloud/k8s/v1/node_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

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
    getClustersList(): Array<yandex_cloud_k8s_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_k8s_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_k8s_v1_cluster_pb.Cluster, index?: number): yandex_cloud_k8s_v1_cluster_pb.Cluster;
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
        clustersList: Array<yandex_cloud_k8s_v1_cluster_pb.Cluster.AsObject>,
        nextPageToken: string,
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

export class UpdateClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterRequest;
    getName(): string;
    setName(value: string): UpdateClusterRequest;
    getDescription(): string;
    setDescription(value: string): UpdateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasGatewayIpv4Address(): boolean;
    clearGatewayIpv4Address(): void;
    getGatewayIpv4Address(): string;
    setGatewayIpv4Address(value: string): UpdateClusterRequest;

    hasMasterSpec(): boolean;
    clearMasterSpec(): void;
    getMasterSpec(): MasterUpdateSpec | undefined;
    setMasterSpec(value?: MasterUpdateSpec): UpdateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateClusterRequest;
    getNodeServiceAccountId(): string;
    setNodeServiceAccountId(value: string): UpdateClusterRequest;

    hasNetworkPolicy(): boolean;
    clearNetworkPolicy(): void;
    getNetworkPolicy(): yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy | undefined;
    setNetworkPolicy(value?: yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy): UpdateClusterRequest;

    getInternetGatewayCase(): UpdateClusterRequest.InternetGatewayCase;

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
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        gatewayIpv4Address: string,
        masterSpec?: MasterUpdateSpec.AsObject,
        serviceAccountId: string,
        nodeServiceAccountId: string,
        networkPolicy?: yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy.AsObject,
    }

    export enum InternetGatewayCase {
        INTERNET_GATEWAY_NOT_SET = 0,
        GATEWAY_IPV4_ADDRESS = 6,
    }

}

export class MasterUpdateSpec extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec | undefined;
    setVersion(value?: yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec): MasterUpdateSpec;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy): MasterUpdateSpec;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): MasterUpdateSpec;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterUpdateSpec.AsObject;
    static toObject(includeInstance: boolean, msg: MasterUpdateSpec): MasterUpdateSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterUpdateSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterUpdateSpec;
    static deserializeBinaryFromReader(message: MasterUpdateSpec, reader: jspb.BinaryReader): MasterUpdateSpec;
}

export namespace MasterUpdateSpec {
    export type AsObject = {
        version?: yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec.AsObject,
        maintenancePolicy?: yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy.AsObject,
        securityGroupIdsList: Array<string>,
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

export class CreateClusterRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateClusterRequest;
    getName(): string;
    setName(value: string): CreateClusterRequest;
    getDescription(): string;
    setDescription(value: string): CreateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): CreateClusterRequest;

    hasMasterSpec(): boolean;
    clearMasterSpec(): void;
    getMasterSpec(): MasterSpec | undefined;
    setMasterSpec(value?: MasterSpec): CreateClusterRequest;

    hasIpAllocationPolicy(): boolean;
    clearIpAllocationPolicy(): void;
    getIpAllocationPolicy(): yandex_cloud_k8s_v1_cluster_pb.IPAllocationPolicy | undefined;
    setIpAllocationPolicy(value?: yandex_cloud_k8s_v1_cluster_pb.IPAllocationPolicy): CreateClusterRequest;

    hasGatewayIpv4Address(): boolean;
    clearGatewayIpv4Address(): void;
    getGatewayIpv4Address(): string;
    setGatewayIpv4Address(value: string): CreateClusterRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateClusterRequest;
    getNodeServiceAccountId(): string;
    setNodeServiceAccountId(value: string): CreateClusterRequest;
    getReleaseChannel(): yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel;
    setReleaseChannel(value: yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel): CreateClusterRequest;

    hasNetworkPolicy(): boolean;
    clearNetworkPolicy(): void;
    getNetworkPolicy(): yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy | undefined;
    setNetworkPolicy(value?: yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy): CreateClusterRequest;

    hasKmsProvider(): boolean;
    clearKmsProvider(): void;
    getKmsProvider(): yandex_cloud_k8s_v1_cluster_pb.KMSProvider | undefined;
    setKmsProvider(value?: yandex_cloud_k8s_v1_cluster_pb.KMSProvider): CreateClusterRequest;

    hasCilium(): boolean;
    clearCilium(): void;
    getCilium(): yandex_cloud_k8s_v1_cluster_pb.Cilium | undefined;
    setCilium(value?: yandex_cloud_k8s_v1_cluster_pb.Cilium): CreateClusterRequest;

    getInternetGatewayCase(): CreateClusterRequest.InternetGatewayCase;
    getNetworkImplementationCase(): CreateClusterRequest.NetworkImplementationCase;

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
        networkId: string,
        masterSpec?: MasterSpec.AsObject,
        ipAllocationPolicy?: yandex_cloud_k8s_v1_cluster_pb.IPAllocationPolicy.AsObject,
        gatewayIpv4Address: string,
        serviceAccountId: string,
        nodeServiceAccountId: string,
        releaseChannel: yandex_cloud_k8s_v1_cluster_pb.ReleaseChannel,
        networkPolicy?: yandex_cloud_k8s_v1_cluster_pb.NetworkPolicy.AsObject,
        kmsProvider?: yandex_cloud_k8s_v1_cluster_pb.KMSProvider.AsObject,
        cilium?: yandex_cloud_k8s_v1_cluster_pb.Cilium.AsObject,
    }

    export enum InternetGatewayCase {
        INTERNET_GATEWAY_NOT_SET = 0,
        GATEWAY_IPV4_ADDRESS = 8,
    }

    export enum NetworkImplementationCase {
        NETWORK_IMPLEMENTATION_NOT_SET = 0,
        CILIUM = 14,
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

export class AutoUpgradeMasterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AutoUpgradeMasterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoUpgradeMasterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AutoUpgradeMasterMetadata): AutoUpgradeMasterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoUpgradeMasterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoUpgradeMasterMetadata;
    static deserializeBinaryFromReader(message: AutoUpgradeMasterMetadata, reader: jspb.BinaryReader): AutoUpgradeMasterMetadata;
}

export namespace AutoUpgradeMasterMetadata {
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
    getFilter(): string;
    setFilter(value: string): ListClusterOperationsRequest;

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
        filter: string,
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

export class ListClusterNodeGroupsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterNodeGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterNodeGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterNodeGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListClusterNodeGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterNodeGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterNodeGroupsRequest): ListClusterNodeGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterNodeGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterNodeGroupsRequest;
    static deserializeBinaryFromReader(message: ListClusterNodeGroupsRequest, reader: jspb.BinaryReader): ListClusterNodeGroupsRequest;
}

export namespace ListClusterNodeGroupsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListClusterNodeGroupsResponse extends jspb.Message { 
    clearNodeGroupsList(): void;
    getNodeGroupsList(): Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>;
    setNodeGroupsList(value: Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>): ListClusterNodeGroupsResponse;
    addNodeGroups(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroup, index?: number): yandex_cloud_k8s_v1_node_group_pb.NodeGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterNodeGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterNodeGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterNodeGroupsResponse): ListClusterNodeGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterNodeGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterNodeGroupsResponse;
    static deserializeBinaryFromReader(message: ListClusterNodeGroupsResponse, reader: jspb.BinaryReader): ListClusterNodeGroupsResponse;
}

export namespace ListClusterNodeGroupsResponse {
    export type AsObject = {
        nodeGroupsList: Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup.AsObject>,
        nextPageToken: string,
    }
}

export class ListClusterNodesRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterNodesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterNodesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterNodesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterNodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterNodesRequest): ListClusterNodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterNodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterNodesRequest;
    static deserializeBinaryFromReader(message: ListClusterNodesRequest, reader: jspb.BinaryReader): ListClusterNodesRequest;
}

export namespace ListClusterNodesRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterNodesResponse extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<yandex_cloud_k8s_v1_node_pb.Node>;
    setNodesList(value: Array<yandex_cloud_k8s_v1_node_pb.Node>): ListClusterNodesResponse;
    addNodes(value?: yandex_cloud_k8s_v1_node_pb.Node, index?: number): yandex_cloud_k8s_v1_node_pb.Node;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterNodesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterNodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterNodesResponse): ListClusterNodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterNodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterNodesResponse;
    static deserializeBinaryFromReader(message: ListClusterNodesResponse, reader: jspb.BinaryReader): ListClusterNodesResponse;
}

export namespace ListClusterNodesResponse {
    export type AsObject = {
        nodesList: Array<yandex_cloud_k8s_v1_node_pb.Node.AsObject>,
        nextPageToken: string,
    }
}

export class MasterSpec extends jspb.Message { 

    hasZonalMasterSpec(): boolean;
    clearZonalMasterSpec(): void;
    getZonalMasterSpec(): ZonalMasterSpec | undefined;
    setZonalMasterSpec(value?: ZonalMasterSpec): MasterSpec;

    hasRegionalMasterSpec(): boolean;
    clearRegionalMasterSpec(): void;
    getRegionalMasterSpec(): RegionalMasterSpec | undefined;
    setRegionalMasterSpec(value?: RegionalMasterSpec): MasterSpec;
    getVersion(): string;
    setVersion(value: string): MasterSpec;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy): MasterSpec;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): MasterSpec;
    addSecurityGroupIds(value: string, index?: number): string;

    getMasterTypeCase(): MasterSpec.MasterTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterSpec.AsObject;
    static toObject(includeInstance: boolean, msg: MasterSpec): MasterSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterSpec;
    static deserializeBinaryFromReader(message: MasterSpec, reader: jspb.BinaryReader): MasterSpec;
}

export namespace MasterSpec {
    export type AsObject = {
        zonalMasterSpec?: ZonalMasterSpec.AsObject,
        regionalMasterSpec?: RegionalMasterSpec.AsObject,
        version: string,
        maintenancePolicy?: yandex_cloud_k8s_v1_cluster_pb.MasterMaintenancePolicy.AsObject,
        securityGroupIdsList: Array<string>,
    }

    export enum MasterTypeCase {
        MASTER_TYPE_NOT_SET = 0,
        ZONAL_MASTER_SPEC = 1,
        REGIONAL_MASTER_SPEC = 2,
    }

}

export class ZonalMasterSpec extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): ZonalMasterSpec;

    hasInternalV4AddressSpec(): boolean;
    clearInternalV4AddressSpec(): void;
    getInternalV4AddressSpec(): InternalAddressSpec | undefined;
    setInternalV4AddressSpec(value?: InternalAddressSpec): ZonalMasterSpec;

    hasExternalV4AddressSpec(): boolean;
    clearExternalV4AddressSpec(): void;
    getExternalV4AddressSpec(): ExternalAddressSpec | undefined;
    setExternalV4AddressSpec(value?: ExternalAddressSpec): ZonalMasterSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZonalMasterSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ZonalMasterSpec): ZonalMasterSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZonalMasterSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZonalMasterSpec;
    static deserializeBinaryFromReader(message: ZonalMasterSpec, reader: jspb.BinaryReader): ZonalMasterSpec;
}

export namespace ZonalMasterSpec {
    export type AsObject = {
        zoneId: string,
        internalV4AddressSpec?: InternalAddressSpec.AsObject,
        externalV4AddressSpec?: ExternalAddressSpec.AsObject,
    }
}

export class RegionalMasterSpec extends jspb.Message { 
    getRegionId(): string;
    setRegionId(value: string): RegionalMasterSpec;
    clearLocationsList(): void;
    getLocationsList(): Array<MasterLocation>;
    setLocationsList(value: Array<MasterLocation>): RegionalMasterSpec;
    addLocations(value?: MasterLocation, index?: number): MasterLocation;

    hasExternalV4AddressSpec(): boolean;
    clearExternalV4AddressSpec(): void;
    getExternalV4AddressSpec(): ExternalAddressSpec | undefined;
    setExternalV4AddressSpec(value?: ExternalAddressSpec): RegionalMasterSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionalMasterSpec.AsObject;
    static toObject(includeInstance: boolean, msg: RegionalMasterSpec): RegionalMasterSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionalMasterSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionalMasterSpec;
    static deserializeBinaryFromReader(message: RegionalMasterSpec, reader: jspb.BinaryReader): RegionalMasterSpec;
}

export namespace RegionalMasterSpec {
    export type AsObject = {
        regionId: string,
        locationsList: Array<MasterLocation.AsObject>,
        externalV4AddressSpec?: ExternalAddressSpec.AsObject,
    }
}

export class InternalAddressSpec extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): InternalAddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: InternalAddressSpec): InternalAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalAddressSpec;
    static deserializeBinaryFromReader(message: InternalAddressSpec, reader: jspb.BinaryReader): InternalAddressSpec;
}

export namespace InternalAddressSpec {
    export type AsObject = {
        subnetId: string,
    }
}

export class ExternalAddressSpec extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalAddressSpec): ExternalAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalAddressSpec;
    static deserializeBinaryFromReader(message: ExternalAddressSpec, reader: jspb.BinaryReader): ExternalAddressSpec;
}

export namespace ExternalAddressSpec {
    export type AsObject = {
    }
}

export class MasterLocation extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): MasterLocation;

    hasInternalV4AddressSpec(): boolean;
    clearInternalV4AddressSpec(): void;
    getInternalV4AddressSpec(): InternalAddressSpec | undefined;
    setInternalV4AddressSpec(value?: InternalAddressSpec): MasterLocation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterLocation.AsObject;
    static toObject(includeInstance: boolean, msg: MasterLocation): MasterLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterLocation;
    static deserializeBinaryFromReader(message: MasterLocation, reader: jspb.BinaryReader): MasterLocation;
}

export namespace MasterLocation {
    export type AsObject = {
        zoneId: string,
        internalV4AddressSpec?: InternalAddressSpec.AsObject,
    }
}
