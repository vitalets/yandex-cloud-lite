// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/registry_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_containerregistry_v1_registry_pb from "../../../../yandex/cloud/containerregistry/v1/registry_pb";
import * as yandex_cloud_containerregistry_v1_ip_permission_pb from "../../../../yandex/cloud/containerregistry/v1/ip_permission_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

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

export class ListRegistriesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListRegistriesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRegistriesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRegistriesRequest;
    getFilter(): string;
    setFilter(value: string): ListRegistriesRequest;

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
        filter: string,
    }
}

export class ListRegistriesResponse extends jspb.Message { 
    clearRegistriesList(): void;
    getRegistriesList(): Array<yandex_cloud_containerregistry_v1_registry_pb.Registry>;
    setRegistriesList(value: Array<yandex_cloud_containerregistry_v1_registry_pb.Registry>): ListRegistriesResponse;
    addRegistries(value?: yandex_cloud_containerregistry_v1_registry_pb.Registry, index?: number): yandex_cloud_containerregistry_v1_registry_pb.Registry;
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
        registriesList: Array<yandex_cloud_containerregistry_v1_registry_pb.Registry.AsObject>,
        nextPageToken: string,
    }
}

export class CreateRegistryRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateRegistryRequest;
    getName(): string;
    setName(value: string): CreateRegistryRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

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

        labelsMap: Array<[string, string]>,
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

export class SetIpPermissionRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): SetIpPermissionRequest;
    clearIpPermissionList(): void;
    getIpPermissionList(): Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission>;
    setIpPermissionList(value: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission>): SetIpPermissionRequest;
    addIpPermission(value?: yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission, index?: number): yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIpPermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetIpPermissionRequest): SetIpPermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIpPermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIpPermissionRequest;
    static deserializeBinaryFromReader(message: SetIpPermissionRequest, reader: jspb.BinaryReader): SetIpPermissionRequest;
}

export namespace SetIpPermissionRequest {
    export type AsObject = {
        registryId: string,
        ipPermissionList: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission.AsObject>,
    }
}

export class UpdateIpPermissionRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): UpdateIpPermissionRequest;
    clearIpPermissionDeltasList(): void;
    getIpPermissionDeltasList(): Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermissionDelta>;
    setIpPermissionDeltasList(value: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermissionDelta>): UpdateIpPermissionRequest;
    addIpPermissionDeltas(value?: yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermissionDelta, index?: number): yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermissionDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIpPermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIpPermissionRequest): UpdateIpPermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIpPermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIpPermissionRequest;
    static deserializeBinaryFromReader(message: UpdateIpPermissionRequest, reader: jspb.BinaryReader): UpdateIpPermissionRequest;
}

export namespace UpdateIpPermissionRequest {
    export type AsObject = {
        registryId: string,
        ipPermissionDeltasList: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermissionDelta.AsObject>,
    }
}

export class ListIpPermissionRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListIpPermissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIpPermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIpPermissionRequest): ListIpPermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIpPermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIpPermissionRequest;
    static deserializeBinaryFromReader(message: ListIpPermissionRequest, reader: jspb.BinaryReader): ListIpPermissionRequest;
}

export namespace ListIpPermissionRequest {
    export type AsObject = {
        registryId: string,
    }
}

export class ListIpPermissionsResponse extends jspb.Message { 
    clearPermissionsList(): void;
    getPermissionsList(): Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission>;
    setPermissionsList(value: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission>): ListIpPermissionsResponse;
    addPermissions(value?: yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission, index?: number): yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIpPermissionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIpPermissionsResponse): ListIpPermissionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIpPermissionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIpPermissionsResponse;
    static deserializeBinaryFromReader(message: ListIpPermissionsResponse, reader: jspb.BinaryReader): ListIpPermissionsResponse;
}

export namespace ListIpPermissionsResponse {
    export type AsObject = {
        permissionsList: Array<yandex_cloud_containerregistry_v1_ip_permission_pb.IpPermission.AsObject>,
    }
}

export class SetIpPermissionMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): SetIpPermissionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetIpPermissionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: SetIpPermissionMetadata): SetIpPermissionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetIpPermissionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetIpPermissionMetadata;
    static deserializeBinaryFromReader(message: SetIpPermissionMetadata, reader: jspb.BinaryReader): SetIpPermissionMetadata;
}

export namespace SetIpPermissionMetadata {
    export type AsObject = {
        registryId: string,
    }
}

export class UpdateIpPermissionMetadata extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): UpdateIpPermissionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateIpPermissionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateIpPermissionMetadata): UpdateIpPermissionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateIpPermissionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateIpPermissionMetadata;
    static deserializeBinaryFromReader(message: UpdateIpPermissionMetadata, reader: jspb.BinaryReader): UpdateIpPermissionMetadata;
}

export namespace UpdateIpPermissionMetadata {
    export type AsObject = {
        registryId: string,
    }
}
