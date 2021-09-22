// package: yandex.cloud.mdb.sqlserver.v1
// file: yandex/cloud/mdb/sqlserver/v1/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_mdb_sqlserver_v1_user_pb from "../../../../../yandex/cloud/mdb/sqlserver/v1/user_pb";

export class GetUserRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GetUserRequest;
    getUserName(): string;
    setUserName(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class ListUsersRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): ListUsersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListUsersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
    static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
    export type AsObject = {
        clusterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<yandex_cloud_mdb_sqlserver_v1_user_pb.User>;
    setUsersList(value: Array<yandex_cloud_mdb_sqlserver_v1_user_pb.User>): ListUsersResponse;
    addUsers(value?: yandex_cloud_mdb_sqlserver_v1_user_pb.User, index?: number): yandex_cloud_mdb_sqlserver_v1_user_pb.User;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
    static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
    export type AsObject = {
        usersList: Array<yandex_cloud_mdb_sqlserver_v1_user_pb.User.AsObject>,
        nextPageToken: string,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateUserRequest;

    hasUserSpec(): boolean;
    clearUserSpec(): void;
    getUserSpec(): yandex_cloud_mdb_sqlserver_v1_user_pb.UserSpec | undefined;
    setUserSpec(value?: yandex_cloud_mdb_sqlserver_v1_user_pb.UserSpec): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        clusterId: string,
        userSpec?: yandex_cloud_mdb_sqlserver_v1_user_pb.UserSpec.AsObject,
    }
}

export class CreateUserMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): CreateUserMetadata;
    getUserName(): string;
    setUserName(value: string): CreateUserMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserMetadata): CreateUserMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserMetadata;
    static deserializeBinaryFromReader(message: CreateUserMetadata, reader: jspb.BinaryReader): CreateUserMetadata;
}

export namespace CreateUserMetadata {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateUserRequest;
    getUserName(): string;
    setUserName(value: string): UpdateUserRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserRequest;
    getPassword(): string;
    setPassword(value: string): UpdateUserRequest;
    clearPermissionsList(): void;
    getPermissionsList(): Array<yandex_cloud_mdb_sqlserver_v1_user_pb.Permission>;
    setPermissionsList(value: Array<yandex_cloud_mdb_sqlserver_v1_user_pb.Permission>): UpdateUserRequest;
    addPermissions(value?: yandex_cloud_mdb_sqlserver_v1_user_pb.Permission, index?: number): yandex_cloud_mdb_sqlserver_v1_user_pb.Permission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        clusterId: string,
        userName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        password: string,
        permissionsList: Array<yandex_cloud_mdb_sqlserver_v1_user_pb.Permission.AsObject>,
    }
}

export class UpdateUserMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): UpdateUserMetadata;
    getUserName(): string;
    setUserName(value: string): UpdateUserMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserMetadata): UpdateUserMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserMetadata;
    static deserializeBinaryFromReader(message: UpdateUserMetadata, reader: jspb.BinaryReader): UpdateUserMetadata;
}

export namespace UpdateUserMetadata {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteUserRequest;
    getUserName(): string;
    setUserName(value: string): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class DeleteUserMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): DeleteUserMetadata;
    getUserName(): string;
    setUserName(value: string): DeleteUserMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserMetadata): DeleteUserMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserMetadata;
    static deserializeBinaryFromReader(message: DeleteUserMetadata, reader: jspb.BinaryReader): DeleteUserMetadata;
}

export namespace DeleteUserMetadata {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class GrantUserPermissionRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GrantUserPermissionRequest;
    getUserName(): string;
    setUserName(value: string): GrantUserPermissionRequest;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): yandex_cloud_mdb_sqlserver_v1_user_pb.Permission | undefined;
    setPermission(value?: yandex_cloud_mdb_sqlserver_v1_user_pb.Permission): GrantUserPermissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrantUserPermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GrantUserPermissionRequest): GrantUserPermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrantUserPermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrantUserPermissionRequest;
    static deserializeBinaryFromReader(message: GrantUserPermissionRequest, reader: jspb.BinaryReader): GrantUserPermissionRequest;
}

export namespace GrantUserPermissionRequest {
    export type AsObject = {
        clusterId: string,
        userName: string,
        permission?: yandex_cloud_mdb_sqlserver_v1_user_pb.Permission.AsObject,
    }
}

export class GrantUserPermissionMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): GrantUserPermissionMetadata;
    getUserName(): string;
    setUserName(value: string): GrantUserPermissionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrantUserPermissionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: GrantUserPermissionMetadata): GrantUserPermissionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrantUserPermissionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrantUserPermissionMetadata;
    static deserializeBinaryFromReader(message: GrantUserPermissionMetadata, reader: jspb.BinaryReader): GrantUserPermissionMetadata;
}

export namespace GrantUserPermissionMetadata {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}

export class RevokeUserPermissionRequest extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RevokeUserPermissionRequest;
    getUserName(): string;
    setUserName(value: string): RevokeUserPermissionRequest;

    hasPermission(): boolean;
    clearPermission(): void;
    getPermission(): yandex_cloud_mdb_sqlserver_v1_user_pb.Permission | undefined;
    setPermission(value?: yandex_cloud_mdb_sqlserver_v1_user_pb.Permission): RevokeUserPermissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RevokeUserPermissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RevokeUserPermissionRequest): RevokeUserPermissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RevokeUserPermissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RevokeUserPermissionRequest;
    static deserializeBinaryFromReader(message: RevokeUserPermissionRequest, reader: jspb.BinaryReader): RevokeUserPermissionRequest;
}

export namespace RevokeUserPermissionRequest {
    export type AsObject = {
        clusterId: string,
        userName: string,
        permission?: yandex_cloud_mdb_sqlserver_v1_user_pb.Permission.AsObject,
    }
}

export class RevokeUserPermissionMetadata extends jspb.Message { 
    getClusterId(): string;
    setClusterId(value: string): RevokeUserPermissionMetadata;
    getUserName(): string;
    setUserName(value: string): RevokeUserPermissionMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RevokeUserPermissionMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RevokeUserPermissionMetadata): RevokeUserPermissionMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RevokeUserPermissionMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RevokeUserPermissionMetadata;
    static deserializeBinaryFromReader(message: RevokeUserPermissionMetadata, reader: jspb.BinaryReader): RevokeUserPermissionMetadata;
}

export namespace RevokeUserPermissionMetadata {
    export type AsObject = {
        clusterId: string,
        userName: string,
    }
}
