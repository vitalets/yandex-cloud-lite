// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/backend_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_backend_group_pb from "../../../../yandex/cloud/apploadbalancer/v1/backend_group_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetBackendGroupRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): GetBackendGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBackendGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBackendGroupRequest): GetBackendGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBackendGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBackendGroupRequest;
    static deserializeBinaryFromReader(message: GetBackendGroupRequest, reader: jspb.BinaryReader): GetBackendGroupRequest;
}

export namespace GetBackendGroupRequest {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class ListBackendGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListBackendGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListBackendGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBackendGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListBackendGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackendGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackendGroupsRequest): ListBackendGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackendGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackendGroupsRequest;
    static deserializeBinaryFromReader(message: ListBackendGroupsRequest, reader: jspb.BinaryReader): ListBackendGroupsRequest;
}

export namespace ListBackendGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListBackendGroupsResponse extends jspb.Message { 
    clearBackendGroupsList(): void;
    getBackendGroupsList(): Array<yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup>;
    setBackendGroupsList(value: Array<yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup>): ListBackendGroupsResponse;
    addBackendGroups(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup, index?: number): yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBackendGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackendGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackendGroupsResponse): ListBackendGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackendGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackendGroupsResponse;
    static deserializeBinaryFromReader(message: ListBackendGroupsResponse, reader: jspb.BinaryReader): ListBackendGroupsResponse;
}

export namespace ListBackendGroupsResponse {
    export type AsObject = {
        backendGroupsList: Array<yandex_cloud_apploadbalancer_v1_backend_group_pb.BackendGroup.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteBackendGroupRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): DeleteBackendGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBackendGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBackendGroupRequest): DeleteBackendGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBackendGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBackendGroupRequest;
    static deserializeBinaryFromReader(message: DeleteBackendGroupRequest, reader: jspb.BinaryReader): DeleteBackendGroupRequest;
}

export namespace DeleteBackendGroupRequest {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class DeleteBackendGroupMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): DeleteBackendGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteBackendGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteBackendGroupMetadata): DeleteBackendGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteBackendGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteBackendGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteBackendGroupMetadata, reader: jspb.BinaryReader): DeleteBackendGroupMetadata;
}

export namespace DeleteBackendGroupMetadata {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class UpdateBackendGroupRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): UpdateBackendGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateBackendGroupRequest;
    getName(): string;
    setName(value: string): UpdateBackendGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateBackendGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup): UpdateBackendGroupRequest;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup | undefined;
    setGrpc(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup): UpdateBackendGroupRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup | undefined;
    setStream(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup): UpdateBackendGroupRequest;

    getBackendCase(): UpdateBackendGroupRequest.BackendCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBackendGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBackendGroupRequest): UpdateBackendGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBackendGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBackendGroupRequest;
    static deserializeBinaryFromReader(message: UpdateBackendGroupRequest, reader: jspb.BinaryReader): UpdateBackendGroupRequest;
}

export namespace UpdateBackendGroupRequest {
    export type AsObject = {
        backendGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        http?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup.AsObject,
        grpc?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup.AsObject,
        stream?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup.AsObject,
    }

    export enum BackendCase {
        BACKEND_NOT_SET = 0,
        HTTP = 6,
        GRPC = 7,
        STREAM = 8,
    }

}

export class UpdateBackendGroupMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): UpdateBackendGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBackendGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBackendGroupMetadata): UpdateBackendGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBackendGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBackendGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateBackendGroupMetadata, reader: jspb.BinaryReader): UpdateBackendGroupMetadata;
}

export namespace UpdateBackendGroupMetadata {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class CreateBackendGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateBackendGroupRequest;
    getName(): string;
    setName(value: string): CreateBackendGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateBackendGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup): CreateBackendGroupRequest;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup | undefined;
    setGrpc(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup): CreateBackendGroupRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup | undefined;
    setStream(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup): CreateBackendGroupRequest;

    getBackendCase(): CreateBackendGroupRequest.BackendCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBackendGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBackendGroupRequest): CreateBackendGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBackendGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBackendGroupRequest;
    static deserializeBinaryFromReader(message: CreateBackendGroupRequest, reader: jspb.BinaryReader): CreateBackendGroupRequest;
}

export namespace CreateBackendGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        http?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackendGroup.AsObject,
        grpc?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackendGroup.AsObject,
        stream?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackendGroup.AsObject,
    }

    export enum BackendCase {
        BACKEND_NOT_SET = 0,
        HTTP = 5,
        GRPC = 6,
        STREAM = 7,
    }

}

export class CreateBackendGroupMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): CreateBackendGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateBackendGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateBackendGroupMetadata): CreateBackendGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateBackendGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateBackendGroupMetadata;
    static deserializeBinaryFromReader(message: CreateBackendGroupMetadata, reader: jspb.BinaryReader): CreateBackendGroupMetadata;
}

export namespace CreateBackendGroupMetadata {
    export type AsObject = {
        backendGroupId: string,
    }
}

export class AddBackendRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): AddBackendRequest;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend): AddBackendRequest;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend | undefined;
    setGrpc(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend): AddBackendRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend | undefined;
    setStream(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend): AddBackendRequest;

    getBackendCase(): AddBackendRequest.BackendCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddBackendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddBackendRequest): AddBackendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddBackendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddBackendRequest;
    static deserializeBinaryFromReader(message: AddBackendRequest, reader: jspb.BinaryReader): AddBackendRequest;
}

export namespace AddBackendRequest {
    export type AsObject = {
        backendGroupId: string,
        http?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend.AsObject,
        grpc?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend.AsObject,
        stream?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend.AsObject,
    }

    export enum BackendCase {
        BACKEND_NOT_SET = 0,
        HTTP = 2,
        GRPC = 3,
        STREAM = 5,
    }

}

export class AddBackendMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): AddBackendMetadata;
    getBackendName(): string;
    setBackendName(value: string): AddBackendMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddBackendMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddBackendMetadata): AddBackendMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddBackendMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddBackendMetadata;
    static deserializeBinaryFromReader(message: AddBackendMetadata, reader: jspb.BinaryReader): AddBackendMetadata;
}

export namespace AddBackendMetadata {
    export type AsObject = {
        backendGroupId: string,
        backendName: string,
    }
}

export class UpdateBackendRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): UpdateBackendRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateBackendRequest;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend): UpdateBackendRequest;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend | undefined;
    setGrpc(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend): UpdateBackendRequest;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend | undefined;
    setStream(value?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend): UpdateBackendRequest;

    getBackendCase(): UpdateBackendRequest.BackendCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBackendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBackendRequest): UpdateBackendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBackendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBackendRequest;
    static deserializeBinaryFromReader(message: UpdateBackendRequest, reader: jspb.BinaryReader): UpdateBackendRequest;
}

export namespace UpdateBackendRequest {
    export type AsObject = {
        backendGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        http?: yandex_cloud_apploadbalancer_v1_backend_group_pb.HttpBackend.AsObject,
        grpc?: yandex_cloud_apploadbalancer_v1_backend_group_pb.GrpcBackend.AsObject,
        stream?: yandex_cloud_apploadbalancer_v1_backend_group_pb.StreamBackend.AsObject,
    }

    export enum BackendCase {
        BACKEND_NOT_SET = 0,
        HTTP = 3,
        GRPC = 4,
        STREAM = 5,
    }

}

export class UpdateBackendMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): UpdateBackendMetadata;
    getBackendName(): string;
    setBackendName(value: string): UpdateBackendMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateBackendMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateBackendMetadata): UpdateBackendMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateBackendMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateBackendMetadata;
    static deserializeBinaryFromReader(message: UpdateBackendMetadata, reader: jspb.BinaryReader): UpdateBackendMetadata;
}

export namespace UpdateBackendMetadata {
    export type AsObject = {
        backendGroupId: string,
        backendName: string,
    }
}

export class RemoveBackendRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): RemoveBackendRequest;
    getBackendName(): string;
    setBackendName(value: string): RemoveBackendRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveBackendRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveBackendRequest): RemoveBackendRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveBackendRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveBackendRequest;
    static deserializeBinaryFromReader(message: RemoveBackendRequest, reader: jspb.BinaryReader): RemoveBackendRequest;
}

export namespace RemoveBackendRequest {
    export type AsObject = {
        backendGroupId: string,
        backendName: string,
    }
}

export class RemoveBackendMetadata extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): RemoveBackendMetadata;
    getBackendName(): string;
    setBackendName(value: string): RemoveBackendMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveBackendMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveBackendMetadata): RemoveBackendMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveBackendMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveBackendMetadata;
    static deserializeBinaryFromReader(message: RemoveBackendMetadata, reader: jspb.BinaryReader): RemoveBackendMetadata;
}

export namespace RemoveBackendMetadata {
    export type AsObject = {
        backendGroupId: string,
        backendName: string,
    }
}

export class ListBackendGroupOperationsRequest extends jspb.Message { 
    getBackendGroupId(): string;
    setBackendGroupId(value: string): ListBackendGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListBackendGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListBackendGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackendGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackendGroupOperationsRequest): ListBackendGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackendGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackendGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListBackendGroupOperationsRequest, reader: jspb.BinaryReader): ListBackendGroupOperationsRequest;
}

export namespace ListBackendGroupOperationsRequest {
    export type AsObject = {
        backendGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListBackendGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListBackendGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListBackendGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBackendGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBackendGroupOperationsResponse): ListBackendGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBackendGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBackendGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListBackendGroupOperationsResponse, reader: jspb.BinaryReader): ListBackendGroupOperationsResponse;
}

export namespace ListBackendGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
