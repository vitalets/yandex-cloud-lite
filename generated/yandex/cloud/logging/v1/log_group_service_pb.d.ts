// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_logging_v1_log_group_pb from "../../../../yandex/cloud/logging/v1/log_group_pb";
import * as yandex_cloud_logging_v1_log_resource_pb from "../../../../yandex/cloud/logging/v1/log_resource_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetLogGroupRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): GetLogGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogGroupRequest): GetLogGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogGroupRequest;
    static deserializeBinaryFromReader(message: GetLogGroupRequest, reader: jspb.BinaryReader): GetLogGroupRequest;
}

export namespace GetLogGroupRequest {
    export type AsObject = {
        logGroupId: string,
    }
}

export class GetLogGroupStatsRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): GetLogGroupStatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogGroupStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogGroupStatsRequest): GetLogGroupStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogGroupStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogGroupStatsRequest;
    static deserializeBinaryFromReader(message: GetLogGroupStatsRequest, reader: jspb.BinaryReader): GetLogGroupStatsRequest;
}

export namespace GetLogGroupStatsRequest {
    export type AsObject = {
        logGroupId: string,
    }
}

export class ListLogGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListLogGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListLogGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLogGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListLogGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogGroupsRequest): ListLogGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogGroupsRequest;
    static deserializeBinaryFromReader(message: ListLogGroupsRequest, reader: jspb.BinaryReader): ListLogGroupsRequest;
}

export namespace ListLogGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListLogGroupsResponse extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<yandex_cloud_logging_v1_log_group_pb.LogGroup>;
    setGroupsList(value: Array<yandex_cloud_logging_v1_log_group_pb.LogGroup>): ListLogGroupsResponse;
    addGroups(value?: yandex_cloud_logging_v1_log_group_pb.LogGroup, index?: number): yandex_cloud_logging_v1_log_group_pb.LogGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLogGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLogGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLogGroupsResponse): ListLogGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLogGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLogGroupsResponse;
    static deserializeBinaryFromReader(message: ListLogGroupsResponse, reader: jspb.BinaryReader): ListLogGroupsResponse;
}

export namespace ListLogGroupsResponse {
    export type AsObject = {
        groupsList: Array<yandex_cloud_logging_v1_log_group_pb.LogGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateLogGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateLogGroupRequest;
    getName(): string;
    setName(value: string): CreateLogGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateLogGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasRetentionPeriod(): boolean;
    clearRetentionPeriod(): void;
    getRetentionPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRetentionPeriod(value?: google_protobuf_duration_pb.Duration): CreateLogGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLogGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLogGroupRequest): CreateLogGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLogGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLogGroupRequest;
    static deserializeBinaryFromReader(message: CreateLogGroupRequest, reader: jspb.BinaryReader): CreateLogGroupRequest;
}

export namespace CreateLogGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        retentionPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class CreateLogGroupMetadata extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): CreateLogGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLogGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLogGroupMetadata): CreateLogGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLogGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLogGroupMetadata;
    static deserializeBinaryFromReader(message: CreateLogGroupMetadata, reader: jspb.BinaryReader): CreateLogGroupMetadata;
}

export namespace CreateLogGroupMetadata {
    export type AsObject = {
        logGroupId: string,
    }
}

export class UpdateLogGroupRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): UpdateLogGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLogGroupRequest;
    getName(): string;
    setName(value: string): UpdateLogGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateLogGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasRetentionPeriod(): boolean;
    clearRetentionPeriod(): void;
    getRetentionPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRetentionPeriod(value?: google_protobuf_duration_pb.Duration): UpdateLogGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLogGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLogGroupRequest): UpdateLogGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLogGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLogGroupRequest;
    static deserializeBinaryFromReader(message: UpdateLogGroupRequest, reader: jspb.BinaryReader): UpdateLogGroupRequest;
}

export namespace UpdateLogGroupRequest {
    export type AsObject = {
        logGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        retentionPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class UpdateLogGroupMetadata extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): UpdateLogGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLogGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLogGroupMetadata): UpdateLogGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLogGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLogGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateLogGroupMetadata, reader: jspb.BinaryReader): UpdateLogGroupMetadata;
}

export namespace UpdateLogGroupMetadata {
    export type AsObject = {
        logGroupId: string,
    }
}

export class DeleteLogGroupRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): DeleteLogGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLogGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLogGroupRequest): DeleteLogGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLogGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLogGroupRequest;
    static deserializeBinaryFromReader(message: DeleteLogGroupRequest, reader: jspb.BinaryReader): DeleteLogGroupRequest;
}

export namespace DeleteLogGroupRequest {
    export type AsObject = {
        logGroupId: string,
    }
}

export class DeleteLogGroupMetadata extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): DeleteLogGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLogGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLogGroupMetadata): DeleteLogGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLogGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLogGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteLogGroupMetadata, reader: jspb.BinaryReader): DeleteLogGroupMetadata;
}

export namespace DeleteLogGroupMetadata {
    export type AsObject = {
        logGroupId: string,
    }
}

export class ListResourcesRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): ListResourcesRequest;
    getType(): string;
    setType(value: string): ListResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesRequest): ListResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesRequest;
    static deserializeBinaryFromReader(message: ListResourcesRequest, reader: jspb.BinaryReader): ListResourcesRequest;
}

export namespace ListResourcesRequest {
    export type AsObject = {
        logGroupId: string,
        type: string,
    }
}

export class ListResourcesResponse extends jspb.Message { 
    clearResourcesList(): void;
    getResourcesList(): Array<yandex_cloud_logging_v1_log_resource_pb.LogGroupResource>;
    setResourcesList(value: Array<yandex_cloud_logging_v1_log_resource_pb.LogGroupResource>): ListResourcesResponse;
    addResources(value?: yandex_cloud_logging_v1_log_resource_pb.LogGroupResource, index?: number): yandex_cloud_logging_v1_log_resource_pb.LogGroupResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesResponse): ListResourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesResponse;
    static deserializeBinaryFromReader(message: ListResourcesResponse, reader: jspb.BinaryReader): ListResourcesResponse;
}

export namespace ListResourcesResponse {
    export type AsObject = {
        resourcesList: Array<yandex_cloud_logging_v1_log_resource_pb.LogGroupResource.AsObject>,
    }
}

export class ListOperationsRequest extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): ListOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
    static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
    export type AsObject = {
        logGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
    static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class GetLogGroupStatsResponse extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): GetLogGroupStatsResponse;
    getBytes(): number;
    setBytes(value: number): GetLogGroupStatsResponse;
    getRecords(): number;
    setRecords(value: number): GetLogGroupStatsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLogGroupStatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLogGroupStatsResponse): GetLogGroupStatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLogGroupStatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLogGroupStatsResponse;
    static deserializeBinaryFromReader(message: GetLogGroupStatsResponse, reader: jspb.BinaryReader): GetLogGroupStatsResponse;
}

export namespace GetLogGroupStatsResponse {
    export type AsObject = {
        logGroupId: string,
        bytes: number,
        records: number,
    }
}
