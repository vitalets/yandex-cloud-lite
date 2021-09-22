// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/api_key.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ApiKey extends jspb.Message { 
    getId(): string;
    setId(value: string): ApiKey;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): ApiKey;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ApiKey;
    getDescription(): string;
    setDescription(value: string): ApiKey;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiKey.AsObject;
    static toObject(includeInstance: boolean, msg: ApiKey): ApiKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiKey;
    static deserializeBinaryFromReader(message: ApiKey, reader: jspb.BinaryReader): ApiKey;
}

export namespace ApiKey {
    export type AsObject = {
        id: string,
        serviceAccountId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
    }
}
