// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/image_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_image_pb from "../../../../yandex/cloud/compute/v1/image_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

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

export class GetImageLatestByFamilyRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetImageLatestByFamilyRequest;
    getFamily(): string;
    setFamily(value: string): GetImageLatestByFamilyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetImageLatestByFamilyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetImageLatestByFamilyRequest): GetImageLatestByFamilyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetImageLatestByFamilyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetImageLatestByFamilyRequest;
    static deserializeBinaryFromReader(message: GetImageLatestByFamilyRequest, reader: jspb.BinaryReader): GetImageLatestByFamilyRequest;
}

export namespace GetImageLatestByFamilyRequest {
    export type AsObject = {
        folderId: string,
        family: string,
    }
}

export class ListImagesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListImagesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListImagesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListImagesRequest;
    getFilter(): string;
    setFilter(value: string): ListImagesRequest;

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
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListImagesResponse extends jspb.Message { 
    clearImagesList(): void;
    getImagesList(): Array<yandex_cloud_compute_v1_image_pb.Image>;
    setImagesList(value: Array<yandex_cloud_compute_v1_image_pb.Image>): ListImagesResponse;
    addImages(value?: yandex_cloud_compute_v1_image_pb.Image, index?: number): yandex_cloud_compute_v1_image_pb.Image;
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
        imagesList: Array<yandex_cloud_compute_v1_image_pb.Image.AsObject>,
        nextPageToken: string,
    }
}

export class CreateImageRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateImageRequest;
    getName(): string;
    setName(value: string): CreateImageRequest;
    getDescription(): string;
    setDescription(value: string): CreateImageRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getFamily(): string;
    setFamily(value: string): CreateImageRequest;
    getMinDiskSize(): number;
    setMinDiskSize(value: number): CreateImageRequest;
    clearProductIdsList(): void;
    getProductIdsList(): Array<string>;
    setProductIdsList(value: Array<string>): CreateImageRequest;
    addProductIds(value: string, index?: number): string;

    hasImageId(): boolean;
    clearImageId(): void;
    getImageId(): string;
    setImageId(value: string): CreateImageRequest;

    hasDiskId(): boolean;
    clearDiskId(): void;
    getDiskId(): string;
    setDiskId(value: string): CreateImageRequest;

    hasSnapshotId(): boolean;
    clearSnapshotId(): void;
    getSnapshotId(): string;
    setSnapshotId(value: string): CreateImageRequest;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): string;
    setUri(value: string): CreateImageRequest;

    hasOs(): boolean;
    clearOs(): void;
    getOs(): yandex_cloud_compute_v1_image_pb.Os | undefined;
    setOs(value?: yandex_cloud_compute_v1_image_pb.Os): CreateImageRequest;
    getPooled(): boolean;
    setPooled(value: boolean): CreateImageRequest;

    getSourceCase(): CreateImageRequest.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateImageRequest): CreateImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateImageRequest;
    static deserializeBinaryFromReader(message: CreateImageRequest, reader: jspb.BinaryReader): CreateImageRequest;
}

export namespace CreateImageRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        family: string,
        minDiskSize: number,
        productIdsList: Array<string>,
        imageId: string,
        diskId: string,
        snapshotId: string,
        uri: string,
        os?: yandex_cloud_compute_v1_image_pb.Os.AsObject,
        pooled: boolean,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        IMAGE_ID = 8,
        DISK_ID = 9,
        SNAPSHOT_ID = 10,
        URI = 11,
    }

}

export class CreateImageMetadata extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): CreateImageMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateImageMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateImageMetadata): CreateImageMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateImageMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateImageMetadata;
    static deserializeBinaryFromReader(message: CreateImageMetadata, reader: jspb.BinaryReader): CreateImageMetadata;
}

export namespace CreateImageMetadata {
    export type AsObject = {
        imageId: string,
    }
}

export class UpdateImageRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): UpdateImageRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateImageRequest;
    getName(): string;
    setName(value: string): UpdateImageRequest;
    getDescription(): string;
    setDescription(value: string): UpdateImageRequest;
    getMinDiskSize(): number;
    setMinDiskSize(value: number): UpdateImageRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateImageRequest): UpdateImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateImageRequest;
    static deserializeBinaryFromReader(message: UpdateImageRequest, reader: jspb.BinaryReader): UpdateImageRequest;
}

export namespace UpdateImageRequest {
    export type AsObject = {
        imageId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        minDiskSize: number,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateImageMetadata extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): UpdateImageMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateImageMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateImageMetadata): UpdateImageMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateImageMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateImageMetadata;
    static deserializeBinaryFromReader(message: UpdateImageMetadata, reader: jspb.BinaryReader): UpdateImageMetadata;
}

export namespace UpdateImageMetadata {
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

export class ListImageOperationsRequest extends jspb.Message { 
    getImageId(): string;
    setImageId(value: string): ListImageOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListImageOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListImageOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImageOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListImageOperationsRequest): ListImageOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImageOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImageOperationsRequest;
    static deserializeBinaryFromReader(message: ListImageOperationsRequest, reader: jspb.BinaryReader): ListImageOperationsRequest;
}

export namespace ListImageOperationsRequest {
    export type AsObject = {
        imageId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListImageOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListImageOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListImageOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListImageOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListImageOperationsResponse): ListImageOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListImageOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListImageOperationsResponse;
    static deserializeBinaryFromReader(message: ListImageOperationsResponse, reader: jspb.BinaryReader): ListImageOperationsResponse;
}

export namespace ListImageOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
