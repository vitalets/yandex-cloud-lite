// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/backend_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_apploadbalancer_v1_payload_pb from "../../../../yandex/cloud/apploadbalancer/v1/payload_pb";
import * as yandex_cloud_apploadbalancer_v1_tls_pb from "../../../../yandex/cloud/apploadbalancer/v1/tls_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class BackendGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): BackendGroup;
    getName(): string;
    setName(value: string): BackendGroup;
    getDescription(): string;
    setDescription(value: string): BackendGroup;
    getFolderId(): string;
    setFolderId(value: string): BackendGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HttpBackendGroup | undefined;
    setHttp(value?: HttpBackendGroup): BackendGroup;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): GrpcBackendGroup | undefined;
    setGrpc(value?: GrpcBackendGroup): BackendGroup;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): StreamBackendGroup | undefined;
    setStream(value?: StreamBackendGroup): BackendGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BackendGroup;

    getBackendCase(): BackendGroup.BackendCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackendGroup.AsObject;
    static toObject(includeInstance: boolean, msg: BackendGroup): BackendGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackendGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackendGroup;
    static deserializeBinaryFromReader(message: BackendGroup, reader: jspb.BinaryReader): BackendGroup;
}

export namespace BackendGroup {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        folderId: string,

        labelsMap: Array<[string, string]>,
        http?: HttpBackendGroup.AsObject,
        grpc?: GrpcBackendGroup.AsObject,
        stream?: StreamBackendGroup.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum BackendCase {
        BACKEND_NOT_SET = 0,
        HTTP = 6,
        GRPC = 7,
        STREAM = 10,
    }

}

export class StreamBackendGroup extends jspb.Message { 
    clearBackendsList(): void;
    getBackendsList(): Array<StreamBackend>;
    setBackendsList(value: Array<StreamBackend>): StreamBackendGroup;
    addBackends(value?: StreamBackend, index?: number): StreamBackend;

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): ConnectionSessionAffinity | undefined;
    setConnection(value?: ConnectionSessionAffinity): StreamBackendGroup;

    getSessionAffinityCase(): StreamBackendGroup.SessionAffinityCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamBackendGroup.AsObject;
    static toObject(includeInstance: boolean, msg: StreamBackendGroup): StreamBackendGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamBackendGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamBackendGroup;
    static deserializeBinaryFromReader(message: StreamBackendGroup, reader: jspb.BinaryReader): StreamBackendGroup;
}

export namespace StreamBackendGroup {
    export type AsObject = {
        backendsList: Array<StreamBackend.AsObject>,
        connection?: ConnectionSessionAffinity.AsObject,
    }

    export enum SessionAffinityCase {
        SESSION_AFFINITY_NOT_SET = 0,
        CONNECTION = 2,
    }

}

export class HttpBackendGroup extends jspb.Message { 
    clearBackendsList(): void;
    getBackendsList(): Array<HttpBackend>;
    setBackendsList(value: Array<HttpBackend>): HttpBackendGroup;
    addBackends(value?: HttpBackend, index?: number): HttpBackend;

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): ConnectionSessionAffinity | undefined;
    setConnection(value?: ConnectionSessionAffinity): HttpBackendGroup;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): HeaderSessionAffinity | undefined;
    setHeader(value?: HeaderSessionAffinity): HttpBackendGroup;

    hasCookie(): boolean;
    clearCookie(): void;
    getCookie(): CookieSessionAffinity | undefined;
    setCookie(value?: CookieSessionAffinity): HttpBackendGroup;

    getSessionAffinityCase(): HttpBackendGroup.SessionAffinityCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpBackendGroup.AsObject;
    static toObject(includeInstance: boolean, msg: HttpBackendGroup): HttpBackendGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpBackendGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpBackendGroup;
    static deserializeBinaryFromReader(message: HttpBackendGroup, reader: jspb.BinaryReader): HttpBackendGroup;
}

export namespace HttpBackendGroup {
    export type AsObject = {
        backendsList: Array<HttpBackend.AsObject>,
        connection?: ConnectionSessionAffinity.AsObject,
        header?: HeaderSessionAffinity.AsObject,
        cookie?: CookieSessionAffinity.AsObject,
    }

    export enum SessionAffinityCase {
        SESSION_AFFINITY_NOT_SET = 0,
        CONNECTION = 2,
        HEADER = 3,
        COOKIE = 4,
    }

}

export class GrpcBackendGroup extends jspb.Message { 
    clearBackendsList(): void;
    getBackendsList(): Array<GrpcBackend>;
    setBackendsList(value: Array<GrpcBackend>): GrpcBackendGroup;
    addBackends(value?: GrpcBackend, index?: number): GrpcBackend;

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): ConnectionSessionAffinity | undefined;
    setConnection(value?: ConnectionSessionAffinity): GrpcBackendGroup;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): HeaderSessionAffinity | undefined;
    setHeader(value?: HeaderSessionAffinity): GrpcBackendGroup;

    hasCookie(): boolean;
    clearCookie(): void;
    getCookie(): CookieSessionAffinity | undefined;
    setCookie(value?: CookieSessionAffinity): GrpcBackendGroup;

    getSessionAffinityCase(): GrpcBackendGroup.SessionAffinityCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcBackendGroup.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcBackendGroup): GrpcBackendGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcBackendGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcBackendGroup;
    static deserializeBinaryFromReader(message: GrpcBackendGroup, reader: jspb.BinaryReader): GrpcBackendGroup;
}

export namespace GrpcBackendGroup {
    export type AsObject = {
        backendsList: Array<GrpcBackend.AsObject>,
        connection?: ConnectionSessionAffinity.AsObject,
        header?: HeaderSessionAffinity.AsObject,
        cookie?: CookieSessionAffinity.AsObject,
    }

    export enum SessionAffinityCase {
        SESSION_AFFINITY_NOT_SET = 0,
        CONNECTION = 2,
        HEADER = 3,
        COOKIE = 4,
    }

}

export class HeaderSessionAffinity extends jspb.Message { 
    getHeaderName(): string;
    setHeaderName(value: string): HeaderSessionAffinity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderSessionAffinity.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderSessionAffinity): HeaderSessionAffinity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderSessionAffinity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderSessionAffinity;
    static deserializeBinaryFromReader(message: HeaderSessionAffinity, reader: jspb.BinaryReader): HeaderSessionAffinity;
}

export namespace HeaderSessionAffinity {
    export type AsObject = {
        headerName: string,
    }
}

export class CookieSessionAffinity extends jspb.Message { 
    getName(): string;
    setName(value: string): CookieSessionAffinity;

    hasTtl(): boolean;
    clearTtl(): void;
    getTtl(): google_protobuf_duration_pb.Duration | undefined;
    setTtl(value?: google_protobuf_duration_pb.Duration): CookieSessionAffinity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CookieSessionAffinity.AsObject;
    static toObject(includeInstance: boolean, msg: CookieSessionAffinity): CookieSessionAffinity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CookieSessionAffinity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CookieSessionAffinity;
    static deserializeBinaryFromReader(message: CookieSessionAffinity, reader: jspb.BinaryReader): CookieSessionAffinity;
}

export namespace CookieSessionAffinity {
    export type AsObject = {
        name: string,
        ttl?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class ConnectionSessionAffinity extends jspb.Message { 
    getSourceIp(): boolean;
    setSourceIp(value: boolean): ConnectionSessionAffinity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionSessionAffinity.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionSessionAffinity): ConnectionSessionAffinity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionSessionAffinity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionSessionAffinity;
    static deserializeBinaryFromReader(message: ConnectionSessionAffinity, reader: jspb.BinaryReader): ConnectionSessionAffinity;
}

export namespace ConnectionSessionAffinity {
    export type AsObject = {
        sourceIp: boolean,
    }
}

export class LoadBalancingConfig extends jspb.Message { 
    getPanicThreshold(): number;
    setPanicThreshold(value: number): LoadBalancingConfig;
    getLocalityAwareRoutingPercent(): number;
    setLocalityAwareRoutingPercent(value: number): LoadBalancingConfig;
    getStrictLocality(): boolean;
    setStrictLocality(value: boolean): LoadBalancingConfig;
    getMode(): LoadBalancingMode;
    setMode(value: LoadBalancingMode): LoadBalancingConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoadBalancingConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LoadBalancingConfig): LoadBalancingConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoadBalancingConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoadBalancingConfig;
    static deserializeBinaryFromReader(message: LoadBalancingConfig, reader: jspb.BinaryReader): LoadBalancingConfig;
}

export namespace LoadBalancingConfig {
    export type AsObject = {
        panicThreshold: number,
        localityAwareRoutingPercent: number,
        strictLocality: boolean,
        mode: LoadBalancingMode,
    }
}

export class StreamBackend extends jspb.Message { 
    getName(): string;
    setName(value: string): StreamBackend;

    hasBackendWeight(): boolean;
    clearBackendWeight(): void;
    getBackendWeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendWeight(value?: google_protobuf_wrappers_pb.Int64Value): StreamBackend;

    hasLoadBalancingConfig(): boolean;
    clearLoadBalancingConfig(): void;
    getLoadBalancingConfig(): LoadBalancingConfig | undefined;
    setLoadBalancingConfig(value?: LoadBalancingConfig): StreamBackend;
    getPort(): number;
    setPort(value: number): StreamBackend;

    hasTargetGroups(): boolean;
    clearTargetGroups(): void;
    getTargetGroups(): TargetGroupsBackend | undefined;
    setTargetGroups(value?: TargetGroupsBackend): StreamBackend;
    clearHealthchecksList(): void;
    getHealthchecksList(): Array<HealthCheck>;
    setHealthchecksList(value: Array<HealthCheck>): StreamBackend;
    addHealthchecks(value?: HealthCheck, index?: number): HealthCheck;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): BackendTls | undefined;
    setTls(value?: BackendTls): StreamBackend;

    getBackendTypeCase(): StreamBackend.BackendTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamBackend.AsObject;
    static toObject(includeInstance: boolean, msg: StreamBackend): StreamBackend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamBackend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamBackend;
    static deserializeBinaryFromReader(message: StreamBackend, reader: jspb.BinaryReader): StreamBackend;
}

export namespace StreamBackend {
    export type AsObject = {
        name: string,
        backendWeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        loadBalancingConfig?: LoadBalancingConfig.AsObject,
        port: number,
        targetGroups?: TargetGroupsBackend.AsObject,
        healthchecksList: Array<HealthCheck.AsObject>,
        tls?: BackendTls.AsObject,
    }

    export enum BackendTypeCase {
        BACKEND_TYPE_NOT_SET = 0,
        TARGET_GROUPS = 5,
    }

}

export class HttpBackend extends jspb.Message { 
    getName(): string;
    setName(value: string): HttpBackend;

    hasBackendWeight(): boolean;
    clearBackendWeight(): void;
    getBackendWeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendWeight(value?: google_protobuf_wrappers_pb.Int64Value): HttpBackend;

    hasLoadBalancingConfig(): boolean;
    clearLoadBalancingConfig(): void;
    getLoadBalancingConfig(): LoadBalancingConfig | undefined;
    setLoadBalancingConfig(value?: LoadBalancingConfig): HttpBackend;
    getPort(): number;
    setPort(value: number): HttpBackend;

    hasTargetGroups(): boolean;
    clearTargetGroups(): void;
    getTargetGroups(): TargetGroupsBackend | undefined;
    setTargetGroups(value?: TargetGroupsBackend): HttpBackend;

    hasStorageBucket(): boolean;
    clearStorageBucket(): void;
    getStorageBucket(): StorageBucketBackend | undefined;
    setStorageBucket(value?: StorageBucketBackend): HttpBackend;
    clearHealthchecksList(): void;
    getHealthchecksList(): Array<HealthCheck>;
    setHealthchecksList(value: Array<HealthCheck>): HttpBackend;
    addHealthchecks(value?: HealthCheck, index?: number): HealthCheck;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): BackendTls | undefined;
    setTls(value?: BackendTls): HttpBackend;
    getUseHttp2(): boolean;
    setUseHttp2(value: boolean): HttpBackend;

    getBackendTypeCase(): HttpBackend.BackendTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpBackend.AsObject;
    static toObject(includeInstance: boolean, msg: HttpBackend): HttpBackend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpBackend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpBackend;
    static deserializeBinaryFromReader(message: HttpBackend, reader: jspb.BinaryReader): HttpBackend;
}

export namespace HttpBackend {
    export type AsObject = {
        name: string,
        backendWeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        loadBalancingConfig?: LoadBalancingConfig.AsObject,
        port: number,
        targetGroups?: TargetGroupsBackend.AsObject,
        storageBucket?: StorageBucketBackend.AsObject,
        healthchecksList: Array<HealthCheck.AsObject>,
        tls?: BackendTls.AsObject,
        useHttp2: boolean,
    }

    export enum BackendTypeCase {
        BACKEND_TYPE_NOT_SET = 0,
        TARGET_GROUPS = 5,
        STORAGE_BUCKET = 9,
    }

}

export class GrpcBackend extends jspb.Message { 
    getName(): string;
    setName(value: string): GrpcBackend;

    hasBackendWeight(): boolean;
    clearBackendWeight(): void;
    getBackendWeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackendWeight(value?: google_protobuf_wrappers_pb.Int64Value): GrpcBackend;

    hasLoadBalancingConfig(): boolean;
    clearLoadBalancingConfig(): void;
    getLoadBalancingConfig(): LoadBalancingConfig | undefined;
    setLoadBalancingConfig(value?: LoadBalancingConfig): GrpcBackend;
    getPort(): number;
    setPort(value: number): GrpcBackend;

    hasTargetGroups(): boolean;
    clearTargetGroups(): void;
    getTargetGroups(): TargetGroupsBackend | undefined;
    setTargetGroups(value?: TargetGroupsBackend): GrpcBackend;
    clearHealthchecksList(): void;
    getHealthchecksList(): Array<HealthCheck>;
    setHealthchecksList(value: Array<HealthCheck>): GrpcBackend;
    addHealthchecks(value?: HealthCheck, index?: number): HealthCheck;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): BackendTls | undefined;
    setTls(value?: BackendTls): GrpcBackend;

    getBackendTypeCase(): GrpcBackend.BackendTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcBackend.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcBackend): GrpcBackend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcBackend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcBackend;
    static deserializeBinaryFromReader(message: GrpcBackend, reader: jspb.BinaryReader): GrpcBackend;
}

export namespace GrpcBackend {
    export type AsObject = {
        name: string,
        backendWeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        loadBalancingConfig?: LoadBalancingConfig.AsObject,
        port: number,
        targetGroups?: TargetGroupsBackend.AsObject,
        healthchecksList: Array<HealthCheck.AsObject>,
        tls?: BackendTls.AsObject,
    }

    export enum BackendTypeCase {
        BACKEND_TYPE_NOT_SET = 0,
        TARGET_GROUPS = 5,
    }

}

export class TargetGroupsBackend extends jspb.Message { 
    clearTargetGroupIdsList(): void;
    getTargetGroupIdsList(): Array<string>;
    setTargetGroupIdsList(value: Array<string>): TargetGroupsBackend;
    addTargetGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetGroupsBackend.AsObject;
    static toObject(includeInstance: boolean, msg: TargetGroupsBackend): TargetGroupsBackend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetGroupsBackend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetGroupsBackend;
    static deserializeBinaryFromReader(message: TargetGroupsBackend, reader: jspb.BinaryReader): TargetGroupsBackend;
}

export namespace TargetGroupsBackend {
    export type AsObject = {
        targetGroupIdsList: Array<string>,
    }
}

export class PlaintextTransportSettings extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlaintextTransportSettings.AsObject;
    static toObject(includeInstance: boolean, msg: PlaintextTransportSettings): PlaintextTransportSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlaintextTransportSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlaintextTransportSettings;
    static deserializeBinaryFromReader(message: PlaintextTransportSettings, reader: jspb.BinaryReader): PlaintextTransportSettings;
}

export namespace PlaintextTransportSettings {
    export type AsObject = {
    }
}

export class SecureTransportSettings extends jspb.Message { 
    getSni(): string;
    setSni(value: string): SecureTransportSettings;

    hasValidationContext(): boolean;
    clearValidationContext(): void;
    getValidationContext(): yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext | undefined;
    setValidationContext(value?: yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext): SecureTransportSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecureTransportSettings.AsObject;
    static toObject(includeInstance: boolean, msg: SecureTransportSettings): SecureTransportSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecureTransportSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecureTransportSettings;
    static deserializeBinaryFromReader(message: SecureTransportSettings, reader: jspb.BinaryReader): SecureTransportSettings;
}

export namespace SecureTransportSettings {
    export type AsObject = {
        sni: string,
        validationContext?: yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext.AsObject,
    }
}

export class BackendTls extends jspb.Message { 
    getSni(): string;
    setSni(value: string): BackendTls;

    hasValidationContext(): boolean;
    clearValidationContext(): void;
    getValidationContext(): yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext | undefined;
    setValidationContext(value?: yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext): BackendTls;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackendTls.AsObject;
    static toObject(includeInstance: boolean, msg: BackendTls): BackendTls.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackendTls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackendTls;
    static deserializeBinaryFromReader(message: BackendTls, reader: jspb.BinaryReader): BackendTls;
}

export namespace BackendTls {
    export type AsObject = {
        sni: string,
        validationContext?: yandex_cloud_apploadbalancer_v1_tls_pb.ValidationContext.AsObject,
    }
}

export class StorageBucketBackend extends jspb.Message { 
    getBucket(): string;
    setBucket(value: string): StorageBucketBackend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageBucketBackend.AsObject;
    static toObject(includeInstance: boolean, msg: StorageBucketBackend): StorageBucketBackend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageBucketBackend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageBucketBackend;
    static deserializeBinaryFromReader(message: StorageBucketBackend, reader: jspb.BinaryReader): StorageBucketBackend;
}

export namespace StorageBucketBackend {
    export type AsObject = {
        bucket: string,
    }
}

export class HealthCheck extends jspb.Message { 

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): HealthCheck;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): HealthCheck;
    getIntervalJitterPercent(): number;
    setIntervalJitterPercent(value: number): HealthCheck;
    getHealthyThreshold(): number;
    setHealthyThreshold(value: number): HealthCheck;
    getUnhealthyThreshold(): number;
    setUnhealthyThreshold(value: number): HealthCheck;
    getHealthcheckPort(): number;
    setHealthcheckPort(value: number): HealthCheck;

    hasStream(): boolean;
    clearStream(): void;
    getStream(): HealthCheck.StreamHealthCheck | undefined;
    setStream(value?: HealthCheck.StreamHealthCheck): HealthCheck;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HealthCheck.HttpHealthCheck | undefined;
    setHttp(value?: HealthCheck.HttpHealthCheck): HealthCheck;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): HealthCheck.GrpcHealthCheck | undefined;
    setGrpc(value?: HealthCheck.GrpcHealthCheck): HealthCheck;

    hasPlaintext(): boolean;
    clearPlaintext(): void;
    getPlaintext(): PlaintextTransportSettings | undefined;
    setPlaintext(value?: PlaintextTransportSettings): HealthCheck;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): SecureTransportSettings | undefined;
    setTls(value?: SecureTransportSettings): HealthCheck;

    getHealthcheckCase(): HealthCheck.HealthcheckCase;
    getTransportSettingsCase(): HealthCheck.TransportSettingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheck.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheck): HealthCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheck;
    static deserializeBinaryFromReader(message: HealthCheck, reader: jspb.BinaryReader): HealthCheck;
}

export namespace HealthCheck {
    export type AsObject = {
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        interval?: google_protobuf_duration_pb.Duration.AsObject,
        intervalJitterPercent: number,
        healthyThreshold: number,
        unhealthyThreshold: number,
        healthcheckPort: number,
        stream?: HealthCheck.StreamHealthCheck.AsObject,
        http?: HealthCheck.HttpHealthCheck.AsObject,
        grpc?: HealthCheck.GrpcHealthCheck.AsObject,
        plaintext?: PlaintextTransportSettings.AsObject,
        tls?: SecureTransportSettings.AsObject,
    }


    export class StreamHealthCheck extends jspb.Message { 

        hasSend(): boolean;
        clearSend(): void;
        getSend(): yandex_cloud_apploadbalancer_v1_payload_pb.Payload | undefined;
        setSend(value?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload): StreamHealthCheck;

        hasReceive(): boolean;
        clearReceive(): void;
        getReceive(): yandex_cloud_apploadbalancer_v1_payload_pb.Payload | undefined;
        setReceive(value?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload): StreamHealthCheck;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StreamHealthCheck.AsObject;
        static toObject(includeInstance: boolean, msg: StreamHealthCheck): StreamHealthCheck.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StreamHealthCheck, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StreamHealthCheck;
        static deserializeBinaryFromReader(message: StreamHealthCheck, reader: jspb.BinaryReader): StreamHealthCheck;
    }

    export namespace StreamHealthCheck {
        export type AsObject = {
            send?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload.AsObject,
            receive?: yandex_cloud_apploadbalancer_v1_payload_pb.Payload.AsObject,
        }
    }

    export class HttpHealthCheck extends jspb.Message { 
        getHost(): string;
        setHost(value: string): HttpHealthCheck;
        getPath(): string;
        setPath(value: string): HttpHealthCheck;
        getUseHttp2(): boolean;
        setUseHttp2(value: boolean): HttpHealthCheck;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpHealthCheck.AsObject;
        static toObject(includeInstance: boolean, msg: HttpHealthCheck): HttpHealthCheck.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpHealthCheck, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpHealthCheck;
        static deserializeBinaryFromReader(message: HttpHealthCheck, reader: jspb.BinaryReader): HttpHealthCheck;
    }

    export namespace HttpHealthCheck {
        export type AsObject = {
            host: string,
            path: string,
            useHttp2: boolean,
        }
    }

    export class GrpcHealthCheck extends jspb.Message { 
        getServiceName(): string;
        setServiceName(value: string): GrpcHealthCheck;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GrpcHealthCheck.AsObject;
        static toObject(includeInstance: boolean, msg: GrpcHealthCheck): GrpcHealthCheck.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GrpcHealthCheck, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GrpcHealthCheck;
        static deserializeBinaryFromReader(message: GrpcHealthCheck, reader: jspb.BinaryReader): GrpcHealthCheck;
    }

    export namespace GrpcHealthCheck {
        export type AsObject = {
            serviceName: string,
        }
    }


    export enum HealthcheckCase {
        HEALTHCHECK_NOT_SET = 0,
        STREAM = 7,
        HTTP = 8,
        GRPC = 9,
    }

    export enum TransportSettingsCase {
        TRANSPORT_SETTINGS_NOT_SET = 0,
        PLAINTEXT = 10,
        TLS = 11,
    }

}

export enum LoadBalancingMode {
    ROUND_ROBIN = 0,
    RANDOM = 1,
    LEAST_REQUEST = 2,
    MAGLEV_HASH = 3,
}
