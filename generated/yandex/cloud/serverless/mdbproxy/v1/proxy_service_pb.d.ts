// package: yandex.cloud.serverless.mdbproxy.v1
// file: yandex/cloud/serverless/mdbproxy/v1/proxy_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_mdbproxy_v1_proxy_pb from "../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetProxyRequest extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): GetProxyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProxyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProxyRequest): GetProxyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProxyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProxyRequest;
    static deserializeBinaryFromReader(message: GetProxyRequest, reader: jspb.BinaryReader): GetProxyRequest;
}

export namespace GetProxyRequest {
    export type AsObject = {
        proxyId: string,
    }
}

export class ListProxyRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListProxyRequest;
    getPageSize(): number;
    setPageSize(value: number): ListProxyRequest;
    getPageToken(): string;
    setPageToken(value: string): ListProxyRequest;
    getFilter(): string;
    setFilter(value: string): ListProxyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProxyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProxyRequest): ListProxyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProxyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProxyRequest;
    static deserializeBinaryFromReader(message: ListProxyRequest, reader: jspb.BinaryReader): ListProxyRequest;
}

export namespace ListProxyRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListProxyResponse extends jspb.Message { 
    clearProxiesList(): void;
    getProxiesList(): Array<yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy>;
    setProxiesList(value: Array<yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy>): ListProxyResponse;
    addProxies(value?: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy, index?: number): yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListProxyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProxyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProxyResponse): ListProxyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProxyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProxyResponse;
    static deserializeBinaryFromReader(message: ListProxyResponse, reader: jspb.BinaryReader): ListProxyResponse;
}

export namespace ListProxyResponse {
    export type AsObject = {
        proxiesList: Array<yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy.AsObject>,
        nextPageToken: string,
    }
}

export class CreateProxyRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateProxyRequest;
    getName(): string;
    setName(value: string): CreateProxyRequest;
    getDescription(): string;
    setDescription(value: string): CreateProxyRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target | undefined;
    setTarget(value?: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target): CreateProxyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProxyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProxyRequest): CreateProxyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProxyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProxyRequest;
    static deserializeBinaryFromReader(message: CreateProxyRequest, reader: jspb.BinaryReader): CreateProxyRequest;
}

export namespace CreateProxyRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        target?: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target.AsObject,
    }
}

export class CreateProxyMetadata extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): CreateProxyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProxyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProxyMetadata): CreateProxyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProxyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProxyMetadata;
    static deserializeBinaryFromReader(message: CreateProxyMetadata, reader: jspb.BinaryReader): CreateProxyMetadata;
}

export namespace CreateProxyMetadata {
    export type AsObject = {
        proxyId: string,
    }
}

export class UpdateProxyRequest extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): UpdateProxyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateProxyRequest;
    getName(): string;
    setName(value: string): UpdateProxyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateProxyRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target | undefined;
    setTarget(value?: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target): UpdateProxyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProxyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProxyRequest): UpdateProxyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProxyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProxyRequest;
    static deserializeBinaryFromReader(message: UpdateProxyRequest, reader: jspb.BinaryReader): UpdateProxyRequest;
}

export namespace UpdateProxyRequest {
    export type AsObject = {
        proxyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        target?: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Target.AsObject,
    }
}

export class UpdateProxyMetadata extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): UpdateProxyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProxyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProxyMetadata): UpdateProxyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProxyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProxyMetadata;
    static deserializeBinaryFromReader(message: UpdateProxyMetadata, reader: jspb.BinaryReader): UpdateProxyMetadata;
}

export namespace UpdateProxyMetadata {
    export type AsObject = {
        proxyId: string,
    }
}

export class DeleteProxyRequest extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): DeleteProxyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProxyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProxyRequest): DeleteProxyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProxyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProxyRequest;
    static deserializeBinaryFromReader(message: DeleteProxyRequest, reader: jspb.BinaryReader): DeleteProxyRequest;
}

export namespace DeleteProxyRequest {
    export type AsObject = {
        proxyId: string,
    }
}

export class DeleteProxyMetadata extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): DeleteProxyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProxyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProxyMetadata): DeleteProxyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProxyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProxyMetadata;
    static deserializeBinaryFromReader(message: DeleteProxyMetadata, reader: jspb.BinaryReader): DeleteProxyMetadata;
}

export namespace DeleteProxyMetadata {
    export type AsObject = {
        proxyId: string,
    }
}

export class ListProxyOperationsRequest extends jspb.Message { 
    getProxyId(): string;
    setProxyId(value: string): ListProxyOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListProxyOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListProxyOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListProxyOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProxyOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProxyOperationsRequest): ListProxyOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProxyOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProxyOperationsRequest;
    static deserializeBinaryFromReader(message: ListProxyOperationsRequest, reader: jspb.BinaryReader): ListProxyOperationsRequest;
}

export namespace ListProxyOperationsRequest {
    export type AsObject = {
        proxyId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListProxyOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListProxyOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListProxyOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProxyOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProxyOperationsResponse): ListProxyOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProxyOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProxyOperationsResponse;
    static deserializeBinaryFromReader(message: ListProxyOperationsResponse, reader: jspb.BinaryReader): ListProxyOperationsResponse;
}

export namespace ListProxyOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
