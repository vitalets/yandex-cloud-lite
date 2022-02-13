// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/endpoint_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_datatransfer_v1_endpoint_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";

export class GetEndpointRequest extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): GetEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEndpointRequest): GetEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEndpointRequest;
    static deserializeBinaryFromReader(message: GetEndpointRequest, reader: jspb.BinaryReader): GetEndpointRequest;
}

export namespace GetEndpointRequest {
    export type AsObject = {
        endpointId: string,
    }
}

export class ListEndpointsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListEndpointsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListEndpointsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListEndpointsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEndpointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEndpointsRequest): ListEndpointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEndpointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEndpointsRequest;
    static deserializeBinaryFromReader(message: ListEndpointsRequest, reader: jspb.BinaryReader): ListEndpointsRequest;
}

export namespace ListEndpointsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListEndpointsResponse extends jspb.Message { 
    clearEndpointsList(): void;
    getEndpointsList(): Array<yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint>;
    setEndpointsList(value: Array<yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint>): ListEndpointsResponse;
    addEndpoints(value?: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint, index?: number): yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListEndpointsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEndpointsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEndpointsResponse): ListEndpointsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEndpointsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEndpointsResponse;
    static deserializeBinaryFromReader(message: ListEndpointsResponse, reader: jspb.BinaryReader): ListEndpointsResponse;
}

export namespace ListEndpointsResponse {
    export type AsObject = {
        endpointsList: Array<yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.AsObject>,
        nextPageToken: string,
    }
}

export class CreateEndpointRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateEndpointRequest;
    getName(): string;
    setName(value: string): CreateEndpointRequest;
    getDescription(): string;
    setDescription(value: string): CreateEndpointRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings | undefined;
    setSettings(value?: yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings): CreateEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEndpointRequest): CreateEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEndpointRequest;
    static deserializeBinaryFromReader(message: CreateEndpointRequest, reader: jspb.BinaryReader): CreateEndpointRequest;
}

export namespace CreateEndpointRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        settings?: yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings.AsObject,
    }
}

export class CreateEndpointMetadata extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): CreateEndpointMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEndpointMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEndpointMetadata): CreateEndpointMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEndpointMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEndpointMetadata;
    static deserializeBinaryFromReader(message: CreateEndpointMetadata, reader: jspb.BinaryReader): CreateEndpointMetadata;
}

export namespace CreateEndpointMetadata {
    export type AsObject = {
        endpointId: string,
    }
}

export class UpdateEndpointRequest extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): UpdateEndpointRequest;
    getName(): string;
    setName(value: string): UpdateEndpointRequest;
    getDescription(): string;
    setDescription(value: string): UpdateEndpointRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings | undefined;
    setSettings(value?: yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings): UpdateEndpointRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEndpointRequest): UpdateEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEndpointRequest;
    static deserializeBinaryFromReader(message: UpdateEndpointRequest, reader: jspb.BinaryReader): UpdateEndpointRequest;
}

export namespace UpdateEndpointRequest {
    export type AsObject = {
        endpointId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        settings?: yandex_cloud_datatransfer_v1_endpoint_pb.EndpointSettings.AsObject,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateEndpointMetadata extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): UpdateEndpointMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEndpointMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEndpointMetadata): UpdateEndpointMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEndpointMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEndpointMetadata;
    static deserializeBinaryFromReader(message: UpdateEndpointMetadata, reader: jspb.BinaryReader): UpdateEndpointMetadata;
}

export namespace UpdateEndpointMetadata {
    export type AsObject = {
        endpointId: string,
    }
}

export class DeleteEndpointRequest extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): DeleteEndpointRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEndpointRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEndpointRequest): DeleteEndpointRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEndpointRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEndpointRequest;
    static deserializeBinaryFromReader(message: DeleteEndpointRequest, reader: jspb.BinaryReader): DeleteEndpointRequest;
}

export namespace DeleteEndpointRequest {
    export type AsObject = {
        endpointId: string,
    }
}

export class DeleteEndpointMetadata extends jspb.Message { 
    getEndpointId(): string;
    setEndpointId(value: string): DeleteEndpointMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEndpointMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEndpointMetadata): DeleteEndpointMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEndpointMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEndpointMetadata;
    static deserializeBinaryFromReader(message: DeleteEndpointMetadata, reader: jspb.BinaryReader): DeleteEndpointMetadata;
}

export namespace DeleteEndpointMetadata {
    export type AsObject = {
        endpointId: string,
    }
}
