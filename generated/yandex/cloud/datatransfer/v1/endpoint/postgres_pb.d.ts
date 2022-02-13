// package: yandex.cloud.datatransfer.v1.endpoint
// file: yandex/cloud/datatransfer/v1/endpoint/postgres.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_datatransfer_v1_endpoint_common_pb from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common_pb";

export class PostgresObjectTransferSettings extends jspb.Message { 
    getSequence(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setSequence(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getSequenceOwnedBy(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setSequenceOwnedBy(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getTable(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setTable(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getPrimaryKey(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setPrimaryKey(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getFkConstraint(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setFkConstraint(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getDefaultValues(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setDefaultValues(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getConstraint(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setConstraint(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getIndex(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setIndex(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getView(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setView(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getFunction(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setFunction(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getTrigger(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setTrigger(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getType(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setType(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getRule(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setRule(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getCollation(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setCollation(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getPolicy(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setPolicy(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;
    getCast(): yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage;
    setCast(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage): PostgresObjectTransferSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresObjectTransferSettings.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresObjectTransferSettings): PostgresObjectTransferSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresObjectTransferSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresObjectTransferSettings;
    static deserializeBinaryFromReader(message: PostgresObjectTransferSettings, reader: jspb.BinaryReader): PostgresObjectTransferSettings;
}

export namespace PostgresObjectTransferSettings {
    export type AsObject = {
        sequence: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        sequenceOwnedBy: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        table: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        primaryKey: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        fkConstraint: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        defaultValues: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        constraint: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        index: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        view: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        pb_function: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        trigger: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        type: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        rule: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        collation: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        policy: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
        cast: yandex_cloud_datatransfer_v1_endpoint_common_pb.ObjectTransferStage,
    }
}

export class OnPremisePostgres extends jspb.Message { 
    clearHostsList(): void;
    getHostsList(): Array<string>;
    setHostsList(value: Array<string>): OnPremisePostgres;
    addHosts(value: string, index?: number): string;
    getPort(): number;
    setPort(value: number): OnPremisePostgres;

    hasTlsMode(): boolean;
    clearTlsMode(): void;
    getTlsMode(): yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode | undefined;
    setTlsMode(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode): OnPremisePostgres;
    getSubnetId(): string;
    setSubnetId(value: string): OnPremisePostgres;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnPremisePostgres.AsObject;
    static toObject(includeInstance: boolean, msg: OnPremisePostgres): OnPremisePostgres.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnPremisePostgres, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnPremisePostgres;
    static deserializeBinaryFromReader(message: OnPremisePostgres, reader: jspb.BinaryReader): OnPremisePostgres;
}

export namespace OnPremisePostgres {
    export type AsObject = {
        hostsList: Array<string>,
        port: number,
        tlsMode?: yandex_cloud_datatransfer_v1_endpoint_common_pb.TLSMode.AsObject,
        subnetId: string,
    }
}

export class PostgresConnection extends jspb.Message { 

    hasMdbClusterId(): boolean;
    clearMdbClusterId(): void;
    getMdbClusterId(): string;
    setMdbClusterId(value: string): PostgresConnection;

    hasOnPremise(): boolean;
    clearOnPremise(): void;
    getOnPremise(): OnPremisePostgres | undefined;
    setOnPremise(value?: OnPremisePostgres): PostgresConnection;

    getConnectionCase(): PostgresConnection.ConnectionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresConnection.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresConnection): PostgresConnection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresConnection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresConnection;
    static deserializeBinaryFromReader(message: PostgresConnection, reader: jspb.BinaryReader): PostgresConnection;
}

export namespace PostgresConnection {
    export type AsObject = {
        mdbClusterId: string,
        onPremise?: OnPremisePostgres.AsObject,
    }

    export enum ConnectionCase {
        CONNECTION_NOT_SET = 0,
        MDB_CLUSTER_ID = 1,
        ON_PREMISE = 2,
    }

}

export class PostgresSource extends jspb.Message { 

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): PostgresConnection | undefined;
    setConnection(value?: PostgresConnection): PostgresSource;
    getDatabase(): string;
    setDatabase(value: string): PostgresSource;
    getUser(): string;
    setUser(value: string): PostgresSource;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret | undefined;
    setPassword(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret): PostgresSource;
    clearIncludeTablesList(): void;
    getIncludeTablesList(): Array<string>;
    setIncludeTablesList(value: Array<string>): PostgresSource;
    addIncludeTables(value: string, index?: number): string;
    clearExcludeTablesList(): void;
    getExcludeTablesList(): Array<string>;
    setExcludeTablesList(value: Array<string>): PostgresSource;
    addExcludeTables(value: string, index?: number): string;
    getSlotByteLagLimit(): number;
    setSlotByteLagLimit(value: number): PostgresSource;
    getServiceSchema(): string;
    setServiceSchema(value: string): PostgresSource;

    hasObjectTransferSettings(): boolean;
    clearObjectTransferSettings(): void;
    getObjectTransferSettings(): PostgresObjectTransferSettings | undefined;
    setObjectTransferSettings(value?: PostgresObjectTransferSettings): PostgresSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresSource.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresSource): PostgresSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresSource;
    static deserializeBinaryFromReader(message: PostgresSource, reader: jspb.BinaryReader): PostgresSource;
}

export namespace PostgresSource {
    export type AsObject = {
        connection?: PostgresConnection.AsObject,
        database: string,
        user: string,
        password?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret.AsObject,
        includeTablesList: Array<string>,
        excludeTablesList: Array<string>,
        slotByteLagLimit: number,
        serviceSchema: string,
        objectTransferSettings?: PostgresObjectTransferSettings.AsObject,
    }
}

export class PostgresTarget extends jspb.Message { 

    hasConnection(): boolean;
    clearConnection(): void;
    getConnection(): PostgresConnection | undefined;
    setConnection(value?: PostgresConnection): PostgresTarget;
    getDatabase(): string;
    setDatabase(value: string): PostgresTarget;
    getUser(): string;
    setUser(value: string): PostgresTarget;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret | undefined;
    setPassword(value?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret): PostgresTarget;
    getCleanupPolicy(): yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy;
    setCleanupPolicy(value: yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy): PostgresTarget;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostgresTarget.AsObject;
    static toObject(includeInstance: boolean, msg: PostgresTarget): PostgresTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostgresTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostgresTarget;
    static deserializeBinaryFromReader(message: PostgresTarget, reader: jspb.BinaryReader): PostgresTarget;
}

export namespace PostgresTarget {
    export type AsObject = {
        connection?: PostgresConnection.AsObject,
        database: string,
        user: string,
        password?: yandex_cloud_datatransfer_v1_endpoint_common_pb.Secret.AsObject,
        cleanupPolicy: yandex_cloud_datatransfer_v1_endpoint_common_pb.CleanupPolicy,
    }
}
