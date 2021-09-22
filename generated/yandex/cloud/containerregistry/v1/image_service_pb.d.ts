// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/image_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_image_pb from "../../../../yandex/cloud/containerregistry/v1/image_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ListImagesRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListImagesRequest;
    getRepositoryName(): string;
    setRepositoryName(value: string): ListImagesRequest;
    getFolderId(): string;
    setFolderId(value: string): ListImagesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListImagesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListImagesRequest;
    getFilter(): string;
    setFilter(value: string): ListImagesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListImagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListImagesRequest): ListImagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImagesRequest;
    static deserializeBinaryFromReader(message: ListImagesRequest, reader: jspb.BinaryReader): ListImagesRequest;
}

export namespace ListImagesRequest {
    export type AsObject = {
        registryId: string,
        repositoryName: string,
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListImagesResponse extends jspb.Message { 
    clearImagesList(): void;
    getImagesList(): Array<yandex_cloud_containerregistry_v1_image_pb.Image>;
    setImagesList(value: Array<yandex_cloud_containerregistry_v1_image_pb.Image>): ListImagesResponse;
    addImages(value?: yandex_cloud_containerregistry_v1_image_pb.Image, index?: number): yandex_cloud_containerregistry_v1_image_pb.Image;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListImagesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListImagesResponse): ListImagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImagesResponse;
    static deserializeBinaryFromReader(message: ListImagesResponse, reader: jspb.BinaryReader): ListImagesResponse;
}

export namespace ListImagesResponse {
    export type AsObject = {
        imagesList: Array<yandex_cloud_containerregistry_v1_image_pb.Image.AsObject>,
        nextPageToken: string,
    }
}

export class GetImageRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): GetImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetImageRequest): GetImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetImageRequest;
    static deserializeBinaryFromReader(message: GetImageRequest, reader: jspb.BinaryReader): GetImageRequest;
}

export namespace GetImageRequest {
    export type AsObject = {
        imageId: string,
    }
}

export class DeleteImageRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): DeleteImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteImageRequest): DeleteImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteImageRequest;
    static deserializeBinaryFromReader(message: DeleteImageRequest, reader: jspb.BinaryReader): DeleteImageRequest;
}

export namespace DeleteImageRequest {
    export type AsObject = {
        imageId: string,
    }
}

export class DeleteImageMetadata extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): DeleteImageMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteImageMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteImageMetadata): DeleteImageMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteImageMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteImageMetadata;
    static deserializeBinaryFromReader(message: DeleteImageMetadata, reader: jspb.BinaryReader): DeleteImageMetadata;
}

export namespace DeleteImageMetadata {
    export type AsObject = {
        imageId: string,
    }
}
