// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/connector_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_kafka_v1_connector_pb from "../../../../../yandex/cloud/mdb/kafka/v1/connector_pb";

export class GetConnectorRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetConnectorRequest;
    getConnectorName(): string;
    setConnectorName(value: string): GetConnectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConnectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConnectorRequest): GetConnectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConnectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConnectorRequest;
    static deserializeBinaryFromReader(message: GetConnectorRequest, reader: jspb.BinaryReader): GetConnectorRequest;
}

export namespace GetConnectorRequest {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class ListConnectorsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListConnectorsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListConnectorsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListConnectorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConnectorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConnectorsRequest): ListConnectorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConnectorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConnectorsRequest;
    static deserializeBinaryFromReader(message: ListConnectorsRequest, reader: jspb.BinaryReader): ListConnectorsRequest;
}

export namespace ListConnectorsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListConnectorsResponse extends jspb.Message { 
    clearConnectorsList(): void;
    getConnectorsList(): Array<yandex_cloud_mdb_kafka_v1_connector_pb.Connector>;
    setConnectorsList(value: Array<yandex_cloud_mdb_kafka_v1_connector_pb.Connector>): ListConnectorsResponse;
    addConnectors(value?: yandex_cloud_mdb_kafka_v1_connector_pb.Connector, index?: number): yandex_cloud_mdb_kafka_v1_connector_pb.Connector;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListConnectorsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConnectorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListConnectorsResponse): ListConnectorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConnectorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConnectorsResponse;
    static deserializeBinaryFromReader(message: ListConnectorsResponse, reader: jspb.BinaryReader): ListConnectorsResponse;
}

export namespace ListConnectorsResponse {
    export type AsObject = {
        connectorsList: Array<yandex_cloud_mdb_kafka_v1_connector_pb.Connector.AsObject>,
        nextPageToken: string,
    }
}

export class CreateConnectorRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateConnectorRequest;

    hasConnectorSpec(): boolean;
    clearConnectorSpec(): void;
    getConnectorSpec(): yandex_cloud_mdb_kafka_v1_connector_pb.ConnectorSpec | undefined;
    setConnectorSpec(value?: yandex_cloud_mdb_kafka_v1_connector_pb.ConnectorSpec): CreateConnectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectorRequest): CreateConnectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectorRequest;
    static deserializeBinaryFromReader(message: CreateConnectorRequest, reader: jspb.BinaryReader): CreateConnectorRequest;
}

export namespace CreateConnectorRequest {
    export type AsObject = {
        clusterId: string,
        connectorSpec?: yandex_cloud_mdb_kafka_v1_connector_pb.ConnectorSpec.AsObject,
    }
}

export class CreateConnectorMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateConnectorMetadata;
    getConnectorName(): string;
    setConnectorName(value: string): CreateConnectorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConnectorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConnectorMetadata): CreateConnectorMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConnectorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConnectorMetadata;
    static deserializeBinaryFromReader(message: CreateConnectorMetadata, reader: jspb.BinaryReader): CreateConnectorMetadata;
}

export namespace CreateConnectorMetadata {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class DeleteConnectorRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteConnectorRequest;
    getConnectorName(): string;
    setConnectorName(value: string): DeleteConnectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectorRequest): DeleteConnectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectorRequest;
    static deserializeBinaryFromReader(message: DeleteConnectorRequest, reader: jspb.BinaryReader): DeleteConnectorRequest;
}

export namespace DeleteConnectorRequest {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class DeleteConnectorMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteConnectorMetadata;
    getConnectorName(): string;
    setConnectorName(value: string): DeleteConnectorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteConnectorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteConnectorMetadata): DeleteConnectorMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteConnectorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteConnectorMetadata;
    static deserializeBinaryFromReader(message: DeleteConnectorMetadata, reader: jspb.BinaryReader): DeleteConnectorMetadata;
}

export namespace DeleteConnectorMetadata {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class ResumeConnectorRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ResumeConnectorRequest;
    getConnectorName(): string;
    setConnectorName(value: string): ResumeConnectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeConnectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeConnectorRequest): ResumeConnectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeConnectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeConnectorRequest;
    static deserializeBinaryFromReader(message: ResumeConnectorRequest, reader: jspb.BinaryReader): ResumeConnectorRequest;
}

export namespace ResumeConnectorRequest {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class ResumeConnectorMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ResumeConnectorMetadata;
    getConnectorName(): string;
    setConnectorName(value: string): ResumeConnectorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeConnectorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeConnectorMetadata): ResumeConnectorMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeConnectorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeConnectorMetadata;
    static deserializeBinaryFromReader(message: ResumeConnectorMetadata, reader: jspb.BinaryReader): ResumeConnectorMetadata;
}

export namespace ResumeConnectorMetadata {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class PauseConnectorRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): PauseConnectorRequest;
    getConnectorName(): string;
    setConnectorName(value: string): PauseConnectorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseConnectorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PauseConnectorRequest): PauseConnectorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseConnectorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseConnectorRequest;
    static deserializeBinaryFromReader(message: PauseConnectorRequest, reader: jspb.BinaryReader): PauseConnectorRequest;
}

export namespace PauseConnectorRequest {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}

export class PauseConnectorMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): PauseConnectorMetadata;
    getConnectorName(): string;
    setConnectorName(value: string): PauseConnectorMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseConnectorMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PauseConnectorMetadata): PauseConnectorMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseConnectorMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseConnectorMetadata;
    static deserializeBinaryFromReader(message: PauseConnectorMetadata, reader: jspb.BinaryReader): PauseConnectorMetadata;
}

export namespace PauseConnectorMetadata {
    export type AsObject = {
        clusterId: string,
        connectorName: string,
    }
}
