// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/placement_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_compute_v1_placement_group_pb from "../../../../yandex/cloud/compute/v1/placement_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetPlacementGroupRequest extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): GetPlacementGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPlacementGroupRequest): GetPlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPlacementGroupRequest;
    static deserializeBinaryFromReader(message: GetPlacementGroupRequest, reader: jspb.BinaryReader): GetPlacementGroupRequest;
}

export namespace GetPlacementGroupRequest {
    export type AsObject = {
        placementGroupId: string,
    }
}

export class ListPlacementGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListPlacementGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListPlacementGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListPlacementGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListPlacementGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupsRequest): ListPlacementGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupsRequest;
    static deserializeBinaryFromReader(message: ListPlacementGroupsRequest, reader: jspb.BinaryReader): ListPlacementGroupsRequest;
}

export namespace ListPlacementGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListPlacementGroupsResponse extends jspb.Message { 
    clearPlacementGroupsList(): void;
    getPlacementGroupsList(): Array<yandex_cloud_compute_v1_placement_group_pb.PlacementGroup>;
    setPlacementGroupsList(value: Array<yandex_cloud_compute_v1_placement_group_pb.PlacementGroup>): ListPlacementGroupsResponse;
    addPlacementGroups(value?: yandex_cloud_compute_v1_placement_group_pb.PlacementGroup, index?: number): yandex_cloud_compute_v1_placement_group_pb.PlacementGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListPlacementGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupsResponse): ListPlacementGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupsResponse;
    static deserializeBinaryFromReader(message: ListPlacementGroupsResponse, reader: jspb.BinaryReader): ListPlacementGroupsResponse;
}

export namespace ListPlacementGroupsResponse {
    export type AsObject = {
        placementGroupsList: Array<yandex_cloud_compute_v1_placement_group_pb.PlacementGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreatePlacementGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreatePlacementGroupRequest;
    getName(): string;
    setName(value: string): CreatePlacementGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreatePlacementGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSpreadPlacementStrategy(): boolean;
    clearSpreadPlacementStrategy(): void;
    getSpreadPlacementStrategy(): yandex_cloud_compute_v1_placement_group_pb.SpreadPlacementStrategy | undefined;
    setSpreadPlacementStrategy(value?: yandex_cloud_compute_v1_placement_group_pb.SpreadPlacementStrategy): CreatePlacementGroupRequest;

    getPlacementStrategyCase(): CreatePlacementGroupRequest.PlacementStrategyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlacementGroupRequest): CreatePlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlacementGroupRequest;
    static deserializeBinaryFromReader(message: CreatePlacementGroupRequest, reader: jspb.BinaryReader): CreatePlacementGroupRequest;
}

export namespace CreatePlacementGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        spreadPlacementStrategy?: yandex_cloud_compute_v1_placement_group_pb.SpreadPlacementStrategy.AsObject,
    }

    export enum PlacementStrategyCase {
        PLACEMENT_STRATEGY_NOT_SET = 0,
        SPREAD_PLACEMENT_STRATEGY = 5,
    }

}

export class CreatePlacementGroupMetadata extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): CreatePlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePlacementGroupMetadata): CreatePlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePlacementGroupMetadata;
    static deserializeBinaryFromReader(message: CreatePlacementGroupMetadata, reader: jspb.BinaryReader): CreatePlacementGroupMetadata;
}

export namespace CreatePlacementGroupMetadata {
    export type AsObject = {
        placementGroupId: string,
    }
}

export class UpdatePlacementGroupRequest extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): UpdatePlacementGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdatePlacementGroupRequest;
    getName(): string;
    setName(value: string): UpdatePlacementGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdatePlacementGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlacementGroupRequest): UpdatePlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlacementGroupRequest;
    static deserializeBinaryFromReader(message: UpdatePlacementGroupRequest, reader: jspb.BinaryReader): UpdatePlacementGroupRequest;
}

export namespace UpdatePlacementGroupRequest {
    export type AsObject = {
        placementGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdatePlacementGroupMetadata extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): UpdatePlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlacementGroupMetadata): UpdatePlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlacementGroupMetadata;
    static deserializeBinaryFromReader(message: UpdatePlacementGroupMetadata, reader: jspb.BinaryReader): UpdatePlacementGroupMetadata;
}

export namespace UpdatePlacementGroupMetadata {
    export type AsObject = {
        placementGroupId: string,
    }
}

export class DeletePlacementGroupRequest extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): DeletePlacementGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePlacementGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePlacementGroupRequest): DeletePlacementGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePlacementGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePlacementGroupRequest;
    static deserializeBinaryFromReader(message: DeletePlacementGroupRequest, reader: jspb.BinaryReader): DeletePlacementGroupRequest;
}

export namespace DeletePlacementGroupRequest {
    export type AsObject = {
        placementGroupId: string,
    }
}

export class DeletePlacementGroupMetadata extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): DeletePlacementGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePlacementGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePlacementGroupMetadata): DeletePlacementGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePlacementGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePlacementGroupMetadata;
    static deserializeBinaryFromReader(message: DeletePlacementGroupMetadata, reader: jspb.BinaryReader): DeletePlacementGroupMetadata;
}

export namespace DeletePlacementGroupMetadata {
    export type AsObject = {
        placementGroupId: string,
    }
}

export class ListPlacementGroupInstancesRequest extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): ListPlacementGroupInstancesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListPlacementGroupInstancesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListPlacementGroupInstancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupInstancesRequest): ListPlacementGroupInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupInstancesRequest;
    static deserializeBinaryFromReader(message: ListPlacementGroupInstancesRequest, reader: jspb.BinaryReader): ListPlacementGroupInstancesRequest;
}

export namespace ListPlacementGroupInstancesRequest {
    export type AsObject = {
        placementGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListPlacementGroupInstancesResponse extends jspb.Message { 
    clearInstancesList(): void;
    getInstancesList(): Array<yandex_cloud_compute_v1_instance_pb.Instance>;
    setInstancesList(value: Array<yandex_cloud_compute_v1_instance_pb.Instance>): ListPlacementGroupInstancesResponse;
    addInstances(value?: yandex_cloud_compute_v1_instance_pb.Instance, index?: number): yandex_cloud_compute_v1_instance_pb.Instance;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListPlacementGroupInstancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupInstancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupInstancesResponse): ListPlacementGroupInstancesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupInstancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupInstancesResponse;
    static deserializeBinaryFromReader(message: ListPlacementGroupInstancesResponse, reader: jspb.BinaryReader): ListPlacementGroupInstancesResponse;
}

export namespace ListPlacementGroupInstancesResponse {
    export type AsObject = {
        instancesList: Array<yandex_cloud_compute_v1_instance_pb.Instance.AsObject>,
        nextPageToken: string,
    }
}

export class ListPlacementGroupOperationsRequest extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): ListPlacementGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListPlacementGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListPlacementGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupOperationsRequest): ListPlacementGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListPlacementGroupOperationsRequest, reader: jspb.BinaryReader): ListPlacementGroupOperationsRequest;
}

export namespace ListPlacementGroupOperationsRequest {
    export type AsObject = {
        placementGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListPlacementGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListPlacementGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListPlacementGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPlacementGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPlacementGroupOperationsResponse): ListPlacementGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPlacementGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPlacementGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListPlacementGroupOperationsResponse, reader: jspb.BinaryReader): ListPlacementGroupOperationsResponse;
}

export namespace ListPlacementGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
