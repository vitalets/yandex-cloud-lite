// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/api_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_api_key_pb from "../../../../yandex/cloud/iam/v1/api_key_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetApiKeyRequest extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): GetApiKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetApiKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetApiKeyRequest): GetApiKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetApiKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetApiKeyRequest;
    static deserializeBinaryFromReader(message: GetApiKeyRequest, reader: jspb.BinaryReader): GetApiKeyRequest;
}

export namespace GetApiKeyRequest {
    export type AsObject = {
        apiKeyId: string,
    }
}

export class ListApiKeysRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): ListApiKeysRequest;
    getPageSize(): number;
    setPageSize(value: number): ListApiKeysRequest;
    getPageToken(): string;
    setPageToken(value: string): ListApiKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiKeysRequest): ListApiKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiKeysRequest;
    static deserializeBinaryFromReader(message: ListApiKeysRequest, reader: jspb.BinaryReader): ListApiKeysRequest;
}

export namespace ListApiKeysRequest {
    export type AsObject = {
        serviceAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListApiKeysResponse extends jspb.Message { 
    clearApiKeysList(): void;
    getApiKeysList(): Array<yandex_cloud_iam_v1_api_key_pb.ApiKey>;
    setApiKeysList(value: Array<yandex_cloud_iam_v1_api_key_pb.ApiKey>): ListApiKeysResponse;
    addApiKeys(value?: yandex_cloud_iam_v1_api_key_pb.ApiKey, index?: number): yandex_cloud_iam_v1_api_key_pb.ApiKey;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListApiKeysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiKeysResponse): ListApiKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiKeysResponse;
    static deserializeBinaryFromReader(message: ListApiKeysResponse, reader: jspb.BinaryReader): ListApiKeysResponse;
}

export namespace ListApiKeysResponse {
    export type AsObject = {
        apiKeysList: Array<yandex_cloud_iam_v1_api_key_pb.ApiKey.AsObject>,
        nextPageToken: string,
    }
}

export class CreateApiKeyRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateApiKeyRequest;
    getDescription(): string;
    setDescription(value: string): CreateApiKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateApiKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateApiKeyRequest): CreateApiKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateApiKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateApiKeyRequest;
    static deserializeBinaryFromReader(message: CreateApiKeyRequest, reader: jspb.BinaryReader): CreateApiKeyRequest;
}

export namespace CreateApiKeyRequest {
    export type AsObject = {
        serviceAccountId: string,
        description: string,
    }
}

export class CreateApiKeyResponse extends jspb.Message { 

    hasApiKey(): boolean;
    clearApiKey(): void;
    getApiKey(): yandex_cloud_iam_v1_api_key_pb.ApiKey | undefined;
    setApiKey(value?: yandex_cloud_iam_v1_api_key_pb.ApiKey): CreateApiKeyResponse;
    getSecret(): string;
    setSecret(value: string): CreateApiKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateApiKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateApiKeyResponse): CreateApiKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateApiKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateApiKeyResponse;
    static deserializeBinaryFromReader(message: CreateApiKeyResponse, reader: jspb.BinaryReader): CreateApiKeyResponse;
}

export namespace CreateApiKeyResponse {
    export type AsObject = {
        apiKey?: yandex_cloud_iam_v1_api_key_pb.ApiKey.AsObject,
        secret: string,
    }
}

export class UpdateApiKeyRequest extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): UpdateApiKeyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateApiKeyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateApiKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateApiKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateApiKeyRequest): UpdateApiKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateApiKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateApiKeyRequest;
    static deserializeBinaryFromReader(message: UpdateApiKeyRequest, reader: jspb.BinaryReader): UpdateApiKeyRequest;
}

export namespace UpdateApiKeyRequest {
    export type AsObject = {
        apiKeyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,
    }
}

export class UpdateApiKeyMetadata extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): UpdateApiKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateApiKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateApiKeyMetadata): UpdateApiKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateApiKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateApiKeyMetadata;
    static deserializeBinaryFromReader(message: UpdateApiKeyMetadata, reader: jspb.BinaryReader): UpdateApiKeyMetadata;
}

export namespace UpdateApiKeyMetadata {
    export type AsObject = {
        apiKeyId: string,
    }
}

export class DeleteApiKeyRequest extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): DeleteApiKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteApiKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteApiKeyRequest): DeleteApiKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteApiKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteApiKeyRequest;
    static deserializeBinaryFromReader(message: DeleteApiKeyRequest, reader: jspb.BinaryReader): DeleteApiKeyRequest;
}

export namespace DeleteApiKeyRequest {
    export type AsObject = {
        apiKeyId: string,
    }
}

export class DeleteApiKeyMetadata extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): DeleteApiKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteApiKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteApiKeyMetadata): DeleteApiKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteApiKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteApiKeyMetadata;
    static deserializeBinaryFromReader(message: DeleteApiKeyMetadata, reader: jspb.BinaryReader): DeleteApiKeyMetadata;
}

export namespace DeleteApiKeyMetadata {
    export type AsObject = {
        apiKeyId: string,
    }
}

export class ListApiKeyOperationsRequest extends jspb.Message { 
    getApiKeyId(): string;
    setApiKeyId(value: string): ListApiKeyOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListApiKeyOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListApiKeyOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiKeyOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiKeyOperationsRequest): ListApiKeyOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiKeyOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiKeyOperationsRequest;
    static deserializeBinaryFromReader(message: ListApiKeyOperationsRequest, reader: jspb.BinaryReader): ListApiKeyOperationsRequest;
}

export namespace ListApiKeyOperationsRequest {
    export type AsObject = {
        apiKeyId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListApiKeyOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListApiKeyOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListApiKeyOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiKeyOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiKeyOperationsResponse): ListApiKeyOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiKeyOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiKeyOperationsResponse;
    static deserializeBinaryFromReader(message: ListApiKeyOperationsResponse, reader: jspb.BinaryReader): ListApiKeyOperationsResponse;
}

export namespace ListApiKeyOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
