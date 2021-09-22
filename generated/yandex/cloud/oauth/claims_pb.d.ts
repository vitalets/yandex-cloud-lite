// package: yandex.cloud.oauth
// file: yandex/cloud/oauth/claims.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../yandex/cloud/validation_pb";

export class SubjectClaims extends jspb.Message { 
    getSub(): string;
    setSub(value: string): SubjectClaims;
    getName(): string;
    setName(value: string): SubjectClaims;
    getGivenName(): string;
    setGivenName(value: string): SubjectClaims;
    getFamilyName(): string;
    setFamilyName(value: string): SubjectClaims;
    getPreferredUsername(): string;
    setPreferredUsername(value: string): SubjectClaims;
    getPicture(): string;
    setPicture(value: string): SubjectClaims;
    getEmail(): string;
    setEmail(value: string): SubjectClaims;
    getZoneinfo(): string;
    setZoneinfo(value: string): SubjectClaims;
    getLocale(): string;
    setLocale(value: string): SubjectClaims;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): SubjectClaims;

    hasFederation(): boolean;
    clearFederation(): void;
    getFederation(): Federation | undefined;
    setFederation(value?: Federation): SubjectClaims;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubjectClaims.AsObject;
    static toObject(includeInstance: boolean, msg: SubjectClaims): SubjectClaims.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubjectClaims, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubjectClaims;
    static deserializeBinaryFromReader(message: SubjectClaims, reader: jspb.BinaryReader): SubjectClaims;
}

export namespace SubjectClaims {
    export type AsObject = {
        sub: string,
        name: string,
        givenName: string,
        familyName: string,
        preferredUsername: string,
        picture: string,
        email: string,
        zoneinfo: string,
        locale: string,
        phoneNumber: string,
        federation?: Federation.AsObject,
    }
}

export class Federation extends jspb.Message { 
    getId(): string;
    setId(value: string): Federation;
    getName(): string;
    setName(value: string): Federation;

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
        name: string,
    }
}
