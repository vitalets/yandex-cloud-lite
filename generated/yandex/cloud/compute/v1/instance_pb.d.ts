// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/instance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Instance extends jspb.Message { 
    getId(): string;
    setId(value: string): Instance;
    getFolderId(): string;
    setFolderId(value: string): Instance;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
    getName(): string;
    setName(value: string): Instance;
    getDescription(): string;
    setDescription(value: string): Instance;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): Instance;
    getPlatformId(): string;
    setPlatformId(value: string): Instance;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Instance;
    getStatus(): Instance.Status;
    setStatus(value: Instance.Status): Instance;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasBootDisk(): boolean;
    clearBootDisk(): void;
    getBootDisk(): AttachedDisk | undefined;
    setBootDisk(value?: AttachedDisk): Instance;
    clearSecondaryDisksList(): void;
    getSecondaryDisksList(): Array<AttachedDisk>;
    setSecondaryDisksList(value: Array<AttachedDisk>): Instance;
    addSecondaryDisks(value?: AttachedDisk, index?: number): AttachedDisk;
    clearFilesystemsList(): void;
    getFilesystemsList(): Array<AttachedFilesystem>;
    setFilesystemsList(value: Array<AttachedFilesystem>): Instance;
    addFilesystems(value?: AttachedFilesystem, index?: number): AttachedFilesystem;
    clearNetworkInterfacesList(): void;
    getNetworkInterfacesList(): Array<NetworkInterface>;
    setNetworkInterfacesList(value: Array<NetworkInterface>): Instance;
    addNetworkInterfaces(value?: NetworkInterface, index?: number): NetworkInterface;
    getFqdn(): string;
    setFqdn(value: string): Instance;

    hasSchedulingPolicy(): boolean;
    clearSchedulingPolicy(): void;
    getSchedulingPolicy(): SchedulingPolicy | undefined;
    setSchedulingPolicy(value?: SchedulingPolicy): Instance;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Instance;

    hasNetworkSettings(): boolean;
    clearNetworkSettings(): void;
    getNetworkSettings(): NetworkSettings | undefined;
    setNetworkSettings(value?: NetworkSettings): Instance;

    hasPlacementPolicy(): boolean;
    clearPlacementPolicy(): void;
    getPlacementPolicy(): PlacementPolicy | undefined;
    setPlacementPolicy(value?: PlacementPolicy): Instance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instance.AsObject;
    static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instance;
    static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        platformId: string,
        resources?: Resources.AsObject,
        status: Instance.Status,

        metadataMap: Array<[string, string]>,
        bootDisk?: AttachedDisk.AsObject,
        secondaryDisksList: Array<AttachedDisk.AsObject>,
        filesystemsList: Array<AttachedFilesystem.AsObject>,
        networkInterfacesList: Array<NetworkInterface.AsObject>,
        fqdn: string,
        schedulingPolicy?: SchedulingPolicy.AsObject,
        serviceAccountId: string,
        networkSettings?: NetworkSettings.AsObject,
        placementPolicy?: PlacementPolicy.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    STOPPING = 3,
    STOPPED = 4,
    STARTING = 5,
    RESTARTING = 6,
    UPDATING = 7,
    ERROR = 8,
    CRASHED = 9,
    DELETING = 10,
    }

}

export class Resources extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): Resources;
    getCores(): number;
    setCores(value: number): Resources;
    getCoreFraction(): number;
    setCoreFraction(value: number): Resources;
    getGpus(): number;
    setGpus(value: number): Resources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
    export type AsObject = {
        memory: number,
        cores: number,
        coreFraction: number,
        gpus: number,
    }
}

export class AttachedDisk extends jspb.Message { 
    getMode(): AttachedDisk.Mode;
    setMode(value: AttachedDisk.Mode): AttachedDisk;
    getDeviceName(): string;
    setDeviceName(value: string): AttachedDisk;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AttachedDisk;
    getDiskId(): string;
    setDiskId(value: string): AttachedDisk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedDisk.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedDisk): AttachedDisk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedDisk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedDisk;
    static deserializeBinaryFromReader(message: AttachedDisk, reader: jspb.BinaryReader): AttachedDisk;
}

export namespace AttachedDisk {
    export type AsObject = {
        mode: AttachedDisk.Mode,
        deviceName: string,
        autoDelete: boolean,
        diskId: string,
    }

    export enum Mode {
    MODE_UNSPECIFIED = 0,
    READ_ONLY = 1,
    READ_WRITE = 2,
    }

}

export class AttachedFilesystem extends jspb.Message { 
    getMode(): AttachedFilesystem.Mode;
    setMode(value: AttachedFilesystem.Mode): AttachedFilesystem;
    getDeviceName(): string;
    setDeviceName(value: string): AttachedFilesystem;
    getFilesystemId(): string;
    setFilesystemId(value: string): AttachedFilesystem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedFilesystem.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedFilesystem): AttachedFilesystem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedFilesystem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedFilesystem;
    static deserializeBinaryFromReader(message: AttachedFilesystem, reader: jspb.BinaryReader): AttachedFilesystem;
}

export namespace AttachedFilesystem {
    export type AsObject = {
        mode: AttachedFilesystem.Mode,
        deviceName: string,
        filesystemId: string,
    }

    export enum Mode {
    MODE_UNSPECIFIED = 0,
    READ_ONLY = 1,
    READ_WRITE = 2,
    }

}

export class NetworkInterface extends jspb.Message { 
    getIndex(): string;
    setIndex(value: string): NetworkInterface;
    getMacAddress(): string;
    setMacAddress(value: string): NetworkInterface;
    getSubnetId(): string;
    setSubnetId(value: string): NetworkInterface;

    hasPrimaryV4Address(): boolean;
    clearPrimaryV4Address(): void;
    getPrimaryV4Address(): PrimaryAddress | undefined;
    setPrimaryV4Address(value?: PrimaryAddress): NetworkInterface;

    hasPrimaryV6Address(): boolean;
    clearPrimaryV6Address(): void;
    getPrimaryV6Address(): PrimaryAddress | undefined;
    setPrimaryV6Address(value?: PrimaryAddress): NetworkInterface;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): NetworkInterface;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterface.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterface): NetworkInterface.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterface, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterface;
    static deserializeBinaryFromReader(message: NetworkInterface, reader: jspb.BinaryReader): NetworkInterface;
}

export namespace NetworkInterface {
    export type AsObject = {
        index: string,
        macAddress: string,
        subnetId: string,
        primaryV4Address?: PrimaryAddress.AsObject,
        primaryV6Address?: PrimaryAddress.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class PrimaryAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): PrimaryAddress;

    hasOneToOneNat(): boolean;
    clearOneToOneNat(): void;
    getOneToOneNat(): OneToOneNat | undefined;
    setOneToOneNat(value?: OneToOneNat): PrimaryAddress;
    clearDnsRecordsList(): void;
    getDnsRecordsList(): Array<DnsRecord>;
    setDnsRecordsList(value: Array<DnsRecord>): PrimaryAddress;
    addDnsRecords(value?: DnsRecord, index?: number): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimaryAddress.AsObject;
    static toObject(includeInstance: boolean, msg: PrimaryAddress): PrimaryAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimaryAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimaryAddress;
    static deserializeBinaryFromReader(message: PrimaryAddress, reader: jspb.BinaryReader): PrimaryAddress;
}

export namespace PrimaryAddress {
    export type AsObject = {
        address: string,
        oneToOneNat?: OneToOneNat.AsObject,
        dnsRecordsList: Array<DnsRecord.AsObject>,
    }
}

export class OneToOneNat extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): OneToOneNat;
    getIpVersion(): IpVersion;
    setIpVersion(value: IpVersion): OneToOneNat;
    clearDnsRecordsList(): void;
    getDnsRecordsList(): Array<DnsRecord>;
    setDnsRecordsList(value: Array<DnsRecord>): OneToOneNat;
    addDnsRecords(value?: DnsRecord, index?: number): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneToOneNat.AsObject;
    static toObject(includeInstance: boolean, msg: OneToOneNat): OneToOneNat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneToOneNat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneToOneNat;
    static deserializeBinaryFromReader(message: OneToOneNat, reader: jspb.BinaryReader): OneToOneNat;
}

export namespace OneToOneNat {
    export type AsObject = {
        address: string,
        ipVersion: IpVersion,
        dnsRecordsList: Array<DnsRecord.AsObject>,
    }
}

export class DnsRecord extends jspb.Message { 
    getFqdn(): string;
    setFqdn(value: string): DnsRecord;
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DnsRecord;
    getTtl(): number;
    setTtl(value: number): DnsRecord;
    getPtr(): boolean;
    setPtr(value: boolean): DnsRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DnsRecord.AsObject;
    static toObject(includeInstance: boolean, msg: DnsRecord): DnsRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DnsRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DnsRecord;
    static deserializeBinaryFromReader(message: DnsRecord, reader: jspb.BinaryReader): DnsRecord;
}

export namespace DnsRecord {
    export type AsObject = {
        fqdn: string,
        dnsZoneId: string,
        ttl: number,
        ptr: boolean,
    }
}

export class SchedulingPolicy extends jspb.Message { 
    getPreemptible(): boolean;
    setPreemptible(value: boolean): SchedulingPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SchedulingPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: SchedulingPolicy): SchedulingPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SchedulingPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SchedulingPolicy;
    static deserializeBinaryFromReader(message: SchedulingPolicy, reader: jspb.BinaryReader): SchedulingPolicy;
}

export namespace SchedulingPolicy {
    export type AsObject = {
        preemptible: boolean,
    }
}

export class NetworkSettings extends jspb.Message { 
    getType(): NetworkSettings.Type;
    setType(value: NetworkSettings.Type): NetworkSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkSettings.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkSettings): NetworkSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkSettings;
    static deserializeBinaryFromReader(message: NetworkSettings, reader: jspb.BinaryReader): NetworkSettings;
}

export namespace NetworkSettings {
    export type AsObject = {
        type: NetworkSettings.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
    HARDWARE_ACCELERATED = 3,
    }

}

export class PlacementPolicy extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): PlacementPolicy;
    clearHostAffinityRulesList(): void;
    getHostAffinityRulesList(): Array<PlacementPolicy.HostAffinityRule>;
    setHostAffinityRulesList(value: Array<PlacementPolicy.HostAffinityRule>): PlacementPolicy;
    addHostAffinityRules(value?: PlacementPolicy.HostAffinityRule, index?: number): PlacementPolicy.HostAffinityRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementPolicy): PlacementPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementPolicy;
    static deserializeBinaryFromReader(message: PlacementPolicy, reader: jspb.BinaryReader): PlacementPolicy;
}

export namespace PlacementPolicy {
    export type AsObject = {
        placementGroupId: string,
        hostAffinityRulesList: Array<PlacementPolicy.HostAffinityRule.AsObject>,
    }


    export class HostAffinityRule extends jspb.Message { 
        getKey(): string;
        setKey(value: string): HostAffinityRule;
        getOp(): PlacementPolicy.HostAffinityRule.Operator;
        setOp(value: PlacementPolicy.HostAffinityRule.Operator): HostAffinityRule;
        clearValuesList(): void;
        getValuesList(): Array<string>;
        setValuesList(value: Array<string>): HostAffinityRule;
        addValues(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HostAffinityRule.AsObject;
        static toObject(includeInstance: boolean, msg: HostAffinityRule): HostAffinityRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HostAffinityRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HostAffinityRule;
        static deserializeBinaryFromReader(message: HostAffinityRule, reader: jspb.BinaryReader): HostAffinityRule;
    }

    export namespace HostAffinityRule {
        export type AsObject = {
            key: string,
            op: PlacementPolicy.HostAffinityRule.Operator,
            valuesList: Array<string>,
        }

        export enum Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
        }

    }

}

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
}
