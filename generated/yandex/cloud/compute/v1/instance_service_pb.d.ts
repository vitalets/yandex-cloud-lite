// package: yandex.cloud.compute.v1
// file: yandex/cloud/compute/v1/instance_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_compute_v1_disk_pb from "../../../../yandex/cloud/compute/v1/disk_pb";
import * as yandex_cloud_compute_v1_instance_pb from "../../../../yandex/cloud/compute/v1/instance_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): GetInstanceRequest;
    getView(): InstanceView;
    setView(value: InstanceView): GetInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInstanceRequest): GetInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInstanceRequest;
    static deserializeBinaryFromReader(message: GetInstanceRequest, reader: jspb.BinaryReader): GetInstanceRequest;
}

export namespace GetInstanceRequest {
    export type AsObject = {
        instanceId: string,
        view: InstanceView,
    }
}

export class ListInstancesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListInstancesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstancesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstancesRequest;
    getFilter(): string;
    setFilter(value: string): ListInstancesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstancesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstancesRequest): ListInstancesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstancesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstancesRequest;
    static deserializeBinaryFromReader(message: ListInstancesRequest, reader: jspb.BinaryReader): ListInstancesRequest;
}

export namespace ListInstancesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListInstancesResponse extends jspb.Message { 
    clearInstancesList(): void;
    getInstancesList(): Array<yandex_cloud_compute_v1_instance_pb.Instance>;
    setInstancesList(value: Array<yandex_cloud_compute_v1_instance_pb.Instance>): ListInstancesResponse;
    addInstances(value?: yandex_cloud_compute_v1_instance_pb.Instance, index?: number): yandex_cloud_compute_v1_instance_pb.Instance;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstancesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstancesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstancesResponse): ListInstancesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstancesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstancesResponse;
    static deserializeBinaryFromReader(message: ListInstancesResponse, reader: jspb.BinaryReader): ListInstancesResponse;
}

export namespace ListInstancesResponse {
    export type AsObject = {
        instancesList: Array<yandex_cloud_compute_v1_instance_pb.Instance.AsObject>,
        nextPageToken: string,
    }
}

export class CreateInstanceRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateInstanceRequest;
    getName(): string;
    setName(value: string): CreateInstanceRequest;
    getDescription(): string;
    setDescription(value: string): CreateInstanceRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getZoneId(): string;
    setZoneId(value: string): CreateInstanceRequest;
    getPlatformId(): string;
    setPlatformId(value: string): CreateInstanceRequest;

    hasResourcesSpec(): boolean;
    clearResourcesSpec(): void;
    getResourcesSpec(): ResourcesSpec | undefined;
    setResourcesSpec(value?: ResourcesSpec): CreateInstanceRequest;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    hasBootDiskSpec(): boolean;
    clearBootDiskSpec(): void;
    getBootDiskSpec(): AttachedDiskSpec | undefined;
    setBootDiskSpec(value?: AttachedDiskSpec): CreateInstanceRequest;
    clearSecondaryDiskSpecsList(): void;
    getSecondaryDiskSpecsList(): Array<AttachedDiskSpec>;
    setSecondaryDiskSpecsList(value: Array<AttachedDiskSpec>): CreateInstanceRequest;
    addSecondaryDiskSpecs(value?: AttachedDiskSpec, index?: number): AttachedDiskSpec;
    clearFilesystemSpecsList(): void;
    getFilesystemSpecsList(): Array<AttachedFilesystemSpec>;
    setFilesystemSpecsList(value: Array<AttachedFilesystemSpec>): CreateInstanceRequest;
    addFilesystemSpecs(value?: AttachedFilesystemSpec, index?: number): AttachedFilesystemSpec;
    clearNetworkInterfaceSpecsList(): void;
    getNetworkInterfaceSpecsList(): Array<NetworkInterfaceSpec>;
    setNetworkInterfaceSpecsList(value: Array<NetworkInterfaceSpec>): CreateInstanceRequest;
    addNetworkInterfaceSpecs(value?: NetworkInterfaceSpec, index?: number): NetworkInterfaceSpec;
    getHostname(): string;
    setHostname(value: string): CreateInstanceRequest;

    hasSchedulingPolicy(): boolean;
    clearSchedulingPolicy(): void;
    getSchedulingPolicy(): yandex_cloud_compute_v1_instance_pb.SchedulingPolicy | undefined;
    setSchedulingPolicy(value?: yandex_cloud_compute_v1_instance_pb.SchedulingPolicy): CreateInstanceRequest;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): CreateInstanceRequest;

    hasNetworkSettings(): boolean;
    clearNetworkSettings(): void;
    getNetworkSettings(): yandex_cloud_compute_v1_instance_pb.NetworkSettings | undefined;
    setNetworkSettings(value?: yandex_cloud_compute_v1_instance_pb.NetworkSettings): CreateInstanceRequest;

    hasPlacementPolicy(): boolean;
    clearPlacementPolicy(): void;
    getPlacementPolicy(): yandex_cloud_compute_v1_instance_pb.PlacementPolicy | undefined;
    setPlacementPolicy(value?: yandex_cloud_compute_v1_instance_pb.PlacementPolicy): CreateInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInstanceRequest): CreateInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInstanceRequest;
    static deserializeBinaryFromReader(message: CreateInstanceRequest, reader: jspb.BinaryReader): CreateInstanceRequest;
}

export namespace CreateInstanceRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        zoneId: string,
        platformId: string,
        resourcesSpec?: ResourcesSpec.AsObject,

        metadataMap: Array<[string, string]>,
        bootDiskSpec?: AttachedDiskSpec.AsObject,
        secondaryDiskSpecsList: Array<AttachedDiskSpec.AsObject>,
        filesystemSpecsList: Array<AttachedFilesystemSpec.AsObject>,
        networkInterfaceSpecsList: Array<NetworkInterfaceSpec.AsObject>,
        hostname: string,
        schedulingPolicy?: yandex_cloud_compute_v1_instance_pb.SchedulingPolicy.AsObject,
        serviceAccountId: string,
        networkSettings?: yandex_cloud_compute_v1_instance_pb.NetworkSettings.AsObject,
        placementPolicy?: yandex_cloud_compute_v1_instance_pb.PlacementPolicy.AsObject,
    }
}

export class CreateInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): CreateInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInstanceMetadata): CreateInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInstanceMetadata;
    static deserializeBinaryFromReader(message: CreateInstanceMetadata, reader: jspb.BinaryReader): CreateInstanceMetadata;
}

export namespace CreateInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class UpdateInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInstanceRequest;
    getName(): string;
    setName(value: string): UpdateInstanceRequest;
    getDescription(): string;
    setDescription(value: string): UpdateInstanceRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getPlatformId(): string;
    setPlatformId(value: string): UpdateInstanceRequest;

    hasResourcesSpec(): boolean;
    clearResourcesSpec(): void;
    getResourcesSpec(): ResourcesSpec | undefined;
    setResourcesSpec(value?: ResourcesSpec): UpdateInstanceRequest;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): UpdateInstanceRequest;

    hasNetworkSettings(): boolean;
    clearNetworkSettings(): void;
    getNetworkSettings(): yandex_cloud_compute_v1_instance_pb.NetworkSettings | undefined;
    setNetworkSettings(value?: yandex_cloud_compute_v1_instance_pb.NetworkSettings): UpdateInstanceRequest;

    hasPlacementPolicy(): boolean;
    clearPlacementPolicy(): void;
    getPlacementPolicy(): yandex_cloud_compute_v1_instance_pb.PlacementPolicy | undefined;
    setPlacementPolicy(value?: yandex_cloud_compute_v1_instance_pb.PlacementPolicy): UpdateInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceRequest): UpdateInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceRequest;
    static deserializeBinaryFromReader(message: UpdateInstanceRequest, reader: jspb.BinaryReader): UpdateInstanceRequest;
}

export namespace UpdateInstanceRequest {
    export type AsObject = {
        instanceId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        platformId: string,
        resourcesSpec?: ResourcesSpec.AsObject,

        metadataMap: Array<[string, string]>,
        serviceAccountId: string,
        networkSettings?: yandex_cloud_compute_v1_instance_pb.NetworkSettings.AsObject,
        placementPolicy?: yandex_cloud_compute_v1_instance_pb.PlacementPolicy.AsObject,
    }
}

export class UpdateInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceMetadata): UpdateInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadata;
    static deserializeBinaryFromReader(message: UpdateInstanceMetadata, reader: jspb.BinaryReader): UpdateInstanceMetadata;
}

export namespace UpdateInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class DeleteInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DeleteInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstanceRequest): DeleteInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstanceRequest;
    static deserializeBinaryFromReader(message: DeleteInstanceRequest, reader: jspb.BinaryReader): DeleteInstanceRequest;
}

export namespace DeleteInstanceRequest {
    export type AsObject = {
        instanceId: string,
    }
}

export class DeleteInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DeleteInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteInstanceMetadata): DeleteInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteInstanceMetadata;
    static deserializeBinaryFromReader(message: DeleteInstanceMetadata, reader: jspb.BinaryReader): DeleteInstanceMetadata;
}

export namespace DeleteInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class UpdateInstanceMetadataRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceMetadataRequest;
    clearDeleteList(): void;
    getDeleteList(): Array<string>;
    setDeleteList(value: Array<string>): UpdateInstanceMetadataRequest;
    addDelete(value: string, index?: number): string;

    getUpsertMap(): jspb.Map<string, string>;
    clearUpsertMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceMetadataRequest): UpdateInstanceMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadataRequest;
    static deserializeBinaryFromReader(message: UpdateInstanceMetadataRequest, reader: jspb.BinaryReader): UpdateInstanceMetadataRequest;
}

export namespace UpdateInstanceMetadataRequest {
    export type AsObject = {
        instanceId: string,
        pb_deleteList: Array<string>,

        upsertMap: Array<[string, string]>,
    }
}

export class UpdateInstanceMetadataMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceMetadataMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceMetadataMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceMetadataMetadata): UpdateInstanceMetadataMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceMetadataMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceMetadataMetadata;
    static deserializeBinaryFromReader(message: UpdateInstanceMetadataMetadata, reader: jspb.BinaryReader): UpdateInstanceMetadataMetadata;
}

export namespace UpdateInstanceMetadataMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class GetInstanceSerialPortOutputRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): GetInstanceSerialPortOutputRequest;
    getPort(): number;
    setPort(value: number): GetInstanceSerialPortOutputRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInstanceSerialPortOutputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInstanceSerialPortOutputRequest): GetInstanceSerialPortOutputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInstanceSerialPortOutputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInstanceSerialPortOutputRequest;
    static deserializeBinaryFromReader(message: GetInstanceSerialPortOutputRequest, reader: jspb.BinaryReader): GetInstanceSerialPortOutputRequest;
}

export namespace GetInstanceSerialPortOutputRequest {
    export type AsObject = {
        instanceId: string,
        port: number,
    }
}

export class GetInstanceSerialPortOutputResponse extends jspb.Message { 
    getContents(): string;
    setContents(value: string): GetInstanceSerialPortOutputResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInstanceSerialPortOutputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetInstanceSerialPortOutputResponse): GetInstanceSerialPortOutputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInstanceSerialPortOutputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInstanceSerialPortOutputResponse;
    static deserializeBinaryFromReader(message: GetInstanceSerialPortOutputResponse, reader: jspb.BinaryReader): GetInstanceSerialPortOutputResponse;
}

export namespace GetInstanceSerialPortOutputResponse {
    export type AsObject = {
        contents: string,
    }
}

export class StopInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): StopInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstanceRequest): StopInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstanceRequest;
    static deserializeBinaryFromReader(message: StopInstanceRequest, reader: jspb.BinaryReader): StopInstanceRequest;
}

export namespace StopInstanceRequest {
    export type AsObject = {
        instanceId: string,
    }
}

export class StopInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): StopInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopInstanceMetadata): StopInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopInstanceMetadata;
    static deserializeBinaryFromReader(message: StopInstanceMetadata, reader: jspb.BinaryReader): StopInstanceMetadata;
}

export namespace StopInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class StartInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): StartInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartInstanceRequest): StartInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartInstanceRequest;
    static deserializeBinaryFromReader(message: StartInstanceRequest, reader: jspb.BinaryReader): StartInstanceRequest;
}

export namespace StartInstanceRequest {
    export type AsObject = {
        instanceId: string,
    }
}

export class StartInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): StartInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartInstanceMetadata): StartInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartInstanceMetadata;
    static deserializeBinaryFromReader(message: StartInstanceMetadata, reader: jspb.BinaryReader): StartInstanceMetadata;
}

export namespace StartInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class RestartInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): RestartInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RestartInstanceRequest): RestartInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartInstanceRequest;
    static deserializeBinaryFromReader(message: RestartInstanceRequest, reader: jspb.BinaryReader): RestartInstanceRequest;
}

export namespace RestartInstanceRequest {
    export type AsObject = {
        instanceId: string,
    }
}

export class RestartInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): RestartInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestartInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RestartInstanceMetadata): RestartInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestartInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestartInstanceMetadata;
    static deserializeBinaryFromReader(message: RestartInstanceMetadata, reader: jspb.BinaryReader): RestartInstanceMetadata;
}

export namespace RestartInstanceMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class AttachInstanceDiskRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AttachInstanceDiskRequest;

    hasAttachedDiskSpec(): boolean;
    clearAttachedDiskSpec(): void;
    getAttachedDiskSpec(): AttachedDiskSpec | undefined;
    setAttachedDiskSpec(value?: AttachedDiskSpec): AttachInstanceDiskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachInstanceDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AttachInstanceDiskRequest): AttachInstanceDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachInstanceDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachInstanceDiskRequest;
    static deserializeBinaryFromReader(message: AttachInstanceDiskRequest, reader: jspb.BinaryReader): AttachInstanceDiskRequest;
}

export namespace AttachInstanceDiskRequest {
    export type AsObject = {
        instanceId: string,
        attachedDiskSpec?: AttachedDiskSpec.AsObject,
    }
}

export class AttachInstanceDiskMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AttachInstanceDiskMetadata;
    getDiskId(): string;
    setDiskId(value: string): AttachInstanceDiskMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachInstanceDiskMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AttachInstanceDiskMetadata): AttachInstanceDiskMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachInstanceDiskMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachInstanceDiskMetadata;
    static deserializeBinaryFromReader(message: AttachInstanceDiskMetadata, reader: jspb.BinaryReader): AttachInstanceDiskMetadata;
}

export namespace AttachInstanceDiskMetadata {
    export type AsObject = {
        instanceId: string,
        diskId: string,
    }
}

export class DetachInstanceDiskRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DetachInstanceDiskRequest;

    hasDiskId(): boolean;
    clearDiskId(): void;
    getDiskId(): string;
    setDiskId(value: string): DetachInstanceDiskRequest;

    hasDeviceName(): boolean;
    clearDeviceName(): void;
    getDeviceName(): string;
    setDeviceName(value: string): DetachInstanceDiskRequest;

    getDiskCase(): DetachInstanceDiskRequest.DiskCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachInstanceDiskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetachInstanceDiskRequest): DetachInstanceDiskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachInstanceDiskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachInstanceDiskRequest;
    static deserializeBinaryFromReader(message: DetachInstanceDiskRequest, reader: jspb.BinaryReader): DetachInstanceDiskRequest;
}

export namespace DetachInstanceDiskRequest {
    export type AsObject = {
        instanceId: string,
        diskId: string,
        deviceName: string,
    }

    export enum DiskCase {
        DISK_NOT_SET = 0,
        DISK_ID = 2,
        DEVICE_NAME = 3,
    }

}

export class DetachInstanceDiskMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DetachInstanceDiskMetadata;
    getDiskId(): string;
    setDiskId(value: string): DetachInstanceDiskMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachInstanceDiskMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DetachInstanceDiskMetadata): DetachInstanceDiskMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachInstanceDiskMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachInstanceDiskMetadata;
    static deserializeBinaryFromReader(message: DetachInstanceDiskMetadata, reader: jspb.BinaryReader): DetachInstanceDiskMetadata;
}

export namespace DetachInstanceDiskMetadata {
    export type AsObject = {
        instanceId: string,
        diskId: string,
    }
}

export class AttachInstanceFilesystemRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AttachInstanceFilesystemRequest;

    hasAttachedFilesystemSpec(): boolean;
    clearAttachedFilesystemSpec(): void;
    getAttachedFilesystemSpec(): AttachedFilesystemSpec | undefined;
    setAttachedFilesystemSpec(value?: AttachedFilesystemSpec): AttachInstanceFilesystemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachInstanceFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AttachInstanceFilesystemRequest): AttachInstanceFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachInstanceFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachInstanceFilesystemRequest;
    static deserializeBinaryFromReader(message: AttachInstanceFilesystemRequest, reader: jspb.BinaryReader): AttachInstanceFilesystemRequest;
}

export namespace AttachInstanceFilesystemRequest {
    export type AsObject = {
        instanceId: string,
        attachedFilesystemSpec?: AttachedFilesystemSpec.AsObject,
    }
}

export class AttachInstanceFilesystemMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AttachInstanceFilesystemMetadata;
    getFilesystemId(): string;
    setFilesystemId(value: string): AttachInstanceFilesystemMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachInstanceFilesystemMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AttachInstanceFilesystemMetadata): AttachInstanceFilesystemMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachInstanceFilesystemMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachInstanceFilesystemMetadata;
    static deserializeBinaryFromReader(message: AttachInstanceFilesystemMetadata, reader: jspb.BinaryReader): AttachInstanceFilesystemMetadata;
}

export namespace AttachInstanceFilesystemMetadata {
    export type AsObject = {
        instanceId: string,
        filesystemId: string,
    }
}

export class DetachInstanceFilesystemRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DetachInstanceFilesystemRequest;

    hasFilesystemId(): boolean;
    clearFilesystemId(): void;
    getFilesystemId(): string;
    setFilesystemId(value: string): DetachInstanceFilesystemRequest;

    hasDeviceName(): boolean;
    clearDeviceName(): void;
    getDeviceName(): string;
    setDeviceName(value: string): DetachInstanceFilesystemRequest;

    getFilesystemCase(): DetachInstanceFilesystemRequest.FilesystemCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachInstanceFilesystemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetachInstanceFilesystemRequest): DetachInstanceFilesystemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachInstanceFilesystemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachInstanceFilesystemRequest;
    static deserializeBinaryFromReader(message: DetachInstanceFilesystemRequest, reader: jspb.BinaryReader): DetachInstanceFilesystemRequest;
}

export namespace DetachInstanceFilesystemRequest {
    export type AsObject = {
        instanceId: string,
        filesystemId: string,
        deviceName: string,
    }

    export enum FilesystemCase {
        FILESYSTEM_NOT_SET = 0,
        FILESYSTEM_ID = 2,
        DEVICE_NAME = 3,
    }

}

export class DetachInstanceFilesystemMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): DetachInstanceFilesystemMetadata;
    getFilesystemId(): string;
    setFilesystemId(value: string): DetachInstanceFilesystemMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachInstanceFilesystemMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DetachInstanceFilesystemMetadata): DetachInstanceFilesystemMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachInstanceFilesystemMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachInstanceFilesystemMetadata;
    static deserializeBinaryFromReader(message: DetachInstanceFilesystemMetadata, reader: jspb.BinaryReader): DetachInstanceFilesystemMetadata;
}

export namespace DetachInstanceFilesystemMetadata {
    export type AsObject = {
        instanceId: string,
        filesystemId: string,
    }
}

export class AddInstanceOneToOneNatRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AddInstanceOneToOneNatRequest;
    getNetworkInterfaceIndex(): string;
    setNetworkInterfaceIndex(value: string): AddInstanceOneToOneNatRequest;
    getInternalAddress(): string;
    setInternalAddress(value: string): AddInstanceOneToOneNatRequest;

    hasOneToOneNatSpec(): boolean;
    clearOneToOneNatSpec(): void;
    getOneToOneNatSpec(): OneToOneNatSpec | undefined;
    setOneToOneNatSpec(value?: OneToOneNatSpec): AddInstanceOneToOneNatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddInstanceOneToOneNatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddInstanceOneToOneNatRequest): AddInstanceOneToOneNatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddInstanceOneToOneNatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddInstanceOneToOneNatRequest;
    static deserializeBinaryFromReader(message: AddInstanceOneToOneNatRequest, reader: jspb.BinaryReader): AddInstanceOneToOneNatRequest;
}

export namespace AddInstanceOneToOneNatRequest {
    export type AsObject = {
        instanceId: string,
        networkInterfaceIndex: string,
        internalAddress: string,
        oneToOneNatSpec?: OneToOneNatSpec.AsObject,
    }
}

export class AddInstanceOneToOneNatMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): AddInstanceOneToOneNatMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddInstanceOneToOneNatMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddInstanceOneToOneNatMetadata): AddInstanceOneToOneNatMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddInstanceOneToOneNatMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddInstanceOneToOneNatMetadata;
    static deserializeBinaryFromReader(message: AddInstanceOneToOneNatMetadata, reader: jspb.BinaryReader): AddInstanceOneToOneNatMetadata;
}

export namespace AddInstanceOneToOneNatMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class RemoveInstanceOneToOneNatRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): RemoveInstanceOneToOneNatRequest;
    getNetworkInterfaceIndex(): string;
    setNetworkInterfaceIndex(value: string): RemoveInstanceOneToOneNatRequest;
    getInternalAddress(): string;
    setInternalAddress(value: string): RemoveInstanceOneToOneNatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveInstanceOneToOneNatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveInstanceOneToOneNatRequest): RemoveInstanceOneToOneNatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveInstanceOneToOneNatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveInstanceOneToOneNatRequest;
    static deserializeBinaryFromReader(message: RemoveInstanceOneToOneNatRequest, reader: jspb.BinaryReader): RemoveInstanceOneToOneNatRequest;
}

export namespace RemoveInstanceOneToOneNatRequest {
    export type AsObject = {
        instanceId: string,
        networkInterfaceIndex: string,
        internalAddress: string,
    }
}

export class RemoveInstanceOneToOneNatMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): RemoveInstanceOneToOneNatMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveInstanceOneToOneNatMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveInstanceOneToOneNatMetadata): RemoveInstanceOneToOneNatMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveInstanceOneToOneNatMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveInstanceOneToOneNatMetadata;
    static deserializeBinaryFromReader(message: RemoveInstanceOneToOneNatMetadata, reader: jspb.BinaryReader): RemoveInstanceOneToOneNatMetadata;
}

export namespace RemoveInstanceOneToOneNatMetadata {
    export type AsObject = {
        instanceId: string,
    }
}

export class UpdateInstanceNetworkInterfaceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceNetworkInterfaceRequest;
    getNetworkInterfaceIndex(): string;
    setNetworkInterfaceIndex(value: string): UpdateInstanceNetworkInterfaceRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateInstanceNetworkInterfaceRequest;
    getSubnetId(): string;
    setSubnetId(value: string): UpdateInstanceNetworkInterfaceRequest;

    hasPrimaryV4AddressSpec(): boolean;
    clearPrimaryV4AddressSpec(): void;
    getPrimaryV4AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV4AddressSpec(value?: PrimaryAddressSpec): UpdateInstanceNetworkInterfaceRequest;

    hasPrimaryV6AddressSpec(): boolean;
    clearPrimaryV6AddressSpec(): void;
    getPrimaryV6AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV6AddressSpec(value?: PrimaryAddressSpec): UpdateInstanceNetworkInterfaceRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): UpdateInstanceNetworkInterfaceRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceNetworkInterfaceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceNetworkInterfaceRequest): UpdateInstanceNetworkInterfaceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceNetworkInterfaceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceNetworkInterfaceRequest;
    static deserializeBinaryFromReader(message: UpdateInstanceNetworkInterfaceRequest, reader: jspb.BinaryReader): UpdateInstanceNetworkInterfaceRequest;
}

export namespace UpdateInstanceNetworkInterfaceRequest {
    export type AsObject = {
        instanceId: string,
        networkInterfaceIndex: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        subnetId: string,
        primaryV4AddressSpec?: PrimaryAddressSpec.AsObject,
        primaryV6AddressSpec?: PrimaryAddressSpec.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class UpdateInstanceNetworkInterfaceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): UpdateInstanceNetworkInterfaceMetadata;
    getNetworkInterfaceIndex(): string;
    setNetworkInterfaceIndex(value: string): UpdateInstanceNetworkInterfaceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInstanceNetworkInterfaceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInstanceNetworkInterfaceMetadata): UpdateInstanceNetworkInterfaceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInstanceNetworkInterfaceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInstanceNetworkInterfaceMetadata;
    static deserializeBinaryFromReader(message: UpdateInstanceNetworkInterfaceMetadata, reader: jspb.BinaryReader): UpdateInstanceNetworkInterfaceMetadata;
}

export namespace UpdateInstanceNetworkInterfaceMetadata {
    export type AsObject = {
        instanceId: string,
        networkInterfaceIndex: string,
    }
}

export class ListInstanceOperationsRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): ListInstanceOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListInstanceOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListInstanceOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceOperationsRequest): ListInstanceOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceOperationsRequest;
    static deserializeBinaryFromReader(message: ListInstanceOperationsRequest, reader: jspb.BinaryReader): ListInstanceOperationsRequest;
}

export namespace ListInstanceOperationsRequest {
    export type AsObject = {
        instanceId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListInstanceOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListInstanceOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListInstanceOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInstanceOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListInstanceOperationsResponse): ListInstanceOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInstanceOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInstanceOperationsResponse;
    static deserializeBinaryFromReader(message: ListInstanceOperationsResponse, reader: jspb.BinaryReader): ListInstanceOperationsResponse;
}

export namespace ListInstanceOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class ResourcesSpec extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): ResourcesSpec;
    getCores(): number;
    setCores(value: number): ResourcesSpec;
    getCoreFraction(): number;
    setCoreFraction(value: number): ResourcesSpec;
    getGpus(): number;
    setGpus(value: number): ResourcesSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcesSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcesSpec): ResourcesSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourcesSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcesSpec;
    static deserializeBinaryFromReader(message: ResourcesSpec, reader: jspb.BinaryReader): ResourcesSpec;
}

export namespace ResourcesSpec {
    export type AsObject = {
        memory: number,
        cores: number,
        coreFraction: number,
        gpus: number,
    }
}

export class AttachedDiskSpec extends jspb.Message { 
    getMode(): AttachedDiskSpec.Mode;
    setMode(value: AttachedDiskSpec.Mode): AttachedDiskSpec;
    getDeviceName(): string;
    setDeviceName(value: string): AttachedDiskSpec;
    getAutoDelete(): boolean;
    setAutoDelete(value: boolean): AttachedDiskSpec;

    hasDiskSpec(): boolean;
    clearDiskSpec(): void;
    getDiskSpec(): AttachedDiskSpec.DiskSpec | undefined;
    setDiskSpec(value?: AttachedDiskSpec.DiskSpec): AttachedDiskSpec;

    hasDiskId(): boolean;
    clearDiskId(): void;
    getDiskId(): string;
    setDiskId(value: string): AttachedDiskSpec;

    getDiskCase(): AttachedDiskSpec.DiskCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedDiskSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedDiskSpec): AttachedDiskSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedDiskSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedDiskSpec;
    static deserializeBinaryFromReader(message: AttachedDiskSpec, reader: jspb.BinaryReader): AttachedDiskSpec;
}

export namespace AttachedDiskSpec {
    export type AsObject = {
        mode: AttachedDiskSpec.Mode,
        deviceName: string,
        autoDelete: boolean,
        diskSpec?: AttachedDiskSpec.DiskSpec.AsObject,
        diskId: string,
    }


    export class DiskSpec extends jspb.Message { 
        getName(): string;
        setName(value: string): DiskSpec;
        getDescription(): string;
        setDescription(value: string): DiskSpec;
        getTypeId(): string;
        setTypeId(value: string): DiskSpec;
        getSize(): number;
        setSize(value: number): DiskSpec;
        getBlockSize(): number;
        setBlockSize(value: number): DiskSpec;

        hasDiskPlacementPolicy(): boolean;
        clearDiskPlacementPolicy(): void;
        getDiskPlacementPolicy(): yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy | undefined;
        setDiskPlacementPolicy(value?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy): DiskSpec;

        hasImageId(): boolean;
        clearImageId(): void;
        getImageId(): string;
        setImageId(value: string): DiskSpec;

        hasSnapshotId(): boolean;
        clearSnapshotId(): void;
        getSnapshotId(): string;
        setSnapshotId(value: string): DiskSpec;

        getSourceCase(): DiskSpec.SourceCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DiskSpec.AsObject;
        static toObject(includeInstance: boolean, msg: DiskSpec): DiskSpec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DiskSpec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DiskSpec;
        static deserializeBinaryFromReader(message: DiskSpec, reader: jspb.BinaryReader): DiskSpec;
    }

    export namespace DiskSpec {
        export type AsObject = {
            name: string,
            description: string,
            typeId: string,
            size: number,
            blockSize: number,
            diskPlacementPolicy?: yandex_cloud_compute_v1_disk_pb.DiskPlacementPolicy.AsObject,
            imageId: string,
            snapshotId: string,
        }

        export enum SourceCase {
            SOURCE_NOT_SET = 0,
            IMAGE_ID = 5,
            SNAPSHOT_ID = 6,
        }

    }


    export enum Mode {
    MODE_UNSPECIFIED = 0,
    READ_ONLY = 1,
    READ_WRITE = 2,
    }


    export enum DiskCase {
        DISK_NOT_SET = 0,
        DISK_SPEC = 4,
        DISK_ID = 5,
    }

}

export class AttachedFilesystemSpec extends jspb.Message { 
    getMode(): AttachedFilesystemSpec.Mode;
    setMode(value: AttachedFilesystemSpec.Mode): AttachedFilesystemSpec;
    getDeviceName(): string;
    setDeviceName(value: string): AttachedFilesystemSpec;
    getFilesystemId(): string;
    setFilesystemId(value: string): AttachedFilesystemSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachedFilesystemSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AttachedFilesystemSpec): AttachedFilesystemSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachedFilesystemSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachedFilesystemSpec;
    static deserializeBinaryFromReader(message: AttachedFilesystemSpec, reader: jspb.BinaryReader): AttachedFilesystemSpec;
}

export namespace AttachedFilesystemSpec {
    export type AsObject = {
        mode: AttachedFilesystemSpec.Mode,
        deviceName: string,
        filesystemId: string,
    }

    export enum Mode {
    MODE_UNSPECIFIED = 0,
    READ_ONLY = 1,
    READ_WRITE = 2,
    }

}

export class NetworkInterfaceSpec extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): NetworkInterfaceSpec;

    hasPrimaryV4AddressSpec(): boolean;
    clearPrimaryV4AddressSpec(): void;
    getPrimaryV4AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV4AddressSpec(value?: PrimaryAddressSpec): NetworkInterfaceSpec;

    hasPrimaryV6AddressSpec(): boolean;
    clearPrimaryV6AddressSpec(): void;
    getPrimaryV6AddressSpec(): PrimaryAddressSpec | undefined;
    setPrimaryV6AddressSpec(value?: PrimaryAddressSpec): NetworkInterfaceSpec;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): NetworkInterfaceSpec;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInterfaceSpec.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInterfaceSpec): NetworkInterfaceSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInterfaceSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInterfaceSpec;
    static deserializeBinaryFromReader(message: NetworkInterfaceSpec, reader: jspb.BinaryReader): NetworkInterfaceSpec;
}

export namespace NetworkInterfaceSpec {
    export type AsObject = {
        subnetId: string,
        primaryV4AddressSpec?: PrimaryAddressSpec.AsObject,
        primaryV6AddressSpec?: PrimaryAddressSpec.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class PrimaryAddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): PrimaryAddressSpec;

    hasOneToOneNatSpec(): boolean;
    clearOneToOneNatSpec(): void;
    getOneToOneNatSpec(): OneToOneNatSpec | undefined;
    setOneToOneNatSpec(value?: OneToOneNatSpec): PrimaryAddressSpec;
    clearDnsRecordSpecsList(): void;
    getDnsRecordSpecsList(): Array<DnsRecordSpec>;
    setDnsRecordSpecsList(value: Array<DnsRecordSpec>): PrimaryAddressSpec;
    addDnsRecordSpecs(value?: DnsRecordSpec, index?: number): DnsRecordSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimaryAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: PrimaryAddressSpec): PrimaryAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimaryAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimaryAddressSpec;
    static deserializeBinaryFromReader(message: PrimaryAddressSpec, reader: jspb.BinaryReader): PrimaryAddressSpec;
}

export namespace PrimaryAddressSpec {
    export type AsObject = {
        address: string,
        oneToOneNatSpec?: OneToOneNatSpec.AsObject,
        dnsRecordSpecsList: Array<DnsRecordSpec.AsObject>,
    }
}

export class OneToOneNatSpec extends jspb.Message { 
    getIpVersion(): yandex_cloud_compute_v1_instance_pb.IpVersion;
    setIpVersion(value: yandex_cloud_compute_v1_instance_pb.IpVersion): OneToOneNatSpec;
    getAddress(): string;
    setAddress(value: string): OneToOneNatSpec;
    clearDnsRecordSpecsList(): void;
    getDnsRecordSpecsList(): Array<DnsRecordSpec>;
    setDnsRecordSpecsList(value: Array<DnsRecordSpec>): OneToOneNatSpec;
    addDnsRecordSpecs(value?: DnsRecordSpec, index?: number): DnsRecordSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OneToOneNatSpec.AsObject;
    static toObject(includeInstance: boolean, msg: OneToOneNatSpec): OneToOneNatSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OneToOneNatSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OneToOneNatSpec;
    static deserializeBinaryFromReader(message: OneToOneNatSpec, reader: jspb.BinaryReader): OneToOneNatSpec;
}

export namespace OneToOneNatSpec {
    export type AsObject = {
        ipVersion: yandex_cloud_compute_v1_instance_pb.IpVersion,
        address: string,
        dnsRecordSpecsList: Array<DnsRecordSpec.AsObject>,
    }
}

export class DnsRecordSpec extends jspb.Message { 
    getFqdn(): string;
    setFqdn(value: string): DnsRecordSpec;
    getDnsZoneId(): string;
    setDnsZoneId(value: string): DnsRecordSpec;
    getTtl(): number;
    setTtl(value: number): DnsRecordSpec;
    getPtr(): boolean;
    setPtr(value: boolean): DnsRecordSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DnsRecordSpec.AsObject;
    static toObject(includeInstance: boolean, msg: DnsRecordSpec): DnsRecordSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DnsRecordSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DnsRecordSpec;
    static deserializeBinaryFromReader(message: DnsRecordSpec, reader: jspb.BinaryReader): DnsRecordSpec;
}

export namespace DnsRecordSpec {
    export type AsObject = {
        fqdn: string,
        dnsZoneId: string,
        ttl: number,
        ptr: boolean,
    }
}

export class MoveInstanceRequest extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): MoveInstanceRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveInstanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveInstanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveInstanceRequest): MoveInstanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveInstanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveInstanceRequest;
    static deserializeBinaryFromReader(message: MoveInstanceRequest, reader: jspb.BinaryReader): MoveInstanceRequest;
}

export namespace MoveInstanceRequest {
    export type AsObject = {
        instanceId: string,
        destinationFolderId: string,
    }
}

export class MoveInstanceMetadata extends jspb.Message { 
    getInstanceId(): string;
    setInstanceId(value: string): MoveInstanceMetadata;
    getSourceFolderId(): string;
    setSourceFolderId(value: string): MoveInstanceMetadata;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveInstanceMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveInstanceMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveInstanceMetadata): MoveInstanceMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveInstanceMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveInstanceMetadata;
    static deserializeBinaryFromReader(message: MoveInstanceMetadata, reader: jspb.BinaryReader): MoveInstanceMetadata;
}

export namespace MoveInstanceMetadata {
    export type AsObject = {
        instanceId: string,
        sourceFolderId: string,
        destinationFolderId: string,
    }
}

export enum InstanceView {
    BASIC = 0,
    FULL = 1,
}
