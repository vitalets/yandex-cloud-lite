// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/secret_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_lockbox_v1_secret_pb from "../../../../yandex/cloud/lockbox/v1/secret_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class PayloadEntryChange extends jspb.Message { 
    getKey(): string;
    setKey(value: string): PayloadEntryChange;

    hasTextValue(): boolean;
    clearTextValue(): void;
    getTextValue(): string;
    setTextValue(value: string): PayloadEntryChange;

    hasBinaryValue(): boolean;
    clearBinaryValue(): void;
    getBinaryValue(): Uint8Array | string;
    getBinaryValue_asU8(): Uint8Array;
    getBinaryValue_asB64(): string;
    setBinaryValue(value: Uint8Array | string): PayloadEntryChange;

    getValueCase(): PayloadEntryChange.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadEntryChange.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadEntryChange): PayloadEntryChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadEntryChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadEntryChange;
    static deserializeBinaryFromReader(message: PayloadEntryChange, reader: jspb.BinaryReader): PayloadEntryChange;
}

export namespace PayloadEntryChange {
    export type AsObject = {
        key: string,
        textValue: string,
        binaryValue: Uint8Array | string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        TEXT_VALUE = 2,
        BINARY_VALUE = 3,
    }

}

export class GetSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): GetSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSecretRequest): GetSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSecretRequest;
    static deserializeBinaryFromReader(message: GetSecretRequest, reader: jspb.BinaryReader): GetSecretRequest;
}

export namespace GetSecretRequest {
    export type AsObject = {
        secretId: string,
    }
}

export class ListSecretsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListSecretsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSecretsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSecretsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretsRequest): ListSecretsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretsRequest;
    static deserializeBinaryFromReader(message: ListSecretsRequest, reader: jspb.BinaryReader): ListSecretsRequest;
}

export namespace ListSecretsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSecretsResponse extends jspb.Message { 
    clearSecretsList(): void;
    getSecretsList(): Array<yandex_cloud_lockbox_v1_secret_pb.Secret>;
    setSecretsList(value: Array<yandex_cloud_lockbox_v1_secret_pb.Secret>): ListSecretsResponse;
    addSecrets(value?: yandex_cloud_lockbox_v1_secret_pb.Secret, index?: number): yandex_cloud_lockbox_v1_secret_pb.Secret;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSecretsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretsResponse): ListSecretsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretsResponse;
    static deserializeBinaryFromReader(message: ListSecretsResponse, reader: jspb.BinaryReader): ListSecretsResponse;
}

export namespace ListSecretsResponse {
    export type AsObject = {
        secretsList: Array<yandex_cloud_lockbox_v1_secret_pb.Secret.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSecretRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateSecretRequest;
    getName(): string;
    setName(value: string): CreateSecretRequest;
    getDescription(): string;
    setDescription(value: string): CreateSecretRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getKmsKeyId(): string;
    setKmsKeyId(value: string): CreateSecretRequest;
    getVersionDescription(): string;
    setVersionDescription(value: string): CreateSecretRequest;
    clearVersionPayloadEntriesList(): void;
    getVersionPayloadEntriesList(): Array<PayloadEntryChange>;
    setVersionPayloadEntriesList(value: Array<PayloadEntryChange>): CreateSecretRequest;
    addVersionPayloadEntries(value?: PayloadEntryChange, index?: number): PayloadEntryChange;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecretRequest): CreateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecretRequest;
    static deserializeBinaryFromReader(message: CreateSecretRequest, reader: jspb.BinaryReader): CreateSecretRequest;
}

export namespace CreateSecretRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        kmsKeyId: string,
        versionDescription: string,
        versionPayloadEntriesList: Array<PayloadEntryChange.AsObject>,
        deletionProtection: boolean,
    }
}

export class CreateSecretMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): CreateSecretMetadata;
    getVersionId(): string;
    setVersionId(value: string): CreateSecretMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecretMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecretMetadata): CreateSecretMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecretMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecretMetadata;
    static deserializeBinaryFromReader(message: CreateSecretMetadata, reader: jspb.BinaryReader): CreateSecretMetadata;
}

export namespace CreateSecretMetadata {
    export type AsObject = {
        secretId: string,
        versionId: string,
    }
}

export class UpdateSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): UpdateSecretRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSecretRequest;
    getName(): string;
    setName(value: string): UpdateSecretRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSecretRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecretRequest): UpdateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecretRequest;
    static deserializeBinaryFromReader(message: UpdateSecretRequest, reader: jspb.BinaryReader): UpdateSecretRequest;
}

export namespace UpdateSecretRequest {
    export type AsObject = {
        secretId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        deletionProtection: boolean,
    }
}

export class UpdateSecretMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): UpdateSecretMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecretMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecretMetadata): UpdateSecretMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecretMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecretMetadata;
    static deserializeBinaryFromReader(message: UpdateSecretMetadata, reader: jspb.BinaryReader): UpdateSecretMetadata;
}

export namespace UpdateSecretMetadata {
    export type AsObject = {
        secretId: string,
    }
}

export class DeleteSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): DeleteSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecretRequest): DeleteSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecretRequest;
    static deserializeBinaryFromReader(message: DeleteSecretRequest, reader: jspb.BinaryReader): DeleteSecretRequest;
}

export namespace DeleteSecretRequest {
    export type AsObject = {
        secretId: string,
    }
}

export class DeleteSecretMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): DeleteSecretMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecretMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecretMetadata): DeleteSecretMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecretMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecretMetadata;
    static deserializeBinaryFromReader(message: DeleteSecretMetadata, reader: jspb.BinaryReader): DeleteSecretMetadata;
}

export namespace DeleteSecretMetadata {
    export type AsObject = {
        secretId: string,
    }
}

export class ActivateSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ActivateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateSecretRequest): ActivateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateSecretRequest;
    static deserializeBinaryFromReader(message: ActivateSecretRequest, reader: jspb.BinaryReader): ActivateSecretRequest;
}

export namespace ActivateSecretRequest {
    export type AsObject = {
        secretId: string,
    }
}

export class ActivateSecretMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ActivateSecretMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateSecretMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateSecretMetadata): ActivateSecretMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateSecretMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateSecretMetadata;
    static deserializeBinaryFromReader(message: ActivateSecretMetadata, reader: jspb.BinaryReader): ActivateSecretMetadata;
}

export namespace ActivateSecretMetadata {
    export type AsObject = {
        secretId: string,
    }
}

export class DeactivateSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): DeactivateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateSecretRequest): DeactivateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateSecretRequest;
    static deserializeBinaryFromReader(message: DeactivateSecretRequest, reader: jspb.BinaryReader): DeactivateSecretRequest;
}

export namespace DeactivateSecretRequest {
    export type AsObject = {
        secretId: string,
    }
}

export class DeactivateSecretMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): DeactivateSecretMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateSecretMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateSecretMetadata): DeactivateSecretMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateSecretMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateSecretMetadata;
    static deserializeBinaryFromReader(message: DeactivateSecretMetadata, reader: jspb.BinaryReader): DeactivateSecretMetadata;
}

export namespace DeactivateSecretMetadata {
    export type AsObject = {
        secretId: string,
    }
}

export class AddVersionRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): AddVersionRequest;
    getDescription(): string;
    setDescription(value: string): AddVersionRequest;
    clearPayloadEntriesList(): void;
    getPayloadEntriesList(): Array<PayloadEntryChange>;
    setPayloadEntriesList(value: Array<PayloadEntryChange>): AddVersionRequest;
    addPayloadEntries(value?: PayloadEntryChange, index?: number): PayloadEntryChange;
    getBaseVersionId(): string;
    setBaseVersionId(value: string): AddVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddVersionRequest): AddVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddVersionRequest;
    static deserializeBinaryFromReader(message: AddVersionRequest, reader: jspb.BinaryReader): AddVersionRequest;
}

export namespace AddVersionRequest {
    export type AsObject = {
        secretId: string,
        description: string,
        payloadEntriesList: Array<PayloadEntryChange.AsObject>,
        baseVersionId: string,
    }
}

export class AddVersionMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): AddVersionMetadata;
    getVersionId(): string;
    setVersionId(value: string): AddVersionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddVersionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddVersionMetadata): AddVersionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddVersionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddVersionMetadata;
    static deserializeBinaryFromReader(message: AddVersionMetadata, reader: jspb.BinaryReader): AddVersionMetadata;
}

export namespace AddVersionMetadata {
    export type AsObject = {
        secretId: string,
        versionId: string,
    }
}

export class ListVersionsRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ListVersionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListVersionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListVersionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsRequest): ListVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsRequest;
    static deserializeBinaryFromReader(message: ListVersionsRequest, reader: jspb.BinaryReader): ListVersionsRequest;
}

export namespace ListVersionsRequest {
    export type AsObject = {
        secretId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListVersionsResponse extends jspb.Message { 
    clearVersionsList(): void;
    getVersionsList(): Array<yandex_cloud_lockbox_v1_secret_pb.Version>;
    setVersionsList(value: Array<yandex_cloud_lockbox_v1_secret_pb.Version>): ListVersionsResponse;
    addVersions(value?: yandex_cloud_lockbox_v1_secret_pb.Version, index?: number): yandex_cloud_lockbox_v1_secret_pb.Version;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListVersionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVersionsResponse): ListVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVersionsResponse;
    static deserializeBinaryFromReader(message: ListVersionsResponse, reader: jspb.BinaryReader): ListVersionsResponse;
}

export namespace ListVersionsResponse {
    export type AsObject = {
        versionsList: Array<yandex_cloud_lockbox_v1_secret_pb.Version.AsObject>,
        nextPageToken: string,
    }
}

export class ScheduleVersionDestructionRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ScheduleVersionDestructionRequest;
    getVersionId(): string;
    setVersionId(value: string): ScheduleVersionDestructionRequest;

    hasPendingPeriod(): boolean;
    clearPendingPeriod(): void;
    getPendingPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setPendingPeriod(value?: google_protobuf_duration_pb.Duration): ScheduleVersionDestructionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleVersionDestructionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleVersionDestructionRequest): ScheduleVersionDestructionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleVersionDestructionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleVersionDestructionRequest;
    static deserializeBinaryFromReader(message: ScheduleVersionDestructionRequest, reader: jspb.BinaryReader): ScheduleVersionDestructionRequest;
}

export namespace ScheduleVersionDestructionRequest {
    export type AsObject = {
        secretId: string,
        versionId: string,
        pendingPeriod?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ScheduleVersionDestructionMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ScheduleVersionDestructionMetadata;
    getVersionId(): string;
    setVersionId(value: string): ScheduleVersionDestructionMetadata;

    hasDestroyAt(): boolean;
    clearDestroyAt(): void;
    getDestroyAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDestroyAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduleVersionDestructionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScheduleVersionDestructionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ScheduleVersionDestructionMetadata): ScheduleVersionDestructionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScheduleVersionDestructionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScheduleVersionDestructionMetadata;
    static deserializeBinaryFromReader(message: ScheduleVersionDestructionMetadata, reader: jspb.BinaryReader): ScheduleVersionDestructionMetadata;
}

export namespace ScheduleVersionDestructionMetadata {
    export type AsObject = {
        secretId: string,
        versionId: string,
        destroyAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CancelVersionDestructionRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): CancelVersionDestructionRequest;
    getVersionId(): string;
    setVersionId(value: string): CancelVersionDestructionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelVersionDestructionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelVersionDestructionRequest): CancelVersionDestructionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelVersionDestructionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelVersionDestructionRequest;
    static deserializeBinaryFromReader(message: CancelVersionDestructionRequest, reader: jspb.BinaryReader): CancelVersionDestructionRequest;
}

export namespace CancelVersionDestructionRequest {
    export type AsObject = {
        secretId: string,
        versionId: string,
    }
}

export class CancelVersionDestructionMetadata extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): CancelVersionDestructionMetadata;
    getVersionId(): string;
    setVersionId(value: string): CancelVersionDestructionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelVersionDestructionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CancelVersionDestructionMetadata): CancelVersionDestructionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelVersionDestructionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelVersionDestructionMetadata;
    static deserializeBinaryFromReader(message: CancelVersionDestructionMetadata, reader: jspb.BinaryReader): CancelVersionDestructionMetadata;
}

export namespace CancelVersionDestructionMetadata {
    export type AsObject = {
        secretId: string,
        versionId: string,
    }
}

export class ListSecretOperationsRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): ListSecretOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSecretOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSecretOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretOperationsRequest): ListSecretOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretOperationsRequest;
    static deserializeBinaryFromReader(message: ListSecretOperationsRequest, reader: jspb.BinaryReader): ListSecretOperationsRequest;
}

export namespace ListSecretOperationsRequest {
    export type AsObject = {
        secretId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSecretOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListSecretOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSecretOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretOperationsResponse): ListSecretOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretOperationsResponse;
    static deserializeBinaryFromReader(message: ListSecretOperationsResponse, reader: jspb.BinaryReader): ListSecretOperationsResponse;
}

export namespace ListSecretOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
