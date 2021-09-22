// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/registry.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Registry extends jspb.Message { 
    getId(): string;
    setId(value: string): Registry;
    getFolderId(): string;
    setFolderId(value: string): Registry;
    getName(): string;
    setName(value: string): Registry;
    getStatus(): Registry.Status;
    setStatus(value: Registry.Status): Registry;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Registry;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Registry.AsObject;
    static toObject(includeInstance: boolean, msg: Registry): Registry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Registry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Registry;
    static deserializeBinaryFromReader(message: Registry, reader: jspb.BinaryReader): Registry;
}

export namespace Registry {
    export type AsObject = {
        id: string,
        folderId: string,
        name: string,
        status: Registry.Status,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        labelsMap: Array<[string, string]>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    }

}
