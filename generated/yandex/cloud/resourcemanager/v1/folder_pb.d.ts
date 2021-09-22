// package: yandex.cloud.resourcemanager.v1
// file: yandex/cloud/resourcemanager/v1/folder.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Folder extends jspb.Message { 
    getId(): string;
    setId(value: string): Folder;
    getCloudId(): string;
    setCloudId(value: string): Folder;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Folder;
    getName(): string;
    setName(value: string): Folder;
    getDescription(): string;
    setDescription(value: string): Folder;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): Folder.Status;
    setStatus(value: Folder.Status): Folder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Folder.AsObject;
    static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Folder;
    static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
}

export namespace Folder {
    export type AsObject = {
        id: string,
        cloudId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: Folder.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    DELETING = 2,
    PENDING_DELETION = 3,
    }

}
