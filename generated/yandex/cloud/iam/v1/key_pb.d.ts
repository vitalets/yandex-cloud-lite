// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/key.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Key extends jspb.Message { 
    getId(): string;
    setId(value: string): Key;

    hasUserAccountId(): boolean;
    clearUserAccountId(): void;
    getUserAccountId(): string;
    setUserAccountId(value: string): Key;

    hasServiceAccountId(): boolean;
    clearServiceAccountId(): void;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Key;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Key;
    getDescription(): string;
    setDescription(value: string): Key;
    getKeyAlgorithm(): Key.Algorithm;
    setKeyAlgorithm(value: Key.Algorithm): Key;
    getPublicKey(): string;
    setPublicKey(value: string): Key;

    getSubjectCase(): Key.SubjectCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        id: string,
        userAccountId: string,
        serviceAccountId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
        keyAlgorithm: Key.Algorithm,
        publicKey: string,
    }

    export enum Algorithm {
    ALGORITHM_UNSPECIFIED = 0,
    RSA_2048 = 1,
    RSA_4096 = 2,
    }


    export enum SubjectCase {
        SUBJECT_NOT_SET = 0,
        USER_ACCOUNT_ID = 2,
        SERVICE_ACCOUNT_ID = 3,
    }

}
