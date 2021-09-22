// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/secret.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Secret extends jspb.Message { 
    getId(): string;
    setId(value: string): Secret;
    getFolderId(): string;
    setFolderId(value: string): Secret;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Secret;
    getName(): string;
    setName(value: string): Secret;
    getDescription(): string;
    setDescription(value: string): Secret;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getKmsKeyId(): string;
    setKmsKeyId(value: string): Secret;
    getStatus(): Secret.Status;
    setStatus(value: Secret.Status): Secret;

    hasCurrentVersion(): boolean;
    clearCurrentVersion(): void;
    getCurrentVersion(): Version | undefined;
    setCurrentVersion(value?: Version): Secret;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): Secret;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Secret.AsObject;
    static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Secret;
    static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        kmsKeyId: string,
        status: Secret.Status,
        currentVersion?: Version.AsObject,
        deletionProtection: boolean,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    INACTIVE = 3,
    }

}

export class Version extends jspb.Message { 
    getId(): string;
    setId(value: string): Version;
    getSecretId(): string;
    setSecretId(value: string): Version;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Version;

    hasDestroyAt(): boolean;
    clearDestroyAt(): void;
    getDestroyAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDestroyAt(value?: google_protobuf_timestamp_pb.Timestamp): Version;
    getDescription(): string;
    setDescription(value: string): Version;
    getStatus(): Version.Status;
    setStatus(value: Version.Status): Version;
    clearPayloadEntryKeysList(): void;
    getPayloadEntryKeysList(): Array<string>;
    setPayloadEntryKeysList(value: Array<string>): Version;
    addPayloadEntryKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        id: string,
        secretId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        destroyAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
        status: Version.Status,
        payloadEntryKeysList: Array<string>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    SCHEDULED_FOR_DESTRUCTION = 2,
    DESTROYED = 3,
    }

}
