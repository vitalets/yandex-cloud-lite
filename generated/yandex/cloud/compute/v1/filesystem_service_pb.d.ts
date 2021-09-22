// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/filesystem_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_filesystem_pb from "../../../../yandex/cloud/compute/v1/filesystem_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetFilesystemRequest extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): GetFilesystemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFilesystemRequest): GetFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFilesystemRequest;
    static deserializeBinaryFromReader(message: GetFilesystemRequest, reader: jspb.BinaryReader): GetFilesystemRequest;
}

export namespace GetFilesystemRequest {
    export type AsObject = {
        filesystemId: string,
    }
}

export class ListFilesystemsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListFilesystemsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFilesystemsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFilesystemsRequest;
    getFilter(): string;
    setFilter(value: string): ListFilesystemsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesystemsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesystemsRequest): ListFilesystemsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesystemsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesystemsRequest;
    static deserializeBinaryFromReader(message: ListFilesystemsRequest, reader: jspb.BinaryReader): ListFilesystemsRequest;
}

export namespace ListFilesystemsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFilesystemsResponse extends jspb.Message { 
    clearFilesystemsList(): void;
    getFilesystemsList(): Array<yandex_cloud_compute_v1_filesystem_pb.Filesystem>;
    setFilesystemsList(value: Array<yandex_cloud_compute_v1_filesystem_pb.Filesystem>): ListFilesystemsResponse;
    addFilesystems(value?: yandex_cloud_compute_v1_filesystem_pb.Filesystem, index?: number): yandex_cloud_compute_v1_filesystem_pb.Filesystem;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFilesystemsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesystemsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesystemsResponse): ListFilesystemsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesystemsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesystemsResponse;
    static deserializeBinaryFromReader(message: ListFilesystemsResponse, reader: jspb.BinaryReader): ListFilesystemsResponse;
}

export namespace ListFilesystemsResponse {
    export type AsObject = {
        filesystemsList: Array<yandex_cloud_compute_v1_filesystem_pb.Filesystem.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFilesystemRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateFilesystemRequest;
    getName(): string;
    setName(value: string): CreateFilesystemRequest;
    getDescription(): string;
    setDescription(value: string): CreateFilesystemRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getTypeId(): string;
    setTypeId(value: string): CreateFilesystemRequest;
    getZoneId(): string;
    setZoneId(value: string): CreateFilesystemRequest;
    getSize(): number;
    setSize(value: number): CreateFilesystemRequest;
    getBlockSize(): number;
    setBlockSize(value: number): CreateFilesystemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFilesystemRequest): CreateFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFilesystemRequest;
    static deserializeBinaryFromReader(message: CreateFilesystemRequest, reader: jspb.BinaryReader): CreateFilesystemRequest;
}

export namespace CreateFilesystemRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        typeId: string,
        zoneId: string,
        size: number,
        blockSize: number,
    }
}

export class CreateFilesystemMetadata extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): CreateFilesystemMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFilesystemMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFilesystemMetadata): CreateFilesystemMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFilesystemMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFilesystemMetadata;
    static deserializeBinaryFromReader(message: CreateFilesystemMetadata, reader: jspb.BinaryReader): CreateFilesystemMetadata;
}

export namespace CreateFilesystemMetadata {
    export type AsObject = {
        filesystemId: string,
    }
}

export class UpdateFilesystemRequest extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): UpdateFilesystemRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFilesystemRequest;
    getName(): string;
    setName(value: string): UpdateFilesystemRequest;
    getDescription(): string;
    setDescription(value: string): UpdateFilesystemRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFilesystemRequest): UpdateFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFilesystemRequest;
    static deserializeBinaryFromReader(message: UpdateFilesystemRequest, reader: jspb.BinaryReader): UpdateFilesystemRequest;
}

export namespace UpdateFilesystemRequest {
    export type AsObject = {
        filesystemId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateFilesystemMetadata extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): UpdateFilesystemMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFilesystemMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFilesystemMetadata): UpdateFilesystemMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFilesystemMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFilesystemMetadata;
    static deserializeBinaryFromReader(message: UpdateFilesystemMetadata, reader: jspb.BinaryReader): UpdateFilesystemMetadata;
}

export namespace UpdateFilesystemMetadata {
    export type AsObject = {
        filesystemId: string,
    }
}

export class DeleteFilesystemRequest extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): DeleteFilesystemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFilesystemRequest): DeleteFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFilesystemRequest;
    static deserializeBinaryFromReader(message: DeleteFilesystemRequest, reader: jspb.BinaryReader): DeleteFilesystemRequest;
}

export namespace DeleteFilesystemRequest {
    export type AsObject = {
        filesystemId: string,
    }
}

export class DeleteFilesystemMetadata extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): DeleteFilesystemMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFilesystemMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFilesystemMetadata): DeleteFilesystemMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFilesystemMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFilesystemMetadata;
    static deserializeBinaryFromReader(message: DeleteFilesystemMetadata, reader: jspb.BinaryReader): DeleteFilesystemMetadata;
}

export namespace DeleteFilesystemMetadata {
    export type AsObject = {
        filesystemId: string,
    }
}

export class ListFilesystemOperationsRequest extends jspb.Message { 
    getFilesystemId(): string;
    setFilesystemId(value: string): ListFilesystemOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFilesystemOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFilesystemOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesystemOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesystemOperationsRequest): ListFilesystemOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesystemOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesystemOperationsRequest;
    static deserializeBinaryFromReader(message: ListFilesystemOperationsRequest, reader: jspb.BinaryReader): ListFilesystemOperationsRequest;
}

export namespace ListFilesystemOperationsRequest {
    export type AsObject = {
        filesystemId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListFilesystemOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListFilesystemOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFilesystemOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesystemOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesystemOperationsResponse): ListFilesystemOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesystemOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesystemOperationsResponse;
    static deserializeBinaryFromReader(message: ListFilesystemOperationsResponse, reader: jspb.BinaryReader): ListFilesystemOperationsResponse;
}

export namespace ListFilesystemOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
