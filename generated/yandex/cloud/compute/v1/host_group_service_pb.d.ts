// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_compute_v1_host_group_pb from "../../../../yandex/cloud/compute/v1/host_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetHostGroupRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): GetHostGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHostGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHostGroupRequest): GetHostGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHostGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHostGroupRequest;
    static deserializeBinaryFromReader(message: GetHostGroupRequest, reader: jspb.BinaryReader): GetHostGroupRequest;
}

export namespace GetHostGroupRequest {
    export type AsObject = {
        hostGroupId: string,
    }
}

export class ListHostGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListHostGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHostGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHostGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListHostGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupsRequest): ListHostGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupsRequest;
    static deserializeBinaryFromReader(message: ListHostGroupsRequest, reader: jspb.BinaryReader): ListHostGroupsRequest;
}

export namespace ListHostGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListHostGroupsResponse extends jspb.Message { 
    clearHostGroupsList(): void;
    getHostGroupsList(): Array<yandex_cloud_compute_v1_host_group_pb.HostGroup>;
    setHostGroupsList(value: Array<yandex_cloud_compute_v1_host_group_pb.HostGroup>): ListHostGroupsResponse;
    addHostGroups(value?: yandex_cloud_compute_v1_host_group_pb.HostGroup, index?: number): yandex_cloud_compute_v1_host_group_pb.HostGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHostGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupsResponse): ListHostGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupsResponse;
    static deserializeBinaryFromReader(message: ListHostGroupsResponse, reader: jspb.BinaryReader): ListHostGroupsResponse;
}

export namespace ListHostGroupsResponse {
    export type AsObject = {
        hostGroupsList: Array<yandex_cloud_compute_v1_host_group_pb.HostGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateHostGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateHostGroupRequest;
    getName(): string;
    setName(value: string): CreateHostGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateHostGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): CreateHostGroupRequest;
    getTypeId(): string;
    setTypeId(value: string): CreateHostGroupRequest;
    getMaintenancePolicy(): yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy;
    setMaintenancePolicy(value: yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy): CreateHostGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_compute_v1_host_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_compute_v1_host_group_pb.ScalePolicy): CreateHostGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHostGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHostGroupRequest): CreateHostGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHostGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHostGroupRequest;
    static deserializeBinaryFromReader(message: CreateHostGroupRequest, reader: jspb.BinaryReader): CreateHostGroupRequest;
}

export namespace CreateHostGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        typeId: string,
        maintenancePolicy: yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy,
        scalePolicy?: yandex_cloud_compute_v1_host_group_pb.ScalePolicy.AsObject,
    }
}

export class CreateHostGroupMetadata extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): CreateHostGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHostGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHostGroupMetadata): CreateHostGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHostGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHostGroupMetadata;
    static deserializeBinaryFromReader(message: CreateHostGroupMetadata, reader: jspb.BinaryReader): CreateHostGroupMetadata;
}

export namespace CreateHostGroupMetadata {
    export type AsObject = {
        hostGroupId: string,
    }
}

export class UpdateHostGroupRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): UpdateHostGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateHostGroupRequest;
    getName(): string;
    setName(value: string): UpdateHostGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateHostGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getMaintenancePolicy(): yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy;
    setMaintenancePolicy(value: yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy): UpdateHostGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_compute_v1_host_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_compute_v1_host_group_pb.ScalePolicy): UpdateHostGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHostGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHostGroupRequest): UpdateHostGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHostGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHostGroupRequest;
    static deserializeBinaryFromReader(message: UpdateHostGroupRequest, reader: jspb.BinaryReader): UpdateHostGroupRequest;
}

export namespace UpdateHostGroupRequest {
    export type AsObject = {
        hostGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        maintenancePolicy: yandex_cloud_compute_v1_host_group_pb.MaintenancePolicy,
        scalePolicy?: yandex_cloud_compute_v1_host_group_pb.ScalePolicy.AsObject,
    }
}

export class UpdateHostGroupMetadata extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): UpdateHostGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHostGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHostGroupMetadata): UpdateHostGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHostGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHostGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateHostGroupMetadata, reader: jspb.BinaryReader): UpdateHostGroupMetadata;
}

export namespace UpdateHostGroupMetadata {
    export type AsObject = {
        hostGroupId: string,
    }
}

export class DeleteHostGroupRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): DeleteHostGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHostGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHostGroupRequest): DeleteHostGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteHostGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteHostGroupRequest;
    static deserializeBinaryFromReader(message: DeleteHostGroupRequest, reader: jspb.BinaryReader): DeleteHostGroupRequest;
}

export namespace DeleteHostGroupRequest {
    export type AsObject = {
        hostGroupId: string,
    }
}

export class DeleteHostGroupMetadata extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): DeleteHostGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHostGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHostGroupMetadata): DeleteHostGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteHostGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteHostGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteHostGroupMetadata, reader: jspb.BinaryReader): DeleteHostGroupMetadata;
}

export namespace DeleteHostGroupMetadata {
    export type AsObject = {
        hostGroupId: string,
    }
}

export class ListHostGroupInstancesRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): ListHostGroupInstancesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHostGroupInstancesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHostGroupInstancesRequest;
    getFilter(): string;
    setFilter(value: string): ListHostGroupInstancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupInstancesRequest): ListHostGroupInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupInstancesRequest;
    static deserializeBinaryFromReader(message: ListHostGroupInstancesRequest, reader: jspb.BinaryReader): ListHostGroupInstancesRequest;
}

export namespace ListHostGroupInstancesRequest {
    export type AsObject = {
        hostGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListHostGroupInstancesResponse extends jspb.Message { 
    clearInstancesList(): void;
    getInstancesList(): Array<yandex_cloud_compute_v1_instance_pb.Instance>;
    setInstancesList(value: Array<yandex_cloud_compute_v1_instance_pb.Instance>): ListHostGroupInstancesResponse;
    addInstances(value?: yandex_cloud_compute_v1_instance_pb.Instance, index?: number): yandex_cloud_compute_v1_instance_pb.Instance;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHostGroupInstancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupInstancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupInstancesResponse): ListHostGroupInstancesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupInstancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupInstancesResponse;
    static deserializeBinaryFromReader(message: ListHostGroupInstancesResponse, reader: jspb.BinaryReader): ListHostGroupInstancesResponse;
}

export namespace ListHostGroupInstancesResponse {
    export type AsObject = {
        instancesList: Array<yandex_cloud_compute_v1_instance_pb.Instance.AsObject>,
        nextPageToken: string,
    }
}

export class ListHostGroupHostsRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): ListHostGroupHostsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHostGroupHostsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHostGroupHostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupHostsRequest): ListHostGroupHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupHostsRequest;
    static deserializeBinaryFromReader(message: ListHostGroupHostsRequest, reader: jspb.BinaryReader): ListHostGroupHostsRequest;
}

export namespace ListHostGroupHostsRequest {
    export type AsObject = {
        hostGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListHostGroupHostsResponse extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<yandex_cloud_compute_v1_host_group_pb.Host>;
    setHostsList(value: Array<yandex_cloud_compute_v1_host_group_pb.Host>): ListHostGroupHostsResponse;
    addHosts(value?: yandex_cloud_compute_v1_host_group_pb.Host, index?: number): yandex_cloud_compute_v1_host_group_pb.Host;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHostGroupHostsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupHostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupHostsResponse): ListHostGroupHostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupHostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupHostsResponse;
    static deserializeBinaryFromReader(message: ListHostGroupHostsResponse, reader: jspb.BinaryReader): ListHostGroupHostsResponse;
}

export namespace ListHostGroupHostsResponse {
    export type AsObject = {
        hostsList: Array<yandex_cloud_compute_v1_host_group_pb.Host.AsObject>,
        nextPageToken: string,
    }
}

export class ListHostGroupOperationsRequest extends jspb.Message { 
    getHostGroupId(): string;
    setHostGroupId(value: string): ListHostGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHostGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHostGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupOperationsRequest): ListHostGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListHostGroupOperationsRequest, reader: jspb.BinaryReader): ListHostGroupOperationsRequest;
}

export namespace ListHostGroupOperationsRequest {
    export type AsObject = {
        hostGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListHostGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListHostGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHostGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHostGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHostGroupOperationsResponse): ListHostGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHostGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHostGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListHostGroupOperationsResponse, reader: jspb.BinaryReader): ListHostGroupOperationsResponse;
}

export namespace ListHostGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
