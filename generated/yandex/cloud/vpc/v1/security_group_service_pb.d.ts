// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/security_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_security_group_pb from "../../../../yandex/cloud/vpc/v1/security_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetSecurityGroupRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): GetSecurityGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSecurityGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSecurityGroupRequest): GetSecurityGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSecurityGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSecurityGroupRequest;
    static deserializeBinaryFromReader(message: GetSecurityGroupRequest, reader: jspb.BinaryReader): GetSecurityGroupRequest;
}

export namespace GetSecurityGroupRequest {
    export type AsObject = {
        securityGroupId: string,
    }
}

export class ListSecurityGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListSecurityGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSecurityGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSecurityGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListSecurityGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecurityGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecurityGroupsRequest): ListSecurityGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecurityGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecurityGroupsRequest;
    static deserializeBinaryFromReader(message: ListSecurityGroupsRequest, reader: jspb.BinaryReader): ListSecurityGroupsRequest;
}

export namespace ListSecurityGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListSecurityGroupsResponse extends jspb.Message { 
    clearSecurityGroupsList(): void;
    getSecurityGroupsList(): Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>;
    setSecurityGroupsList(value: Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>): ListSecurityGroupsResponse;
    addSecurityGroups(value?: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup, index?: number): yandex_cloud_vpc_v1_security_group_pb.SecurityGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSecurityGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecurityGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecurityGroupsResponse): ListSecurityGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecurityGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecurityGroupsResponse;
    static deserializeBinaryFromReader(message: ListSecurityGroupsResponse, reader: jspb.BinaryReader): ListSecurityGroupsResponse;
}

export namespace ListSecurityGroupsResponse {
    export type AsObject = {
        securityGroupsList: Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSecurityGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateSecurityGroupRequest;
    getName(): string;
    setName(value: string): CreateSecurityGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateSecurityGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): CreateSecurityGroupRequest;
    clearRuleSpecsList(): void;
    getRuleSpecsList(): Array<SecurityGroupRuleSpec>;
    setRuleSpecsList(value: Array<SecurityGroupRuleSpec>): CreateSecurityGroupRequest;
    addRuleSpecs(value?: SecurityGroupRuleSpec, index?: number): SecurityGroupRuleSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecurityGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecurityGroupRequest): CreateSecurityGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecurityGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecurityGroupRequest;
    static deserializeBinaryFromReader(message: CreateSecurityGroupRequest, reader: jspb.BinaryReader): CreateSecurityGroupRequest;
}

export namespace CreateSecurityGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        ruleSpecsList: Array<SecurityGroupRuleSpec.AsObject>,
    }
}

export class SecurityGroupRuleSpec extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): SecurityGroupRuleSpec;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDirection(): yandex_cloud_vpc_v1_security_group_pb.SecurityGroupRule.Direction;
    setDirection(value: yandex_cloud_vpc_v1_security_group_pb.SecurityGroupRule.Direction): SecurityGroupRuleSpec;

    hasPorts(): boolean;
    clearPorts(): void;
    getPorts(): yandex_cloud_vpc_v1_security_group_pb.PortRange | undefined;
    setPorts(value?: yandex_cloud_vpc_v1_security_group_pb.PortRange): SecurityGroupRuleSpec;

    hasProtocolName(): boolean;
    clearProtocolName(): void;
    getProtocolName(): string;
    setProtocolName(value: string): SecurityGroupRuleSpec;

    hasProtocolNumber(): boolean;
    clearProtocolNumber(): void;
    getProtocolNumber(): number;
    setProtocolNumber(value: number): SecurityGroupRuleSpec;

    hasCidrBlocks(): boolean;
    clearCidrBlocks(): void;
    getCidrBlocks(): yandex_cloud_vpc_v1_security_group_pb.CidrBlocks | undefined;
    setCidrBlocks(value?: yandex_cloud_vpc_v1_security_group_pb.CidrBlocks): SecurityGroupRuleSpec;

    hasSecurityGroupId(): boolean;
    clearSecurityGroupId(): void;
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): SecurityGroupRuleSpec;

    hasPredefinedTarget(): boolean;
    clearPredefinedTarget(): void;
    getPredefinedTarget(): string;
    setPredefinedTarget(value: string): SecurityGroupRuleSpec;

    getProtocolCase(): SecurityGroupRuleSpec.ProtocolCase;
    getTargetCase(): SecurityGroupRuleSpec.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityGroupRuleSpec.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityGroupRuleSpec): SecurityGroupRuleSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityGroupRuleSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityGroupRuleSpec;
    static deserializeBinaryFromReader(message: SecurityGroupRuleSpec, reader: jspb.BinaryReader): SecurityGroupRuleSpec;
}

export namespace SecurityGroupRuleSpec {
    export type AsObject = {
        description: string,

        labelsMap: Array<[string, string]>,
        direction: yandex_cloud_vpc_v1_security_group_pb.SecurityGroupRule.Direction,
        ports?: yandex_cloud_vpc_v1_security_group_pb.PortRange.AsObject,
        protocolName: string,
        protocolNumber: number,
        cidrBlocks?: yandex_cloud_vpc_v1_security_group_pb.CidrBlocks.AsObject,
        securityGroupId: string,
        predefinedTarget: string,
    }

    export enum ProtocolCase {
        PROTOCOL_NOT_SET = 0,
        PROTOCOL_NAME = 5,
        PROTOCOL_NUMBER = 6,
    }

    export enum TargetCase {
        TARGET_NOT_SET = 0,
        CIDR_BLOCKS = 7,
        SECURITY_GROUP_ID = 8,
        PREDEFINED_TARGET = 9,
    }

}

export class CreateSecurityGroupMetadata extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): CreateSecurityGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecurityGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecurityGroupMetadata): CreateSecurityGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecurityGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecurityGroupMetadata;
    static deserializeBinaryFromReader(message: CreateSecurityGroupMetadata, reader: jspb.BinaryReader): CreateSecurityGroupMetadata;
}

export namespace CreateSecurityGroupMetadata {
    export type AsObject = {
        securityGroupId: string,
    }
}

export class UpdateSecurityGroupRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): UpdateSecurityGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSecurityGroupRequest;
    getName(): string;
    setName(value: string): UpdateSecurityGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSecurityGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearRuleSpecsList(): void;
    getRuleSpecsList(): Array<SecurityGroupRuleSpec>;
    setRuleSpecsList(value: Array<SecurityGroupRuleSpec>): UpdateSecurityGroupRequest;
    addRuleSpecs(value?: SecurityGroupRuleSpec, index?: number): SecurityGroupRuleSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecurityGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecurityGroupRequest): UpdateSecurityGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecurityGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecurityGroupRequest;
    static deserializeBinaryFromReader(message: UpdateSecurityGroupRequest, reader: jspb.BinaryReader): UpdateSecurityGroupRequest;
}

export namespace UpdateSecurityGroupRequest {
    export type AsObject = {
        securityGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        ruleSpecsList: Array<SecurityGroupRuleSpec.AsObject>,
    }
}

export class UpdateSecurityGroupMetadata extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): UpdateSecurityGroupMetadata;
    clearAddedRuleIdsList(): void;
    getAddedRuleIdsList(): Array<string>;
    setAddedRuleIdsList(value: Array<string>): UpdateSecurityGroupMetadata;
    addAddedRuleIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecurityGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecurityGroupMetadata): UpdateSecurityGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecurityGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecurityGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateSecurityGroupMetadata, reader: jspb.BinaryReader): UpdateSecurityGroupMetadata;
}

export namespace UpdateSecurityGroupMetadata {
    export type AsObject = {
        securityGroupId: string,
        addedRuleIdsList: Array<string>,
    }
}

export class UpdateSecurityGroupRulesRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): UpdateSecurityGroupRulesRequest;
    clearDeletionRuleIdsList(): void;
    getDeletionRuleIdsList(): Array<string>;
    setDeletionRuleIdsList(value: Array<string>): UpdateSecurityGroupRulesRequest;
    addDeletionRuleIds(value: string, index?: number): string;
    clearAdditionRuleSpecsList(): void;
    getAdditionRuleSpecsList(): Array<SecurityGroupRuleSpec>;
    setAdditionRuleSpecsList(value: Array<SecurityGroupRuleSpec>): UpdateSecurityGroupRulesRequest;
    addAdditionRuleSpecs(value?: SecurityGroupRuleSpec, index?: number): SecurityGroupRuleSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecurityGroupRulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecurityGroupRulesRequest): UpdateSecurityGroupRulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecurityGroupRulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecurityGroupRulesRequest;
    static deserializeBinaryFromReader(message: UpdateSecurityGroupRulesRequest, reader: jspb.BinaryReader): UpdateSecurityGroupRulesRequest;
}

export namespace UpdateSecurityGroupRulesRequest {
    export type AsObject = {
        securityGroupId: string,
        deletionRuleIdsList: Array<string>,
        additionRuleSpecsList: Array<SecurityGroupRuleSpec.AsObject>,
    }
}

export class UpdateSecurityGroupRuleRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): UpdateSecurityGroupRuleRequest;
    getRuleId(): string;
    setRuleId(value: string): UpdateSecurityGroupRuleRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSecurityGroupRuleRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSecurityGroupRuleRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecurityGroupRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecurityGroupRuleRequest): UpdateSecurityGroupRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecurityGroupRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecurityGroupRuleRequest;
    static deserializeBinaryFromReader(message: UpdateSecurityGroupRuleRequest, reader: jspb.BinaryReader): UpdateSecurityGroupRuleRequest;
}

export namespace UpdateSecurityGroupRuleRequest {
    export type AsObject = {
        securityGroupId: string,
        ruleId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateSecurityGroupRuleMetadata extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): UpdateSecurityGroupRuleMetadata;
    getRuleId(): string;
    setRuleId(value: string): UpdateSecurityGroupRuleMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecurityGroupRuleMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecurityGroupRuleMetadata): UpdateSecurityGroupRuleMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecurityGroupRuleMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecurityGroupRuleMetadata;
    static deserializeBinaryFromReader(message: UpdateSecurityGroupRuleMetadata, reader: jspb.BinaryReader): UpdateSecurityGroupRuleMetadata;
}

export namespace UpdateSecurityGroupRuleMetadata {
    export type AsObject = {
        securityGroupId: string,
        ruleId: string,
    }
}

export class DeleteSecurityGroupRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): DeleteSecurityGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecurityGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecurityGroupRequest): DeleteSecurityGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecurityGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecurityGroupRequest;
    static deserializeBinaryFromReader(message: DeleteSecurityGroupRequest, reader: jspb.BinaryReader): DeleteSecurityGroupRequest;
}

export namespace DeleteSecurityGroupRequest {
    export type AsObject = {
        securityGroupId: string,
    }
}

export class DeleteSecurityGroupMetadata extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): DeleteSecurityGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecurityGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecurityGroupMetadata): DeleteSecurityGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecurityGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecurityGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteSecurityGroupMetadata, reader: jspb.BinaryReader): DeleteSecurityGroupMetadata;
}

export namespace DeleteSecurityGroupMetadata {
    export type AsObject = {
        securityGroupId: string,
    }
}

export class ListSecurityGroupOperationsRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): ListSecurityGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSecurityGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSecurityGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecurityGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecurityGroupOperationsRequest): ListSecurityGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecurityGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecurityGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListSecurityGroupOperationsRequest, reader: jspb.BinaryReader): ListSecurityGroupOperationsRequest;
}

export namespace ListSecurityGroupOperationsRequest {
    export type AsObject = {
        securityGroupId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSecurityGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListSecurityGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSecurityGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecurityGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecurityGroupOperationsResponse): ListSecurityGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecurityGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecurityGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListSecurityGroupOperationsResponse, reader: jspb.BinaryReader): ListSecurityGroupOperationsResponse;
}

export namespace ListSecurityGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class MoveSecurityGroupRequest extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): MoveSecurityGroupRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveSecurityGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSecurityGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSecurityGroupRequest): MoveSecurityGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSecurityGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSecurityGroupRequest;
    static deserializeBinaryFromReader(message: MoveSecurityGroupRequest, reader: jspb.BinaryReader): MoveSecurityGroupRequest;
}

export namespace MoveSecurityGroupRequest {
    export type AsObject = {
        securityGroupId: string,
        destinationFolderId: string,
    }
}

export class MoveSecurityGroupMetadata extends jspb.Message { 
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): MoveSecurityGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSecurityGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSecurityGroupMetadata): MoveSecurityGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSecurityGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSecurityGroupMetadata;
    static deserializeBinaryFromReader(message: MoveSecurityGroupMetadata, reader: jspb.BinaryReader): MoveSecurityGroupMetadata;
}

export namespace MoveSecurityGroupMetadata {
    export type AsObject = {
        securityGroupId: string,
    }
}
