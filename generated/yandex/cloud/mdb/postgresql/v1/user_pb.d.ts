// package: yandex.cloud.mdb.postgresql.v1
// file: yandex/cloud/mdb/postgresql/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getClusterId(): string;
    setClusterId(value: string): User;
    clearPermissionsList(): void;
    getPermissionsList(): Array<Permission>;
    setPermissionsList(value: Array<Permission>): User;
    addPermissions(value?: Permission, index?: number): Permission;
    getConnLimit(): number;
    setConnLimit(value: number): User;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): UserSettings | undefined;
    setSettings(value?: UserSettings): User;

    hasLogin(): boolean;
    clearLogin(): void;
    getLogin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogin(value?: google_protobuf_wrappers_pb.BoolValue): User;
    clearGrantsList(): void;
    getGrantsList(): Array<string>;
    setGrantsList(value: Array<string>): User;
    addGrants(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        clusterId: string,
        permissionsList: Array<Permission.AsObject>,
        connLimit: number,
        settings?: UserSettings.AsObject,
        login?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        grantsList: Array<string>,
    }
}

export class Permission extends jspb.Message { 
    getDatabaseName(): string;
    setDatabaseName(value: string): Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permission.AsObject;
    static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permission;
    static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
    export type AsObject = {
        databaseName: string,
    }
}

export class UserSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): UserSpec;
    getPassword(): string;
    setPassword(value: string): UserSpec;
    clearPermissionsList(): void;
    getPermissionsList(): Array<Permission>;
    setPermissionsList(value: Array<Permission>): UserSpec;
    addPermissions(value?: Permission, index?: number): Permission;

    hasConnLimit(): boolean;
    clearConnLimit(): void;
    getConnLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setConnLimit(value?: google_protobuf_wrappers_pb.Int64Value): UserSpec;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): UserSettings | undefined;
    setSettings(value?: UserSettings): UserSpec;

    hasLogin(): boolean;
    clearLogin(): void;
    getLogin(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLogin(value?: google_protobuf_wrappers_pb.BoolValue): UserSpec;
    clearGrantsList(): void;
    getGrantsList(): Array<string>;
    setGrantsList(value: Array<string>): UserSpec;
    addGrants(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSpec.AsObject;
    static toObject(includeInstance: boolean, msg: UserSpec): UserSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSpec;
    static deserializeBinaryFromReader(message: UserSpec, reader: jspb.BinaryReader): UserSpec;
}

export namespace UserSpec {
    export type AsObject = {
        name: string,
        password: string,
        permissionsList: Array<Permission.AsObject>,
        connLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        settings?: UserSettings.AsObject,
        login?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        grantsList: Array<string>,
    }
}

export class UserSettings extends jspb.Message { 
    getDefaultTransactionIsolation(): UserSettings.TransactionIsolation;
    setDefaultTransactionIsolation(value: UserSettings.TransactionIsolation): UserSettings;

    hasLockTimeout(): boolean;
    clearLockTimeout(): void;
    getLockTimeout(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLockTimeout(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;

    hasLogMinDurationStatement(): boolean;
    clearLogMinDurationStatement(): void;
    getLogMinDurationStatement(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setLogMinDurationStatement(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getSynchronousCommit(): UserSettings.SynchronousCommit;
    setSynchronousCommit(value: UserSettings.SynchronousCommit): UserSettings;

    hasTempFileLimit(): boolean;
    clearTempFileLimit(): void;
    getTempFileLimit(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTempFileLimit(value?: google_protobuf_wrappers_pb.Int64Value): UserSettings;
    getLogStatement(): UserSettings.LogStatement;
    setLogStatement(value: UserSettings.LogStatement): UserSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserSettings.AsObject;
    static toObject(includeInstance: boolean, msg: UserSettings): UserSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserSettings;
    static deserializeBinaryFromReader(message: UserSettings, reader: jspb.BinaryReader): UserSettings;
}

export namespace UserSettings {
    export type AsObject = {
        defaultTransactionIsolation: UserSettings.TransactionIsolation,
        lockTimeout?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logMinDurationStatement?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        synchronousCommit: UserSettings.SynchronousCommit,
        tempFileLimit?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        logStatement: UserSettings.LogStatement,
    }

    export enum SynchronousCommit {
    SYNCHRONOUS_COMMIT_UNSPECIFIED = 0,
    SYNCHRONOUS_COMMIT_ON = 1,
    SYNCHRONOUS_COMMIT_OFF = 2,
    SYNCHRONOUS_COMMIT_LOCAL = 3,
    SYNCHRONOUS_COMMIT_REMOTE_WRITE = 4,
    SYNCHRONOUS_COMMIT_REMOTE_APPLY = 5,
    }

    export enum LogStatement {
    LOG_STATEMENT_UNSPECIFIED = 0,
    LOG_STATEMENT_NONE = 1,
    LOG_STATEMENT_DDL = 2,
    LOG_STATEMENT_MOD = 3,
    LOG_STATEMENT_ALL = 4,
    }

    export enum TransactionIsolation {
    TRANSACTION_ISOLATION_UNSPECIFIED = 0,
    TRANSACTION_ISOLATION_READ_UNCOMMITTED = 1,
    TRANSACTION_ISOLATION_READ_COMMITTED = 2,
    TRANSACTION_ISOLATION_REPEATABLE_READ = 3,
    TRANSACTION_ISOLATION_SERIALIZABLE = 4,
    }

}
