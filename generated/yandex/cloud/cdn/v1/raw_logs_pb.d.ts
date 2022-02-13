// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/raw_logs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class RawLogsSettings extends jspb.Message { 
    getBucketName(): string;
    setBucketName(value: string): RawLogsSettings;
    getBucketRegion(): string;
    setBucketRegion(value: string): RawLogsSettings;
    getFilePrefix(): string;
    setFilePrefix(value: string): RawLogsSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RawLogsSettings.AsObject;
    static toObject(includeInstance: boolean, msg: RawLogsSettings): RawLogsSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RawLogsSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RawLogsSettings;
    static deserializeBinaryFromReader(message: RawLogsSettings, reader: jspb.BinaryReader): RawLogsSettings;
}

export namespace RawLogsSettings {
    export type AsObject = {
        bucketName: string,
        bucketRegion: string,
        filePrefix: string,
    }
}

export enum RawLogsStatus {
    RAW_LOGS_STATUS_UNSPECIFIED = 0,
    RAW_LOGS_STATUS_NOT_ACTIVATED = 1,
    RAW_LOGS_STATUS_OK = 2,
    RAW_LOGS_STATUS_FAILED = 3,
}
