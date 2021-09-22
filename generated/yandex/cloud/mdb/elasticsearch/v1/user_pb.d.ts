// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getClusterId(): string;
    setClusterId(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        clusterId: string,
    }
}

export class UserSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): UserSpec;
    getPassword(): string;
    setPassword(value: string): UserSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UserSpec): UserSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSpec;
    static deserializeBinaryFromReader(message: UserSpec, reader: jspb.BinaryReader): UserSpec;
}

export namespace UserSpec {
    export type AsObject = {
        name: string,
        password: string,
    }
}
