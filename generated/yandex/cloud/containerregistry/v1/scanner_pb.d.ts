// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/scanner.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ScanResult extends jspb.Message { 
    getId(): string;
    setId(value: string): ScanResult;
    getImageId(): string;
    setImageId(value: string): ScanResult;

    hasScannedAt(): boolean;
    clearScannedAt(): void;
    getScannedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setScannedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScanResult;
    getStatus(): ScanResult.Status;
    setStatus(value: ScanResult.Status): ScanResult;

    hasVulnerabilities(): boolean;
    clearVulnerabilities(): void;
    getVulnerabilities(): VulnerabilityStats | undefined;
    setVulnerabilities(value?: VulnerabilityStats): ScanResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScanResult.AsObject;
    static toObject(includeInstance: boolean, msg: ScanResult): ScanResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScanResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScanResult;
    static deserializeBinaryFromReader(message: ScanResult, reader: jspb.BinaryReader): ScanResult;
}

export namespace ScanResult {
    export type AsObject = {
        id: string,
        imageId: string,
        scannedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: ScanResult.Status,
        vulnerabilities?: VulnerabilityStats.AsObject,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    RUNNING = 1,
    READY = 2,
    ERROR = 3,
    }

}

export class VulnerabilityStats extends jspb.Message { 
    getCritical(): number;
    setCritical(value: number): VulnerabilityStats;
    getHigh(): number;
    setHigh(value: number): VulnerabilityStats;
    getMedium(): number;
    setMedium(value: number): VulnerabilityStats;
    getLow(): number;
    setLow(value: number): VulnerabilityStats;
    getNegligible(): number;
    setNegligible(value: number): VulnerabilityStats;
    getUndefined(): number;
    setUndefined(value: number): VulnerabilityStats;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VulnerabilityStats.AsObject;
    static toObject(includeInstance: boolean, msg: VulnerabilityStats): VulnerabilityStats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VulnerabilityStats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VulnerabilityStats;
    static deserializeBinaryFromReader(message: VulnerabilityStats, reader: jspb.BinaryReader): VulnerabilityStats;
}

export namespace VulnerabilityStats {
    export type AsObject = {
        critical: number,
        high: number,
        medium: number,
        low: number,
        negligible: number,
        undefined: number,
    }
}

export class Vulnerability extends jspb.Message { 
    getSeverity(): Vulnerability.Severity;
    setSeverity(value: Vulnerability.Severity): Vulnerability;

    hasPackage(): boolean;
    clearPackage(): void;
    getPackage(): PackageVulnerability | undefined;
    setPackage(value?: PackageVulnerability): Vulnerability;

    getVulnerabilityCase(): Vulnerability.VulnerabilityCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vulnerability.AsObject;
    static toObject(includeInstance: boolean, msg: Vulnerability): Vulnerability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Vulnerability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vulnerability;
    static deserializeBinaryFromReader(message: Vulnerability, reader: jspb.BinaryReader): Vulnerability;
}

export namespace Vulnerability {
    export type AsObject = {
        severity: Vulnerability.Severity,
        pb_package?: PackageVulnerability.AsObject,
    }

    export enum Severity {
    SEVERITY_UNSPECIFIED = 0,
    CRITICAL = 1,
    HIGH = 2,
    MEDIUM = 3,
    LOW = 4,
    NEGLIGIBLE = 5,
    UNDEFINED = 6,
    }


    export enum VulnerabilityCase {
        VULNERABILITY_NOT_SET = 0,
        PACKAGE = 2,
    }

}

export class PackageVulnerability extends jspb.Message { 
    getName(): string;
    setName(value: string): PackageVulnerability;
    getLink(): string;
    setLink(value: string): PackageVulnerability;
    getPackage(): string;
    setPackage(value: string): PackageVulnerability;
    getSource(): string;
    setSource(value: string): PackageVulnerability;
    getVersion(): string;
    setVersion(value: string): PackageVulnerability;
    getFixedBy(): string;
    setFixedBy(value: string): PackageVulnerability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageVulnerability.AsObject;
    static toObject(includeInstance: boolean, msg: PackageVulnerability): PackageVulnerability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageVulnerability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageVulnerability;
    static deserializeBinaryFromReader(message: PackageVulnerability, reader: jspb.BinaryReader): PackageVulnerability;
}

export namespace PackageVulnerability {
    export type AsObject = {
        name: string,
        link: string,
        pb_package: string,
        source: string,
        version: string,
        fixedBy: string,
    }
}
