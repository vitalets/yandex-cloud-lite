// package: yandex.cloud
// file: yandex/cloud/validation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class MapKeySpec extends jspb.Message { 
    getValue(): string;
    setValue(value: string): MapKeySpec;
    getPattern(): string;
    setPattern(value: string): MapKeySpec;
    getLength(): string;
    setLength(value: string): MapKeySpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapKeySpec.AsObject;
    static toObject(includeInstance: boolean, msg: MapKeySpec): MapKeySpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapKeySpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapKeySpec;
    static deserializeBinaryFromReader(message: MapKeySpec, reader: jspb.BinaryReader): MapKeySpec;
}

export namespace MapKeySpec {
    export type AsObject = {
        value: string,
        pattern: string,
        length: string,
    }
}

export const exactlyOne: jspb.ExtensionFieldInfo<boolean>;

export const required: jspb.ExtensionFieldInfo<boolean>;

export const pattern: jspb.ExtensionFieldInfo<string>;

export const value: jspb.ExtensionFieldInfo<string>;

export const size: jspb.ExtensionFieldInfo<string>;

export const length: jspb.ExtensionFieldInfo<string>;

export const unique: jspb.ExtensionFieldInfo<boolean>;

export const mapKey: jspb.ExtensionFieldInfo<MapKeySpec>;

export const bytes: jspb.ExtensionFieldInfo<string>;
