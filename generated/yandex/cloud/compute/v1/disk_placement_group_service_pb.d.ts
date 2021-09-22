// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_placement_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_compute_v1_disk_placement_group_pb from "../../../../yandex/cloud/compute/v1/disk_placement_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetDiskPlacementGroupRequest extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): GetDiskPlacementGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDiskPlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDiskPlacementGroupRequest): GetDiskPlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDiskPlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDiskPlacementGroupRequest;
    static deserializeBinaryFromReader(message: GetDiskPlacementGroupRequest, reader: jspb.BinaryReader): GetDiskPlacementGroupRequest;
}

export namespace GetDiskPlacementGroupRequest {
    export type AsObject = {
        diskPlacementGroupId: string,
    }
}

export class ListDiskPlacementGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListDiskPlacementGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDiskPlacementGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDiskPlacementGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListDiskPlacementGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupsRequest): ListDiskPlacementGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupsRequest;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupsRequest, reader: jspb.BinaryReader): ListDiskPlacementGroupsRequest;
}

export namespace ListDiskPlacementGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDiskPlacementGroupsResponse extends jspb.Message { 
    clearDiskPlacementGroupsList(): void;
    getDiskPlacementGroupsList(): Array<yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup>;
    setDiskPlacementGroupsList(value: Array<yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup>): ListDiskPlacementGroupsResponse;
    addDiskPlacementGroups(value?: yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup, index?: number): yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDiskPlacementGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupsResponse): ListDiskPlacementGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupsResponse;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupsResponse, reader: jspb.BinaryReader): ListDiskPlacementGroupsResponse;
}

export namespace ListDiskPlacementGroupsResponse {
    export type AsObject = {
        diskPlacementGroupsList: Array<yandex_cloud_compute_v1_disk_placement_group_pb.DiskPlacementGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDiskPlacementGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateDiskPlacementGroupRequest;
    getName(): string;
    setName(value: string): CreateDiskPlacementGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateDiskPlacementGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): CreateDiskPlacementGroupRequest;

    hasSpreadPlacementStrategy(): boolean;
    clearSpreadPlacementStrategy(): void;
    getSpreadPlacementStrategy(): yandex_cloud_compute_v1_disk_placement_group_pb.DiskSpreadPlacementStrategy | undefined;
    setSpreadPlacementStrategy(value?: yandex_cloud_compute_v1_disk_placement_group_pb.DiskSpreadPlacementStrategy): CreateDiskPlacementGroupRequest;

    getPlacementStrategyCase(): CreateDiskPlacementGroupRequest.PlacementStrategyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDiskPlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDiskPlacementGroupRequest): CreateDiskPlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDiskPlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDiskPlacementGroupRequest;
    static deserializeBinaryFromReader(message: CreateDiskPlacementGroupRequest, reader: jspb.BinaryReader): CreateDiskPlacementGroupRequest;
}

export namespace CreateDiskPlacementGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        spreadPlacementStrategy?: yandex_cloud_compute_v1_disk_placement_group_pb.DiskSpreadPlacementStrategy.AsObject,
    }

    export enum PlacementStrategyCase {
        PLACEMENT_STRATEGY_NOT_SET = 0,
        SPREAD_PLACEMENT_STRATEGY = 6,
    }

}

export class CreateDiskPlacementGroupMetadata extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): CreateDiskPlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDiskPlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDiskPlacementGroupMetadata): CreateDiskPlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDiskPlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDiskPlacementGroupMetadata;
    static deserializeBinaryFromReader(message: CreateDiskPlacementGroupMetadata, reader: jspb.BinaryReader): CreateDiskPlacementGroupMetadata;
}

export namespace CreateDiskPlacementGroupMetadata {
    export type AsObject = {
        diskPlacementGroupId: string,
    }
}

export class UpdateDiskPlacementGroupRequest extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): UpdateDiskPlacementGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDiskPlacementGroupRequest;
    getName(): string;
    setName(value: string): UpdateDiskPlacementGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateDiskPlacementGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDiskPlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDiskPlacementGroupRequest): UpdateDiskPlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDiskPlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDiskPlacementGroupRequest;
    static deserializeBinaryFromReader(message: UpdateDiskPlacementGroupRequest, reader: jspb.BinaryReader): UpdateDiskPlacementGroupRequest;
}

export namespace UpdateDiskPlacementGroupRequest {
    export type AsObject = {
        diskPlacementGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateDiskPlacementGroupMetadata extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): UpdateDiskPlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDiskPlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDiskPlacementGroupMetadata): UpdateDiskPlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDiskPlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDiskPlacementGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateDiskPlacementGroupMetadata, reader: jspb.BinaryReader): UpdateDiskPlacementGroupMetadata;
}

export namespace UpdateDiskPlacementGroupMetadata {
    export type AsObject = {
        diskPlacementGroupId: string,
    }
}

export class DeleteDiskPlacementGroupRequest extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): DeleteDiskPlacementGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDiskPlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDiskPlacementGroupRequest): DeleteDiskPlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDiskPlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDiskPlacementGroupRequest;
    static deserializeBinaryFromReader(message: DeleteDiskPlacementGroupRequest, reader: jspb.BinaryReader): DeleteDiskPlacementGroupRequest;
}

export namespace DeleteDiskPlacementGroupRequest {
    export type AsObject = {
        diskPlacementGroupId: string,
    }
}

export class DeleteDiskPlacementGroupMetadata extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): DeleteDiskPlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDiskPlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDiskPlacementGroupMetadata): DeleteDiskPlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDiskPlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDiskPlacementGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteDiskPlacementGroupMetadata, reader: jspb.BinaryReader): DeleteDiskPlacementGroupMetadata;
}

export namespace DeleteDiskPlacementGroupMetadata {
    export type AsObject = {
        diskPlacementGroupId: string,
    }
}

export class ListDiskPlacementGroupDisksRequest extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): ListDiskPlacementGroupDisksRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDiskPlacementGroupDisksRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDiskPlacementGroupDisksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupDisksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupDisksRequest): ListDiskPlacementGroupDisksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupDisksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupDisksRequest;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupDisksRequest, reader: jspb.BinaryReader): ListDiskPlacementGroupDisksRequest;
}

export namespace ListDiskPlacementGroupDisksRequest {
    export type AsObject = {
        diskPlacementGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDiskPlacementGroupDisksResponse extends jspb.Message { 
    clearDisksList(): void;
    getDisksList(): Array<yandex_cloud_compute_v1_disk_pb.Disk>;
    setDisksList(value: Array<yandex_cloud_compute_v1_disk_pb.Disk>): ListDiskPlacementGroupDisksResponse;
    addDisks(value?: yandex_cloud_compute_v1_disk_pb.Disk, index?: number): yandex_cloud_compute_v1_disk_pb.Disk;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDiskPlacementGroupDisksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupDisksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupDisksResponse): ListDiskPlacementGroupDisksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupDisksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupDisksResponse;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupDisksResponse, reader: jspb.BinaryReader): ListDiskPlacementGroupDisksResponse;
}

export namespace ListDiskPlacementGroupDisksResponse {
    export type AsObject = {
        disksList: Array<yandex_cloud_compute_v1_disk_pb.Disk.AsObject>,
        nextPageToken: string,
    }
}

export class ListDiskPlacementGroupOperationsRequest extends jspb.Message { 
    getDiskPlacementGroupId(): string;
    setDiskPlacementGroupId(value: string): ListDiskPlacementGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDiskPlacementGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDiskPlacementGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupOperationsRequest): ListDiskPlacementGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupOperationsRequest, reader: jspb.BinaryReader): ListDiskPlacementGroupOperationsRequest;
}

export namespace ListDiskPlacementGroupOperationsRequest {
    export type AsObject = {
        diskPlacementGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDiskPlacementGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListDiskPlacementGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDiskPlacementGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskPlacementGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskPlacementGroupOperationsResponse): ListDiskPlacementGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskPlacementGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskPlacementGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListDiskPlacementGroupOperationsResponse, reader: jspb.BinaryReader): ListDiskPlacementGroupOperationsResponse;
}

export namespace ListDiskPlacementGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
