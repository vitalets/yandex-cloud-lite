// package: yandex.cloud.organizationmanager.v1.saml
// file: yandex/cloud/organizationmanager/v1/saml/certificate_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_organizationmanager_v1_saml_certificate_pb from "../../../../../yandex/cloud/organizationmanager/v1/saml/certificate_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetCertificateRequest extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): GetCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCertificateRequest): GetCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCertificateRequest;
    static deserializeBinaryFromReader(message: GetCertificateRequest, reader: jspb.BinaryReader): GetCertificateRequest;
}

export namespace GetCertificateRequest {
    export type AsObject = {
        certificateId: string,
    }
}

export class ListCertificatesRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): ListCertificatesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCertificatesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListCertificatesRequest;
    getFilter(): string;
    setFilter(value: string): ListCertificatesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCertificatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCertificatesRequest): ListCertificatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCertificatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCertificatesRequest;
    static deserializeBinaryFromReader(message: ListCertificatesRequest, reader: jspb.BinaryReader): ListCertificatesRequest;
}

export namespace ListCertificatesRequest {
    export type AsObject = {
        federationId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListCertificatesResponse extends jspb.Message { 
    clearCertificatesList(): void;
    getCertificatesList(): Array<yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate>;
    setCertificatesList(value: Array<yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate>): ListCertificatesResponse;
    addCertificates(value?: yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate, index?: number): yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCertificatesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCertificatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCertificatesResponse): ListCertificatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCertificatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCertificatesResponse;
    static deserializeBinaryFromReader(message: ListCertificatesResponse, reader: jspb.BinaryReader): ListCertificatesResponse;
}

export namespace ListCertificatesResponse {
    export type AsObject = {
        certificatesList: Array<yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate.AsObject>,
        nextPageToken: string,
    }
}

export class CreateCertificateRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): CreateCertificateRequest;
    getName(): string;
    setName(value: string): CreateCertificateRequest;
    getDescription(): string;
    setDescription(value: string): CreateCertificateRequest;
    getData(): string;
    setData(value: string): CreateCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCertificateRequest): CreateCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCertificateRequest;
    static deserializeBinaryFromReader(message: CreateCertificateRequest, reader: jspb.BinaryReader): CreateCertificateRequest;
}

export namespace CreateCertificateRequest {
    export type AsObject = {
        federationId: string,
        name: string,
        description: string,
        data: string,
    }
}

export class CreateCertificateMetadata extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): CreateCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCertificateMetadata): CreateCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCertificateMetadata;
    static deserializeBinaryFromReader(message: CreateCertificateMetadata, reader: jspb.BinaryReader): CreateCertificateMetadata;
}

export namespace CreateCertificateMetadata {
    export type AsObject = {
        certificateId: string,
    }
}

export class UpdateCertificateRequest extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): UpdateCertificateRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCertificateRequest;
    getName(): string;
    setName(value: string): UpdateCertificateRequest;
    getDescription(): string;
    setDescription(value: string): UpdateCertificateRequest;
    getData(): string;
    setData(value: string): UpdateCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCertificateRequest): UpdateCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCertificateRequest;
    static deserializeBinaryFromReader(message: UpdateCertificateRequest, reader: jspb.BinaryReader): UpdateCertificateRequest;
}

export namespace UpdateCertificateRequest {
    export type AsObject = {
        certificateId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        data: string,
    }
}

export class UpdateCertificateMetadata extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): UpdateCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCertificateMetadata): UpdateCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCertificateMetadata;
    static deserializeBinaryFromReader(message: UpdateCertificateMetadata, reader: jspb.BinaryReader): UpdateCertificateMetadata;
}

export namespace UpdateCertificateMetadata {
    export type AsObject = {
        certificateId: string,
    }
}

export class DeleteCertificateRequest extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): DeleteCertificateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCertificateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCertificateRequest): DeleteCertificateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCertificateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCertificateRequest;
    static deserializeBinaryFromReader(message: DeleteCertificateRequest, reader: jspb.BinaryReader): DeleteCertificateRequest;
}

export namespace DeleteCertificateRequest {
    export type AsObject = {
        certificateId: string,
    }
}

export class DeleteCertificateMetadata extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): DeleteCertificateMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteCertificateMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteCertificateMetadata): DeleteCertificateMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteCertificateMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteCertificateMetadata;
    static deserializeBinaryFromReader(message: DeleteCertificateMetadata, reader: jspb.BinaryReader): DeleteCertificateMetadata;
}

export namespace DeleteCertificateMetadata {
    export type AsObject = {
        certificateId: string,
    }
}

export class ListCertificateOperationsRequest extends jspb.Message { 
    getCertificateId(): string;
    setCertificateId(value: string): ListCertificateOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListCertificateOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListCertificateOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCertificateOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCertificateOperationsRequest): ListCertificateOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCertificateOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCertificateOperationsRequest;
    static deserializeBinaryFromReader(message: ListCertificateOperationsRequest, reader: jspb.BinaryReader): ListCertificateOperationsRequest;
}

export namespace ListCertificateOperationsRequest {
    export type AsObject = {
        certificateId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListCertificateOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListCertificateOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListCertificateOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCertificateOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCertificateOperationsResponse): ListCertificateOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCertificateOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCertificateOperationsResponse;
    static deserializeBinaryFromReader(message: ListCertificateOperationsResponse, reader: jspb.BinaryReader): ListCertificateOperationsResponse;
}

export namespace ListCertificateOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
