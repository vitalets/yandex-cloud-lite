// package: yandex.cloud.mdb.sqlserver.v1
// file: yandex/cloud/mdb/sqlserver/v1/user.proto

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
    getRolesList(): Array<Permission.Role>;
    setRolesList(value: Array<Permission.Role>): Permission;
    addRoles(value: Permission.Role, index?: number): Permission.Role;

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
        rolesList: Array<Permission.Role>,
    }

    export enum Role {
    ROLE_UNSPECIFIED = 0,
    DB_OWNER = 1,
    DB_SECURITYADMIN = 2,
    DB_ACCESSADMIN = 3,
    DB_BACKUPOPERATOR = 4,
    DB_DDLADMIN = 5,
    DB_DATAWRITER = 6,
    DB_DATAREADER = 7,
    DB_DENYDATAWRITER = 8,
    DB_DENYDATAREADER = 9,
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
