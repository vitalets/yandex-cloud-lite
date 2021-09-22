// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb from "../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch_pb";

export class Cluster extends jspb.Message { 
    getId(): string;
    setId(value: string): Cluster;
    getFolderId(): string;
    setFolderId(value: string): Cluster;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Cluster;
    getName(): string;
    setName(value: string): Cluster;
    getDescription(): string;
    setDescription(value: string): Cluster;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getEnvironment(): Cluster.Environment;
    setEnvironment(value: Cluster.Environment): Cluster;
    clearMonitoringList(): void;
    getMonitoringList(): Array<Monitoring>;
    setMonitoringList(value: Array<Monitoring>): Cluster;
    addMonitoring(value?: Monitoring, index?: number): Monitoring;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ClusterConfig | undefined;
    setConfig(value?: ClusterConfig): Cluster;
    getNetworkId(): string;
    setNetworkId(value: string): Cluster;
    getHealth(): Cluster.Health;
    setHealth(value: Cluster.Health): Cluster;
    getStatus(): Cluster.Status;
    setStatus(value: Cluster.Status): Cluster;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): Cluster;
    addSecurityGroupIds(value: string, index?: number): string;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Cluster;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): Cluster;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cluster.AsObject;
    static toObject(includeInstance: boolean, msg: Cluster): Cluster.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cluster, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cluster;
    static deserializeBinaryFromReader(message: Cluster, reader: jspb.BinaryReader): Cluster;
}

export namespace Cluster {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        environment: Cluster.Environment,
        monitoringList: Array<Monitoring.AsObject>,
        config?: ClusterConfig.AsObject,
        networkId: string,
        health: Cluster.Health,
        status: Cluster.Status,
        securityGroupIdsList: Array<string>,
        serviceAccountId: string,
        deletionProtection: boolean,
    }

    export enum Environment {
    ENVIRONMENT_UNSPECIFIED = 0,
    PRODUCTION = 1,
    PRESTABLE = 2,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

    export enum Status {
    STATUS_UNKNOWN = 0,
    CREATING = 1,
    RUNNING = 2,
    ERROR = 3,
    UPDATING = 4,
    STOPPING = 5,
    STOPPED = 6,
    STARTING = 7,
    }

}

export class Monitoring extends jspb.Message { 
    getName(): string;
    setName(value: string): Monitoring;
    getDescription(): string;
    setDescription(value: string): Monitoring;
    getLink(): string;
    setLink(value: string): Monitoring;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Monitoring.AsObject;
    static toObject(includeInstance: boolean, msg: Monitoring): Monitoring.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Monitoring, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Monitoring;
    static deserializeBinaryFromReader(message: Monitoring, reader: jspb.BinaryReader): Monitoring;
}

export namespace Monitoring {
    export type AsObject = {
        name: string,
        description: string,
        link: string,
    }
}

export class ClusterConfig extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ClusterConfig;

    hasElasticsearch(): boolean;
    clearElasticsearch(): void;
    getElasticsearch(): Elasticsearch | undefined;
    setElasticsearch(value?: Elasticsearch): ClusterConfig;
    getEdition(): string;
    setEdition(value: string): ClusterConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterConfig): ClusterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterConfig;
    static deserializeBinaryFromReader(message: ClusterConfig, reader: jspb.BinaryReader): ClusterConfig;
}

export namespace ClusterConfig {
    export type AsObject = {
        version: string,
        elasticsearch?: Elasticsearch.AsObject,
        edition: string,
    }
}

export class Elasticsearch extends jspb.Message { 

    hasDataNode(): boolean;
    clearDataNode(): void;
    getDataNode(): Elasticsearch.DataNode | undefined;
    setDataNode(value?: Elasticsearch.DataNode): Elasticsearch;

    hasMasterNode(): boolean;
    clearMasterNode(): void;
    getMasterNode(): Elasticsearch.MasterNode | undefined;
    setMasterNode(value?: Elasticsearch.MasterNode): Elasticsearch;
    clearPluginsList(): void;
    getPluginsList(): Array<string>;
    setPluginsList(value: Array<string>): Elasticsearch;
    addPlugins(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Elasticsearch.AsObject;
    static toObject(includeInstance: boolean, msg: Elasticsearch): Elasticsearch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Elasticsearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Elasticsearch;
    static deserializeBinaryFromReader(message: Elasticsearch, reader: jspb.BinaryReader): Elasticsearch;
}

export namespace Elasticsearch {
    export type AsObject = {
        dataNode?: Elasticsearch.DataNode.AsObject,
        masterNode?: Elasticsearch.MasterNode.AsObject,
        pluginsList: Array<string>,
    }


    export class DataNode extends jspb.Message { 

        hasElasticsearchConfigSet7(): boolean;
        clearElasticsearchConfigSet7(): void;
        getElasticsearchConfigSet7(): yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfigSet7 | undefined;
        setElasticsearchConfigSet7(value?: yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfigSet7): DataNode;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): DataNode;

        getConfigCase(): DataNode.ConfigCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DataNode.AsObject;
        static toObject(includeInstance: boolean, msg: DataNode): DataNode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DataNode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DataNode;
        static deserializeBinaryFromReader(message: DataNode, reader: jspb.BinaryReader): DataNode;
    }

    export namespace DataNode {
        export type AsObject = {
            elasticsearchConfigSet7?: yandex_cloud_mdb_elasticsearch_v1_config_elasticsearch_pb.ElasticsearchConfigSet7.AsObject,
            resources?: Resources.AsObject,
        }

        export enum ConfigCase {
            CONFIG_NOT_SET = 0,
            ELASTICSEARCH_CONFIG_SET_7 = 1,
        }

    }

    export class MasterNode extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MasterNode;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MasterNode.AsObject;
        static toObject(includeInstance: boolean, msg: MasterNode): MasterNode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MasterNode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MasterNode;
        static deserializeBinaryFromReader(message: MasterNode, reader: jspb.BinaryReader): MasterNode;
    }

    export namespace MasterNode {
        export type AsObject = {
            resources?: Resources.AsObject,
        }
    }

}

export class Resources extends jspb.Message { 
    getResourcePresetId(): string;
    setResourcePresetId(value: string): Resources;
    getDiskSize(): number;
    setDiskSize(value: number): Resources;
    getDiskTypeId(): string;
    setDiskTypeId(value: string): Resources;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resources.AsObject;
    static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resources;
    static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
    export type AsObject = {
        resourcePresetId: string,
        diskSize: number,
        diskTypeId: string,
    }
}

export class Host extends jspb.Message { 
    getName(): string;
    setName(value: string): Host;
    getClusterId(): string;
    setClusterId(value: string): Host;
    getZoneId(): string;
    setZoneId(value: string): Host;
    getType(): Host.Type;
    setType(value: Host.Type): Host;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Host;
    getHealth(): Host.Health;
    setHealth(value: Host.Health): Host;
    clearServicesList(): void;
    getServicesList(): Array<Service>;
    setServicesList(value: Array<Service>): Host;
    addServices(value?: Service, index?: number): Service;
    getSubnetId(): string;
    setSubnetId(value: string): Host;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): Host;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Host.AsObject;
    static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Host;
    static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
    export type AsObject = {
        name: string,
        clusterId: string,
        zoneId: string,
        type: Host.Type,
        resources?: Resources.AsObject,
        health: Host.Health,
        servicesList: Array<Service.AsObject>,
        subnetId: string,
        assignPublicIp: boolean,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    DATA_NODE = 1,
    MASTER_NODE = 2,
    }

    export enum Health {
    UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

}

export class Service extends jspb.Message { 
    getType(): Service.Type;
    setType(value: Service.Type): Service;
    getHealth(): Service.Health;
    setHealth(value: Service.Health): Service;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
    export type AsObject = {
        type: Service.Type,
        health: Service.Health,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    ELASTICSEARCH = 1,
    }

    export enum Health {
    UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    }

}
