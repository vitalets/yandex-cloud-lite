// package: yandex.cloud.mdb.mysql.v1alpha
// file: yandex/cloud/mdb/mysql/v1alpha/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_mdb_mysql_v1alpha_config_mysql5_7_pb from "../../../../../yandex/cloud/mdb/mysql/v1alpha/config/mysql5_7_pb";

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

    hasMysqlConfig57(): boolean;
    clearMysqlConfig57(): void;
    getMysqlConfig57(): yandex_cloud_mdb_mysql_v1alpha_config_mysql5_7_pb.MysqlConfigSet5_7 | undefined;
    setMysqlConfig57(value?: yandex_cloud_mdb_mysql_v1alpha_config_mysql5_7_pb.MysqlConfigSet5_7): ClusterConfig;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): ClusterConfig;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): ClusterConfig;

    getMysqlConfigCase(): ClusterConfig.MysqlConfigCase;

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
        mysqlConfig57?: yandex_cloud_mdb_mysql_v1alpha_config_mysql5_7_pb.MysqlConfigSet5_7.AsObject,
        resources?: Resources.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
    }

    export enum MysqlConfigCase {
        MYSQL_CONFIG_NOT_SET = 0,
        MYSQL_CONFIG_5_7 = 2,
    }

}

export class Host extends jspb.Message { 
    getName(): string;
    setName(value: string): Host;
    getClusterId(): string;
    setClusterId(value: string): Host;
    getZoneId(): string;
    setZoneId(value: string): Host;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): Host;
    getRole(): Host.Role;
    setRole(value: Host.Role): Host;
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
        resources?: Resources.AsObject,
        role: Host.Role,
        health: Host.Health,
        servicesList: Array<Service.AsObject>,
        subnetId: string,
        assignPublicIp: boolean,
    }

    export enum Role {
    ROLE_UNKNOWN = 0,
    MASTER = 1,
    REPLICA = 2,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
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
    MYSQL_ERROR = 1,
    MYSQL_GENERAL = 2,
    MYSQL_SLOW_QUERY = 3,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
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
