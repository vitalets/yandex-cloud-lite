// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/service_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_billing_v1_service_pb from "../../../../yandex/cloud/billing/v1/service_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetServiceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetServiceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
    static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListServicesRequest extends jspb.Message { 
    getFilter(): string;
    setFilter(value: string): ListServicesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListServicesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListServicesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServicesRequest): ListServicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServicesRequest;
    static deserializeBinaryFromReader(message: ListServicesRequest, reader: jspb.BinaryReader): ListServicesRequest;
}

export namespace ListServicesRequest {
    export type AsObject = {
        filter: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListServicesResponse extends jspb.Message { 
    clearServicesList(): void;
    getServicesList(): Array<yandex_cloud_billing_v1_service_pb.Service>;
    setServicesList(value: Array<yandex_cloud_billing_v1_service_pb.Service>): ListServicesResponse;
    addServices(value?: yandex_cloud_billing_v1_service_pb.Service, index?: number): yandex_cloud_billing_v1_service_pb.Service;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListServicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
    static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
    export type AsObject = {
        servicesList: Array<yandex_cloud_billing_v1_service_pb.Service.AsObject>,
        nextPageToken: string,
    }
}
