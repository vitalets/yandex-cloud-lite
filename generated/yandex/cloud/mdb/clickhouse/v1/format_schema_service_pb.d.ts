// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/format_schema_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_format_schema_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/format_schema_pb";

export class GetFormatSchemaRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetFormatSchemaRequest;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): GetFormatSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFormatSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFormatSchemaRequest): GetFormatSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFormatSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFormatSchemaRequest;
    static deserializeBinaryFromReader(message: GetFormatSchemaRequest, reader: jspb.BinaryReader): GetFormatSchemaRequest;
}

export namespace GetFormatSchemaRequest {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
    }
}

export class ListFormatSchemasRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListFormatSchemasRequest;
    getPageSize(): number;
    setPageSize(value: number): ListFormatSchemasRequest;
    getPageToken(): string;
    setPageToken(value: string): ListFormatSchemasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFormatSchemasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFormatSchemasRequest): ListFormatSchemasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFormatSchemasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFormatSchemasRequest;
    static deserializeBinaryFromReader(message: ListFormatSchemasRequest, reader: jspb.BinaryReader): ListFormatSchemasRequest;
}

export namespace ListFormatSchemasRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListFormatSchemasResponse extends jspb.Message { 
    clearFormatSchemasList(): void;
    getFormatSchemasList(): Array<yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema>;
    setFormatSchemasList(value: Array<yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema>): ListFormatSchemasResponse;
    addFormatSchemas(value?: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema, index?: number): yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListFormatSchemasResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFormatSchemasResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFormatSchemasResponse): ListFormatSchemasResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFormatSchemasResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFormatSchemasResponse;
    static deserializeBinaryFromReader(message: ListFormatSchemasResponse, reader: jspb.BinaryReader): ListFormatSchemasResponse;
}

export namespace ListFormatSchemasResponse {
    export type AsObject = {
        formatSchemasList: Array<yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchema.AsObject>,
        nextPageToken: string,
    }
}

export class CreateFormatSchemaRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateFormatSchemaRequest;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): CreateFormatSchemaRequest;
    getType(): yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchemaType;
    setType(value: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchemaType): CreateFormatSchemaRequest;
    getUri(): string;
    setUri(value: string): CreateFormatSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFormatSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFormatSchemaRequest): CreateFormatSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFormatSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFormatSchemaRequest;
    static deserializeBinaryFromReader(message: CreateFormatSchemaRequest, reader: jspb.BinaryReader): CreateFormatSchemaRequest;
}

export namespace CreateFormatSchemaRequest {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
        type: yandex_cloud_mdb_clickhouse_v1_format_schema_pb.FormatSchemaType,
        uri: string,
    }
}

export class CreateFormatSchemaMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateFormatSchemaMetadata;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): CreateFormatSchemaMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFormatSchemaMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFormatSchemaMetadata): CreateFormatSchemaMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFormatSchemaMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFormatSchemaMetadata;
    static deserializeBinaryFromReader(message: CreateFormatSchemaMetadata, reader: jspb.BinaryReader): CreateFormatSchemaMetadata;
}

export namespace CreateFormatSchemaMetadata {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
    }
}

export class UpdateFormatSchemaRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateFormatSchemaRequest;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): UpdateFormatSchemaRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateFormatSchemaRequest;
    getUri(): string;
    setUri(value: string): UpdateFormatSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFormatSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFormatSchemaRequest): UpdateFormatSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFormatSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFormatSchemaRequest;
    static deserializeBinaryFromReader(message: UpdateFormatSchemaRequest, reader: jspb.BinaryReader): UpdateFormatSchemaRequest;
}

export namespace UpdateFormatSchemaRequest {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        uri: string,
    }
}

export class UpdateFormatSchemaMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateFormatSchemaMetadata;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): UpdateFormatSchemaMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFormatSchemaMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFormatSchemaMetadata): UpdateFormatSchemaMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFormatSchemaMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFormatSchemaMetadata;
    static deserializeBinaryFromReader(message: UpdateFormatSchemaMetadata, reader: jspb.BinaryReader): UpdateFormatSchemaMetadata;
}

export namespace UpdateFormatSchemaMetadata {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
    }
}

export class DeleteFormatSchemaRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteFormatSchemaRequest;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): DeleteFormatSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFormatSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFormatSchemaRequest): DeleteFormatSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFormatSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFormatSchemaRequest;
    static deserializeBinaryFromReader(message: DeleteFormatSchemaRequest, reader: jspb.BinaryReader): DeleteFormatSchemaRequest;
}

export namespace DeleteFormatSchemaRequest {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
    }
}

export class DeleteFormatSchemaMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteFormatSchemaMetadata;
    getFormatSchemaName(): string;
    setFormatSchemaName(value: string): DeleteFormatSchemaMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFormatSchemaMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFormatSchemaMetadata): DeleteFormatSchemaMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFormatSchemaMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFormatSchemaMetadata;
    static deserializeBinaryFromReader(message: DeleteFormatSchemaMetadata, reader: jspb.BinaryReader): DeleteFormatSchemaMetadata;
}

export namespace DeleteFormatSchemaMetadata {
    export type AsObject = {
        clusterId: string,
        formatSchemaName: string,
    }
}
