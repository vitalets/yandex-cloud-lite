// package: yandex.cloud.serverless.mdbproxy.v1
// file: yandex/cloud/serverless/mdbproxy/v1/proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Proxy extends jspb.Message { 
    getId(): string;
    setId(value: string): Proxy;
    getFolderId(): string;
    setFolderId(value: string): Proxy;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Proxy;
    getName(): string;
    setName(value: string): Proxy;
    getDescription(): string;
    setDescription(value: string): Proxy;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): Proxy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Proxy.AsObject;
    static toObject(includeInstance: boolean, msg: Proxy): Proxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Proxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Proxy;
    static deserializeBinaryFromReader(message: Proxy, reader: jspb.BinaryReader): Proxy;
}

export namespace Proxy {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        target?: Target.AsObject,
    }
}

export class Target extends jspb.Message { 

    hasClickhouse(): boolean;
    clearClickhouse(): void;
    getClickhouse(): Target.ClickHouse | undefined;
    setClickhouse(value?: Target.ClickHouse): Target;

    hasPostgresql(): boolean;
    clearPostgresql(): void;
    getPostgresql(): Target.PostgreSQL | undefined;
    setPostgresql(value?: Target.PostgreSQL): Target;

    getMdbCase(): Target.MdbCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
    export type AsObject = {
        clickhouse?: Target.ClickHouse.AsObject,
        postgresql?: Target.PostgreSQL.AsObject,
    }


    export class PostgreSQL extends jspb.Message { 
        getClusterId(): string;
        setClusterId(value: string): PostgreSQL;
        getUser(): string;
        setUser(value: string): PostgreSQL;
        getPassword(): string;
        setPassword(value: string): PostgreSQL;
        getDb(): string;
        setDb(value: string): PostgreSQL;
        getEndpoint(): string;
        setEndpoint(value: string): PostgreSQL;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PostgreSQL.AsObject;
        static toObject(includeInstance: boolean, msg: PostgreSQL): PostgreSQL.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PostgreSQL, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PostgreSQL;
        static deserializeBinaryFromReader(message: PostgreSQL, reader: jspb.BinaryReader): PostgreSQL;
    }

    export namespace PostgreSQL {
        export type AsObject = {
            clusterId: string,
            user: string,
            password: string,
            db: string,
            endpoint: string,
        }
    }

    export class ClickHouse extends jspb.Message { 
        getClusterId(): string;
        setClusterId(value: string): ClickHouse;
        getUser(): string;
        setUser(value: string): ClickHouse;
        getPassword(): string;
        setPassword(value: string): ClickHouse;
        getDb(): string;
        setDb(value: string): ClickHouse;
        getEndpoint(): string;
        setEndpoint(value: string): ClickHouse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClickHouse.AsObject;
        static toObject(includeInstance: boolean, msg: ClickHouse): ClickHouse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClickHouse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClickHouse;
        static deserializeBinaryFromReader(message: ClickHouse, reader: jspb.BinaryReader): ClickHouse;
    }

    export namespace ClickHouse {
        export type AsObject = {
            clusterId: string,
            user: string,
            password: string,
            db: string,
            endpoint: string,
        }
    }


    export enum MdbCase {
        MDB_NOT_SET = 0,
        CLICKHOUSE = 1,
        POSTGRESQL = 2,
    }

}
