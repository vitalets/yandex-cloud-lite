// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/subnet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Subnet extends jspb.Message { 
    getId(): string;
    setId(value: string): Subnet;
    getFolderId(): string;
    setFolderId(value: string): Subnet;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Subnet;
    getName(): string;
    setName(value: string): Subnet;
    getDescription(): string;
    setDescription(value: string): Subnet;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): Subnet;
    getZoneId(): string;
    setZoneId(value: string): Subnet;
    clearV4CidrBlocksList(): void;
    getV4CidrBlocksList(): Array<string>;
    setV4CidrBlocksList(value: Array<string>): Subnet;
    addV4CidrBlocks(value: string, index?: number): string;
    clearV6CidrBlocksList(): void;
    getV6CidrBlocksList(): Array<string>;
    setV6CidrBlocksList(value: Array<string>): Subnet;
    addV6CidrBlocks(value: string, index?: number): string;
    getRouteTableId(): string;
    setRouteTableId(value: string): Subnet;

    hasDhcpOptions(): boolean;
    clearDhcpOptions(): void;
    getDhcpOptions(): DhcpOptions | undefined;
    setDhcpOptions(value?: DhcpOptions): Subnet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subnet.AsObject;
    static toObject(includeInstance: boolean, msg: Subnet): Subnet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subnet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subnet;
    static deserializeBinaryFromReader(message: Subnet, reader: jspb.BinaryReader): Subnet;
}

export namespace Subnet {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        zoneId: string,
        v4CidrBlocksList: Array<string>,
        v6CidrBlocksList: Array<string>,
        routeTableId: string,
        dhcpOptions?: DhcpOptions.AsObject,
    }
}

export class DhcpOptions extends jspb.Message { 
    clearDomainNameServersList(): void;
    getDomainNameServersList(): Array<string>;
    setDomainNameServersList(value: Array<string>): DhcpOptions;
    addDomainNameServers(value: string, index?: number): string;
    getDomainName(): string;
    setDomainName(value: string): DhcpOptions;
    clearNtpServersList(): void;
    getNtpServersList(): Array<string>;
    setNtpServersList(value: Array<string>): DhcpOptions;
    addNtpServers(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DhcpOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DhcpOptions): DhcpOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DhcpOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DhcpOptions;
    static deserializeBinaryFromReader(message: DhcpOptions, reader: jspb.BinaryReader): DhcpOptions;
}

export namespace DhcpOptions {
    export type AsObject = {
        domainNameServersList: Array<string>,
        domainName: string,
        ntpServersList: Array<string>,
    }
}

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
}
