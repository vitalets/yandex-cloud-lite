// package: yandex.cloud.mdb.mongodb.v1
// file: yandex/cloud/mdb/mongodb/v1/backup.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
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
    clearSourceShardNamesList(): void;
    getSourceShardNamesList(): Array<string>;
    setSourceShardNamesList(value: Array<string>): Backup;
    addSourceShardNames(value: string, index?: number): string;
    getSize(): number;
    setSize(value: number): Backup;
    getType(): Backup.BackupType;
    setType(value: Backup.BackupType): Backup;

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
        sourceShardNamesList: Array<string>,
        size: number,
        type: Backup.BackupType,
    }

    export enum BackupType {
    BACKUP_TYPE_UNSPECIFIED = 0,
    AUTOMATED = 1,
    MANUAL = 2,
    }

}
