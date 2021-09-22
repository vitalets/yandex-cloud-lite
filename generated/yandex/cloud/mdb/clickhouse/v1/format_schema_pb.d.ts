// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/format_schema.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FormatSchema extends jspb.Message { 
    getName(): string;
    setName(value: string): FormatSchema;
    getClusterId(): string;
    setClusterId(value: string): FormatSchema;
    getType(): FormatSchemaType;
    setType(value: FormatSchemaType): FormatSchema;
    getUri(): string;
    setUri(value: string): FormatSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormatSchema.AsObject;
    static toObject(includeInstance: boolean, msg: FormatSchema): FormatSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormatSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormatSchema;
    static deserializeBinaryFromReader(message: FormatSchema, reader: jspb.BinaryReader): FormatSchema;
}

export namespace FormatSchema {
    export type AsObject = {
        name: string,
        clusterId: string,
        type: FormatSchemaType,
        uri: string,
    }
}

export enum FormatSchemaType {
    FORMAT_SCHEMA_TYPE_UNSPECIFIED = 0,
    FORMAT_SCHEMA_TYPE_PROTOBUF = 1,
    FORMAT_SCHEMA_TYPE_CAPNPROTO = 2,
}
