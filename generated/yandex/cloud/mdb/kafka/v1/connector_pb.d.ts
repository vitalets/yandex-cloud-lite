// package: yandex.cloud.mdb.kafka.v1
// file: yandex/cloud/mdb/kafka/v1/connector.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ConnectorSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): ConnectorSpec;

    hasTasksMax(): boolean;
    clearTasksMax(): void;
    getTasksMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTasksMax(value?: google_protobuf_wrappers_pb.Int64Value): ConnectorSpec;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;

    hasConnectorConfigMirrormaker(): boolean;
    clearConnectorConfigMirrormaker(): void;
    getConnectorConfigMirrormaker(): ConnectorConfigMirrorMakerSpec | undefined;
    setConnectorConfigMirrormaker(value?: ConnectorConfigMirrorMakerSpec): ConnectorSpec;

    getConnectorConfigCase(): ConnectorSpec.ConnectorConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectorSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectorSpec): ConnectorSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectorSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectorSpec;
    static deserializeBinaryFromReader(message: ConnectorSpec, reader: jspb.BinaryReader): ConnectorSpec;
}

export namespace ConnectorSpec {
    export type AsObject = {
        name: string,
        tasksMax?: google_protobuf_wrappers_pb.Int64Value.AsObject,

        propertiesMap: Array<[string, string]>,
        connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec.AsObject,
    }

    export enum ConnectorConfigCase {
        CONNECTOR_CONFIG_NOT_SET = 0,
        CONNECTOR_CONFIG_MIRRORMAKER = 10,
    }

}

export class UpdateConnectorSpec extends jspb.Message { 

    hasTasksMax(): boolean;
    clearTasksMax(): void;
    getTasksMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTasksMax(value?: google_protobuf_wrappers_pb.Int64Value): UpdateConnectorSpec;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;

    hasConnectorConfigMirrormaker(): boolean;
    clearConnectorConfigMirrormaker(): void;
    getConnectorConfigMirrormaker(): ConnectorConfigMirrorMakerSpec | undefined;
    setConnectorConfigMirrormaker(value?: ConnectorConfigMirrorMakerSpec): UpdateConnectorSpec;

    getConnectorConfigCase(): UpdateConnectorSpec.ConnectorConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConnectorSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConnectorSpec): UpdateConnectorSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConnectorSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConnectorSpec;
    static deserializeBinaryFromReader(message: UpdateConnectorSpec, reader: jspb.BinaryReader): UpdateConnectorSpec;
}

export namespace UpdateConnectorSpec {
    export type AsObject = {
        tasksMax?: google_protobuf_wrappers_pb.Int64Value.AsObject,

        propertiesMap: Array<[string, string]>,
        connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec.AsObject,
    }

    export enum ConnectorConfigCase {
        CONNECTOR_CONFIG_NOT_SET = 0,
        CONNECTOR_CONFIG_MIRRORMAKER = 10,
    }

}

export class ConnectorConfigMirrorMakerSpec extends jspb.Message { 

    hasSourceCluster(): boolean;
    clearSourceCluster(): void;
    getSourceCluster(): ClusterConnectionSpec | undefined;
    setSourceCluster(value?: ClusterConnectionSpec): ConnectorConfigMirrorMakerSpec;

    hasTargetCluster(): boolean;
    clearTargetCluster(): void;
    getTargetCluster(): ClusterConnectionSpec | undefined;
    setTargetCluster(value?: ClusterConnectionSpec): ConnectorConfigMirrorMakerSpec;
    getTopics(): string;
    setTopics(value: string): ConnectorConfigMirrorMakerSpec;

    hasReplicationFactor(): boolean;
    clearReplicationFactor(): void;
    getReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): ConnectorConfigMirrorMakerSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectorConfigMirrorMakerSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectorConfigMirrorMakerSpec): ConnectorConfigMirrorMakerSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectorConfigMirrorMakerSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectorConfigMirrorMakerSpec;
    static deserializeBinaryFromReader(message: ConnectorConfigMirrorMakerSpec, reader: jspb.BinaryReader): ConnectorConfigMirrorMakerSpec;
}

export namespace ConnectorConfigMirrorMakerSpec {
    export type AsObject = {
        sourceCluster?: ClusterConnectionSpec.AsObject,
        targetCluster?: ClusterConnectionSpec.AsObject,
        topics: string,
        replicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class ClusterConnectionSpec extends jspb.Message { 
    getAlias(): string;
    setAlias(value: string): ClusterConnectionSpec;

    hasThisCluster(): boolean;
    clearThisCluster(): void;
    getThisCluster(): ThisClusterSpec | undefined;
    setThisCluster(value?: ThisClusterSpec): ClusterConnectionSpec;

    hasExternalCluster(): boolean;
    clearExternalCluster(): void;
    getExternalCluster(): ExternalClusterConnectionSpec | undefined;
    setExternalCluster(value?: ExternalClusterConnectionSpec): ClusterConnectionSpec;

    getClusterConnectionCase(): ClusterConnectionSpec.ClusterConnectionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterConnectionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterConnectionSpec): ClusterConnectionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterConnectionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterConnectionSpec;
    static deserializeBinaryFromReader(message: ClusterConnectionSpec, reader: jspb.BinaryReader): ClusterConnectionSpec;
}

export namespace ClusterConnectionSpec {
    export type AsObject = {
        alias: string,
        thisCluster?: ThisClusterSpec.AsObject,
        externalCluster?: ExternalClusterConnectionSpec.AsObject,
    }

    export enum ClusterConnectionCase {
        CLUSTER_CONNECTION_NOT_SET = 0,
        THIS_CLUSTER = 2,
        EXTERNAL_CLUSTER = 3,
    }

}

export class ThisClusterSpec extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThisClusterSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ThisClusterSpec): ThisClusterSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThisClusterSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThisClusterSpec;
    static deserializeBinaryFromReader(message: ThisClusterSpec, reader: jspb.BinaryReader): ThisClusterSpec;
}

export namespace ThisClusterSpec {
    export type AsObject = {
    }
}

export class ExternalClusterConnectionSpec extends jspb.Message { 
    getBootstrapServers(): string;
    setBootstrapServers(value: string): ExternalClusterConnectionSpec;
    getSaslUsername(): string;
    setSaslUsername(value: string): ExternalClusterConnectionSpec;
    getSaslPassword(): string;
    setSaslPassword(value: string): ExternalClusterConnectionSpec;
    getSaslMechanism(): string;
    setSaslMechanism(value: string): ExternalClusterConnectionSpec;
    getSecurityProtocol(): string;
    setSecurityProtocol(value: string): ExternalClusterConnectionSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalClusterConnectionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalClusterConnectionSpec): ExternalClusterConnectionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalClusterConnectionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalClusterConnectionSpec;
    static deserializeBinaryFromReader(message: ExternalClusterConnectionSpec, reader: jspb.BinaryReader): ExternalClusterConnectionSpec;
}

export namespace ExternalClusterConnectionSpec {
    export type AsObject = {
        bootstrapServers: string,
        saslUsername: string,
        saslPassword: string,
        saslMechanism: string,
        securityProtocol: string,
    }
}

export class Connector extends jspb.Message { 
    getName(): string;
    setName(value: string): Connector;

    hasTasksMax(): boolean;
    clearTasksMax(): void;
    getTasksMax(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTasksMax(value?: google_protobuf_wrappers_pb.Int64Value): Connector;

    getPropertiesMap(): jspb.Map<string, string>;
    clearPropertiesMap(): void;
    getHealth(): Connector.Health;
    setHealth(value: Connector.Health): Connector;
    getStatus(): Connector.Status;
    setStatus(value: Connector.Status): Connector;
    getClusterId(): string;
    setClusterId(value: string): Connector;

    hasConnectorConfigMirrormaker(): boolean;
    clearConnectorConfigMirrormaker(): void;
    getConnectorConfigMirrormaker(): ConnectorConfigMirrorMaker | undefined;
    setConnectorConfigMirrormaker(value?: ConnectorConfigMirrorMaker): Connector;

    getConnectorConfigCase(): Connector.ConnectorConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connector.AsObject;
    static toObject(includeInstance: boolean, msg: Connector): Connector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connector;
    static deserializeBinaryFromReader(message: Connector, reader: jspb.BinaryReader): Connector;
}

export namespace Connector {
    export type AsObject = {
        name: string,
        tasksMax?: google_protobuf_wrappers_pb.Int64Value.AsObject,

        propertiesMap: Array<[string, string]>,
        health: Connector.Health,
        status: Connector.Status,
        clusterId: string,
        connectorConfigMirrormaker?: ConnectorConfigMirrorMaker.AsObject,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    RUNNING = 1,
    ERROR = 2,
    PAUSED = 3,
    }


    export enum ConnectorConfigCase {
        CONNECTOR_CONFIG_NOT_SET = 0,
        CONNECTOR_CONFIG_MIRRORMAKER = 10,
    }

}

export class ConnectorConfigMirrorMaker extends jspb.Message { 

    hasSourceCluster(): boolean;
    clearSourceCluster(): void;
    getSourceCluster(): ClusterConnection | undefined;
    setSourceCluster(value?: ClusterConnection): ConnectorConfigMirrorMaker;

    hasTargetCluster(): boolean;
    clearTargetCluster(): void;
    getTargetCluster(): ClusterConnection | undefined;
    setTargetCluster(value?: ClusterConnection): ConnectorConfigMirrorMaker;
    getTopics(): string;
    setTopics(value: string): ConnectorConfigMirrorMaker;

    hasReplicationFactor(): boolean;
    clearReplicationFactor(): void;
    getReplicationFactor(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setReplicationFactor(value?: google_protobuf_wrappers_pb.Int64Value): ConnectorConfigMirrorMaker;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectorConfigMirrorMaker.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectorConfigMirrorMaker): ConnectorConfigMirrorMaker.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectorConfigMirrorMaker, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectorConfigMirrorMaker;
    static deserializeBinaryFromReader(message: ConnectorConfigMirrorMaker, reader: jspb.BinaryReader): ConnectorConfigMirrorMaker;
}

export namespace ConnectorConfigMirrorMaker {
    export type AsObject = {
        sourceCluster?: ClusterConnection.AsObject,
        targetCluster?: ClusterConnection.AsObject,
        topics: string,
        replicationFactor?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
}

export class ClusterConnection extends jspb.Message { 
    getAlias(): string;
    setAlias(value: string): ClusterConnection;

    hasThisCluster(): boolean;
    clearThisCluster(): void;
    getThisCluster(): ThisCluster | undefined;
    setThisCluster(value?: ThisCluster): ClusterConnection;

    hasExternalCluster(): boolean;
    clearExternalCluster(): void;
    getExternalCluster(): ExternalClusterConnection | undefined;
    setExternalCluster(value?: ExternalClusterConnection): ClusterConnection;

    getClusterConnectionCase(): ClusterConnection.ClusterConnectionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterConnection.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterConnection): ClusterConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterConnection;
    static deserializeBinaryFromReader(message: ClusterConnection, reader: jspb.BinaryReader): ClusterConnection;
}

export namespace ClusterConnection {
    export type AsObject = {
        alias: string,
        thisCluster?: ThisCluster.AsObject,
        externalCluster?: ExternalClusterConnection.AsObject,
    }

    export enum ClusterConnectionCase {
        CLUSTER_CONNECTION_NOT_SET = 0,
        THIS_CLUSTER = 2,
        EXTERNAL_CLUSTER = 3,
    }

}

export class ThisCluster extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThisCluster.AsObject;
    static toObject(includeInstance: boolean, msg: ThisCluster): ThisCluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThisCluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThisCluster;
    static deserializeBinaryFromReader(message: ThisCluster, reader: jspb.BinaryReader): ThisCluster;
}

export namespace ThisCluster {
    export type AsObject = {
    }
}

export class ExternalClusterConnection extends jspb.Message { 
    getBootstrapServers(): string;
    setBootstrapServers(value: string): ExternalClusterConnection;
    getSaslUsername(): string;
    setSaslUsername(value: string): ExternalClusterConnection;
    getSaslMechanism(): string;
    setSaslMechanism(value: string): ExternalClusterConnection;
    getSecurityProtocol(): string;
    setSecurityProtocol(value: string): ExternalClusterConnection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalClusterConnection.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalClusterConnection): ExternalClusterConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalClusterConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalClusterConnection;
    static deserializeBinaryFromReader(message: ExternalClusterConnection, reader: jspb.BinaryReader): ExternalClusterConnection;
}

export namespace ExternalClusterConnection {
    export type AsObject = {
        bootstrapServers: string,
        saslUsername: string,
        saslMechanism: string,
        securityProtocol: string,
    }
}
