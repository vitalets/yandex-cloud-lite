// package: yandex.cloud.operation
// file: yandex/cloud/operation/operation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_operation_operation_pb from "../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../yandex/cloud/validation_pb";

export class GetOperationRequest extends jspb.Message { 
    getOperationId(): string;
    setOperationId(value: string): GetOperationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
    static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
    export type AsObject = {
        operationId: string,
    }
}

export class CancelOperationRequest extends jspb.Message { 
    getOperationId(): string;
    setOperationId(value: string): CancelOperationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
    static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
    export type AsObject = {
        operationId: string,
    }
}
