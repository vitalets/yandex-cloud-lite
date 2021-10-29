// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/http_router_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_http_router_pb from "../../../../yandex/cloud/apploadbalancer/v1/http_router_pb";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetHttpRouterRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): GetHttpRouterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetHttpRouterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetHttpRouterRequest): GetHttpRouterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetHttpRouterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetHttpRouterRequest;
    static deserializeBinaryFromReader(message: GetHttpRouterRequest, reader: jspb.BinaryReader): GetHttpRouterRequest;
}

export namespace GetHttpRouterRequest {
    export type AsObject = {
        httpRouterId: string,
    }
}

export class ListHttpRoutersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListHttpRoutersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHttpRoutersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHttpRoutersRequest;
    getFilter(): string;
    setFilter(value: string): ListHttpRoutersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHttpRoutersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHttpRoutersRequest): ListHttpRoutersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHttpRoutersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHttpRoutersRequest;
    static deserializeBinaryFromReader(message: ListHttpRoutersRequest, reader: jspb.BinaryReader): ListHttpRoutersRequest;
}

export namespace ListHttpRoutersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListHttpRoutersResponse extends jspb.Message { 
    clearHttpRoutersList(): void;
    getHttpRoutersList(): Array<yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter>;
    setHttpRoutersList(value: Array<yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter>): ListHttpRoutersResponse;
    addHttpRouters(value?: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter, index?: number): yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHttpRoutersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHttpRoutersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHttpRoutersResponse): ListHttpRoutersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHttpRoutersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHttpRoutersResponse;
    static deserializeBinaryFromReader(message: ListHttpRoutersResponse, reader: jspb.BinaryReader): ListHttpRoutersResponse;
}

export namespace ListHttpRoutersResponse {
    export type AsObject = {
        httpRoutersList: Array<yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteHttpRouterRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): DeleteHttpRouterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHttpRouterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHttpRouterRequest): DeleteHttpRouterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteHttpRouterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteHttpRouterRequest;
    static deserializeBinaryFromReader(message: DeleteHttpRouterRequest, reader: jspb.BinaryReader): DeleteHttpRouterRequest;
}

export namespace DeleteHttpRouterRequest {
    export type AsObject = {
        httpRouterId: string,
    }
}

export class DeleteHttpRouterMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): DeleteHttpRouterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteHttpRouterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteHttpRouterMetadata): DeleteHttpRouterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteHttpRouterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteHttpRouterMetadata;
    static deserializeBinaryFromReader(message: DeleteHttpRouterMetadata, reader: jspb.BinaryReader): DeleteHttpRouterMetadata;
}

export namespace DeleteHttpRouterMetadata {
    export type AsObject = {
        httpRouterId: string,
    }
}

export class UpdateHttpRouterRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateHttpRouterRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateHttpRouterRequest;
    getName(): string;
    setName(value: string): UpdateHttpRouterRequest;
    getDescription(): string;
    setDescription(value: string): UpdateHttpRouterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearVirtualHostsList(): void;
    getVirtualHostsList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    setVirtualHostsList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>): UpdateHttpRouterRequest;
    addVirtualHosts(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHttpRouterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHttpRouterRequest): UpdateHttpRouterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHttpRouterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHttpRouterRequest;
    static deserializeBinaryFromReader(message: UpdateHttpRouterRequest, reader: jspb.BinaryReader): UpdateHttpRouterRequest;
}

export namespace UpdateHttpRouterRequest {
    export type AsObject = {
        httpRouterId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        virtualHostsList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost.AsObject>,
    }
}

export class UpdateHttpRouterMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateHttpRouterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateHttpRouterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateHttpRouterMetadata): UpdateHttpRouterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateHttpRouterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateHttpRouterMetadata;
    static deserializeBinaryFromReader(message: UpdateHttpRouterMetadata, reader: jspb.BinaryReader): UpdateHttpRouterMetadata;
}

export namespace UpdateHttpRouterMetadata {
    export type AsObject = {
        httpRouterId: string,
    }
}

export class CreateHttpRouterRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateHttpRouterRequest;
    getName(): string;
    setName(value: string): CreateHttpRouterRequest;
    getDescription(): string;
    setDescription(value: string): CreateHttpRouterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearVirtualHostsList(): void;
    getVirtualHostsList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    setVirtualHostsList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>): CreateHttpRouterRequest;
    addVirtualHosts(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHttpRouterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHttpRouterRequest): CreateHttpRouterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHttpRouterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHttpRouterRequest;
    static deserializeBinaryFromReader(message: CreateHttpRouterRequest, reader: jspb.BinaryReader): CreateHttpRouterRequest;
}

export namespace CreateHttpRouterRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        virtualHostsList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost.AsObject>,
    }
}

export class CreateHttpRouterMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): CreateHttpRouterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateHttpRouterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateHttpRouterMetadata): CreateHttpRouterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateHttpRouterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateHttpRouterMetadata;
    static deserializeBinaryFromReader(message: CreateHttpRouterMetadata, reader: jspb.BinaryReader): CreateHttpRouterMetadata;
}

export namespace CreateHttpRouterMetadata {
    export type AsObject = {
        httpRouterId: string,
    }
}

export class ListHttpRouterOperationsRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): ListHttpRouterOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListHttpRouterOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListHttpRouterOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHttpRouterOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListHttpRouterOperationsRequest): ListHttpRouterOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHttpRouterOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHttpRouterOperationsRequest;
    static deserializeBinaryFromReader(message: ListHttpRouterOperationsRequest, reader: jspb.BinaryReader): ListHttpRouterOperationsRequest;
}

export namespace ListHttpRouterOperationsRequest {
    export type AsObject = {
        httpRouterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListHttpRouterOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListHttpRouterOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListHttpRouterOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListHttpRouterOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListHttpRouterOperationsResponse): ListHttpRouterOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListHttpRouterOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListHttpRouterOperationsResponse;
    static deserializeBinaryFromReader(message: ListHttpRouterOperationsResponse, reader: jspb.BinaryReader): ListHttpRouterOperationsResponse;
}

export namespace ListHttpRouterOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
