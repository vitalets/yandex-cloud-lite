// package: yandex.cloud.kms.v1
// file: yandex/cloud/kms/v1/symmetric_crypto_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_kms_v1_symmetric_key_pb from "../../../../yandex/cloud/kms/v1/symmetric_key_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class SymmetricEncryptRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricEncryptRequest;
    getVersionId(): string;
    setVersionId(value: string): SymmetricEncryptRequest;
    getAadContext(): Uint8Array | string;
    getAadContext_asU8(): Uint8Array;
    getAadContext_asB64(): string;
    setAadContext(value: Uint8Array | string): SymmetricEncryptRequest;
    getPlaintext(): Uint8Array | string;
    getPlaintext_asU8(): Uint8Array;
    getPlaintext_asB64(): string;
    setPlaintext(value: Uint8Array | string): SymmetricEncryptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricEncryptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricEncryptRequest): SymmetricEncryptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricEncryptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricEncryptRequest;
    static deserializeBinaryFromReader(message: SymmetricEncryptRequest, reader: jspb.BinaryReader): SymmetricEncryptRequest;
}

export namespace SymmetricEncryptRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
        aadContext: Uint8Array | string,
        plaintext: Uint8Array | string,
    }
}

export class SymmetricEncryptResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricEncryptResponse;
    getVersionId(): string;
    setVersionId(value: string): SymmetricEncryptResponse;
    getCiphertext(): Uint8Array | string;
    getCiphertext_asU8(): Uint8Array;
    getCiphertext_asB64(): string;
    setCiphertext(value: Uint8Array | string): SymmetricEncryptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricEncryptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricEncryptResponse): SymmetricEncryptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricEncryptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricEncryptResponse;
    static deserializeBinaryFromReader(message: SymmetricEncryptResponse, reader: jspb.BinaryReader): SymmetricEncryptResponse;
}

export namespace SymmetricEncryptResponse {
    export type AsObject = {
        keyId: string,
        versionId: string,
        ciphertext: Uint8Array | string,
    }
}

export class SymmetricDecryptRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricDecryptRequest;
    getAadContext(): Uint8Array | string;
    getAadContext_asU8(): Uint8Array;
    getAadContext_asB64(): string;
    setAadContext(value: Uint8Array | string): SymmetricDecryptRequest;
    getCiphertext(): Uint8Array | string;
    getCiphertext_asU8(): Uint8Array;
    getCiphertext_asB64(): string;
    setCiphertext(value: Uint8Array | string): SymmetricDecryptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricDecryptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricDecryptRequest): SymmetricDecryptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricDecryptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricDecryptRequest;
    static deserializeBinaryFromReader(message: SymmetricDecryptRequest, reader: jspb.BinaryReader): SymmetricDecryptRequest;
}

export namespace SymmetricDecryptRequest {
    export type AsObject = {
        keyId: string,
        aadContext: Uint8Array | string,
        ciphertext: Uint8Array | string,
    }
}

export class SymmetricDecryptResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricDecryptResponse;
    getVersionId(): string;
    setVersionId(value: string): SymmetricDecryptResponse;
    getPlaintext(): Uint8Array | string;
    getPlaintext_asU8(): Uint8Array;
    getPlaintext_asB64(): string;
    setPlaintext(value: Uint8Array | string): SymmetricDecryptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricDecryptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricDecryptResponse): SymmetricDecryptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricDecryptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricDecryptResponse;
    static deserializeBinaryFromReader(message: SymmetricDecryptResponse, reader: jspb.BinaryReader): SymmetricDecryptResponse;
}

export namespace SymmetricDecryptResponse {
    export type AsObject = {
        keyId: string,
        versionId: string,
        plaintext: Uint8Array | string,
    }
}

export class GenerateDataKeyRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): GenerateDataKeyRequest;
    getVersionId(): string;
    setVersionId(value: string): GenerateDataKeyRequest;
    getAadContext(): Uint8Array | string;
    getAadContext_asU8(): Uint8Array;
    getAadContext_asB64(): string;
    setAadContext(value: Uint8Array | string): GenerateDataKeyRequest;
    getDataKeySpec(): yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm;
    setDataKeySpec(value: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm): GenerateDataKeyRequest;
    getSkipPlaintext(): boolean;
    setSkipPlaintext(value: boolean): GenerateDataKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateDataKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateDataKeyRequest): GenerateDataKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateDataKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateDataKeyRequest;
    static deserializeBinaryFromReader(message: GenerateDataKeyRequest, reader: jspb.BinaryReader): GenerateDataKeyRequest;
}

export namespace GenerateDataKeyRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
        aadContext: Uint8Array | string,
        dataKeySpec: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricAlgorithm,
        skipPlaintext: boolean,
    }
}

export class GenerateDataKeyResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): GenerateDataKeyResponse;
    getVersionId(): string;
    setVersionId(value: string): GenerateDataKeyResponse;
    getDataKeyPlaintext(): Uint8Array | string;
    getDataKeyPlaintext_asU8(): Uint8Array;
    getDataKeyPlaintext_asB64(): string;
    setDataKeyPlaintext(value: Uint8Array | string): GenerateDataKeyResponse;
    getDataKeyCiphertext(): Uint8Array | string;
    getDataKeyCiphertext_asU8(): Uint8Array;
    getDataKeyCiphertext_asB64(): string;
    setDataKeyCiphertext(value: Uint8Array | string): GenerateDataKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateDataKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateDataKeyResponse): GenerateDataKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateDataKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateDataKeyResponse;
    static deserializeBinaryFromReader(message: GenerateDataKeyResponse, reader: jspb.BinaryReader): GenerateDataKeyResponse;
}

export namespace GenerateDataKeyResponse {
    export type AsObject = {
        keyId: string,
        versionId: string,
        dataKeyPlaintext: Uint8Array | string,
        dataKeyCiphertext: Uint8Array | string,
    }
}

export class SymmetricReEncryptRequest extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricReEncryptRequest;
    getVersionId(): string;
    setVersionId(value: string): SymmetricReEncryptRequest;
    getAadContext(): Uint8Array | string;
    getAadContext_asU8(): Uint8Array;
    getAadContext_asB64(): string;
    setAadContext(value: Uint8Array | string): SymmetricReEncryptRequest;
    getSourceKeyId(): string;
    setSourceKeyId(value: string): SymmetricReEncryptRequest;
    getSourceAadContext(): Uint8Array | string;
    getSourceAadContext_asU8(): Uint8Array;
    getSourceAadContext_asB64(): string;
    setSourceAadContext(value: Uint8Array | string): SymmetricReEncryptRequest;
    getCiphertext(): Uint8Array | string;
    getCiphertext_asU8(): Uint8Array;
    getCiphertext_asB64(): string;
    setCiphertext(value: Uint8Array | string): SymmetricReEncryptRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricReEncryptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricReEncryptRequest): SymmetricReEncryptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricReEncryptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricReEncryptRequest;
    static deserializeBinaryFromReader(message: SymmetricReEncryptRequest, reader: jspb.BinaryReader): SymmetricReEncryptRequest;
}

export namespace SymmetricReEncryptRequest {
    export type AsObject = {
        keyId: string,
        versionId: string,
        aadContext: Uint8Array | string,
        sourceKeyId: string,
        sourceAadContext: Uint8Array | string,
        ciphertext: Uint8Array | string,
    }
}

export class SymmetricReEncryptResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): SymmetricReEncryptResponse;
    getVersionId(): string;
    setVersionId(value: string): SymmetricReEncryptResponse;
    getSourceKeyId(): string;
    setSourceKeyId(value: string): SymmetricReEncryptResponse;
    getSourceVersionId(): string;
    setSourceVersionId(value: string): SymmetricReEncryptResponse;
    getCiphertext(): Uint8Array | string;
    getCiphertext_asU8(): Uint8Array;
    getCiphertext_asB64(): string;
    setCiphertext(value: Uint8Array | string): SymmetricReEncryptResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SymmetricReEncryptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SymmetricReEncryptResponse): SymmetricReEncryptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SymmetricReEncryptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SymmetricReEncryptResponse;
    static deserializeBinaryFromReader(message: SymmetricReEncryptResponse, reader: jspb.BinaryReader): SymmetricReEncryptResponse;
}

export namespace SymmetricReEncryptResponse {
    export type AsObject = {
        keyId: string,
        versionId: string,
        sourceKeyId: string,
        sourceVersionId: string,
        ciphertext: Uint8Array | string,
    }
}
