// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/device_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_iot_devices_v1_device_pb from "../../../../../yandex/cloud/iot/devices/v1/device_pb";

export class GetDeviceRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): GetDeviceRequest;
    getDeviceView(): yandex_cloud_iot_devices_v1_device_pb.DeviceView;
    setDeviceView(value: yandex_cloud_iot_devices_v1_device_pb.DeviceView): GetDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
    static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
    export type AsObject = {
        deviceId: string,
        deviceView: yandex_cloud_iot_devices_v1_device_pb.DeviceView,
    }
}

export class GetByNameDeviceRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): GetByNameDeviceRequest;
    getDeviceName(): string;
    setDeviceName(value: string): GetByNameDeviceRequest;
    getDeviceView(): yandex_cloud_iot_devices_v1_device_pb.DeviceView;
    setDeviceView(value: yandex_cloud_iot_devices_v1_device_pb.DeviceView): GetByNameDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByNameDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByNameDeviceRequest): GetByNameDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByNameDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByNameDeviceRequest;
    static deserializeBinaryFromReader(message: GetByNameDeviceRequest, reader: jspb.BinaryReader): GetByNameDeviceRequest;
}

export namespace GetByNameDeviceRequest {
    export type AsObject = {
        registryId: string,
        deviceName: string,
        deviceView: yandex_cloud_iot_devices_v1_device_pb.DeviceView,
    }
}

export class ListDevicesRequest extends jspb.Message { 

    hasRegistryId(): boolean;
    clearRegistryId(): void;
    getRegistryId(): string;
    setRegistryId(value: string): ListDevicesRequest;

    hasFolderId(): boolean;
    clearFolderId(): void;
    getFolderId(): string;
    setFolderId(value: string): ListDevicesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDevicesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDevicesRequest;
    getDeviceView(): yandex_cloud_iot_devices_v1_device_pb.DeviceView;
    setDeviceView(value: yandex_cloud_iot_devices_v1_device_pb.DeviceView): ListDevicesRequest;

    getIdCase(): ListDevicesRequest.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
    static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
    export type AsObject = {
        registryId: string,
        folderId: string,
        pageSize: number,
        pageToken: string,
        deviceView: yandex_cloud_iot_devices_v1_device_pb.DeviceView,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        REGISTRY_ID = 1,
        FOLDER_ID = 2,
    }

}

export class ListDevicesResponse extends jspb.Message { 
    clearDevicesList(): void;
    getDevicesList(): Array<yandex_cloud_iot_devices_v1_device_pb.Device>;
    setDevicesList(value: Array<yandex_cloud_iot_devices_v1_device_pb.Device>): ListDevicesResponse;
    addDevices(value?: yandex_cloud_iot_devices_v1_device_pb.Device, index?: number): yandex_cloud_iot_devices_v1_device_pb.Device;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDevicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
    static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
    export type AsObject = {
        devicesList: Array<yandex_cloud_iot_devices_v1_device_pb.Device.AsObject>,
        nextPageToken: string,
    }
}

export class CreateDeviceRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): CreateDeviceRequest;
    getName(): string;
    setName(value: string): CreateDeviceRequest;
    getDescription(): string;
    setDescription(value: string): CreateDeviceRequest;
    clearCertificatesList(): void;
    getCertificatesList(): Array<CreateDeviceRequest.Certificate>;
    setCertificatesList(value: Array<CreateDeviceRequest.Certificate>): CreateDeviceRequest;
    addCertificates(value?: CreateDeviceRequest.Certificate, index?: number): CreateDeviceRequest.Certificate;

    getTopicAliasesMap(): jspb.Map<string, string>;
    clearTopicAliasesMap(): void;
    getPassword(): string;
    setPassword(value: string): CreateDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
    static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
    export type AsObject = {
        registryId: string,
        name: string,
        description: string,
        certificatesList: Array<CreateDeviceRequest.Certificate.AsObject>,

        topicAliasesMap: Array<[string, string]>,
        password: string,
    }


    export class Certificate extends jspb.Message { 
        getCertificateData(): string;
        setCertificateData(value: string): Certificate;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Certificate.AsObject;
        static toObject(includeInstance: boolean, msg: Certificate): Certificate.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Certificate, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Certificate;
        static deserializeBinaryFromReader(message: Certificate, reader: jspb.BinaryReader): Certificate;
    }

    export namespace Certificate {
        export type AsObject = {
            certificateData: string,
        }
    }

}

export class CreateDeviceMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): CreateDeviceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDeviceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDeviceMetadata): CreateDeviceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDeviceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDeviceMetadata;
    static deserializeBinaryFromReader(message: CreateDeviceMetadata, reader: jspb.BinaryReader): CreateDeviceMetadata;
}

export namespace CreateDeviceMetadata {
    export type AsObject = {
        deviceId: string,
    }
}

export class UpdateDeviceRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): UpdateDeviceRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateDeviceRequest;
    getName(): string;
    setName(value: string): UpdateDeviceRequest;
    getDescription(): string;
    setDescription(value: string): UpdateDeviceRequest;

    getTopicAliasesMap(): jspb.Map<string, string>;
    clearTopicAliasesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
    static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
    export type AsObject = {
        deviceId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        topicAliasesMap: Array<[string, string]>,
    }
}

export class UpdateDeviceMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): UpdateDeviceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDeviceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDeviceMetadata): UpdateDeviceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDeviceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDeviceMetadata;
    static deserializeBinaryFromReader(message: UpdateDeviceMetadata, reader: jspb.BinaryReader): UpdateDeviceMetadata;
}

export namespace UpdateDeviceMetadata {
    export type AsObject = {
        deviceId: string,
    }
}

export class DeleteDeviceRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
    static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
    export type AsObject = {
        deviceId: string,
    }
}

export class DeleteDeviceMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDeviceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceMetadata): DeleteDeviceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceMetadata;
    static deserializeBinaryFromReader(message: DeleteDeviceMetadata, reader: jspb.BinaryReader): DeleteDeviceMetadata;
}

export namespace DeleteDeviceMetadata {
    export type AsObject = {
        deviceId: string,
    }
}

export class ListDeviceCertificatesRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ListDeviceCertificatesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceCertificatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceCertificatesRequest): ListDeviceCertificatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceCertificatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceCertificatesRequest;
    static deserializeBinaryFromReader(message: ListDeviceCertificatesRequest, reader: jspb.BinaryReader): ListDeviceCertificatesRequest;
}

export namespace ListDeviceCertificatesRequest {
    export type AsObject = {
        deviceId: string,
    }
}

export class ListDeviceCertificatesResponse extends jspb.Message { 
    clearCertificatesList(): void;
    getCertificatesList(): Array<yandex_cloud_iot_devices_v1_device_pb.DeviceCertificate>;
    setCertificatesList(value: Array<yandex_cloud_iot_devices_v1_device_pb.DeviceCertificate>): ListDeviceCertificatesResponse;
    addCertificates(value?: yandex_cloud_iot_devices_v1_device_pb.DeviceCertificate, index?: number): yandex_cloud_iot_devices_v1_device_pb.DeviceCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceCertificatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceCertificatesResponse): ListDeviceCertificatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceCertificatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceCertificatesResponse;
    static deserializeBinaryFromReader(message: ListDeviceCertificatesResponse, reader: jspb.BinaryReader): ListDeviceCertificatesResponse;
}

export namespace ListDeviceCertificatesResponse {
    export type AsObject = {
        certificatesList: Array<yandex_cloud_iot_devices_v1_device_pb.DeviceCertificate.AsObject>,
    }
}

export class AddDeviceCertificateRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): AddDeviceCertificateRequest;
    getCertificateData(): string;
    setCertificateData(value: string): AddDeviceCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDeviceCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddDeviceCertificateRequest): AddDeviceCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDeviceCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDeviceCertificateRequest;
    static deserializeBinaryFromReader(message: AddDeviceCertificateRequest, reader: jspb.BinaryReader): AddDeviceCertificateRequest;
}

export namespace AddDeviceCertificateRequest {
    export type AsObject = {
        deviceId: string,
        certificateData: string,
    }
}

export class AddDeviceCertificateMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): AddDeviceCertificateMetadata;
    getFingerprint(): string;
    setFingerprint(value: string): AddDeviceCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDeviceCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddDeviceCertificateMetadata): AddDeviceCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDeviceCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDeviceCertificateMetadata;
    static deserializeBinaryFromReader(message: AddDeviceCertificateMetadata, reader: jspb.BinaryReader): AddDeviceCertificateMetadata;
}

export namespace AddDeviceCertificateMetadata {
    export type AsObject = {
        deviceId: string,
        fingerprint: string,
    }
}

export class DeleteDeviceCertificateRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDeviceCertificateRequest;
    getFingerprint(): string;
    setFingerprint(value: string): DeleteDeviceCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceCertificateRequest): DeleteDeviceCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceCertificateRequest;
    static deserializeBinaryFromReader(message: DeleteDeviceCertificateRequest, reader: jspb.BinaryReader): DeleteDeviceCertificateRequest;
}

export namespace DeleteDeviceCertificateRequest {
    export type AsObject = {
        deviceId: string,
        fingerprint: string,
    }
}

export class DeleteDeviceCertificateMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDeviceCertificateMetadata;
    getFingerprint(): string;
    setFingerprint(value: string): DeleteDeviceCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceCertificateMetadata): DeleteDeviceCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceCertificateMetadata;
    static deserializeBinaryFromReader(message: DeleteDeviceCertificateMetadata, reader: jspb.BinaryReader): DeleteDeviceCertificateMetadata;
}

export namespace DeleteDeviceCertificateMetadata {
    export type AsObject = {
        deviceId: string,
        fingerprint: string,
    }
}

export class ListDevicePasswordsRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ListDevicePasswordsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicePasswordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicePasswordsRequest): ListDevicePasswordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicePasswordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicePasswordsRequest;
    static deserializeBinaryFromReader(message: ListDevicePasswordsRequest, reader: jspb.BinaryReader): ListDevicePasswordsRequest;
}

export namespace ListDevicePasswordsRequest {
    export type AsObject = {
        deviceId: string,
    }
}

export class ListDevicePasswordsResponse extends jspb.Message { 
    clearPasswordsList(): void;
    getPasswordsList(): Array<yandex_cloud_iot_devices_v1_device_pb.DevicePassword>;
    setPasswordsList(value: Array<yandex_cloud_iot_devices_v1_device_pb.DevicePassword>): ListDevicePasswordsResponse;
    addPasswords(value?: yandex_cloud_iot_devices_v1_device_pb.DevicePassword, index?: number): yandex_cloud_iot_devices_v1_device_pb.DevicePassword;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicePasswordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicePasswordsResponse): ListDevicePasswordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicePasswordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicePasswordsResponse;
    static deserializeBinaryFromReader(message: ListDevicePasswordsResponse, reader: jspb.BinaryReader): ListDevicePasswordsResponse;
}

export namespace ListDevicePasswordsResponse {
    export type AsObject = {
        passwordsList: Array<yandex_cloud_iot_devices_v1_device_pb.DevicePassword.AsObject>,
    }
}

export class AddDevicePasswordRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): AddDevicePasswordRequest;
    getPassword(): string;
    setPassword(value: string): AddDevicePasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDevicePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddDevicePasswordRequest): AddDevicePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDevicePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDevicePasswordRequest;
    static deserializeBinaryFromReader(message: AddDevicePasswordRequest, reader: jspb.BinaryReader): AddDevicePasswordRequest;
}

export namespace AddDevicePasswordRequest {
    export type AsObject = {
        deviceId: string,
        password: string,
    }
}

export class AddDevicePasswordMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): AddDevicePasswordMetadata;
    getPasswordId(): string;
    setPasswordId(value: string): AddDevicePasswordMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDevicePasswordMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddDevicePasswordMetadata): AddDevicePasswordMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDevicePasswordMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDevicePasswordMetadata;
    static deserializeBinaryFromReader(message: AddDevicePasswordMetadata, reader: jspb.BinaryReader): AddDevicePasswordMetadata;
}

export namespace AddDevicePasswordMetadata {
    export type AsObject = {
        deviceId: string,
        passwordId: string,
    }
}

export class DeleteDevicePasswordRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDevicePasswordRequest;
    getPasswordId(): string;
    setPasswordId(value: string): DeleteDevicePasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDevicePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDevicePasswordRequest): DeleteDevicePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDevicePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDevicePasswordRequest;
    static deserializeBinaryFromReader(message: DeleteDevicePasswordRequest, reader: jspb.BinaryReader): DeleteDevicePasswordRequest;
}

export namespace DeleteDevicePasswordRequest {
    export type AsObject = {
        deviceId: string,
        passwordId: string,
    }
}

export class DeleteDevicePasswordMetadata extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): DeleteDevicePasswordMetadata;
    getPasswordId(): string;
    setPasswordId(value: string): DeleteDevicePasswordMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDevicePasswordMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDevicePasswordMetadata): DeleteDevicePasswordMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDevicePasswordMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDevicePasswordMetadata;
    static deserializeBinaryFromReader(message: DeleteDevicePasswordMetadata, reader: jspb.BinaryReader): DeleteDevicePasswordMetadata;
}

export namespace DeleteDevicePasswordMetadata {
    export type AsObject = {
        deviceId: string,
        passwordId: string,
    }
}

export class ListDeviceOperationsRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): ListDeviceOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDeviceOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDeviceOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListDeviceOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceOperationsRequest): ListDeviceOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceOperationsRequest;
    static deserializeBinaryFromReader(message: ListDeviceOperationsRequest, reader: jspb.BinaryReader): ListDeviceOperationsRequest;
}

export namespace ListDeviceOperationsRequest {
    export type AsObject = {
        deviceId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListDeviceOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListDeviceOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDeviceOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceOperationsResponse): ListDeviceOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceOperationsResponse;
    static deserializeBinaryFromReader(message: ListDeviceOperationsResponse, reader: jspb.BinaryReader): ListDeviceOperationsResponse;
}

export namespace ListDeviceOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
