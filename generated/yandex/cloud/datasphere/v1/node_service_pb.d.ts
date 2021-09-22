// package: yandex.cloud.datasphere.v1
// file: yandex/cloud/datasphere/v1/node_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class NodeExecutionRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): NodeExecutionRequest;
    getNodeId(): string;
    setNodeId(value: string): NodeExecutionRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): google_protobuf_struct_pb.Struct | undefined;
    setInput(value?: google_protobuf_struct_pb.Struct): NodeExecutionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeExecutionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NodeExecutionRequest): NodeExecutionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeExecutionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeExecutionRequest;
    static deserializeBinaryFromReader(message: NodeExecutionRequest, reader: jspb.BinaryReader): NodeExecutionRequest;
}

export namespace NodeExecutionRequest {
    export type AsObject = {
        folderId: string,
        nodeId: string,
        input?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class NodeExecutionResponse extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): google_protobuf_struct_pb.Struct | undefined;
    setOutput(value?: google_protobuf_struct_pb.Struct): NodeExecutionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NodeExecutionResponse): NodeExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeExecutionResponse;
    static deserializeBinaryFromReader(message: NodeExecutionResponse, reader: jspb.BinaryReader): NodeExecutionResponse;
}

export namespace NodeExecutionResponse {
    export type AsObject = {
        output?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
