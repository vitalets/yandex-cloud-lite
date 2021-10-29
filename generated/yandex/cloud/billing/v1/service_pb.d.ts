// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Service extends jspb.Message { 
    getId(): string;
    setId(value: string): Service;
    getName(): string;
    setName(value: string): Service;
    getDescription(): string;
    setDescription(value: string): Service;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
    }
}
