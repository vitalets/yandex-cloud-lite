// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/project_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_datasphere_v1_project_pb from "../../../../yandex/cloud/datasphere/v1/project_pb";

export class CreateProjectRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateProjectRequest;
    getName(): string;
    setName(value: string): CreateProjectRequest;
    getDescription(): string;
    setDescription(value: string): CreateProjectRequest;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_datasphere_v1_project_pb.Project.Settings | undefined;
    setSettings(value?: yandex_cloud_datasphere_v1_project_pb.Project.Settings): CreateProjectRequest;

    hasLimits(): boolean;
    clearLimits(): void;
    getLimits(): yandex_cloud_datasphere_v1_project_pb.Project.Limits | undefined;
    setLimits(value?: yandex_cloud_datasphere_v1_project_pb.Project.Limits): CreateProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
    static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,
        settings?: yandex_cloud_datasphere_v1_project_pb.Project.Settings.AsObject,
        limits?: yandex_cloud_datasphere_v1_project_pb.Project.Limits.AsObject,
    }
}

export class CreateProjectMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): CreateProjectMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProjectMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProjectMetadata): CreateProjectMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProjectMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProjectMetadata;
    static deserializeBinaryFromReader(message: CreateProjectMetadata, reader: jspb.BinaryReader): CreateProjectMetadata;
}

export namespace CreateProjectMetadata {
    export type AsObject = {
        projectId: string,
    }
}

export class UpdateProjectRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): UpdateProjectRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateProjectRequest;
    getName(): string;
    setName(value: string): UpdateProjectRequest;
    getDescription(): string;
    setDescription(value: string): UpdateProjectRequest;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): yandex_cloud_datasphere_v1_project_pb.Project.Settings | undefined;
    setSettings(value?: yandex_cloud_datasphere_v1_project_pb.Project.Settings): UpdateProjectRequest;

    hasLimits(): boolean;
    clearLimits(): void;
    getLimits(): yandex_cloud_datasphere_v1_project_pb.Project.Limits | undefined;
    setLimits(value?: yandex_cloud_datasphere_v1_project_pb.Project.Limits): UpdateProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
    static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
    export type AsObject = {
        projectId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        settings?: yandex_cloud_datasphere_v1_project_pb.Project.Settings.AsObject,
        limits?: yandex_cloud_datasphere_v1_project_pb.Project.Limits.AsObject,
    }
}

export class UpdateProjectMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): UpdateProjectMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProjectMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProjectMetadata): UpdateProjectMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProjectMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProjectMetadata;
    static deserializeBinaryFromReader(message: UpdateProjectMetadata, reader: jspb.BinaryReader): UpdateProjectMetadata;
}

export namespace UpdateProjectMetadata {
    export type AsObject = {
        projectId: string,
    }
}

export class DeleteProjectRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): DeleteProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProjectRequest): DeleteProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProjectRequest;
    static deserializeBinaryFromReader(message: DeleteProjectRequest, reader: jspb.BinaryReader): DeleteProjectRequest;
}

export namespace DeleteProjectRequest {
    export type AsObject = {
        projectId: string,
    }
}

export class DeleteProjectMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): DeleteProjectMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProjectMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProjectMetadata): DeleteProjectMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProjectMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProjectMetadata;
    static deserializeBinaryFromReader(message: DeleteProjectMetadata, reader: jspb.BinaryReader): DeleteProjectMetadata;
}

export namespace DeleteProjectMetadata {
    export type AsObject = {
        projectId: string,
    }
}

export class OpenProjectRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): OpenProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OpenProjectRequest): OpenProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenProjectRequest;
    static deserializeBinaryFromReader(message: OpenProjectRequest, reader: jspb.BinaryReader): OpenProjectRequest;
}

export namespace OpenProjectRequest {
    export type AsObject = {
        projectId: string,
    }
}

export class OpenProjectMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): OpenProjectMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenProjectMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: OpenProjectMetadata): OpenProjectMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenProjectMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenProjectMetadata;
    static deserializeBinaryFromReader(message: OpenProjectMetadata, reader: jspb.BinaryReader): OpenProjectMetadata;
}

export namespace OpenProjectMetadata {
    export type AsObject = {
        projectId: string,
    }
}

export class OpenProjectResponse extends jspb.Message { 
    getProjectUrl(): string;
    setProjectUrl(value: string): OpenProjectResponse;
    getSessionToken(): string;
    setSessionToken(value: string): OpenProjectResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenProjectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OpenProjectResponse): OpenProjectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenProjectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenProjectResponse;
    static deserializeBinaryFromReader(message: OpenProjectResponse, reader: jspb.BinaryReader): OpenProjectResponse;
}

export namespace OpenProjectResponse {
    export type AsObject = {
        projectUrl: string,
        sessionToken: string,
    }
}

export class GetProjectRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): GetProjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
    static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
    export type AsObject = {
        projectId: string,
    }
}

export class ListProjectsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListProjectsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListProjectsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListProjectsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProjectsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListProjectsRequest): ListProjectsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProjectsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProjectsRequest;
    static deserializeBinaryFromReader(message: ListProjectsRequest, reader: jspb.BinaryReader): ListProjectsRequest;
}

export namespace ListProjectsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListProjectsResponse extends jspb.Message { 
    clearProjectsList(): void;
    getProjectsList(): Array<yandex_cloud_datasphere_v1_project_pb.Project>;
    setProjectsList(value: Array<yandex_cloud_datasphere_v1_project_pb.Project>): ListProjectsResponse;
    addProjects(value?: yandex_cloud_datasphere_v1_project_pb.Project, index?: number): yandex_cloud_datasphere_v1_project_pb.Project;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListProjectsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListProjectsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListProjectsResponse): ListProjectsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListProjectsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListProjectsResponse;
    static deserializeBinaryFromReader(message: ListProjectsResponse, reader: jspb.BinaryReader): ListProjectsResponse;
}

export namespace ListProjectsResponse {
    export type AsObject = {
        projectsList: Array<yandex_cloud_datasphere_v1_project_pb.Project.AsObject>,
        nextPageToken: string,
    }
}

export class GetUnitBalanceRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): GetUnitBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitBalanceRequest): GetUnitBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitBalanceRequest;
    static deserializeBinaryFromReader(message: GetUnitBalanceRequest, reader: jspb.BinaryReader): GetUnitBalanceRequest;
}

export namespace GetUnitBalanceRequest {
    export type AsObject = {
        projectId: string,
    }
}

export class GetUnitBalanceResponse extends jspb.Message { 

    hasUnitBalance(): boolean;
    clearUnitBalance(): void;
    getUnitBalance(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setUnitBalance(value?: google_protobuf_wrappers_pb.Int64Value): GetUnitBalanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUnitBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUnitBalanceResponse): GetUnitBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUnitBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUnitBalanceResponse;
    static deserializeBinaryFromReader(message: GetUnitBalanceResponse, reader: jspb.BinaryReader): GetUnitBalanceResponse;
}

export namespace GetUnitBalanceResponse {
    export type AsObject = {
        unitBalance?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class SetUnitBalanceRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): SetUnitBalanceRequest;

    hasUnitBalance(): boolean;
    clearUnitBalance(): void;
    getUnitBalance(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setUnitBalance(value?: google_protobuf_wrappers_pb.Int64Value): SetUnitBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetUnitBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetUnitBalanceRequest): SetUnitBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetUnitBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetUnitBalanceRequest;
    static deserializeBinaryFromReader(message: SetUnitBalanceRequest, reader: jspb.BinaryReader): SetUnitBalanceRequest;
}

export namespace SetUnitBalanceRequest {
    export type AsObject = {
        projectId: string,
        unitBalance?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class ProjectExecutionRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): ProjectExecutionRequest;

    hasNotebookId(): boolean;
    clearNotebookId(): void;
    getNotebookId(): string;
    setNotebookId(value: string): ProjectExecutionRequest;

    hasCellId(): boolean;
    clearCellId(): void;
    getCellId(): string;
    setCellId(value: string): ProjectExecutionRequest;

    hasInputVariables(): boolean;
    clearInputVariables(): void;
    getInputVariables(): google_protobuf_struct_pb.Struct | undefined;
    setInputVariables(value?: google_protobuf_struct_pb.Struct): ProjectExecutionRequest;
    clearOutputVariableNamesList(): void;
    getOutputVariableNamesList(): Array<string>;
    setOutputVariableNamesList(value: Array<string>): ProjectExecutionRequest;
    addOutputVariableNames(value: string, index?: number): string;

    getTargetCase(): ProjectExecutionRequest.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectExecutionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectExecutionRequest): ProjectExecutionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectExecutionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectExecutionRequest;
    static deserializeBinaryFromReader(message: ProjectExecutionRequest, reader: jspb.BinaryReader): ProjectExecutionRequest;
}

export namespace ProjectExecutionRequest {
    export type AsObject = {
        projectId: string,
        notebookId: string,
        cellId: string,
        inputVariables?: google_protobuf_struct_pb.Struct.AsObject,
        outputVariableNamesList: Array<string>,
    }

    export enum TargetCase {
        TARGET_NOT_SET = 0,
        NOTEBOOK_ID = 2,
        CELL_ID = 3,
    }

}

export class ProjectExecutionMetadata extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): ProjectExecutionMetadata;

    hasNotebookId(): boolean;
    clearNotebookId(): void;
    getNotebookId(): string;
    setNotebookId(value: string): ProjectExecutionMetadata;

    hasCellId(): boolean;
    clearCellId(): void;
    getCellId(): string;
    setCellId(value: string): ProjectExecutionMetadata;

    getTargetCase(): ProjectExecutionMetadata.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectExecutionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectExecutionMetadata): ProjectExecutionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectExecutionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectExecutionMetadata;
    static deserializeBinaryFromReader(message: ProjectExecutionMetadata, reader: jspb.BinaryReader): ProjectExecutionMetadata;
}

export namespace ProjectExecutionMetadata {
    export type AsObject = {
        projectId: string,
        notebookId: string,
        cellId: string,
    }

    export enum TargetCase {
        TARGET_NOT_SET = 0,
        NOTEBOOK_ID = 2,
        CELL_ID = 3,
    }

}

export class ProjectExecutionResponse extends jspb.Message { 
    getCheckpointId(): string;
    setCheckpointId(value: string): ProjectExecutionResponse;

    hasOutputVariables(): boolean;
    clearOutputVariables(): void;
    getOutputVariables(): google_protobuf_struct_pb.Struct | undefined;
    setOutputVariables(value?: google_protobuf_struct_pb.Struct): ProjectExecutionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectExecutionResponse): ProjectExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectExecutionResponse;
    static deserializeBinaryFromReader(message: ProjectExecutionResponse, reader: jspb.BinaryReader): ProjectExecutionResponse;
}

export namespace ProjectExecutionResponse {
    export type AsObject = {
        checkpointId: string,
        outputVariables?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class CellOutputsRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): CellOutputsRequest;
    getCellId(): string;
    setCellId(value: string): CellOutputsRequest;
    getCheckpointId(): string;
    setCheckpointId(value: string): CellOutputsRequest;

    hasStartAt(): boolean;
    clearStartAt(): void;
    getStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartAt(value?: google_protobuf_timestamp_pb.Timestamp): CellOutputsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellOutputsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CellOutputsRequest): CellOutputsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellOutputsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellOutputsRequest;
    static deserializeBinaryFromReader(message: CellOutputsRequest, reader: jspb.BinaryReader): CellOutputsRequest;
}

export namespace CellOutputsRequest {
    export type AsObject = {
        projectId: string,
        cellId: string,
        checkpointId: string,
        startAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CellOutputsResponse extends jspb.Message { 
    clearOutputsList(): void;
    getOutputsList(): Array<string>;
    setOutputsList(value: Array<string>): CellOutputsResponse;
    addOutputs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CellOutputsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CellOutputsResponse): CellOutputsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CellOutputsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CellOutputsResponse;
    static deserializeBinaryFromReader(message: CellOutputsResponse, reader: jspb.BinaryReader): CellOutputsResponse;
}

export namespace CellOutputsResponse {
    export type AsObject = {
        outputsList: Array<string>,
    }
}

export class GetStateVariablesRequest extends jspb.Message { 
    getProjectId(): string;
    setProjectId(value: string): GetStateVariablesRequest;
    getNotebookId(): string;
    setNotebookId(value: string): GetStateVariablesRequest;
    clearVariableNamesList(): void;
    getVariableNamesList(): Array<string>;
    setVariableNamesList(value: Array<string>): GetStateVariablesRequest;
    addVariableNames(value: string, index?: number): string;
    getCheckpointId(): string;
    setCheckpointId(value: string): GetStateVariablesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateVariablesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateVariablesRequest): GetStateVariablesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateVariablesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateVariablesRequest;
    static deserializeBinaryFromReader(message: GetStateVariablesRequest, reader: jspb.BinaryReader): GetStateVariablesRequest;
}

export namespace GetStateVariablesRequest {
    export type AsObject = {
        projectId: string,
        notebookId: string,
        variableNamesList: Array<string>,
        checkpointId: string,
    }
}

export class GetStateVariablesResponse extends jspb.Message { 

    hasVariables(): boolean;
    clearVariables(): void;
    getVariables(): google_protobuf_struct_pb.Struct | undefined;
    setVariables(value?: google_protobuf_struct_pb.Struct): GetStateVariablesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStateVariablesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStateVariablesResponse): GetStateVariablesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStateVariablesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStateVariablesResponse;
    static deserializeBinaryFromReader(message: GetStateVariablesResponse, reader: jspb.BinaryReader): GetStateVariablesResponse;
}

export namespace GetStateVariablesResponse {
    export type AsObject = {
        variables?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
