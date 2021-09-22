// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/disk_type.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DiskType extends jspb.Message { 
    getId(): string;
    setId(value: string): DiskType;
    getDescription(): string;
    setDescription(value: string): DiskType;
    clearZoneIdsList(): void;
    getZoneIdsList(): Array<string>;
    setZoneIdsList(value: Array<string>): DiskType;
    addZoneIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskType.AsObject;
    static toObject(includeInstance: boolean, msg: DiskType): DiskType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskType;
    static deserializeBinaryFromReader(message: DiskType, reader: jspb.BinaryReader): DiskType;
}

export namespace DiskType {
    export type AsObject = {
        id: string,
        description: string,
        zoneIdsList: Array<string>,
    }
}
