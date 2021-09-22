// package: yandex.cloud.dns.v1
// file: yandex/cloud/dns/v1/dns_zone.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DnsZone extends jspb.Message { 
    getId(): string;
    setId(value: string): DnsZone;
    getFolderId(): string;
    setFolderId(value: string): DnsZone;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DnsZone;
    getName(): string;
    setName(value: string): DnsZone;
    getDescription(): string;
    setDescription(value: string): DnsZone;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZone(): string;
    setZone(value: string): DnsZone;

    hasPrivateVisibility(): boolean;
    clearPrivateVisibility(): void;
    getPrivateVisibility(): PrivateVisibility | undefined;
    setPrivateVisibility(value?: PrivateVisibility): DnsZone;

    hasPublicVisibility(): boolean;
    clearPublicVisibility(): void;
    getPublicVisibility(): PublicVisibility | undefined;
    setPublicVisibility(value?: PublicVisibility): DnsZone;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DnsZone.AsObject;
    static toObject(includeInstance: boolean, msg: DnsZone): DnsZone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DnsZone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DnsZone;
    static deserializeBinaryFromReader(message: DnsZone, reader: jspb.BinaryReader): DnsZone;
}

export namespace DnsZone {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zone: string,
        privateVisibility?: PrivateVisibility.AsObject,
        publicVisibility?: PublicVisibility.AsObject,
    }
}

export class RecordSet extends jspb.Message { 
    getName(): string;
    setName(value: string): RecordSet;
    getType(): string;
    setType(value: string): RecordSet;
    getTtl(): number;
    setTtl(value: number): RecordSet;
    clearDataList(): void;
    getDataList(): Array<string>;
    setDataList(value: Array<string>): RecordSet;
    addData(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSet.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSet): RecordSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSet;
    static deserializeBinaryFromReader(message: RecordSet, reader: jspb.BinaryReader): RecordSet;
}

export namespace RecordSet {
    export type AsObject = {
        name: string,
        type: string,
        ttl: number,
        dataList: Array<string>,
    }
}

export class PrivateVisibility extends jspb.Message { 
    clearNetworkIdsList(): void;
    getNetworkIdsList(): Array<string>;
    setNetworkIdsList(value: Array<string>): PrivateVisibility;
    addNetworkIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrivateVisibility.AsObject;
    static toObject(includeInstance: boolean, msg: PrivateVisibility): PrivateVisibility.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrivateVisibility, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrivateVisibility;
    static deserializeBinaryFromReader(message: PrivateVisibility, reader: jspb.BinaryReader): PrivateVisibility;
}

export namespace PrivateVisibility {
    export type AsObject = {
        networkIdsList: Array<string>,
    }
}

export class PublicVisibility extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublicVisibility.AsObject;
    static toObject(includeInstance: boolean, msg: PublicVisibility): PublicVisibility.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublicVisibility, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublicVisibility;
    static deserializeBinaryFromReader(message: PublicVisibility, reader: jspb.BinaryReader): PublicVisibility;
}

export namespace PublicVisibility {
    export type AsObject = {
    }
}
