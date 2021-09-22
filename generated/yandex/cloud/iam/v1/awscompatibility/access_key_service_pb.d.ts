// package: yandex.cloud.iam.v1.awscompatibility
// file: yandex/cloud/iam/v1/awscompatibility/access_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_awscompatibility_access_key_pb from "../../../../../yandex/cloud/iam/v1/awscompatibility/access_key_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetAccessKeyRequest extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): GetAccessKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccessKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccessKeyRequest): GetAccessKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccessKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccessKeyRequest;
    static deserializeBinaryFromReader(message: GetAccessKeyRequest, reader: jspb.BinaryReader): GetAccessKeyRequest;
}

export namespace GetAccessKeyRequest {
    export type AsObject = {
        accessKeyId: string,
    }
}

export class ListAccessKeysRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): ListAccessKeysRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAccessKeysRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAccessKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessKeysRequest): ListAccessKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessKeysRequest;
    static deserializeBinaryFromReader(message: ListAccessKeysRequest, reader: jspb.BinaryReader): ListAccessKeysRequest;
}

export namespace ListAccessKeysRequest {
    export type AsObject = {
        serviceAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAccessKeysResponse extends jspb.Message { 
    clearAccessKeysList(): void;
    getAccessKeysList(): Array<yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey>;
    setAccessKeysList(value: Array<yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey>): ListAccessKeysResponse;
    addAccessKeys(value?: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey, index?: number): yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAccessKeysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessKeysResponse): ListAccessKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessKeysResponse;
    static deserializeBinaryFromReader(message: ListAccessKeysResponse, reader: jspb.BinaryReader): ListAccessKeysResponse;
}

export namespace ListAccessKeysResponse {
    export type AsObject = {
        accessKeysList: Array<yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey.AsObject>,
        nextPageToken: string,
    }
}

export class CreateAccessKeyRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateAccessKeyRequest;
    getDescription(): string;
    setDescription(value: string): CreateAccessKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessKeyRequest): CreateAccessKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessKeyRequest;
    static deserializeBinaryFromReader(message: CreateAccessKeyRequest, reader: jspb.BinaryReader): CreateAccessKeyRequest;
}

export namespace CreateAccessKeyRequest {
    export type AsObject = {
        serviceAccountId: string,
        description: string,
    }
}

export class CreateAccessKeyResponse extends jspb.Message { 

    hasAccessKey(): boolean;
    clearAccessKey(): void;
    getAccessKey(): yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey | undefined;
    setAccessKey(value?: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey): CreateAccessKeyResponse;
    getSecret(): string;
    setSecret(value: string): CreateAccessKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccessKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccessKeyResponse): CreateAccessKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccessKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccessKeyResponse;
    static deserializeBinaryFromReader(message: CreateAccessKeyResponse, reader: jspb.BinaryReader): CreateAccessKeyResponse;
}

export namespace CreateAccessKeyResponse {
    export type AsObject = {
        accessKey?: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey.AsObject,
        secret: string,
    }
}

export class UpdateAccessKeyRequest extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): UpdateAccessKeyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateAccessKeyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateAccessKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccessKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccessKeyRequest): UpdateAccessKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccessKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccessKeyRequest;
    static deserializeBinaryFromReader(message: UpdateAccessKeyRequest, reader: jspb.BinaryReader): UpdateAccessKeyRequest;
}

export namespace UpdateAccessKeyRequest {
    export type AsObject = {
        accessKeyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,
    }
}

export class UpdateAccessKeyMetadata extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): UpdateAccessKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAccessKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAccessKeyMetadata): UpdateAccessKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAccessKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAccessKeyMetadata;
    static deserializeBinaryFromReader(message: UpdateAccessKeyMetadata, reader: jspb.BinaryReader): UpdateAccessKeyMetadata;
}

export namespace UpdateAccessKeyMetadata {
    export type AsObject = {
        accessKeyId: string,
    }
}

export class DeleteAccessKeyRequest extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): DeleteAccessKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAccessKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAccessKeyRequest): DeleteAccessKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAccessKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAccessKeyRequest;
    static deserializeBinaryFromReader(message: DeleteAccessKeyRequest, reader: jspb.BinaryReader): DeleteAccessKeyRequest;
}

export namespace DeleteAccessKeyRequest {
    export type AsObject = {
        accessKeyId: string,
    }
}

export class DeleteAccessKeyMetadata extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): DeleteAccessKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAccessKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAccessKeyMetadata): DeleteAccessKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAccessKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAccessKeyMetadata;
    static deserializeBinaryFromReader(message: DeleteAccessKeyMetadata, reader: jspb.BinaryReader): DeleteAccessKeyMetadata;
}

export namespace DeleteAccessKeyMetadata {
    export type AsObject = {
        accessKeyId: string,
    }
}

export class ListAccessKeyOperationsRequest extends jspb.Message { 
    getAccessKeyId(): string;
    setAccessKeyId(value: string): ListAccessKeyOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAccessKeyOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAccessKeyOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessKeyOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessKeyOperationsRequest): ListAccessKeyOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessKeyOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessKeyOperationsRequest;
    static deserializeBinaryFromReader(message: ListAccessKeyOperationsRequest, reader: jspb.BinaryReader): ListAccessKeyOperationsRequest;
}

export namespace ListAccessKeyOperationsRequest {
    export type AsObject = {
        accessKeyId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAccessKeyOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListAccessKeyOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAccessKeyOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAccessKeyOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAccessKeyOperationsResponse): ListAccessKeyOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAccessKeyOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAccessKeyOperationsResponse;
    static deserializeBinaryFromReader(message: ListAccessKeyOperationsResponse, reader: jspb.BinaryReader): ListAccessKeyOperationsResponse;
}

export namespace ListAccessKeyOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
