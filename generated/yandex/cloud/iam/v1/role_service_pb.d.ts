// package: yandex.cloud.iam.v1
// file: yandex/cloud/iam/v1/role_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_iam_v1_role_pb from "../../../../yandex/cloud/iam/v1/role_pb";

export class GetRoleRequest extends jspb.Message { 
    getRoleId(): string;
    setRoleId(value: string): GetRoleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRoleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRoleRequest): GetRoleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRoleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRoleRequest;
    static deserializeBinaryFromReader(message: GetRoleRequest, reader: jspb.BinaryReader): GetRoleRequest;
}

export namespace GetRoleRequest {
    export type AsObject = {
        roleId: string,
    }
}

export class ListRolesRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListRolesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRolesRequest;
    getFilter(): string;
    setFilter(value: string): ListRolesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
    static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListRolesResponse extends jspb.Message { 
    clearRolesList(): void;
    getRolesList(): Array<yandex_cloud_iam_v1_role_pb.Role>;
    setRolesList(value: Array<yandex_cloud_iam_v1_role_pb.Role>): ListRolesResponse;
    addRoles(value?: yandex_cloud_iam_v1_role_pb.Role, index?: number): yandex_cloud_iam_v1_role_pb.Role;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRolesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRolesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRolesResponse): ListRolesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRolesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRolesResponse;
    static deserializeBinaryFromReader(message: ListRolesResponse, reader: jspb.BinaryReader): ListRolesResponse;
}

export namespace ListRolesResponse {
    export type AsObject = {
        rolesList: Array<yandex_cloud_iam_v1_role_pb.Role.AsObject>,
        nextPageToken: string,
    }
}
