// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/device.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Device extends jspb.Message { 
    getId(): string;
    setId(value: string): Device;
    getRegistryId(): string;
    setRegistryId(value: string): Device;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Device;
    getName(): string;
    setName(value: string): Device;
    getDescription(): string;
    setDescription(value: string): Device;

    getTopicAliasesMap(): jspb.Map<string, string>;
    clearTopicAliasesMap(): void;
    getStatus(): Device.Status;
    setStatus(value: Device.Status): Device;

    hasMonitoringData(): boolean;
    clearMonitoringData(): void;
    getMonitoringData(): DeviceMonitoringData | undefined;
    setMonitoringData(value?: DeviceMonitoringData): Device;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
    export type AsObject = {
        id: string,
        registryId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        topicAliasesMap: Array<[string, string]>,
        status: Device.Status,
        monitoringData?: DeviceMonitoringData.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    }

}

export class DeviceCertificate extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeviceCertificate;
    getFingerprint(): string;
    setFingerprint(value: string): DeviceCertificate;
    getCertificateData(): string;
    setCertificateData(value: string): DeviceCertificate;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DeviceCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceCertificate): DeviceCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceCertificate;
    static deserializeBinaryFromReader(message: DeviceCertificate, reader: jspb.BinaryReader): DeviceCertificate;
}

export namespace DeviceCertificate {
    export type AsObject = {
        deviceId: string,
        fingerprint: string,
        certificateData: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DevicePassword extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DevicePassword;
    getId(): string;
    setId(value: string): DevicePassword;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DevicePassword;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DevicePassword.AsObject;
    static toObject(includeInstance: boolean, msg: DevicePassword): DevicePassword.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DevicePassword, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DevicePassword;
    static deserializeBinaryFromReader(message: DevicePassword, reader: jspb.BinaryReader): DevicePassword;
}

export namespace DevicePassword {
    export type AsObject = {
        deviceId: string,
        id: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DeviceMonitoringData extends jspb.Message { 
    getLastAuthIp(): string;
    setLastAuthIp(value: string): DeviceMonitoringData;

    hasLastAuthTime(): boolean;
    clearLastAuthTime(): void;
    getLastAuthTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastAuthTime(value?: google_protobuf_timestamp_pb.Timestamp): DeviceMonitoringData;

    hasLastPubActivityTime(): boolean;
    clearLastPubActivityTime(): void;
    getLastPubActivityTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastPubActivityTime(value?: google_protobuf_timestamp_pb.Timestamp): DeviceMonitoringData;

    hasLastSubActivityTime(): boolean;
    clearLastSubActivityTime(): void;
    getLastSubActivityTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastSubActivityTime(value?: google_protobuf_timestamp_pb.Timestamp): DeviceMonitoringData;

    hasLastOnlineTime(): boolean;
    clearLastOnlineTime(): void;
    getLastOnlineTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastOnlineTime(value?: google_protobuf_timestamp_pb.Timestamp): DeviceMonitoringData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceMonitoringData.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceMonitoringData): DeviceMonitoringData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceMonitoringData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceMonitoringData;
    static deserializeBinaryFromReader(message: DeviceMonitoringData, reader: jspb.BinaryReader): DeviceMonitoringData;
}

export namespace DeviceMonitoringData {
    export type AsObject = {
        lastAuthIp: string,
        lastAuthTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastPubActivityTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastSubActivityTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastOnlineTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum DeviceView {
    BASIC = 0,
    FULL = 1,
}
