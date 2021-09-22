// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/cluster_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_mdb_kafka_v1_cluster_pb from "../../../../../yandex/cloud/mdb/kafka/v1/cluster_pb";
import * as yandex_cloud_mdb_kafka_v1_topic_pb from "../../../../../yandex/cloud/mdb/kafka/v1/topic_pb";
import * as yandex_cloud_mdb_kafka_v1_user_pb from "../../../../../yandex/cloud/mdb/kafka/v1/user_pb";

export class GetClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClusterRequest): GetClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClusterRequest;
    static deserializeBinaryFromReader(message: GetClusterRequest, reader: jspb.BinaryReader): GetClusterRequest;
}

export namespace GetClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class ListClustersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListClustersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClustersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClustersRequest;
    getFilter(): string;
    setFilter(value: string): ListClustersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersRequest): ListClustersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersRequest;
    static deserializeBinaryFromReader(message: ListClustersRequest, reader: jspb.BinaryReader): ListClustersRequest;
}

export namespace ListClustersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListClustersResponse extends jspb.Message { 
    clearClustersList(): void;
    getClustersList(): Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster>;
    setClustersList(value: Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster>): ListClustersResponse;
    addClusters(value?: yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster, index?: number): yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClustersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClustersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClustersResponse): ListClustersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClustersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClustersResponse;
    static deserializeBinaryFromReader(message: ListClustersResponse, reader: jspb.BinaryReader): ListClustersResponse;
}

export namespace ListClustersResponse {
    export type AsObject = {
        clustersList: Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster.AsObject>,
        nextPageToken: string,
    }
}

export class CreateClusterRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateClusterRequest;
    getName(): string;
    setName(value: string): CreateClusterRequest;
    getDescription(): string;
    setDescription(value: string): CreateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getEnvironment(): yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster.Environment;
    setEnvironment(value: yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster.Environment): CreateClusterRequest;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec | undefined;
    setConfigSpec(value?: yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec): CreateClusterRequest;
    clearTopicSpecsList(): void;
    getTopicSpecsList(): Array<yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec>;
    setTopicSpecsList(value: Array<yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec>): CreateClusterRequest;
    addTopicSpecs(value?: yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec, index?: number): yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec;
    clearUserSpecsList(): void;
    getUserSpecsList(): Array<yandex_cloud_mdb_kafka_v1_user_pb.UserSpec>;
    setUserSpecsList(value: Array<yandex_cloud_mdb_kafka_v1_user_pb.UserSpec>): CreateClusterRequest;
    addUserSpecs(value?: yandex_cloud_mdb_kafka_v1_user_pb.UserSpec, index?: number): yandex_cloud_mdb_kafka_v1_user_pb.UserSpec;
    getNetworkId(): string;
    setNetworkId(value: string): CreateClusterRequest;
    clearSubnetIdList(): void;
    getSubnetIdList(): Array<string>;
    setSubnetIdList(value: Array<string>): CreateClusterRequest;
    addSubnetId(value: string, index?: number): string;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    clearHostGroupIdsList(): void;
    getHostGroupIdsList(): Array<string>;
    setHostGroupIdsList(value: Array<string>): CreateClusterRequest;
    addHostGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterRequest): CreateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterRequest;
    static deserializeBinaryFromReader(message: CreateClusterRequest, reader: jspb.BinaryReader): CreateClusterRequest;
}

export namespace CreateClusterRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        environment: yandex_cloud_mdb_kafka_v1_cluster_pb.Cluster.Environment,
        configSpec?: yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec.AsObject,
        topicSpecsList: Array<yandex_cloud_mdb_kafka_v1_topic_pb.TopicSpec.AsObject>,
        userSpecsList: Array<yandex_cloud_mdb_kafka_v1_user_pb.UserSpec.AsObject>,
        networkId: string,
        subnetIdList: Array<string>,
        securityGroupIdsList: Array<string>,
        hostGroupIdsList: Array<string>,
        deletionProtection: boolean,
    }
}

export class CreateClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClusterMetadata): CreateClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClusterMetadata;
    static deserializeBinaryFromReader(message: CreateClusterMetadata, reader: jspb.BinaryReader): CreateClusterMetadata;
}

export namespace CreateClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class UpdateClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateClusterRequest;
    getDescription(): string;
    setDescription(value: string): UpdateClusterRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasConfigSpec(): boolean;
    clearConfigSpec(): void;
    getConfigSpec(): yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec | undefined;
    setConfigSpec(value?: yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec): UpdateClusterRequest;
    getName(): string;
    setName(value: string): UpdateClusterRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): UpdateClusterRequest;
    addSecurityGroupIds(value: string, index?: number): string;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterRequest): UpdateClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterRequest;
    static deserializeBinaryFromReader(message: UpdateClusterRequest, reader: jspb.BinaryReader): UpdateClusterRequest;
}

export namespace UpdateClusterRequest {
    export type AsObject = {
        clusterId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,

        labelsMap: Array<[string, string]>,
        configSpec?: yandex_cloud_mdb_kafka_v1_cluster_pb.ConfigSpec.AsObject,
        name: string,
        securityGroupIdsList: Array<string>,
        deletionProtection: boolean,
    }
}

export class UpdateClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClusterMetadata): UpdateClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClusterMetadata;
    static deserializeBinaryFromReader(message: UpdateClusterMetadata, reader: jspb.BinaryReader): UpdateClusterMetadata;
}

export namespace UpdateClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class DeleteClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterRequest): DeleteClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterRequest;
    static deserializeBinaryFromReader(message: DeleteClusterRequest, reader: jspb.BinaryReader): DeleteClusterRequest;
}

export namespace DeleteClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class DeleteClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClusterMetadata): DeleteClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClusterMetadata;
    static deserializeBinaryFromReader(message: DeleteClusterMetadata, reader: jspb.BinaryReader): DeleteClusterMetadata;
}

export namespace DeleteClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class ListClusterLogsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterLogsRequest;
    clearColumnFilterList(): void;
    getColumnFilterList(): Array<string>;
    setColumnFilterList(value: Array<string>): ListClusterLogsRequest;
    addColumnFilter(value: string, index?: number): string;

    hasFromTime(): boolean;
    clearFromTime(): void;
    getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): ListClusterLogsRequest;

    hasToTime(): boolean;
    clearToTime(): void;
    getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setToTime(value?: google_protobuf_timestamp_pb.Timestamp): ListClusterLogsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterLogsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterLogsRequest;
    getAlwaysNextPageToken(): boolean;
    setAlwaysNextPageToken(value: boolean): ListClusterLogsRequest;
    getFilter(): string;
    setFilter(value: string): ListClusterLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterLogsRequest): ListClusterLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterLogsRequest;
    static deserializeBinaryFromReader(message: ListClusterLogsRequest, reader: jspb.BinaryReader): ListClusterLogsRequest;
}

export namespace ListClusterLogsRequest {
    export type AsObject = {
        clusterId: string,
        columnFilterList: Array<string>,
        fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pageSize: number,
        pageToken: string,
        alwaysNextPageToken: boolean,
        filter: string,
    }
}

export class LogRecord extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): LogRecord;

    getMessageMap(): jspb.Map<string, string>;
    clearMessageMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogRecord.AsObject;
    static toObject(includeInstance: boolean, msg: LogRecord): LogRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogRecord;
    static deserializeBinaryFromReader(message: LogRecord, reader: jspb.BinaryReader): LogRecord;
}

export namespace LogRecord {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,

        messageMap: Array<[string, string]>,
    }
}

export class ListClusterLogsResponse extends jspb.Message { 
    clearLogsList(): void;
    getLogsList(): Array<LogRecord>;
    setLogsList(value: Array<LogRecord>): ListClusterLogsResponse;
    addLogs(value?: LogRecord, index?: number): LogRecord;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterLogsResponse): ListClusterLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterLogsResponse;
    static deserializeBinaryFromReader(message: ListClusterLogsResponse, reader: jspb.BinaryReader): ListClusterLogsResponse;
}

export namespace ListClusterLogsResponse {
    export type AsObject = {
        logsList: Array<LogRecord.AsObject>,
        nextPageToken: string,
    }
}

export class StreamLogRecord extends jspb.Message { 

    hasRecord(): boolean;
    clearRecord(): void;
    getRecord(): LogRecord | undefined;
    setRecord(value?: LogRecord): StreamLogRecord;
    getNextRecordToken(): string;
    setNextRecordToken(value: string): StreamLogRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamLogRecord.AsObject;
    static toObject(includeInstance: boolean, msg: StreamLogRecord): StreamLogRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamLogRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamLogRecord;
    static deserializeBinaryFromReader(message: StreamLogRecord, reader: jspb.BinaryReader): StreamLogRecord;
}

export namespace StreamLogRecord {
    export type AsObject = {
        record?: LogRecord.AsObject,
        nextRecordToken: string,
    }
}

export class StreamClusterLogsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StreamClusterLogsRequest;
    clearColumnFilterList(): void;
    getColumnFilterList(): Array<string>;
    setColumnFilterList(value: Array<string>): StreamClusterLogsRequest;
    addColumnFilter(value: string, index?: number): string;

    hasFromTime(): boolean;
    clearFromTime(): void;
    getFromTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFromTime(value?: google_protobuf_timestamp_pb.Timestamp): StreamClusterLogsRequest;

    hasToTime(): boolean;
    clearToTime(): void;
    getToTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setToTime(value?: google_protobuf_timestamp_pb.Timestamp): StreamClusterLogsRequest;
    getRecordToken(): string;
    setRecordToken(value: string): StreamClusterLogsRequest;
    getFilter(): string;
    setFilter(value: string): StreamClusterLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamClusterLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamClusterLogsRequest): StreamClusterLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamClusterLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamClusterLogsRequest;
    static deserializeBinaryFromReader(message: StreamClusterLogsRequest, reader: jspb.BinaryReader): StreamClusterLogsRequest;
}

export namespace StreamClusterLogsRequest {
    export type AsObject = {
        clusterId: string,
        columnFilterList: Array<string>,
        fromTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        toTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        recordToken: string,
        filter: string,
    }
}

export class ListClusterOperationsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterOperationsRequest): ListClusterOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterOperationsRequest;
    static deserializeBinaryFromReader(message: ListClusterOperationsRequest, reader: jspb.BinaryReader): ListClusterOperationsRequest;
}

export namespace ListClusterOperationsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListClusterOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterOperationsResponse): ListClusterOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterOperationsResponse;
    static deserializeBinaryFromReader(message: ListClusterOperationsResponse, reader: jspb.BinaryReader): ListClusterOperationsResponse;
}

export namespace ListClusterOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class ListClusterHostsRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListClusterHostsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListClusterHostsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListClusterHostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterHostsRequest): ListClusterHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterHostsRequest;
    static deserializeBinaryFromReader(message: ListClusterHostsRequest, reader: jspb.BinaryReader): ListClusterHostsRequest;
}

export namespace ListClusterHostsRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListClusterHostsResponse extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Host>;
    setHostsList(value: Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Host>): ListClusterHostsResponse;
    addHosts(value?: yandex_cloud_mdb_kafka_v1_cluster_pb.Host, index?: number): yandex_cloud_mdb_kafka_v1_cluster_pb.Host;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListClusterHostsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListClusterHostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListClusterHostsResponse): ListClusterHostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListClusterHostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListClusterHostsResponse;
    static deserializeBinaryFromReader(message: ListClusterHostsResponse, reader: jspb.BinaryReader): ListClusterHostsResponse;
}

export namespace ListClusterHostsResponse {
    export type AsObject = {
        hostsList: Array<yandex_cloud_mdb_kafka_v1_cluster_pb.Host.AsObject>,
        nextPageToken: string,
    }
}

export class MoveClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): MoveClusterRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveClusterRequest): MoveClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveClusterRequest;
    static deserializeBinaryFromReader(message: MoveClusterRequest, reader: jspb.BinaryReader): MoveClusterRequest;
}

export namespace MoveClusterRequest {
    export type AsObject = {
        clusterId: string,
        destinationFolderId: string,
    }
}

export class MoveClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): MoveClusterMetadata;
    getSourceFolderId(): string;
    setSourceFolderId(value: string): MoveClusterMetadata;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveClusterMetadata): MoveClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveClusterMetadata;
    static deserializeBinaryFromReader(message: MoveClusterMetadata, reader: jspb.BinaryReader): MoveClusterMetadata;
}

export namespace MoveClusterMetadata {
    export type AsObject = {
        clusterId: string,
        sourceFolderId: string,
        destinationFolderId: string,
    }
}

export class StartClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterRequest): StartClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterRequest;
    static deserializeBinaryFromReader(message: StartClusterRequest, reader: jspb.BinaryReader): StartClusterRequest;
}

export namespace StartClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class StartClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StartClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartClusterMetadata): StartClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartClusterMetadata;
    static deserializeBinaryFromReader(message: StartClusterMetadata, reader: jspb.BinaryReader): StartClusterMetadata;
}

export namespace StartClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}

export class StopClusterRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StopClusterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopClusterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopClusterRequest): StopClusterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopClusterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopClusterRequest;
    static deserializeBinaryFromReader(message: StopClusterRequest, reader: jspb.BinaryReader): StopClusterRequest;
}

export namespace StopClusterRequest {
    export type AsObject = {
        clusterId: string,
    }
}

export class StopClusterMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): StopClusterMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopClusterMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopClusterMetadata): StopClusterMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopClusterMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopClusterMetadata;
    static deserializeBinaryFromReader(message: StopClusterMetadata, reader: jspb.BinaryReader): StopClusterMetadata;
}

export namespace StopClusterMetadata {
    export type AsObject = {
        clusterId: string,
    }
}
