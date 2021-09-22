// package: yandex.cloud.mdb.postgresql.v1
// file: yandex/cloud/mdb/postgresql/v1/database.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Database extends jspb.Message { 
    getName(): string;
    setName(value: string): Database;
    getClusterId(): string;
    setClusterId(value: string): Database;
    getOwner(): string;
    setOwner(value: string): Database;
    getLcCollate(): string;
    setLcCollate(value: string): Database;
    getLcCtype(): string;
    setLcCtype(value: string): Database;
    clearExtensionsList(): void;
    getExtensionsList(): Array<Extension>;
    setExtensionsList(value: Array<Extension>): Database;
    addExtensions(value?: Extension, index?: number): Extension;

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
        owner: string,
        lcCollate: string,
        lcCtype: string,
        extensionsList: Array<Extension.AsObject>,
    }
}

export class Extension extends jspb.Message { 
    getName(): string;
    setName(value: string): Extension;
    getVersion(): string;
    setVersion(value: string): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extension.AsObject;
    static toObject(includeInstance: boolean, msg: Extension): Extension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extension;
    static deserializeBinaryFromReader(message: Extension, reader: jspb.BinaryReader): Extension;
}

export namespace Extension {
    export type AsObject = {
        name: string,
        version: string,
    }
}

export class DatabaseSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): DatabaseSpec;
    getOwner(): string;
    setOwner(value: string): DatabaseSpec;
    getLcCollate(): string;
    setLcCollate(value: string): DatabaseSpec;
    getLcCtype(): string;
    setLcCtype(value: string): DatabaseSpec;
    clearExtensionsList(): void;
    getExtensionsList(): Array<Extension>;
    setExtensionsList(value: Array<Extension>): DatabaseSpec;
    addExtensions(value?: Extension, index?: number): Extension;

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
        owner: string,
        lcCollate: string,
        lcCtype: string,
        extensionsList: Array<Extension.AsObject>,
    }
}
