// package: yandex.cloud.organizationmanager.v1
// file: yandex/cloud/organizationmanager/v1/organization_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_organizationmanager_v1_organization_pb from "../../../../yandex/cloud/organizationmanager/v1/organization_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetOrganizationRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): GetOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
    static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
    export type AsObject = {
        organizationId: string,
    }
}

export class ListOrganizationsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListOrganizationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOrganizationsRequest;
    getFilter(): string;
    setFilter(value: string): ListOrganizationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
    static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListOrganizationsResponse extends jspb.Message { 
    clearOrganizationsList(): void;
    getOrganizationsList(): Array<yandex_cloud_organizationmanager_v1_organization_pb.Organization>;
    setOrganizationsList(value: Array<yandex_cloud_organizationmanager_v1_organization_pb.Organization>): ListOrganizationsResponse;
    addOrganizations(value?: yandex_cloud_organizationmanager_v1_organization_pb.Organization, index?: number): yandex_cloud_organizationmanager_v1_organization_pb.Organization;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOrganizationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
    static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
    export type AsObject = {
        organizationsList: Array<yandex_cloud_organizationmanager_v1_organization_pb.Organization.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateOrganizationRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): UpdateOrganizationRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateOrganizationRequest;
    getName(): string;
    setName(value: string): UpdateOrganizationRequest;
    getDescription(): string;
    setDescription(value: string): UpdateOrganizationRequest;
    getTitle(): string;
    setTitle(value: string): UpdateOrganizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
    static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
    export type AsObject = {
        organizationId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        title: string,
    }
}

export class UpdateOrganizationMetadata extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): UpdateOrganizationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrganizationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrganizationMetadata): UpdateOrganizationMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrganizationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrganizationMetadata;
    static deserializeBinaryFromReader(message: UpdateOrganizationMetadata, reader: jspb.BinaryReader): UpdateOrganizationMetadata;
}

export namespace UpdateOrganizationMetadata {
    export type AsObject = {
        organizationId: string,
    }
}

export class ListOrganizationOperationsRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): ListOrganizationOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListOrganizationOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOrganizationOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrganizationOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrganizationOperationsRequest): ListOrganizationOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrganizationOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrganizationOperationsRequest;
    static deserializeBinaryFromReader(message: ListOrganizationOperationsRequest, reader: jspb.BinaryReader): ListOrganizationOperationsRequest;
}

export namespace ListOrganizationOperationsRequest {
    export type AsObject = {
        organizationId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListOrganizationOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListOrganizationOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOrganizationOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrganizationOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrganizationOperationsResponse): ListOrganizationOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrganizationOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrganizationOperationsResponse;
    static deserializeBinaryFromReader(message: ListOrganizationOperationsResponse, reader: jspb.BinaryReader): ListOrganizationOperationsResponse;
}

export namespace ListOrganizationOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
