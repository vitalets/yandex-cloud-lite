// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/service_account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_iam_v1_service_account_pb from "../../../../yandex/cloud/iam/v1/service_account_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetServiceAccountRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): GetServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServiceAccountRequest): GetServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServiceAccountRequest;
    static deserializeBinaryFromReader(message: GetServiceAccountRequest, reader: jspb.BinaryReader): GetServiceAccountRequest;
}

export namespace GetServiceAccountRequest {
    export type AsObject = {
        serviceAccountId: string,
    }
}

export class ListServiceAccountsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListServiceAccountsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListServiceAccountsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListServiceAccountsRequest;
    getFilter(): string;
    setFilter(value: string): ListServiceAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountsRequest): ListServiceAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountsRequest;
    static deserializeBinaryFromReader(message: ListServiceAccountsRequest, reader: jspb.BinaryReader): ListServiceAccountsRequest;
}

export namespace ListServiceAccountsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListServiceAccountsResponse extends jspb.Message { 
    clearServiceAccountsList(): void;
    getServiceAccountsList(): Array<yandex_cloud_iam_v1_service_account_pb.ServiceAccount>;
    setServiceAccountsList(value: Array<yandex_cloud_iam_v1_service_account_pb.ServiceAccount>): ListServiceAccountsResponse;
    addServiceAccounts(value?: yandex_cloud_iam_v1_service_account_pb.ServiceAccount, index?: number): yandex_cloud_iam_v1_service_account_pb.ServiceAccount;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListServiceAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountsResponse): ListServiceAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountsResponse;
    static deserializeBinaryFromReader(message: ListServiceAccountsResponse, reader: jspb.BinaryReader): ListServiceAccountsResponse;
}

export namespace ListServiceAccountsResponse {
    export type AsObject = {
        serviceAccountsList: Array<yandex_cloud_iam_v1_service_account_pb.ServiceAccount.AsObject>,
        nextPageToken: string,
    }
}

export class CreateServiceAccountRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateServiceAccountRequest;
    getName(): string;
    setName(value: string): CreateServiceAccountRequest;
    getDescription(): string;
    setDescription(value: string): CreateServiceAccountRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceAccountRequest): CreateServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceAccountRequest;
    static deserializeBinaryFromReader(message: CreateServiceAccountRequest, reader: jspb.BinaryReader): CreateServiceAccountRequest;
}

export namespace CreateServiceAccountRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateServiceAccountMetadata extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateServiceAccountMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceAccountMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceAccountMetadata): CreateServiceAccountMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceAccountMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceAccountMetadata;
    static deserializeBinaryFromReader(message: CreateServiceAccountMetadata, reader: jspb.BinaryReader): CreateServiceAccountMetadata;
}

export namespace CreateServiceAccountMetadata {
    export type AsObject = {
        serviceAccountId: string,
    }
}

export class UpdateServiceAccountRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateServiceAccountRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServiceAccountRequest;
    getName(): string;
    setName(value: string): UpdateServiceAccountRequest;
    getDescription(): string;
    setDescription(value: string): UpdateServiceAccountRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceAccountRequest): UpdateServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceAccountRequest;
    static deserializeBinaryFromReader(message: UpdateServiceAccountRequest, reader: jspb.BinaryReader): UpdateServiceAccountRequest;
}

export namespace UpdateServiceAccountRequest {
    export type AsObject = {
        serviceAccountId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateServiceAccountMetadata extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateServiceAccountMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceAccountMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceAccountMetadata): UpdateServiceAccountMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceAccountMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceAccountMetadata;
    static deserializeBinaryFromReader(message: UpdateServiceAccountMetadata, reader: jspb.BinaryReader): UpdateServiceAccountMetadata;
}

export namespace UpdateServiceAccountMetadata {
    export type AsObject = {
        serviceAccountId: string,
    }
}

export class DeleteServiceAccountRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): DeleteServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceAccountRequest): DeleteServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountRequest;
    static deserializeBinaryFromReader(message: DeleteServiceAccountRequest, reader: jspb.BinaryReader): DeleteServiceAccountRequest;
}

export namespace DeleteServiceAccountRequest {
    export type AsObject = {
        serviceAccountId: string,
    }
}

export class DeleteServiceAccountMetadata extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): DeleteServiceAccountMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceAccountMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceAccountMetadata): DeleteServiceAccountMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceAccountMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountMetadata;
    static deserializeBinaryFromReader(message: DeleteServiceAccountMetadata, reader: jspb.BinaryReader): DeleteServiceAccountMetadata;
}

export namespace DeleteServiceAccountMetadata {
    export type AsObject = {
        serviceAccountId: string,
    }
}

export class ListServiceAccountOperationsRequest extends jspb.Message { 
    getServiceAccountId(): string;
    setServiceAccountId(value: string): ListServiceAccountOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListServiceAccountOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListServiceAccountOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountOperationsRequest): ListServiceAccountOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountOperationsRequest;
    static deserializeBinaryFromReader(message: ListServiceAccountOperationsRequest, reader: jspb.BinaryReader): ListServiceAccountOperationsRequest;
}

export namespace ListServiceAccountOperationsRequest {
    export type AsObject = {
        serviceAccountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListServiceAccountOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListServiceAccountOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListServiceAccountOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountOperationsResponse): ListServiceAccountOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountOperationsResponse;
    static deserializeBinaryFromReader(message: ListServiceAccountOperationsResponse, reader: jspb.BinaryReader): ListServiceAccountOperationsResponse;
}

export namespace ListServiceAccountOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
