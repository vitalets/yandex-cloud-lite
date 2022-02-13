// package: yandex.cloud.serverless.functions.v1
// file: yandex/cloud/serverless/functions/v1/function_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_functions_v1_function_pb from "../../../../../yandex/cloud/serverless/functions/v1/function_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetFunctionRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): GetFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFunctionRequest): GetFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFunctionRequest;
    static deserializeBinaryFromReader(message: GetFunctionRequest, reader: jspb.BinaryReader): GetFunctionRequest;
}

export namespace GetFunctionRequest {
    export type AsObject = {
        functionId: string,
    }
}

export class GetFunctionVersionRequest extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): GetFunctionVersionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFunctionVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFunctionVersionRequest): GetFunctionVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFunctionVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFunctionVersionRequest;
    static deserializeBinaryFromReader(message: GetFunctionVersionRequest, reader: jspb.BinaryReader): GetFunctionVersionRequest;
}

export namespace GetFunctionVersionRequest {
    export type AsObject = {
        functionVersionId: string,
    }
}

export class GetFunctionVersionByTagRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): GetFunctionVersionByTagRequest;
    getTag(): string;
    setTag(value: string): GetFunctionVersionByTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFunctionVersionByTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFunctionVersionByTagRequest): GetFunctionVersionByTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFunctionVersionByTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFunctionVersionByTagRequest;
    static deserializeBinaryFromReader(message: GetFunctionVersionByTagRequest, reader: jspb.BinaryReader): GetFunctionVersionByTagRequest;
}

export namespace GetFunctionVersionByTagRequest {
    export type AsObject = {
        functionId: string,
        tag: string,
    }
}

export class ListFunctionsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListFunctionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFunctionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFunctionsRequest;
    getFilter(): string;
    setFilter(value: string): ListFunctionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsRequest): ListFunctionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsRequest;
    static deserializeBinaryFromReader(message: ListFunctionsRequest, reader: jspb.BinaryReader): ListFunctionsRequest;
}

export namespace ListFunctionsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFunctionsResponse extends jspb.Message { 
    clearFunctionsList(): void;
    getFunctionsList(): Array<yandex_cloud_serverless_functions_v1_function_pb.Function>;
    setFunctionsList(value: Array<yandex_cloud_serverless_functions_v1_function_pb.Function>): ListFunctionsResponse;
    addFunctions(value?: yandex_cloud_serverless_functions_v1_function_pb.Function, index?: number): yandex_cloud_serverless_functions_v1_function_pb.Function;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFunctionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsResponse): ListFunctionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsResponse;
    static deserializeBinaryFromReader(message: ListFunctionsResponse, reader: jspb.BinaryReader): ListFunctionsResponse;
}

export namespace ListFunctionsResponse {
    export type AsObject = {
        functionsList: Array<yandex_cloud_serverless_functions_v1_function_pb.Function.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFunctionRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateFunctionRequest;
    getName(): string;
    setName(value: string): CreateFunctionRequest;
    getDescription(): string;
    setDescription(value: string): CreateFunctionRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionRequest): CreateFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFunctionRequest;
    static deserializeBinaryFromReader(message: CreateFunctionRequest, reader: jspb.BinaryReader): CreateFunctionRequest;
}

export namespace CreateFunctionRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateFunctionMetadata extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): CreateFunctionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionMetadata): CreateFunctionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFunctionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFunctionMetadata;
    static deserializeBinaryFromReader(message: CreateFunctionMetadata, reader: jspb.BinaryReader): CreateFunctionMetadata;
}

export namespace CreateFunctionMetadata {
    export type AsObject = {
        functionId: string,
    }
}

export class UpdateFunctionRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): UpdateFunctionRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFunctionRequest;
    getName(): string;
    setName(value: string): UpdateFunctionRequest;
    getDescription(): string;
    setDescription(value: string): UpdateFunctionRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFunctionRequest): UpdateFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFunctionRequest;
    static deserializeBinaryFromReader(message: UpdateFunctionRequest, reader: jspb.BinaryReader): UpdateFunctionRequest;
}

export namespace UpdateFunctionRequest {
    export type AsObject = {
        functionId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateFunctionMetadata extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): UpdateFunctionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFunctionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFunctionMetadata): UpdateFunctionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFunctionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFunctionMetadata;
    static deserializeBinaryFromReader(message: UpdateFunctionMetadata, reader: jspb.BinaryReader): UpdateFunctionMetadata;
}

export namespace UpdateFunctionMetadata {
    export type AsObject = {
        functionId: string,
    }
}

export class DeleteFunctionRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): DeleteFunctionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFunctionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFunctionRequest): DeleteFunctionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFunctionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFunctionRequest;
    static deserializeBinaryFromReader(message: DeleteFunctionRequest, reader: jspb.BinaryReader): DeleteFunctionRequest;
}

export namespace DeleteFunctionRequest {
    export type AsObject = {
        functionId: string,
    }
}

export class DeleteFunctionMetadata extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): DeleteFunctionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFunctionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFunctionMetadata): DeleteFunctionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFunctionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFunctionMetadata;
    static deserializeBinaryFromReader(message: DeleteFunctionMetadata, reader: jspb.BinaryReader): DeleteFunctionMetadata;
}

export namespace DeleteFunctionMetadata {
    export type AsObject = {
        functionId: string,
    }
}

export class ListRuntimesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRuntimesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRuntimesRequest): ListRuntimesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRuntimesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRuntimesRequest;
    static deserializeBinaryFromReader(message: ListRuntimesRequest, reader: jspb.BinaryReader): ListRuntimesRequest;
}

export namespace ListRuntimesRequest {
    export type AsObject = {
    }
}

export class ListRuntimesResponse extends jspb.Message { 
    clearRuntimesList(): void;
    getRuntimesList(): Array<string>;
    setRuntimesList(value: Array<string>): ListRuntimesResponse;
    addRuntimes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRuntimesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRuntimesResponse): ListRuntimesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRuntimesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRuntimesResponse;
    static deserializeBinaryFromReader(message: ListRuntimesResponse, reader: jspb.BinaryReader): ListRuntimesResponse;
}

export namespace ListRuntimesResponse {
    export type AsObject = {
        runtimesList: Array<string>,
    }
}

export class ListFunctionsVersionsRequest extends jspb.Message { 

    hasFolderId(): boolean;
    clearFolderId(): void;
    getFolderId(): string;
    setFolderId(value: string): ListFunctionsVersionsRequest;

    hasFunctionId(): boolean;
    clearFunctionId(): void;
    getFunctionId(): string;
    setFunctionId(value: string): ListFunctionsVersionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFunctionsVersionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFunctionsVersionsRequest;
    getFilter(): string;
    setFilter(value: string): ListFunctionsVersionsRequest;

    getIdCase(): ListFunctionsVersionsRequest.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsVersionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsVersionsRequest): ListFunctionsVersionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsVersionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsVersionsRequest;
    static deserializeBinaryFromReader(message: ListFunctionsVersionsRequest, reader: jspb.BinaryReader): ListFunctionsVersionsRequest;
}

export namespace ListFunctionsVersionsRequest {
    export type AsObject = {
        folderId: string,
        functionId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        FOLDER_ID = 1,
        FUNCTION_ID = 2,
    }

}

export class ListFunctionsVersionsResponse extends jspb.Message { 
    clearVersionsList(): void;
    getVersionsList(): Array<yandex_cloud_serverless_functions_v1_function_pb.Version>;
    setVersionsList(value: Array<yandex_cloud_serverless_functions_v1_function_pb.Version>): ListFunctionsVersionsResponse;
    addVersions(value?: yandex_cloud_serverless_functions_v1_function_pb.Version, index?: number): yandex_cloud_serverless_functions_v1_function_pb.Version;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFunctionsVersionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionsVersionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionsVersionsResponse): ListFunctionsVersionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionsVersionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionsVersionsResponse;
    static deserializeBinaryFromReader(message: ListFunctionsVersionsResponse, reader: jspb.BinaryReader): ListFunctionsVersionsResponse;
}

export namespace ListFunctionsVersionsResponse {
    export type AsObject = {
        versionsList: Array<yandex_cloud_serverless_functions_v1_function_pb.Version.AsObject>,
        nextPageToken: string,
    }
}

export class ListFunctionOperationsRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): ListFunctionOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFunctionOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFunctionOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListFunctionOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionOperationsRequest): ListFunctionOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionOperationsRequest;
    static deserializeBinaryFromReader(message: ListFunctionOperationsRequest, reader: jspb.BinaryReader): ListFunctionOperationsRequest;
}

export namespace ListFunctionOperationsRequest {
    export type AsObject = {
        functionId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFunctionOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListFunctionOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFunctionOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionOperationsResponse): ListFunctionOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionOperationsResponse;
    static deserializeBinaryFromReader(message: ListFunctionOperationsResponse, reader: jspb.BinaryReader): ListFunctionOperationsResponse;
}

export namespace ListFunctionOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFunctionVersionRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): CreateFunctionVersionRequest;
    getRuntime(): string;
    setRuntime(value: string): CreateFunctionVersionRequest;
    getDescription(): string;
    setDescription(value: string): CreateFunctionVersionRequest;
    getEntrypoint(): string;
    setEntrypoint(value: string): CreateFunctionVersionRequest;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_serverless_functions_v1_function_pb.Resources | undefined;
    setResources(value?: yandex_cloud_serverless_functions_v1_function_pb.Resources): CreateFunctionVersionRequest;

    hasExecutionTimeout(): boolean;
    clearExecutionTimeout(): void;
    getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): CreateFunctionVersionRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateFunctionVersionRequest;

    hasPackage(): boolean;
    clearPackage(): void;
    getPackage(): yandex_cloud_serverless_functions_v1_function_pb.Package | undefined;
    setPackage(value?: yandex_cloud_serverless_functions_v1_function_pb.Package): CreateFunctionVersionRequest;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): CreateFunctionVersionRequest;

    hasVersionId(): boolean;
    clearVersionId(): void;
    getVersionId(): string;
    setVersionId(value: string): CreateFunctionVersionRequest;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;
    clearTagList(): void;
    getTagList(): Array<string>;
    setTagList(value: Array<string>): CreateFunctionVersionRequest;
    addTag(value: string, index?: number): string;

    hasConnectivity(): boolean;
    clearConnectivity(): void;
    getConnectivity(): yandex_cloud_serverless_functions_v1_function_pb.Connectivity | undefined;
    setConnectivity(value?: yandex_cloud_serverless_functions_v1_function_pb.Connectivity): CreateFunctionVersionRequest;

    getNamedServiceAccountsMap(): jspb.Map<string, string>;
    clearNamedServiceAccountsMap(): void;
    clearSecretsList(): void;
    getSecretsList(): Array<yandex_cloud_serverless_functions_v1_function_pb.Secret>;
    setSecretsList(value: Array<yandex_cloud_serverless_functions_v1_function_pb.Secret>): CreateFunctionVersionRequest;
    addSecrets(value?: yandex_cloud_serverless_functions_v1_function_pb.Secret, index?: number): yandex_cloud_serverless_functions_v1_function_pb.Secret;

    getPackageSourceCase(): CreateFunctionVersionRequest.PackageSourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionVersionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionVersionRequest): CreateFunctionVersionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFunctionVersionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFunctionVersionRequest;
    static deserializeBinaryFromReader(message: CreateFunctionVersionRequest, reader: jspb.BinaryReader): CreateFunctionVersionRequest;
}

export namespace CreateFunctionVersionRequest {
    export type AsObject = {
        functionId: string,
        runtime: string,
        description: string,
        entrypoint: string,
        resources?: yandex_cloud_serverless_functions_v1_function_pb.Resources.AsObject,
        executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        serviceAccountId: string,
        pb_package?: yandex_cloud_serverless_functions_v1_function_pb.Package.AsObject,
        content: Uint8Array | string,
        versionId: string,

        environmentMap: Array<[string, string]>,
        tagList: Array<string>,
        connectivity?: yandex_cloud_serverless_functions_v1_function_pb.Connectivity.AsObject,

        namedServiceAccountsMap: Array<[string, string]>,
        secretsList: Array<yandex_cloud_serverless_functions_v1_function_pb.Secret.AsObject>,
    }

    export enum PackageSourceCase {
        PACKAGE_SOURCE_NOT_SET = 0,
        PACKAGE = 9,
        CONTENT = 10,
        VERSION_ID = 11,
    }

}

export class CreateFunctionVersionMetadata extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): CreateFunctionVersionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFunctionVersionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFunctionVersionMetadata): CreateFunctionVersionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFunctionVersionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFunctionVersionMetadata;
    static deserializeBinaryFromReader(message: CreateFunctionVersionMetadata, reader: jspb.BinaryReader): CreateFunctionVersionMetadata;
}

export namespace CreateFunctionVersionMetadata {
    export type AsObject = {
        functionVersionId: string,
    }
}

export class SetFunctionTagRequest extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): SetFunctionTagRequest;
    getTag(): string;
    setTag(value: string): SetFunctionTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFunctionTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetFunctionTagRequest): SetFunctionTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFunctionTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFunctionTagRequest;
    static deserializeBinaryFromReader(message: SetFunctionTagRequest, reader: jspb.BinaryReader): SetFunctionTagRequest;
}

export namespace SetFunctionTagRequest {
    export type AsObject = {
        functionVersionId: string,
        tag: string,
    }
}

export class RemoveFunctionTagRequest extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): RemoveFunctionTagRequest;
    getTag(): string;
    setTag(value: string): RemoveFunctionTagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveFunctionTagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveFunctionTagRequest): RemoveFunctionTagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveFunctionTagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveFunctionTagRequest;
    static deserializeBinaryFromReader(message: RemoveFunctionTagRequest, reader: jspb.BinaryReader): RemoveFunctionTagRequest;
}

export namespace RemoveFunctionTagRequest {
    export type AsObject = {
        functionVersionId: string,
        tag: string,
    }
}

export class SetFunctionTagMetadata extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): SetFunctionTagMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFunctionTagMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: SetFunctionTagMetadata): SetFunctionTagMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFunctionTagMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFunctionTagMetadata;
    static deserializeBinaryFromReader(message: SetFunctionTagMetadata, reader: jspb.BinaryReader): SetFunctionTagMetadata;
}

export namespace SetFunctionTagMetadata {
    export type AsObject = {
        functionVersionId: string,
    }
}

export class RemoveFunctionTagMetadata extends jspb.Message { 
    getFunctionVersionId(): string;
    setFunctionVersionId(value: string): RemoveFunctionTagMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveFunctionTagMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveFunctionTagMetadata): RemoveFunctionTagMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveFunctionTagMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveFunctionTagMetadata;
    static deserializeBinaryFromReader(message: RemoveFunctionTagMetadata, reader: jspb.BinaryReader): RemoveFunctionTagMetadata;
}

export namespace RemoveFunctionTagMetadata {
    export type AsObject = {
        functionVersionId: string,
    }
}

export class ListFunctionTagHistoryRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): ListFunctionTagHistoryRequest;
    getTag(): string;
    setTag(value: string): ListFunctionTagHistoryRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFunctionTagHistoryRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFunctionTagHistoryRequest;
    getFilter(): string;
    setFilter(value: string): ListFunctionTagHistoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionTagHistoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionTagHistoryRequest): ListFunctionTagHistoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionTagHistoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionTagHistoryRequest;
    static deserializeBinaryFromReader(message: ListFunctionTagHistoryRequest, reader: jspb.BinaryReader): ListFunctionTagHistoryRequest;
}

export namespace ListFunctionTagHistoryRequest {
    export type AsObject = {
        functionId: string,
        tag: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListFunctionTagHistoryResponse extends jspb.Message { 
    clearFunctionTagHistoryRecordList(): void;
    getFunctionTagHistoryRecordList(): Array<ListFunctionTagHistoryResponse.FunctionTagHistoryRecord>;
    setFunctionTagHistoryRecordList(value: Array<ListFunctionTagHistoryResponse.FunctionTagHistoryRecord>): ListFunctionTagHistoryResponse;
    addFunctionTagHistoryRecord(value?: ListFunctionTagHistoryResponse.FunctionTagHistoryRecord, index?: number): ListFunctionTagHistoryResponse.FunctionTagHistoryRecord;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFunctionTagHistoryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFunctionTagHistoryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFunctionTagHistoryResponse): ListFunctionTagHistoryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFunctionTagHistoryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFunctionTagHistoryResponse;
    static deserializeBinaryFromReader(message: ListFunctionTagHistoryResponse, reader: jspb.BinaryReader): ListFunctionTagHistoryResponse;
}

export namespace ListFunctionTagHistoryResponse {
    export type AsObject = {
        functionTagHistoryRecordList: Array<ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.AsObject>,
        nextPageToken: string,
    }


    export class FunctionTagHistoryRecord extends jspb.Message { 
        getFunctionId(): string;
        setFunctionId(value: string): FunctionTagHistoryRecord;
        getFunctionVersionId(): string;
        setFunctionVersionId(value: string): FunctionTagHistoryRecord;
        getTag(): string;
        setTag(value: string): FunctionTagHistoryRecord;

        hasEffectiveFrom(): boolean;
        clearEffectiveFrom(): void;
        getEffectiveFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEffectiveFrom(value?: google_protobuf_timestamp_pb.Timestamp): FunctionTagHistoryRecord;

        hasEffectiveTo(): boolean;
        clearEffectiveTo(): void;
        getEffectiveTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEffectiveTo(value?: google_protobuf_timestamp_pb.Timestamp): FunctionTagHistoryRecord;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): FunctionTagHistoryRecord.AsObject;
        static toObject(includeInstance: boolean, msg: FunctionTagHistoryRecord): FunctionTagHistoryRecord.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: FunctionTagHistoryRecord, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): FunctionTagHistoryRecord;
        static deserializeBinaryFromReader(message: FunctionTagHistoryRecord, reader: jspb.BinaryReader): FunctionTagHistoryRecord;
    }

    export namespace FunctionTagHistoryRecord {
        export type AsObject = {
            functionId: string,
            functionVersionId: string,
            tag: string,
            effectiveFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            effectiveTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class ListScalingPoliciesRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): ListScalingPoliciesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListScalingPoliciesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListScalingPoliciesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScalingPoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListScalingPoliciesRequest): ListScalingPoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScalingPoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScalingPoliciesRequest;
    static deserializeBinaryFromReader(message: ListScalingPoliciesRequest, reader: jspb.BinaryReader): ListScalingPoliciesRequest;
}

export namespace ListScalingPoliciesRequest {
    export type AsObject = {
        functionId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListScalingPoliciesResponse extends jspb.Message { 
    clearScalingPoliciesList(): void;
    getScalingPoliciesList(): Array<yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy>;
    setScalingPoliciesList(value: Array<yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy>): ListScalingPoliciesResponse;
    addScalingPolicies(value?: yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy, index?: number): yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListScalingPoliciesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListScalingPoliciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListScalingPoliciesResponse): ListScalingPoliciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListScalingPoliciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListScalingPoliciesResponse;
    static deserializeBinaryFromReader(message: ListScalingPoliciesResponse, reader: jspb.BinaryReader): ListScalingPoliciesResponse;
}

export namespace ListScalingPoliciesResponse {
    export type AsObject = {
        scalingPoliciesList: Array<yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy.AsObject>,
        nextPageToken: string,
    }
}

export class SetScalingPolicyRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): SetScalingPolicyRequest;
    getTag(): string;
    setTag(value: string): SetScalingPolicyRequest;
    getProvisionedInstancesCount(): number;
    setProvisionedInstancesCount(value: number): SetScalingPolicyRequest;
    getZoneInstancesLimit(): number;
    setZoneInstancesLimit(value: number): SetScalingPolicyRequest;
    getZoneRequestsLimit(): number;
    setZoneRequestsLimit(value: number): SetScalingPolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetScalingPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetScalingPolicyRequest): SetScalingPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetScalingPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetScalingPolicyRequest;
    static deserializeBinaryFromReader(message: SetScalingPolicyRequest, reader: jspb.BinaryReader): SetScalingPolicyRequest;
}

export namespace SetScalingPolicyRequest {
    export type AsObject = {
        functionId: string,
        tag: string,
        provisionedInstancesCount: number,
        zoneInstancesLimit: number,
        zoneRequestsLimit: number,
    }
}

export class SetScalingPolicyMetadata extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): SetScalingPolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetScalingPolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: SetScalingPolicyMetadata): SetScalingPolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetScalingPolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetScalingPolicyMetadata;
    static deserializeBinaryFromReader(message: SetScalingPolicyMetadata, reader: jspb.BinaryReader): SetScalingPolicyMetadata;
}

export namespace SetScalingPolicyMetadata {
    export type AsObject = {
        functionId: string,
    }
}

export class RemoveScalingPolicyRequest extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): RemoveScalingPolicyRequest;
    getTag(): string;
    setTag(value: string): RemoveScalingPolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveScalingPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveScalingPolicyRequest): RemoveScalingPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveScalingPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveScalingPolicyRequest;
    static deserializeBinaryFromReader(message: RemoveScalingPolicyRequest, reader: jspb.BinaryReader): RemoveScalingPolicyRequest;
}

export namespace RemoveScalingPolicyRequest {
    export type AsObject = {
        functionId: string,
        tag: string,
    }
}

export class RemoveScalingPolicyMetadata extends jspb.Message { 
    getFunctionId(): string;
    setFunctionId(value: string): RemoveScalingPolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveScalingPolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveScalingPolicyMetadata): RemoveScalingPolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveScalingPolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveScalingPolicyMetadata;
    static deserializeBinaryFromReader(message: RemoveScalingPolicyMetadata, reader: jspb.BinaryReader): RemoveScalingPolicyMetadata;
}

export namespace RemoveScalingPolicyMetadata {
    export type AsObject = {
        functionId: string,
    }
}
