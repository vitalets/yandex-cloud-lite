// package: yandex.cloud.endpoint
// file: yandex/cloud/endpoint/api_endpoint_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_endpoint_api_endpoint_pb from "../../../yandex/cloud/endpoint/api_endpoint_pb";

export class GetApiEndpointRequest extends jspb.Message { 
    getApiEndpointId(): string;
    setApiEndpointId(value: string): GetApiEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetApiEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetApiEndpointRequest): GetApiEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetApiEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetApiEndpointRequest;
    static deserializeBinaryFromReader(message: GetApiEndpointRequest, reader: jspb.BinaryReader): GetApiEndpointRequest;
}

export namespace GetApiEndpointRequest {
    export type AsObject = {
        apiEndpointId: string,
    }
}

export class ListApiEndpointsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListApiEndpointsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListApiEndpointsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiEndpointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiEndpointsRequest): ListApiEndpointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiEndpointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiEndpointsRequest;
    static deserializeBinaryFromReader(message: ListApiEndpointsRequest, reader: jspb.BinaryReader): ListApiEndpointsRequest;
}

export namespace ListApiEndpointsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListApiEndpointsResponse extends jspb.Message { 
    clearEndpointsList(): void;
    getEndpointsList(): Array<yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint>;
    setEndpointsList(value: Array<yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint>): ListApiEndpointsResponse;
    addEndpoints(value?: yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint, index?: number): yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListApiEndpointsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiEndpointsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiEndpointsResponse): ListApiEndpointsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiEndpointsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiEndpointsResponse;
    static deserializeBinaryFromReader(message: ListApiEndpointsResponse, reader: jspb.BinaryReader): ListApiEndpointsResponse;
}

export namespace ListApiEndpointsResponse {
    export type AsObject = {
        endpointsList: Array<yandex_cloud_endpoint_api_endpoint_pb.ApiEndpoint.AsObject>,
        nextPageToken: string,
    }
}
