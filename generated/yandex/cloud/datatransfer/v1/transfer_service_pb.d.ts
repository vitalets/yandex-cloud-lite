// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/transfer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_datatransfer_v1_transfer_pb from "../../../../yandex/cloud/datatransfer/v1/transfer_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";

export class CreateTransferRequest extends jspb.Message { 
    getSourceId(): string;
    setSourceId(value: string): CreateTransferRequest;
    getTargetId(): string;
    setTargetId(value: string): CreateTransferRequest;
    getName(): string;
    setName(value: string): CreateTransferRequest;
    getDescription(): string;
    setDescription(value: string): CreateTransferRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getFolderId(): string;
    setFolderId(value: string): CreateTransferRequest;
    getType(): yandex_cloud_datatransfer_v1_transfer_pb.TransferType;
    setType(value: yandex_cloud_datatransfer_v1_transfer_pb.TransferType): CreateTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferRequest): CreateTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferRequest;
    static deserializeBinaryFromReader(message: CreateTransferRequest, reader: jspb.BinaryReader): CreateTransferRequest;
}

export namespace CreateTransferRequest {
    export type AsObject = {
        sourceId: string,
        targetId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        folderId: string,
        type: yandex_cloud_datatransfer_v1_transfer_pb.TransferType,
    }
}

export class CreateTransferMetadata extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): CreateTransferMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferMetadata): CreateTransferMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferMetadata;
    static deserializeBinaryFromReader(message: CreateTransferMetadata, reader: jspb.BinaryReader): CreateTransferMetadata;
}

export namespace CreateTransferMetadata {
    export type AsObject = {
        transferId: string,
    }
}

export class UpdateTransferRequest extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): UpdateTransferRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTransferRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getName(): string;
    setName(value: string): UpdateTransferRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferRequest): UpdateTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferRequest;
    static deserializeBinaryFromReader(message: UpdateTransferRequest, reader: jspb.BinaryReader): UpdateTransferRequest;
}

export namespace UpdateTransferRequest {
    export type AsObject = {
        transferId: string,
        description: string,

        labelsMap: Array<[string, string]>,
        name: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    }
}

export class UpdateTransferMetadata extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): UpdateTransferMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferMetadata): UpdateTransferMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferMetadata;
    static deserializeBinaryFromReader(message: UpdateTransferMetadata, reader: jspb.BinaryReader): UpdateTransferMetadata;
}

export namespace UpdateTransferMetadata {
    export type AsObject = {
        transferId: string,
    }
}

export class DeleteTransferRequest extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): DeleteTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransferRequest): DeleteTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransferRequest;
    static deserializeBinaryFromReader(message: DeleteTransferRequest, reader: jspb.BinaryReader): DeleteTransferRequest;
}

export namespace DeleteTransferRequest {
    export type AsObject = {
        transferId: string,
    }
}

export class DeleteTransferMetadata extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): DeleteTransferMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransferMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransferMetadata): DeleteTransferMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransferMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransferMetadata;
    static deserializeBinaryFromReader(message: DeleteTransferMetadata, reader: jspb.BinaryReader): DeleteTransferMetadata;
}

export namespace DeleteTransferMetadata {
    export type AsObject = {
        transferId: string,
    }
}

export class ListTransfersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListTransfersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTransfersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTransfersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersRequest): ListTransfersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersRequest;
    static deserializeBinaryFromReader(message: ListTransfersRequest, reader: jspb.BinaryReader): ListTransfersRequest;
}

export namespace ListTransfersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransfersResponse extends jspb.Message { 
    clearTransfersList(): void;
    getTransfersList(): Array<yandex_cloud_datatransfer_v1_transfer_pb.Transfer>;
    setTransfersList(value: Array<yandex_cloud_datatransfer_v1_transfer_pb.Transfer>): ListTransfersResponse;
    addTransfers(value?: yandex_cloud_datatransfer_v1_transfer_pb.Transfer, index?: number): yandex_cloud_datatransfer_v1_transfer_pb.Transfer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTransfersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersResponse): ListTransfersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersResponse;
    static deserializeBinaryFromReader(message: ListTransfersResponse, reader: jspb.BinaryReader): ListTransfersResponse;
}

export namespace ListTransfersResponse {
    export type AsObject = {
        transfersList: Array<yandex_cloud_datatransfer_v1_transfer_pb.Transfer.AsObject>,
        nextPageToken: string,
    }
}

export class GetTransferRequest extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): GetTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransferRequest): GetTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransferRequest;
    static deserializeBinaryFromReader(message: GetTransferRequest, reader: jspb.BinaryReader): GetTransferRequest;
}

export namespace GetTransferRequest {
    export type AsObject = {
        transferId: string,
    }
}

export class DeactivateTransferRequest extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): DeactivateTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateTransferRequest): DeactivateTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateTransferRequest;
    static deserializeBinaryFromReader(message: DeactivateTransferRequest, reader: jspb.BinaryReader): DeactivateTransferRequest;
}

export namespace DeactivateTransferRequest {
    export type AsObject = {
        transferId: string,
    }
}

export class DeactivateTransferMetadata extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): DeactivateTransferMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeactivateTransferMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeactivateTransferMetadata): DeactivateTransferMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeactivateTransferMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeactivateTransferMetadata;
    static deserializeBinaryFromReader(message: DeactivateTransferMetadata, reader: jspb.BinaryReader): DeactivateTransferMetadata;
}

export namespace DeactivateTransferMetadata {
    export type AsObject = {
        transferId: string,
    }
}

export class ActivateTransferRequest extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): ActivateTransferRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateTransferRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateTransferRequest): ActivateTransferRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateTransferRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateTransferRequest;
    static deserializeBinaryFromReader(message: ActivateTransferRequest, reader: jspb.BinaryReader): ActivateTransferRequest;
}

export namespace ActivateTransferRequest {
    export type AsObject = {
        transferId: string,
    }
}

export class ActivateTransferMetadata extends jspb.Message { 
    getTransferId(): string;
    setTransferId(value: string): ActivateTransferMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivateTransferMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ActivateTransferMetadata): ActivateTransferMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivateTransferMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivateTransferMetadata;
    static deserializeBinaryFromReader(message: ActivateTransferMetadata, reader: jspb.BinaryReader): ActivateTransferMetadata;
}

export namespace ActivateTransferMetadata {
    export type AsObject = {
        transferId: string,
    }
}
