// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/project_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class FileMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): FileMetadata;
    getPath(): string;
    setPath(value: string): FileMetadata;
    getSizeBytes(): number;
    setSizeBytes(value: number): FileMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileMetadata;
    static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
    export type AsObject = {
        projectId: string,
        path: string,
        sizeBytes: number,
    }
}

export class UploadFileRequest extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): FileMetadata | undefined;
    setMetadata(value?: FileMetadata): UploadFileRequest;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): UploadFileRequest;

    getMessageCase(): UploadFileRequest.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
    static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
    export type AsObject = {
        metadata?: FileMetadata.AsObject,
        chunk: Uint8Array | string,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        METADATA = 1,
        CHUNK = 2,
    }

}

export class UploadFileResponse extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): FileMetadata | undefined;
    setMetadata(value?: FileMetadata): UploadFileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
    static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
    export type AsObject = {
        metadata?: FileMetadata.AsObject,
    }
}

export class DownloadFileRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): DownloadFileRequest;
    getFilePath(): string;
    setFilePath(value: string): DownloadFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadFileRequest): DownloadFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadFileRequest;
    static deserializeBinaryFromReader(message: DownloadFileRequest, reader: jspb.BinaryReader): DownloadFileRequest;
}

export namespace DownloadFileRequest {
    export type AsObject = {
        projectId: string,
        filePath: string,
    }
}

export class DownloadFileResponse extends jspb.Message { 

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): FileMetadata | undefined;
    setMetadata(value?: FileMetadata): DownloadFileResponse;

    hasChunk(): boolean;
    clearChunk(): void;
    getChunk(): Uint8Array | string;
    getChunk_asU8(): Uint8Array;
    getChunk_asB64(): string;
    setChunk(value: Uint8Array | string): DownloadFileResponse;

    getMessageCase(): DownloadFileResponse.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadFileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadFileResponse): DownloadFileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadFileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadFileResponse;
    static deserializeBinaryFromReader(message: DownloadFileResponse, reader: jspb.BinaryReader): DownloadFileResponse;
}

export namespace DownloadFileResponse {
    export type AsObject = {
        metadata?: FileMetadata.AsObject,
        chunk: Uint8Array | string,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        METADATA = 1,
        CHUNK = 2,
    }

}
