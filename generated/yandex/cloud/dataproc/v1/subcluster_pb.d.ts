// package: yandex.cloud.dataproc.v1
// file: yandex/cloud/dataproc/v1/subcluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_dataproc_v1_common_pb from "../../../../yandex/cloud/dataproc/v1/common_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class AutoscalingConfig extends jspb.Message { 
    getMaxHostsCount(): number;
    setMaxHostsCount(value: number): AutoscalingConfig;
    getPreemptible(): boolean;
    setPreemptible(value: boolean): AutoscalingConfig;

    hasMeasurementDuration(): boolean;
    clearMeasurementDuration(): void;
    getMeasurementDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMeasurementDuration(value?: google_protobuf_duration_pb.Duration): AutoscalingConfig;

    hasWarmupDuration(): boolean;
    clearWarmupDuration(): void;
    getWarmupDuration(): google_protobuf_duration_pb.Duration | undefined;
    setWarmupDuration(value?: google_protobuf_duration_pb.Duration): AutoscalingConfig;

    hasStabilizationDuration(): boolean;
    clearStabilizationDuration(): void;
    getStabilizationDuration(): google_protobuf_duration_pb.Duration | undefined;
    setStabilizationDuration(value?: google_protobuf_duration_pb.Duration): AutoscalingConfig;
    getCpuUtilizationTarget(): number;
    setCpuUtilizationTarget(value: number): AutoscalingConfig;
    getDecommissionTimeout(): number;
    setDecommissionTimeout(value: number): AutoscalingConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AutoscalingConfig.AsObject;
    static toObject(includeInstance: boolean, msg: AutoscalingConfig): AutoscalingConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AutoscalingConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AutoscalingConfig;
    static deserializeBinaryFromReader(message: AutoscalingConfig, reader: jspb.BinaryReader): AutoscalingConfig;
}

export namespace AutoscalingConfig {
    export type AsObject = {
        maxHostsCount: number,
        preemptible: boolean,
        measurementDuration?: google_protobuf_duration_pb.Duration.AsObject,
        warmupDuration?: google_protobuf_duration_pb.Duration.AsObject,
        stabilizationDuration?: google_protobuf_duration_pb.Duration.AsObject,
        cpuUtilizationTarget: number,
        decommissionTimeout: number,
    }
}

export class Subcluster extends jspb.Message { 
    getId(): string;
    setId(value: string): Subcluster;
    getClusterId(): string;
    setClusterId(value: string): Subcluster;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Subcluster;
    getName(): string;
    setName(value: string): Subcluster;
    getRole(): Role;
    setRole(value: Role): Subcluster;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_dataproc_v1_common_pb.Resources | undefined;
    setResources(value?: yandex_cloud_dataproc_v1_common_pb.Resources): Subcluster;
    getSubnetId(): string;
    setSubnetId(value: string): Subcluster;
    getHostsCount(): number;
    setHostsCount(value: number): Subcluster;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): Subcluster;

    hasAutoscalingConfig(): boolean;
    clearAutoscalingConfig(): void;
    getAutoscalingConfig(): AutoscalingConfig | undefined;
    setAutoscalingConfig(value?: AutoscalingConfig): Subcluster;
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): Subcluster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subcluster.AsObject;
    static toObject(includeInstance: boolean, msg: Subcluster): Subcluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subcluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subcluster;
    static deserializeBinaryFromReader(message: Subcluster, reader: jspb.BinaryReader): Subcluster;
}

export namespace Subcluster {
    export type AsObject = {
        id: string,
        clusterId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        role: Role,
        resources?: yandex_cloud_dataproc_v1_common_pb.Resources.AsObject,
        subnetId: string,
        hostsCount: number,
        assignPublicIp: boolean,
        autoscalingConfig?: AutoscalingConfig.AsObject,
        instanceGroupId: string,
    }
}

export class Host extends jspb.Message { 
    getName(): string;
    setName(value: string): Host;
    getSubclusterId(): string;
    setSubclusterId(value: string): Host;
    getHealth(): yandex_cloud_dataproc_v1_common_pb.Health;
    setHealth(value: yandex_cloud_dataproc_v1_common_pb.Health): Host;
    getComputeInstanceId(): string;
    setComputeInstanceId(value: string): Host;
    getRole(): Role;
    setRole(value: Role): Host;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Host.AsObject;
    static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Host;
    static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
    export type AsObject = {
        name: string,
        subclusterId: string,
        health: yandex_cloud_dataproc_v1_common_pb.Health,
        computeInstanceId: string,
        role: Role,
    }
}

export enum Role {
    ROLE_UNSPECIFIED = 0,
    MASTERNODE = 1,
    DATANODE = 2,
    COMPUTENODE = 3,
}
