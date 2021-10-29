// package: yandex.cloud.mdb.greenplum.v1
// file: yandex/cloud/mdb/greenplum/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_greenplum_v1_config_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/config_pb";
import * as yandex_cloud_mdb_greenplum_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance_pb";

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

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): GreenplumConfig | undefined;
    setConfig(value?: GreenplumConfig): Cluster;
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

    hasMasterConfig(): boolean;
    clearMasterConfig(): void;
    getMasterConfig(): yandex_cloud_mdb_greenplum_v1_config_pb.MasterSubclusterConfig | undefined;
    setMasterConfig(value?: yandex_cloud_mdb_greenplum_v1_config_pb.MasterSubclusterConfig): Cluster;

    hasSegmentConfig(): boolean;
    clearSegmentConfig(): void;
    getSegmentConfig(): yandex_cloud_mdb_greenplum_v1_config_pb.SegmentSubclusterConfig | undefined;
    setSegmentConfig(value?: yandex_cloud_mdb_greenplum_v1_config_pb.SegmentSubclusterConfig): Cluster;
    getMasterHostCount(): number;
    setMasterHostCount(value: number): Cluster;
    getSegmentHostCount(): number;
    setSegmentHostCount(value: number): Cluster;
    getSegmentInHost(): number;
    setSegmentInHost(value: number): Cluster;
    getNetworkId(): string;
    setNetworkId(value: string): Cluster;
    getHealth(): Cluster.Health;
    setHealth(value: Cluster.Health): Cluster;
    getStatus(): Cluster.Status;
    setStatus(value: Cluster.Status): Cluster;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow): Cluster;

    hasPlannedOperation(): boolean;
    clearPlannedOperation(): void;
    getPlannedOperation(): yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceOperation | undefined;
    setPlannedOperation(value?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceOperation): Cluster;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): Cluster;
    addSecurityGroupIds(value: string, index?: number): string;
    getUserName(): string;
    setUserName(value: string): Cluster;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): Cluster;
    clearHostGroupIdsList(): void;
    getHostGroupIdsList(): Array<string>;
    setHostGroupIdsList(value: Array<string>): Cluster;
    addHostGroupIds(value: string, index?: number): string;

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
        config?: GreenplumConfig.AsObject,
        description: string,

        labelsMap: Array<[string, string]>,
        environment: Cluster.Environment,
        monitoringList: Array<Monitoring.AsObject>,
        masterConfig?: yandex_cloud_mdb_greenplum_v1_config_pb.MasterSubclusterConfig.AsObject,
        segmentConfig?: yandex_cloud_mdb_greenplum_v1_config_pb.SegmentSubclusterConfig.AsObject,
        masterHostCount: number,
        segmentHostCount: number,
        segmentInHost: number,
        networkId: string,
        health: Cluster.Health,
        status: Cluster.Status,
        maintenanceWindow?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceWindow.AsObject,
        plannedOperation?: yandex_cloud_mdb_greenplum_v1_maintenance_pb.MaintenanceOperation.AsObject,
        securityGroupIdsList: Array<string>,
        userName: string,
        deletionProtection: boolean,
        hostGroupIdsList: Array<string>,
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
    UNBALANCED = 4,
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

export class GreenplumConfig extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): GreenplumConfig;

    hasBackupWindowStart(): boolean;
    clearBackupWindowStart(): void;
    getBackupWindowStart(): google_type_timeofday_pb.TimeOfDay | undefined;
    setBackupWindowStart(value?: google_type_timeofday_pb.TimeOfDay): GreenplumConfig;

    hasAccess(): boolean;
    clearAccess(): void;
    getAccess(): Access | undefined;
    setAccess(value?: Access): GreenplumConfig;
    getZoneId(): string;
    setZoneId(value: string): GreenplumConfig;
    getSubnetId(): string;
    setSubnetId(value: string): GreenplumConfig;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): GreenplumConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreenplumConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GreenplumConfig): GreenplumConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreenplumConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreenplumConfig;
    static deserializeBinaryFromReader(message: GreenplumConfig, reader: jspb.BinaryReader): GreenplumConfig;
}

export namespace GreenplumConfig {
    export type AsObject = {
        version: string,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        access?: Access.AsObject,
        zoneId: string,
        subnetId: string,
        assignPublicIp: boolean,
    }
}

export class Access extends jspb.Message { 
    getDataLens(): boolean;
    setDataLens(value: boolean): Access;
    getWebSql(): boolean;
    setWebSql(value: boolean): Access;

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
    }
}
