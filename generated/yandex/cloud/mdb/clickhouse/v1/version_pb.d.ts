// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/version.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Version extends jspb.Message { 
    getId(): string;
    setId(value: string): Version;
    getName(): string;
    setName(value: string): Version;
    getDeprecated(): boolean;
    setDeprecated(value: boolean): Version;
    clearUpdatableToList(): void;
    getUpdatableToList(): Array<string>;
    setUpdatableToList(value: Array<string>): Version;
    addUpdatableTo(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        id: string,
        name: string,
        deprecated: boolean,
        updatableToList: Array<string>,
    }
}
