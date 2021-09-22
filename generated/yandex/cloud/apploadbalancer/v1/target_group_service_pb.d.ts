// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/target_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_target_group_pb from "../../../../yandex/cloud/apploadbalancer/v1/target_group_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetTargetGroupRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): GetTargetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTargetGroupRequest): GetTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTargetGroupRequest;
    static deserializeBinaryFromReader(message: GetTargetGroupRequest, reader: jspb.BinaryReader): GetTargetGroupRequest;
}

export namespace GetTargetGroupRequest {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class ListTargetGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListTargetGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTargetGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTargetGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListTargetGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTargetGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTargetGroupsRequest): ListTargetGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTargetGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTargetGroupsRequest;
    static deserializeBinaryFromReader(message: ListTargetGroupsRequest, reader: jspb.BinaryReader): ListTargetGroupsRequest;
}

export namespace ListTargetGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListTargetGroupsResponse extends jspb.Message { 
    clearTargetGroupsList(): void;
    getTargetGroupsList(): Array<yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup>;
    setTargetGroupsList(value: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup>): ListTargetGroupsResponse;
    addTargetGroups(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup, index?: number): yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTargetGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTargetGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTargetGroupsResponse): ListTargetGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTargetGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTargetGroupsResponse;
    static deserializeBinaryFromReader(message: ListTargetGroupsResponse, reader: jspb.BinaryReader): ListTargetGroupsResponse;
}

export namespace ListTargetGroupsResponse {
    export type AsObject = {
        targetGroupsList: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.TargetGroup.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteTargetGroupRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): DeleteTargetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTargetGroupRequest): DeleteTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTargetGroupRequest;
    static deserializeBinaryFromReader(message: DeleteTargetGroupRequest, reader: jspb.BinaryReader): DeleteTargetGroupRequest;
}

export namespace DeleteTargetGroupRequest {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class DeleteTargetGroupMetadata extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): DeleteTargetGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTargetGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTargetGroupMetadata): DeleteTargetGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTargetGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTargetGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteTargetGroupMetadata, reader: jspb.BinaryReader): DeleteTargetGroupMetadata;
}

export namespace DeleteTargetGroupMetadata {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class UpdateTargetGroupRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): UpdateTargetGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTargetGroupRequest;
    getName(): string;
    setName(value: string): UpdateTargetGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTargetGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearTargetsList(): void;
    getTargetsList(): Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>;
    setTargetsList(value: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>): UpdateTargetGroupRequest;
    addTargets(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target, index?: number): yandex_cloud_apploadbalancer_v1_target_group_pb.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTargetGroupRequest): UpdateTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTargetGroupRequest;
    static deserializeBinaryFromReader(message: UpdateTargetGroupRequest, reader: jspb.BinaryReader): UpdateTargetGroupRequest;
}

export namespace UpdateTargetGroupRequest {
    export type AsObject = {
        targetGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        targetsList: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target.AsObject>,
    }
}

export class UpdateTargetGroupMetadata extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): UpdateTargetGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTargetGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTargetGroupMetadata): UpdateTargetGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTargetGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTargetGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateTargetGroupMetadata, reader: jspb.BinaryReader): UpdateTargetGroupMetadata;
}

export namespace UpdateTargetGroupMetadata {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class CreateTargetGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateTargetGroupRequest;
    getName(): string;
    setName(value: string): CreateTargetGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateTargetGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearTargetsList(): void;
    getTargetsList(): Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>;
    setTargetsList(value: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>): CreateTargetGroupRequest;
    addTargets(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target, index?: number): yandex_cloud_apploadbalancer_v1_target_group_pb.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTargetGroupRequest): CreateTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTargetGroupRequest;
    static deserializeBinaryFromReader(message: CreateTargetGroupRequest, reader: jspb.BinaryReader): CreateTargetGroupRequest;
}

export namespace CreateTargetGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        targetsList: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target.AsObject>,
    }
}

export class CreateTargetGroupMetadata extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): CreateTargetGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTargetGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTargetGroupMetadata): CreateTargetGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTargetGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTargetGroupMetadata;
    static deserializeBinaryFromReader(message: CreateTargetGroupMetadata, reader: jspb.BinaryReader): CreateTargetGroupMetadata;
}

export namespace CreateTargetGroupMetadata {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class AddTargetsRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): AddTargetsRequest;
    clearTargetsList(): void;
    getTargetsList(): Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>;
    setTargetsList(value: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>): AddTargetsRequest;
    addTargets(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target, index?: number): yandex_cloud_apploadbalancer_v1_target_group_pb.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTargetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTargetsRequest): AddTargetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTargetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTargetsRequest;
    static deserializeBinaryFromReader(message: AddTargetsRequest, reader: jspb.BinaryReader): AddTargetsRequest;
}

export namespace AddTargetsRequest {
    export type AsObject = {
        targetGroupId: string,
        targetsList: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target.AsObject>,
    }
}

export class AddTargetsMetadata extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): AddTargetsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTargetsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddTargetsMetadata): AddTargetsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTargetsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTargetsMetadata;
    static deserializeBinaryFromReader(message: AddTargetsMetadata, reader: jspb.BinaryReader): AddTargetsMetadata;
}

export namespace AddTargetsMetadata {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class RemoveTargetsRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): RemoveTargetsRequest;
    clearTargetsList(): void;
    getTargetsList(): Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>;
    setTargetsList(value: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target>): RemoveTargetsRequest;
    addTargets(value?: yandex_cloud_apploadbalancer_v1_target_group_pb.Target, index?: number): yandex_cloud_apploadbalancer_v1_target_group_pb.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveTargetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveTargetsRequest): RemoveTargetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveTargetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveTargetsRequest;
    static deserializeBinaryFromReader(message: RemoveTargetsRequest, reader: jspb.BinaryReader): RemoveTargetsRequest;
}

export namespace RemoveTargetsRequest {
    export type AsObject = {
        targetGroupId: string,
        targetsList: Array<yandex_cloud_apploadbalancer_v1_target_group_pb.Target.AsObject>,
    }
}

export class RemoveTargetsMetadata extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): RemoveTargetsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveTargetsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveTargetsMetadata): RemoveTargetsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveTargetsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveTargetsMetadata;
    static deserializeBinaryFromReader(message: RemoveTargetsMetadata, reader: jspb.BinaryReader): RemoveTargetsMetadata;
}

export namespace RemoveTargetsMetadata {
    export type AsObject = {
        targetGroupId: string,
    }
}

export class ListTargetGroupOperationsRequest extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): ListTargetGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTargetGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTargetGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTargetGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTargetGroupOperationsRequest): ListTargetGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTargetGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTargetGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListTargetGroupOperationsRequest, reader: jspb.BinaryReader): ListTargetGroupOperationsRequest;
}

export namespace ListTargetGroupOperationsRequest {
    export type AsObject = {
        targetGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTargetGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListTargetGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTargetGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTargetGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTargetGroupOperationsResponse): ListTargetGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTargetGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTargetGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListTargetGroupOperationsResponse, reader: jspb.BinaryReader): ListTargetGroupOperationsResponse;
}

export namespace ListTargetGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
