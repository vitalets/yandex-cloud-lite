// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/registry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Registry extends jspb.Message { 
    getId(): string;
    setId(value: string): Registry;
    getFolderId(): string;
    setFolderId(value: string): Registry;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Registry;
    getName(): string;
    setName(value: string): Registry;
    getDescription(): string;
    setDescription(value: string): Registry;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): Registry.Status;
    setStatus(value: Registry.Status): Registry;
    getLogGroupId(): string;
    setLogGroupId(value: string): Registry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Registry.AsObject;
    static toObject(includeInstance: boolean, msg: Registry): Registry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Registry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Registry;
    static deserializeBinaryFromReader(message: Registry, reader: jspb.BinaryReader): Registry;
}

export namespace Registry {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: Registry.Status,
        logGroupId: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    }

}

export class RegistryCertificate extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): RegistryCertificate;
    getFingerprint(): string;
    setFingerprint(value: string): RegistryCertificate;
    getCertificateData(): string;
    setCertificateData(value: string): RegistryCertificate;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RegistryCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistryCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: RegistryCertificate): RegistryCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistryCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistryCertificate;
    static deserializeBinaryFromReader(message: RegistryCertificate, reader: jspb.BinaryReader): RegistryCertificate;
}

export namespace RegistryCertificate {
    export type AsObject = {
        registryId: string,
        fingerprint: string,
        certificateData: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DeviceAlias extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeviceAlias;
    getTopicPrefix(): string;
    setTopicPrefix(value: string): DeviceAlias;
    getAlias(): string;
    setAlias(value: string): DeviceAlias;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceAlias.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceAlias): DeviceAlias.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceAlias, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceAlias;
    static deserializeBinaryFromReader(message: DeviceAlias, reader: jspb.BinaryReader): DeviceAlias;
}

export namespace DeviceAlias {
    export type AsObject = {
        deviceId: string,
        topicPrefix: string,
        alias: string,
    }
}

export class RegistryPassword extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): RegistryPassword;
    getId(): string;
    setId(value: string): RegistryPassword;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RegistryPassword;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistryPassword.AsObject;
    static toObject(includeInstance: boolean, msg: RegistryPassword): RegistryPassword.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistryPassword, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistryPassword;
    static deserializeBinaryFromReader(message: RegistryPassword, reader: jspb.BinaryReader): RegistryPassword;
}

export namespace RegistryPassword {
    export type AsObject = {
        registryId: string,
        id: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
