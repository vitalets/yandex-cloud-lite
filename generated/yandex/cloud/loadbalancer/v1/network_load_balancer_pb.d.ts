// package: yandex.cloud.loadbalancer.v1
// file: yandex/cloud/loadbalancer/v1/network_load_balancer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_loadbalancer_v1_health_check_pb from "../../../../yandex/cloud/loadbalancer/v1/health_check_pb";

export class NetworkLoadBalancer extends jspb.Message { 
    getId(): string;
    setId(value: string): NetworkLoadBalancer;
    getFolderId(): string;
    setFolderId(value: string): NetworkLoadBalancer;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NetworkLoadBalancer;
    getName(): string;
    setName(value: string): NetworkLoadBalancer;
    getDescription(): string;
    setDescription(value: string): NetworkLoadBalancer;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getRegionId(): string;
    setRegionId(value: string): NetworkLoadBalancer;
    getStatus(): NetworkLoadBalancer.Status;
    setStatus(value: NetworkLoadBalancer.Status): NetworkLoadBalancer;
    getType(): NetworkLoadBalancer.Type;
    setType(value: NetworkLoadBalancer.Type): NetworkLoadBalancer;
    getSessionAffinity(): NetworkLoadBalancer.SessionAffinity;
    setSessionAffinity(value: NetworkLoadBalancer.SessionAffinity): NetworkLoadBalancer;
    clearListenersList(): void;
    getListenersList(): Array<Listener>;
    setListenersList(value: Array<Listener>): NetworkLoadBalancer;
    addListeners(value?: Listener, index?: number): Listener;
    clearAttachedTargetGroupsList(): void;
    getAttachedTargetGroupsList(): Array<AttachedTargetGroup>;
    setAttachedTargetGroupsList(value: Array<AttachedTargetGroup>): NetworkLoadBalancer;
    addAttachedTargetGroups(value?: AttachedTargetGroup, index?: number): AttachedTargetGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkLoadBalancer.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkLoadBalancer): NetworkLoadBalancer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkLoadBalancer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkLoadBalancer;
    static deserializeBinaryFromReader(message: NetworkLoadBalancer, reader: jspb.BinaryReader): NetworkLoadBalancer;
}

export namespace NetworkLoadBalancer {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        regionId: string,
        status: NetworkLoadBalancer.Status,
        type: NetworkLoadBalancer.Type,
        sessionAffinity: NetworkLoadBalancer.SessionAffinity,
        listenersList: Array<Listener.AsObject>,
        attachedTargetGroupsList: Array<AttachedTargetGroup.AsObject>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    STARTING = 2,
    ACTIVE = 3,
    STOPPING = 4,
    STOPPED = 5,
    DELETING = 6,
    INACTIVE = 7,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    EXTERNAL = 1,
    INTERNAL = 2,
    }

    export enum SessionAffinity {
    SESSION_AFFINITY_UNSPECIFIED = 0,
    CLIENT_IP_PORT_PROTO = 1,
    }

}

export class AttachedTargetGroup extends jspb.Message { 
    getTargetGroupId(): string;
    setTargetGroupId(value: string): AttachedTargetGroup;
    clearHealthChecksList(): void;
    getHealthChecksList(): Array<yandex_cloud_loadbalancer_v1_health_check_pb.HealthCheck>;
    setHealthChecksList(value: Array<yandex_cloud_loadbalancer_v1_health_check_pb.HealthCheck>): AttachedTargetGroup;
    addHealthChecks(value?: yandex_cloud_loadbalancer_v1_health_check_pb.HealthCheck, index?: number): yandex_cloud_loadbalancer_v1_health_check_pb.HealthCheck;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedTargetGroup.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedTargetGroup): AttachedTargetGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedTargetGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedTargetGroup;
    static deserializeBinaryFromReader(message: AttachedTargetGroup, reader: jspb.BinaryReader): AttachedTargetGroup;
}

export namespace AttachedTargetGroup {
    export type AsObject = {
        targetGroupId: string,
        healthChecksList: Array<yandex_cloud_loadbalancer_v1_health_check_pb.HealthCheck.AsObject>,
    }
}

export class Listener extends jspb.Message { 
    getName(): string;
    setName(value: string): Listener;
    getAddress(): string;
    setAddress(value: string): Listener;
    getPort(): number;
    setPort(value: number): Listener;
    getProtocol(): Listener.Protocol;
    setProtocol(value: Listener.Protocol): Listener;
    getTargetPort(): number;
    setTargetPort(value: number): Listener;
    getSubnetId(): string;
    setSubnetId(value: string): Listener;
    getIpVersion(): IpVersion;
    setIpVersion(value: IpVersion): Listener;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Listener.AsObject;
    static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Listener;
    static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
    export type AsObject = {
        name: string,
        address: string,
        port: number,
        protocol: Listener.Protocol,
        targetPort: number,
        subnetId: string,
        ipVersion: IpVersion,
    }

    export enum Protocol {
    PROTOCOL_UNSPECIFIED = 0,
    TCP = 1,
    UDP = 2,
    }

}

export class TargetState extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): TargetState;
    getAddress(): string;
    setAddress(value: string): TargetState;
    getStatus(): TargetState.Status;
    setStatus(value: TargetState.Status): TargetState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetState.AsObject;
    static toObject(includeInstance: boolean, msg: TargetState): TargetState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetState;
    static deserializeBinaryFromReader(message: TargetState, reader: jspb.BinaryReader): TargetState;
}

export namespace TargetState {
    export type AsObject = {
        subnetId: string,
        address: string,
        status: TargetState.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    INITIAL = 1,
    HEALTHY = 2,
    UNHEALTHY = 3,
    DRAINING = 4,
    INACTIVE = 5,
    }

}

export enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
}
