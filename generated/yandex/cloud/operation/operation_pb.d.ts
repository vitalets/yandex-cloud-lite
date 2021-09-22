// package: yandex.cloud.operation
// file: yandex/cloud/operation/operation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Operation extends jspb.Message { 
    getId(): string;
    setId(value: string): Operation;
    getDescription(): string;
    setDescription(value: string): Operation;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
    getCreatedBy(): string;
    setCreatedBy(value: string): Operation;

    hasModifiedAt(): boolean;
    clearModifiedAt(): void;
    getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
    getDone(): boolean;
    setDone(value: boolean): Operation;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_any_pb.Any | undefined;
    setMetadata(value?: google_protobuf_any_pb.Any): Operation;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): Operation;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): google_protobuf_any_pb.Any | undefined;
    setResponse(value?: google_protobuf_any_pb.Any): Operation;

    getResultCase(): Operation.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operation.AsObject;
    static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operation;
    static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
    export type AsObject = {
        id: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdBy: string,
        modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        done: boolean,
        metadata?: google_protobuf_any_pb.Any.AsObject,
        error?: google_rpc_status_pb.Status.AsObject,
        response?: google_protobuf_any_pb.Any.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ERROR = 8,
        RESPONSE = 9,
    }

}
