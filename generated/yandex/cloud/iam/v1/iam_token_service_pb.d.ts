// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/iam_token_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class CreateIamTokenRequest extends jspb.Message { 

    hasYandexPassportOauthToken(): boolean;
    clearYandexPassportOauthToken(): void;
    getYandexPassportOauthToken(): string;
    setYandexPassportOauthToken(value: string): CreateIamTokenRequest;

    hasJwt(): boolean;
    clearJwt(): void;
    getJwt(): string;
    setJwt(value: string): CreateIamTokenRequest;

    getIdentityCase(): CreateIamTokenRequest.IdentityCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIamTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIamTokenRequest): CreateIamTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIamTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIamTokenRequest;
    static deserializeBinaryFromReader(message: CreateIamTokenRequest, reader: jspb.BinaryReader): CreateIamTokenRequest;
}

export namespace CreateIamTokenRequest {
    export type AsObject = {
        yandexPassportOauthToken: string,
        jwt: string,
    }

    export enum IdentityCase {
        IDENTITY_NOT_SET = 0,
        YANDEX_PASSPORT_OAUTH_TOKEN = 1,
        JWT = 2,
    }

}

export class CreateIamTokenResponse extends jspb.Message { 
    getIamToken(): string;
    setIamToken(value: string): CreateIamTokenResponse;

    hasExpiresAt(): boolean;
    clearExpiresAt(): void;
    getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateIamTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIamTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIamTokenResponse): CreateIamTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIamTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIamTokenResponse;
    static deserializeBinaryFromReader(message: CreateIamTokenResponse, reader: jspb.BinaryReader): CreateIamTokenResponse;
}

export namespace CreateIamTokenResponse {
    export type AsObject = {
        iamToken: string,
        expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateIamTokenForServiceAccountRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateIamTokenForServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIamTokenForServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIamTokenForServiceAccountRequest): CreateIamTokenForServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIamTokenForServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIamTokenForServiceAccountRequest;
    static deserializeBinaryFromReader(message: CreateIamTokenForServiceAccountRequest, reader: jspb.BinaryReader): CreateIamTokenForServiceAccountRequest;
}

export namespace CreateIamTokenForServiceAccountRequest {
    export type AsObject = {
        serviceAccountId: string,
    }
}
