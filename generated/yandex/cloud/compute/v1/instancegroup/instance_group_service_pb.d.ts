// package: yandex.cloud.compute.v1.instancegroup
// file: yandex/cloud/compute/v1/instancegroup/instance_group_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_access_access_pb from "../../../../../yandex/cloud/access/access_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_instancegroup_instance_group_pb from "../../../../../yandex/cloud/compute/v1/instancegroup/instance_group_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class ResumeInstanceGroupProcessesRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): ResumeInstanceGroupProcessesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeInstanceGroupProcessesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeInstanceGroupProcessesRequest): ResumeInstanceGroupProcessesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeInstanceGroupProcessesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeInstanceGroupProcessesRequest;
    static deserializeBinaryFromReader(message: ResumeInstanceGroupProcessesRequest, reader: jspb.BinaryReader): ResumeInstanceGroupProcessesRequest;
}

export namespace ResumeInstanceGroupProcessesRequest {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class ResumeInstanceGroupProcessMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): ResumeInstanceGroupProcessMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResumeInstanceGroupProcessMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ResumeInstanceGroupProcessMetadata): ResumeInstanceGroupProcessMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResumeInstanceGroupProcessMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResumeInstanceGroupProcessMetadata;
    static deserializeBinaryFromReader(message: ResumeInstanceGroupProcessMetadata, reader: jspb.BinaryReader): ResumeInstanceGroupProcessMetadata;
}

export namespace ResumeInstanceGroupProcessMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class PauseInstanceGroupProcessesRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): PauseInstanceGroupProcessesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseInstanceGroupProcessesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PauseInstanceGroupProcessesRequest): PauseInstanceGroupProcessesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseInstanceGroupProcessesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseInstanceGroupProcessesRequest;
    static deserializeBinaryFromReader(message: PauseInstanceGroupProcessesRequest, reader: jspb.BinaryReader): PauseInstanceGroupProcessesRequest;
}

export namespace PauseInstanceGroupProcessesRequest {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class PauseInstanceGroupProcessMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): PauseInstanceGroupProcessMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PauseInstanceGroupProcessMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: PauseInstanceGroupProcessMetadata): PauseInstanceGroupProcessMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PauseInstanceGroupProcessMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PauseInstanceGroupProcessMetadata;
    static deserializeBinaryFromReader(message: PauseInstanceGroupProcessMetadata, reader: jspb.BinaryReader): PauseInstanceGroupProcessMetadata;
}

export namespace PauseInstanceGroupProcessMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class GetInstanceGroupRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): GetInstanceGroupRequest;
    getView(): InstanceGroupView;
    setView(value: InstanceGroupView): GetInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInstanceGroupRequest): GetInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInstanceGroupRequest;
    static deserializeBinaryFromReader(message: GetInstanceGroupRequest, reader: jspb.BinaryReader): GetInstanceGroupRequest;
}

export namespace GetInstanceGroupRequest {
    export type AsObject = {
        instanceGroupId: string,
        view: InstanceGroupView,
    }
}

export class CreateInstanceGroupRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateInstanceGroupRequest;
    getName(): string;
    setName(value: string): CreateInstanceGroupRequest;
    getDescription(): string;
    setDescription(value: string): CreateInstanceGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasInstanceTemplate(): boolean;
    clearInstanceTemplate(): void;
    getInstanceTemplate(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate | undefined;
    setInstanceTemplate(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate): CreateInstanceGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy): CreateInstanceGroupRequest;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy | undefined;
    setDeployPolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy): CreateInstanceGroupRequest;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy): CreateInstanceGroupRequest;

    hasLoadBalancerSpec(): boolean;
    clearLoadBalancerSpec(): void;
    getLoadBalancerSpec(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec | undefined;
    setLoadBalancerSpec(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec): CreateInstanceGroupRequest;

    hasHealthChecksSpec(): boolean;
    clearHealthChecksSpec(): void;
    getHealthChecksSpec(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec | undefined;
    setHealthChecksSpec(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec): CreateInstanceGroupRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateInstanceGroupRequest;
    clearVariablesList(): void;
    getVariablesList(): Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable>;
    setVariablesList(value: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable>): CreateInstanceGroupRequest;
    addVariables(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable, index?: number): yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): CreateInstanceGroupRequest;

    hasApplicationLoadBalancerSpec(): boolean;
    clearApplicationLoadBalancerSpec(): void;
    getApplicationLoadBalancerSpec(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.ApplicationLoadBalancerSpec | undefined;
    setApplicationLoadBalancerSpec(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ApplicationLoadBalancerSpec): CreateInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInstanceGroupRequest): CreateInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInstanceGroupRequest;
    static deserializeBinaryFromReader(message: CreateInstanceGroupRequest, reader: jspb.BinaryReader): CreateInstanceGroupRequest;
}

export namespace CreateInstanceGroupRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        instanceTemplate?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate.AsObject,
        scalePolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy.AsObject,
        deployPolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy.AsObject,
        allocationPolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy.AsObject,
        loadBalancerSpec?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec.AsObject,
        healthChecksSpec?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec.AsObject,
        serviceAccountId: string,
        variablesList: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable.AsObject>,
        deletionProtection: boolean,
        applicationLoadBalancerSpec?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ApplicationLoadBalancerSpec.AsObject,
    }
}

export class CreateInstanceGroupFromYamlRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateInstanceGroupFromYamlRequest;
    getInstanceGroupYaml(): string;
    setInstanceGroupYaml(value: string): CreateInstanceGroupFromYamlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInstanceGroupFromYamlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInstanceGroupFromYamlRequest): CreateInstanceGroupFromYamlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInstanceGroupFromYamlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInstanceGroupFromYamlRequest;
    static deserializeBinaryFromReader(message: CreateInstanceGroupFromYamlRequest, reader: jspb.BinaryReader): CreateInstanceGroupFromYamlRequest;
}

export namespace CreateInstanceGroupFromYamlRequest {
    export type AsObject = {
        folderId: string,
        instanceGroupYaml: string,
    }
}

export class CreateInstanceGroupMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): CreateInstanceGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInstanceGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInstanceGroupMetadata): CreateInstanceGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInstanceGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInstanceGroupMetadata;
    static deserializeBinaryFromReader(message: CreateInstanceGroupMetadata, reader: jspb.BinaryReader): CreateInstanceGroupMetadata;
}

export namespace CreateInstanceGroupMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class UpdateInstanceGroupRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): UpdateInstanceGroupRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInstanceGroupRequest;
    getName(): string;
    setName(value: string): UpdateInstanceGroupRequest;
    getDescription(): string;
    setDescription(value: string): UpdateInstanceGroupRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasInstanceTemplate(): boolean;
    clearInstanceTemplate(): void;
    getInstanceTemplate(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate | undefined;
    setInstanceTemplate(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate): UpdateInstanceGroupRequest;

    hasScalePolicy(): boolean;
    clearScalePolicy(): void;
    getScalePolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy | undefined;
    setScalePolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy): UpdateInstanceGroupRequest;

    hasDeployPolicy(): boolean;
    clearDeployPolicy(): void;
    getDeployPolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy | undefined;
    setDeployPolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy): UpdateInstanceGroupRequest;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy): UpdateInstanceGroupRequest;

    hasHealthChecksSpec(): boolean;
    clearHealthChecksSpec(): void;
    getHealthChecksSpec(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec | undefined;
    setHealthChecksSpec(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec): UpdateInstanceGroupRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateInstanceGroupRequest;

    hasLoadBalancerSpec(): boolean;
    clearLoadBalancerSpec(): void;
    getLoadBalancerSpec(): yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec | undefined;
    setLoadBalancerSpec(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec): UpdateInstanceGroupRequest;
    clearVariablesList(): void;
    getVariablesList(): Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable>;
    setVariablesList(value: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable>): UpdateInstanceGroupRequest;
    addVariables(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable, index?: number): yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable;
    getDeletionProtection(): boolean;
    setDeletionProtection(value: boolean): UpdateInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceGroupRequest): UpdateInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceGroupRequest;
    static deserializeBinaryFromReader(message: UpdateInstanceGroupRequest, reader: jspb.BinaryReader): UpdateInstanceGroupRequest;
}

export namespace UpdateInstanceGroupRequest {
    export type AsObject = {
        instanceGroupId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        instanceTemplate?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceTemplate.AsObject,
        scalePolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ScalePolicy.AsObject,
        deployPolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.DeployPolicy.AsObject,
        allocationPolicy?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.AllocationPolicy.AsObject,
        healthChecksSpec?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.HealthChecksSpec.AsObject,
        serviceAccountId: string,
        loadBalancerSpec?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.LoadBalancerSpec.AsObject,
        variablesList: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.Variable.AsObject>,
        deletionProtection: boolean,
    }
}

export class UpdateInstanceGroupFromYamlRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): UpdateInstanceGroupFromYamlRequest;
    getInstanceGroupYaml(): string;
    setInstanceGroupYaml(value: string): UpdateInstanceGroupFromYamlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceGroupFromYamlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceGroupFromYamlRequest): UpdateInstanceGroupFromYamlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceGroupFromYamlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceGroupFromYamlRequest;
    static deserializeBinaryFromReader(message: UpdateInstanceGroupFromYamlRequest, reader: jspb.BinaryReader): UpdateInstanceGroupFromYamlRequest;
}

export namespace UpdateInstanceGroupFromYamlRequest {
    export type AsObject = {
        instanceGroupId: string,
        instanceGroupYaml: string,
    }
}

export class UpdateInstanceGroupMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): UpdateInstanceGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceGroupMetadata): UpdateInstanceGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceGroupMetadata;
    static deserializeBinaryFromReader(message: UpdateInstanceGroupMetadata, reader: jspb.BinaryReader): UpdateInstanceGroupMetadata;
}

export namespace UpdateInstanceGroupMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class StartInstanceGroupRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StartInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartInstanceGroupRequest): StartInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartInstanceGroupRequest;
    static deserializeBinaryFromReader(message: StartInstanceGroupRequest, reader: jspb.BinaryReader): StartInstanceGroupRequest;
}

export namespace StartInstanceGroupRequest {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class StartInstanceGroupMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StartInstanceGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartInstanceGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartInstanceGroupMetadata): StartInstanceGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartInstanceGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartInstanceGroupMetadata;
    static deserializeBinaryFromReader(message: StartInstanceGroupMetadata, reader: jspb.BinaryReader): StartInstanceGroupMetadata;
}

export namespace StartInstanceGroupMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class StopInstanceGroupRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StopInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstanceGroupRequest): StopInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstanceGroupRequest;
    static deserializeBinaryFromReader(message: StopInstanceGroupRequest, reader: jspb.BinaryReader): StopInstanceGroupRequest;
}

export namespace StopInstanceGroupRequest {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class StopInstanceGroupMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StopInstanceGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstanceGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstanceGroupMetadata): StopInstanceGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstanceGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstanceGroupMetadata;
    static deserializeBinaryFromReader(message: StopInstanceGroupMetadata, reader: jspb.BinaryReader): StopInstanceGroupMetadata;
}

export namespace StopInstanceGroupMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class DeleteInstanceGroupRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): DeleteInstanceGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstanceGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstanceGroupRequest): DeleteInstanceGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstanceGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstanceGroupRequest;
    static deserializeBinaryFromReader(message: DeleteInstanceGroupRequest, reader: jspb.BinaryReader): DeleteInstanceGroupRequest;
}

export namespace DeleteInstanceGroupRequest {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class DeleteInstanceGroupMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): DeleteInstanceGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstanceGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstanceGroupMetadata): DeleteInstanceGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstanceGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstanceGroupMetadata;
    static deserializeBinaryFromReader(message: DeleteInstanceGroupMetadata, reader: jspb.BinaryReader): DeleteInstanceGroupMetadata;
}

export namespace DeleteInstanceGroupMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class DeleteInstancesMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): DeleteInstancesMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstancesMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstancesMetadata): DeleteInstancesMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstancesMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstancesMetadata;
    static deserializeBinaryFromReader(message: DeleteInstancesMetadata, reader: jspb.BinaryReader): DeleteInstancesMetadata;
}

export namespace DeleteInstancesMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class StopInstancesMetadata extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StopInstancesMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstancesMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstancesMetadata): StopInstancesMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstancesMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstancesMetadata;
    static deserializeBinaryFromReader(message: StopInstancesMetadata, reader: jspb.BinaryReader): StopInstancesMetadata;
}

export namespace StopInstancesMetadata {
    export type AsObject = {
        instanceGroupId: string,
    }
}

export class ListInstanceGroupsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListInstanceGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstanceGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstanceGroupsRequest;
    getFilter(): string;
    setFilter(value: string): ListInstanceGroupsRequest;
    getView(): InstanceGroupView;
    setView(value: InstanceGroupView): ListInstanceGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupsRequest): ListInstanceGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupsRequest;
    static deserializeBinaryFromReader(message: ListInstanceGroupsRequest, reader: jspb.BinaryReader): ListInstanceGroupsRequest;
}

export namespace ListInstanceGroupsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
        view: InstanceGroupView,
    }
}

export class ListInstanceGroupsResponse extends jspb.Message { 
    clearInstanceGroupsList(): void;
    getInstanceGroupsList(): Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup>;
    setInstanceGroupsList(value: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup>): ListInstanceGroupsResponse;
    addInstanceGroups(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup, index?: number): yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstanceGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupsResponse): ListInstanceGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupsResponse;
    static deserializeBinaryFromReader(message: ListInstanceGroupsResponse, reader: jspb.BinaryReader): ListInstanceGroupsResponse;
}

export namespace ListInstanceGroupsResponse {
    export type AsObject = {
        instanceGroupsList: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup.AsObject>,
        nextPageToken: string,
    }
}

export class ListInstanceGroupInstancesRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): ListInstanceGroupInstancesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstanceGroupInstancesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstanceGroupInstancesRequest;
    getFilter(): string;
    setFilter(value: string): ListInstanceGroupInstancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupInstancesRequest): ListInstanceGroupInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupInstancesRequest;
    static deserializeBinaryFromReader(message: ListInstanceGroupInstancesRequest, reader: jspb.BinaryReader): ListInstanceGroupInstancesRequest;
}

export namespace ListInstanceGroupInstancesRequest {
    export type AsObject = {
        instanceGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListInstanceGroupInstancesResponse extends jspb.Message { 
    clearInstancesList(): void;
    getInstancesList(): Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.ManagedInstance>;
    setInstancesList(value: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.ManagedInstance>): ListInstanceGroupInstancesResponse;
    addInstances(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.ManagedInstance, index?: number): yandex_cloud_compute_v1_instancegroup_instance_group_pb.ManagedInstance;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstanceGroupInstancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupInstancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupInstancesResponse): ListInstanceGroupInstancesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupInstancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupInstancesResponse;
    static deserializeBinaryFromReader(message: ListInstanceGroupInstancesResponse, reader: jspb.BinaryReader): ListInstanceGroupInstancesResponse;
}

export namespace ListInstanceGroupInstancesResponse {
    export type AsObject = {
        instancesList: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.ManagedInstance.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteInstancesRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): DeleteInstancesRequest;
    clearManagedInstanceIdsList(): void;
    getManagedInstanceIdsList(): Array<string>;
    setManagedInstanceIdsList(value: Array<string>): DeleteInstancesRequest;
    addManagedInstanceIds(value: string, index?: number): string;
    getCreateAnother(): boolean;
    setCreateAnother(value: boolean): DeleteInstancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstancesRequest): DeleteInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstancesRequest;
    static deserializeBinaryFromReader(message: DeleteInstancesRequest, reader: jspb.BinaryReader): DeleteInstancesRequest;
}

export namespace DeleteInstancesRequest {
    export type AsObject = {
        instanceGroupId: string,
        managedInstanceIdsList: Array<string>,
        createAnother: boolean,
    }
}

export class StopInstancesRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): StopInstancesRequest;
    clearManagedInstanceIdsList(): void;
    getManagedInstanceIdsList(): Array<string>;
    setManagedInstanceIdsList(value: Array<string>): StopInstancesRequest;
    addManagedInstanceIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstancesRequest): StopInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstancesRequest;
    static deserializeBinaryFromReader(message: StopInstancesRequest, reader: jspb.BinaryReader): StopInstancesRequest;
}

export namespace StopInstancesRequest {
    export type AsObject = {
        instanceGroupId: string,
        managedInstanceIdsList: Array<string>,
    }
}

export class ListInstanceGroupOperationsRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): ListInstanceGroupOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstanceGroupOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstanceGroupOperationsRequest;
    getFilter(): string;
    setFilter(value: string): ListInstanceGroupOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupOperationsRequest): ListInstanceGroupOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupOperationsRequest;
    static deserializeBinaryFromReader(message: ListInstanceGroupOperationsRequest, reader: jspb.BinaryReader): ListInstanceGroupOperationsRequest;
}

export namespace ListInstanceGroupOperationsRequest {
    export type AsObject = {
        instanceGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListInstanceGroupOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListInstanceGroupOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstanceGroupOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupOperationsResponse): ListInstanceGroupOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupOperationsResponse;
    static deserializeBinaryFromReader(message: ListInstanceGroupOperationsResponse, reader: jspb.BinaryReader): ListInstanceGroupOperationsResponse;
}

export namespace ListInstanceGroupOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class ListInstanceGroupLogRecordsRequest extends jspb.Message { 
    getInstanceGroupId(): string;
    setInstanceGroupId(value: string): ListInstanceGroupLogRecordsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstanceGroupLogRecordsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstanceGroupLogRecordsRequest;
    getFilter(): string;
    setFilter(value: string): ListInstanceGroupLogRecordsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupLogRecordsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupLogRecordsRequest): ListInstanceGroupLogRecordsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupLogRecordsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupLogRecordsRequest;
    static deserializeBinaryFromReader(message: ListInstanceGroupLogRecordsRequest, reader: jspb.BinaryReader): ListInstanceGroupLogRecordsRequest;
}

export namespace ListInstanceGroupLogRecordsRequest {
    export type AsObject = {
        instanceGroupId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListInstanceGroupLogRecordsResponse extends jspb.Message { 
    clearLogRecordsList(): void;
    getLogRecordsList(): Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.LogRecord>;
    setLogRecordsList(value: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.LogRecord>): ListInstanceGroupLogRecordsResponse;
    addLogRecords(value?: yandex_cloud_compute_v1_instancegroup_instance_group_pb.LogRecord, index?: number): yandex_cloud_compute_v1_instancegroup_instance_group_pb.LogRecord;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstanceGroupLogRecordsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceGroupLogRecordsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceGroupLogRecordsResponse): ListInstanceGroupLogRecordsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceGroupLogRecordsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceGroupLogRecordsResponse;
    static deserializeBinaryFromReader(message: ListInstanceGroupLogRecordsResponse, reader: jspb.BinaryReader): ListInstanceGroupLogRecordsResponse;
}

export namespace ListInstanceGroupLogRecordsResponse {
    export type AsObject = {
        logRecordsList: Array<yandex_cloud_compute_v1_instancegroup_instance_group_pb.LogRecord.AsObject>,
        nextPageToken: string,
    }
}

export enum InstanceGroupView {
    BASIC = 0,
    FULL = 1,
}
