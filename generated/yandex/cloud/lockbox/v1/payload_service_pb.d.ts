// package: yandex.cloud.lockbox.v1
// file: yandex/cloud/lockbox/v1/payload_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_lockbox_v1_payload_pb from "../../../../yandex/cloud/lockbox/v1/payload_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetPayloadRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): GetPayloadRequest;
    getVersionId(): string;
    setVersionId(value: string): GetPayloadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPayloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPayloadRequest): GetPayloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPayloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPayloadRequest;
    static deserializeBinaryFromReader(message: GetPayloadRequest, reader: jspb.BinaryReader): GetPayloadRequest;
}

export namespace GetPayloadRequest {
    export type AsObject = {
        secretId: string,
        versionId: string,
    }
}
