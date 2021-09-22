// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_reading_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_logging_v1_log_entry_pb from "../../../../yandex/cloud/logging/v1/log_entry_pb";

export class ReadRequest extends jspb.Message { 

    hasPageToken(): boolean;
    clearPageToken(): void;
    getPageToken(): string;
    setPageToken(value: string): ReadRequest;

    hasCriteria(): boolean;
    clearCriteria(): void;
    getCriteria(): Criteria | undefined;
    setCriteria(value?: Criteria): ReadRequest;

    getSelectorCase(): ReadRequest.SelectorCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadRequest;
    static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
    export type AsObject = {
        pageToken: string,
        criteria?: Criteria.AsObject,
    }

    export enum SelectorCase {
        SELECTOR_NOT_SET = 0,
        PAGE_TOKEN = 1,
        CRITERIA = 2,
    }

}

export class ReadResponse extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): ReadResponse;
    clearEntriesList(): void;
    getEntriesList(): Array<yandex_cloud_logging_v1_log_entry_pb.LogEntry>;
    setEntriesList(value: Array<yandex_cloud_logging_v1_log_entry_pb.LogEntry>): ReadResponse;
    addEntries(value?: yandex_cloud_logging_v1_log_entry_pb.LogEntry, index?: number): yandex_cloud_logging_v1_log_entry_pb.LogEntry;
    getNextPageToken(): string;
    setNextPageToken(value: string): ReadResponse;
    getPreviousPageToken(): string;
    setPreviousPageToken(value: string): ReadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadResponse;
    static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
    export type AsObject = {
        logGroupId: string,
        entriesList: Array<yandex_cloud_logging_v1_log_entry_pb.LogEntry.AsObject>,
        nextPageToken: string,
        previousPageToken: string,
    }
}

export class Criteria extends jspb.Message { 
    getLogGroupId(): string;
    setLogGroupId(value: string): Criteria;
    clearResourceTypesList(): void;
    getResourceTypesList(): Array<string>;
    setResourceTypesList(value: Array<string>): Criteria;
    addResourceTypes(value: string, index?: number): string;
    clearResourceIdsList(): void;
    getResourceIdsList(): Array<string>;
    setResourceIdsList(value: Array<string>): Criteria;
    addResourceIds(value: string, index?: number): string;

    hasSince(): boolean;
    clearSince(): void;
    getSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSince(value?: google_protobuf_timestamp_pb.Timestamp): Criteria;

    hasUntil(): boolean;
    clearUntil(): void;
    getUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUntil(value?: google_protobuf_timestamp_pb.Timestamp): Criteria;
    clearLevelsList(): void;
    getLevelsList(): Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>;
    setLevelsList(value: Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>): Criteria;
    addLevels(value: yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level, index?: number): yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level;
    getFilter(): string;
    setFilter(value: string): Criteria;
    getPageSize(): number;
    setPageSize(value: number): Criteria;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Criteria.AsObject;
    static toObject(includeInstance: boolean, msg: Criteria): Criteria.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Criteria, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Criteria;
    static deserializeBinaryFromReader(message: Criteria, reader: jspb.BinaryReader): Criteria;
}

export namespace Criteria {
    export type AsObject = {
        logGroupId: string,
        resourceTypesList: Array<string>,
        resourceIdsList: Array<string>,
        since?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        until?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        levelsList: Array<yandex_cloud_logging_v1_log_entry_pb.LogLevel.Level>,
        filter: string,
        pageSize: number,
    }
}
