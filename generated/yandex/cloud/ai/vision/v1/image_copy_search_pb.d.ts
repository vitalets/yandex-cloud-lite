// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/image_copy_search.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ImageCopySearchAnnotation extends jspb.Message { 
    getCopyCount(): number;
    setCopyCount(value: number): ImageCopySearchAnnotation;
    clearTopResultsList(): void;
    getTopResultsList(): Array<CopyMatch>;
    setTopResultsList(value: Array<CopyMatch>): ImageCopySearchAnnotation;
    addTopResults(value?: CopyMatch, index?: number): CopyMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageCopySearchAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: ImageCopySearchAnnotation): ImageCopySearchAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageCopySearchAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageCopySearchAnnotation;
    static deserializeBinaryFromReader(message: ImageCopySearchAnnotation, reader: jspb.BinaryReader): ImageCopySearchAnnotation;
}

export namespace ImageCopySearchAnnotation {
    export type AsObject = {
        copyCount: number,
        topResultsList: Array<CopyMatch.AsObject>,
    }
}

export class CopyMatch extends jspb.Message { 
    getImageUrl(): string;
    setImageUrl(value: string): CopyMatch;
    getPageUrl(): string;
    setPageUrl(value: string): CopyMatch;
    getTitle(): string;
    setTitle(value: string): CopyMatch;
    getDescription(): string;
    setDescription(value: string): CopyMatch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CopyMatch.AsObject;
    static toObject(includeInstance: boolean, msg: CopyMatch): CopyMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CopyMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CopyMatch;
    static deserializeBinaryFromReader(message: CopyMatch, reader: jspb.BinaryReader): CopyMatch;
}

export namespace CopyMatch {
    export type AsObject = {
        imageUrl: string,
        pageUrl: string,
        title: string,
        description: string,
    }
}
