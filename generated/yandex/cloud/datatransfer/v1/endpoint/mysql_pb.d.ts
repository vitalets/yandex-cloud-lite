// package: yandex.cloud.datatransfer.v1.endpoint
// file: yandex/cloud/datatransfer/v1/endpoint/mysql.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_datatransfer_v1_endpoint_common_pb from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common_pb";

export class OnPremiseMysql extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<string>;
    setHostsList(value: Array<string>): OnPremiseMysql;
    addHosts(value: string, index?: number): string;
    getPort(): number;
    setPort(value: number): OnPremiseMysql;

    hasTlsMode(): boolean;
    clearTlsMode(): void;
    getTlsMode(): yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode | undefined;
    setTlsMode(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode): OnPremiseMysql;
    getSubnetId(): string;
    setSubnetId(value: string): OnPremiseMysql;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnPremiseMysql.AsObject;
    static toObject(includeInstance: boolean, msg: OnPremiseMysql): OnPremiseMysql.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnPremiseMysql, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnPremiseMysql;
    static deserializeBinaryFromReader(message: OnPremiseMysql, reader: jspb.BinaryReader): OnPremiseMysql;
}

export namespace OnPremiseMysql {
    export type AsObject = {
        hostsList: Array<string>,
        port: number,
        tlsMode?: yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode.AsObject,
        subnetId: string,
    }
}

export class MysqlConnection extends jspb.Message { 

    hasMdbClusterId(): boolean;
    clearMdbClusterId(): void;
    getMdbClusterId(): string;
    setMdbClusterId(value: string): MysqlConnection;

    hasOnPremise(): boolean;
    clearOnPremise(): void;
    getOnPremise(): OnPremiseMysql | undefined;
    setOnPremise(value?: OnPremiseMysql): MysqlConnection;

    getConnectionCase(): MysqlConnection.ConnectionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConnection.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConnection): MysqlConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConnection;
    static deserializeBinaryFromReader(message: MysqlConnection, reader: jspb.BinaryReader): MysqlConnection;
}

export namespace MysqlConnection {
    export type AsObject = {
        mdbClusterId: string,
        onPremise?: OnPremiseMysql.AsObject,
    }

    export enum ConnectionCase {
        CONNECTION_NOT_SET = 0,
        MDB_CLUSTER_ID = 1,
        ON_PREMISE = 2,
    }

}

export class MysqlObjectTransferSettings extends jspb.Message { 
    getView(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setView(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): MysqlObjectTransferSettings;
    getRoutine(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setRoutine(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): MysqlObjectTransferSettings;
    getTrigger(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setTrigger(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): MysqlObjectTransferSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlObjectTransferSettings.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlObjectTransferSettings): MysqlObjectTransferSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlObjectTransferSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlObjectTransferSettings;
    static deserializeBinaryFromReader(message: MysqlObjectTransferSettings, reader: jspb.BinaryReader): MysqlObjectTransferSettings;
}

export namespace MysqlObjectTransferSettings {
    export type AsObject = {
        view: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        routine: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        trigger: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
    }
}

export class MysqlSource extends jspb.Message { 

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): MysqlConnection | undefined;
    setConnection(value?: MysqlConnection): MysqlSource;
    getDatabase(): string;
    setDatabase(value: string): MysqlSource;
    getUser(): string;
    setUser(value: string): MysqlSource;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret | undefined;
    setPassword(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret): MysqlSource;
    clearIncludeTablesRegexList(): void;
    getIncludeTablesRegexList(): Array<string>;
    setIncludeTablesRegexList(value: Array<string>): MysqlSource;
    addIncludeTablesRegex(value: string, index?: number): string;
    clearExcludeTablesRegexList(): void;
    getExcludeTablesRegexList(): Array<string>;
    setExcludeTablesRegexList(value: Array<string>): MysqlSource;
    addExcludeTablesRegex(value: string, index?: number): string;
    getTimezone(): string;
    setTimezone(value: string): MysqlSource;

    hasObjectTransferSettings(): boolean;
    clearObjectTransferSettings(): void;
    getObjectTransferSettings(): MysqlObjectTransferSettings | undefined;
    setObjectTransferSettings(value?: MysqlObjectTransferSettings): MysqlSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlSource.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlSource): MysqlSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlSource;
    static deserializeBinaryFromReader(message: MysqlSource, reader: jspb.BinaryReader): MysqlSource;
}

export namespace MysqlSource {
    export type AsObject = {
        connection?: MysqlConnection.AsObject,
        database: string,
        user: string,
        password?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret.AsObject,
        includeTablesRegexList: Array<string>,
        excludeTablesRegexList: Array<string>,
        timezone: string,
        objectTransferSettings?: MysqlObjectTransferSettings.AsObject,
    }
}

export class MysqlTarget extends jspb.Message { 

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): MysqlConnection | undefined;
    setConnection(value?: MysqlConnection): MysqlTarget;
    getDatabase(): string;
    setDatabase(value: string): MysqlTarget;
    getUser(): string;
    setUser(value: string): MysqlTarget;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret | undefined;
    setPassword(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret): MysqlTarget;
    getSqlMode(): string;
    setSqlMode(value: string): MysqlTarget;
    getSkipConstraintChecks(): boolean;
    setSkipConstraintChecks(value: boolean): MysqlTarget;
    getTimezone(): string;
    setTimezone(value: string): MysqlTarget;
    getCleanupPolicy(): yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy;
    setCleanupPolicy(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy): MysqlTarget;
    getServiceDatabase(): string;
    setServiceDatabase(value: string): MysqlTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlTarget.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlTarget): MysqlTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlTarget;
    static deserializeBinaryFromReader(message: MysqlTarget, reader: jspb.BinaryReader): MysqlTarget;
}

export namespace MysqlTarget {
    export type AsObject = {
        connection?: MysqlConnection.AsObject,
        database: string,
        user: string,
        password?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret.AsObject,
        sqlMode: string,
        skipConstraintChecks: boolean,
        timezone: string,
        cleanupPolicy: yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy,
        serviceDatabase: string,
    }
}
