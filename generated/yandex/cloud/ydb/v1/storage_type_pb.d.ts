// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/storage_type.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StorageType extends jspb.Message { 
    getId(): string;
    setId(value: string): StorageType;
    getDeviceType(): string;
    setDeviceType(value: string): StorageType;
    getRedundancyType(): string;
    setRedundancyType(value: string): StorageType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageType.AsObject;
    static toObject(includeInstance: boolean, msg: StorageType): StorageType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageType;
    static deserializeBinaryFromReader(message: StorageType, reader: jspb.BinaryReader): StorageType;
}

export namespace StorageType {
    export type AsObject = {
        id: string,
        deviceType: string,
        redundancyType: string,
    }
}
