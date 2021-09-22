// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/topic_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_kafka_v1_topic_pb from "../../../../../yandex/cloud/mdb/kafka/v1/topic_pb";

export class GetTopicRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetTopicRequest;
    getTopicName(): string;
    setTopicName(value: string): GetTopicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopicRequest): GetTopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopicRequest;
    static deserializeBinaryFromReader(message: GetTopicRequest, reader: jspb.BinaryReader): GetTopicRequest;
}

export namespace GetTopicRequest {
    export type AsObject = {
        clusterId: string,
        topicName: string,
    }
}

export class ListTopicsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListTopicsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTopicsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTopicsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicsRequest): ListTopicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicsRequest;
    static deserializeBinaryFromReader(message: ListTopicsRequest, reader: jspb.BinaryReader): ListTopicsRequest;
}

export namespace ListTopicsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTopicsResponse extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<yandex_cloud_mdb_kafka_v1_topic_pb.Topic>;
    setTopicsList(value: Array<yandex_cloud_mdb_kafka_v1_topic_pb.Topic>): ListTopicsResponse;
    addTopics(value?: yandex_cloud_mdb_kafka_v1_topic_pb.Topic, index?: number): yandex_cloud_mdb_kafka_v1_topic_pb.Topic;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTopicsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTopicsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTopicsResponse): ListTopicsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTopicsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTopicsResponse;
    static deserializeBinaryFromReader(message: ListTopicsResponse, reader: jspb.BinaryReader): ListTopicsResponse;
}

export namespace ListTopicsResponse {
    export type AsObject = {
        topicsList: Array<yandex_cloud_mdb_kafka_v1_topic_pb.Topic.AsObject>,
        nextPageToken: string,
    }
}

export class CreateTopicRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateTopicRequest;

    hasTopicSpec(): boolean;
    clearTopicSpec(): void;
    getTopicSpec(): yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec | undefined;
    setTopicSpec(value?: yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec): CreateTopicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTopicRequest): CreateTopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTopicRequest;
    static deserializeBinaryFromReader(message: CreateTopicRequest, reader: jspb.BinaryReader): CreateTopicRequest;
}

export namespace CreateTopicRequest {
    export type AsObject = {
        clusterId: string,
        topicSpec?: yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec.AsObject,
    }
}

export class CreateTopicMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateTopicMetadata;
    getTopicName(): string;
    setTopicName(value: string): CreateTopicMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTopicMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTopicMetadata): CreateTopicMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTopicMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTopicMetadata;
    static deserializeBinaryFromReader(message: CreateTopicMetadata, reader: jspb.BinaryReader): CreateTopicMetadata;
}

export namespace CreateTopicMetadata {
    export type AsObject = {
        clusterId: string,
        topicName: string,
    }
}

export class UpdateTopicRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateTopicRequest;
    getTopicName(): string;
    setTopicName(value: string): UpdateTopicRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateTopicRequest;

    hasTopicSpec(): boolean;
    clearTopicSpec(): void;
    getTopicSpec(): yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec | undefined;
    setTopicSpec(value?: yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec): UpdateTopicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTopicRequest): UpdateTopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTopicRequest;
    static deserializeBinaryFromReader(message: UpdateTopicRequest, reader: jspb.BinaryReader): UpdateTopicRequest;
}

export namespace UpdateTopicRequest {
    export type AsObject = {
        clusterId: string,
        topicName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        topicSpec?: yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec.AsObject,
    }
}

export class UpdateTopicMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateTopicMetadata;
    getTopicName(): string;
    setTopicName(value: string): UpdateTopicMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTopicMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTopicMetadata): UpdateTopicMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTopicMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTopicMetadata;
    static deserializeBinaryFromReader(message: UpdateTopicMetadata, reader: jspb.BinaryReader): UpdateTopicMetadata;
}

export namespace UpdateTopicMetadata {
    export type AsObject = {
        clusterId: string,
        topicName: string,
    }
}

export class DeleteTopicRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteTopicRequest;
    getTopicName(): string;
    setTopicName(value: string): DeleteTopicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTopicRequest): DeleteTopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTopicRequest;
    static deserializeBinaryFromReader(message: DeleteTopicRequest, reader: jspb.BinaryReader): DeleteTopicRequest;
}

export namespace DeleteTopicRequest {
    export type AsObject = {
        clusterId: string,
        topicName: string,
    }
}

export class DeleteTopicMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteTopicMetadata;
    getTopicName(): string;
    setTopicName(value: string): DeleteTopicMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTopicMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTopicMetadata): DeleteTopicMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTopicMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTopicMetadata;
    static deserializeBinaryFromReader(message: DeleteTopicMetadata, reader: jspb.BinaryReader): DeleteTopicMetadata;
}

export namespace DeleteTopicMetadata {
    export type AsObject = {
        clusterId: string,
        topicName: string,
    }
}
