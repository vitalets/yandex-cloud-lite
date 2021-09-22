// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/resource_preset.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ResourcePreset extends jspb.Message { 
    getId(): string;
    setId(value: string): ResourcePreset;
    clearZoneIdsList(): void;
    getZoneIdsList(): Array<string>;
    setZoneIdsList(value: Array<string>): ResourcePreset;
    addZoneIds(value: string, index?: number): string;
    getCores(): number;
    setCores(value: number): ResourcePreset;
    getMemory(): number;
    setMemory(value: number): ResourcePreset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcePreset.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcePreset): ResourcePreset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourcePreset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcePreset;
    static deserializeBinaryFromReader(message: ResourcePreset, reader: jspb.BinaryReader): ResourcePreset;
}

export namespace ResourcePreset {
    export type AsObject = {
        id: string,
        zoneIdsList: Array<string>,
        cores: number,
        memory: number,
    }
}
