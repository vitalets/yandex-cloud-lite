// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_iam_v1_key_pb from "../../../../yandex/cloud/iam/v1/key_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): GetKeyRequest;
    getFormat(): KeyFormat;
    setFormat(value: KeyFormat): GetKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
    static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
    export type AsObject = {
        keyId: string,
        format: KeyFormat,
    }
}

export class ListKeysRequest extends jspb.Message { 
    getFormat(): KeyFormat;
    setFormat(value: KeyFormat): ListKeysRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): ListKeysRequest;
    getPageSize(): number;
    setPageSize(value: number): ListKeysRequest;
    getPageToken(): string;
    setPageToken(value: string): ListKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
    static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
    export type AsObject = {
        format: KeyFormat,
        serviceAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListKeysResponse extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<yandex_cloud_iam_v1_key_pb.Key>;
    setKeysList(value: Array<yandex_cloud_iam_v1_key_pb.Key>): ListKeysResponse;
    addKeys(value?: yandex_cloud_iam_v1_key_pb.Key, index?: number): yandex_cloud_iam_v1_key_pb.Key;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListKeysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeysResponse): ListKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeysResponse;
    static deserializeBinaryFromReader(message: ListKeysResponse, reader: jspb.BinaryReader): ListKeysResponse;
}

export namespace ListKeysResponse {
    export type AsObject = {
        keysList: Array<yandex_cloud_iam_v1_key_pb.Key.AsObject>,
        nextPageToken: string,
    }
}

export class CreateKeyRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateKeyRequest;
    getDescription(): string;
    setDescription(value: string): CreateKeyRequest;
    getFormat(): KeyFormat;
    setFormat(value: KeyFormat): CreateKeyRequest;
    getKeyAlgorithm(): yandex_cloud_iam_v1_key_pb.Key.Algorithm;
    setKeyAlgorithm(value: yandex_cloud_iam_v1_key_pb.Key.Algorithm): CreateKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
    static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
    export type AsObject = {
        serviceAccountId: string,
        description: string,
        format: KeyFormat,
        keyAlgorithm: yandex_cloud_iam_v1_key_pb.Key.Algorithm,
    }
}

export class CreateKeyResponse extends jspb.Message { 

    hasKey(): boolean;
    clearKey(): void;
    getKey(): yandex_cloud_iam_v1_key_pb.Key | undefined;
    setKey(value?: yandex_cloud_iam_v1_key_pb.Key): CreateKeyResponse;
    getPrivateKey(): string;
    setPrivateKey(value: string): CreateKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateKeyResponse): CreateKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateKeyResponse;
    static deserializeBinaryFromReader(message: CreateKeyResponse, reader: jspb.BinaryReader): CreateKeyResponse;
}

export namespace CreateKeyResponse {
    export type AsObject = {
        key?: yandex_cloud_iam_v1_key_pb.Key.AsObject,
        privateKey: string,
    }
}

export class UpdateKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): UpdateKeyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateKeyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateKeyRequest): UpdateKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateKeyRequest;
    static deserializeBinaryFromReader(message: UpdateKeyRequest, reader: jspb.BinaryReader): UpdateKeyRequest;
}

export namespace UpdateKeyRequest {
    export type AsObject = {
        keyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,
    }
}

export class UpdateKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): UpdateKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateKeyMetadata): UpdateKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateKeyMetadata;
    static deserializeBinaryFromReader(message: UpdateKeyMetadata, reader: jspb.BinaryReader): UpdateKeyMetadata;
}

export namespace UpdateKeyMetadata {
    export type AsObject = {
        keyId: string,
    }
}

export class DeleteKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): DeleteKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteKeyRequest): DeleteKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteKeyRequest;
    static deserializeBinaryFromReader(message: DeleteKeyRequest, reader: jspb.BinaryReader): DeleteKeyRequest;
}

export namespace DeleteKeyRequest {
    export type AsObject = {
        keyId: string,
    }
}

export class DeleteKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): DeleteKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteKeyMetadata): DeleteKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteKeyMetadata;
    static deserializeBinaryFromReader(message: DeleteKeyMetadata, reader: jspb.BinaryReader): DeleteKeyMetadata;
}

export namespace DeleteKeyMetadata {
    export type AsObject = {
        keyId: string,
    }
}

export class ListKeyOperationsRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): ListKeyOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListKeyOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListKeyOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeyOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeyOperationsRequest): ListKeyOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeyOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeyOperationsRequest;
    static deserializeBinaryFromReader(message: ListKeyOperationsRequest, reader: jspb.BinaryReader): ListKeyOperationsRequest;
}

export namespace ListKeyOperationsRequest {
    export type AsObject = {
        keyId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListKeyOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListKeyOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListKeyOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeyOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeyOperationsResponse): ListKeyOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeyOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeyOperationsResponse;
    static deserializeBinaryFromReader(message: ListKeyOperationsResponse, reader: jspb.BinaryReader): ListKeyOperationsResponse;
}

export namespace ListKeyOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export enum KeyFormat {
    PEM_FILE = 0,
}
