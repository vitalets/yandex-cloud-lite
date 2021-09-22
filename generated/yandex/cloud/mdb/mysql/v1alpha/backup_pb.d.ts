// package: yandex.cloud.mdb.mysql.v1alpha
// file: yandex/cloud/mdb/mysql/v1alpha/backup.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Backup extends jspb.Message { 
    getId(): string;
    setId(value: string): Backup;
    getFolderId(): string;
    setFolderId(value: string): Backup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;
    getSourceClusterId(): string;
    setSourceClusterId(value: string): Backup;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Backup.AsObject;
    static toObject(includeInstance: boolean, msg: Backup): Backup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Backup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Backup;
    static deserializeBinaryFromReader(message: Backup, reader: jspb.BinaryReader): Backup;
}

export namespace Backup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        sourceClusterId: string,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
