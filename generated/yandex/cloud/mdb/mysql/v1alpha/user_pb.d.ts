// package: yandex.cloud.mdb.mysql.v1alpha
// file: yandex/cloud/mdb/mysql/v1alpha/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
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
    }
}
