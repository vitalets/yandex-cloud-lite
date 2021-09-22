// package: yandex.cloud.organizationmanager.v1.saml
// file: yandex/cloud/organizationmanager/v1/saml/federation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_organizationmanager_v1_user_account_pb from "../../../../../yandex/cloud/organizationmanager/v1/user_account_pb";
import * as yandex_cloud_organizationmanager_v1_saml_federation_pb from "../../../../../yandex/cloud/organizationmanager/v1/saml/federation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetFederationRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): GetFederationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFederationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFederationRequest): GetFederationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFederationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFederationRequest;
    static deserializeBinaryFromReader(message: GetFederationRequest, reader: jspb.BinaryReader): GetFederationRequest;
}

export namespace GetFederationRequest {
    export type AsObject = {
        federationId: string,
    }
}

export class ListFederationsRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): ListFederationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFederationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFederationsRequest;
    getFilter(): string;
    setFilter(value: string): ListFederationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederationsRequest): ListFederationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederationsRequest;
    static deserializeBinaryFromReader(message: ListFederationsRequest, reader: jspb.BinaryReader): ListFederationsRequest;
}

export namespace ListFederationsRequest {
    export type AsObject = {
        organizationId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFederationsResponse extends jspb.Message { 
    clearFederationsList(): void;
    getFederationsList(): Array<yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation>;
    setFederationsList(value: Array<yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation>): ListFederationsResponse;
    addFederations(value?: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation, index?: number): yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFederationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederationsResponse): ListFederationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederationsResponse;
    static deserializeBinaryFromReader(message: ListFederationsResponse, reader: jspb.BinaryReader): ListFederationsResponse;
}

export namespace ListFederationsResponse {
    export type AsObject = {
        federationsList: Array<yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFederationRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): CreateFederationRequest;
    getName(): string;
    setName(value: string): CreateFederationRequest;
    getDescription(): string;
    setDescription(value: string): CreateFederationRequest;

    hasCookieMaxAge(): boolean;
    clearCookieMaxAge(): void;
    getCookieMaxAge(): google_protobuf_duration_pb.Duration | undefined;
    setCookieMaxAge(value?: google_protobuf_duration_pb.Duration): CreateFederationRequest;
    getAutoCreateAccountOnLogin(): boolean;
    setAutoCreateAccountOnLogin(value: boolean): CreateFederationRequest;
    getIssuer(): string;
    setIssuer(value: string): CreateFederationRequest;
    getSsoBinding(): yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType;
    setSsoBinding(value: yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType): CreateFederationRequest;
    getSsoUrl(): string;
    setSsoUrl(value: string): CreateFederationRequest;

    hasSecuritySettings(): boolean;
    clearSecuritySettings(): void;
    getSecuritySettings(): yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings | undefined;
    setSecuritySettings(value?: yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings): CreateFederationRequest;
    getCaseInsensitiveNameIds(): boolean;
    setCaseInsensitiveNameIds(value: boolean): CreateFederationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFederationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFederationRequest): CreateFederationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFederationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFederationRequest;
    static deserializeBinaryFromReader(message: CreateFederationRequest, reader: jspb.BinaryReader): CreateFederationRequest;
}

export namespace CreateFederationRequest {
    export type AsObject = {
        organizationId: string,
        name: string,
        description: string,
        cookieMaxAge?: google_protobuf_duration_pb.Duration.AsObject,
        autoCreateAccountOnLogin: boolean,
        issuer: string,
        ssoBinding: yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType,
        ssoUrl: string,
        securitySettings?: yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings.AsObject,
        caseInsensitiveNameIds: boolean,
    }
}

export class CreateFederationMetadata extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): CreateFederationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFederationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFederationMetadata): CreateFederationMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFederationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFederationMetadata;
    static deserializeBinaryFromReader(message: CreateFederationMetadata, reader: jspb.BinaryReader): CreateFederationMetadata;
}

export namespace CreateFederationMetadata {
    export type AsObject = {
        federationId: string,
    }
}

export class UpdateFederationRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): UpdateFederationRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFederationRequest;
    getName(): string;
    setName(value: string): UpdateFederationRequest;
    getDescription(): string;
    setDescription(value: string): UpdateFederationRequest;

    hasCookieMaxAge(): boolean;
    clearCookieMaxAge(): void;
    getCookieMaxAge(): google_protobuf_duration_pb.Duration | undefined;
    setCookieMaxAge(value?: google_protobuf_duration_pb.Duration): UpdateFederationRequest;
    getAutoCreateAccountOnLogin(): boolean;
    setAutoCreateAccountOnLogin(value: boolean): UpdateFederationRequest;
    getIssuer(): string;
    setIssuer(value: string): UpdateFederationRequest;
    getSsoBinding(): yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType;
    setSsoBinding(value: yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType): UpdateFederationRequest;
    getSsoUrl(): string;
    setSsoUrl(value: string): UpdateFederationRequest;

    hasSecuritySettings(): boolean;
    clearSecuritySettings(): void;
    getSecuritySettings(): yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings | undefined;
    setSecuritySettings(value?: yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings): UpdateFederationRequest;
    getCaseInsensitiveNameIds(): boolean;
    setCaseInsensitiveNameIds(value: boolean): UpdateFederationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFederationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFederationRequest): UpdateFederationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFederationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFederationRequest;
    static deserializeBinaryFromReader(message: UpdateFederationRequest, reader: jspb.BinaryReader): UpdateFederationRequest;
}

export namespace UpdateFederationRequest {
    export type AsObject = {
        federationId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        cookieMaxAge?: google_protobuf_duration_pb.Duration.AsObject,
        autoCreateAccountOnLogin: boolean,
        issuer: string,
        ssoBinding: yandex_cloud_organizationmanager_v1_saml_federation_pb.BindingType,
        ssoUrl: string,
        securitySettings?: yandex_cloud_organizationmanager_v1_saml_federation_pb.FederationSecuritySettings.AsObject,
        caseInsensitiveNameIds: boolean,
    }
}

export class UpdateFederationMetadata extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): UpdateFederationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFederationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFederationMetadata): UpdateFederationMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFederationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFederationMetadata;
    static deserializeBinaryFromReader(message: UpdateFederationMetadata, reader: jspb.BinaryReader): UpdateFederationMetadata;
}

export namespace UpdateFederationMetadata {
    export type AsObject = {
        federationId: string,
    }
}

export class DeleteFederationRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): DeleteFederationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFederationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFederationRequest): DeleteFederationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFederationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFederationRequest;
    static deserializeBinaryFromReader(message: DeleteFederationRequest, reader: jspb.BinaryReader): DeleteFederationRequest;
}

export namespace DeleteFederationRequest {
    export type AsObject = {
        federationId: string,
    }
}

export class DeleteFederationMetadata extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): DeleteFederationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFederationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFederationMetadata): DeleteFederationMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFederationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFederationMetadata;
    static deserializeBinaryFromReader(message: DeleteFederationMetadata, reader: jspb.BinaryReader): DeleteFederationMetadata;
}

export namespace DeleteFederationMetadata {
    export type AsObject = {
        federationId: string,
    }
}

export class AddFederatedUserAccountsRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): AddFederatedUserAccountsRequest;
    clearNameIdsList(): void;
    getNameIdsList(): Array<string>;
    setNameIdsList(value: Array<string>): AddFederatedUserAccountsRequest;
    addNameIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFederatedUserAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddFederatedUserAccountsRequest): AddFederatedUserAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFederatedUserAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFederatedUserAccountsRequest;
    static deserializeBinaryFromReader(message: AddFederatedUserAccountsRequest, reader: jspb.BinaryReader): AddFederatedUserAccountsRequest;
}

export namespace AddFederatedUserAccountsRequest {
    export type AsObject = {
        federationId: string,
        nameIdsList: Array<string>,
    }
}

export class AddFederatedUserAccountsMetadata extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): AddFederatedUserAccountsMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFederatedUserAccountsMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddFederatedUserAccountsMetadata): AddFederatedUserAccountsMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFederatedUserAccountsMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFederatedUserAccountsMetadata;
    static deserializeBinaryFromReader(message: AddFederatedUserAccountsMetadata, reader: jspb.BinaryReader): AddFederatedUserAccountsMetadata;
}

export namespace AddFederatedUserAccountsMetadata {
    export type AsObject = {
        federationId: string,
    }
}

export class AddFederatedUserAccountsResponse extends jspb.Message { 
    clearUserAccountsList(): void;
    getUserAccountsList(): Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount>;
    setUserAccountsList(value: Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount>): AddFederatedUserAccountsResponse;
    addUserAccounts(value?: yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount, index?: number): yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddFederatedUserAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddFederatedUserAccountsResponse): AddFederatedUserAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddFederatedUserAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddFederatedUserAccountsResponse;
    static deserializeBinaryFromReader(message: AddFederatedUserAccountsResponse, reader: jspb.BinaryReader): AddFederatedUserAccountsResponse;
}

export namespace AddFederatedUserAccountsResponse {
    export type AsObject = {
        userAccountsList: Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount.AsObject>,
    }
}

export class ListFederatedUserAccountsRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): ListFederatedUserAccountsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFederatedUserAccountsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFederatedUserAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederatedUserAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederatedUserAccountsRequest): ListFederatedUserAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederatedUserAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederatedUserAccountsRequest;
    static deserializeBinaryFromReader(message: ListFederatedUserAccountsRequest, reader: jspb.BinaryReader): ListFederatedUserAccountsRequest;
}

export namespace ListFederatedUserAccountsRequest {
    export type AsObject = {
        federationId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListFederatedUserAccountsResponse extends jspb.Message { 
    clearUserAccountsList(): void;
    getUserAccountsList(): Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount>;
    setUserAccountsList(value: Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount>): ListFederatedUserAccountsResponse;
    addUserAccounts(value?: yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount, index?: number): yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFederatedUserAccountsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederatedUserAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederatedUserAccountsResponse): ListFederatedUserAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederatedUserAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederatedUserAccountsResponse;
    static deserializeBinaryFromReader(message: ListFederatedUserAccountsResponse, reader: jspb.BinaryReader): ListFederatedUserAccountsResponse;
}

export namespace ListFederatedUserAccountsResponse {
    export type AsObject = {
        userAccountsList: Array<yandex_cloud_organizationmanager_v1_user_account_pb.UserAccount.AsObject>,
        nextPageToken: string,
    }
}

export class ListFederationOperationsRequest extends jspb.Message { 
    getFederationId(): string;
    setFederationId(value: string): ListFederationOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFederationOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFederationOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederationOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederationOperationsRequest): ListFederationOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederationOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederationOperationsRequest;
    static deserializeBinaryFromReader(message: ListFederationOperationsRequest, reader: jspb.BinaryReader): ListFederationOperationsRequest;
}

export namespace ListFederationOperationsRequest {
    export type AsObject = {
        federationId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListFederationOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListFederationOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFederationOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFederationOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFederationOperationsResponse): ListFederationOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFederationOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFederationOperationsResponse;
    static deserializeBinaryFromReader(message: ListFederationOperationsResponse, reader: jspb.BinaryReader): ListFederationOperationsResponse;
}

export namespace ListFederationOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
