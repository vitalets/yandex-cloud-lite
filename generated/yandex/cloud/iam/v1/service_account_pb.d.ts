// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/service_account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ServiceAccount extends jspb.Message { 
    getId(): string;
    setId(value: string): ServiceAccount;
    getFolderId(): string;
    setFolderId(value: string): ServiceAccount;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ServiceAccount;
    getName(): string;
    setName(value: string): ServiceAccount;
    getDescription(): string;
    setDescription(value: string): ServiceAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceAccount.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceAccount;
    static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,
    }
}
