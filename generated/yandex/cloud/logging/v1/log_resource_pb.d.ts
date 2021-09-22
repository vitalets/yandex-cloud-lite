// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_resource.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class LogEntryResource extends jspb.Message { 
    getType(): string;
    setType(value: string): LogEntryResource;
    getId(): string;
    setId(value: string): LogEntryResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogEntryResource.AsObject;
    static toObject(includeInstance: boolean, msg: LogEntryResource): LogEntryResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogEntryResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogEntryResource;
    static deserializeBinaryFromReader(message: LogEntryResource, reader: jspb.BinaryReader): LogEntryResource;
}

export namespace LogEntryResource {
    export type AsObject = {
        type: string,
        id: string,
    }
}

export class LogGroupResource extends jspb.Message { 
    getType(): string;
    setType(value: string): LogGroupResource;
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): LogGroupResource;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogGroupResource.AsObject;
    static toObject(includeInstance: boolean, msg: LogGroupResource): LogGroupResource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogGroupResource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogGroupResource;
    static deserializeBinaryFromReader(message: LogGroupResource, reader: jspb.BinaryReader): LogGroupResource;
}

export namespace LogGroupResource {
    export type AsObject = {
        type: string,
        idsList: Array<string>,
    }
}
