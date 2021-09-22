// package: yandex.cloud.containerregistry.v1
// file: yandex/cloud/containerregistry/v1/lifecycle_policy_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_containerregistry_v1_image_pb from "../../../../yandex/cloud/containerregistry/v1/image_pb";
import * as yandex_cloud_containerregistry_v1_lifecycle_policy_pb from "../../../../yandex/cloud/containerregistry/v1/lifecycle_policy_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetLifecyclePolicyRequest extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): GetLifecyclePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLifecyclePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLifecyclePolicyRequest): GetLifecyclePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLifecyclePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLifecyclePolicyRequest;
    static deserializeBinaryFromReader(message: GetLifecyclePolicyRequest, reader: jspb.BinaryReader): GetLifecyclePolicyRequest;
}

export namespace GetLifecyclePolicyRequest {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class ListLifecyclePoliciesRequest extends jspb.Message { 

    hasRegistryId(): boolean;
    clearRegistryId(): void;
    getRegistryId(): string;
    setRegistryId(value: string): ListLifecyclePoliciesRequest;

    hasRepositoryId(): boolean;
    clearRepositoryId(): void;
    getRepositoryId(): string;
    setRepositoryId(value: string): ListLifecyclePoliciesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListLifecyclePoliciesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLifecyclePoliciesRequest;
    getFilter(): string;
    setFilter(value: string): ListLifecyclePoliciesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListLifecyclePoliciesRequest;

    getIdCase(): ListLifecyclePoliciesRequest.IdCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLifecyclePoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLifecyclePoliciesRequest): ListLifecyclePoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLifecyclePoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLifecyclePoliciesRequest;
    static deserializeBinaryFromReader(message: ListLifecyclePoliciesRequest, reader: jspb.BinaryReader): ListLifecyclePoliciesRequest;
}

export namespace ListLifecyclePoliciesRequest {
    export type AsObject = {
        registryId: string,
        repositoryId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }

    export enum IdCase {
        ID_NOT_SET = 0,
        REGISTRY_ID = 1,
        REPOSITORY_ID = 6,
    }

}

export class ListLifecyclePoliciesResponse extends jspb.Message { 
    clearLifecyclePoliciesList(): void;
    getLifecyclePoliciesList(): Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy>;
    setLifecyclePoliciesList(value: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy>): ListLifecyclePoliciesResponse;
    addLifecyclePolicies(value?: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy, index?: number): yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLifecyclePoliciesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLifecyclePoliciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLifecyclePoliciesResponse): ListLifecyclePoliciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLifecyclePoliciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLifecyclePoliciesResponse;
    static deserializeBinaryFromReader(message: ListLifecyclePoliciesResponse, reader: jspb.BinaryReader): ListLifecyclePoliciesResponse;
}

export namespace ListLifecyclePoliciesResponse {
    export type AsObject = {
        lifecyclePoliciesList: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.AsObject>,
        nextPageToken: string,
    }
}

export class CreateLifecyclePolicyRequest extends jspb.Message { 
    getRepositoryId(): string;
    setRepositoryId(value: string): CreateLifecyclePolicyRequest;
    getName(): string;
    setName(value: string): CreateLifecyclePolicyRequest;
    getDescription(): string;
    setDescription(value: string): CreateLifecyclePolicyRequest;
    getStatus(): yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status;
    setStatus(value: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status): CreateLifecyclePolicyRequest;
    clearRulesList(): void;
    getRulesList(): Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule>;
    setRulesList(value: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule>): CreateLifecyclePolicyRequest;
    addRules(value?: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule, index?: number): yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLifecyclePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLifecyclePolicyRequest): CreateLifecyclePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLifecyclePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLifecyclePolicyRequest;
    static deserializeBinaryFromReader(message: CreateLifecyclePolicyRequest, reader: jspb.BinaryReader): CreateLifecyclePolicyRequest;
}

export namespace CreateLifecyclePolicyRequest {
    export type AsObject = {
        repositoryId: string,
        name: string,
        description: string,
        status: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status,
        rulesList: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule.AsObject>,
    }
}

export class UpdateLifecyclePolicyRequest extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): UpdateLifecyclePolicyRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLifecyclePolicyRequest;
    getName(): string;
    setName(value: string): UpdateLifecyclePolicyRequest;
    getDescription(): string;
    setDescription(value: string): UpdateLifecyclePolicyRequest;
    getStatus(): yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status;
    setStatus(value: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status): UpdateLifecyclePolicyRequest;
    clearRulesList(): void;
    getRulesList(): Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule>;
    setRulesList(value: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule>): UpdateLifecyclePolicyRequest;
    addRules(value?: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule, index?: number): yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLifecyclePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLifecyclePolicyRequest): UpdateLifecyclePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLifecyclePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLifecyclePolicyRequest;
    static deserializeBinaryFromReader(message: UpdateLifecyclePolicyRequest, reader: jspb.BinaryReader): UpdateLifecyclePolicyRequest;
}

export namespace UpdateLifecyclePolicyRequest {
    export type AsObject = {
        lifecyclePolicyId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,
        status: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.Status,
        rulesList: Array<yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecycleRule.AsObject>,
    }
}

export class DeleteLifecyclePolicyRequest extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): DeleteLifecyclePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLifecyclePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLifecyclePolicyRequest): DeleteLifecyclePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLifecyclePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLifecyclePolicyRequest;
    static deserializeBinaryFromReader(message: DeleteLifecyclePolicyRequest, reader: jspb.BinaryReader): DeleteLifecyclePolicyRequest;
}

export namespace DeleteLifecyclePolicyRequest {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class CreateLifecyclePolicyMetadata extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): CreateLifecyclePolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLifecyclePolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLifecyclePolicyMetadata): CreateLifecyclePolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLifecyclePolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLifecyclePolicyMetadata;
    static deserializeBinaryFromReader(message: CreateLifecyclePolicyMetadata, reader: jspb.BinaryReader): CreateLifecyclePolicyMetadata;
}

export namespace CreateLifecyclePolicyMetadata {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class UpdateLifecyclePolicyMetadata extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): UpdateLifecyclePolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLifecyclePolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLifecyclePolicyMetadata): UpdateLifecyclePolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLifecyclePolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLifecyclePolicyMetadata;
    static deserializeBinaryFromReader(message: UpdateLifecyclePolicyMetadata, reader: jspb.BinaryReader): UpdateLifecyclePolicyMetadata;
}

export namespace UpdateLifecyclePolicyMetadata {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class DeleteLifecyclePolicyMetadata extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): DeleteLifecyclePolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLifecyclePolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLifecyclePolicyMetadata): DeleteLifecyclePolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLifecyclePolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLifecyclePolicyMetadata;
    static deserializeBinaryFromReader(message: DeleteLifecyclePolicyMetadata, reader: jspb.BinaryReader): DeleteLifecyclePolicyMetadata;
}

export namespace DeleteLifecyclePolicyMetadata {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class DryRunLifecyclePolicyRequest extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): DryRunLifecyclePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DryRunLifecyclePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DryRunLifecyclePolicyRequest): DryRunLifecyclePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DryRunLifecyclePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DryRunLifecyclePolicyRequest;
    static deserializeBinaryFromReader(message: DryRunLifecyclePolicyRequest, reader: jspb.BinaryReader): DryRunLifecyclePolicyRequest;
}

export namespace DryRunLifecyclePolicyRequest {
    export type AsObject = {
        lifecyclePolicyId: string,
    }
}

export class DryRunLifecyclePolicyMetadata extends jspb.Message { 
    getDryRunLifecyclePolicyResultId(): string;
    setDryRunLifecyclePolicyResultId(value: string): DryRunLifecyclePolicyMetadata;
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): DryRunLifecyclePolicyMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DryRunLifecyclePolicyMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DryRunLifecyclePolicyMetadata): DryRunLifecyclePolicyMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DryRunLifecyclePolicyMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DryRunLifecyclePolicyMetadata;
    static deserializeBinaryFromReader(message: DryRunLifecyclePolicyMetadata, reader: jspb.BinaryReader): DryRunLifecyclePolicyMetadata;
}

export namespace DryRunLifecyclePolicyMetadata {
    export type AsObject = {
        dryRunLifecyclePolicyResultId: string,
        lifecyclePolicyId: string,
    }
}

export class DryRunLifecyclePolicyResult extends jspb.Message { 
    getDryRunLifecyclePolicyResultId(): string;
    setDryRunLifecyclePolicyResultId(value: string): DryRunLifecyclePolicyResult;
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): DryRunLifecyclePolicyResult;

    hasRunAt(): boolean;
    clearRunAt(): void;
    getRunAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRunAt(value?: google_protobuf_timestamp_pb.Timestamp): DryRunLifecyclePolicyResult;
    getAffectedImagesCount(): number;
    setAffectedImagesCount(value: number): DryRunLifecyclePolicyResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DryRunLifecyclePolicyResult.AsObject;
    static toObject(includeInstance: boolean, msg: DryRunLifecyclePolicyResult): DryRunLifecyclePolicyResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DryRunLifecyclePolicyResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DryRunLifecyclePolicyResult;
    static deserializeBinaryFromReader(message: DryRunLifecyclePolicyResult, reader: jspb.BinaryReader): DryRunLifecyclePolicyResult;
}

export namespace DryRunLifecyclePolicyResult {
    export type AsObject = {
        dryRunLifecyclePolicyResultId: string,
        lifecyclePolicyId: string,
        runAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        affectedImagesCount: number,
    }
}

export class GetDryRunLifecyclePolicyResultRequest extends jspb.Message { 
    getDryRunLifecyclePolicyResultId(): string;
    setDryRunLifecyclePolicyResultId(value: string): GetDryRunLifecyclePolicyResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDryRunLifecyclePolicyResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDryRunLifecyclePolicyResultRequest): GetDryRunLifecyclePolicyResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDryRunLifecyclePolicyResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDryRunLifecyclePolicyResultRequest;
    static deserializeBinaryFromReader(message: GetDryRunLifecyclePolicyResultRequest, reader: jspb.BinaryReader): GetDryRunLifecyclePolicyResultRequest;
}

export namespace GetDryRunLifecyclePolicyResultRequest {
    export type AsObject = {
        dryRunLifecyclePolicyResultId: string,
    }
}

export class ListDryRunLifecyclePolicyResultsRequest extends jspb.Message { 
    getLifecyclePolicyId(): string;
    setLifecyclePolicyId(value: string): ListDryRunLifecyclePolicyResultsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDryRunLifecyclePolicyResultsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDryRunLifecyclePolicyResultsRequest;
    getFilter(): string;
    setFilter(value: string): ListDryRunLifecyclePolicyResultsRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListDryRunLifecyclePolicyResultsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDryRunLifecyclePolicyResultsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDryRunLifecyclePolicyResultsRequest): ListDryRunLifecyclePolicyResultsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDryRunLifecyclePolicyResultsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDryRunLifecyclePolicyResultsRequest;
    static deserializeBinaryFromReader(message: ListDryRunLifecyclePolicyResultsRequest, reader: jspb.BinaryReader): ListDryRunLifecyclePolicyResultsRequest;
}

export namespace ListDryRunLifecyclePolicyResultsRequest {
    export type AsObject = {
        lifecyclePolicyId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListDryRunLifecyclePolicyResultsResponse extends jspb.Message { 
    clearDryRunLifecyclePolicyResultsList(): void;
    getDryRunLifecyclePolicyResultsList(): Array<DryRunLifecyclePolicyResult>;
    setDryRunLifecyclePolicyResultsList(value: Array<DryRunLifecyclePolicyResult>): ListDryRunLifecyclePolicyResultsResponse;
    addDryRunLifecyclePolicyResults(value?: DryRunLifecyclePolicyResult, index?: number): DryRunLifecyclePolicyResult;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDryRunLifecyclePolicyResultsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDryRunLifecyclePolicyResultsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDryRunLifecyclePolicyResultsResponse): ListDryRunLifecyclePolicyResultsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDryRunLifecyclePolicyResultsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDryRunLifecyclePolicyResultsResponse;
    static deserializeBinaryFromReader(message: ListDryRunLifecyclePolicyResultsResponse, reader: jspb.BinaryReader): ListDryRunLifecyclePolicyResultsResponse;
}

export namespace ListDryRunLifecyclePolicyResultsResponse {
    export type AsObject = {
        dryRunLifecyclePolicyResultsList: Array<DryRunLifecyclePolicyResult.AsObject>,
        nextPageToken: string,
    }
}

export class ListDryRunLifecyclePolicyResultAffectedImagesRequest extends jspb.Message { 
    getDryRunLifecyclePolicyResultId(): string;
    setDryRunLifecyclePolicyResultId(value: string): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    getFilter(): string;
    setFilter(value: string): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    getOrderBy(): string;
    setOrderBy(value: string): ListDryRunLifecyclePolicyResultAffectedImagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDryRunLifecyclePolicyResultAffectedImagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDryRunLifecyclePolicyResultAffectedImagesRequest): ListDryRunLifecyclePolicyResultAffectedImagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
    static deserializeBinaryFromReader(message: ListDryRunLifecyclePolicyResultAffectedImagesRequest, reader: jspb.BinaryReader): ListDryRunLifecyclePolicyResultAffectedImagesRequest;
}

export namespace ListDryRunLifecyclePolicyResultAffectedImagesRequest {
    export type AsObject = {
        dryRunLifecyclePolicyResultId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        orderBy: string,
    }
}

export class ListDryRunLifecyclePolicyResultAffectedImagesResponse extends jspb.Message { 
    clearAffectedImagesList(): void;
    getAffectedImagesList(): Array<yandex_cloud_containerregistry_v1_image_pb.Image>;
    setAffectedImagesList(value: Array<yandex_cloud_containerregistry_v1_image_pb.Image>): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    addAffectedImages(value?: yandex_cloud_containerregistry_v1_image_pb.Image, index?: number): yandex_cloud_containerregistry_v1_image_pb.Image;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListDryRunLifecyclePolicyResultAffectedImagesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDryRunLifecyclePolicyResultAffectedImagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDryRunLifecyclePolicyResultAffectedImagesResponse): ListDryRunLifecyclePolicyResultAffectedImagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
    static deserializeBinaryFromReader(message: ListDryRunLifecyclePolicyResultAffectedImagesResponse, reader: jspb.BinaryReader): ListDryRunLifecyclePolicyResultAffectedImagesResponse;
}

export namespace ListDryRunLifecyclePolicyResultAffectedImagesResponse {
    export type AsObject = {
        affectedImagesList: Array<yandex_cloud_containerregistry_v1_image_pb.Image.AsObject>,
        nextPageToken: string,
    }
}
