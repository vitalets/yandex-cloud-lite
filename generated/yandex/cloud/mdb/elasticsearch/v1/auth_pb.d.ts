// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class AuthProviders extends jspb.Message { 
    clearProvidersList(): void;
    getProvidersList(): Array<AuthProvider>;
    setProvidersList(value: Array<AuthProvider>): AuthProviders;
    addProviders(value?: AuthProvider, index?: number): AuthProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProviders.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProviders): AuthProviders.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthProviders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProviders;
    static deserializeBinaryFromReader(message: AuthProviders, reader: jspb.BinaryReader): AuthProviders;
}

export namespace AuthProviders {
    export type AsObject = {
        providersList: Array<AuthProvider.AsObject>,
    }
}

export class AuthProvider extends jspb.Message { 
    getType(): AuthProvider.Type;
    setType(value: AuthProvider.Type): AuthProvider;
    getName(): string;
    setName(value: string): AuthProvider;
    getOrder(): number;
    setOrder(value: number): AuthProvider;
    getEnabled(): boolean;
    setEnabled(value: boolean): AuthProvider;
    getHidden(): boolean;
    setHidden(value: boolean): AuthProvider;
    getDescription(): string;
    setDescription(value: string): AuthProvider;
    getHint(): string;
    setHint(value: string): AuthProvider;
    getIcon(): string;
    setIcon(value: string): AuthProvider;

    hasSaml(): boolean;
    clearSaml(): void;
    getSaml(): SamlSettings | undefined;
    setSaml(value?: SamlSettings): AuthProvider;

    getSettingsCase(): AuthProvider.SettingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProvider.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProvider): AuthProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProvider;
    static deserializeBinaryFromReader(message: AuthProvider, reader: jspb.BinaryReader): AuthProvider;
}

export namespace AuthProvider {
    export type AsObject = {
        type: AuthProvider.Type,
        name: string,
        order: number,
        enabled: boolean,
        hidden: boolean,
        description: string,
        hint: string,
        icon: string,
        saml?: SamlSettings.AsObject,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    NATIVE = 1,
    SAML = 2,
    }


    export enum SettingsCase {
        SETTINGS_NOT_SET = 0,
        SAML = 9,
    }

}

export class SamlSettings extends jspb.Message { 
    getIdpEntityId(): string;
    setIdpEntityId(value: string): SamlSettings;
    getIdpMetadataFile(): Uint8Array | string;
    getIdpMetadataFile_asU8(): Uint8Array;
    getIdpMetadataFile_asB64(): string;
    setIdpMetadataFile(value: Uint8Array | string): SamlSettings;
    getSpEntityId(): string;
    setSpEntityId(value: string): SamlSettings;
    getKibanaUrl(): string;
    setKibanaUrl(value: string): SamlSettings;
    getAttributePrincipal(): string;
    setAttributePrincipal(value: string): SamlSettings;
    getAttributeGroups(): string;
    setAttributeGroups(value: string): SamlSettings;
    getAttributeName(): string;
    setAttributeName(value: string): SamlSettings;
    getAttributeEmail(): string;
    setAttributeEmail(value: string): SamlSettings;
    getAttributeDn(): string;
    setAttributeDn(value: string): SamlSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SamlSettings.AsObject;
    static toObject(includeInstance: boolean, msg: SamlSettings): SamlSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SamlSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SamlSettings;
    static deserializeBinaryFromReader(message: SamlSettings, reader: jspb.BinaryReader): SamlSettings;
}

export namespace SamlSettings {
    export type AsObject = {
        idpEntityId: string,
        idpMetadataFile: Uint8Array | string,
        spEntityId: string,
        kibanaUrl: string,
        attributePrincipal: string,
        attributeGroups: string,
        attributeName: string,
        attributeEmail: string,
        attributeDn: string,
    }
}
