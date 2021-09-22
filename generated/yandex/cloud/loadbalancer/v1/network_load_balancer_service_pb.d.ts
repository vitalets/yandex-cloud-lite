// package: yandex.cloud.loadbalancer.v1
// file: yandex/cloud/loadbalancer/v1/network_load_balancer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_loadbalancer_v1_network_load_balancer_pb from "../../../../yandex/cloud/loadbalancer/v1/network_load_balancer_pb";

export class GetNetworkLoadBalancerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): GetNetworkLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkLoadBalancerRequest): GetNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: GetNetworkLoadBalancerRequest, reader: jspb.BinaryReader): GetNetworkLoadBalancerRequest;
}

export namespace GetNetworkLoadBalancerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class ListNetworkLoadBalancersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListNetworkLoadBalancersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkLoadBalancersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkLoadBalancersRequest;
    getFilter(): string;
    setFilter(value: string): ListNetworkLoadBalancersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkLoadBalancersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkLoadBalancersRequest): ListNetworkLoadBalancersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkLoadBalancersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkLoadBalancersRequest;
    static deserializeBinaryFromReader(message: ListNetworkLoadBalancersRequest, reader: jspb.BinaryReader): ListNetworkLoadBalancersRequest;
}

export namespace ListNetworkLoadBalancersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListNetworkLoadBalancersResponse extends jspb.Message { 
    clearNetworkLoadBalancersList(): void;
    getNetworkLoadBalancersList(): Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer>;
    setNetworkLoadBalancersList(value: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer>): ListNetworkLoadBalancersResponse;
    addNetworkLoadBalancers(value?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer, index?: number): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkLoadBalancersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkLoadBalancersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkLoadBalancersResponse): ListNetworkLoadBalancersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkLoadBalancersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkLoadBalancersResponse;
    static deserializeBinaryFromReader(message: ListNetworkLoadBalancersResponse, reader: jspb.BinaryReader): ListNetworkLoadBalancersResponse;
}

export namespace ListNetworkLoadBalancersResponse {
    export type AsObject = {
        networkLoadBalancersList: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer.AsObject>,
        nextPageToken: string,
    }
}

export class CreateNetworkLoadBalancerRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateNetworkLoadBalancerRequest;
    getName(): string;
    setName(value: string): CreateNetworkLoadBalancerRequest;
    getDescription(): string;
    setDescription(value: string): CreateNetworkLoadBalancerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getRegionId(): string;
    setRegionId(value: string): CreateNetworkLoadBalancerRequest;
    getType(): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer.Type;
    setType(value: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer.Type): CreateNetworkLoadBalancerRequest;
    clearListenerSpecsList(): void;
    getListenerSpecsList(): Array<ListenerSpec>;
    setListenerSpecsList(value: Array<ListenerSpec>): CreateNetworkLoadBalancerRequest;
    addListenerSpecs(value?: ListenerSpec, index?: number): ListenerSpec;
    clearAttachedTargetGroupsList(): void;
    getAttachedTargetGroupsList(): Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup>;
    setAttachedTargetGroupsList(value: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup>): CreateNetworkLoadBalancerRequest;
    addAttachedTargetGroups(value?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup, index?: number): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkLoadBalancerRequest): CreateNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: CreateNetworkLoadBalancerRequest, reader: jspb.BinaryReader): CreateNetworkLoadBalancerRequest;
}

export namespace CreateNetworkLoadBalancerRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        regionId: string,
        type: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer.Type,
        listenerSpecsList: Array<ListenerSpec.AsObject>,
        attachedTargetGroupsList: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup.AsObject>,
    }
}

export class CreateNetworkLoadBalancerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): CreateNetworkLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkLoadBalancerMetadata): CreateNetworkLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: CreateNetworkLoadBalancerMetadata, reader: jspb.BinaryReader): CreateNetworkLoadBalancerMetadata;
}

export namespace CreateNetworkLoadBalancerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class UpdateNetworkLoadBalancerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): UpdateNetworkLoadBalancerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNetworkLoadBalancerRequest;
    getName(): string;
    setName(value: string): UpdateNetworkLoadBalancerRequest;
    getDescription(): string;
    setDescription(value: string): UpdateNetworkLoadBalancerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearListenerSpecsList(): void;
    getListenerSpecsList(): Array<ListenerSpec>;
    setListenerSpecsList(value: Array<ListenerSpec>): UpdateNetworkLoadBalancerRequest;
    addListenerSpecs(value?: ListenerSpec, index?: number): ListenerSpec;
    clearAttachedTargetGroupsList(): void;
    getAttachedTargetGroupsList(): Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup>;
    setAttachedTargetGroupsList(value: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup>): UpdateNetworkLoadBalancerRequest;
    addAttachedTargetGroups(value?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup, index?: number): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNetworkLoadBalancerRequest): UpdateNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: UpdateNetworkLoadBalancerRequest, reader: jspb.BinaryReader): UpdateNetworkLoadBalancerRequest;
}

export namespace UpdateNetworkLoadBalancerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        listenerSpecsList: Array<ListenerSpec.AsObject>,
        attachedTargetGroupsList: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup.AsObject>,
    }
}

export class UpdateNetworkLoadBalancerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): UpdateNetworkLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNetworkLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNetworkLoadBalancerMetadata): UpdateNetworkLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNetworkLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNetworkLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: UpdateNetworkLoadBalancerMetadata, reader: jspb.BinaryReader): UpdateNetworkLoadBalancerMetadata;
}

export namespace UpdateNetworkLoadBalancerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class DeleteNetworkLoadBalancerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): DeleteNetworkLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNetworkLoadBalancerRequest): DeleteNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: DeleteNetworkLoadBalancerRequest, reader: jspb.BinaryReader): DeleteNetworkLoadBalancerRequest;
}

export namespace DeleteNetworkLoadBalancerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class DeleteNetworkLoadBalancerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): DeleteNetworkLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNetworkLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNetworkLoadBalancerMetadata): DeleteNetworkLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNetworkLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNetworkLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: DeleteNetworkLoadBalancerMetadata, reader: jspb.BinaryReader): DeleteNetworkLoadBalancerMetadata;
}

export namespace DeleteNetworkLoadBalancerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class StartNetworkLoadBalancerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): StartNetworkLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartNetworkLoadBalancerRequest): StartNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: StartNetworkLoadBalancerRequest, reader: jspb.BinaryReader): StartNetworkLoadBalancerRequest;
}

export namespace StartNetworkLoadBalancerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class StartNetworkLoadBalancerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): StartNetworkLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartNetworkLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartNetworkLoadBalancerMetadata): StartNetworkLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartNetworkLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartNetworkLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: StartNetworkLoadBalancerMetadata, reader: jspb.BinaryReader): StartNetworkLoadBalancerMetadata;
}

export namespace StartNetworkLoadBalancerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class StopNetworkLoadBalancerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): StopNetworkLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopNetworkLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopNetworkLoadBalancerRequest): StopNetworkLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopNetworkLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopNetworkLoadBalancerRequest;
    static deserializeBinaryFromReader(message: StopNetworkLoadBalancerRequest, reader: jspb.BinaryReader): StopNetworkLoadBalancerRequest;
}

export namespace StopNetworkLoadBalancerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class StopNetworkLoadBalancerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): StopNetworkLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopNetworkLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopNetworkLoadBalancerMetadata): StopNetworkLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopNetworkLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopNetworkLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: StopNetworkLoadBalancerMetadata, reader: jspb.BinaryReader): StopNetworkLoadBalancerMetadata;
}

export namespace StopNetworkLoadBalancerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class AttachNetworkLoadBalancerTargetGroupRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): AttachNetworkLoadBalancerTargetGroupRequest;

    hasAttachedTargetGroup(): boolean;
    clearAttachedTargetGroup(): void;
    getAttachedTargetGroup(): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup | undefined;
    setAttachedTargetGroup(value?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup): AttachNetworkLoadBalancerTargetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachNetworkLoadBalancerTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AttachNetworkLoadBalancerTargetGroupRequest): AttachNetworkLoadBalancerTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachNetworkLoadBalancerTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachNetworkLoadBalancerTargetGroupRequest;
    static deserializeBinaryFromReader(message: AttachNetworkLoadBalancerTargetGroupRequest, reader: jspb.BinaryReader): AttachNetworkLoadBalancerTargetGroupRequest;
}

export namespace AttachNetworkLoadBalancerTargetGroupRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        attachedTargetGroup?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.AttachedTargetGroup.AsObject,
    }
}

export class AttachNetworkLoadBalancerTargetGroupMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): AttachNetworkLoadBalancerTargetGroupMetadata;
    getTargetGroupId(): string;
    setTargetGroupId(value: string): AttachNetworkLoadBalancerTargetGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttachNetworkLoadBalancerTargetGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AttachNetworkLoadBalancerTargetGroupMetadata): AttachNetworkLoadBalancerTargetGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttachNetworkLoadBalancerTargetGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttachNetworkLoadBalancerTargetGroupMetadata;
    static deserializeBinaryFromReader(message: AttachNetworkLoadBalancerTargetGroupMetadata, reader: jspb.BinaryReader): AttachNetworkLoadBalancerTargetGroupMetadata;
}

export namespace AttachNetworkLoadBalancerTargetGroupMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
        targetGroupId: string,
    }
}

export class DetachNetworkLoadBalancerTargetGroupRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): DetachNetworkLoadBalancerTargetGroupRequest;
    getTargetGroupId(): string;
    setTargetGroupId(value: string): DetachNetworkLoadBalancerTargetGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachNetworkLoadBalancerTargetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetachNetworkLoadBalancerTargetGroupRequest): DetachNetworkLoadBalancerTargetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachNetworkLoadBalancerTargetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachNetworkLoadBalancerTargetGroupRequest;
    static deserializeBinaryFromReader(message: DetachNetworkLoadBalancerTargetGroupRequest, reader: jspb.BinaryReader): DetachNetworkLoadBalancerTargetGroupRequest;
}

export namespace DetachNetworkLoadBalancerTargetGroupRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        targetGroupId: string,
    }
}

export class DetachNetworkLoadBalancerTargetGroupMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): DetachNetworkLoadBalancerTargetGroupMetadata;
    getTargetGroupId(): string;
    setTargetGroupId(value: string): DetachNetworkLoadBalancerTargetGroupMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetachNetworkLoadBalancerTargetGroupMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DetachNetworkLoadBalancerTargetGroupMetadata): DetachNetworkLoadBalancerTargetGroupMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetachNetworkLoadBalancerTargetGroupMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetachNetworkLoadBalancerTargetGroupMetadata;
    static deserializeBinaryFromReader(message: DetachNetworkLoadBalancerTargetGroupMetadata, reader: jspb.BinaryReader): DetachNetworkLoadBalancerTargetGroupMetadata;
}

export namespace DetachNetworkLoadBalancerTargetGroupMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
        targetGroupId: string,
    }
}

export class AddNetworkLoadBalancerListenerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): AddNetworkLoadBalancerListenerRequest;

    hasListenerSpec(): boolean;
    clearListenerSpec(): void;
    getListenerSpec(): ListenerSpec | undefined;
    setListenerSpec(value?: ListenerSpec): AddNetworkLoadBalancerListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddNetworkLoadBalancerListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddNetworkLoadBalancerListenerRequest): AddNetworkLoadBalancerListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddNetworkLoadBalancerListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddNetworkLoadBalancerListenerRequest;
    static deserializeBinaryFromReader(message: AddNetworkLoadBalancerListenerRequest, reader: jspb.BinaryReader): AddNetworkLoadBalancerListenerRequest;
}

export namespace AddNetworkLoadBalancerListenerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        listenerSpec?: ListenerSpec.AsObject,
    }
}

export class AddNetworkLoadBalancerListenerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): AddNetworkLoadBalancerListenerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddNetworkLoadBalancerListenerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddNetworkLoadBalancerListenerMetadata): AddNetworkLoadBalancerListenerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddNetworkLoadBalancerListenerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddNetworkLoadBalancerListenerMetadata;
    static deserializeBinaryFromReader(message: AddNetworkLoadBalancerListenerMetadata, reader: jspb.BinaryReader): AddNetworkLoadBalancerListenerMetadata;
}

export namespace AddNetworkLoadBalancerListenerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class RemoveNetworkLoadBalancerListenerRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): RemoveNetworkLoadBalancerListenerRequest;
    getListenerName(): string;
    setListenerName(value: string): RemoveNetworkLoadBalancerListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNetworkLoadBalancerListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNetworkLoadBalancerListenerRequest): RemoveNetworkLoadBalancerListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNetworkLoadBalancerListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNetworkLoadBalancerListenerRequest;
    static deserializeBinaryFromReader(message: RemoveNetworkLoadBalancerListenerRequest, reader: jspb.BinaryReader): RemoveNetworkLoadBalancerListenerRequest;
}

export namespace RemoveNetworkLoadBalancerListenerRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        listenerName: string,
    }
}

export class RemoveNetworkLoadBalancerListenerMetadata extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): RemoveNetworkLoadBalancerListenerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNetworkLoadBalancerListenerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNetworkLoadBalancerListenerMetadata): RemoveNetworkLoadBalancerListenerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNetworkLoadBalancerListenerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNetworkLoadBalancerListenerMetadata;
    static deserializeBinaryFromReader(message: RemoveNetworkLoadBalancerListenerMetadata, reader: jspb.BinaryReader): RemoveNetworkLoadBalancerListenerMetadata;
}

export namespace RemoveNetworkLoadBalancerListenerMetadata {
    export type AsObject = {
        networkLoadBalancerId: string,
    }
}

export class ListNetworkLoadBalancerOperationsRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): ListNetworkLoadBalancerOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkLoadBalancerOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkLoadBalancerOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkLoadBalancerOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkLoadBalancerOperationsRequest): ListNetworkLoadBalancerOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkLoadBalancerOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkLoadBalancerOperationsRequest;
    static deserializeBinaryFromReader(message: ListNetworkLoadBalancerOperationsRequest, reader: jspb.BinaryReader): ListNetworkLoadBalancerOperationsRequest;
}

export namespace ListNetworkLoadBalancerOperationsRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworkLoadBalancerOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListNetworkLoadBalancerOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkLoadBalancerOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkLoadBalancerOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkLoadBalancerOperationsResponse): ListNetworkLoadBalancerOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkLoadBalancerOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkLoadBalancerOperationsResponse;
    static deserializeBinaryFromReader(message: ListNetworkLoadBalancerOperationsResponse, reader: jspb.BinaryReader): ListNetworkLoadBalancerOperationsResponse;
}

export namespace ListNetworkLoadBalancerOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class GetTargetStatesRequest extends jspb.Message { 
    getNetworkLoadBalancerId(): string;
    setNetworkLoadBalancerId(value: string): GetTargetStatesRequest;
    getTargetGroupId(): string;
    setTargetGroupId(value: string): GetTargetStatesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTargetStatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTargetStatesRequest): GetTargetStatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTargetStatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTargetStatesRequest;
    static deserializeBinaryFromReader(message: GetTargetStatesRequest, reader: jspb.BinaryReader): GetTargetStatesRequest;
}

export namespace GetTargetStatesRequest {
    export type AsObject = {
        networkLoadBalancerId: string,
        targetGroupId: string,
    }
}

export class GetTargetStatesResponse extends jspb.Message { 
    clearTargetStatesList(): void;
    getTargetStatesList(): Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.TargetState>;
    setTargetStatesList(value: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.TargetState>): GetTargetStatesResponse;
    addTargetStates(value?: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.TargetState, index?: number): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.TargetState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTargetStatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTargetStatesResponse): GetTargetStatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTargetStatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTargetStatesResponse;
    static deserializeBinaryFromReader(message: GetTargetStatesResponse, reader: jspb.BinaryReader): GetTargetStatesResponse;
}

export namespace GetTargetStatesResponse {
    export type AsObject = {
        targetStatesList: Array<yandex_cloud_loadbalancer_v1_network_load_balancer_pb.TargetState.AsObject>,
    }
}

export class ExternalAddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalAddressSpec;
    getIpVersion(): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion;
    setIpVersion(value: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion): ExternalAddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalAddressSpec): ExternalAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalAddressSpec;
    static deserializeBinaryFromReader(message: ExternalAddressSpec, reader: jspb.BinaryReader): ExternalAddressSpec;
}

export namespace ExternalAddressSpec {
    export type AsObject = {
        address: string,
        ipVersion: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion,
    }
}

export class InternalAddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): InternalAddressSpec;
    getSubnetId(): string;
    setSubnetId(value: string): InternalAddressSpec;
    getIpVersion(): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion;
    setIpVersion(value: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion): InternalAddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalAddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: InternalAddressSpec): InternalAddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalAddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalAddressSpec;
    static deserializeBinaryFromReader(message: InternalAddressSpec, reader: jspb.BinaryReader): InternalAddressSpec;
}

export namespace InternalAddressSpec {
    export type AsObject = {
        address: string,
        subnetId: string,
        ipVersion: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.IpVersion,
    }
}

export class ListenerSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): ListenerSpec;
    getPort(): number;
    setPort(value: number): ListenerSpec;
    getProtocol(): yandex_cloud_loadbalancer_v1_network_load_balancer_pb.Listener.Protocol;
    setProtocol(value: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.Listener.Protocol): ListenerSpec;

    hasExternalAddressSpec(): boolean;
    clearExternalAddressSpec(): void;
    getExternalAddressSpec(): ExternalAddressSpec | undefined;
    setExternalAddressSpec(value?: ExternalAddressSpec): ListenerSpec;

    hasInternalAddressSpec(): boolean;
    clearInternalAddressSpec(): void;
    getInternalAddressSpec(): InternalAddressSpec | undefined;
    setInternalAddressSpec(value?: InternalAddressSpec): ListenerSpec;
    getTargetPort(): number;
    setTargetPort(value: number): ListenerSpec;

    getAddressCase(): ListenerSpec.AddressCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListenerSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ListenerSpec): ListenerSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListenerSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListenerSpec;
    static deserializeBinaryFromReader(message: ListenerSpec, reader: jspb.BinaryReader): ListenerSpec;
}

export namespace ListenerSpec {
    export type AsObject = {
        name: string,
        port: number,
        protocol: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.Listener.Protocol,
        externalAddressSpec?: ExternalAddressSpec.AsObject,
        internalAddressSpec?: InternalAddressSpec.AsObject,
        targetPort: number,
    }

    export enum AddressCase {
        ADDRESS_NOT_SET = 0,
        EXTERNAL_ADDRESS_SPEC = 4,
        INTERNAL_ADDRESS_SPEC = 6,
    }

}
