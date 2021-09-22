// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/node_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_k8s_v1_node_group_pb from "../../../../yandex/cloud/k8s/v1/node_group_pb";
import * as yandex_cloud_k8s_v1_node_pb from "../../../../yandex/cloud/k8s/v1/node_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetNodeGroupRequest extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): GetNodeGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNodeGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNodeGroupRequest): GetNodeGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNodeGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNodeGroupRequest;
    static deserializeBinaryFromReader(message: GetNodeGroupRequest, reader: jspb.BinaryReader): GetNodeGroupRequest;
}

export namespace GetNodeGroupRequest {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class ListNodeGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListNodeGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNodeGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNodeGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListNodeGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupsRequest): ListNodeGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupsRequest;
    static deserializeBinaryFromReader(message: ListNodeGroupsRequest, reader: jspb.BinaryReader): ListNodeGroupsRequest;
}

export namespace ListNodeGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListNodeGroupsResponse extends jspb.Message { 
    clearNodeGroupsList(): void;
    getNodeGroupsList(): Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>;
    setNodeGroupsList(value: Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup>): ListNodeGroupsResponse;
    addNodeGroups(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroup, index?: number): yandex_cloud_k8s_v1_node_group_pb.NodeGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNodeGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupsResponse): ListNodeGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupsResponse;
    static deserializeBinaryFromReader(message: ListNodeGroupsResponse, reader: jspb.BinaryReader): ListNodeGroupsResponse;
}

export namespace ListNodeGroupsResponse {
    export type AsObject = {
        nodeGroupsList: Array<yandex_cloud_k8s_v1_node_group_pb.NodeGroup.AsObject>,
        nextPageToken: string,
    }
}

export class ListNodeGroupNodesRequest extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): ListNodeGroupNodesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNodeGroupNodesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNodeGroupNodesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupNodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupNodesRequest): ListNodeGroupNodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupNodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupNodesRequest;
    static deserializeBinaryFromReader(message: ListNodeGroupNodesRequest, reader: jspb.BinaryReader): ListNodeGroupNodesRequest;
}

export namespace ListNodeGroupNodesRequest {
    export type AsObject = {
        nodeGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNodeGroupNodesResponse extends jspb.Message { 
    clearNodesList(): void;
    getNodesList(): Array<yandex_cloud_k8s_v1_node_pb.Node>;
    setNodesList(value: Array<yandex_cloud_k8s_v1_node_pb.Node>): ListNodeGroupNodesResponse;
    addNodes(value?: yandex_cloud_k8s_v1_node_pb.Node, index?: number): yandex_cloud_k8s_v1_node_pb.Node;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNodeGroupNodesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupNodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupNodesResponse): ListNodeGroupNodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupNodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupNodesResponse;
    static deserializeBinaryFromReader(message: ListNodeGroupNodesResponse, reader: jspb.BinaryReader): ListNodeGroupNodesResponse;
}

export namespace ListNodeGroupNodesResponse {
    export type AsObject = {
        nodesList: Array<yandex_cloud_k8s_v1_node_pb.Node.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteNodeGroupRequest extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): DeleteNodeGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNodeGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNodeGroupRequest): DeleteNodeGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNodeGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNodeGroupRequest;
    static deserializeBinaryFromReader(message: DeleteNodeGroupRequest, reader: jspb.BinaryReader): DeleteNodeGroupRequest;
}

export namespace DeleteNodeGroupRequest {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class DeleteNodeGroupMetadata extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): DeleteNodeGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNodeGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNodeGroupMetadata): DeleteNodeGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNodeGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNodeGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteNodeGroupMetadata, reader: jspb.BinaryReader): DeleteNodeGroupMetadata;
}

export namespace DeleteNodeGroupMetadata {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class UpdateNodeGroupRequest extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): UpdateNodeGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNodeGroupRequest;
    getName(): string;
    setName(value: string): UpdateNodeGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateNodeGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasNodeTemplate(): boolean;
    clearNodeTemplate(): void;
    getNodeTemplate(): yandex_cloud_k8s_v1_node_pb.NodeTemplate | undefined;
    setNodeTemplate(value?: yandex_cloud_k8s_v1_node_pb.NodeTemplate): UpdateNodeGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_k8s_v1_node_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_k8s_v1_node_group_pb.ScalePolicy): UpdateNodeGroupRequest;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy): UpdateNodeGroupRequest;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): yandex_cloud_k8s_v1_node_group_pb.DeployPolicy | undefined;
    setDeployPolicy(value?: yandex_cloud_k8s_v1_node_group_pb.DeployPolicy): UpdateNodeGroupRequest;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec | undefined;
    setVersion(value?: yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec): UpdateNodeGroupRequest;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy): UpdateNodeGroupRequest;
    clearAllowedUnsafeSysctlsList(): void;
    getAllowedUnsafeSysctlsList(): Array<string>;
    setAllowedUnsafeSysctlsList(value: Array<string>): UpdateNodeGroupRequest;
    addAllowedUnsafeSysctls(value: string, index?: number): string;
    clearNodeTaintsList(): void;
    getNodeTaintsList(): Array<yandex_cloud_k8s_v1_node_pb.Taint>;
    setNodeTaintsList(value: Array<yandex_cloud_k8s_v1_node_pb.Taint>): UpdateNodeGroupRequest;
    addNodeTaints(value?: yandex_cloud_k8s_v1_node_pb.Taint, index?: number): yandex_cloud_k8s_v1_node_pb.Taint;

    getNodeLabelsMap(): jspb.Map<string, string>;
    clearNodeLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNodeGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNodeGroupRequest): UpdateNodeGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNodeGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNodeGroupRequest;
    static deserializeBinaryFromReader(message: UpdateNodeGroupRequest, reader: jspb.BinaryReader): UpdateNodeGroupRequest;
}

export namespace UpdateNodeGroupRequest {
    export type AsObject = {
        nodeGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        nodeTemplate?: yandex_cloud_k8s_v1_node_pb.NodeTemplate.AsObject,
        scalePolicy?: yandex_cloud_k8s_v1_node_group_pb.ScalePolicy.AsObject,
        allocationPolicy?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy.AsObject,
        deployPolicy?: yandex_cloud_k8s_v1_node_group_pb.DeployPolicy.AsObject,
        version?: yandex_cloud_k8s_v1_version_pb.UpdateVersionSpec.AsObject,
        maintenancePolicy?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy.AsObject,
        allowedUnsafeSysctlsList: Array<string>,
        nodeTaintsList: Array<yandex_cloud_k8s_v1_node_pb.Taint.AsObject>,

        nodeLabelsMap: Array<[string, string]>,
    }
}

export class UpdateNodeGroupMetadata extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): UpdateNodeGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNodeGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNodeGroupMetadata): UpdateNodeGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNodeGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNodeGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateNodeGroupMetadata, reader: jspb.BinaryReader): UpdateNodeGroupMetadata;
}

export namespace UpdateNodeGroupMetadata {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class CreateNodeGroupRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateNodeGroupRequest;
    getName(): string;
    setName(value: string): CreateNodeGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateNodeGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasNodeTemplate(): boolean;
    clearNodeTemplate(): void;
    getNodeTemplate(): yandex_cloud_k8s_v1_node_pb.NodeTemplate | undefined;
    setNodeTemplate(value?: yandex_cloud_k8s_v1_node_pb.NodeTemplate): CreateNodeGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_k8s_v1_node_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_k8s_v1_node_group_pb.ScalePolicy): CreateNodeGroupRequest;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy): CreateNodeGroupRequest;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): yandex_cloud_k8s_v1_node_group_pb.DeployPolicy | undefined;
    setDeployPolicy(value?: yandex_cloud_k8s_v1_node_group_pb.DeployPolicy): CreateNodeGroupRequest;
    getVersion(): string;
    setVersion(value: string): CreateNodeGroupRequest;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy): CreateNodeGroupRequest;
    clearAllowedUnsafeSysctlsList(): void;
    getAllowedUnsafeSysctlsList(): Array<string>;
    setAllowedUnsafeSysctlsList(value: Array<string>): CreateNodeGroupRequest;
    addAllowedUnsafeSysctls(value: string, index?: number): string;
    clearNodeTaintsList(): void;
    getNodeTaintsList(): Array<yandex_cloud_k8s_v1_node_pb.Taint>;
    setNodeTaintsList(value: Array<yandex_cloud_k8s_v1_node_pb.Taint>): CreateNodeGroupRequest;
    addNodeTaints(value?: yandex_cloud_k8s_v1_node_pb.Taint, index?: number): yandex_cloud_k8s_v1_node_pb.Taint;

    getNodeLabelsMap(): jspb.Map<string, string>;
    clearNodeLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNodeGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNodeGroupRequest): CreateNodeGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNodeGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNodeGroupRequest;
    static deserializeBinaryFromReader(message: CreateNodeGroupRequest, reader: jspb.BinaryReader): CreateNodeGroupRequest;
}

export namespace CreateNodeGroupRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        nodeTemplate?: yandex_cloud_k8s_v1_node_pb.NodeTemplate.AsObject,
        scalePolicy?: yandex_cloud_k8s_v1_node_group_pb.ScalePolicy.AsObject,
        allocationPolicy?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupAllocationPolicy.AsObject,
        deployPolicy?: yandex_cloud_k8s_v1_node_group_pb.DeployPolicy.AsObject,
        version: string,
        maintenancePolicy?: yandex_cloud_k8s_v1_node_group_pb.NodeGroupMaintenancePolicy.AsObject,
        allowedUnsafeSysctlsList: Array<string>,
        nodeTaintsList: Array<yandex_cloud_k8s_v1_node_pb.Taint.AsObject>,

        nodeLabelsMap: Array<[string, string]>,
    }
}

export class CreateNodeGroupMetadata extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): CreateNodeGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNodeGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNodeGroupMetadata): CreateNodeGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNodeGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNodeGroupMetadata;
    static deserializeBinaryFromReader(message: CreateNodeGroupMetadata, reader: jspb.BinaryReader): CreateNodeGroupMetadata;
}

export namespace CreateNodeGroupMetadata {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class AutoUpgradeNodeGroupMetadata extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): AutoUpgradeNodeGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoUpgradeNodeGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AutoUpgradeNodeGroupMetadata): AutoUpgradeNodeGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoUpgradeNodeGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoUpgradeNodeGroupMetadata;
    static deserializeBinaryFromReader(message: AutoUpgradeNodeGroupMetadata, reader: jspb.BinaryReader): AutoUpgradeNodeGroupMetadata;
}

export namespace AutoUpgradeNodeGroupMetadata {
    export type AsObject = {
        nodeGroupId: string,
    }
}

export class ListNodeGroupOperationsRequest extends jspb.Message { 
    getNodeGroupId(): string;
    setNodeGroupId(value: string): ListNodeGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNodeGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNodeGroupOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListNodeGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupOperationsRequest): ListNodeGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListNodeGroupOperationsRequest, reader: jspb.BinaryReader): ListNodeGroupOperationsRequest;
}

export namespace ListNodeGroupOperationsRequest {
    export type AsObject = {
        nodeGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListNodeGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListNodeGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNodeGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNodeGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNodeGroupOperationsResponse): ListNodeGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNodeGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNodeGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListNodeGroupOperationsResponse, reader: jspb.BinaryReader): ListNodeGroupOperationsResponse;
}

export namespace ListNodeGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
