// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/zone_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_compute_v1_zone_pb from "../../../../yandex/cloud/compute/v1/zone_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ListZonesRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListZonesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListZonesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListZonesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListZonesRequest): ListZonesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListZonesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListZonesRequest;
    static deserializeBinaryFromReader(message: ListZonesRequest, reader: jspb.BinaryReader): ListZonesRequest;
}

export namespace ListZonesRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListZonesResponse extends jspb.Message { 
    clearZonesList(): void;
    getZonesList(): Array<yandex_cloud_compute_v1_zone_pb.Zone>;
    setZonesList(value: Array<yandex_cloud_compute_v1_zone_pb.Zone>): ListZonesResponse;
    addZones(value?: yandex_cloud_compute_v1_zone_pb.Zone, index?: number): yandex_cloud_compute_v1_zone_pb.Zone;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListZonesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListZonesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListZonesResponse): ListZonesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListZonesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListZonesResponse;
    static deserializeBinaryFromReader(message: ListZonesResponse, reader: jspb.BinaryReader): ListZonesResponse;
}

export namespace ListZonesResponse {
    export type AsObject = {
        zonesList: Array<yandex_cloud_compute_v1_zone_pb.Zone.AsObject>,
        nextPageToken: string,
    }
}

export class GetZoneRequest extends jspb.Message { 
    getZoneId(): string;
    setZoneId(value: string): GetZoneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetZoneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetZoneRequest): GetZoneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetZoneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetZoneRequest;
    static deserializeBinaryFromReader(message: GetZoneRequest, reader: jspb.BinaryReader): GetZoneRequest;
}

export namespace GetZoneRequest {
    export type AsObject = {
        zoneId: string,
    }
}
