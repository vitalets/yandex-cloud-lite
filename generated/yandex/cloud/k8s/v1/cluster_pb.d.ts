// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_k8s_v1_maintenance_pb from "../../../../yandex/cloud/k8s/v1/maintenance_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class Cluster extends jspb.Message { 
    getId(): string;
    setId(value: string): Cluster;
    getFolderId(): string;
    setFolderId(value: string): Cluster;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
    getName(): string;
    setName(value: string): Cluster;
    getDescription(): string;
    setDescription(value: string): Cluster;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): Cluster.Status;
    setStatus(value: Cluster.Status): Cluster;
    getHealth(): Cluster.Health;
    setHealth(value: Cluster.Health): Cluster;
    getNetworkId(): string;
    setNetworkId(value: string): Cluster;

    hasMaster(): boolean;
    clearMaster(): void;
    getMaster(): Master | undefined;
    setMaster(value?: Master): Cluster;

    hasIpAllocationPolicy(): boolean;
    clearIpAllocationPolicy(): void;
    getIpAllocationPolicy(): IPAllocationPolicy | undefined;
    setIpAllocationPolicy(value?: IPAllocationPolicy): Cluster;

    hasGatewayIpv4Address(): boolean;
    clearGatewayIpv4Address(): void;
    getGatewayIpv4Address(): string;
    setGatewayIpv4Address(value: string): Cluster;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Cluster;
    getNodeServiceAccountId(): string;
    setNodeServiceAccountId(value: string): Cluster;
    getReleaseChannel(): ReleaseChannel;
    setReleaseChannel(value: ReleaseChannel): Cluster;

    hasNetworkPolicy(): boolean;
    clearNetworkPolicy(): void;
    getNetworkPolicy(): NetworkPolicy | undefined;
    setNetworkPolicy(value?: NetworkPolicy): Cluster;

    hasKmsProvider(): boolean;
    clearKmsProvider(): void;
    getKmsProvider(): KMSProvider | undefined;
    setKmsProvider(value?: KMSProvider): Cluster;
    getLogGroupId(): string;
    setLogGroupId(value: string): Cluster;

    hasCilium(): boolean;
    clearCilium(): void;
    getCilium(): Cilium | undefined;
    setCilium(value?: Cilium): Cluster;

    getInternetGatewayCase(): Cluster.InternetGatewayCase;
    getNetworkImplementationCase(): Cluster.NetworkImplementationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: Cluster.Status,
        health: Cluster.Health,
        networkId: string,
        master?: Master.AsObject,
        ipAllocationPolicy?: IPAllocationPolicy.AsObject,
        gatewayIpv4Address: string,
        serviceAccountId: string,
        nodeServiceAccountId: string,
        releaseChannel: ReleaseChannel,
        networkPolicy?: NetworkPolicy.AsObject,
        kmsProvider?: KMSProvider.AsObject,
        logGroupId: string,
        cilium?: Cilium.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PROVISIONING = 1,
    RUNNING = 2,
    RECONCILING = 3,
    STOPPING = 4,
    STOPPED = 5,
    DELETING = 6,
    STARTING = 7,
    }

    export enum Health {
    HEALTH_UNSPECIFIED = 0,
    HEALTHY = 1,
    UNHEALTHY = 2,
    }


    export enum InternetGatewayCase {
        INTERNET_GATEWAY_NOT_SET = 0,
        GATEWAY_IPV4_ADDRESS = 12,
    }

    export enum NetworkImplementationCase {
        NETWORK_IMPLEMENTATION_NOT_SET = 0,
        CILIUM = 19,
    }

}

export class Master extends jspb.Message { 

    hasZonalMaster(): boolean;
    clearZonalMaster(): void;
    getZonalMaster(): ZonalMaster | undefined;
    setZonalMaster(value?: ZonalMaster): Master;

    hasRegionalMaster(): boolean;
    clearRegionalMaster(): void;
    getRegionalMaster(): RegionalMaster | undefined;
    setRegionalMaster(value?: RegionalMaster): Master;
    getVersion(): string;
    setVersion(value: string): Master;

    hasEndpoints(): boolean;
    clearEndpoints(): void;
    getEndpoints(): MasterEndpoints | undefined;
    setEndpoints(value?: MasterEndpoints): Master;

    hasMasterAuth(): boolean;
    clearMasterAuth(): void;
    getMasterAuth(): MasterAuth | undefined;
    setMasterAuth(value?: MasterAuth): Master;

    hasVersionInfo(): boolean;
    clearVersionInfo(): void;
    getVersionInfo(): yandex_cloud_k8s_v1_version_pb.VersionInfo | undefined;
    setVersionInfo(value?: yandex_cloud_k8s_v1_version_pb.VersionInfo): Master;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): MasterMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: MasterMaintenancePolicy): Master;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): Master;
    addSecurityGroupIds(value: string, index?: number): string;

    getMasterTypeCase(): Master.MasterTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Master.AsObject;
    static toObject(includeInstance: boolean, msg: Master): Master.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Master, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Master;
    static deserializeBinaryFromReader(message: Master, reader: jspb.BinaryReader): Master;
}

export namespace Master {
    export type AsObject = {
        zonalMaster?: ZonalMaster.AsObject,
        regionalMaster?: RegionalMaster.AsObject,
        version: string,
        endpoints?: MasterEndpoints.AsObject,
        masterAuth?: MasterAuth.AsObject,
        versionInfo?: yandex_cloud_k8s_v1_version_pb.VersionInfo.AsObject,
        maintenancePolicy?: MasterMaintenancePolicy.AsObject,
        securityGroupIdsList: Array<string>,
    }

    export enum MasterTypeCase {
        MASTER_TYPE_NOT_SET = 0,
        ZONAL_MASTER = 1,
        REGIONAL_MASTER = 7,
    }

}

export class MasterAuth extends jspb.Message { 
    getClusterCaCertificate(): string;
    setClusterCaCertificate(value: string): MasterAuth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterAuth.AsObject;
    static toObject(includeInstance: boolean, msg: MasterAuth): MasterAuth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterAuth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterAuth;
    static deserializeBinaryFromReader(message: MasterAuth, reader: jspb.BinaryReader): MasterAuth;
}

export namespace MasterAuth {
    export type AsObject = {
        clusterCaCertificate: string,
    }
}

export class ZonalMaster extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): ZonalMaster;
    getInternalV4Address(): string;
    setInternalV4Address(value: string): ZonalMaster;
    getExternalV4Address(): string;
    setExternalV4Address(value: string): ZonalMaster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZonalMaster.AsObject;
    static toObject(includeInstance: boolean, msg: ZonalMaster): ZonalMaster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZonalMaster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZonalMaster;
    static deserializeBinaryFromReader(message: ZonalMaster, reader: jspb.BinaryReader): ZonalMaster;
}

export namespace ZonalMaster {
    export type AsObject = {
        zoneId: string,
        internalV4Address: string,
        externalV4Address: string,
    }
}

export class RegionalMaster extends jspb.Message { 
    getRegionId(): string;
    setRegionId(value: string): RegionalMaster;
    getInternalV4Address(): string;
    setInternalV4Address(value: string): RegionalMaster;
    getExternalV4Address(): string;
    setExternalV4Address(value: string): RegionalMaster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegionalMaster.AsObject;
    static toObject(includeInstance: boolean, msg: RegionalMaster): RegionalMaster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegionalMaster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegionalMaster;
    static deserializeBinaryFromReader(message: RegionalMaster, reader: jspb.BinaryReader): RegionalMaster;
}

export namespace RegionalMaster {
    export type AsObject = {
        regionId: string,
        internalV4Address: string,
        externalV4Address: string,
    }
}

export class MasterEndpoints extends jspb.Message { 
    getInternalV4Endpoint(): string;
    setInternalV4Endpoint(value: string): MasterEndpoints;
    getExternalV4Endpoint(): string;
    setExternalV4Endpoint(value: string): MasterEndpoints;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterEndpoints.AsObject;
    static toObject(includeInstance: boolean, msg: MasterEndpoints): MasterEndpoints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterEndpoints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterEndpoints;
    static deserializeBinaryFromReader(message: MasterEndpoints, reader: jspb.BinaryReader): MasterEndpoints;
}

export namespace MasterEndpoints {
    export type AsObject = {
        internalV4Endpoint: string,
        externalV4Endpoint: string,
    }
}

export class IPAllocationPolicy extends jspb.Message { 
    getClusterIpv4CidrBlock(): string;
    setClusterIpv4CidrBlock(value: string): IPAllocationPolicy;
    getNodeIpv4CidrMaskSize(): number;
    setNodeIpv4CidrMaskSize(value: number): IPAllocationPolicy;
    getServiceIpv4CidrBlock(): string;
    setServiceIpv4CidrBlock(value: string): IPAllocationPolicy;
    getClusterIpv6CidrBlock(): string;
    setClusterIpv6CidrBlock(value: string): IPAllocationPolicy;
    getServiceIpv6CidrBlock(): string;
    setServiceIpv6CidrBlock(value: string): IPAllocationPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IPAllocationPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: IPAllocationPolicy): IPAllocationPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IPAllocationPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IPAllocationPolicy;
    static deserializeBinaryFromReader(message: IPAllocationPolicy, reader: jspb.BinaryReader): IPAllocationPolicy;
}

export namespace IPAllocationPolicy {
    export type AsObject = {
        clusterIpv4CidrBlock: string,
        nodeIpv4CidrMaskSize: number,
        serviceIpv4CidrBlock: string,
        clusterIpv6CidrBlock: string,
        serviceIpv6CidrBlock: string,
    }
}

export class MasterMaintenancePolicy extends jspb.Message { 
    getAutoUpgrade(): boolean;
    setAutoUpgrade(value: boolean): MasterMaintenancePolicy;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow): MasterMaintenancePolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MasterMaintenancePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: MasterMaintenancePolicy): MasterMaintenancePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MasterMaintenancePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MasterMaintenancePolicy;
    static deserializeBinaryFromReader(message: MasterMaintenancePolicy, reader: jspb.BinaryReader): MasterMaintenancePolicy;
}

export namespace MasterMaintenancePolicy {
    export type AsObject = {
        autoUpgrade: boolean,
        maintenanceWindow?: yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow.AsObject,
    }
}

export class NetworkPolicy extends jspb.Message { 
    getProvider(): NetworkPolicy.Provider;
    setProvider(value: NetworkPolicy.Provider): NetworkPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkPolicy): NetworkPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkPolicy;
    static deserializeBinaryFromReader(message: NetworkPolicy, reader: jspb.BinaryReader): NetworkPolicy;
}

export namespace NetworkPolicy {
    export type AsObject = {
        provider: NetworkPolicy.Provider,
    }

    export enum Provider {
    PROVIDER_UNSPECIFIED = 0,
    CALICO = 1,
    }

}

export class KMSProvider extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): KMSProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KMSProvider.AsObject;
    static toObject(includeInstance: boolean, msg: KMSProvider): KMSProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KMSProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KMSProvider;
    static deserializeBinaryFromReader(message: KMSProvider, reader: jspb.BinaryReader): KMSProvider;
}

export namespace KMSProvider {
    export type AsObject = {
        keyId: string,
    }
}

export class Cilium extends jspb.Message { 
    getRoutingMode(): Cilium.RoutingMode;
    setRoutingMode(value: Cilium.RoutingMode): Cilium;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cilium.AsObject;
    static toObject(includeInstance: boolean, msg: Cilium): Cilium.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cilium, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cilium;
    static deserializeBinaryFromReader(message: Cilium, reader: jspb.BinaryReader): Cilium;
}

export namespace Cilium {
    export type AsObject = {
        routingMode: Cilium.RoutingMode,
    }

    export enum RoutingMode {
    ROUTING_MODE_UNSPECIFIED = 0,
    TUNNEL = 1,
    }

}

export enum ReleaseChannel {
    RELEASE_CHANNEL_UNSPECIFIED = 0,
    RAPID = 1,
    REGULAR = 2,
    STABLE = 3,
}
