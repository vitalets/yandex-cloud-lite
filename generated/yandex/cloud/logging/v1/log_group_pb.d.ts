// package: yandex.cloud.logging.v1
// file: yandex/cloud/logging/v1/log_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LogGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): LogGroup;
    getFolderId(): string;
    setFolderId(value: string): LogGroup;
    getCloudId(): string;
    setCloudId(value: string): LogGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LogGroup;
    getName(): string;
    setName(value: string): LogGroup;
    getDescription(): string;
    setDescription(value: string): LogGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): LogGroup.Status;
    setStatus(value: LogGroup.Status): LogGroup;

    hasRetentionPeriod(): boolean;
    clearRetentionPeriod(): void;
    getRetentionPeriod(): google_protobuf_duration_pb.Duration | undefined;
    setRetentionPeriod(value?: google_protobuf_duration_pb.Duration): LogGroup;
    getDataStream(): string;
    setDataStream(value: string): LogGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogGroup.AsObject;
    static toObject(includeInstance: boolean, msg: LogGroup): LogGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogGroup;
    static deserializeBinaryFromReader(message: LogGroup, reader: jspb.BinaryReader): LogGroup;
}

export namespace LogGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        cloudId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: LogGroup.Status,
        retentionPeriod?: google_protobuf_duration_pb.Duration.AsObject,
        dataStream: string,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    }

}
