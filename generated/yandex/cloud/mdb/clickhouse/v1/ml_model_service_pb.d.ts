// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/ml_model_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_clickhouse_v1_ml_model_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/ml_model_pb";

export class GetMlModelRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetMlModelRequest;
    getMlModelName(): string;
    setMlModelName(value: string): GetMlModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMlModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMlModelRequest): GetMlModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMlModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMlModelRequest;
    static deserializeBinaryFromReader(message: GetMlModelRequest, reader: jspb.BinaryReader): GetMlModelRequest;
}

export namespace GetMlModelRequest {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
    }
}

export class ListMlModelsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListMlModelsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListMlModelsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListMlModelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMlModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMlModelsRequest): ListMlModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMlModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMlModelsRequest;
    static deserializeBinaryFromReader(message: ListMlModelsRequest, reader: jspb.BinaryReader): ListMlModelsRequest;
}

export namespace ListMlModelsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListMlModelsResponse extends jspb.Message { 
    clearMlModelsList(): void;
    getMlModelsList(): Array<yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel>;
    setMlModelsList(value: Array<yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel>): ListMlModelsResponse;
    addMlModels(value?: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel, index?: number): yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListMlModelsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMlModelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMlModelsResponse): ListMlModelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMlModelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMlModelsResponse;
    static deserializeBinaryFromReader(message: ListMlModelsResponse, reader: jspb.BinaryReader): ListMlModelsResponse;
}

export namespace ListMlModelsResponse {
    export type AsObject = {
        mlModelsList: Array<yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModel.AsObject>,
        nextPageToken: string,
    }
}

export class CreateMlModelRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateMlModelRequest;
    getMlModelName(): string;
    setMlModelName(value: string): CreateMlModelRequest;
    getType(): yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModelType;
    setType(value: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModelType): CreateMlModelRequest;
    getUri(): string;
    setUri(value: string): CreateMlModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMlModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMlModelRequest): CreateMlModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMlModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMlModelRequest;
    static deserializeBinaryFromReader(message: CreateMlModelRequest, reader: jspb.BinaryReader): CreateMlModelRequest;
}

export namespace CreateMlModelRequest {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
        type: yandex_cloud_mdb_clickhouse_v1_ml_model_pb.MlModelType,
        uri: string,
    }
}

export class CreateMlModelMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateMlModelMetadata;
    getMlModelName(): string;
    setMlModelName(value: string): CreateMlModelMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMlModelMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMlModelMetadata): CreateMlModelMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMlModelMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMlModelMetadata;
    static deserializeBinaryFromReader(message: CreateMlModelMetadata, reader: jspb.BinaryReader): CreateMlModelMetadata;
}

export namespace CreateMlModelMetadata {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
    }
}

export class UpdateMlModelRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateMlModelRequest;
    getMlModelName(): string;
    setMlModelName(value: string): UpdateMlModelRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateMlModelRequest;
    getUri(): string;
    setUri(value: string): UpdateMlModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMlModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMlModelRequest): UpdateMlModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMlModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMlModelRequest;
    static deserializeBinaryFromReader(message: UpdateMlModelRequest, reader: jspb.BinaryReader): UpdateMlModelRequest;
}

export namespace UpdateMlModelRequest {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        uri: string,
    }
}

export class UpdateMlModelMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateMlModelMetadata;
    getMlModelName(): string;
    setMlModelName(value: string): UpdateMlModelMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMlModelMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMlModelMetadata): UpdateMlModelMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMlModelMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMlModelMetadata;
    static deserializeBinaryFromReader(message: UpdateMlModelMetadata, reader: jspb.BinaryReader): UpdateMlModelMetadata;
}

export namespace UpdateMlModelMetadata {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
    }
}

export class DeleteMlModelRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteMlModelRequest;
    getMlModelName(): string;
    setMlModelName(value: string): DeleteMlModelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMlModelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMlModelRequest): DeleteMlModelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMlModelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMlModelRequest;
    static deserializeBinaryFromReader(message: DeleteMlModelRequest, reader: jspb.BinaryReader): DeleteMlModelRequest;
}

export namespace DeleteMlModelRequest {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
    }
}

export class DeleteMlModelMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteMlModelMetadata;
    getMlModelName(): string;
    setMlModelName(value: string): DeleteMlModelMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMlModelMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMlModelMetadata): DeleteMlModelMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMlModelMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMlModelMetadata;
    static deserializeBinaryFromReader(message: DeleteMlModelMetadata, reader: jspb.BinaryReader): DeleteMlModelMetadata;
}

export namespace DeleteMlModelMetadata {
    export type AsObject = {
        clusterId: string,
        mlModelName: string,
    }
}
