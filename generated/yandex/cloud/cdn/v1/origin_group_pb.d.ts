// package: yandex.cloud.cdn.v1
// file: yandex/cloud/cdn/v1/origin_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_cdn_v1_origin_pb from "../../../../yandex/cloud/cdn/v1/origin_pb";

export class OriginGroup extends jspb.Message { 
    getId(): number;
    setId(value: number): OriginGroup;
    getFolderId(): string;
    setFolderId(value: string): OriginGroup;
    getName(): string;
    setName(value: string): OriginGroup;
    getUseNext(): boolean;
    setUseNext(value: boolean): OriginGroup;
    clearOriginsList(): void;
    getOriginsList(): Array<yandex_cloud_cdn_v1_origin_pb.Origin>;
    setOriginsList(value: Array<yandex_cloud_cdn_v1_origin_pb.Origin>): OriginGroup;
    addOrigins(value?: yandex_cloud_cdn_v1_origin_pb.Origin, index?: number): yandex_cloud_cdn_v1_origin_pb.Origin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OriginGroup.AsObject;
    static toObject(includeInstance: boolean, msg: OriginGroup): OriginGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OriginGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OriginGroup;
    static deserializeBinaryFromReader(message: OriginGroup, reader: jspb.BinaryReader): OriginGroup;
}

export namespace OriginGroup {
    export type AsObject = {
        id: number,
        folderId: string,
        name: string,
        useNext: boolean,
        originsList: Array<yandex_cloud_cdn_v1_origin_pb.Origin.AsObject>,
    }
}
