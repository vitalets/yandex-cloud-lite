// package: yandex.cloud.kms.v1
// file: yandex/cloud/kms/v1/symmetric_key.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class SymmetricKey extends jspb.Message { 
    getId(): string;
    setId(value: string): SymmetricKey;
    getFolderId(): string;
    setFolderId(value: string): SymmetricKey;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SymmetricKey;
    getName(): string;
    setName(value: string): SymmetricKey;
    getDescription(): string;
    setDescription(value: string): SymmetricKey;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): SymmetricKey.Status;
    setStatus(value: SymmetricKey.Status): SymmetricKey;

    hasPrimaryVersion(): boolean;
    clearPrimaryVersion(): void;
    getPrimaryVersion(): SymmetricKeyVersion | undefined;
    setPrimaryVersion(value?: SymmetricKeyVersion): SymmetricKey;
    getDefaultAlgorithm(): SymmetricAlgorithm;
    setDefaultAlgorithm(value: SymmetricAlgorithm): SymmetricKey;

    hasRotatedAt(): boolean;
    clearRotatedAt(): void;
    getRotatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRotatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SymmetricKey;

    hasRotationPeriod(): boolean;
    clearRotationPeriod(): void;
    getRotationPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRotationPeriod(value?: google_protobuf_duration_pb.Duration): SymmetricKey;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): SymmetricKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricKey.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricKey): SymmetricKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricKey;
    static deserializeBinaryFromReader(message: SymmetricKey, reader: jspb.BinaryReader): SymmetricKey;
}

export namespace SymmetricKey {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: SymmetricKey.Status,
        primaryVersion?: SymmetricKeyVersion.AsObject,
        defaultAlgorithm: SymmetricAlgorithm,
        rotatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        rotationPeriod?: google_protobuf_duration_pb.Duration.AsObject,
        deletionProtection: boolean,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    INACTIVE = 3,
    }

}

export class SymmetricKeyVersion extends jspb.Message { 
    getId(): string;
    setId(value: string): SymmetricKeyVersion;
    getKeyId(): string;
    setKeyId(value: string): SymmetricKeyVersion;
    getStatus(): SymmetricKeyVersion.Status;
    setStatus(value: SymmetricKeyVersion.Status): SymmetricKeyVersion;
    getAlgorithm(): SymmetricAlgorithm;
    setAlgorithm(value: SymmetricAlgorithm): SymmetricKeyVersion;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SymmetricKeyVersion;
    getPrimary(): boolean;
    setPrimary(value: boolean): SymmetricKeyVersion;

    hasDestroyAt(): boolean;
    clearDestroyAt(): void;
    getDestroyAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDestroyAt(value?: google_protobuf_timestamp_pb.Timestamp): SymmetricKeyVersion;
    getHostedByHsm(): boolean;
    setHostedByHsm(value: boolean): SymmetricKeyVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricKeyVersion.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricKeyVersion): SymmetricKeyVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricKeyVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricKeyVersion;
    static deserializeBinaryFromReader(message: SymmetricKeyVersion, reader: jspb.BinaryReader): SymmetricKeyVersion;
}

export namespace SymmetricKeyVersion {
    export type AsObject = {
        id: string,
        keyId: string,
        status: SymmetricKeyVersion.Status,
        algorithm: SymmetricAlgorithm,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        primary: boolean,
        destroyAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        hostedByHsm: boolean,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    SCHEDULED_FOR_DESTRUCTION = 2,
    DESTROYED = 3,
    }

}

export enum SymmetricAlgorithm {
    SYMMETRIC_ALGORITHM_UNSPECIFIED = 0,
    AES_128 = 1,
    AES_192 = 2,
    AES_256 = 3,
    AES_256_HSM = 4,
}
