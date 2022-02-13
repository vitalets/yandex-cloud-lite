// package: yandex.cloud.datatransfer.v1.endpoint
// file: yandex/cloud/datatransfer/v1/endpoint/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Secret extends jspb.Message { 

    hasRaw(): boolean;
    clearRaw(): void;
    getRaw(): string;
    setRaw(value: string): Secret;

    getValueCase(): Secret.ValueCase;

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
        raw: string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        RAW = 1,
    }

}

export class TLSMode extends jspb.Message { 

    hasDisabled(): boolean;
    clearDisabled(): void;
    getDisabled(): google_protobuf_empty_pb.Empty | undefined;
    setDisabled(value?: google_protobuf_empty_pb.Empty): TLSMode;

    hasEnabled(): boolean;
    clearEnabled(): void;
    getEnabled(): TLSConfig | undefined;
    setEnabled(value?: TLSConfig): TLSMode;

    getTlsModeCase(): TLSMode.TlsModeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TLSMode.AsObject;
    static toObject(includeInstance: boolean, msg: TLSMode): TLSMode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TLSMode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TLSMode;
    static deserializeBinaryFromReader(message: TLSMode, reader: jspb.BinaryReader): TLSMode;
}

export namespace TLSMode {
    export type AsObject = {
        disabled?: google_protobuf_empty_pb.Empty.AsObject,
        enabled?: TLSConfig.AsObject,
    }

    export enum TlsModeCase {
        TLS_MODE_NOT_SET = 0,
        DISABLED = 1,
        ENABLED = 2,
    }

}

export class TLSConfig extends jspb.Message { 
    getCaCertificate(): string;
    setCaCertificate(value: string): TLSConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TLSConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TLSConfig): TLSConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TLSConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TLSConfig;
    static deserializeBinaryFromReader(message: TLSConfig, reader: jspb.BinaryReader): TLSConfig;
}

export namespace TLSConfig {
    export type AsObject = {
        caCertificate: string,
    }
}

export enum ObjectTransferStage {
    OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
    BEFORE_DATA = 1,
    AFTER_DATA = 2,
    NEVER = 3,
}

export enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    DISABLED = 1,
    DROP = 2,
    TRUNCATE = 3,
}
