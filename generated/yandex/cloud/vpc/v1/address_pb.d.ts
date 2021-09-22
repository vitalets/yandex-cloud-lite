// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/address.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class Address extends jspb.Message { 
    getId(): string;
    setId(value: string): Address;
    getFolderId(): string;
    setFolderId(value: string): Address;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Address;
    getName(): string;
    setName(value: string): Address;
    getDescription(): string;
    setDescription(value: string): Address;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasExternalIpv4Address(): boolean;
    clearExternalIpv4Address(): void;
    getExternalIpv4Address(): ExternalIpv4Address | undefined;
    setExternalIpv4Address(value?: ExternalIpv4Address): Address;
    getReserved(): boolean;
    setReserved(value: boolean): Address;
    getUsed(): boolean;
    setUsed(value: boolean): Address;
    getType(): Address.Type;
    setType(value: Address.Type): Address;
    getIpVersion(): Address.IpVersion;
    setIpVersion(value: Address.IpVersion): Address;

    getAddressCase(): Address.AddressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        externalIpv4Address?: ExternalIpv4Address.AsObject,
        reserved: boolean,
        used: boolean,
        type: Address.Type,
        ipVersion: Address.IpVersion,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    INTERNAL = 1,
    EXTERNAL = 2,
    }

    export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
    }


    export enum AddressCase {
        ADDRESS_NOT_SET = 0,
        EXTERNAL_IPV4_ADDRESS = 7,
    }

}

export class ExternalIpv4Address extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv4Address;
    getZoneId(): string;
    setZoneId(value: string): ExternalIpv4Address;

    hasRequirements(): boolean;
    clearRequirements(): void;
    getRequirements(): AddressRequirements | undefined;
    setRequirements(value?: AddressRequirements): ExternalIpv4Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv4Address.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv4Address): ExternalIpv4Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv4Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv4Address;
    static deserializeBinaryFromReader(message: ExternalIpv4Address, reader: jspb.BinaryReader): ExternalIpv4Address;
}

export namespace ExternalIpv4Address {
    export type AsObject = {
        address: string,
        zoneId: string,
        requirements?: AddressRequirements.AsObject,
    }
}

export class AddressRequirements extends jspb.Message { 
    getDdosProtectionProvider(): string;
    setDdosProtectionProvider(value: string): AddressRequirements;
    getOutgoingSmtpCapability(): string;
    setOutgoingSmtpCapability(value: string): AddressRequirements;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressRequirements.AsObject;
    static toObject(includeInstance: boolean, msg: AddressRequirements): AddressRequirements.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressRequirements, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressRequirements;
    static deserializeBinaryFromReader(message: AddressRequirements, reader: jspb.BinaryReader): AddressRequirements;
}

export namespace AddressRequirements {
    export type AsObject = {
        ddosProtectionProvider: string,
        outgoingSmtpCapability: string,
    }
}
