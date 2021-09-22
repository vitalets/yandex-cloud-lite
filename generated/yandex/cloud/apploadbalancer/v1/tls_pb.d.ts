// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/tls.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ValidationContext extends jspb.Message { 

    hasTrustedCaId(): boolean;
    clearTrustedCaId(): void;
    getTrustedCaId(): string;
    setTrustedCaId(value: string): ValidationContext;

    hasTrustedCaBytes(): boolean;
    clearTrustedCaBytes(): void;
    getTrustedCaBytes(): string;
    setTrustedCaBytes(value: string): ValidationContext;

    getTrustedCaCase(): ValidationContext.TrustedCaCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidationContext.AsObject;
    static toObject(includeInstance: boolean, msg: ValidationContext): ValidationContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidationContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidationContext;
    static deserializeBinaryFromReader(message: ValidationContext, reader: jspb.BinaryReader): ValidationContext;
}

export namespace ValidationContext {
    export type AsObject = {
        trustedCaId: string,
        trustedCaBytes: string,
    }

    export enum TrustedCaCase {
        TRUSTED_CA_NOT_SET = 0,
        TRUSTED_CA_ID = 1,
        TRUSTED_CA_BYTES = 2,
    }

}
