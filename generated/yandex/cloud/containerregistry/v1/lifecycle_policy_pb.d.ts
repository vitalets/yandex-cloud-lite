// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/lifecycle_policy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LifecyclePolicy extends jspb.Message { 
    getId(): string;
    setId(value: string): LifecyclePolicy;
    getName(): string;
    setName(value: string): LifecyclePolicy;
    getRepositoryId(): string;
    setRepositoryId(value: string): LifecyclePolicy;
    getDescription(): string;
    setDescription(value: string): LifecyclePolicy;
    getStatus(): LifecyclePolicy.Status;
    setStatus(value: LifecyclePolicy.Status): LifecyclePolicy;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LifecyclePolicy;
    clearRulesList(): void;
    getRulesList(): Array<LifecycleRule>;
    setRulesList(value: Array<LifecycleRule>): LifecyclePolicy;
    addRules(value?: LifecycleRule, index?: number): LifecycleRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LifecyclePolicy.AsObject;
    static toObject(includeInstance: boolean, msg: LifecyclePolicy): LifecyclePolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LifecyclePolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LifecyclePolicy;
    static deserializeBinaryFromReader(message: LifecyclePolicy, reader: jspb.BinaryReader): LifecyclePolicy;
}

export namespace LifecyclePolicy {
    export type AsObject = {
        id: string,
        name: string,
        repositoryId: string,
        description: string,
        status: LifecyclePolicy.Status,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        rulesList: Array<LifecycleRule.AsObject>,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    DISABLED = 2,
    }

}

export class LifecycleRule extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): LifecycleRule;

    hasExpirePeriod(): boolean;
    clearExpirePeriod(): void;
    getExpirePeriod(): google_protobuf_duration_pb.Duration | undefined;
    setExpirePeriod(value?: google_protobuf_duration_pb.Duration): LifecycleRule;
    getTagRegexp(): string;
    setTagRegexp(value: string): LifecycleRule;
    getUntagged(): boolean;
    setUntagged(value: boolean): LifecycleRule;
    getRetainedTop(): number;
    setRetainedTop(value: number): LifecycleRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LifecycleRule.AsObject;
    static toObject(includeInstance: boolean, msg: LifecycleRule): LifecycleRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LifecycleRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LifecycleRule;
    static deserializeBinaryFromReader(message: LifecycleRule, reader: jspb.BinaryReader): LifecycleRule;
}

export namespace LifecycleRule {
    export type AsObject = {
        description: string,
        expirePeriod?: google_protobuf_duration_pb.Duration.AsObject,
        tagRegexp: string,
        untagged: boolean,
        retainedTop: number,
    }
}
