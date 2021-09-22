// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/security_group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class SecurityGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): SecurityGroup;
    getFolderId(): string;
    setFolderId(value: string): SecurityGroup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SecurityGroup;
    getName(): string;
    setName(value: string): SecurityGroup;
    getDescription(): string;
    setDescription(value: string): SecurityGroup;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): SecurityGroup;
    getStatus(): SecurityGroup.Status;
    setStatus(value: SecurityGroup.Status): SecurityGroup;
    clearRulesList(): void;
    getRulesList(): Array<SecurityGroupRule>;
    setRulesList(value: Array<SecurityGroupRule>): SecurityGroup;
    addRules(value?: SecurityGroupRule, index?: number): SecurityGroupRule;
    getDefaultForNetwork(): boolean;
    setDefaultForNetwork(value: boolean): SecurityGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityGroup.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityGroup): SecurityGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityGroup;
    static deserializeBinaryFromReader(message: SecurityGroup, reader: jspb.BinaryReader): SecurityGroup;
}

export namespace SecurityGroup {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        status: SecurityGroup.Status,
        rulesList: Array<SecurityGroupRule.AsObject>,
        defaultForNetwork: boolean,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    UPDATING = 3,
    DELETING = 4,
    }

}

export class SecurityGroupRule extends jspb.Message { 
    getId(): string;
    setId(value: string): SecurityGroupRule;
    getDescription(): string;
    setDescription(value: string): SecurityGroupRule;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getDirection(): SecurityGroupRule.Direction;
    setDirection(value: SecurityGroupRule.Direction): SecurityGroupRule;

    hasPorts(): boolean;
    clearPorts(): void;
    getPorts(): PortRange | undefined;
    setPorts(value?: PortRange): SecurityGroupRule;
    getProtocolName(): string;
    setProtocolName(value: string): SecurityGroupRule;
    getProtocolNumber(): number;
    setProtocolNumber(value: number): SecurityGroupRule;

    hasCidrBlocks(): boolean;
    clearCidrBlocks(): void;
    getCidrBlocks(): CidrBlocks | undefined;
    setCidrBlocks(value?: CidrBlocks): SecurityGroupRule;

    hasSecurityGroupId(): boolean;
    clearSecurityGroupId(): void;
    getSecurityGroupId(): string;
    setSecurityGroupId(value: string): SecurityGroupRule;

    hasPredefinedTarget(): boolean;
    clearPredefinedTarget(): void;
    getPredefinedTarget(): string;
    setPredefinedTarget(value: string): SecurityGroupRule;

    getTargetCase(): SecurityGroupRule.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityGroupRule.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityGroupRule): SecurityGroupRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityGroupRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityGroupRule;
    static deserializeBinaryFromReader(message: SecurityGroupRule, reader: jspb.BinaryReader): SecurityGroupRule;
}

export namespace SecurityGroupRule {
    export type AsObject = {
        id: string,
        description: string,

        labelsMap: Array<[string, string]>,
        direction: SecurityGroupRule.Direction,
        ports?: PortRange.AsObject,
        protocolName: string,
        protocolNumber: number,
        cidrBlocks?: CidrBlocks.AsObject,
        securityGroupId: string,
        predefinedTarget: string,
    }

    export enum Direction {
    DIRECTION_UNSPECIFIED = 0,
    INGRESS = 1,
    EGRESS = 2,
    }


    export enum TargetCase {
        TARGET_NOT_SET = 0,
        CIDR_BLOCKS = 8,
        SECURITY_GROUP_ID = 9,
        PREDEFINED_TARGET = 10,
    }

}

export class PortRange extends jspb.Message { 
    getFromPort(): number;
    setFromPort(value: number): PortRange;
    getToPort(): number;
    setToPort(value: number): PortRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortRange.AsObject;
    static toObject(includeInstance: boolean, msg: PortRange): PortRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortRange;
    static deserializeBinaryFromReader(message: PortRange, reader: jspb.BinaryReader): PortRange;
}

export namespace PortRange {
    export type AsObject = {
        fromPort: number,
        toPort: number,
    }
}

export class CidrBlocks extends jspb.Message { 
    clearV4CidrBlocksList(): void;
    getV4CidrBlocksList(): Array<string>;
    setV4CidrBlocksList(value: Array<string>): CidrBlocks;
    addV4CidrBlocks(value: string, index?: number): string;
    clearV6CidrBlocksList(): void;
    getV6CidrBlocksList(): Array<string>;
    setV6CidrBlocksList(value: Array<string>): CidrBlocks;
    addV6CidrBlocks(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CidrBlocks.AsObject;
    static toObject(includeInstance: boolean, msg: CidrBlocks): CidrBlocks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CidrBlocks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CidrBlocks;
    static deserializeBinaryFromReader(message: CidrBlocks, reader: jspb.BinaryReader): CidrBlocks;
}

export namespace CidrBlocks {
    export type AsObject = {
        v4CidrBlocksList: Array<string>,
        v6CidrBlocksList: Array<string>,
    }
}
