// package: yandex.cloud.serverless.triggers.v1
// file: yandex/cloud/serverless/triggers/v1/trigger_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_serverless_triggers_v1_trigger_pb from "../../../../../yandex/cloud/serverless/triggers/v1/trigger_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class GetTriggerRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): GetTriggerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTriggerRequest): GetTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTriggerRequest;
    static deserializeBinaryFromReader(message: GetTriggerRequest, reader: jspb.BinaryReader): GetTriggerRequest;
}

export namespace GetTriggerRequest {
    export type AsObject = {
        triggerId: string,
    }
}

export class ListTriggersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListTriggersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTriggersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTriggersRequest;
    getFilter(): string;
    setFilter(value: string): ListTriggersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTriggersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTriggersRequest): ListTriggersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTriggersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTriggersRequest;
    static deserializeBinaryFromReader(message: ListTriggersRequest, reader: jspb.BinaryReader): ListTriggersRequest;
}

export namespace ListTriggersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListTriggersResponse extends jspb.Message { 
    clearTriggersList(): void;
    getTriggersList(): Array<yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger>;
    setTriggersList(value: Array<yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger>): ListTriggersResponse;
    addTriggers(value?: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger, index?: number): yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTriggersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTriggersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTriggersResponse): ListTriggersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTriggersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTriggersResponse;
    static deserializeBinaryFromReader(message: ListTriggersResponse, reader: jspb.BinaryReader): ListTriggersResponse;
}

export namespace ListTriggersResponse {
    export type AsObject = {
        triggersList: Array<yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger.AsObject>,
        nextPageToken: string,
    }
}

export class CreateTriggerRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateTriggerRequest;
    getName(): string;
    setName(value: string): CreateTriggerRequest;
    getDescription(): string;
    setDescription(value: string): CreateTriggerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasRule(): boolean;
    clearRule(): void;
    getRule(): yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger.Rule | undefined;
    setRule(value?: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger.Rule): CreateTriggerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTriggerRequest): CreateTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTriggerRequest;
    static deserializeBinaryFromReader(message: CreateTriggerRequest, reader: jspb.BinaryReader): CreateTriggerRequest;
}

export namespace CreateTriggerRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        rule?: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger.Rule.AsObject,
    }
}

export class CreateTriggerMetadata extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): CreateTriggerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTriggerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTriggerMetadata): CreateTriggerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTriggerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTriggerMetadata;
    static deserializeBinaryFromReader(message: CreateTriggerMetadata, reader: jspb.BinaryReader): CreateTriggerMetadata;
}

export namespace CreateTriggerMetadata {
    export type AsObject = {
        triggerId: string,
    }
}

export class UpdateTriggerRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): UpdateTriggerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTriggerRequest;
    getName(): string;
    setName(value: string): UpdateTriggerRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTriggerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTriggerRequest): UpdateTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTriggerRequest;
    static deserializeBinaryFromReader(message: UpdateTriggerRequest, reader: jspb.BinaryReader): UpdateTriggerRequest;
}

export namespace UpdateTriggerRequest {
    export type AsObject = {
        triggerId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateTriggerMetadata extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): UpdateTriggerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTriggerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTriggerMetadata): UpdateTriggerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTriggerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTriggerMetadata;
    static deserializeBinaryFromReader(message: UpdateTriggerMetadata, reader: jspb.BinaryReader): UpdateTriggerMetadata;
}

export namespace UpdateTriggerMetadata {
    export type AsObject = {
        triggerId: string,
    }
}

export class DeleteTriggerRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): DeleteTriggerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTriggerRequest): DeleteTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTriggerRequest;
    static deserializeBinaryFromReader(message: DeleteTriggerRequest, reader: jspb.BinaryReader): DeleteTriggerRequest;
}

export namespace DeleteTriggerRequest {
    export type AsObject = {
        triggerId: string,
    }
}

export class DeleteTriggerMetadata extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): DeleteTriggerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTriggerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTriggerMetadata): DeleteTriggerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTriggerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTriggerMetadata;
    static deserializeBinaryFromReader(message: DeleteTriggerMetadata, reader: jspb.BinaryReader): DeleteTriggerMetadata;
}

export namespace DeleteTriggerMetadata {
    export type AsObject = {
        triggerId: string,
    }
}

export class PauseTriggerRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): PauseTriggerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PauseTriggerRequest): PauseTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseTriggerRequest;
    static deserializeBinaryFromReader(message: PauseTriggerRequest, reader: jspb.BinaryReader): PauseTriggerRequest;
}

export namespace PauseTriggerRequest {
    export type AsObject = {
        triggerId: string,
    }
}

export class PauseTriggerMetadata extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): PauseTriggerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseTriggerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PauseTriggerMetadata): PauseTriggerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseTriggerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseTriggerMetadata;
    static deserializeBinaryFromReader(message: PauseTriggerMetadata, reader: jspb.BinaryReader): PauseTriggerMetadata;
}

export namespace PauseTriggerMetadata {
    export type AsObject = {
        triggerId: string,
    }
}

export class ResumeTriggerRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): ResumeTriggerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeTriggerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeTriggerRequest): ResumeTriggerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeTriggerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeTriggerRequest;
    static deserializeBinaryFromReader(message: ResumeTriggerRequest, reader: jspb.BinaryReader): ResumeTriggerRequest;
}

export namespace ResumeTriggerRequest {
    export type AsObject = {
        triggerId: string,
    }
}

export class ResumeTriggerMetadata extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): ResumeTriggerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeTriggerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeTriggerMetadata): ResumeTriggerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeTriggerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeTriggerMetadata;
    static deserializeBinaryFromReader(message: ResumeTriggerMetadata, reader: jspb.BinaryReader): ResumeTriggerMetadata;
}

export namespace ResumeTriggerMetadata {
    export type AsObject = {
        triggerId: string,
    }
}

export class ListTriggerOperationsRequest extends jspb.Message { 
    getTriggerId(): string;
    setTriggerId(value: string): ListTriggerOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTriggerOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTriggerOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListTriggerOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTriggerOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTriggerOperationsRequest): ListTriggerOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTriggerOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTriggerOperationsRequest;
    static deserializeBinaryFromReader(message: ListTriggerOperationsRequest, reader: jspb.BinaryReader): ListTriggerOperationsRequest;
}

export namespace ListTriggerOperationsRequest {
    export type AsObject = {
        triggerId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListTriggerOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListTriggerOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTriggerOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTriggerOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTriggerOperationsResponse): ListTriggerOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTriggerOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTriggerOperationsResponse;
    static deserializeBinaryFromReader(message: ListTriggerOperationsResponse, reader: jspb.BinaryReader): ListTriggerOperationsResponse;
}

export namespace ListTriggerOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
