// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/provider_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ActivateProviderRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ActivateProviderRequest;
    getProviderType(): string;
    setProviderType(value: string): ActivateProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateProviderRequest): ActivateProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateProviderRequest;
    static deserializeBinaryFromReader(message: ActivateProviderRequest, reader: jspb.BinaryReader): ActivateProviderRequest;
}

export namespace ActivateProviderRequest {
    export type AsObject = {
        folderId: string,
        providerType: string,
    }
}

export class ActivateProviderMetadata extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ActivateProviderMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateProviderMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateProviderMetadata): ActivateProviderMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateProviderMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateProviderMetadata;
    static deserializeBinaryFromReader(message: ActivateProviderMetadata, reader: jspb.BinaryReader): ActivateProviderMetadata;
}

export namespace ActivateProviderMetadata {
    export type AsObject = {
        folderId: string,
    }
}

export class ListActivatedProvidersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListActivatedProvidersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListActivatedProvidersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListActivatedProvidersRequest): ListActivatedProvidersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListActivatedProvidersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListActivatedProvidersRequest;
    static deserializeBinaryFromReader(message: ListActivatedProvidersRequest, reader: jspb.BinaryReader): ListActivatedProvidersRequest;
}

export namespace ListActivatedProvidersRequest {
    export type AsObject = {
        folderId: string,
    }
}

export class ListActivatedProvidersResponse extends jspb.Message { 
    clearProvidersList(): void;
    getProvidersList(): Array<string>;
    setProvidersList(value: Array<string>): ListActivatedProvidersResponse;
    addProviders(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListActivatedProvidersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListActivatedProvidersResponse): ListActivatedProvidersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListActivatedProvidersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListActivatedProvidersResponse;
    static deserializeBinaryFromReader(message: ListActivatedProvidersResponse, reader: jspb.BinaryReader): ListActivatedProvidersResponse;
}

export namespace ListActivatedProvidersResponse {
    export type AsObject = {
        providersList: Array<string>,
    }
}
