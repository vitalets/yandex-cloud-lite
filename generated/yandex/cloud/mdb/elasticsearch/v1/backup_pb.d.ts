// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/backup.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Backup extends jspb.Message { 
    getId(): string;
    setId(value: string): Backup;
    getFolderId(): string;
    setFolderId(value: string): Backup;
    getSourceClusterId(): string;
    setSourceClusterId(value: string): Backup;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;
    clearIndicesList(): void;
    getIndicesList(): Array<string>;
    setIndicesList(value: Array<string>): Backup;
    addIndices(value: string, index?: number): string;
    getElasticsearchVersion(): string;
    setElasticsearchVersion(value: string): Backup;
    getSizeBytes(): number;
    setSizeBytes(value: number): Backup;
    getIndicesTotal(): number;
    setIndicesTotal(value: number): Backup;

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
        sourceClusterId: string,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        indicesList: Array<string>,
        elasticsearchVersion: string,
        sizeBytes: number,
        indicesTotal: number,
    }
}
