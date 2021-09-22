// package: yandex.cloud.mdb.postgresql.v1
// file: yandex/cloud/mdb/postgresql/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql9_6_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql10_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql11_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql13_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/postgresql12_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host9_6_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host9_6_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host10_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host10_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host11_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host11_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host12_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host13_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host13_pb";
import * as yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/config/host12_1c_pb";
import * as yandex_cloud_mdb_postgresql_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/postgresql/v1/maintenance_pb";

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

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow): Cluster;

    hasPlannedOperation(): boolean;
    clearPlannedOperation(): void;
    getPlannedOperation(): yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation | undefined;
    setPlannedOperation(value?: yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation): Cluster;
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
        maintenanceWindow?: yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceWindow.AsObject,
        plannedOperation?: yandex_cloud_mdb_postgresql_v1_maintenance_pb.MaintenanceOperation.AsObject,
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

    hasPostgresqlConfig96(): boolean;
    clearPostgresqlConfig96(): void;
    getPostgresqlConfig96(): yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6 | undefined;
    setPostgresqlConfig96(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6): ClusterConfig;

    hasPostgresqlConfig101c(): boolean;
    clearPostgresqlConfig101c(): void;
    getPostgresqlConfig101c(): yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C | undefined;
    setPostgresqlConfig101c(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C): ClusterConfig;

    hasPostgresqlConfig10(): boolean;
    clearPostgresqlConfig10(): void;
    getPostgresqlConfig10(): yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10 | undefined;
    setPostgresqlConfig10(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10): ClusterConfig;

    hasPostgresqlConfig11(): boolean;
    clearPostgresqlConfig11(): void;
    getPostgresqlConfig11(): yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11 | undefined;
    setPostgresqlConfig11(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11): ClusterConfig;

    hasPostgresqlConfig111c(): boolean;
    clearPostgresqlConfig111c(): void;
    getPostgresqlConfig111c(): yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C | undefined;
    setPostgresqlConfig111c(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C): ClusterConfig;

    hasPostgresqlConfig12(): boolean;
    clearPostgresqlConfig12(): void;
    getPostgresqlConfig12(): yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12 | undefined;
    setPostgresqlConfig12(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12): ClusterConfig;

    hasPostgresqlConfig121c(): boolean;
    clearPostgresqlConfig121c(): void;
    getPostgresqlConfig121c(): yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C | undefined;
    setPostgresqlConfig121c(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C): ClusterConfig;

    hasPostgresqlConfig13(): boolean;
    clearPostgresqlConfig13(): void;
    getPostgresqlConfig13(): yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13 | undefined;
    setPostgresqlConfig13(value?: yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13): ClusterConfig;

    hasPoolerConfig(): boolean;
    clearPoolerConfig(): void;
    getPoolerConfig(): ConnectionPoolerConfig | undefined;
    setPoolerConfig(value?: ConnectionPoolerConfig): ClusterConfig;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): Resources | undefined;
    setResources(value?: Resources): ClusterConfig;

    hasAutofailover(): boolean;
    clearAutofailover(): void;
    getAutofailover(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAutofailover(value?: google_protobuf_wrappers_pb.BoolValue): ClusterConfig;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): ClusterConfig;

    hasBackupRetainPeriodDays(): boolean;
    clearBackupRetainPeriodDays(): void;
    getBackupRetainPeriodDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setBackupRetainPeriodDays(value?: google_protobuf_wrappers_pb.Int64Value): ClusterConfig;

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): Access | undefined;
    setAccess(value?: Access): ClusterConfig;

    hasPerformanceDiagnostics(): boolean;
    clearPerformanceDiagnostics(): void;
    getPerformanceDiagnostics(): PerformanceDiagnostics | undefined;
    setPerformanceDiagnostics(value?: PerformanceDiagnostics): ClusterConfig;

    getPostgresqlConfigCase(): ClusterConfig.PostgresqlConfigCase;

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
        postgresqlConfig96?: yandex_cloud_mdb_postgresql_v1_config_postgresql9_6_pb.PostgresqlConfigSet9_6.AsObject,
        postgresqlConfig101c?: yandex_cloud_mdb_postgresql_v1_config_postgresql10_1c_pb.PostgresqlConfigSet10_1C.AsObject,
        postgresqlConfig10?: yandex_cloud_mdb_postgresql_v1_config_postgresql10_pb.PostgresqlConfigSet10.AsObject,
        postgresqlConfig11?: yandex_cloud_mdb_postgresql_v1_config_postgresql11_pb.PostgresqlConfigSet11.AsObject,
        postgresqlConfig111c?: yandex_cloud_mdb_postgresql_v1_config_postgresql11_1c_pb.PostgresqlConfigSet11_1C.AsObject,
        postgresqlConfig12?: yandex_cloud_mdb_postgresql_v1_config_postgresql12_pb.PostgresqlConfigSet12.AsObject,
        postgresqlConfig121c?: yandex_cloud_mdb_postgresql_v1_config_postgresql12_1c_pb.PostgresqlConfigSet12_1C.AsObject,
        postgresqlConfig13?: yandex_cloud_mdb_postgresql_v1_config_postgresql13_pb.PostgresqlConfigSet13.AsObject,
        poolerConfig?: ConnectionPoolerConfig.AsObject,
        resources?: Resources.AsObject,
        autofailover?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        backupRetainPeriodDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        access?: Access.AsObject,
        performanceDiagnostics?: PerformanceDiagnostics.AsObject,
    }

    export enum PostgresqlConfigCase {
        POSTGRESQL_CONFIG_NOT_SET = 0,
        POSTGRESQL_CONFIG_9_6 = 2,
        POSTGRESQL_CONFIG_10_1C = 10,
        POSTGRESQL_CONFIG_10 = 3,
        POSTGRESQL_CONFIG_11 = 8,
        POSTGRESQL_CONFIG_11_1C = 13,
        POSTGRESQL_CONFIG_12 = 11,
        POSTGRESQL_CONFIG_12_1C = 14,
        POSTGRESQL_CONFIG_13 = 15,
    }

}

export class ConnectionPoolerConfig extends jspb.Message { 
    getPoolingMode(): ConnectionPoolerConfig.PoolingMode;
    setPoolingMode(value: ConnectionPoolerConfig.PoolingMode): ConnectionPoolerConfig;

    hasPoolDiscard(): boolean;
    clearPoolDiscard(): void;
    getPoolDiscard(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setPoolDiscard(value?: google_protobuf_wrappers_pb.BoolValue): ConnectionPoolerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionPoolerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionPoolerConfig): ConnectionPoolerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionPoolerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionPoolerConfig;
    static deserializeBinaryFromReader(message: ConnectionPoolerConfig, reader: jspb.BinaryReader): ConnectionPoolerConfig;
}

export namespace ConnectionPoolerConfig {
    export type AsObject = {
        poolingMode: ConnectionPoolerConfig.PoolingMode,
        poolDiscard?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }

    export enum PoolingMode {
    POOLING_MODE_UNSPECIFIED = 0,
    SESSION = 1,
    TRANSACTION = 2,
    STATEMENT = 3,
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
    getReplicationSource(): string;
    setReplicationSource(value: string): Host;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setPriority(value?: google_protobuf_wrappers_pb.Int64Value): Host;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): HostConfig | undefined;
    setConfig(value?: HostConfig): Host;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): Host;
    getReplicaType(): Host.ReplicaType;
    setReplicaType(value: Host.ReplicaType): Host;

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
        replicationSource: string,
        priority?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        config?: HostConfig.AsObject,
        assignPublicIp: boolean,
        replicaType: Host.ReplicaType,
    }

    export enum Role {
    ROLE_UNKNOWN = 0,
    MASTER = 1,
    REPLICA = 2,
    }

    export enum ReplicaType {
    REPLICA_TYPE_UNKNOWN = 0,
    ASYNC = 1,
    SYNC = 2,
    QUORUM = 3,
    }

    export enum Health {
    HEALTH_UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

}

export class HostConfig extends jspb.Message { 

    hasPostgresqlConfig96(): boolean;
    clearPostgresqlConfig96(): void;
    getPostgresqlConfig96(): yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6 | undefined;
    setPostgresqlConfig96(value?: yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6): HostConfig;

    hasPostgresqlConfig101c(): boolean;
    clearPostgresqlConfig101c(): void;
    getPostgresqlConfig101c(): yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C | undefined;
    setPostgresqlConfig101c(value?: yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C): HostConfig;

    hasPostgresqlConfig10(): boolean;
    clearPostgresqlConfig10(): void;
    getPostgresqlConfig10(): yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10 | undefined;
    setPostgresqlConfig10(value?: yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10): HostConfig;

    hasPostgresqlConfig11(): boolean;
    clearPostgresqlConfig11(): void;
    getPostgresqlConfig11(): yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11 | undefined;
    setPostgresqlConfig11(value?: yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11): HostConfig;

    hasPostgresqlConfig111c(): boolean;
    clearPostgresqlConfig111c(): void;
    getPostgresqlConfig111c(): yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C | undefined;
    setPostgresqlConfig111c(value?: yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C): HostConfig;

    hasPostgresqlConfig12(): boolean;
    clearPostgresqlConfig12(): void;
    getPostgresqlConfig12(): yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12 | undefined;
    setPostgresqlConfig12(value?: yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12): HostConfig;

    hasPostgresqlConfig121c(): boolean;
    clearPostgresqlConfig121c(): void;
    getPostgresqlConfig121c(): yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C | undefined;
    setPostgresqlConfig121c(value?: yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C): HostConfig;

    hasPostgresqlConfig13(): boolean;
    clearPostgresqlConfig13(): void;
    getPostgresqlConfig13(): yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13 | undefined;
    setPostgresqlConfig13(value?: yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13): HostConfig;

    getPostgresqlConfigCase(): HostConfig.PostgresqlConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostConfig.AsObject;
    static toObject(includeInstance: boolean, msg: HostConfig): HostConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostConfig;
    static deserializeBinaryFromReader(message: HostConfig, reader: jspb.BinaryReader): HostConfig;
}

export namespace HostConfig {
    export type AsObject = {
        postgresqlConfig96?: yandex_cloud_mdb_postgresql_v1_config_host9_6_pb.PostgresqlHostConfig9_6.AsObject,
        postgresqlConfig101c?: yandex_cloud_mdb_postgresql_v1_config_host10_1c_pb.PostgresqlHostConfig10_1C.AsObject,
        postgresqlConfig10?: yandex_cloud_mdb_postgresql_v1_config_host10_pb.PostgresqlHostConfig10.AsObject,
        postgresqlConfig11?: yandex_cloud_mdb_postgresql_v1_config_host11_pb.PostgresqlHostConfig11.AsObject,
        postgresqlConfig111c?: yandex_cloud_mdb_postgresql_v1_config_host11_1c_pb.PostgresqlHostConfig11_1C.AsObject,
        postgresqlConfig12?: yandex_cloud_mdb_postgresql_v1_config_host12_pb.PostgresqlHostConfig12.AsObject,
        postgresqlConfig121c?: yandex_cloud_mdb_postgresql_v1_config_host12_1c_pb.PostgresqlHostConfig12_1C.AsObject,
        postgresqlConfig13?: yandex_cloud_mdb_postgresql_v1_config_host13_pb.PostgresqlHostConfig13.AsObject,
    }

    export enum PostgresqlConfigCase {
        POSTGRESQL_CONFIG_NOT_SET = 0,
        POSTGRESQL_CONFIG_9_6 = 1,
        POSTGRESQL_CONFIG_10_1C = 4,
        POSTGRESQL_CONFIG_10 = 2,
        POSTGRESQL_CONFIG_11 = 3,
        POSTGRESQL_CONFIG_11_1C = 6,
        POSTGRESQL_CONFIG_12 = 5,
        POSTGRESQL_CONFIG_12_1C = 7,
        POSTGRESQL_CONFIG_13 = 8,
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
    POSTGRESQL = 1,
    POOLER = 2,
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

export class Access extends jspb.Message { 
    getDataLens(): boolean;
    setDataLens(value: boolean): Access;
    getWebSql(): boolean;
    setWebSql(value: boolean): Access;
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
        serverless: boolean,
    }
}

export class PerformanceDiagnostics extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): PerformanceDiagnostics;
    getSessionsSamplingInterval(): number;
    setSessionsSamplingInterval(value: number): PerformanceDiagnostics;
    getStatementsSamplingInterval(): number;
    setStatementsSamplingInterval(value: number): PerformanceDiagnostics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformanceDiagnostics.AsObject;
    static toObject(includeInstance: boolean, msg: PerformanceDiagnostics): PerformanceDiagnostics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformanceDiagnostics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformanceDiagnostics;
    static deserializeBinaryFromReader(message: PerformanceDiagnostics, reader: jspb.BinaryReader): PerformanceDiagnostics;
}

export namespace PerformanceDiagnostics {
    export type AsObject = {
        enabled: boolean,
        sessionsSamplingInterval: number,
        statementsSamplingInterval: number,
    }
}
