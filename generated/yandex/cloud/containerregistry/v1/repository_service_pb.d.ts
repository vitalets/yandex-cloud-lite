// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/repository_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_containerregistry_v1_repository_pb from "../../../../yandex/cloud/containerregistry/v1/repository_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetRepositoryRequest extends jspb.Message { 
    getRepositoryId(): string;
    setRepositoryId(value: string): GetRepositoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRepositoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRepositoryRequest): GetRepositoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRepositoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRepositoryRequest;
    static deserializeBinaryFromReader(message: GetRepositoryRequest, reader: jspb.BinaryReader): GetRepositoryRequest;
}

export namespace GetRepositoryRequest {
    export type AsObject = {
        repositoryId: string,
    }
}

export class GetRepositoryByNameRequest extends jspb.Message { 
    getRepositoryName(): string;
    setRepositoryName(value: string): GetRepositoryByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRepositoryByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRepositoryByNameRequest): GetRepositoryByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRepositoryByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRepositoryByNameRequest;
    static deserializeBinaryFromReader(message: GetRepositoryByNameRequest, reader: jspb.BinaryReader): GetRepositoryByNameRequest;
}

export namespace GetRepositoryByNameRequest {
    export type AsObject = {
        repositoryName: string,
    }
}

export class ListRepositoriesRequest extends jspb.Message { 
    getRegistryId(): string;
    setRegistryId(value: string): ListRepositoriesRequest;
    getFolderId(): string;
    setFolderId(value: string): ListRepositoriesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRepositoriesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRepositoriesRequest;
    getFilter(): string;
    setFilter(value: string): ListRepositoriesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListRepositoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRepositoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRepositoriesRequest): ListRepositoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRepositoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRepositoriesRequest;
    static deserializeBinaryFromReader(message: ListRepositoriesRequest, reader: jspb.BinaryReader): ListRepositoriesRequest;
}

export namespace ListRepositoriesRequest {
    export type AsObject = {
        registryId: string,
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListRepositoriesResponse extends jspb.Message { 
    clearRepositoriesList(): void;
    getRepositoriesList(): Array<yandex_cloud_containerregistry_v1_repository_pb.Repository>;
    setRepositoriesList(value: Array<yandex_cloud_containerregistry_v1_repository_pb.Repository>): ListRepositoriesResponse;
    addRepositories(value?: yandex_cloud_containerregistry_v1_repository_pb.Repository, index?: number): yandex_cloud_containerregistry_v1_repository_pb.Repository;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRepositoriesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRepositoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRepositoriesResponse): ListRepositoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRepositoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRepositoriesResponse;
    static deserializeBinaryFromReader(message: ListRepositoriesResponse, reader: jspb.BinaryReader): ListRepositoriesResponse;
}

export namespace ListRepositoriesResponse {
    export type AsObject = {
        repositoriesList: Array<yandex_cloud_containerregistry_v1_repository_pb.Repository.AsObject>,
        nextPageToken: string,
    }
}

export class UpsertRepositoryRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): UpsertRepositoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertRepositoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertRepositoryRequest): UpsertRepositoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertRepositoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertRepositoryRequest;
    static deserializeBinaryFromReader(message: UpsertRepositoryRequest, reader: jspb.BinaryReader): UpsertRepositoryRequest;
}

export namespace UpsertRepositoryRequest {
    export type AsObject = {
        name: string,
    }
}

export class UpsertRepositoryMetadata extends jspb.Message { 
    getRepositoryId(): string;
    setRepositoryId(value: string): UpsertRepositoryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpsertRepositoryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpsertRepositoryMetadata): UpsertRepositoryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpsertRepositoryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpsertRepositoryMetadata;
    static deserializeBinaryFromReader(message: UpsertRepositoryMetadata, reader: jspb.BinaryReader): UpsertRepositoryMetadata;
}

export namespace UpsertRepositoryMetadata {
    export type AsObject = {
        repositoryId: string,
    }
}

export class DeleteRepositoryRequest extends jspb.Message { 
    getRepositoryId(): string;
    setRepositoryId(value: string): DeleteRepositoryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRepositoryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRepositoryRequest): DeleteRepositoryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRepositoryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRepositoryRequest;
    static deserializeBinaryFromReader(message: DeleteRepositoryRequest, reader: jspb.BinaryReader): DeleteRepositoryRequest;
}

export namespace DeleteRepositoryRequest {
    export type AsObject = {
        repositoryId: string,
    }
}

export class DeleteRepositoryMetadata extends jspb.Message { 
    getRepositoryId(): string;
    setRepositoryId(value: string): DeleteRepositoryMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRepositoryMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRepositoryMetadata): DeleteRepositoryMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRepositoryMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRepositoryMetadata;
    static deserializeBinaryFromReader(message: DeleteRepositoryMetadata, reader: jspb.BinaryReader): DeleteRepositoryMetadata;
}

export namespace DeleteRepositoryMetadata {
    export type AsObject = {
        repositoryId: string,
    }
}
