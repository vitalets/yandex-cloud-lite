// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/node.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class Node extends jspb.Message { 
    getStatus(): Node.Status;
    setStatus(value: Node.Status): Node;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): Node.Spec | undefined;
    setSpec(value?: Node.Spec): Node;

    hasCloudStatus(): boolean;
    clearCloudStatus(): void;
    getCloudStatus(): Node.CloudStatus | undefined;
    setCloudStatus(value?: Node.CloudStatus): Node;

    hasKubernetesStatus(): boolean;
    clearKubernetesStatus(): void;
    getKubernetesStatus(): Node.KubernetesStatus | undefined;
    setKubernetesStatus(value?: Node.KubernetesStatus): Node;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Node.AsObject;
    static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Node;
    static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
    export type AsObject = {
        status: Node.Status,
        spec?: Node.Spec.AsObject,
        cloudStatus?: Node.CloudStatus.AsObject,
        kubernetesStatus?: Node.KubernetesStatus.AsObject,
    }


    export class KubernetesStatus extends jspb.Message { 
        getId(): string;
        setId(value: string): KubernetesStatus;
        clearConditionsList(): void;
        getConditionsList(): Array<Condition>;
        setConditionsList(value: Array<Condition>): KubernetesStatus;
        addConditions(value?: Condition, index?: number): Condition;
        clearTaintsList(): void;
        getTaintsList(): Array<Taint>;
        setTaintsList(value: Array<Taint>): KubernetesStatus;
        addTaints(value?: Taint, index?: number): Taint;
        clearAttachedVolumesList(): void;
        getAttachedVolumesList(): Array<AttachedVolume>;
        setAttachedVolumesList(value: Array<AttachedVolume>): KubernetesStatus;
        addAttachedVolumes(value?: AttachedVolume, index?: number): AttachedVolume;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KubernetesStatus.AsObject;
        static toObject(includeInstance: boolean, msg: KubernetesStatus): KubernetesStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KubernetesStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KubernetesStatus;
        static deserializeBinaryFromReader(message: KubernetesStatus, reader: jspb.BinaryReader): KubernetesStatus;
    }

    export namespace KubernetesStatus {
        export type AsObject = {
            id: string,
            conditionsList: Array<Condition.AsObject>,
            taintsList: Array<Taint.AsObject>,
            attachedVolumesList: Array<AttachedVolume.AsObject>,
        }
    }

    export class CloudStatus extends jspb.Message { 
        getId(): string;
        setId(value: string): CloudStatus;
        getStatus(): string;
        setStatus(value: string): CloudStatus;
        getStatusMessage(): string;
        setStatusMessage(value: string): CloudStatus;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CloudStatus.AsObject;
        static toObject(includeInstance: boolean, msg: CloudStatus): CloudStatus.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CloudStatus, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CloudStatus;
        static deserializeBinaryFromReader(message: CloudStatus, reader: jspb.BinaryReader): CloudStatus;
    }

    export namespace CloudStatus {
        export type AsObject = {
            id: string,
            status: string,
            statusMessage: string,
        }
    }

    export class Spec extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): ResourcesSpec | undefined;
        setResources(value?: ResourcesSpec): Spec;

        hasDisk(): boolean;
        clearDisk(): void;
        getDisk(): DiskSpec | undefined;
        setDisk(value?: DiskSpec): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            resources?: ResourcesSpec.AsObject,
            disk?: DiskSpec.AsObject,
        }
    }


    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    NOT_CONNECTED = 2,
    NOT_READY = 3,
    READY = 4,
    MISSING = 5,
    }

}

export class Condition extends jspb.Message { 
    getType(): string;
    setType(value: string): Condition;
    getStatus(): string;
    setStatus(value: string): Condition;
    getMessage(): string;
    setMessage(value: string): Condition;

    hasLastHeartbeatTime(): boolean;
    clearLastHeartbeatTime(): void;
    getLastHeartbeatTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastHeartbeatTime(value?: google_protobuf_timestamp_pb.Timestamp): Condition;

    hasLastTransitionTime(): boolean;
    clearLastTransitionTime(): void;
    getLastTransitionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastTransitionTime(value?: google_protobuf_timestamp_pb.Timestamp): Condition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
    export type AsObject = {
        type: string,
        status: string,
        message: string,
        lastHeartbeatTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastTransitionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Taint extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Taint;
    getValue(): string;
    setValue(value: string): Taint;
    getEffect(): Taint.Effect;
    setEffect(value: Taint.Effect): Taint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Taint.AsObject;
    static toObject(includeInstance: boolean, msg: Taint): Taint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Taint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Taint;
    static deserializeBinaryFromReader(message: Taint, reader: jspb.BinaryReader): Taint;
}

export namespace Taint {
    export type AsObject = {
        key: string,
        value: string,
        effect: Taint.Effect,
    }

    export enum Effect {
    EFFECT_UNSPECIFIED = 0,
    NO_SCHEDULE = 1,
    PREFER_NO_SCHEDULE = 2,
    NO_EXECUTE = 3,
    }

}

export class AttachedVolume extends jspb.Message { 
    getDriverName(): string;
    setDriverName(value: string): AttachedVolume;
    getVolumeHandle(): string;
    setVolumeHandle(value: string): AttachedVolume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedVolume.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedVolume): AttachedVolume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedVolume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedVolume;
    static deserializeBinaryFromReader(message: AttachedVolume, reader: jspb.BinaryReader): AttachedVolume;
}

export namespace AttachedVolume {
    export type AsObject = {
        driverName: string,
        volumeHandle: string,
    }
}

export class NodeTemplate extends jspb.Message { 
    getPlatformId(): string;
    setPlatformId(value: string): NodeTemplate;

    hasResourcesSpec(): boolean;
    clearResourcesSpec(): void;
    getResourcesSpec(): ResourcesSpec | undefined;
    setResourcesSpec(value?: ResourcesSpec): NodeTemplate;

    hasBootDiskSpec(): boolean;
    clearBootDiskSpec(): void;
    getBootDiskSpec(): DiskSpec | undefined;
    setBootDiskSpec(value?: DiskSpec): NodeTemplate;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasV4AddressSpec(): boolean;
    clearV4AddressSpec(): void;
    getV4AddressSpec(): NodeAddressSpec | undefined;
    setV4AddressSpec(value?: NodeAddressSpec): NodeTemplate;

    hasSchedulingPolicy(): boolean;
    clearSchedulingPolicy(): void;
    getSchedulingPolicy(): SchedulingPolicy | undefined;
    setSchedulingPolicy(value?: SchedulingPolicy): NodeTemplate;
    clearNetworkInterfaceSpecsList(): void;
    getNetworkInterfaceSpecsList(): Array<NetworkInterfaceSpec>;
    setNetworkInterfaceSpecsList(value: Array<NetworkInterfaceSpec>): NodeTemplate;
    addNetworkInterfaceSpecs(value?: NetworkInterfaceSpec, index?: number): NetworkInterfaceSpec;

    hasPlacementPolicy(): boolean;
    clearPlacementPolicy(): void;
    getPlacementPolicy(): PlacementPolicy | undefined;
    setPlacementPolicy(value?: PlacementPolicy): NodeTemplate;

    hasNetworkSettings(): boolean;
    clearNetworkSettings(): void;
    getNetworkSettings(): NodeTemplate.NetworkSettings | undefined;
    setNetworkSettings(value?: NodeTemplate.NetworkSettings): NodeTemplate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: NodeTemplate): NodeTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeTemplate;
    static deserializeBinaryFromReader(message: NodeTemplate, reader: jspb.BinaryReader): NodeTemplate;
}

export namespace NodeTemplate {
    export type AsObject = {
        platformId: string,
        resourcesSpec?: ResourcesSpec.AsObject,
        bootDiskSpec?: DiskSpec.AsObject,

        metadataMap: Array<[string, string]>,
        v4AddressSpec?: NodeAddressSpec.AsObject,
        schedulingPolicy?: SchedulingPolicy.AsObject,
        networkInterfaceSpecsList: Array<NetworkInterfaceSpec.AsObject>,
        placementPolicy?: PlacementPolicy.AsObject,
        networkSettings?: NodeTemplate.NetworkSettings.AsObject,
    }


    export class NetworkSettings extends jspb.Message { 
        getType(): NodeTemplate.NetworkSettings.Type;
        setType(value: NodeTemplate.NetworkSettings.Type): NetworkSettings;

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
            type: NodeTemplate.NetworkSettings.Type,
        }

        export enum Type {
    TYPE_UNSPECIFIED = 0,
    STANDARD = 1,
    SOFTWARE_ACCELERATED = 2,
        }

    }

}

export class NetworkInterfaceSpec extends jspb.Message { 
    clearSubnetIdsList(): void;
    getSubnetIdsList(): Array<string>;
    setSubnetIdsList(value: Array<string>): NetworkInterfaceSpec;
    addSubnetIds(value: string, index?: number): string;

    hasPrimaryV4AddressSpec(): boolean;
    clearPrimaryV4AddressSpec(): void;
    getPrimaryV4AddressSpec(): NodeAddressSpec | undefined;
    setPrimaryV4AddressSpec(value?: NodeAddressSpec): NetworkInterfaceSpec;

    hasPrimaryV6AddressSpec(): boolean;
    clearPrimaryV6AddressSpec(): void;
    getPrimaryV6AddressSpec(): NodeAddressSpec | undefined;
    setPrimaryV6AddressSpec(value?: NodeAddressSpec): NetworkInterfaceSpec;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): NetworkInterfaceSpec;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceSpec.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceSpec): NetworkInterfaceSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceSpec;
    static deserializeBinaryFromReader(message: NetworkInterfaceSpec, reader: jspb.BinaryReader): NetworkInterfaceSpec;
}

export namespace NetworkInterfaceSpec {
    export type AsObject = {
        subnetIdsList: Array<string>,
        primaryV4AddressSpec?: NodeAddressSpec.AsObject,
        primaryV6AddressSpec?: NodeAddressSpec.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class NodeAddressSpec extends jspb.Message { 

    hasOneToOneNatSpec(): boolean;
    clearOneToOneNatSpec(): void;
    getOneToOneNatSpec(): OneToOneNatSpec | undefined;
    setOneToOneNatSpec(value?: OneToOneNatSpec): NodeAddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: NodeAddressSpec): NodeAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeAddressSpec;
    static deserializeBinaryFromReader(message: NodeAddressSpec, reader: jspb.BinaryReader): NodeAddressSpec;
}

export namespace NodeAddressSpec {
    export type AsObject = {
        oneToOneNatSpec?: OneToOneNatSpec.AsObject,
    }
}

export class OneToOneNatSpec extends jspb.Message { 
    getIpVersion(): IpVersion;
    setIpVersion(value: IpVersion): OneToOneNatSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneToOneNatSpec.AsObject;
    static toObject(includeInstance: boolean, msg: OneToOneNatSpec): OneToOneNatSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneToOneNatSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneToOneNatSpec;
    static deserializeBinaryFromReader(message: OneToOneNatSpec, reader: jspb.BinaryReader): OneToOneNatSpec;
}

export namespace OneToOneNatSpec {
    export type AsObject = {
        ipVersion: IpVersion,
    }
}

export class ResourcesSpec extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): ResourcesSpec;
    getCores(): number;
    setCores(value: number): ResourcesSpec;
    getCoreFraction(): number;
    setCoreFraction(value: number): ResourcesSpec;
    getGpus(): number;
    setGpus(value: number): ResourcesSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcesSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcesSpec): ResourcesSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourcesSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcesSpec;
    static deserializeBinaryFromReader(message: ResourcesSpec, reader: jspb.BinaryReader): ResourcesSpec;
}

export namespace ResourcesSpec {
    export type AsObject = {
        memory: number,
        cores: number,
        coreFraction: number,
        gpus: number,
    }
}

export class DiskSpec extends jspb.Message { 
    getDiskTypeId(): string;
    setDiskTypeId(value: string): DiskSpec;
    getDiskSize(): number;
    setDiskSize(value: number): DiskSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskSpec.AsObject;
    static toObject(includeInstance: boolean, msg: DiskSpec): DiskSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskSpec;
    static deserializeBinaryFromReader(message: DiskSpec, reader: jspb.BinaryReader): DiskSpec;
}

export namespace DiskSpec {
    export type AsObject = {
        diskTypeId: string,
        diskSize: number,
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

export class PlacementPolicy extends jspb.Message { 
    getPlacementGroupId(): string;
    setPlacementGroupId(value: string): PlacementPolicy;

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
    }
}

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
}
