// package: yandex.cloud.mdb.clickhouse.v1
// file: yandex/cloud/mdb/clickhouse/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/config/clickhouse_pb";
import * as yandex_cloud_mdb_clickhouse_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/clickhouse/v1/maintenance_pb";

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
    getServiceAccountId(): string;
    setServiceAccountId(value: string): Cluster;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow): Cluster;

    hasPlannedOperation(): boolean;
    clearPlannedOperation(): void;
    getPlannedOperation(): yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceOperation | undefined;
    setPlannedOperation(value?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceOperation): Cluster;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): Cluster;
    addSecurityGroupIds(value: string, index?: number): string;
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
        serviceAccountId: string,
        maintenanceWindow?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceWindow.AsObject,
        plannedOperation?: yandex_cloud_mdb_clickhouse_v1_maintenance_pb.MaintenanceOperation.AsObject,
        securityGroupIdsList: Array<string>,
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

    hasClickhouse(): boolean;
    clearClickhouse(): void;
    getClickhouse(): ClusterConfig.Clickhouse | undefined;
    setClickhouse(value?: ClusterConfig.Clickhouse): ClusterConfig;

    hasZookeeper(): boolean;
    clearZookeeper(): void;
    getZookeeper(): ClusterConfig.Zookeeper | undefined;
    setZookeeper(value?: ClusterConfig.Zookeeper): ClusterConfig;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): ClusterConfig;

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): Access | undefined;
    setAccess(value?: Access): ClusterConfig;

    hasCloudStorage(): boolean;
    clearCloudStorage(): void;
    getCloudStorage(): CloudStorage | undefined;
    setCloudStorage(value?: CloudStorage): ClusterConfig;

    hasSqlDatabaseManagement(): boolean;
    clearSqlDatabaseManagement(): void;
    getSqlDatabaseManagement(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSqlDatabaseManagement(value?: google_protobuf_wrappers_pb.BoolValue): ClusterConfig;

    hasSqlUserManagement(): boolean;
    clearSqlUserManagement(): void;
    getSqlUserManagement(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setSqlUserManagement(value?: google_protobuf_wrappers_pb.BoolValue): ClusterConfig;

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
        clickhouse?: ClusterConfig.Clickhouse.AsObject,
        zookeeper?: ClusterConfig.Zookeeper.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        access?: Access.AsObject,
        cloudStorage?: CloudStorage.AsObject,
        sqlDatabaseManagement?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        sqlUserManagement?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }


    export class Clickhouse extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet | undefined;
        setConfig(value?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet): Clickhouse;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Clickhouse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Clickhouse.AsObject;
        static toObject(includeInstance: boolean, msg: Clickhouse): Clickhouse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Clickhouse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Clickhouse;
        static deserializeBinaryFromReader(message: Clickhouse, reader: jspb.BinaryReader): Clickhouse;
    }

    export namespace Clickhouse {
        export type AsObject = {
            config?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Zookeeper extends jspb.Message { 

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Zookeeper;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Zookeeper.AsObject;
        static toObject(includeInstance: boolean, msg: Zookeeper): Zookeeper.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Zookeeper, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Zookeeper;
        static deserializeBinaryFromReader(message: Zookeeper, reader: jspb.BinaryReader): Zookeeper;
    }

    export namespace Zookeeper {
        export type AsObject = {
            resources?: Resources.AsObject,
        }
    }

}

export class Shard extends jspb.Message { 
    getName(): string;
    setName(value: string): Shard;
    getClusterId(): string;
    setClusterId(value: string): Shard;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): ShardConfig | undefined;
    setConfig(value?: ShardConfig): Shard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shard.AsObject;
    static toObject(includeInstance: boolean, msg: Shard): Shard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shard;
    static deserializeBinaryFromReader(message: Shard, reader: jspb.BinaryReader): Shard;
}

export namespace Shard {
    export type AsObject = {
        name: string,
        clusterId: string,
        config?: ShardConfig.AsObject,
    }
}

export class ShardGroup extends jspb.Message { 
    getName(): string;
    setName(value: string): ShardGroup;
    getClusterId(): string;
    setClusterId(value: string): ShardGroup;
    getDescription(): string;
    setDescription(value: string): ShardGroup;
    clearShardNamesList(): void;
    getShardNamesList(): Array<string>;
    setShardNamesList(value: Array<string>): ShardGroup;
    addShardNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShardGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ShardGroup): ShardGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShardGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShardGroup;
    static deserializeBinaryFromReader(message: ShardGroup, reader: jspb.BinaryReader): ShardGroup;
}

export namespace ShardGroup {
    export type AsObject = {
        name: string,
        clusterId: string,
        description: string,
        shardNamesList: Array<string>,
    }
}

export class ShardConfig extends jspb.Message { 

    hasClickhouse(): boolean;
    clearClickhouse(): void;
    getClickhouse(): ShardConfig.Clickhouse | undefined;
    setClickhouse(value?: ShardConfig.Clickhouse): ShardConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShardConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ShardConfig): ShardConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShardConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShardConfig;
    static deserializeBinaryFromReader(message: ShardConfig, reader: jspb.BinaryReader): ShardConfig;
}

export namespace ShardConfig {
    export type AsObject = {
        clickhouse?: ShardConfig.Clickhouse.AsObject,
    }


    export class Clickhouse extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet | undefined;
        setConfig(value?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet): Clickhouse;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Clickhouse;

        hasWeight(): boolean;
        clearWeight(): void;
        getWeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
        setWeight(value?: google_protobuf_wrappers_pb.Int64Value): Clickhouse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Clickhouse.AsObject;
        static toObject(includeInstance: boolean, msg: Clickhouse): Clickhouse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Clickhouse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Clickhouse;
        static deserializeBinaryFromReader(message: Clickhouse, reader: jspb.BinaryReader): Clickhouse;
    }

    export namespace Clickhouse {
        export type AsObject = {
            config?: yandex_cloud_mdb_clickhouse_v1_config_clickhouse_pb.ClickhouseConfigSet.AsObject,
            resources?: Resources.AsObject,
            weight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        }
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
    getShardName(): string;
    setShardName(value: string): Host;

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
        shardName: string,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    CLICKHOUSE = 1,
    ZOOKEEPER = 2,
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
    CLICKHOUSE = 1,
    ZOOKEEPER = 2,
    }

    export enum Health {
    UNKNOWN = 0,
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

export class Access extends jspb.Message { 
    getDataLens(): boolean;
    setDataLens(value: boolean): Access;
    getWebSql(): boolean;
    setWebSql(value: boolean): Access;
    getMetrika(): boolean;
    setMetrika(value: boolean): Access;
    getServerless(): boolean;
    setServerless(value: boolean): Access;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Access.AsObject;
    static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Access;
    static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
}

export namespace Access {
    export type AsObject = {
        dataLens: boolean,
        webSql: boolean,
        metrika: boolean,
        serverless: boolean,
    }
}

export class CloudStorage extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): CloudStorage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStorage.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStorage): CloudStorage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStorage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStorage;
    static deserializeBinaryFromReader(message: CloudStorage, reader: jspb.BinaryReader): CloudStorage;
}

export namespace CloudStorage {
    export type AsObject = {
        enabled: boolean,
    }
}
