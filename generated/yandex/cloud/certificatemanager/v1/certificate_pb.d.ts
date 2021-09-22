// package: yandex.cloud.certificatemanager.v1
// file: yandex/cloud/certificatemanager/v1/certificate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Certificate extends jspb.Message { 
    getId(): string;
    setId(value: string): Certificate;
    getFolderId(): string;
    setFolderId(value: string): Certificate;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Certificate;
    getName(): string;
    setName(value: string): Certificate;
    getDescription(): string;
    setDescription(value: string): Certificate;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getType(): CertificateType;
    setType(value: CertificateType): Certificate;
    clearDomainsList(): void;
    getDomainsList(): Array<string>;
    setDomainsList(value: Array<string>): Certificate;
    addDomains(value: string, index?: number): string;
    getStatus(): Certificate.Status;
    setStatus(value: Certificate.Status): Certificate;
    getIssuer(): string;
    setIssuer(value: string): Certificate;
    getSubject(): string;
    setSubject(value: string): Certificate;
    getSerial(): string;
    setSerial(value: string): Certificate;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Certificate;

    hasIssuedAt(): boolean;
    clearIssuedAt(): void;
    getIssuedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setIssuedAt(value?: google_protobuf_timestamp_pb.Timestamp): Certificate;

    hasNotAfter(): boolean;
    clearNotAfter(): void;
    getNotAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotAfter(value?: google_protobuf_timestamp_pb.Timestamp): Certificate;

    hasNotBefore(): boolean;
    clearNotBefore(): void;
    getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): Certificate;
    clearChallengesList(): void;
    getChallengesList(): Array<Challenge>;
    setChallengesList(value: Array<Challenge>): Certificate;
    addChallenges(value?: Challenge, index?: number): Challenge;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Certificate.AsObject;
    static toObject(includeInstance: boolean, msg: Certificate): Certificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Certificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Certificate;
    static deserializeBinaryFromReader(message: Certificate, reader: jspb.BinaryReader): Certificate;
}

export namespace Certificate {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        type: CertificateType,
        domainsList: Array<string>,
        status: Certificate.Status,
        issuer: string,
        subject: string,
        serial: string,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        issuedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        notAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        challengesList: Array<Challenge.AsObject>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    VALIDATING = 1,
    INVALID = 2,
    ISSUED = 3,
    REVOKED = 4,
    RENEWING = 5,
    RENEWAL_FAILED = 6,
    }

}

export class Challenge extends jspb.Message { 
    getDomain(): string;
    setDomain(value: string): Challenge;
    getType(): ChallengeType;
    setType(value: ChallengeType): Challenge;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Challenge;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Challenge;
    getStatus(): Challenge.Status;
    setStatus(value: Challenge.Status): Challenge;
    getMessage(): string;
    setMessage(value: string): Challenge;
    getError(): string;
    setError(value: string): Challenge;

    hasDnsChallenge(): boolean;
    clearDnsChallenge(): void;
    getDnsChallenge(): Challenge.DnsRecord | undefined;
    setDnsChallenge(value?: Challenge.DnsRecord): Challenge;

    hasHttpChallenge(): boolean;
    clearHttpChallenge(): void;
    getHttpChallenge(): Challenge.HttpFile | undefined;
    setHttpChallenge(value?: Challenge.HttpFile): Challenge;

    getChallengeCase(): Challenge.ChallengeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Challenge.AsObject;
    static toObject(includeInstance: boolean, msg: Challenge): Challenge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Challenge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Challenge;
    static deserializeBinaryFromReader(message: Challenge, reader: jspb.BinaryReader): Challenge;
}

export namespace Challenge {
    export type AsObject = {
        domain: string,
        type: ChallengeType,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: Challenge.Status,
        message: string,
        error: string,
        dnsChallenge?: Challenge.DnsRecord.AsObject,
        httpChallenge?: Challenge.HttpFile.AsObject,
    }


    export class DnsRecord extends jspb.Message { 
        getName(): string;
        setName(value: string): DnsRecord;
        getType(): string;
        setType(value: string): DnsRecord;
        getValue(): string;
        setValue(value: string): DnsRecord;

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
            name: string,
            type: string,
            value: string,
        }
    }

    export class HttpFile extends jspb.Message { 
        getUrl(): string;
        setUrl(value: string): HttpFile;
        getContent(): string;
        setContent(value: string): HttpFile;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpFile.AsObject;
        static toObject(includeInstance: boolean, msg: HttpFile): HttpFile.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpFile, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpFile;
        static deserializeBinaryFromReader(message: HttpFile, reader: jspb.BinaryReader): HttpFile;
    }

    export namespace HttpFile {
        export type AsObject = {
            url: string,
            content: string,
        }
    }


    export enum Status {
    STATUS_UNSPECIFIED = 0,
    PENDING = 1,
    PROCESSING = 2,
    VALID = 3,
    INVALID = 4,
    }


    export enum ChallengeCase {
        CHALLENGE_NOT_SET = 0,
        DNS_CHALLENGE = 8,
        HTTP_CHALLENGE = 9,
    }

}

export enum CertificateType {
    CERTIFICATE_TYPE_UNSPECIFIED = 0,
    IMPORTED = 1,
    MANAGED = 2,
}

export enum ChallengeType {
    CHALLENGE_TYPE_UNSPECIFIED = 0,
    DNS = 1,
    HTTP = 2,
}
