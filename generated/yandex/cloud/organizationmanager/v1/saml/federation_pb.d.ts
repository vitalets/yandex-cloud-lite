// package: yandex.cloud.organizationmanager.v1.saml
// file: yandex/cloud/organizationmanager/v1/saml/federation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Federation extends jspb.Message { 
    getId(): string;
    setId(value: string): Federation;
    getOrganizationId(): string;
    setOrganizationId(value: string): Federation;
    getName(): string;
    setName(value: string): Federation;
    getDescription(): string;
    setDescription(value: string): Federation;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Federation;

    hasCookieMaxAge(): boolean;
    clearCookieMaxAge(): void;
    getCookieMaxAge(): google_protobuf_duration_pb.Duration | undefined;
    setCookieMaxAge(value?: google_protobuf_duration_pb.Duration): Federation;
    getAutoCreateAccountOnLogin(): boolean;
    setAutoCreateAccountOnLogin(value: boolean): Federation;
    getIssuer(): string;
    setIssuer(value: string): Federation;
    getSsoBinding(): BindingType;
    setSsoBinding(value: BindingType): Federation;
    getSsoUrl(): string;
    setSsoUrl(value: string): Federation;

    hasSecuritySettings(): boolean;
    clearSecuritySettings(): void;
    getSecuritySettings(): FederationSecuritySettings | undefined;
    setSecuritySettings(value?: FederationSecuritySettings): Federation;
    getCaseInsensitiveNameIds(): boolean;
    setCaseInsensitiveNameIds(value: boolean): Federation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Federation.AsObject;
    static toObject(includeInstance: boolean, msg: Federation): Federation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Federation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Federation;
    static deserializeBinaryFromReader(message: Federation, reader: jspb.BinaryReader): Federation;
}

export namespace Federation {
    export type AsObject = {
        id: string,
        organizationId: string,
        name: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        cookieMaxAge?: google_protobuf_duration_pb.Duration.AsObject,
        autoCreateAccountOnLogin: boolean,
        issuer: string,
        ssoBinding: BindingType,
        ssoUrl: string,
        securitySettings?: FederationSecuritySettings.AsObject,
        caseInsensitiveNameIds: boolean,
    }
}

export class FederationSecuritySettings extends jspb.Message { 
    getEncryptedAssertions(): boolean;
    setEncryptedAssertions(value: boolean): FederationSecuritySettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FederationSecuritySettings.AsObject;
    static toObject(includeInstance: boolean, msg: FederationSecuritySettings): FederationSecuritySettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FederationSecuritySettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FederationSecuritySettings;
    static deserializeBinaryFromReader(message: FederationSecuritySettings, reader: jspb.BinaryReader): FederationSecuritySettings;
}

export namespace FederationSecuritySettings {
    export type AsObject = {
        encryptedAssertions: boolean,
    }
}

export enum BindingType {
    BINDING_TYPE_UNSPECIFIED = 0,
    POST = 1,
    REDIRECT = 2,
    ARTIFACT = 3,
}
