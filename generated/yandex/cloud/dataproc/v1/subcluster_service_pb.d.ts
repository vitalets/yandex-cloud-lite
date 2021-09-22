// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/subcluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_dataproc_v1_common_pb from "../../../../yandex/cloud/dataproc/v1/common_pb";
import * as yandex_cloud_dataproc_v1_subcluster_pb from "../../../../yandex/cloud/dataproc/v1/subcluster_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";

export class GetSubclusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetSubclusterRequest;
    getSubclusterId(): string;
    setSubclusterId(value: string): GetSubclusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubclusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubclusterRequest): GetSubclusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubclusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubclusterRequest;
    static deserializeBinaryFromReader(message: GetSubclusterRequest, reader: jspb.BinaryReader): GetSubclusterRequest;
}

export namespace GetSubclusterRequest {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
    }
}

export class ListSubclustersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListSubclustersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSubclustersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSubclustersRequest;
    getFilter(): string;
    setFilter(value: string): ListSubclustersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubclustersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubclustersRequest): ListSubclustersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubclustersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubclustersRequest;
    static deserializeBinaryFromReader(message: ListSubclustersRequest, reader: jspb.BinaryReader): ListSubclustersRequest;
}

export namespace ListSubclustersRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListSubclustersResponse extends jspb.Message { 
    clearSubclustersList(): void;
    getSubclustersList(): Array<yandex_cloud_dataproc_v1_subcluster_pb.Subcluster>;
    setSubclustersList(value: Array<yandex_cloud_dataproc_v1_subcluster_pb.Subcluster>): ListSubclustersResponse;
    addSubclusters(value?: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster, index?: number): yandex_cloud_dataproc_v1_subcluster_pb.Subcluster;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSubclustersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubclustersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubclustersResponse): ListSubclustersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubclustersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubclustersResponse;
    static deserializeBinaryFromReader(message: ListSubclustersResponse, reader: jspb.BinaryReader): ListSubclustersResponse;
}

export namespace ListSubclustersResponse {
    export type AsObject = {
        subclustersList: Array<yandex_cloud_dataproc_v1_subcluster_pb.Subcluster.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSubclusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateSubclusterRequest;
    getName(): string;
    setName(value: string): CreateSubclusterRequest;
    getRole(): yandex_cloud_dataproc_v1_subcluster_pb.Role;
    setRole(value: yandex_cloud_dataproc_v1_subcluster_pb.Role): CreateSubclusterRequest;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_dataproc_v1_common_pb.Resources | undefined;
    setResources(value?: yandex_cloud_dataproc_v1_common_pb.Resources): CreateSubclusterRequest;
    getSubnetId(): string;
    setSubnetId(value: string): CreateSubclusterRequest;
    getHostsCount(): number;
    setHostsCount(value: number): CreateSubclusterRequest;

    hasAutoscalingConfig(): boolean;
    clearAutoscalingConfig(): void;
    getAutoscalingConfig(): yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig | undefined;
    setAutoscalingConfig(value?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig): CreateSubclusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubclusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubclusterRequest): CreateSubclusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubclusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubclusterRequest;
    static deserializeBinaryFromReader(message: CreateSubclusterRequest, reader: jspb.BinaryReader): CreateSubclusterRequest;
}

export namespace CreateSubclusterRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
        role: yandex_cloud_dataproc_v1_subcluster_pb.Role,
        resources?: yandex_cloud_dataproc_v1_common_pb.Resources.AsObject,
        subnetId: string,
        hostsCount: number,
        autoscalingConfig?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig.AsObject,
    }
}

export class CreateSubclusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateSubclusterMetadata;
    getSubclusterId(): string;
    setSubclusterId(value: string): CreateSubclusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubclusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubclusterMetadata): CreateSubclusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubclusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubclusterMetadata;
    static deserializeBinaryFromReader(message: CreateSubclusterMetadata, reader: jspb.BinaryReader): CreateSubclusterMetadata;
}

export namespace CreateSubclusterMetadata {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
    }
}

export class UpdateSubclusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateSubclusterRequest;
    getSubclusterId(): string;
    setSubclusterId(value: string): UpdateSubclusterRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSubclusterRequest;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_dataproc_v1_common_pb.Resources | undefined;
    setResources(value?: yandex_cloud_dataproc_v1_common_pb.Resources): UpdateSubclusterRequest;
    getName(): string;
    setName(value: string): UpdateSubclusterRequest;
    getHostsCount(): number;
    setHostsCount(value: number): UpdateSubclusterRequest;
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): UpdateSubclusterRequest;

    hasAutoscalingConfig(): boolean;
    clearAutoscalingConfig(): void;
    getAutoscalingConfig(): yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig | undefined;
    setAutoscalingConfig(value?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig): UpdateSubclusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubclusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubclusterRequest): UpdateSubclusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubclusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubclusterRequest;
    static deserializeBinaryFromReader(message: UpdateSubclusterRequest, reader: jspb.BinaryReader): UpdateSubclusterRequest;
}

export namespace UpdateSubclusterRequest {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        resources?: yandex_cloud_dataproc_v1_common_pb.Resources.AsObject,
        name: string,
        hostsCount: number,
        decommissionTimeout: number,
        autoscalingConfig?: yandex_cloud_dataproc_v1_subcluster_pb.AutoscalingConfig.AsObject,
    }
}

export class UpdateSubclusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateSubclusterMetadata;
    getSubclusterId(): string;
    setSubclusterId(value: string): UpdateSubclusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubclusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubclusterMetadata): UpdateSubclusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubclusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubclusterMetadata;
    static deserializeBinaryFromReader(message: UpdateSubclusterMetadata, reader: jspb.BinaryReader): UpdateSubclusterMetadata;
}

export namespace UpdateSubclusterMetadata {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
    }
}

export class DeleteSubclusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteSubclusterRequest;
    getSubclusterId(): string;
    setSubclusterId(value: string): DeleteSubclusterRequest;
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): DeleteSubclusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSubclusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSubclusterRequest): DeleteSubclusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSubclusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSubclusterRequest;
    static deserializeBinaryFromReader(message: DeleteSubclusterRequest, reader: jspb.BinaryReader): DeleteSubclusterRequest;
}

export namespace DeleteSubclusterRequest {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
        decommissionTimeout: number,
    }
}

export class DeleteSubclusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteSubclusterMetadata;
    getSubclusterId(): string;
    setSubclusterId(value: string): DeleteSubclusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSubclusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSubclusterMetadata): DeleteSubclusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSubclusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSubclusterMetadata;
    static deserializeBinaryFromReader(message: DeleteSubclusterMetadata, reader: jspb.BinaryReader): DeleteSubclusterMetadata;
}

export namespace DeleteSubclusterMetadata {
    export type AsObject = {
        clusterId: string,
        subclusterId: string,
    }
}
