// package: yandex.cloud.iam.v1.awscompatibility
// file: yandex/cloud/iam/v1/awscompatibility/access_key.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AccessKey extends jspb.Message { 
    getId(): string;
    setId(value: string): AccessKey;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): AccessKey;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AccessKey;
    getDescription(): string;
    setDescription(value: string): AccessKey;
    getKeyId(): string;
    setKeyId(value: string): AccessKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessKey.AsObject;
    static toObject(includeInstance: boolean, msg: AccessKey): AccessKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessKey;
    static deserializeBinaryFromReader(message: AccessKey, reader: jspb.BinaryReader): AccessKey;
}

export namespace AccessKey {
    export type AsObject = {
        id: string,
        serviceAccountId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
        keyId: string,
    }
}
