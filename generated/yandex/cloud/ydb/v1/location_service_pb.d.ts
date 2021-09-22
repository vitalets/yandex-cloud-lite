// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/location_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ydb_v1_location_pb from "../../../../yandex/cloud/ydb/v1/location_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetLocationRequest extends jspb.Message { 
    getLocationId(): string;
    setLocationId(value: string): GetLocationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
    static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
    export type AsObject = {
        locationId: string,
    }
}

export class ListLocationsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListLocationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLocationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLocationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLocationsRequest): ListLocationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLocationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLocationsRequest;
    static deserializeBinaryFromReader(message: ListLocationsRequest, reader: jspb.BinaryReader): ListLocationsRequest;
}

export namespace ListLocationsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListLocationsResponse extends jspb.Message { 
    clearLocationsList(): void;
    getLocationsList(): Array<yandex_cloud_ydb_v1_location_pb.Location>;
    setLocationsList(value: Array<yandex_cloud_ydb_v1_location_pb.Location>): ListLocationsResponse;
    addLocations(value?: yandex_cloud_ydb_v1_location_pb.Location, index?: number): yandex_cloud_ydb_v1_location_pb.Location;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLocationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLocationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLocationsResponse): ListLocationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLocationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLocationsResponse;
    static deserializeBinaryFromReader(message: ListLocationsResponse, reader: jspb.BinaryReader): ListLocationsResponse;
}

export namespace ListLocationsResponse {
    export type AsObject = {
        locationsList: Array<yandex_cloud_ydb_v1_location_pb.Location.AsObject>,
        nextPageToken: string,
    }
}
