// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/host_type.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HostType extends jspb.Message { 
    getId(): string;
    setId(value: string): HostType;
    getCores(): number;
    setCores(value: number): HostType;
    getMemory(): number;
    setMemory(value: number): HostType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostType.AsObject;
    static toObject(includeInstance: boolean, msg: HostType): HostType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostType;
    static deserializeBinaryFromReader(message: HostType, reader: jspb.BinaryReader): HostType;
}

export namespace HostType {
    export type AsObject = {
        id: string,
        cores: number,
        memory: number,
    }
}
