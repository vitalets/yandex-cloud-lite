// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/cloud_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_resourcemanager_v1_cloud_pb from "../../../../yandex/cloud/resourcemanager/v1/cloud_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetCloudRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): GetCloudRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCloudRequest): GetCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCloudRequest;
    static deserializeBinaryFromReader(message: GetCloudRequest, reader: jspb.BinaryReader): GetCloudRequest;
}

export namespace GetCloudRequest {
    export type AsObject = {
        cloudId: string,
    }
}

export class ListCloudsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListCloudsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListCloudsRequest;
    getFilter(): string;
    setFilter(value: string): ListCloudsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCloudsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCloudsRequest): ListCloudsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCloudsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCloudsRequest;
    static deserializeBinaryFromReader(message: ListCloudsRequest, reader: jspb.BinaryReader): ListCloudsRequest;
}

export namespace ListCloudsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListCloudsResponse extends jspb.Message { 
    clearCloudsList(): void;
    getCloudsList(): Array<yandex_cloud_resourcemanager_v1_cloud_pb.Cloud>;
    setCloudsList(value: Array<yandex_cloud_resourcemanager_v1_cloud_pb.Cloud>): ListCloudsResponse;
    addClouds(value?: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud, index?: number): yandex_cloud_resourcemanager_v1_cloud_pb.Cloud;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCloudsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCloudsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCloudsResponse): ListCloudsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCloudsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCloudsResponse;
    static deserializeBinaryFromReader(message: ListCloudsResponse, reader: jspb.BinaryReader): ListCloudsResponse;
}

export namespace ListCloudsResponse {
    export type AsObject = {
        cloudsList: Array<yandex_cloud_resourcemanager_v1_cloud_pb.Cloud.AsObject>,
        nextPageToken: string,
    }
}

export class CreateCloudRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): CreateCloudRequest;
    getName(): string;
    setName(value: string): CreateCloudRequest;
    getDescription(): string;
    setDescription(value: string): CreateCloudRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCloudRequest): CreateCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCloudRequest;
    static deserializeBinaryFromReader(message: CreateCloudRequest, reader: jspb.BinaryReader): CreateCloudRequest;
}

export namespace CreateCloudRequest {
    export type AsObject = {
        organizationId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateCloudMetadata extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): CreateCloudMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCloudMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCloudMetadata): CreateCloudMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCloudMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCloudMetadata;
    static deserializeBinaryFromReader(message: CreateCloudMetadata, reader: jspb.BinaryReader): CreateCloudMetadata;
}

export namespace CreateCloudMetadata {
    export type AsObject = {
        cloudId: string,
    }
}

export class ListCloudOperationsRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): ListCloudOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCloudOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListCloudOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCloudOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCloudOperationsRequest): ListCloudOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCloudOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCloudOperationsRequest;
    static deserializeBinaryFromReader(message: ListCloudOperationsRequest, reader: jspb.BinaryReader): ListCloudOperationsRequest;
}

export namespace ListCloudOperationsRequest {
    export type AsObject = {
        cloudId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListCloudOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListCloudOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCloudOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCloudOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCloudOperationsResponse): ListCloudOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCloudOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCloudOperationsResponse;
    static deserializeBinaryFromReader(message: ListCloudOperationsResponse, reader: jspb.BinaryReader): ListCloudOperationsResponse;
}

export namespace ListCloudOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateCloudRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): UpdateCloudRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCloudRequest;
    getName(): string;
    setName(value: string): UpdateCloudRequest;
    getDescription(): string;
    setDescription(value: string): UpdateCloudRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCloudRequest): UpdateCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCloudRequest;
    static deserializeBinaryFromReader(message: UpdateCloudRequest, reader: jspb.BinaryReader): UpdateCloudRequest;
}

export namespace UpdateCloudRequest {
    export type AsObject = {
        cloudId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateCloudMetadata extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): UpdateCloudMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCloudMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCloudMetadata): UpdateCloudMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCloudMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCloudMetadata;
    static deserializeBinaryFromReader(message: UpdateCloudMetadata, reader: jspb.BinaryReader): UpdateCloudMetadata;
}

export namespace UpdateCloudMetadata {
    export type AsObject = {
        cloudId: string,
    }
}

export class DeleteCloudRequest extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): DeleteCloudRequest;

    hasDeleteAfter(): boolean;
    clearDeleteAfter(): void;
    getDeleteAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeleteAfter(value?: google_protobuf_timestamp_pb.Timestamp): DeleteCloudRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCloudRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCloudRequest): DeleteCloudRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCloudRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCloudRequest;
    static deserializeBinaryFromReader(message: DeleteCloudRequest, reader: jspb.BinaryReader): DeleteCloudRequest;
}

export namespace DeleteCloudRequest {
    export type AsObject = {
        cloudId: string,
        deleteAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DeleteCloudMetadata extends jspb.Message { 
    getCloudId(): string;
    setCloudId(value: string): DeleteCloudMetadata;

    hasDeleteAfter(): boolean;
    clearDeleteAfter(): void;
    getDeleteAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeleteAfter(value?: google_protobuf_timestamp_pb.Timestamp): DeleteCloudMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCloudMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCloudMetadata): DeleteCloudMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCloudMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCloudMetadata;
    static deserializeBinaryFromReader(message: DeleteCloudMetadata, reader: jspb.BinaryReader): DeleteCloudMetadata;
}

export namespace DeleteCloudMetadata {
    export type AsObject = {
        cloudId: string,
        deleteAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
