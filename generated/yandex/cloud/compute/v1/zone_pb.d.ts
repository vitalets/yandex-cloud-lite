// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/zone.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Zone extends jspb.Message { 
    getId(): string;
    setId(value: string): Zone;
    getRegionId(): string;
    setRegionId(value: string): Zone;
    getStatus(): Zone.Status;
    setStatus(value: Zone.Status): Zone;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Zone.AsObject;
    static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Zone;
    static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
    export type AsObject = {
        id: string,
        regionId: string,
        status: Zone.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    UP = 1,
    DOWN = 2,
    }

}
