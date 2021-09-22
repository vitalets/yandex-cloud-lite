// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/location.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Location extends jspb.Message { 
    getId(): string;
    setId(value: string): Location;
    getDescription(): string;
    setDescription(value: string): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
    export type AsObject = {
        id: string,
        description: string,
    }
}
