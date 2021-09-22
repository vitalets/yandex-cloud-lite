// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_elasticsearch_v1_auth_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/auth_pb";

export class ListAuthProvidersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListAuthProvidersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAuthProvidersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAuthProvidersRequest): ListAuthProvidersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAuthProvidersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAuthProvidersRequest;
    static deserializeBinaryFromReader(message: ListAuthProvidersRequest, reader: jspb.BinaryReader): ListAuthProvidersRequest;
}

export namespace ListAuthProvidersRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class ListAuthProvidersResponse extends jspb.Message { 
    clearProvidersList(): void;
    getProvidersList(): Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
    setProvidersList(value: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>): ListAuthProvidersResponse;
    addProviders(value?: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider, index?: number): yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAuthProvidersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAuthProvidersResponse): ListAuthProvidersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAuthProvidersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAuthProvidersResponse;
    static deserializeBinaryFromReader(message: ListAuthProvidersResponse, reader: jspb.BinaryReader): ListAuthProvidersResponse;
}

export namespace ListAuthProvidersResponse {
    export type AsObject = {
        providersList: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider.AsObject>,
    }
}

export class GetAuthProviderRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetAuthProviderRequest;
    getName(): string;
    setName(value: string): GetAuthProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAuthProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAuthProviderRequest): GetAuthProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAuthProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAuthProviderRequest;
    static deserializeBinaryFromReader(message: GetAuthProviderRequest, reader: jspb.BinaryReader): GetAuthProviderRequest;
}

export namespace GetAuthProviderRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
    }
}

export class AddAuthProvidersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddAuthProvidersRequest;
    clearProvidersList(): void;
    getProvidersList(): Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
    setProvidersList(value: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>): AddAuthProvidersRequest;
    addProviders(value?: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider, index?: number): yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAuthProvidersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddAuthProvidersRequest): AddAuthProvidersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAuthProvidersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAuthProvidersRequest;
    static deserializeBinaryFromReader(message: AddAuthProvidersRequest, reader: jspb.BinaryReader): AddAuthProvidersRequest;
}

export namespace AddAuthProvidersRequest {
    export type AsObject = {
        clusterId: string,
        providersList: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider.AsObject>,
    }
}

export class UpdateAuthProvidersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateAuthProvidersRequest;
    clearProvidersList(): void;
    getProvidersList(): Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>;
    setProvidersList(value: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider>): UpdateAuthProvidersRequest;
    addProviders(value?: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider, index?: number): yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthProvidersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAuthProvidersRequest): UpdateAuthProvidersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAuthProvidersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthProvidersRequest;
    static deserializeBinaryFromReader(message: UpdateAuthProvidersRequest, reader: jspb.BinaryReader): UpdateAuthProvidersRequest;
}

export namespace UpdateAuthProvidersRequest {
    export type AsObject = {
        clusterId: string,
        providersList: Array<yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider.AsObject>,
    }
}

export class DeleteAuthProvidersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteAuthProvidersRequest;
    clearProviderNamesList(): void;
    getProviderNamesList(): Array<string>;
    setProviderNamesList(value: Array<string>): DeleteAuthProvidersRequest;
    addProviderNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAuthProvidersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAuthProvidersRequest): DeleteAuthProvidersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAuthProvidersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAuthProvidersRequest;
    static deserializeBinaryFromReader(message: DeleteAuthProvidersRequest, reader: jspb.BinaryReader): DeleteAuthProvidersRequest;
}

export namespace DeleteAuthProvidersRequest {
    export type AsObject = {
        clusterId: string,
        providerNamesList: Array<string>,
    }
}

export class UpdateAuthProviderRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateAuthProviderRequest;
    getName(): string;
    setName(value: string): UpdateAuthProviderRequest;

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider | undefined;
    setProvider(value?: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider): UpdateAuthProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAuthProviderRequest): UpdateAuthProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAuthProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthProviderRequest;
    static deserializeBinaryFromReader(message: UpdateAuthProviderRequest, reader: jspb.BinaryReader): UpdateAuthProviderRequest;
}

export namespace UpdateAuthProviderRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
        provider?: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider.AsObject,
    }
}

export class DeleteAuthProviderRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteAuthProviderRequest;
    getName(): string;
    setName(value: string): DeleteAuthProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAuthProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAuthProviderRequest): DeleteAuthProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAuthProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAuthProviderRequest;
    static deserializeBinaryFromReader(message: DeleteAuthProviderRequest, reader: jspb.BinaryReader): DeleteAuthProviderRequest;
}

export namespace DeleteAuthProviderRequest {
    export type AsObject = {
        clusterId: string,
        name: string,
    }
}

export class AddAuthProvidersMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): AddAuthProvidersMetadata;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): AddAuthProvidersMetadata;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddAuthProvidersMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddAuthProvidersMetadata): AddAuthProvidersMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddAuthProvidersMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddAuthProvidersMetadata;
    static deserializeBinaryFromReader(message: AddAuthProvidersMetadata, reader: jspb.BinaryReader): AddAuthProvidersMetadata;
}

export namespace AddAuthProvidersMetadata {
    export type AsObject = {
        clusterId: string,
        namesList: Array<string>,
    }
}

export class UpdateAuthProvidersMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateAuthProvidersMetadata;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): UpdateAuthProvidersMetadata;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAuthProvidersMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAuthProvidersMetadata): UpdateAuthProvidersMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAuthProvidersMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAuthProvidersMetadata;
    static deserializeBinaryFromReader(message: UpdateAuthProvidersMetadata, reader: jspb.BinaryReader): UpdateAuthProvidersMetadata;
}

export namespace UpdateAuthProvidersMetadata {
    export type AsObject = {
        clusterId: string,
        namesList: Array<string>,
    }
}

export class DeleteAuthProvidersMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteAuthProvidersMetadata;
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): DeleteAuthProvidersMetadata;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAuthProvidersMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAuthProvidersMetadata): DeleteAuthProvidersMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAuthProvidersMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAuthProvidersMetadata;
    static deserializeBinaryFromReader(message: DeleteAuthProvidersMetadata, reader: jspb.BinaryReader): DeleteAuthProvidersMetadata;
}

export namespace DeleteAuthProvidersMetadata {
    export type AsObject = {
        clusterId: string,
        namesList: Array<string>,
    }
}
