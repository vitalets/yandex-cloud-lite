// package: yandex.cloud.mdb.mysql.v1
// file: yandex/cloud/mdb/mysql/v1/user.proto

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
    clearGlobalPermissionsList(): void;
    getGlobalPermissionsList(): Array<GlobalPermission>;
    setGlobalPermissionsList(value: Array<GlobalPermission>): User;
    addGlobalPermissions(value: GlobalPermission, index?: number): GlobalPermission;

    hasConnectionLimits(): boolean;
    clearConnectionLimits(): void;
    getConnectionLimits(): ConnectionLimits | undefined;
    setConnectionLimits(value?: ConnectionLimits): User;
    getAuthenticationPlugin(): AuthPlugin;
    setAuthenticationPlugin(value: AuthPlugin): User;

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
        globalPermissionsList: Array<GlobalPermission>,
        connectionLimits?: ConnectionLimits.AsObject,
        authenticationPlugin: AuthPlugin,
    }
}

export class Permission extends jspb.Message { 
    getDatabaseName(): string;
    setDatabaseName(value: string): Permission;
    clearRolesList(): void;
    getRolesList(): Array<Permission.Privilege>;
    setRolesList(value: Array<Permission.Privilege>): Permission;
    addRoles(value: Permission.Privilege, index?: number): Permission.Privilege;

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
        rolesList: Array<Permission.Privilege>,
    }

    export enum Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    ALL_PRIVILEGES = 1,
    ALTER = 2,
    ALTER_ROUTINE = 3,
    CREATE = 4,
    CREATE_ROUTINE = 5,
    CREATE_TEMPORARY_TABLES = 6,
    CREATE_VIEW = 7,
    DELETE = 8,
    DROP = 9,
    EVENT = 10,
    EXECUTE = 11,
    INDEX = 12,
    INSERT = 13,
    LOCK_TABLES = 14,
    SELECT = 15,
    SHOW_VIEW = 16,
    TRIGGER = 17,
    UPDATE = 18,
    REFERENCES = 19,
    }

}

export class ConnectionLimits extends jspb.Message { 

    hasMaxQuestionsPerHour(): boolean;
    clearMaxQuestionsPerHour(): void;
    getMaxQuestionsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxQuestionsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionLimits;

    hasMaxUpdatesPerHour(): boolean;
    clearMaxUpdatesPerHour(): void;
    getMaxUpdatesPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUpdatesPerHour(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionLimits;

    hasMaxConnectionsPerHour(): boolean;
    clearMaxConnectionsPerHour(): void;
    getMaxConnectionsPerHour(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnectionsPerHour(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionLimits;

    hasMaxUserConnections(): boolean;
    clearMaxUserConnections(): void;
    getMaxUserConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxUserConnections(value?: google_protobuf_wrappers_pb.Int64Value): ConnectionLimits;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionLimits.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionLimits): ConnectionLimits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionLimits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionLimits;
    static deserializeBinaryFromReader(message: ConnectionLimits, reader: jspb.BinaryReader): ConnectionLimits;
}

export namespace ConnectionLimits {
    export type AsObject = {
        maxQuestionsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUpdatesPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxConnectionsPerHour?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxUserConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
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
    clearGlobalPermissionsList(): void;
    getGlobalPermissionsList(): Array<GlobalPermission>;
    setGlobalPermissionsList(value: Array<GlobalPermission>): UserSpec;
    addGlobalPermissions(value: GlobalPermission, index?: number): GlobalPermission;

    hasConnectionLimits(): boolean;
    clearConnectionLimits(): void;
    getConnectionLimits(): ConnectionLimits | undefined;
    setConnectionLimits(value?: ConnectionLimits): UserSpec;
    getAuthenticationPlugin(): AuthPlugin;
    setAuthenticationPlugin(value: AuthPlugin): UserSpec;

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
        globalPermissionsList: Array<GlobalPermission>,
        connectionLimits?: ConnectionLimits.AsObject,
        authenticationPlugin: AuthPlugin,
    }
}

export enum GlobalPermission {
    GLOBAL_PERMISSION_UNSPECIFIED = 0,
    REPLICATION_CLIENT = 1,
    REPLICATION_SLAVE = 2,
    PROCESS = 3,
}

export enum AuthPlugin {
    AUTH_PLUGIN_UNSPECIFIED = 0,
    MYSQL_NATIVE_PASSWORD = 1,
    CACHING_SHA2_PASSWORD = 2,
    SHA256_PASSWORD = 3,
}
