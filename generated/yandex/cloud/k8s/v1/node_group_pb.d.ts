// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/node_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_k8s_v1_maintenance_pb from "../../../../yandex/cloud/k8s/v1/maintenance_pb";
import * as yandex_cloud_k8s_v1_node_pb from "../../../../yandex/cloud/k8s/v1/node_pb";
import * as yandex_cloud_k8s_v1_version_pb from "../../../../yandex/cloud/k8s/v1/version_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class NodeGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): NodeGroup;
    getClusterId(): string;
    setClusterId(value: string): NodeGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NodeGroup;
    getName(): string;
    setName(value: string): NodeGroup;
    getDescription(): string;
    setDescription(value: string): NodeGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getStatus(): NodeGroup.Status;
    setStatus(value: NodeGroup.Status): NodeGroup;

    hasNodeTemplate(): boolean;
    clearNodeTemplate(): void;
    getNodeTemplate(): yandex_cloud_k8s_v1_node_pb.NodeTemplate | undefined;
    setNodeTemplate(value?: yandex_cloud_k8s_v1_node_pb.NodeTemplate): NodeGroup;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): ScalePolicy | undefined;
    setScalePolicy(value?: ScalePolicy): NodeGroup;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): NodeGroupAllocationPolicy | undefined;
    setAllocationPolicy(value?: NodeGroupAllocationPolicy): NodeGroup;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): DeployPolicy | undefined;
    setDeployPolicy(value?: DeployPolicy): NodeGroup;
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): NodeGroup;
    getNodeVersion(): string;
    setNodeVersion(value: string): NodeGroup;

    hasVersionInfo(): boolean;
    clearVersionInfo(): void;
    getVersionInfo(): yandex_cloud_k8s_v1_version_pb.VersionInfo | undefined;
    setVersionInfo(value?: yandex_cloud_k8s_v1_version_pb.VersionInfo): NodeGroup;

    hasMaintenancePolicy(): boolean;
    clearMaintenancePolicy(): void;
    getMaintenancePolicy(): NodeGroupMaintenancePolicy | undefined;
    setMaintenancePolicy(value?: NodeGroupMaintenancePolicy): NodeGroup;
    clearAllowedUnsafeSysctlsList(): void;
    getAllowedUnsafeSysctlsList(): Array<string>;
    setAllowedUnsafeSysctlsList(value: Array<string>): NodeGroup;
    addAllowedUnsafeSysctls(value: string, index?: number): string;
    clearNodeTaintsList(): void;
    getNodeTaintsList(): Array<yandex_cloud_k8s_v1_node_pb.Taint>;
    setNodeTaintsList(value: Array<yandex_cloud_k8s_v1_node_pb.Taint>): NodeGroup;
    addNodeTaints(value?: yandex_cloud_k8s_v1_node_pb.Taint, index?: number): yandex_cloud_k8s_v1_node_pb.Taint;

    getNodeLabelsMap(): jspb.Map<string, string>;
    clearNodeLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeGroup.AsObject;
    static toObject(includeInstance: boolean, msg: NodeGroup): NodeGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeGroup;
    static deserializeBinaryFromReader(message: NodeGroup, reader: jspb.BinaryReader): NodeGroup;
}

export namespace NodeGroup {
    export type AsObject = {
        id: string,
        clusterId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        status: NodeGroup.Status,
        nodeTemplate?: yandex_cloud_k8s_v1_node_pb.NodeTemplate.AsObject,
        scalePolicy?: ScalePolicy.AsObject,
        allocationPolicy?: NodeGroupAllocationPolicy.AsObject,
        deployPolicy?: DeployPolicy.AsObject,
        instanceGroupId: string,
        nodeVersion: string,
        versionInfo?: yandex_cloud_k8s_v1_version_pb.VersionInfo.AsObject,
        maintenancePolicy?: NodeGroupMaintenancePolicy.AsObject,
        allowedUnsafeSysctlsList: Array<string>,
        nodeTaintsList: Array<yandex_cloud_k8s_v1_node_pb.Taint.AsObject>,

        nodeLabelsMap: Array<[string, string]>,
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

}

export class ScalePolicy extends jspb.Message { 

    hasFixedScale(): boolean;
    clearFixedScale(): void;
    getFixedScale(): ScalePolicy.FixedScale | undefined;
    setFixedScale(value?: ScalePolicy.FixedScale): ScalePolicy;

    hasAutoScale(): boolean;
    clearAutoScale(): void;
    getAutoScale(): ScalePolicy.AutoScale | undefined;
    setAutoScale(value?: ScalePolicy.AutoScale): ScalePolicy;

    getScaleTypeCase(): ScalePolicy.ScaleTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: ScalePolicy): ScalePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalePolicy;
    static deserializeBinaryFromReader(message: ScalePolicy, reader: jspb.BinaryReader): ScalePolicy;
}

export namespace ScalePolicy {
    export type AsObject = {
        fixedScale?: ScalePolicy.FixedScale.AsObject,
        autoScale?: ScalePolicy.AutoScale.AsObject,
    }


    export class FixedScale extends jspb.Message { 
        getSize(): number;
        setSize(value: number): FixedScale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FixedScale.AsObject;
        static toObject(includeInstance: boolean, msg: FixedScale): FixedScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FixedScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FixedScale;
        static deserializeBinaryFromReader(message: FixedScale, reader: jspb.BinaryReader): FixedScale;
    }

    export namespace FixedScale {
        export type AsObject = {
            size: number,
        }
    }

    export class AutoScale extends jspb.Message { 
        getMinSize(): number;
        setMinSize(value: number): AutoScale;
        getMaxSize(): number;
        setMaxSize(value: number): AutoScale;
        getInitialSize(): number;
        setInitialSize(value: number): AutoScale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AutoScale.AsObject;
        static toObject(includeInstance: boolean, msg: AutoScale): AutoScale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AutoScale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AutoScale;
        static deserializeBinaryFromReader(message: AutoScale, reader: jspb.BinaryReader): AutoScale;
    }

    export namespace AutoScale {
        export type AsObject = {
            minSize: number,
            maxSize: number,
            initialSize: number,
        }
    }


    export enum ScaleTypeCase {
        SCALE_TYPE_NOT_SET = 0,
        FIXED_SCALE = 1,
        AUTO_SCALE = 2,
    }

}

export class NodeGroupAllocationPolicy extends jspb.Message { 
    clearLocationsList(): void;
    getLocationsList(): Array<NodeGroupLocation>;
    setLocationsList(value: Array<NodeGroupLocation>): NodeGroupAllocationPolicy;
    addLocations(value?: NodeGroupLocation, index?: number): NodeGroupLocation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeGroupAllocationPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: NodeGroupAllocationPolicy): NodeGroupAllocationPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeGroupAllocationPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeGroupAllocationPolicy;
    static deserializeBinaryFromReader(message: NodeGroupAllocationPolicy, reader: jspb.BinaryReader): NodeGroupAllocationPolicy;
}

export namespace NodeGroupAllocationPolicy {
    export type AsObject = {
        locationsList: Array<NodeGroupLocation.AsObject>,
    }
}

export class NodeGroupLocation extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): NodeGroupLocation;
    getSubnetId(): string;
    setSubnetId(value: string): NodeGroupLocation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeGroupLocation.AsObject;
    static toObject(includeInstance: boolean, msg: NodeGroupLocation): NodeGroupLocation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeGroupLocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeGroupLocation;
    static deserializeBinaryFromReader(message: NodeGroupLocation, reader: jspb.BinaryReader): NodeGroupLocation;
}

export namespace NodeGroupLocation {
    export type AsObject = {
        zoneId: string,
        subnetId: string,
    }
}

export class NodeGroupMaintenancePolicy extends jspb.Message { 
    getAutoUpgrade(): boolean;
    setAutoUpgrade(value: boolean): NodeGroupMaintenancePolicy;
    getAutoRepair(): boolean;
    setAutoRepair(value: boolean): NodeGroupMaintenancePolicy;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow): NodeGroupMaintenancePolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeGroupMaintenancePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: NodeGroupMaintenancePolicy): NodeGroupMaintenancePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeGroupMaintenancePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeGroupMaintenancePolicy;
    static deserializeBinaryFromReader(message: NodeGroupMaintenancePolicy, reader: jspb.BinaryReader): NodeGroupMaintenancePolicy;
}

export namespace NodeGroupMaintenancePolicy {
    export type AsObject = {
        autoUpgrade: boolean,
        autoRepair: boolean,
        maintenanceWindow?: yandex_cloud_k8s_v1_maintenance_pb.MaintenanceWindow.AsObject,
    }
}

export class DeployPolicy extends jspb.Message { 
    getMaxUnavailable(): number;
    setMaxUnavailable(value: number): DeployPolicy;
    getMaxExpansion(): number;
    setMaxExpansion(value: number): DeployPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: DeployPolicy): DeployPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeployPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployPolicy;
    static deserializeBinaryFromReader(message: DeployPolicy, reader: jspb.BinaryReader): DeployPolicy;
}

export namespace DeployPolicy {
    export type AsObject = {
        maxUnavailable: number,
        maxExpansion: number,
    }
}
