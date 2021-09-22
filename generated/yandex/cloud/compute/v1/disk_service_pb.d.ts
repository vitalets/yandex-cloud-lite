// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetDiskRequest extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): GetDiskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDiskRequest): GetDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDiskRequest;
    static deserializeBinaryFromReader(message: GetDiskRequest, reader: jspb.BinaryReader): GetDiskRequest;
}

export namespace GetDiskRequest {
    export type AsObject = {
        diskId: string,
    }
}

export class ListDisksRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListDisksRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDisksRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDisksRequest;
    getFilter(): string;
    setFilter(value: string): ListDisksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDisksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDisksRequest): ListDisksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDisksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDisksRequest;
    static deserializeBinaryFromReader(message: ListDisksRequest, reader: jspb.BinaryReader): ListDisksRequest;
}

export namespace ListDisksRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDisksResponse extends jspb.Message { 
    clearDisksList(): void;
    getDisksList(): Array<yandex_cloud_compute_v1_disk_pb.Disk>;
    setDisksList(value: Array<yandex_cloud_compute_v1_disk_pb.Disk>): ListDisksResponse;
    addDisks(value?: yandex_cloud_compute_v1_disk_pb.Disk, index?: number): yandex_cloud_compute_v1_disk_pb.Disk;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDisksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDisksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDisksResponse): ListDisksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDisksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDisksResponse;
    static deserializeBinaryFromReader(message: ListDisksResponse, reader: jspb.BinaryReader): ListDisksResponse;
}

export namespace ListDisksResponse {
    export type AsObject = {
        disksList: Array<yandex_cloud_compute_v1_disk_pb.Disk.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDiskRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateDiskRequest;
    getName(): string;
    setName(value: string): CreateDiskRequest;
    getDescription(): string;
    setDescription(value: string): CreateDiskRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getTypeId(): string;
    setTypeId(value: string): CreateDiskRequest;
    getZoneId(): string;
    setZoneId(value: string): CreateDiskRequest;
    getSize(): number;
    setSize(value: number): CreateDiskRequest;

    hasImageId(): boolean;
    clearImageId(): void;
    getImageId(): string;
    setImageId(value: string): CreateDiskRequest;

    hasSnapshotId(): boolean;
    clearSnapshotId(): void;
    getSnapshotId(): string;
    setSnapshotId(value: string): CreateDiskRequest;
    getBlockSize(): number;
    setBlockSize(value: number): CreateDiskRequest;

    hasDiskPlacementPolicy(): boolean;
    clearDiskPlacementPolicy(): void;
    getDiskPlacementPolicy(): yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy | undefined;
    setDiskPlacementPolicy(value?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy): CreateDiskRequest;

    getSourceCase(): CreateDiskRequest.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDiskRequest): CreateDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDiskRequest;
    static deserializeBinaryFromReader(message: CreateDiskRequest, reader: jspb.BinaryReader): CreateDiskRequest;
}

export namespace CreateDiskRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        typeId: string,
        zoneId: string,
        size: number,
        imageId: string,
        snapshotId: string,
        blockSize: number,
        diskPlacementPolicy?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.AsObject,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        IMAGE_ID = 8,
        SNAPSHOT_ID = 9,
    }

}

export class CreateDiskMetadata extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): CreateDiskMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDiskMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDiskMetadata): CreateDiskMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDiskMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDiskMetadata;
    static deserializeBinaryFromReader(message: CreateDiskMetadata, reader: jspb.BinaryReader): CreateDiskMetadata;
}

export namespace CreateDiskMetadata {
    export type AsObject = {
        diskId: string,
    }
}

export class UpdateDiskRequest extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): UpdateDiskRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDiskRequest;
    getName(): string;
    setName(value: string): UpdateDiskRequest;
    getDescription(): string;
    setDescription(value: string): UpdateDiskRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getSize(): number;
    setSize(value: number): UpdateDiskRequest;

    hasDiskPlacementPolicy(): boolean;
    clearDiskPlacementPolicy(): void;
    getDiskPlacementPolicy(): yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy | undefined;
    setDiskPlacementPolicy(value?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy): UpdateDiskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDiskRequest): UpdateDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDiskRequest;
    static deserializeBinaryFromReader(message: UpdateDiskRequest, reader: jspb.BinaryReader): UpdateDiskRequest;
}

export namespace UpdateDiskRequest {
    export type AsObject = {
        diskId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        size: number,
        diskPlacementPolicy?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.AsObject,
    }
}

export class UpdateDiskMetadata extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): UpdateDiskMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDiskMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDiskMetadata): UpdateDiskMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDiskMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDiskMetadata;
    static deserializeBinaryFromReader(message: UpdateDiskMetadata, reader: jspb.BinaryReader): UpdateDiskMetadata;
}

export namespace UpdateDiskMetadata {
    export type AsObject = {
        diskId: string,
    }
}

export class DeleteDiskRequest extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): DeleteDiskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDiskRequest): DeleteDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDiskRequest;
    static deserializeBinaryFromReader(message: DeleteDiskRequest, reader: jspb.BinaryReader): DeleteDiskRequest;
}

export namespace DeleteDiskRequest {
    export type AsObject = {
        diskId: string,
    }
}

export class DeleteDiskMetadata extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): DeleteDiskMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDiskMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDiskMetadata): DeleteDiskMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDiskMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDiskMetadata;
    static deserializeBinaryFromReader(message: DeleteDiskMetadata, reader: jspb.BinaryReader): DeleteDiskMetadata;
}

export namespace DeleteDiskMetadata {
    export type AsObject = {
        diskId: string,
    }
}

export class ListDiskOperationsRequest extends jspb.Message { 
    getDiskId(): string;
    setDiskId(value: string): ListDiskOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDiskOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDiskOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskOperationsRequest): ListDiskOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskOperationsRequest;
    static deserializeBinaryFromReader(message: ListDiskOperationsRequest, reader: jspb.BinaryReader): ListDiskOperationsRequest;
}

export namespace ListDiskOperationsRequest {
    export type AsObject = {
        diskId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDiskOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListDiskOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDiskOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDiskOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDiskOperationsResponse): ListDiskOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDiskOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDiskOperationsResponse;
    static deserializeBinaryFromReader(message: ListDiskOperationsResponse, reader: jspb.BinaryReader): ListDiskOperationsResponse;
}

export namespace ListDiskOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
