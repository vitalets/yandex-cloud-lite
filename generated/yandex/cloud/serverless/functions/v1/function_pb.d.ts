// package: yandex.cloud.serverless.functions.v1
// file: yandex/cloud/serverless/functions/v1/function.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Function extends jspb.Message { 
    getId(): string;
    setId(value: string): Function;
    getFolderId(): string;
    setFolderId(value: string): Function;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Function;
    getName(): string;
    setName(value: string): Function;
    getDescription(): string;
    setDescription(value: string): Function;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getLogGroupId(): string;
    setLogGroupId(value: string): Function;
    getHttpInvokeUrl(): string;
    setHttpInvokeUrl(value: string): Function;
    getStatus(): Function.Status;
    setStatus(value: Function.Status): Function;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Function.AsObject;
    static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Function, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Function;
    static deserializeBinaryFromReader(message: Function, reader: jspb.BinaryReader): Function;
}

export namespace Function {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        logGroupId: string,
        httpInvokeUrl: string,
        status: Function.Status,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    }

}

export class Version extends jspb.Message { 
    getId(): string;
    setId(value: string): Version;
    getFunctionId(): string;
    setFunctionId(value: string): Version;
    getDescription(): string;
    setDescription(value: string): Version;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Version;
    getRuntime(): string;
    setRuntime(value: string): Version;
    getEntrypoint(): string;
    setEntrypoint(value: string): Version;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Version;

    hasExecutionTimeout(): boolean;
    clearExecutionTimeout(): void;
    getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): Version;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Version;
    getImageSize(): number;
    setImageSize(value: number): Version;
    getStatus(): Version.Status;
    setStatus(value: Version.Status): Version;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Version;
    addTags(value: string, index?: number): string;
    getLogGroupId(): string;
    setLogGroupId(value: string): Version;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;

    hasConnectivity(): boolean;
    clearConnectivity(): void;
    getConnectivity(): Connectivity | undefined;
    setConnectivity(value?: Connectivity): Version;

    getNamedServiceAccountsMap(): jspb.Map<string, string>;
    clearNamedServiceAccountsMap(): void;
    clearSecretsList(): void;
    getSecretsList(): Array<Secret>;
    setSecretsList(value: Array<Secret>): Version;
    addSecrets(value?: Secret, index?: number): Secret;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        id: string,
        functionId: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        runtime: string,
        entrypoint: string,
        resources?: Resources.AsObject,
        executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        serviceAccountId: string,
        imageSize: number,
        status: Version.Status,
        tagsList: Array<string>,
        logGroupId: string,

        environmentMap: Array<[string, string]>,
        connectivity?: Connectivity.AsObject,

        namedServiceAccountsMap: Array<[string, string]>,
        secretsList: Array<Secret.AsObject>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    }

}

export class Resources extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): Resources;

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
    }
}

export class Package extends jspb.Message { 
    getBucketName(): string;
    setBucketName(value: string): Package;
    getObjectName(): string;
    setObjectName(value: string): Package;
    getSha256(): string;
    setSha256(value: string): Package;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Package.AsObject;
    static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Package;
    static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
    export type AsObject = {
        bucketName: string,
        objectName: string,
        sha256: string,
    }
}

export class Connectivity extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): Connectivity;
    clearSubnetIdList(): void;
    getSubnetIdList(): Array<string>;
    setSubnetIdList(value: Array<string>): Connectivity;
    addSubnetId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connectivity.AsObject;
    static toObject(includeInstance: boolean, msg: Connectivity): Connectivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connectivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connectivity;
    static deserializeBinaryFromReader(message: Connectivity, reader: jspb.BinaryReader): Connectivity;
}

export namespace Connectivity {
    export type AsObject = {
        networkId: string,
        subnetIdList: Array<string>,
    }
}

export class ScalingPolicy extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): ScalingPolicy;
    getTag(): string;
    setTag(value: string): ScalingPolicy;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScalingPolicy;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScalingPolicy;
    getProvisionedInstancesCount(): number;
    setProvisionedInstancesCount(value: number): ScalingPolicy;
    getZoneInstancesLimit(): number;
    setZoneInstancesLimit(value: number): ScalingPolicy;
    getZoneRequestsLimit(): number;
    setZoneRequestsLimit(value: number): ScalingPolicy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScalingPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: ScalingPolicy): ScalingPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScalingPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScalingPolicy;
    static deserializeBinaryFromReader(message: ScalingPolicy, reader: jspb.BinaryReader): ScalingPolicy;
}

export namespace ScalingPolicy {
    export type AsObject = {
        functionId: string,
        tag: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        provisionedInstancesCount: number,
        zoneInstancesLimit: number,
        zoneRequestsLimit: number,
    }
}

export class Secret extends jspb.Message { 
    getId(): string;
    setId(value: string): Secret;
    getVersionId(): string;
    setVersionId(value: string): Secret;
    getKey(): string;
    setKey(value: string): Secret;

    hasEnvironmentVariable(): boolean;
    clearEnvironmentVariable(): void;
    getEnvironmentVariable(): string;
    setEnvironmentVariable(value: string): Secret;

    getReferenceCase(): Secret.ReferenceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Secret.AsObject;
    static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Secret;
    static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
    export type AsObject = {
        id: string,
        versionId: string,
        key: string,
        environmentVariable: string,
    }

    export enum ReferenceCase {
        REFERENCE_NOT_SET = 0,
        ENVIRONMENT_VARIABLE = 4,
    }

}
