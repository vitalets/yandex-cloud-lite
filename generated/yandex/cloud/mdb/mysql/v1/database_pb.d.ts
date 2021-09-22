// package: yandex.cloud.mdb.mysql.v1
// file: yandex/cloud/mdb/mysql/v1/database.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Database extends jspb.Message { 
    getName(): string;
    setName(value: string): Database;
    getClusterId(): string;
    setClusterId(value: string): Database;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Database.AsObject;
    static toObject(includeInstance: boolean, msg: Database): Database.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Database, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Database;
    static deserializeBinaryFromReader(message: Database, reader: jspb.BinaryReader): Database;
}

export namespace Database {
    export type AsObject = {
        name: string,
        clusterId: string,
    }
}

export class DatabaseSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): DatabaseSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatabaseSpec.AsObject;
    static toObject(includeInstance: boolean, msg: DatabaseSpec): DatabaseSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatabaseSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatabaseSpec;
    static deserializeBinaryFromReader(message: DatabaseSpec, reader: jspb.BinaryReader): DatabaseSpec;
}

export namespace DatabaseSpec {
    export type AsObject = {
        name: string,
    }
}
