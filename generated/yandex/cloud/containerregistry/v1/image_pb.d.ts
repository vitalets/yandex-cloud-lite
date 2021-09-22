// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/image.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_containerregistry_v1_blob_pb from "../../../../yandex/cloud/containerregistry/v1/blob_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Image extends jspb.Message { 
    getId(): string;
    setId(value: string): Image;
    getName(): string;
    setName(value: string): Image;
    getDigest(): string;
    setDigest(value: string): Image;
    getCompressedSize(): number;
    setCompressedSize(value: number): Image;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): yandex_cloud_containerregistry_v1_blob_pb.Blob | undefined;
    setConfig(value?: yandex_cloud_containerregistry_v1_blob_pb.Blob): Image;
    clearLayersList(): void;
    getLayersList(): Array<yandex_cloud_containerregistry_v1_blob_pb.Blob>;
    setLayersList(value: Array<yandex_cloud_containerregistry_v1_blob_pb.Blob>): Image;
    addLayers(value?: yandex_cloud_containerregistry_v1_blob_pb.Blob, index?: number): yandex_cloud_containerregistry_v1_blob_pb.Blob;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Image;
    addTags(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Image;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        id: string,
        name: string,
        digest: string,
        compressedSize: number,
        config?: yandex_cloud_containerregistry_v1_blob_pb.Blob.AsObject,
        layersList: Array<yandex_cloud_containerregistry_v1_blob_pb.Blob.AsObject>,
        tagsList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
