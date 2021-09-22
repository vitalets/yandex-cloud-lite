// package: yandex.cloud.certificatemanager.v1
// file: yandex/cloud/certificatemanager/v1/certificate_content_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetCertificateContentResponse extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): GetCertificateContentResponse;
    clearCertificateChainList(): void;
    getCertificateChainList(): Array<string>;
    setCertificateChainList(value: Array<string>): GetCertificateContentResponse;
    addCertificateChain(value: string, index?: number): string;
    getPrivateKey(): string;
    setPrivateKey(value: string): GetCertificateContentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCertificateContentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCertificateContentResponse): GetCertificateContentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCertificateContentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCertificateContentResponse;
    static deserializeBinaryFromReader(message: GetCertificateContentResponse, reader: jspb.BinaryReader): GetCertificateContentResponse;
}

export namespace GetCertificateContentResponse {
    export type AsObject = {
        certificateId: string,
        certificateChainList: Array<string>,
        privateKey: string,
    }
}

export class GetCertificateContentRequest extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): GetCertificateContentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCertificateContentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCertificateContentRequest): GetCertificateContentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCertificateContentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCertificateContentRequest;
    static deserializeBinaryFromReader(message: GetCertificateContentRequest, reader: jspb.BinaryReader): GetCertificateContentRequest;
}

export namespace GetCertificateContentRequest {
    export type AsObject = {
        certificateId: string,
    }
}
