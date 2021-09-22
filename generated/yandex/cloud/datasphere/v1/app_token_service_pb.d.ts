// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/app_token_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class AppTokenValidateRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AppTokenValidateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppTokenValidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AppTokenValidateRequest): AppTokenValidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppTokenValidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppTokenValidateRequest;
    static deserializeBinaryFromReader(message: AppTokenValidateRequest, reader: jspb.BinaryReader): AppTokenValidateRequest;
}

export namespace AppTokenValidateRequest {
    export type AsObject = {
        token: string,
    }
}
