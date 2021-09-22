// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/folder_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_resourcemanager_v1_folder_pb from "../../../../yandex/cloud/resourcemanager/v1/folder_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetFolderRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFolderRequest): GetFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFolderRequest;
    static deserializeBinaryFromReader(message: GetFolderRequest, reader: jspb.BinaryReader): GetFolderRequest;
}

export namespace GetFolderRequest {
    export type AsObject = {
        folderId: string,
    }
}

export class ListFoldersRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): ListFoldersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFoldersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFoldersRequest;
    getFilter(): string;
    setFilter(value: string): ListFoldersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoldersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoldersRequest): ListFoldersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoldersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoldersRequest;
    static deserializeBinaryFromReader(message: ListFoldersRequest, reader: jspb.BinaryReader): ListFoldersRequest;
}

export namespace ListFoldersRequest {
    export type AsObject = {
        cloudId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFoldersResponse extends jspb.Message { 
    clearFoldersList(): void;
    getFoldersList(): Array<yandex_cloud_resourcemanager_v1_folder_pb.Folder>;
    setFoldersList(value: Array<yandex_cloud_resourcemanager_v1_folder_pb.Folder>): ListFoldersResponse;
    addFolders(value?: yandex_cloud_resourcemanager_v1_folder_pb.Folder, index?: number): yandex_cloud_resourcemanager_v1_folder_pb.Folder;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFoldersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoldersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoldersResponse): ListFoldersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoldersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoldersResponse;
    static deserializeBinaryFromReader(message: ListFoldersResponse, reader: jspb.BinaryReader): ListFoldersResponse;
}

export namespace ListFoldersResponse {
    export type AsObject = {
        foldersList: Array<yandex_cloud_resourcemanager_v1_folder_pb.Folder.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFolderRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): CreateFolderRequest;
    getName(): string;
    setName(value: string): CreateFolderRequest;
    getDescription(): string;
    setDescription(value: string): CreateFolderRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFolderRequest): CreateFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFolderRequest;
    static deserializeBinaryFromReader(message: CreateFolderRequest, reader: jspb.BinaryReader): CreateFolderRequest;
}

export namespace CreateFolderRequest {
    export type AsObject = {
        cloudId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateFolderMetadata extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateFolderMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFolderMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFolderMetadata): CreateFolderMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFolderMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFolderMetadata;
    static deserializeBinaryFromReader(message: CreateFolderMetadata, reader: jspb.BinaryReader): CreateFolderMetadata;
}

export namespace CreateFolderMetadata {
    export type AsObject = {
        folderId: string,
    }
}

export class UpdateFolderRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): UpdateFolderRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFolderRequest;
    getName(): string;
    setName(value: string): UpdateFolderRequest;
    getDescription(): string;
    setDescription(value: string): UpdateFolderRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFolderRequest): UpdateFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFolderRequest;
    static deserializeBinaryFromReader(message: UpdateFolderRequest, reader: jspb.BinaryReader): UpdateFolderRequest;
}

export namespace UpdateFolderRequest {
    export type AsObject = {
        folderId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateFolderMetadata extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): UpdateFolderMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFolderMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFolderMetadata): UpdateFolderMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFolderMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFolderMetadata;
    static deserializeBinaryFromReader(message: UpdateFolderMetadata, reader: jspb.BinaryReader): UpdateFolderMetadata;
}

export namespace UpdateFolderMetadata {
    export type AsObject = {
        folderId: string,
    }
}

export class DeleteFolderRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): DeleteFolderRequest;

    hasDeleteAfter(): boolean;
    clearDeleteAfter(): void;
    getDeleteAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeleteAfter(value?: google_protobuf_timestamp_pb.Timestamp): DeleteFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFolderRequest): DeleteFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFolderRequest;
    static deserializeBinaryFromReader(message: DeleteFolderRequest, reader: jspb.BinaryReader): DeleteFolderRequest;
}

export namespace DeleteFolderRequest {
    export type AsObject = {
        folderId: string,
        deleteAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DeleteFolderMetadata extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): DeleteFolderMetadata;

    hasDeleteAfter(): boolean;
    clearDeleteAfter(): void;
    getDeleteAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeleteAfter(value?: google_protobuf_timestamp_pb.Timestamp): DeleteFolderMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFolderMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFolderMetadata): DeleteFolderMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFolderMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFolderMetadata;
    static deserializeBinaryFromReader(message: DeleteFolderMetadata, reader: jspb.BinaryReader): DeleteFolderMetadata;
}

export namespace DeleteFolderMetadata {
    export type AsObject = {
        folderId: string,
        deleteAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListFolderOperationsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListFolderOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFolderOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFolderOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFolderOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFolderOperationsRequest): ListFolderOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFolderOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFolderOperationsRequest;
    static deserializeBinaryFromReader(message: ListFolderOperationsRequest, reader: jspb.BinaryReader): ListFolderOperationsRequest;
}

export namespace ListFolderOperationsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListFolderOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListFolderOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFolderOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFolderOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFolderOperationsResponse): ListFolderOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFolderOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFolderOperationsResponse;
    static deserializeBinaryFromReader(message: ListFolderOperationsResponse, reader: jspb.BinaryReader): ListFolderOperationsResponse;
}

export namespace ListFolderOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
