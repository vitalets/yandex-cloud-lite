// package: yandex.cloud.organizationmanager.v1
// file: yandex/cloud/organizationmanager/v1/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_oauth_claims_pb from "../../../../yandex/cloud/oauth/claims_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class ListMembersRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): ListMembersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListMembersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListMembersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMembersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMembersRequest): ListMembersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMembersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMembersRequest;
    static deserializeBinaryFromReader(message: ListMembersRequest, reader: jspb.BinaryReader): ListMembersRequest;
}

export namespace ListMembersRequest {
    export type AsObject = {
        organizationId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListMembersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<ListMembersResponse.OrganizationUser>;
    setUsersList(value: Array<ListMembersResponse.OrganizationUser>): ListMembersResponse;
    addUsers(value?: ListMembersResponse.OrganizationUser, index?: number): ListMembersResponse.OrganizationUser;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListMembersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMembersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMembersResponse): ListMembersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMembersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMembersResponse;
    static deserializeBinaryFromReader(message: ListMembersResponse, reader: jspb.BinaryReader): ListMembersResponse;
}

export namespace ListMembersResponse {
    export type AsObject = {
        usersList: Array<ListMembersResponse.OrganizationUser.AsObject>,
        nextPageToken: string,
    }


    export class OrganizationUser extends jspb.Message { 

        hasSubjectClaims(): boolean;
        clearSubjectClaims(): void;
        getSubjectClaims(): yandex_cloud_oauth_claims_pb.SubjectClaims | undefined;
        setSubjectClaims(value?: yandex_cloud_oauth_claims_pb.SubjectClaims): OrganizationUser;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrganizationUser.AsObject;
        static toObject(includeInstance: boolean, msg: OrganizationUser): OrganizationUser.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrganizationUser, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrganizationUser;
        static deserializeBinaryFromReader(message: OrganizationUser, reader: jspb.BinaryReader): OrganizationUser;
    }

    export namespace OrganizationUser {
        export type AsObject = {
            subjectClaims?: yandex_cloud_oauth_claims_pb.SubjectClaims.AsObject,
        }
    }

}

export class DeleteMembershipRequest extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): DeleteMembershipRequest;
    getSubjectId(): string;
    setSubjectId(value: string): DeleteMembershipRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMembershipRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMembershipRequest): DeleteMembershipRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMembershipRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMembershipRequest;
    static deserializeBinaryFromReader(message: DeleteMembershipRequest, reader: jspb.BinaryReader): DeleteMembershipRequest;
}

export namespace DeleteMembershipRequest {
    export type AsObject = {
        organizationId: string,
        subjectId: string,
    }
}

export class DeleteMembershipMetadata extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): DeleteMembershipMetadata;
    getSubjectId(): string;
    setSubjectId(value: string): DeleteMembershipMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMembershipMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMembershipMetadata): DeleteMembershipMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMembershipMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMembershipMetadata;
    static deserializeBinaryFromReader(message: DeleteMembershipMetadata, reader: jspb.BinaryReader): DeleteMembershipMetadata;
}

export namespace DeleteMembershipMetadata {
    export type AsObject = {
        organizationId: string,
        subjectId: string,
    }
}

export class DeleteMembershipResponse extends jspb.Message { 
    getOrganizationId(): string;
    setOrganizationId(value: string): DeleteMembershipResponse;
    getSubjectId(): string;
    setSubjectId(value: string): DeleteMembershipResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMembershipResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMembershipResponse): DeleteMembershipResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMembershipResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMembershipResponse;
    static deserializeBinaryFromReader(message: DeleteMembershipResponse, reader: jspb.BinaryReader): DeleteMembershipResponse;
}

export namespace DeleteMembershipResponse {
    export type AsObject = {
        organizationId: string,
        subjectId: string,
    }
}
