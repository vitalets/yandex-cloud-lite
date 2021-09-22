// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/version.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class VersionInfo extends jspb.Message { 
    getCurrentVersion(): string;
    setCurrentVersion(value: string): VersionInfo;
    getNewRevisionAvailable(): boolean;
    setNewRevisionAvailable(value: boolean): VersionInfo;
    getNewRevisionSummary(): string;
    setNewRevisionSummary(value: string): VersionInfo;
    getVersionDeprecated(): boolean;
    setVersionDeprecated(value: boolean): VersionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VersionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VersionInfo): VersionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VersionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VersionInfo;
    static deserializeBinaryFromReader(message: VersionInfo, reader: jspb.BinaryReader): VersionInfo;
}

export namespace VersionInfo {
    export type AsObject = {
        currentVersion: string,
        newRevisionAvailable: boolean,
        newRevisionSummary: string,
        versionDeprecated: boolean,
    }
}

export class UpdateVersionSpec extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): string;
    setVersion(value: string): UpdateVersionSpec;

    hasLatestRevision(): boolean;
    clearLatestRevision(): void;
    getLatestRevision(): boolean;
    setLatestRevision(value: boolean): UpdateVersionSpec;

    getSpecifierCase(): UpdateVersionSpec.SpecifierCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVersionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVersionSpec): UpdateVersionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVersionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVersionSpec;
    static deserializeBinaryFromReader(message: UpdateVersionSpec, reader: jspb.BinaryReader): UpdateVersionSpec;
}

export namespace UpdateVersionSpec {
    export type AsObject = {
        version: string,
        latestRevision: boolean,
    }

    export enum SpecifierCase {
        SPECIFIER_NOT_SET = 0,
        VERSION = 1,
        LATEST_REVISION = 2,
    }

}
