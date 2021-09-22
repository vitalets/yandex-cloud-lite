// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/role.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Role extends jspb.Message { 
    getId(): string;
    setId(value: string): Role;
    getDescription(): string;
    setDescription(value: string): Role;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Role.AsObject;
    static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Role;
    static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
    export type AsObject = {
        id: string,
        description: string,
    }
}
