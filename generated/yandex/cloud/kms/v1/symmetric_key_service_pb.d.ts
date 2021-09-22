// package: yandex.cloud.kms.v1
// file: yandex/cloud/kms/v1/symmetric_key_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_kms_v1_symmetric_key_pb from "../../../../yandex/cloud/kms/v1/symmetric_key_pb";

export class CreateSymmetricKeyRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateSymmetricKeyRequest;
    getName(): string;
    setName(value: string): CreateSymmetricKeyRequest;
    getDescription(): string;
    setDescription(value: string): CreateSymmetricKeyRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDefaultAlgorithm(): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm;
    setDefaultAlgorithm(value: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm): CreateSymmetricKeyRequest;

    hasRotationPeriod(): boolean;
    clearRotationPeriod(): void;
    getRotationPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRotationPeriod(value?: google_protobuf_duration_pb.Duration): CreateSymmetricKeyRequest;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateSymmetricKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSymmetricKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSymmetricKeyRequest): CreateSymmetricKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSymmetricKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSymmetricKeyRequest;
    static deserializeBinaryFromReader(message: CreateSymmetricKeyRequest, reader: jspb.BinaryReader): CreateSymmetricKeyRequest;
}

export namespace CreateSymmetricKeyRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        defaultAlgorithm: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm,
        rotationPeriod?: google_protobuf_duration_pb.Duration.AsObject,
        deletionProtection: boolean,
    }
}

export class CreateSymmetricKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): CreateSymmetricKeyMetadata;
    getPrimaryVersionId(): string;
    setPrimaryVersionId(value: string): CreateSymmetricKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSymmetricKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSymmetricKeyMetadata): CreateSymmetricKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSymmetricKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSymmetricKeyMetadata;
    static deserializeBinaryFromReader(message: CreateSymmetricKeyMetadata, reader: jspb.BinaryReader): CreateSymmetricKeyMetadata;
}

export namespace CreateSymmetricKeyMetadata {
    export type AsObject = {
        keyId: string,
        primaryVersionId: string,
    }
}

export class GetSymmetricKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): GetSymmetricKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSymmetricKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSymmetricKeyRequest): GetSymmetricKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSymmetricKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSymmetricKeyRequest;
    static deserializeBinaryFromReader(message: GetSymmetricKeyRequest, reader: jspb.BinaryReader): GetSymmetricKeyRequest;
}

export namespace GetSymmetricKeyRequest {
    export type AsObject = {
        keyId: string,
    }
}

export class ListSymmetricKeysRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListSymmetricKeysRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSymmetricKeysRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSymmetricKeysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeysRequest): ListSymmetricKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeysRequest;
    static deserializeBinaryFromReader(message: ListSymmetricKeysRequest, reader: jspb.BinaryReader): ListSymmetricKeysRequest;
}

export namespace ListSymmetricKeysRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSymmetricKeysResponse extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey>;
    setKeysList(value: Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey>): ListSymmetricKeysResponse;
    addKeys(value?: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey, index?: number): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSymmetricKeysResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeysResponse): ListSymmetricKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeysResponse;
    static deserializeBinaryFromReader(message: ListSymmetricKeysResponse, reader: jspb.BinaryReader): ListSymmetricKeysResponse;
}

export namespace ListSymmetricKeysResponse {
    export type AsObject = {
        keysList: Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey.AsObject>,
        nextPageToken: string,
    }
}

export class ListSymmetricKeyVersionsRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): ListSymmetricKeyVersionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSymmetricKeyVersionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSymmetricKeyVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeyVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeyVersionsRequest): ListSymmetricKeyVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeyVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeyVersionsRequest;
    static deserializeBinaryFromReader(message: ListSymmetricKeyVersionsRequest, reader: jspb.BinaryReader): ListSymmetricKeyVersionsRequest;
}

export namespace ListSymmetricKeyVersionsRequest {
    export type AsObject = {
        keyId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSymmetricKeyVersionsResponse extends jspb.Message { 
    clearKeyVersionsList(): void;
    getKeyVersionsList(): Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKeyVersion>;
    setKeyVersionsList(value: Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKeyVersion>): ListSymmetricKeyVersionsResponse;
    addKeyVersions(value?: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKeyVersion, index?: number): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKeyVersion;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSymmetricKeyVersionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeyVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeyVersionsResponse): ListSymmetricKeyVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeyVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeyVersionsResponse;
    static deserializeBinaryFromReader(message: ListSymmetricKeyVersionsResponse, reader: jspb.BinaryReader): ListSymmetricKeyVersionsResponse;
}

export namespace ListSymmetricKeyVersionsResponse {
    export type AsObject = {
        keyVersionsList: Array<yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKeyVersion.AsObject>,
        nextPageToken: string,
    }
}

export class UpdateSymmetricKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): UpdateSymmetricKeyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSymmetricKeyRequest;
    getName(): string;
    setName(value: string): UpdateSymmetricKeyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSymmetricKeyRequest;
    getStatus(): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey.Status;
    setStatus(value: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey.Status): UpdateSymmetricKeyRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDefaultAlgorithm(): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm;
    setDefaultAlgorithm(value: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm): UpdateSymmetricKeyRequest;

    hasRotationPeriod(): boolean;
    clearRotationPeriod(): void;
    getRotationPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRotationPeriod(value?: google_protobuf_duration_pb.Duration): UpdateSymmetricKeyRequest;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateSymmetricKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSymmetricKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSymmetricKeyRequest): UpdateSymmetricKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSymmetricKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSymmetricKeyRequest;
    static deserializeBinaryFromReader(message: UpdateSymmetricKeyRequest, reader: jspb.BinaryReader): UpdateSymmetricKeyRequest;
}

export namespace UpdateSymmetricKeyRequest {
    export type AsObject = {
        keyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        status: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey.Status,

        labelsMap: Array<[string, string]>,
        defaultAlgorithm: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm,
        rotationPeriod?: google_protobuf_duration_pb.Duration.AsObject,
        deletionProtection: boolean,
    }
}

export class UpdateSymmetricKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): UpdateSymmetricKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSymmetricKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSymmetricKeyMetadata): UpdateSymmetricKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSymmetricKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSymmetricKeyMetadata;
    static deserializeBinaryFromReader(message: UpdateSymmetricKeyMetadata, reader: jspb.BinaryReader): UpdateSymmetricKeyMetadata;
}

export namespace UpdateSymmetricKeyMetadata {
    export type AsObject = {
        keyId: string,
    }
}

export class DeleteSymmetricKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): DeleteSymmetricKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSymmetricKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSymmetricKeyRequest): DeleteSymmetricKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSymmetricKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSymmetricKeyRequest;
    static deserializeBinaryFromReader(message: DeleteSymmetricKeyRequest, reader: jspb.BinaryReader): DeleteSymmetricKeyRequest;
}

export namespace DeleteSymmetricKeyRequest {
    export type AsObject = {
        keyId: string,
    }
}

export class DeleteSymmetricKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): DeleteSymmetricKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSymmetricKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSymmetricKeyMetadata): DeleteSymmetricKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSymmetricKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSymmetricKeyMetadata;
    static deserializeBinaryFromReader(message: DeleteSymmetricKeyMetadata, reader: jspb.BinaryReader): DeleteSymmetricKeyMetadata;
}

export namespace DeleteSymmetricKeyMetadata {
    export type AsObject = {
        keyId: string,
    }
}

export class SetPrimarySymmetricKeyVersionRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SetPrimarySymmetricKeyVersionRequest;
    getVersionId(): string;
    setVersionId(value: string): SetPrimarySymmetricKeyVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPrimarySymmetricKeyVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPrimarySymmetricKeyVersionRequest): SetPrimarySymmetricKeyVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPrimarySymmetricKeyVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPrimarySymmetricKeyVersionRequest;
    static deserializeBinaryFromReader(message: SetPrimarySymmetricKeyVersionRequest, reader: jspb.BinaryReader): SetPrimarySymmetricKeyVersionRequest;
}

export namespace SetPrimarySymmetricKeyVersionRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
    }
}

export class SetPrimarySymmetricKeyVersionMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SetPrimarySymmetricKeyVersionMetadata;
    getVersionId(): string;
    setVersionId(value: string): SetPrimarySymmetricKeyVersionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPrimarySymmetricKeyVersionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: SetPrimarySymmetricKeyVersionMetadata): SetPrimarySymmetricKeyVersionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPrimarySymmetricKeyVersionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPrimarySymmetricKeyVersionMetadata;
    static deserializeBinaryFromReader(message: SetPrimarySymmetricKeyVersionMetadata, reader: jspb.BinaryReader): SetPrimarySymmetricKeyVersionMetadata;
}

export namespace SetPrimarySymmetricKeyVersionMetadata {
    export type AsObject = {
        keyId: string,
        versionId: string,
    }
}

export class RotateSymmetricKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): RotateSymmetricKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotateSymmetricKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RotateSymmetricKeyRequest): RotateSymmetricKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotateSymmetricKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotateSymmetricKeyRequest;
    static deserializeBinaryFromReader(message: RotateSymmetricKeyRequest, reader: jspb.BinaryReader): RotateSymmetricKeyRequest;
}

export namespace RotateSymmetricKeyRequest {
    export type AsObject = {
        keyId: string,
    }
}

export class RotateSymmetricKeyMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): RotateSymmetricKeyMetadata;
    getNewPrimaryVersionId(): string;
    setNewPrimaryVersionId(value: string): RotateSymmetricKeyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RotateSymmetricKeyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RotateSymmetricKeyMetadata): RotateSymmetricKeyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RotateSymmetricKeyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RotateSymmetricKeyMetadata;
    static deserializeBinaryFromReader(message: RotateSymmetricKeyMetadata, reader: jspb.BinaryReader): RotateSymmetricKeyMetadata;
}

export namespace RotateSymmetricKeyMetadata {
    export type AsObject = {
        keyId: string,
        newPrimaryVersionId: string,
    }
}

export class ScheduleSymmetricKeyVersionDestructionRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): ScheduleSymmetricKeyVersionDestructionRequest;
    getVersionId(): string;
    setVersionId(value: string): ScheduleSymmetricKeyVersionDestructionRequest;

    hasPendingPeriod(): boolean;
    clearPendingPeriod(): void;
    getPendingPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setPendingPeriod(value?: google_protobuf_duration_pb.Duration): ScheduleSymmetricKeyVersionDestructionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleSymmetricKeyVersionDestructionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleSymmetricKeyVersionDestructionRequest): ScheduleSymmetricKeyVersionDestructionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleSymmetricKeyVersionDestructionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleSymmetricKeyVersionDestructionRequest;
    static deserializeBinaryFromReader(message: ScheduleSymmetricKeyVersionDestructionRequest, reader: jspb.BinaryReader): ScheduleSymmetricKeyVersionDestructionRequest;
}

export namespace ScheduleSymmetricKeyVersionDestructionRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
        pendingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ScheduleSymmetricKeyVersionDestructionMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): ScheduleSymmetricKeyVersionDestructionMetadata;
    getVersionId(): string;
    setVersionId(value: string): ScheduleSymmetricKeyVersionDestructionMetadata;

    hasDestroyAt(): boolean;
    clearDestroyAt(): void;
    getDestroyAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDestroyAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduleSymmetricKeyVersionDestructionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleSymmetricKeyVersionDestructionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleSymmetricKeyVersionDestructionMetadata): ScheduleSymmetricKeyVersionDestructionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleSymmetricKeyVersionDestructionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleSymmetricKeyVersionDestructionMetadata;
    static deserializeBinaryFromReader(message: ScheduleSymmetricKeyVersionDestructionMetadata, reader: jspb.BinaryReader): ScheduleSymmetricKeyVersionDestructionMetadata;
}

export namespace ScheduleSymmetricKeyVersionDestructionMetadata {
    export type AsObject = {
        keyId: string,
        versionId: string,
        destroyAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CancelSymmetricKeyVersionDestructionRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): CancelSymmetricKeyVersionDestructionRequest;
    getVersionId(): string;
    setVersionId(value: string): CancelSymmetricKeyVersionDestructionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelSymmetricKeyVersionDestructionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelSymmetricKeyVersionDestructionRequest): CancelSymmetricKeyVersionDestructionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelSymmetricKeyVersionDestructionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelSymmetricKeyVersionDestructionRequest;
    static deserializeBinaryFromReader(message: CancelSymmetricKeyVersionDestructionRequest, reader: jspb.BinaryReader): CancelSymmetricKeyVersionDestructionRequest;
}

export namespace CancelSymmetricKeyVersionDestructionRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
    }
}

export class CancelSymmetricKeyVersionDestructionMetadata extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): CancelSymmetricKeyVersionDestructionMetadata;
    getVersionId(): string;
    setVersionId(value: string): CancelSymmetricKeyVersionDestructionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelSymmetricKeyVersionDestructionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CancelSymmetricKeyVersionDestructionMetadata): CancelSymmetricKeyVersionDestructionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelSymmetricKeyVersionDestructionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelSymmetricKeyVersionDestructionMetadata;
    static deserializeBinaryFromReader(message: CancelSymmetricKeyVersionDestructionMetadata, reader: jspb.BinaryReader): CancelSymmetricKeyVersionDestructionMetadata;
}

export namespace CancelSymmetricKeyVersionDestructionMetadata {
    export type AsObject = {
        keyId: string,
        versionId: string,
    }
}

export class ListSymmetricKeyOperationsRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): ListSymmetricKeyOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSymmetricKeyOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSymmetricKeyOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeyOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeyOperationsRequest): ListSymmetricKeyOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeyOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeyOperationsRequest;
    static deserializeBinaryFromReader(message: ListSymmetricKeyOperationsRequest, reader: jspb.BinaryReader): ListSymmetricKeyOperationsRequest;
}

export namespace ListSymmetricKeyOperationsRequest {
    export type AsObject = {
        keyId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSymmetricKeyOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListSymmetricKeyOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSymmetricKeyOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymmetricKeyOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymmetricKeyOperationsResponse): ListSymmetricKeyOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymmetricKeyOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymmetricKeyOperationsResponse;
    static deserializeBinaryFromReader(message: ListSymmetricKeyOperationsResponse, reader: jspb.BinaryReader): ListSymmetricKeyOperationsResponse;
}

export namespace ListSymmetricKeyOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
