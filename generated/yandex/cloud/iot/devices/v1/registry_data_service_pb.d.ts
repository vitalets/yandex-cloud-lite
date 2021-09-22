// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/registry_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class PublishRegistryDataRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): PublishRegistryDataRequest;
    getTopic(): string;
    setTopic(value: string): PublishRegistryDataRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): PublishRegistryDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishRegistryDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishRegistryDataRequest): PublishRegistryDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishRegistryDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishRegistryDataRequest;
    static deserializeBinaryFromReader(message: PublishRegistryDataRequest, reader: jspb.BinaryReader): PublishRegistryDataRequest;
}

export namespace PublishRegistryDataRequest {
    export type AsObject = {
        registryId: string,
        topic: string,
        data: Uint8Array | string,
    }
}

export class PublishRegistryDataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishRegistryDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishRegistryDataResponse): PublishRegistryDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishRegistryDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishRegistryDataResponse;
    static deserializeBinaryFromReader(message: PublishRegistryDataResponse, reader: jspb.BinaryReader): PublishRegistryDataResponse;
}

export namespace PublishRegistryDataResponse {
    export type AsObject = {
    }
}
