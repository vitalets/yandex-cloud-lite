// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/resource_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";
import * as yandex_cloud_cdn_v1_resource_pb from "../../../../yandex/cloud/cdn/v1/resource_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetResourceRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): GetResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetResourceRequest): GetResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResourceRequest;
    static deserializeBinaryFromReader(message: GetResourceRequest, reader: jspb.BinaryReader): GetResourceRequest;
}

export namespace GetResourceRequest {
    export type AsObject = {
        resourceId: string,
    }
}

export class ListResourcesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListResourcesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListResourcesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesRequest): ListResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesRequest;
    static deserializeBinaryFromReader(message: ListResourcesRequest, reader: jspb.BinaryReader): ListResourcesRequest;
}

export namespace ListResourcesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListResourcesResponse extends jspb.Message { 
    clearResourcesList(): void;
    getResourcesList(): Array<yandex_cloud_cdn_v1_resource_pb.Resource>;
    setResourcesList(value: Array<yandex_cloud_cdn_v1_resource_pb.Resource>): ListResourcesResponse;
    addResources(value?: yandex_cloud_cdn_v1_resource_pb.Resource, index?: number): yandex_cloud_cdn_v1_resource_pb.Resource;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListResourcesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesResponse): ListResourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesResponse;
    static deserializeBinaryFromReader(message: ListResourcesResponse, reader: jspb.BinaryReader): ListResourcesResponse;
}

export namespace ListResourcesResponse {
    export type AsObject = {
        resourcesList: Array<yandex_cloud_cdn_v1_resource_pb.Resource.AsObject>,
        nextPageToken: string,
    }
}

export class CreateResourceRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateResourceRequest;
    getCname(): string;
    setCname(value: string): CreateResourceRequest;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): CreateResourceRequest.Origin | undefined;
    setOrigin(value?: CreateResourceRequest.Origin): CreateResourceRequest;

    hasSecondaryHostnames(): boolean;
    clearSecondaryHostnames(): void;
    getSecondaryHostnames(): yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames | undefined;
    setSecondaryHostnames(value?: yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames): CreateResourceRequest;
    getOriginProtocol(): yandex_cloud_cdn_v1_resource_pb.OriginProtocol;
    setOriginProtocol(value: yandex_cloud_cdn_v1_resource_pb.OriginProtocol): CreateResourceRequest;

    hasActive(): boolean;
    clearActive(): void;
    getActive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setActive(value?: google_protobuf_wrappers_pb.BoolValue): CreateResourceRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): yandex_cloud_cdn_v1_resource_pb.ResourceOptions | undefined;
    setOptions(value?: yandex_cloud_cdn_v1_resource_pb.ResourceOptions): CreateResourceRequest;

    hasSslCertificate(): boolean;
    clearSslCertificate(): void;
    getSslCertificate(): yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate | undefined;
    setSslCertificate(value?: yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate): CreateResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResourceRequest): CreateResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResourceRequest;
    static deserializeBinaryFromReader(message: CreateResourceRequest, reader: jspb.BinaryReader): CreateResourceRequest;
}

export namespace CreateResourceRequest {
    export type AsObject = {
        folderId: string,
        cname: string,
        origin?: CreateResourceRequest.Origin.AsObject,
        secondaryHostnames?: yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames.AsObject,
        originProtocol: yandex_cloud_cdn_v1_resource_pb.OriginProtocol,
        active?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        options?: yandex_cloud_cdn_v1_resource_pb.ResourceOptions.AsObject,
        sslCertificate?: yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate.AsObject,
    }


    export class Origin extends jspb.Message { 

        hasOriginGroupId(): boolean;
        clearOriginGroupId(): void;
        getOriginGroupId(): number;
        setOriginGroupId(value: number): Origin;

        hasOriginSource(): boolean;
        clearOriginSource(): void;
        getOriginSource(): string;
        setOriginSource(value: string): Origin;

        hasOriginSourceParams(): boolean;
        clearOriginSourceParams(): void;
        getOriginSourceParams(): ResourceOriginParams | undefined;
        setOriginSourceParams(value?: ResourceOriginParams): Origin;

        getOriginVariantCase(): Origin.OriginVariantCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Origin.AsObject;
        static toObject(includeInstance: boolean, msg: Origin): Origin.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Origin, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Origin;
        static deserializeBinaryFromReader(message: Origin, reader: jspb.BinaryReader): Origin;
    }

    export namespace Origin {
        export type AsObject = {
            originGroupId: number,
            originSource: string,
            originSourceParams?: ResourceOriginParams.AsObject,
        }

        export enum OriginVariantCase {
            ORIGIN_VARIANT_NOT_SET = 0,
            ORIGIN_GROUP_ID = 1,
            ORIGIN_SOURCE = 2,
            ORIGIN_SOURCE_PARAMS = 3,
        }

    }

}

export class ResourceOriginParams extends jspb.Message { 
    getSource(): string;
    setSource(value: string): ResourceOriginParams;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): yandex_cloud_cdn_v1_origin_pb.OriginMeta | undefined;
    setMeta(value?: yandex_cloud_cdn_v1_origin_pb.OriginMeta): ResourceOriginParams;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceOriginParams.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceOriginParams): ResourceOriginParams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceOriginParams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceOriginParams;
    static deserializeBinaryFromReader(message: ResourceOriginParams, reader: jspb.BinaryReader): ResourceOriginParams;
}

export namespace ResourceOriginParams {
    export type AsObject = {
        source: string,
        meta?: yandex_cloud_cdn_v1_origin_pb.OriginMeta.AsObject,
    }
}

export class CreateResourceMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): CreateResourceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResourceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResourceMetadata): CreateResourceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResourceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResourceMetadata;
    static deserializeBinaryFromReader(message: CreateResourceMetadata, reader: jspb.BinaryReader): CreateResourceMetadata;
}

export namespace CreateResourceMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class UpdateResourceRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateResourceRequest;

    hasOriginGroupId(): boolean;
    clearOriginGroupId(): void;
    getOriginGroupId(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOriginGroupId(value?: google_protobuf_wrappers_pb.Int64Value): UpdateResourceRequest;

    hasSecondaryHostnames(): boolean;
    clearSecondaryHostnames(): void;
    getSecondaryHostnames(): yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames | undefined;
    setSecondaryHostnames(value?: yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames): UpdateResourceRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): yandex_cloud_cdn_v1_resource_pb.ResourceOptions | undefined;
    setOptions(value?: yandex_cloud_cdn_v1_resource_pb.ResourceOptions): UpdateResourceRequest;
    getOriginProtocol(): yandex_cloud_cdn_v1_resource_pb.OriginProtocol;
    setOriginProtocol(value: yandex_cloud_cdn_v1_resource_pb.OriginProtocol): UpdateResourceRequest;

    hasActive(): boolean;
    clearActive(): void;
    getActive(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setActive(value?: google_protobuf_wrappers_pb.BoolValue): UpdateResourceRequest;

    hasSslCertificate(): boolean;
    clearSslCertificate(): void;
    getSslCertificate(): yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate | undefined;
    setSslCertificate(value?: yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate): UpdateResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResourceRequest): UpdateResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResourceRequest;
    static deserializeBinaryFromReader(message: UpdateResourceRequest, reader: jspb.BinaryReader): UpdateResourceRequest;
}

export namespace UpdateResourceRequest {
    export type AsObject = {
        resourceId: string,
        originGroupId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        secondaryHostnames?: yandex_cloud_cdn_v1_resource_pb.SecondaryHostnames.AsObject,
        options?: yandex_cloud_cdn_v1_resource_pb.ResourceOptions.AsObject,
        originProtocol: yandex_cloud_cdn_v1_resource_pb.OriginProtocol,
        active?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sslCertificate?: yandex_cloud_cdn_v1_resource_pb.SSLTargetCertificate.AsObject,
    }
}

export class UpdateResourceMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): UpdateResourceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResourceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResourceMetadata): UpdateResourceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResourceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResourceMetadata;
    static deserializeBinaryFromReader(message: UpdateResourceMetadata, reader: jspb.BinaryReader): UpdateResourceMetadata;
}

export namespace UpdateResourceMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class DeleteResourceRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): DeleteResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResourceRequest): DeleteResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResourceRequest;
    static deserializeBinaryFromReader(message: DeleteResourceRequest, reader: jspb.BinaryReader): DeleteResourceRequest;
}

export namespace DeleteResourceRequest {
    export type AsObject = {
        resourceId: string,
    }
}

export class DeleteResourceMetadata extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): DeleteResourceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResourceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResourceMetadata): DeleteResourceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResourceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResourceMetadata;
    static deserializeBinaryFromReader(message: DeleteResourceMetadata, reader: jspb.BinaryReader): DeleteResourceMetadata;
}

export namespace DeleteResourceMetadata {
    export type AsObject = {
        resourceId: string,
    }
}

export class GetProviderCNameRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetProviderCNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProviderCNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProviderCNameRequest): GetProviderCNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProviderCNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProviderCNameRequest;
    static deserializeBinaryFromReader(message: GetProviderCNameRequest, reader: jspb.BinaryReader): GetProviderCNameRequest;
}

export namespace GetProviderCNameRequest {
    export type AsObject = {
        folderId: string,
    }
}

export class GetProviderCNameResponse extends jspb.Message { 
    getCname(): string;
    setCname(value: string): GetProviderCNameResponse;
    getFolderId(): string;
    setFolderId(value: string): GetProviderCNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProviderCNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProviderCNameResponse): GetProviderCNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProviderCNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProviderCNameResponse;
    static deserializeBinaryFromReader(message: GetProviderCNameResponse, reader: jspb.BinaryReader): GetProviderCNameResponse;
}

export namespace GetProviderCNameResponse {
    export type AsObject = {
        cname: string,
        folderId: string,
    }
}
