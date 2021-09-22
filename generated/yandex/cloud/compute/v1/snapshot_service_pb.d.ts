// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/snapshot_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_snapshot_pb from "../../../../yandex/cloud/compute/v1/snapshot_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetSnapshotRequest extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): GetSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSnapshotRequest): GetSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSnapshotRequest;
    static deserializeBinaryFromReader(message: GetSnapshotRequest, reader: jspb.BinaryReader): GetSnapshotRequest;
}

export namespace GetSnapshotRequest {
    export type AsObject = {
        snapshotId: string,
    }
}

export class ListSnapshotsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListSnapshotsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSnapshotsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSnapshotsRequest;
    getFilter(): string;
    setFilter(value: string): ListSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotsRequest): ListSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListSnapshotsRequest, reader: jspb.BinaryReader): ListSnapshotsRequest;
}

export namespace ListSnapshotsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListSnapshotsResponse extends jspb.Message { 
    clearSnapshotsList(): void;
    getSnapshotsList(): Array<yandex_cloud_compute_v1_snapshot_pb.Snapshot>;
    setSnapshotsList(value: Array<yandex_cloud_compute_v1_snapshot_pb.Snapshot>): ListSnapshotsResponse;
    addSnapshots(value?: yandex_cloud_compute_v1_snapshot_pb.Snapshot, index?: number): yandex_cloud_compute_v1_snapshot_pb.Snapshot;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSnapshotsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotsResponse): ListSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListSnapshotsResponse, reader: jspb.BinaryReader): ListSnapshotsResponse;
}

export namespace ListSnapshotsResponse {
    export type AsObject = {
        snapshotsList: Array<yandex_cloud_compute_v1_snapshot_pb.Snapshot.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSnapshotRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateSnapshotRequest;
    getDiskId(): string;
    setDiskId(value: string): CreateSnapshotRequest;
    getName(): string;
    setName(value: string): CreateSnapshotRequest;
    getDescription(): string;
    setDescription(value: string): CreateSnapshotRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSnapshotRequest): CreateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSnapshotRequest;
    static deserializeBinaryFromReader(message: CreateSnapshotRequest, reader: jspb.BinaryReader): CreateSnapshotRequest;
}

export namespace CreateSnapshotRequest {
    export type AsObject = {
        folderId: string,
        diskId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateSnapshotMetadata extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): CreateSnapshotMetadata;
    getDiskId(): string;
    setDiskId(value: string): CreateSnapshotMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSnapshotMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSnapshotMetadata): CreateSnapshotMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSnapshotMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSnapshotMetadata;
    static deserializeBinaryFromReader(message: CreateSnapshotMetadata, reader: jspb.BinaryReader): CreateSnapshotMetadata;
}

export namespace CreateSnapshotMetadata {
    export type AsObject = {
        snapshotId: string,
        diskId: string,
    }
}

export class UpdateSnapshotRequest extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): UpdateSnapshotRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSnapshotRequest;
    getName(): string;
    setName(value: string): UpdateSnapshotRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSnapshotRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSnapshotRequest): UpdateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSnapshotRequest;
    static deserializeBinaryFromReader(message: UpdateSnapshotRequest, reader: jspb.BinaryReader): UpdateSnapshotRequest;
}

export namespace UpdateSnapshotRequest {
    export type AsObject = {
        snapshotId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateSnapshotMetadata extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): UpdateSnapshotMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSnapshotMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSnapshotMetadata): UpdateSnapshotMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSnapshotMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSnapshotMetadata;
    static deserializeBinaryFromReader(message: UpdateSnapshotMetadata, reader: jspb.BinaryReader): UpdateSnapshotMetadata;
}

export namespace UpdateSnapshotMetadata {
    export type AsObject = {
        snapshotId: string,
    }
}

export class DeleteSnapshotRequest extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): DeleteSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSnapshotRequest): DeleteSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSnapshotRequest;
    static deserializeBinaryFromReader(message: DeleteSnapshotRequest, reader: jspb.BinaryReader): DeleteSnapshotRequest;
}

export namespace DeleteSnapshotRequest {
    export type AsObject = {
        snapshotId: string,
    }
}

export class DeleteSnapshotMetadata extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): DeleteSnapshotMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSnapshotMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSnapshotMetadata): DeleteSnapshotMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSnapshotMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSnapshotMetadata;
    static deserializeBinaryFromReader(message: DeleteSnapshotMetadata, reader: jspb.BinaryReader): DeleteSnapshotMetadata;
}

export namespace DeleteSnapshotMetadata {
    export type AsObject = {
        snapshotId: string,
    }
}

export class ListSnapshotOperationsRequest extends jspb.Message { 
    getSnapshotId(): string;
    setSnapshotId(value: string): ListSnapshotOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSnapshotOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSnapshotOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotOperationsRequest): ListSnapshotOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotOperationsRequest;
    static deserializeBinaryFromReader(message: ListSnapshotOperationsRequest, reader: jspb.BinaryReader): ListSnapshotOperationsRequest;
}

export namespace ListSnapshotOperationsRequest {
    export type AsObject = {
        snapshotId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSnapshotOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListSnapshotOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSnapshotOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSnapshotOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSnapshotOperationsResponse): ListSnapshotOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSnapshotOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSnapshotOperationsResponse;
    static deserializeBinaryFromReader(message: ListSnapshotOperationsResponse, reader: jspb.BinaryReader): ListSnapshotOperationsResponse;
}

export namespace ListSnapshotOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
