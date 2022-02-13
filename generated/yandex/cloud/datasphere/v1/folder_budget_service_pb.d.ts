// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/folder_budget_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetFolderBudgetRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): GetFolderBudgetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFolderBudgetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFolderBudgetRequest): GetFolderBudgetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFolderBudgetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFolderBudgetRequest;
    static deserializeBinaryFromReader(message: GetFolderBudgetRequest, reader: jspb.BinaryReader): GetFolderBudgetRequest;
}

export namespace GetFolderBudgetRequest {
    export type AsObject = {
        folderId: string,
    }
}

export class GetFolderBudgetResponse extends jspb.Message { 

    hasUnitBalance(): boolean;
    clearUnitBalance(): void;
    getUnitBalance(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setUnitBalance(value?: google_protobuf_wrappers_pb.Int64Value): GetFolderBudgetResponse;

    hasMaxUnitsPerHour(): boolean;
    clearMaxUnitsPerHour(): void;
    getMaxUnitsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUnitsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): GetFolderBudgetResponse;

    hasMaxUnitsPerExecution(): boolean;
    clearMaxUnitsPerExecution(): void;
    getMaxUnitsPerExecution(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUnitsPerExecution(value?: google_protobuf_wrappers_pb.Int64Value): GetFolderBudgetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFolderBudgetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFolderBudgetResponse): GetFolderBudgetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFolderBudgetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFolderBudgetResponse;
    static deserializeBinaryFromReader(message: GetFolderBudgetResponse, reader: jspb.BinaryReader): GetFolderBudgetResponse;
}

export namespace GetFolderBudgetResponse {
    export type AsObject = {
        unitBalance?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUnitsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUnitsPerExecution?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class SetFolderBudgetRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): SetFolderBudgetRequest;

    hasSetMask(): boolean;
    clearSetMask(): void;
    getSetMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setSetMask(value?: google_protobuf_field_mask_pb.FieldMask): SetFolderBudgetRequest;

    hasUnitBalance(): boolean;
    clearUnitBalance(): void;
    getUnitBalance(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setUnitBalance(value?: google_protobuf_wrappers_pb.Int64Value): SetFolderBudgetRequest;

    hasMaxUnitsPerHour(): boolean;
    clearMaxUnitsPerHour(): void;
    getMaxUnitsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUnitsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): SetFolderBudgetRequest;

    hasMaxUnitsPerExecution(): boolean;
    clearMaxUnitsPerExecution(): void;
    getMaxUnitsPerExecution(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUnitsPerExecution(value?: google_protobuf_wrappers_pb.Int64Value): SetFolderBudgetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetFolderBudgetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetFolderBudgetRequest): SetFolderBudgetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetFolderBudgetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetFolderBudgetRequest;
    static deserializeBinaryFromReader(message: SetFolderBudgetRequest, reader: jspb.BinaryReader): SetFolderBudgetRequest;
}

export namespace SetFolderBudgetRequest {
    export type AsObject = {
        folderId: string,
        setMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        unitBalance?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUnitsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUnitsPerExecution?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}
