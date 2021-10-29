// package: yandex.cloud.serverless.containers.v1
// file: yandex/cloud/serverless/containers/v1/container_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_serverless_containers_v1_container_pb from "../../../../../yandex/cloud/serverless/containers/v1/container_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetContainerRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): GetContainerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContainerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetContainerRequest): GetContainerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContainerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContainerRequest;
    static deserializeBinaryFromReader(message: GetContainerRequest, reader: jspb.BinaryReader): GetContainerRequest;
}

export namespace GetContainerRequest {
    export type AsObject = {
        containerId: string,
    }
}

export class ListContainersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListContainersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListContainersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListContainersRequest;
    getFilter(): string;
    setFilter(value: string): ListContainersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainersRequest): ListContainersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainersRequest;
    static deserializeBinaryFromReader(message: ListContainersRequest, reader: jspb.BinaryReader): ListContainersRequest;
}

export namespace ListContainersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListContainersResponse extends jspb.Message { 
    clearContainersList(): void;
    getContainersList(): Array<yandex_cloud_serverless_containers_v1_container_pb.Container>;
    setContainersList(value: Array<yandex_cloud_serverless_containers_v1_container_pb.Container>): ListContainersResponse;
    addContainers(value?: yandex_cloud_serverless_containers_v1_container_pb.Container, index?: number): yandex_cloud_serverless_containers_v1_container_pb.Container;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListContainersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainersResponse): ListContainersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainersResponse;
    static deserializeBinaryFromReader(message: ListContainersResponse, reader: jspb.BinaryReader): ListContainersResponse;
}

export namespace ListContainersResponse {
    export type AsObject = {
        containersList: Array<yandex_cloud_serverless_containers_v1_container_pb.Container.AsObject>,
        nextPageToken: string,
    }
}

export class CreateContainerRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateContainerRequest;
    getName(): string;
    setName(value: string): CreateContainerRequest;
    getDescription(): string;
    setDescription(value: string): CreateContainerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateContainerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateContainerRequest): CreateContainerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateContainerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateContainerRequest;
    static deserializeBinaryFromReader(message: CreateContainerRequest, reader: jspb.BinaryReader): CreateContainerRequest;
}

export namespace CreateContainerRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateContainerMetadata extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): CreateContainerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateContainerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateContainerMetadata): CreateContainerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateContainerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateContainerMetadata;
    static deserializeBinaryFromReader(message: CreateContainerMetadata, reader: jspb.BinaryReader): CreateContainerMetadata;
}

export namespace CreateContainerMetadata {
    export type AsObject = {
        containerId: string,
    }
}

export class UpdateContainerRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): UpdateContainerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateContainerRequest;
    getName(): string;
    setName(value: string): UpdateContainerRequest;
    getDescription(): string;
    setDescription(value: string): UpdateContainerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateContainerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateContainerRequest): UpdateContainerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateContainerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateContainerRequest;
    static deserializeBinaryFromReader(message: UpdateContainerRequest, reader: jspb.BinaryReader): UpdateContainerRequest;
}

export namespace UpdateContainerRequest {
    export type AsObject = {
        containerId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateContainerMetadata extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): UpdateContainerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateContainerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateContainerMetadata): UpdateContainerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateContainerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateContainerMetadata;
    static deserializeBinaryFromReader(message: UpdateContainerMetadata, reader: jspb.BinaryReader): UpdateContainerMetadata;
}

export namespace UpdateContainerMetadata {
    export type AsObject = {
        containerId: string,
    }
}

export class DeleteContainerRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): DeleteContainerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteContainerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteContainerRequest): DeleteContainerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteContainerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteContainerRequest;
    static deserializeBinaryFromReader(message: DeleteContainerRequest, reader: jspb.BinaryReader): DeleteContainerRequest;
}

export namespace DeleteContainerRequest {
    export type AsObject = {
        containerId: string,
    }
}

export class DeleteContainerMetadata extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): DeleteContainerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteContainerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteContainerMetadata): DeleteContainerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteContainerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteContainerMetadata;
    static deserializeBinaryFromReader(message: DeleteContainerMetadata, reader: jspb.BinaryReader): DeleteContainerMetadata;
}

export namespace DeleteContainerMetadata {
    export type AsObject = {
        containerId: string,
    }
}

export class GetContainerRevisionRequest extends jspb.Message { 
    getContainerRevisionId(): string;
    setContainerRevisionId(value: string): GetContainerRevisionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetContainerRevisionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetContainerRevisionRequest): GetContainerRevisionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetContainerRevisionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetContainerRevisionRequest;
    static deserializeBinaryFromReader(message: GetContainerRevisionRequest, reader: jspb.BinaryReader): GetContainerRevisionRequest;
}

export namespace GetContainerRevisionRequest {
    export type AsObject = {
        containerRevisionId: string,
    }
}

export class ListContainersRevisionsRequest extends jspb.Message { 

    hasFolderId(): boolean;
    clearFolderId(): void;
    getFolderId(): string;
    setFolderId(value: string): ListContainersRevisionsRequest;

    hasContainerId(): boolean;
    clearContainerId(): void;
    getContainerId(): string;
    setContainerId(value: string): ListContainersRevisionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListContainersRevisionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListContainersRevisionsRequest;
    getFilter(): string;
    setFilter(value: string): ListContainersRevisionsRequest;

    getIdCase(): ListContainersRevisionsRequest.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainersRevisionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainersRevisionsRequest): ListContainersRevisionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainersRevisionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainersRevisionsRequest;
    static deserializeBinaryFromReader(message: ListContainersRevisionsRequest, reader: jspb.BinaryReader): ListContainersRevisionsRequest;
}

export namespace ListContainersRevisionsRequest {
    export type AsObject = {
        folderId: string,
        containerId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        FOLDER_ID = 1,
        CONTAINER_ID = 2,
    }

}

export class ListContainersRevisionsResponse extends jspb.Message { 
    clearRevisionsList(): void;
    getRevisionsList(): Array<yandex_cloud_serverless_containers_v1_container_pb.Revision>;
    setRevisionsList(value: Array<yandex_cloud_serverless_containers_v1_container_pb.Revision>): ListContainersRevisionsResponse;
    addRevisions(value?: yandex_cloud_serverless_containers_v1_container_pb.Revision, index?: number): yandex_cloud_serverless_containers_v1_container_pb.Revision;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListContainersRevisionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainersRevisionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainersRevisionsResponse): ListContainersRevisionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainersRevisionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainersRevisionsResponse;
    static deserializeBinaryFromReader(message: ListContainersRevisionsResponse, reader: jspb.BinaryReader): ListContainersRevisionsResponse;
}

export namespace ListContainersRevisionsResponse {
    export type AsObject = {
        revisionsList: Array<yandex_cloud_serverless_containers_v1_container_pb.Revision.AsObject>,
        nextPageToken: string,
    }
}

export class DeployContainerRevisionRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): DeployContainerRevisionRequest;
    getDescription(): string;
    setDescription(value: string): DeployContainerRevisionRequest;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_serverless_containers_v1_container_pb.Resources | undefined;
    setResources(value?: yandex_cloud_serverless_containers_v1_container_pb.Resources): DeployContainerRevisionRequest;

    hasExecutionTimeout(): boolean;
    clearExecutionTimeout(): void;
    getExecutionTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setExecutionTimeout(value?: google_protobuf_duration_pb.Duration): DeployContainerRevisionRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): DeployContainerRevisionRequest;

    hasImageSpec(): boolean;
    clearImageSpec(): void;
    getImageSpec(): ImageSpec | undefined;
    setImageSpec(value?: ImageSpec): DeployContainerRevisionRequest;
    getConcurrency(): number;
    setConcurrency(value: number): DeployContainerRevisionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployContainerRevisionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeployContainerRevisionRequest): DeployContainerRevisionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeployContainerRevisionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployContainerRevisionRequest;
    static deserializeBinaryFromReader(message: DeployContainerRevisionRequest, reader: jspb.BinaryReader): DeployContainerRevisionRequest;
}

export namespace DeployContainerRevisionRequest {
    export type AsObject = {
        containerId: string,
        description: string,
        resources?: yandex_cloud_serverless_containers_v1_container_pb.Resources.AsObject,
        executionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        serviceAccountId: string,
        imageSpec?: ImageSpec.AsObject,
        concurrency: number,
    }
}

export class ImageSpec extends jspb.Message { 
    getImageUrl(): string;
    setImageUrl(value: string): ImageSpec;

    hasCommand(): boolean;
    clearCommand(): void;
    getCommand(): yandex_cloud_serverless_containers_v1_container_pb.Command | undefined;
    setCommand(value?: yandex_cloud_serverless_containers_v1_container_pb.Command): ImageSpec;

    hasArgs(): boolean;
    clearArgs(): void;
    getArgs(): yandex_cloud_serverless_containers_v1_container_pb.Args | undefined;
    setArgs(value?: yandex_cloud_serverless_containers_v1_container_pb.Args): ImageSpec;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;
    getWorkingDir(): string;
    setWorkingDir(value: string): ImageSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ImageSpec): ImageSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageSpec;
    static deserializeBinaryFromReader(message: ImageSpec, reader: jspb.BinaryReader): ImageSpec;
}

export namespace ImageSpec {
    export type AsObject = {
        imageUrl: string,
        command?: yandex_cloud_serverless_containers_v1_container_pb.Command.AsObject,
        args?: yandex_cloud_serverless_containers_v1_container_pb.Args.AsObject,

        environmentMap: Array<[string, string]>,
        workingDir: string,
    }
}

export class DeployContainerRevisionMetadata extends jspb.Message { 
    getContainerRevisionId(): string;
    setContainerRevisionId(value: string): DeployContainerRevisionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeployContainerRevisionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeployContainerRevisionMetadata): DeployContainerRevisionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeployContainerRevisionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeployContainerRevisionMetadata;
    static deserializeBinaryFromReader(message: DeployContainerRevisionMetadata, reader: jspb.BinaryReader): DeployContainerRevisionMetadata;
}

export namespace DeployContainerRevisionMetadata {
    export type AsObject = {
        containerRevisionId: string,
    }
}

export class ListContainerOperationsRequest extends jspb.Message { 
    getContainerId(): string;
    setContainerId(value: string): ListContainerOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListContainerOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListContainerOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListContainerOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainerOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainerOperationsRequest): ListContainerOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainerOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainerOperationsRequest;
    static deserializeBinaryFromReader(message: ListContainerOperationsRequest, reader: jspb.BinaryReader): ListContainerOperationsRequest;
}

export namespace ListContainerOperationsRequest {
    export type AsObject = {
        containerId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListContainerOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListContainerOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListContainerOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListContainerOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListContainerOperationsResponse): ListContainerOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListContainerOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListContainerOperationsResponse;
    static deserializeBinaryFromReader(message: ListContainerOperationsResponse, reader: jspb.BinaryReader): ListContainerOperationsResponse;
}

export namespace ListContainerOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
