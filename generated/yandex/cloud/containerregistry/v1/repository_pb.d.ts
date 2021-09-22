// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/repository.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Repository extends jspb.Message { 
    getName(): string;
    setName(value: string): Repository;
    getId(): string;
    setId(value: string): Repository;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repository.AsObject;
    static toObject(includeInstance: boolean, msg: Repository): Repository.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repository, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repository;
    static deserializeBinaryFromReader(message: Repository, reader: jspb.BinaryReader): Repository;
}

export namespace Repository {
    export type AsObject = {
        name: string,
        id: string,
    }
}
