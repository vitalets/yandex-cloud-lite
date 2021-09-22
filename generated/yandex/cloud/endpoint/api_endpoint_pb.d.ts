// package: yandex.cloud.endpoint
// file: yandex/cloud/endpoint/api_endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ApiEndpoint extends jspb.Message { 
    getId(): string;
    setId(value: string): ApiEndpoint;
    getAddress(): string;
    setAddress(value: string): ApiEndpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiEndpoint.AsObject;
    static toObject(includeInstance: boolean, msg: ApiEndpoint): ApiEndpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiEndpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiEndpoint;
    static deserializeBinaryFromReader(message: ApiEndpoint, reader: jspb.BinaryReader): ApiEndpoint;
}

export namespace ApiEndpoint {
    export type AsObject = {
        id: string,
        address: string,
    }
}
