// package: yandex.cloud.mdb.mongodb.v1
// file: yandex/cloud/mdb/mongodb/v1/cluster.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_type_timeofday_pb from "../../../../../google/type/timeofday_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb3_6_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_0_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_2_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb4_4_enterprise_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_pb";
import * as yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/config/mongodb5_0_enterprise_pb";
import * as yandex_cloud_mdb_mongodb_v1_maintenance_pb from "../../../../../yandex/cloud/mdb/mongodb/v1/maintenance_pb";

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
    getSharded(): boolean;
    setSharded(value: boolean): Cluster;

    hasMaintenanceWindow(): boolean;
    clearMaintenanceWindow(): void;
    getMaintenanceWindow(): yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow | undefined;
    setMaintenanceWindow(value?: yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow): Cluster;

    hasPlannedOperation(): boolean;
    clearPlannedOperation(): void;
    getPlannedOperation(): yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation | undefined;
    setPlannedOperation(value?: yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation): Cluster;
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
        sharded: boolean,
        maintenanceWindow?: yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceWindow.AsObject,
        plannedOperation?: yandex_cloud_mdb_mongodb_v1_maintenance_pb.MaintenanceOperation.AsObject,
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
    getFeatureCompatibilityVersion(): string;
    setFeatureCompatibilityVersion(value: string): ClusterConfig;

    hasMongodb36(): boolean;
    clearMongodb36(): void;
    getMongodb36(): Mongodb3_6 | undefined;
    setMongodb36(value?: Mongodb3_6): ClusterConfig;

    hasMongodb40(): boolean;
    clearMongodb40(): void;
    getMongodb40(): Mongodb4_0 | undefined;
    setMongodb40(value?: Mongodb4_0): ClusterConfig;

    hasMongodb42(): boolean;
    clearMongodb42(): void;
    getMongodb42(): Mongodb4_2 | undefined;
    setMongodb42(value?: Mongodb4_2): ClusterConfig;

    hasMongodb44(): boolean;
    clearMongodb44(): void;
    getMongodb44(): Mongodb4_4 | undefined;
    setMongodb44(value?: Mongodb4_4): ClusterConfig;

    hasMongodb50(): boolean;
    clearMongodb50(): void;
    getMongodb50(): Mongodb5_0 | undefined;
    setMongodb50(value?: Mongodb5_0): ClusterConfig;

    hasMongodb44Enterprise(): boolean;
    clearMongodb44Enterprise(): void;
    getMongodb44Enterprise(): Mongodb4_4_enterprise | undefined;
    setMongodb44Enterprise(value?: Mongodb4_4_enterprise): ClusterConfig;

    hasMongodb50Enterprise(): boolean;
    clearMongodb50Enterprise(): void;
    getMongodb50Enterprise(): Mongodb5_0_enterprise | undefined;
    setMongodb50Enterprise(value?: Mongodb5_0_enterprise): ClusterConfig;

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

    getMongodbCase(): ClusterConfig.MongodbCase;

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
        featureCompatibilityVersion: string,
        mongodb36?: Mongodb3_6.AsObject,
        mongodb40?: Mongodb4_0.AsObject,
        mongodb42?: Mongodb4_2.AsObject,
        mongodb44?: Mongodb4_4.AsObject,
        mongodb50?: Mongodb5_0.AsObject,
        mongodb44Enterprise?: Mongodb4_4_enterprise.AsObject,
        mongodb50Enterprise?: Mongodb5_0_enterprise.AsObject,
        backupWindowStart?: google_type_timeofday_pb.TimeOfDay.AsObject,
        backupRetainPeriodDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        access?: Access.AsObject,
    }

    export enum MongodbCase {
        MONGODB_NOT_SET = 0,
        MONGODB_3_6 = 2,
        MONGODB_4_0 = 4,
        MONGODB_4_2 = 7,
        MONGODB_4_4 = 8,
        MONGODB_5_0 = 10,
        MONGODB_4_4_ENTERPRISE = 11,
        MONGODB_5_0_ENTERPRISE = 12,
    }

}

export class Mongodb3_6 extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb3_6.Mongod | undefined;
    setMongod(value?: Mongodb3_6.Mongod): Mongodb3_6;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb3_6.MongoCfg | undefined;
    setMongocfg(value?: Mongodb3_6.MongoCfg): Mongodb3_6;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb3_6.Mongos | undefined;
    setMongos(value?: Mongodb3_6.Mongos): Mongodb3_6;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb3_6.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb3_6.MongoInfra): Mongodb3_6;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb3_6.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb3_6): Mongodb3_6.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb3_6, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb3_6;
    static deserializeBinaryFromReader(message: Mongodb3_6, reader: jspb.BinaryReader): Mongodb3_6;
}

export namespace Mongodb3_6 {
    export type AsObject = {
        mongod?: Mongodb3_6.Mongod.AsObject,
        mongocfg?: Mongodb3_6.MongoCfg.AsObject,
        mongos?: Mongodb3_6.Mongos.AsObject,
        mongoinfra?: Mongodb3_6.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongodConfigSet3_6.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6 | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6 | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongosConfigSet3_6.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb3_6_pb.MongoCfgConfigSet3_6.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb4_0 extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb4_0.Mongod | undefined;
    setMongod(value?: Mongodb4_0.Mongod): Mongodb4_0;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb4_0.MongoCfg | undefined;
    setMongocfg(value?: Mongodb4_0.MongoCfg): Mongodb4_0;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb4_0.Mongos | undefined;
    setMongos(value?: Mongodb4_0.Mongos): Mongodb4_0;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb4_0.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb4_0.MongoInfra): Mongodb4_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb4_0.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb4_0): Mongodb4_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb4_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb4_0;
    static deserializeBinaryFromReader(message: Mongodb4_0, reader: jspb.BinaryReader): Mongodb4_0;
}

export namespace Mongodb4_0 {
    export type AsObject = {
        mongod?: Mongodb4_0.Mongod.AsObject,
        mongocfg?: Mongodb4_0.MongoCfg.AsObject,
        mongos?: Mongodb4_0.Mongos.AsObject,
        mongoinfra?: Mongodb4_0.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongodConfigSet4_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0 | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0 | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongosConfigSet4_0.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_0_pb.MongoCfgConfigSet4_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb4_2 extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb4_2.Mongod | undefined;
    setMongod(value?: Mongodb4_2.Mongod): Mongodb4_2;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb4_2.MongoCfg | undefined;
    setMongocfg(value?: Mongodb4_2.MongoCfg): Mongodb4_2;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb4_2.Mongos | undefined;
    setMongos(value?: Mongodb4_2.Mongos): Mongodb4_2;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb4_2.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb4_2.MongoInfra): Mongodb4_2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb4_2.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb4_2): Mongodb4_2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb4_2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb4_2;
    static deserializeBinaryFromReader(message: Mongodb4_2, reader: jspb.BinaryReader): Mongodb4_2;
}

export namespace Mongodb4_2 {
    export type AsObject = {
        mongod?: Mongodb4_2.Mongod.AsObject,
        mongocfg?: Mongodb4_2.MongoCfg.AsObject,
        mongos?: Mongodb4_2.Mongos.AsObject,
        mongoinfra?: Mongodb4_2.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongodConfigSet4_2.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2 | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2 | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongosConfigSet4_2.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_2_pb.MongoCfgConfigSet4_2.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb4_4 extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb4_4.Mongod | undefined;
    setMongod(value?: Mongodb4_4.Mongod): Mongodb4_4;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb4_4.MongoCfg | undefined;
    setMongocfg(value?: Mongodb4_4.MongoCfg): Mongodb4_4;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb4_4.Mongos | undefined;
    setMongos(value?: Mongodb4_4.Mongos): Mongodb4_4;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb4_4.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb4_4.MongoInfra): Mongodb4_4;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb4_4.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb4_4): Mongodb4_4.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb4_4, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb4_4;
    static deserializeBinaryFromReader(message: Mongodb4_4, reader: jspb.BinaryReader): Mongodb4_4;
}

export namespace Mongodb4_4 {
    export type AsObject = {
        mongod?: Mongodb4_4.Mongod.AsObject,
        mongocfg?: Mongodb4_4.MongoCfg.AsObject,
        mongos?: Mongodb4_4.Mongos.AsObject,
        mongoinfra?: Mongodb4_4.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongodConfigSet4_4.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4 | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4 | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongosConfigSet4_4.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_pb.MongoCfgConfigSet4_4.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb4_4_enterprise extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb4_4_enterprise.Mongod | undefined;
    setMongod(value?: Mongodb4_4_enterprise.Mongod): Mongodb4_4_enterprise;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb4_4_enterprise.MongoCfg | undefined;
    setMongocfg(value?: Mongodb4_4_enterprise.MongoCfg): Mongodb4_4_enterprise;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb4_4_enterprise.Mongos | undefined;
    setMongos(value?: Mongodb4_4_enterprise.Mongos): Mongodb4_4_enterprise;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb4_4_enterprise.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb4_4_enterprise.MongoInfra): Mongodb4_4_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb4_4_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb4_4_enterprise): Mongodb4_4_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb4_4_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb4_4_enterprise;
    static deserializeBinaryFromReader(message: Mongodb4_4_enterprise, reader: jspb.BinaryReader): Mongodb4_4_enterprise;
}

export namespace Mongodb4_4_enterprise {
    export type AsObject = {
        mongod?: Mongodb4_4_enterprise.Mongod.AsObject,
        mongocfg?: Mongodb4_4_enterprise.MongoCfg.AsObject,
        mongos?: Mongodb4_4_enterprise.Mongos.AsObject,
        mongoinfra?: Mongodb4_4_enterprise.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongodConfigSet4_4_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongosConfigSet4_4_enterprise.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb4_4_enterprise_pb.MongoCfgConfigSet4_4_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb5_0 extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb5_0.Mongod | undefined;
    setMongod(value?: Mongodb5_0.Mongod): Mongodb5_0;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb5_0.MongoCfg | undefined;
    setMongocfg(value?: Mongodb5_0.MongoCfg): Mongodb5_0;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb5_0.Mongos | undefined;
    setMongos(value?: Mongodb5_0.Mongos): Mongodb5_0;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb5_0.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb5_0.MongoInfra): Mongodb5_0;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb5_0.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb5_0): Mongodb5_0.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb5_0, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb5_0;
    static deserializeBinaryFromReader(message: Mongodb5_0, reader: jspb.BinaryReader): Mongodb5_0;
}

export namespace Mongodb5_0 {
    export type AsObject = {
        mongod?: Mongodb5_0.Mongod.AsObject,
        mongocfg?: Mongodb5_0.MongoCfg.AsObject,
        mongos?: Mongodb5_0.Mongos.AsObject,
        mongoinfra?: Mongodb5_0.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongodConfigSet5_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0 | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0 | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0 | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongosConfigSet5_0.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_pb.MongoCfgConfigSet5_0.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Mongodb5_0_enterprise extends jspb.Message { 

    hasMongod(): boolean;
    clearMongod(): void;
    getMongod(): Mongodb5_0_enterprise.Mongod | undefined;
    setMongod(value?: Mongodb5_0_enterprise.Mongod): Mongodb5_0_enterprise;

    hasMongocfg(): boolean;
    clearMongocfg(): void;
    getMongocfg(): Mongodb5_0_enterprise.MongoCfg | undefined;
    setMongocfg(value?: Mongodb5_0_enterprise.MongoCfg): Mongodb5_0_enterprise;

    hasMongos(): boolean;
    clearMongos(): void;
    getMongos(): Mongodb5_0_enterprise.Mongos | undefined;
    setMongos(value?: Mongodb5_0_enterprise.Mongos): Mongodb5_0_enterprise;

    hasMongoinfra(): boolean;
    clearMongoinfra(): void;
    getMongoinfra(): Mongodb5_0_enterprise.MongoInfra | undefined;
    setMongoinfra(value?: Mongodb5_0_enterprise.MongoInfra): Mongodb5_0_enterprise;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mongodb5_0_enterprise.AsObject;
    static toObject(includeInstance: boolean, msg: Mongodb5_0_enterprise): Mongodb5_0_enterprise.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mongodb5_0_enterprise, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mongodb5_0_enterprise;
    static deserializeBinaryFromReader(message: Mongodb5_0_enterprise, reader: jspb.BinaryReader): Mongodb5_0_enterprise;
}

export namespace Mongodb5_0_enterprise {
    export type AsObject = {
        mongod?: Mongodb5_0_enterprise.Mongod.AsObject,
        mongocfg?: Mongodb5_0_enterprise.MongoCfg.AsObject,
        mongos?: Mongodb5_0_enterprise.Mongos.AsObject,
        mongoinfra?: Mongodb5_0_enterprise.MongoInfra.AsObject,
    }


    export class Mongod extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise): Mongod;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongod;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongod.AsObject;
        static toObject(includeInstance: boolean, msg: Mongod): Mongod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongod;
        static deserializeBinaryFromReader(message: Mongod, reader: jspb.BinaryReader): Mongod;
    }

    export namespace Mongod {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongodConfigSet5_0_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoCfg extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise): MongoCfg;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoCfg;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoCfg.AsObject;
        static toObject(includeInstance: boolean, msg: MongoCfg): MongoCfg.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoCfg, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoCfg;
        static deserializeBinaryFromReader(message: MongoCfg, reader: jspb.BinaryReader): MongoCfg;
    }

    export namespace MongoCfg {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class Mongos extends jspb.Message { 

        hasConfig(): boolean;
        clearConfig(): void;
        getConfig(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise | undefined;
        setConfig(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise): Mongos;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): Mongos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Mongos.AsObject;
        static toObject(includeInstance: boolean, msg: Mongos): Mongos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Mongos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Mongos;
        static deserializeBinaryFromReader(message: Mongos, reader: jspb.BinaryReader): Mongos;
    }

    export namespace Mongos {
        export type AsObject = {
            config?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

    export class MongoInfra extends jspb.Message { 

        hasConfigMongos(): boolean;
        clearConfigMongos(): void;
        getConfigMongos(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise | undefined;
        setConfigMongos(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise): MongoInfra;

        hasConfigMongocfg(): boolean;
        clearConfigMongocfg(): void;
        getConfigMongocfg(): yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise | undefined;
        setConfigMongocfg(value?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise): MongoInfra;

        hasResources(): boolean;
        clearResources(): void;
        getResources(): Resources | undefined;
        setResources(value?: Resources): MongoInfra;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MongoInfra.AsObject;
        static toObject(includeInstance: boolean, msg: MongoInfra): MongoInfra.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MongoInfra, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MongoInfra;
        static deserializeBinaryFromReader(message: MongoInfra, reader: jspb.BinaryReader): MongoInfra;
    }

    export namespace MongoInfra {
        export type AsObject = {
            configMongos?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongosConfigSet5_0_enterprise.AsObject,
            configMongocfg?: yandex_cloud_mdb_mongodb_v1_config_mongodb5_0_enterprise_pb.MongoCfgConfigSet5_0_enterprise.AsObject,
            resources?: Resources.AsObject,
        }
    }

}

export class Shard extends jspb.Message { 
    getName(): string;
    setName(value: string): Shard;
    getClusterId(): string;
    setClusterId(value: string): Shard;

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
    getShardName(): string;
    setShardName(value: string): Host;
    getType(): Host.Type;
    setType(value: Host.Type): Host;

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
        shardName: string,
        type: Host.Type,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
    MONGOINFRA = 4,
    }

    export enum Role {
    ROLE_UNKNOWN = 0,
    PRIMARY = 1,
    SECONDARY = 2,
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
    MONGOD = 1,
    MONGOS = 2,
    MONGOCFG = 3,
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
    }
}
