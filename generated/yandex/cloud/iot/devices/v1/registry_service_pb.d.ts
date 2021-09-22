// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/registry_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_iot_devices_v1_registry_pb from "../../../../../yandex/cloud/iot/devices/v1/registry_pb";

export class GetRegistryRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): GetRegistryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRegistryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRegistryRequest): GetRegistryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRegistryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRegistryRequest;
    static deserializeBinaryFromReader(message: GetRegistryRequest, reader: jspb.BinaryReader): GetRegistryRequest;
}

export namespace GetRegistryRequest {
    export type AsObject = {
        registryId: string,
    }
}

export class GetByNameRegistryRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetByNameRegistryRequest;
    getRegistryName(): string;
    setRegistryName(value: string): GetByNameRegistryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByNameRegistryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByNameRegistryRequest): GetByNameRegistryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByNameRegistryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByNameRegistryRequest;
    static deserializeBinaryFromReader(message: GetByNameRegistryRequest, reader: jspb.BinaryReader): GetByNameRegistryRequest;
}

export namespace GetByNameRegistryRequest {
    export type AsObject = {
        folderId: string,
        registryName: string,
    }
}

export class ListRegistriesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListRegistriesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRegistriesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRegistriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistriesRequest): ListRegistriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistriesRequest;
    static deserializeBinaryFromReader(message: ListRegistriesRequest, reader: jspb.BinaryReader): ListRegistriesRequest;
}

export namespace ListRegistriesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListRegistriesResponse extends jspb.Message { 
    clearRegistriesList(): void;
    getRegistriesList(): Array<yandex_cloud_iot_devices_v1_registry_pb.Registry>;
    setRegistriesList(value: Array<yandex_cloud_iot_devices_v1_registry_pb.Registry>): ListRegistriesResponse;
    addRegistries(value?: yandex_cloud_iot_devices_v1_registry_pb.Registry, index?: number): yandex_cloud_iot_devices_v1_registry_pb.Registry;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRegistriesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistriesResponse): ListRegistriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistriesResponse;
    static deserializeBinaryFromReader(message: ListRegistriesResponse, reader: jspb.BinaryReader): ListRegistriesResponse;
}

export namespace ListRegistriesResponse {
    export type AsObject = {
        registriesList: Array<yandex_cloud_iot_devices_v1_registry_pb.Registry.AsObject>,
        nextPageToken: string,
    }
}

export class CreateRegistryRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateRegistryRequest;
    getName(): string;
    setName(value: string): CreateRegistryRequest;
    getDescription(): string;
    setDescription(value: string): CreateRegistryRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearCertificatesList(): void;
    getCertificatesList(): Array<CreateRegistryRequest.Certificate>;
    setCertificatesList(value: Array<CreateRegistryRequest.Certificate>): CreateRegistryRequest;
    addCertificates(value?: CreateRegistryRequest.Certificate, index?: number): CreateRegistryRequest.Certificate;
    getPassword(): string;
    setPassword(value: string): CreateRegistryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRegistryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRegistryRequest): CreateRegistryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRegistryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRegistryRequest;
    static deserializeBinaryFromReader(message: CreateRegistryRequest, reader: jspb.BinaryReader): CreateRegistryRequest;
}

export namespace CreateRegistryRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        certificatesList: Array<CreateRegistryRequest.Certificate.AsObject>,
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

export class CreateRegistryMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): CreateRegistryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRegistryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRegistryMetadata): CreateRegistryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRegistryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRegistryMetadata;
    static deserializeBinaryFromReader(message: CreateRegistryMetadata, reader: jspb.BinaryReader): CreateRegistryMetadata;
}

export namespace CreateRegistryMetadata {
    export type AsObject = {
        registryId: string,
    }
}

export class UpdateRegistryRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): UpdateRegistryRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateRegistryRequest;
    getName(): string;
    setName(value: string): UpdateRegistryRequest;
    getDescription(): string;
    setDescription(value: string): UpdateRegistryRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRegistryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRegistryRequest): UpdateRegistryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRegistryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRegistryRequest;
    static deserializeBinaryFromReader(message: UpdateRegistryRequest, reader: jspb.BinaryReader): UpdateRegistryRequest;
}

export namespace UpdateRegistryRequest {
    export type AsObject = {
        registryId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateRegistryMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): UpdateRegistryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRegistryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRegistryMetadata): UpdateRegistryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRegistryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRegistryMetadata;
    static deserializeBinaryFromReader(message: UpdateRegistryMetadata, reader: jspb.BinaryReader): UpdateRegistryMetadata;
}

export namespace UpdateRegistryMetadata {
    export type AsObject = {
        registryId: string,
    }
}

export class DeleteRegistryRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryRequest): DeleteRegistryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryRequest;
    static deserializeBinaryFromReader(message: DeleteRegistryRequest, reader: jspb.BinaryReader): DeleteRegistryRequest;
}

export namespace DeleteRegistryRequest {
    export type AsObject = {
        registryId: string,
    }
}

export class DeleteRegistryMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryMetadata): DeleteRegistryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryMetadata;
    static deserializeBinaryFromReader(message: DeleteRegistryMetadata, reader: jspb.BinaryReader): DeleteRegistryMetadata;
}

export namespace DeleteRegistryMetadata {
    export type AsObject = {
        registryId: string,
    }
}

export class ListRegistryCertificatesRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListRegistryCertificatesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryCertificatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryCertificatesRequest): ListRegistryCertificatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryCertificatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryCertificatesRequest;
    static deserializeBinaryFromReader(message: ListRegistryCertificatesRequest, reader: jspb.BinaryReader): ListRegistryCertificatesRequest;
}

export namespace ListRegistryCertificatesRequest {
    export type AsObject = {
        registryId: string,
    }
}

export class ListRegistryCertificatesResponse extends jspb.Message { 
    clearCertificatesList(): void;
    getCertificatesList(): Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryCertificate>;
    setCertificatesList(value: Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryCertificate>): ListRegistryCertificatesResponse;
    addCertificates(value?: yandex_cloud_iot_devices_v1_registry_pb.RegistryCertificate, index?: number): yandex_cloud_iot_devices_v1_registry_pb.RegistryCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryCertificatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryCertificatesResponse): ListRegistryCertificatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryCertificatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryCertificatesResponse;
    static deserializeBinaryFromReader(message: ListRegistryCertificatesResponse, reader: jspb.BinaryReader): ListRegistryCertificatesResponse;
}

export namespace ListRegistryCertificatesResponse {
    export type AsObject = {
        certificatesList: Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryCertificate.AsObject>,
    }
}

export class AddRegistryCertificateRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): AddRegistryCertificateRequest;
    getCertificateData(): string;
    setCertificateData(value: string): AddRegistryCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRegistryCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddRegistryCertificateRequest): AddRegistryCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRegistryCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRegistryCertificateRequest;
    static deserializeBinaryFromReader(message: AddRegistryCertificateRequest, reader: jspb.BinaryReader): AddRegistryCertificateRequest;
}

export namespace AddRegistryCertificateRequest {
    export type AsObject = {
        registryId: string,
        certificateData: string,
    }
}

export class AddRegistryCertificateMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): AddRegistryCertificateMetadata;
    getFingerprint(): string;
    setFingerprint(value: string): AddRegistryCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRegistryCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddRegistryCertificateMetadata): AddRegistryCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRegistryCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRegistryCertificateMetadata;
    static deserializeBinaryFromReader(message: AddRegistryCertificateMetadata, reader: jspb.BinaryReader): AddRegistryCertificateMetadata;
}

export namespace AddRegistryCertificateMetadata {
    export type AsObject = {
        registryId: string,
        fingerprint: string,
    }
}

export class DeleteRegistryCertificateRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryCertificateRequest;
    getFingerprint(): string;
    setFingerprint(value: string): DeleteRegistryCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryCertificateRequest): DeleteRegistryCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryCertificateRequest;
    static deserializeBinaryFromReader(message: DeleteRegistryCertificateRequest, reader: jspb.BinaryReader): DeleteRegistryCertificateRequest;
}

export namespace DeleteRegistryCertificateRequest {
    export type AsObject = {
        registryId: string,
        fingerprint: string,
    }
}

export class DeleteRegistryCertificateMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryCertificateMetadata;
    getFingerprint(): string;
    setFingerprint(value: string): DeleteRegistryCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryCertificateMetadata): DeleteRegistryCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryCertificateMetadata;
    static deserializeBinaryFromReader(message: DeleteRegistryCertificateMetadata, reader: jspb.BinaryReader): DeleteRegistryCertificateMetadata;
}

export namespace DeleteRegistryCertificateMetadata {
    export type AsObject = {
        registryId: string,
        fingerprint: string,
    }
}

export class ListRegistryPasswordsRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListRegistryPasswordsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryPasswordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryPasswordsRequest): ListRegistryPasswordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryPasswordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryPasswordsRequest;
    static deserializeBinaryFromReader(message: ListRegistryPasswordsRequest, reader: jspb.BinaryReader): ListRegistryPasswordsRequest;
}

export namespace ListRegistryPasswordsRequest {
    export type AsObject = {
        registryId: string,
    }
}

export class ListRegistryPasswordsResponse extends jspb.Message { 
    clearPasswordsList(): void;
    getPasswordsList(): Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryPassword>;
    setPasswordsList(value: Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryPassword>): ListRegistryPasswordsResponse;
    addPasswords(value?: yandex_cloud_iot_devices_v1_registry_pb.RegistryPassword, index?: number): yandex_cloud_iot_devices_v1_registry_pb.RegistryPassword;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryPasswordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryPasswordsResponse): ListRegistryPasswordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryPasswordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryPasswordsResponse;
    static deserializeBinaryFromReader(message: ListRegistryPasswordsResponse, reader: jspb.BinaryReader): ListRegistryPasswordsResponse;
}

export namespace ListRegistryPasswordsResponse {
    export type AsObject = {
        passwordsList: Array<yandex_cloud_iot_devices_v1_registry_pb.RegistryPassword.AsObject>,
    }
}

export class AddRegistryPasswordRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): AddRegistryPasswordRequest;
    getPassword(): string;
    setPassword(value: string): AddRegistryPasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRegistryPasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddRegistryPasswordRequest): AddRegistryPasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRegistryPasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRegistryPasswordRequest;
    static deserializeBinaryFromReader(message: AddRegistryPasswordRequest, reader: jspb.BinaryReader): AddRegistryPasswordRequest;
}

export namespace AddRegistryPasswordRequest {
    export type AsObject = {
        registryId: string,
        password: string,
    }
}

export class AddRegistryPasswordMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): AddRegistryPasswordMetadata;
    getPasswordId(): string;
    setPasswordId(value: string): AddRegistryPasswordMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRegistryPasswordMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddRegistryPasswordMetadata): AddRegistryPasswordMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRegistryPasswordMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRegistryPasswordMetadata;
    static deserializeBinaryFromReader(message: AddRegistryPasswordMetadata, reader: jspb.BinaryReader): AddRegistryPasswordMetadata;
}

export namespace AddRegistryPasswordMetadata {
    export type AsObject = {
        registryId: string,
        passwordId: string,
    }
}

export class DeleteRegistryPasswordRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryPasswordRequest;
    getPasswordId(): string;
    setPasswordId(value: string): DeleteRegistryPasswordRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryPasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryPasswordRequest): DeleteRegistryPasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryPasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryPasswordRequest;
    static deserializeBinaryFromReader(message: DeleteRegistryPasswordRequest, reader: jspb.BinaryReader): DeleteRegistryPasswordRequest;
}

export namespace DeleteRegistryPasswordRequest {
    export type AsObject = {
        registryId: string,
        passwordId: string,
    }
}

export class DeleteRegistryPasswordMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): DeleteRegistryPasswordMetadata;
    getPasswordId(): string;
    setPasswordId(value: string): DeleteRegistryPasswordMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRegistryPasswordMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRegistryPasswordMetadata): DeleteRegistryPasswordMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRegistryPasswordMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRegistryPasswordMetadata;
    static deserializeBinaryFromReader(message: DeleteRegistryPasswordMetadata, reader: jspb.BinaryReader): DeleteRegistryPasswordMetadata;
}

export namespace DeleteRegistryPasswordMetadata {
    export type AsObject = {
        registryId: string,
        passwordId: string,
    }
}

export class ListDeviceTopicAliasesRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListDeviceTopicAliasesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDeviceTopicAliasesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDeviceTopicAliasesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceTopicAliasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceTopicAliasesRequest): ListDeviceTopicAliasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceTopicAliasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceTopicAliasesRequest;
    static deserializeBinaryFromReader(message: ListDeviceTopicAliasesRequest, reader: jspb.BinaryReader): ListDeviceTopicAliasesRequest;
}

export namespace ListDeviceTopicAliasesRequest {
    export type AsObject = {
        registryId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListDeviceTopicAliasesResponse extends jspb.Message { 
    clearAliasesList(): void;
    getAliasesList(): Array<yandex_cloud_iot_devices_v1_registry_pb.DeviceAlias>;
    setAliasesList(value: Array<yandex_cloud_iot_devices_v1_registry_pb.DeviceAlias>): ListDeviceTopicAliasesResponse;
    addAliases(value?: yandex_cloud_iot_devices_v1_registry_pb.DeviceAlias, index?: number): yandex_cloud_iot_devices_v1_registry_pb.DeviceAlias;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDeviceTopicAliasesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDeviceTopicAliasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDeviceTopicAliasesResponse): ListDeviceTopicAliasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDeviceTopicAliasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDeviceTopicAliasesResponse;
    static deserializeBinaryFromReader(message: ListDeviceTopicAliasesResponse, reader: jspb.BinaryReader): ListDeviceTopicAliasesResponse;
}

export namespace ListDeviceTopicAliasesResponse {
    export type AsObject = {
        aliasesList: Array<yandex_cloud_iot_devices_v1_registry_pb.DeviceAlias.AsObject>,
        nextPageToken: string,
    }
}

export class ListRegistryOperationsRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListRegistryOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRegistryOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRegistryOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListRegistryOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryOperationsRequest): ListRegistryOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryOperationsRequest;
    static deserializeBinaryFromReader(message: ListRegistryOperationsRequest, reader: jspb.BinaryReader): ListRegistryOperationsRequest;
}

export namespace ListRegistryOperationsRequest {
    export type AsObject = {
        registryId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListRegistryOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListRegistryOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRegistryOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRegistryOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRegistryOperationsResponse): ListRegistryOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRegistryOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRegistryOperationsResponse;
    static deserializeBinaryFromReader(message: ListRegistryOperationsResponse, reader: jspb.BinaryReader): ListRegistryOperationsResponse;
}

export namespace ListRegistryOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
