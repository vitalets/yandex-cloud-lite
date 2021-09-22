// package: yandex.cloud.iot.devices.v1
// file: yandex/cloud/iot/devices/v1/device_data_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class PublishDeviceDataRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): PublishDeviceDataRequest;
    getTopic(): string;
    setTopic(value: string): PublishDeviceDataRequest;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): PublishDeviceDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishDeviceDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishDeviceDataRequest): PublishDeviceDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishDeviceDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishDeviceDataRequest;
    static deserializeBinaryFromReader(message: PublishDeviceDataRequest, reader: jspb.BinaryReader): PublishDeviceDataRequest;
}

export namespace PublishDeviceDataRequest {
    export type AsObject = {
        deviceId: string,
        topic: string,
        data: Uint8Array | string,
    }
}

export class PublishDeviceDataResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishDeviceDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishDeviceDataResponse): PublishDeviceDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishDeviceDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishDeviceDataResponse;
    static deserializeBinaryFromReader(message: PublishDeviceDataResponse, reader: jspb.BinaryReader): PublishDeviceDataResponse;
}

export namespace PublishDeviceDataResponse {
    export type AsObject = {
    }
}
