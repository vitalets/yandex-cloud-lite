// package: yandex.cloud.serverless.apigateway.v1
// file: yandex/cloud/serverless/apigateway/v1/apigateway_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_apigateway_v1_apigateway_pb from "../../../../../yandex/cloud/serverless/apigateway/v1/apigateway_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetApiGatewayRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): GetApiGatewayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetApiGatewayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetApiGatewayRequest): GetApiGatewayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetApiGatewayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetApiGatewayRequest;
    static deserializeBinaryFromReader(message: GetApiGatewayRequest, reader: jspb.BinaryReader): GetApiGatewayRequest;
}

export namespace GetApiGatewayRequest {
    export type AsObject = {
        apiGatewayId: string,
    }
}

export class ListApiGatewayRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListApiGatewayRequest;
    getPageSize(): number;
    setPageSize(value: number): ListApiGatewayRequest;
    getPageToken(): string;
    setPageToken(value: string): ListApiGatewayRequest;
    getFilter(): string;
    setFilter(value: string): ListApiGatewayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiGatewayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiGatewayRequest): ListApiGatewayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiGatewayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiGatewayRequest;
    static deserializeBinaryFromReader(message: ListApiGatewayRequest, reader: jspb.BinaryReader): ListApiGatewayRequest;
}

export namespace ListApiGatewayRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListApiGatewayResponse extends jspb.Message { 
    clearApiGatewaysList(): void;
    getApiGatewaysList(): Array<yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway>;
    setApiGatewaysList(value: Array<yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway>): ListApiGatewayResponse;
    addApiGateways(value?: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway, index?: number): yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListApiGatewayResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListApiGatewayResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListApiGatewayResponse): ListApiGatewayResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListApiGatewayResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListApiGatewayResponse;
    static deserializeBinaryFromReader(message: ListApiGatewayResponse, reader: jspb.BinaryReader): ListApiGatewayResponse;
}

export namespace ListApiGatewayResponse {
    export type AsObject = {
        apiGatewaysList: Array<yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway.AsObject>,
        nextPageToken: string,
    }
}

export class CreateApiGatewayRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateApiGatewayRequest;
    getName(): string;
    setName(value: string): CreateApiGatewayRequest;
    getDescription(): string;
    setDescription(value: string): CreateApiGatewayRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasOpenapiSpec(): boolean;
    clearOpenapiSpec(): void;
    getOpenapiSpec(): string;
    setOpenapiSpec(value: string): CreateApiGatewayRequest;

    getSpecCase(): CreateApiGatewayRequest.SpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateApiGatewayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateApiGatewayRequest): CreateApiGatewayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateApiGatewayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateApiGatewayRequest;
    static deserializeBinaryFromReader(message: CreateApiGatewayRequest, reader: jspb.BinaryReader): CreateApiGatewayRequest;
}

export namespace CreateApiGatewayRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        openapiSpec: string,
    }

    export enum SpecCase {
        SPEC_NOT_SET = 0,
        OPENAPI_SPEC = 5,
    }

}

export class UpdateApiGatewayRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): UpdateApiGatewayRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateApiGatewayRequest;
    getName(): string;
    setName(value: string): UpdateApiGatewayRequest;
    getDescription(): string;
    setDescription(value: string): UpdateApiGatewayRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasOpenapiSpec(): boolean;
    clearOpenapiSpec(): void;
    getOpenapiSpec(): string;
    setOpenapiSpec(value: string): UpdateApiGatewayRequest;

    getSpecCase(): UpdateApiGatewayRequest.SpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateApiGatewayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateApiGatewayRequest): UpdateApiGatewayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateApiGatewayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateApiGatewayRequest;
    static deserializeBinaryFromReader(message: UpdateApiGatewayRequest, reader: jspb.BinaryReader): UpdateApiGatewayRequest;
}

export namespace UpdateApiGatewayRequest {
    export type AsObject = {
        apiGatewayId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        openapiSpec: string,
    }

    export enum SpecCase {
        SPEC_NOT_SET = 0,
        OPENAPI_SPEC = 6,
    }

}

export class DeleteApiGatewayRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): DeleteApiGatewayRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteApiGatewayRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteApiGatewayRequest): DeleteApiGatewayRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteApiGatewayRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteApiGatewayRequest;
    static deserializeBinaryFromReader(message: DeleteApiGatewayRequest, reader: jspb.BinaryReader): DeleteApiGatewayRequest;
}

export namespace DeleteApiGatewayRequest {
    export type AsObject = {
        apiGatewayId: string,
    }
}

export class AddDomainRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): AddDomainRequest;
    getDomainId(): string;
    setDomainId(value: string): AddDomainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDomainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddDomainRequest): AddDomainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDomainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDomainRequest;
    static deserializeBinaryFromReader(message: AddDomainRequest, reader: jspb.BinaryReader): AddDomainRequest;
}

export namespace AddDomainRequest {
    export type AsObject = {
        apiGatewayId: string,
        domainId: string,
    }
}

export class RemoveDomainRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): RemoveDomainRequest;
    getDomainId(): string;
    setDomainId(value: string): RemoveDomainRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveDomainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveDomainRequest): RemoveDomainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveDomainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveDomainRequest;
    static deserializeBinaryFromReader(message: RemoveDomainRequest, reader: jspb.BinaryReader): RemoveDomainRequest;
}

export namespace RemoveDomainRequest {
    export type AsObject = {
        apiGatewayId: string,
        domainId: string,
    }
}

export class CreateApiGatewayMetadata extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): CreateApiGatewayMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateApiGatewayMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateApiGatewayMetadata): CreateApiGatewayMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateApiGatewayMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateApiGatewayMetadata;
    static deserializeBinaryFromReader(message: CreateApiGatewayMetadata, reader: jspb.BinaryReader): CreateApiGatewayMetadata;
}

export namespace CreateApiGatewayMetadata {
    export type AsObject = {
        apiGatewayId: string,
    }
}

export class UpdateApiGatewayMetadata extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): UpdateApiGatewayMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateApiGatewayMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateApiGatewayMetadata): UpdateApiGatewayMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateApiGatewayMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateApiGatewayMetadata;
    static deserializeBinaryFromReader(message: UpdateApiGatewayMetadata, reader: jspb.BinaryReader): UpdateApiGatewayMetadata;
}

export namespace UpdateApiGatewayMetadata {
    export type AsObject = {
        apiGatewayId: string,
    }
}

export class DeleteApiGatewayMetadata extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): DeleteApiGatewayMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteApiGatewayMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteApiGatewayMetadata): DeleteApiGatewayMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteApiGatewayMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteApiGatewayMetadata;
    static deserializeBinaryFromReader(message: DeleteApiGatewayMetadata, reader: jspb.BinaryReader): DeleteApiGatewayMetadata;
}

export namespace DeleteApiGatewayMetadata {
    export type AsObject = {
        apiGatewayId: string,
    }
}

export class AddDomainMetadata extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): AddDomainMetadata;
    getDomainId(): string;
    setDomainId(value: string): AddDomainMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddDomainMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddDomainMetadata): AddDomainMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddDomainMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddDomainMetadata;
    static deserializeBinaryFromReader(message: AddDomainMetadata, reader: jspb.BinaryReader): AddDomainMetadata;
}

export namespace AddDomainMetadata {
    export type AsObject = {
        apiGatewayId: string,
        domainId: string,
    }
}

export class RemoveDomainMetadata extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): RemoveDomainMetadata;
    getDomainId(): string;
    setDomainId(value: string): RemoveDomainMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveDomainMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveDomainMetadata): RemoveDomainMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveDomainMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveDomainMetadata;
    static deserializeBinaryFromReader(message: RemoveDomainMetadata, reader: jspb.BinaryReader): RemoveDomainMetadata;
}

export namespace RemoveDomainMetadata {
    export type AsObject = {
        apiGatewayId: string,
        domainId: string,
    }
}

export class ListOperationsRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): ListOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
    static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
    export type AsObject = {
        apiGatewayId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
    static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class GetOpenapiSpecRequest extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): GetOpenapiSpecRequest;
    getFormat(): GetOpenapiSpecRequest.Format;
    setFormat(value: GetOpenapiSpecRequest.Format): GetOpenapiSpecRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenapiSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenapiSpecRequest): GetOpenapiSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenapiSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenapiSpecRequest;
    static deserializeBinaryFromReader(message: GetOpenapiSpecRequest, reader: jspb.BinaryReader): GetOpenapiSpecRequest;
}

export namespace GetOpenapiSpecRequest {
    export type AsObject = {
        apiGatewayId: string,
        format: GetOpenapiSpecRequest.Format,
    }

    export enum Format {
    FORMAT_UNSPECIFIED = 0,
    JSON = 1,
    YAML = 2,
    }

}

export class GetOpenapiSpecResponse extends jspb.Message { 
    getApiGatewayId(): string;
    setApiGatewayId(value: string): GetOpenapiSpecResponse;
    getOpenapiSpec(): string;
    setOpenapiSpec(value: string): GetOpenapiSpecResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOpenapiSpecResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOpenapiSpecResponse): GetOpenapiSpecResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOpenapiSpecResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOpenapiSpecResponse;
    static deserializeBinaryFromReader(message: GetOpenapiSpecResponse, reader: jspb.BinaryReader): GetOpenapiSpecResponse;
}

export namespace GetOpenapiSpecResponse {
    export type AsObject = {
        apiGatewayId: string,
        openapiSpec: string,
    }
}
