// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_entry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_logging_v1_log_resource_pb from "../../../../yandex/cloud/logging/v1/log_resource_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class LogEntry extends jspb.Message { 
    getUid(): string;
    setUid(value: string): LogEntry;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): yandex_cloud_logging_v1_log_resource_pb.LogEntryResource | undefined;
    setResource(value?: yandex_cloud_logging_v1_log_resource_pb.LogEntryResource): LogEntry;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogEntry;

    hasIngestedAt(): boolean;
    clearIngestedAt(): void;
    getIngestedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setIngestedAt(value?: google_protobuf_timestamp_pb.Timestamp): LogEntry;

    hasSavedAt(): boolean;
    clearSavedAt(): void;
    getSavedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSavedAt(value?: google_protobuf_timestamp_pb.Timestamp): LogEntry;
    getLevel(): LogLevel.Level;
    setLevel(value: LogLevel.Level): LogEntry;
    getMessage(): string;
    setMessage(value: string): LogEntry;

    hasJsonPayload(): boolean;
    clearJsonPayload(): void;
    getJsonPayload(): google_protobuf_struct_pb.Struct | undefined;
    setJsonPayload(value?: google_protobuf_struct_pb.Struct): LogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogEntry;
    static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
    export type AsObject = {
        uid: string,
        resource?: yandex_cloud_logging_v1_log_resource_pb.LogEntryResource.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        ingestedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        savedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        level: LogLevel.Level,
        message: string,
        jsonPayload?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class IncomingLogEntry extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): IncomingLogEntry;
    getLevel(): LogLevel.Level;
    setLevel(value: LogLevel.Level): IncomingLogEntry;
    getMessage(): string;
    setMessage(value: string): IncomingLogEntry;

    hasJsonPayload(): boolean;
    clearJsonPayload(): void;
    getJsonPayload(): google_protobuf_struct_pb.Struct | undefined;
    setJsonPayload(value?: google_protobuf_struct_pb.Struct): IncomingLogEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncomingLogEntry.AsObject;
    static toObject(includeInstance: boolean, msg: IncomingLogEntry): IncomingLogEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncomingLogEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncomingLogEntry;
    static deserializeBinaryFromReader(message: IncomingLogEntry, reader: jspb.BinaryReader): IncomingLogEntry;
}

export namespace IncomingLogEntry {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        level: LogLevel.Level,
        message: string,
        jsonPayload?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class LogEntryDefaults extends jspb.Message { 
    getLevel(): LogLevel.Level;
    setLevel(value: LogLevel.Level): LogEntryDefaults;

    hasJsonPayload(): boolean;
    clearJsonPayload(): void;
    getJsonPayload(): google_protobuf_struct_pb.Struct | undefined;
    setJsonPayload(value?: google_protobuf_struct_pb.Struct): LogEntryDefaults;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogEntryDefaults.AsObject;
    static toObject(includeInstance: boolean, msg: LogEntryDefaults): LogEntryDefaults.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogEntryDefaults, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogEntryDefaults;
    static deserializeBinaryFromReader(message: LogEntryDefaults, reader: jspb.BinaryReader): LogEntryDefaults;
}

export namespace LogEntryDefaults {
    export type AsObject = {
        level: LogLevel.Level,
        jsonPayload?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class Destination extends jspb.Message { 

    hasLogGroupId(): boolean;
    clearLogGroupId(): void;
    getLogGroupId(): string;
    setLogGroupId(value: string): Destination;

    hasFolderId(): boolean;
    clearFolderId(): void;
    getFolderId(): string;
    setFolderId(value: string): Destination;

    getDestinationCase(): Destination.DestinationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Destination.AsObject;
    static toObject(includeInstance: boolean, msg: Destination): Destination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Destination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Destination;
    static deserializeBinaryFromReader(message: Destination, reader: jspb.BinaryReader): Destination;
}

export namespace Destination {
    export type AsObject = {
        logGroupId: string,
        folderId: string,
    }

    export enum DestinationCase {
        DESTINATION_NOT_SET = 0,
        LOG_GROUP_ID = 1,
        FOLDER_ID = 2,
    }

}

export class LogLevel extends jspb.Message { 
    getLevel(): LogLevel.Level;
    setLevel(value: LogLevel.Level): LogLevel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogLevel.AsObject;
    static toObject(includeInstance: boolean, msg: LogLevel): LogLevel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogLevel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogLevel;
    static deserializeBinaryFromReader(message: LogLevel, reader: jspb.BinaryReader): LogLevel;
}

export namespace LogLevel {
    export type AsObject = {
        level: LogLevel.Level,
    }

    export enum Level {
    LEVEL_UNSPECIFIED = 0,
    TRACE = 1,
    DEBUG = 2,
    INFO = 3,
    WARN = 4,
    ERROR = 5,
    FATAL = 6,
    }

}
