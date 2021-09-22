// package: yandex.cloud.organizationmanager.v1
// file: yandex/cloud/organizationmanager/v1/user_account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class UserAccount extends jspb.Message { 
    getId(): string;
    setId(value: string): UserAccount;

    hasYandexPassportUserAccount(): boolean;
    clearYandexPassportUserAccount(): void;
    getYandexPassportUserAccount(): YandexPassportUserAccount | undefined;
    setYandexPassportUserAccount(value?: YandexPassportUserAccount): UserAccount;

    hasSamlUserAccount(): boolean;
    clearSamlUserAccount(): void;
    getSamlUserAccount(): SamlUserAccount | undefined;
    setSamlUserAccount(value?: SamlUserAccount): UserAccount;

    getUserAccountCase(): UserAccount.UserAccountCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserAccount.AsObject;
    static toObject(includeInstance: boolean, msg: UserAccount): UserAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserAccount;
    static deserializeBinaryFromReader(message: UserAccount, reader: jspb.BinaryReader): UserAccount;
}

export namespace UserAccount {
    export type AsObject = {
        id: string,
        yandexPassportUserAccount?: YandexPassportUserAccount.AsObject,
        samlUserAccount?: SamlUserAccount.AsObject,
    }

    export enum UserAccountCase {
        USER_ACCOUNT_NOT_SET = 0,
        YANDEX_PASSPORT_USER_ACCOUNT = 2,
        SAML_USER_ACCOUNT = 3,
    }

}

export class YandexPassportUserAccount extends jspb.Message { 
    getLogin(): string;
    setLogin(value: string): YandexPassportUserAccount;
    getDefaultEmail(): string;
    setDefaultEmail(value: string): YandexPassportUserAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): YandexPassportUserAccount.AsObject;
    static toObject(includeInstance: boolean, msg: YandexPassportUserAccount): YandexPassportUserAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: YandexPassportUserAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): YandexPassportUserAccount;
    static deserializeBinaryFromReader(message: YandexPassportUserAccount, reader: jspb.BinaryReader): YandexPassportUserAccount;
}

export namespace YandexPassportUserAccount {
    export type AsObject = {
        login: string,
        defaultEmail: string,
    }
}

export class SamlUserAccount extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): SamlUserAccount;
    getNameId(): string;
    setNameId(value: string): SamlUserAccount;

    getAttributesMap(): jspb.Map<string, SamlUserAccount.Attribute>;
    clearAttributesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SamlUserAccount.AsObject;
    static toObject(includeInstance: boolean, msg: SamlUserAccount): SamlUserAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SamlUserAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SamlUserAccount;
    static deserializeBinaryFromReader(message: SamlUserAccount, reader: jspb.BinaryReader): SamlUserAccount;
}

export namespace SamlUserAccount {
    export type AsObject = {
        federationId: string,
        nameId: string,

        attributesMap: Array<[string, SamlUserAccount.Attribute.AsObject]>,
    }


    export class Attribute extends jspb.Message { 
        clearValueList(): void;
        getValueList(): Array<string>;
        setValueList(value: Array<string>): Attribute;
        addValue(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Attribute.AsObject;
        static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Attribute;
        static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
    }

    export namespace Attribute {
        export type AsObject = {
            valueList: Array<string>,
        }
    }

}
