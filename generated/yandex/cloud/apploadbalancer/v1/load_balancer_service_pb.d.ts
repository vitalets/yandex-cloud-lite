// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/load_balancer_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_load_balancer_pb from "../../../../yandex/cloud/apploadbalancer/v1/load_balancer_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetLoadBalancerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): GetLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLoadBalancerRequest): GetLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLoadBalancerRequest;
    static deserializeBinaryFromReader(message: GetLoadBalancerRequest, reader: jspb.BinaryReader): GetLoadBalancerRequest;
}

export namespace GetLoadBalancerRequest {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class ListLoadBalancersRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListLoadBalancersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListLoadBalancersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLoadBalancersRequest;
    getFilter(): string;
    setFilter(value: string): ListLoadBalancersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoadBalancersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoadBalancersRequest): ListLoadBalancersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoadBalancersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoadBalancersRequest;
    static deserializeBinaryFromReader(message: ListLoadBalancersRequest, reader: jspb.BinaryReader): ListLoadBalancersRequest;
}

export namespace ListLoadBalancersRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListLoadBalancersResponse extends jspb.Message { 
    clearLoadBalancersList(): void;
    getLoadBalancersList(): Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer>;
    setLoadBalancersList(value: Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer>): ListLoadBalancersResponse;
    addLoadBalancers(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer, index?: number): yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLoadBalancersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoadBalancersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoadBalancersResponse): ListLoadBalancersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoadBalancersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoadBalancersResponse;
    static deserializeBinaryFromReader(message: ListLoadBalancersResponse, reader: jspb.BinaryReader): ListLoadBalancersResponse;
}

export namespace ListLoadBalancersResponse {
    export type AsObject = {
        loadBalancersList: Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer.AsObject>,
        nextPageToken: string,
    }
}

export class DeleteLoadBalancerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): DeleteLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoadBalancerRequest): DeleteLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoadBalancerRequest;
    static deserializeBinaryFromReader(message: DeleteLoadBalancerRequest, reader: jspb.BinaryReader): DeleteLoadBalancerRequest;
}

export namespace DeleteLoadBalancerRequest {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class DeleteLoadBalancerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): DeleteLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoadBalancerMetadata): DeleteLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: DeleteLoadBalancerMetadata, reader: jspb.BinaryReader): DeleteLoadBalancerMetadata;
}

export namespace DeleteLoadBalancerMetadata {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class UpdateLoadBalancerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateLoadBalancerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLoadBalancerRequest;
    getName(): string;
    setName(value: string): UpdateLoadBalancerRequest;
    getDescription(): string;
    setDescription(value: string): UpdateLoadBalancerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearListenerSpecsList(): void;
    getListenerSpecsList(): Array<ListenerSpec>;
    setListenerSpecsList(value: Array<ListenerSpec>): UpdateLoadBalancerRequest;
    addListenerSpecs(value?: ListenerSpec, index?: number): ListenerSpec;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy): UpdateLoadBalancerRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): UpdateLoadBalancerRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoadBalancerRequest): UpdateLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoadBalancerRequest;
    static deserializeBinaryFromReader(message: UpdateLoadBalancerRequest, reader: jspb.BinaryReader): UpdateLoadBalancerRequest;
}

export namespace UpdateLoadBalancerRequest {
    export type AsObject = {
        loadBalancerId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        listenerSpecsList: Array<ListenerSpec.AsObject>,
        allocationPolicy?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class UpdateLoadBalancerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoadBalancerMetadata): UpdateLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: UpdateLoadBalancerMetadata, reader: jspb.BinaryReader): UpdateLoadBalancerMetadata;
}

export namespace UpdateLoadBalancerMetadata {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class CreateLoadBalancerRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateLoadBalancerRequest;
    getName(): string;
    setName(value: string): CreateLoadBalancerRequest;
    getDescription(): string;
    setDescription(value: string): CreateLoadBalancerRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getRegionId(): string;
    setRegionId(value: string): CreateLoadBalancerRequest;
    getNetworkId(): string;
    setNetworkId(value: string): CreateLoadBalancerRequest;
    clearListenerSpecsList(): void;
    getListenerSpecsList(): Array<ListenerSpec>;
    setListenerSpecsList(value: Array<ListenerSpec>): CreateLoadBalancerRequest;
    addListenerSpecs(value?: ListenerSpec, index?: number): ListenerSpec;

    hasAllocationPolicy(): boolean;
    clearAllocationPolicy(): void;
    getAllocationPolicy(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy | undefined;
    setAllocationPolicy(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy): CreateLoadBalancerRequest;
    clearSecurityGroupIdsList(): void;
    getSecurityGroupIdsList(): Array<string>;
    setSecurityGroupIdsList(value: Array<string>): CreateLoadBalancerRequest;
    addSecurityGroupIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLoadBalancerRequest): CreateLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLoadBalancerRequest;
    static deserializeBinaryFromReader(message: CreateLoadBalancerRequest, reader: jspb.BinaryReader): CreateLoadBalancerRequest;
}

export namespace CreateLoadBalancerRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        regionId: string,
        networkId: string,
        listenerSpecsList: Array<ListenerSpec.AsObject>,
        allocationPolicy?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.AsObject,
        securityGroupIdsList: Array<string>,
    }
}

export class CreateLoadBalancerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): CreateLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLoadBalancerMetadata): CreateLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: CreateLoadBalancerMetadata, reader: jspb.BinaryReader): CreateLoadBalancerMetadata;
}

export namespace CreateLoadBalancerMetadata {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class StartLoadBalancerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): StartLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartLoadBalancerRequest): StartLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartLoadBalancerRequest;
    static deserializeBinaryFromReader(message: StartLoadBalancerRequest, reader: jspb.BinaryReader): StartLoadBalancerRequest;
}

export namespace StartLoadBalancerRequest {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class StartLoadBalancerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): StartLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StartLoadBalancerMetadata): StartLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: StartLoadBalancerMetadata, reader: jspb.BinaryReader): StartLoadBalancerMetadata;
}

export namespace StartLoadBalancerMetadata {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class StopLoadBalancerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): StopLoadBalancerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopLoadBalancerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StopLoadBalancerRequest): StopLoadBalancerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopLoadBalancerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopLoadBalancerRequest;
    static deserializeBinaryFromReader(message: StopLoadBalancerRequest, reader: jspb.BinaryReader): StopLoadBalancerRequest;
}

export namespace StopLoadBalancerRequest {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class StopLoadBalancerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): StopLoadBalancerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopLoadBalancerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: StopLoadBalancerMetadata): StopLoadBalancerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopLoadBalancerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopLoadBalancerMetadata;
    static deserializeBinaryFromReader(message: StopLoadBalancerMetadata, reader: jspb.BinaryReader): StopLoadBalancerMetadata;
}

export namespace StopLoadBalancerMetadata {
    export type AsObject = {
        loadBalancerId: string,
    }
}

export class AddListenerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): AddListenerRequest;

    hasListenerSpec(): boolean;
    clearListenerSpec(): void;
    getListenerSpec(): ListenerSpec | undefined;
    setListenerSpec(value?: ListenerSpec): AddListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddListenerRequest): AddListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddListenerRequest;
    static deserializeBinaryFromReader(message: AddListenerRequest, reader: jspb.BinaryReader): AddListenerRequest;
}

export namespace AddListenerRequest {
    export type AsObject = {
        loadBalancerId: string,
        listenerSpec?: ListenerSpec.AsObject,
    }
}

export class AddListenerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): AddListenerMetadata;
    getListenerName(): string;
    setListenerName(value: string): AddListenerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddListenerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddListenerMetadata): AddListenerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddListenerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddListenerMetadata;
    static deserializeBinaryFromReader(message: AddListenerMetadata, reader: jspb.BinaryReader): AddListenerMetadata;
}

export namespace AddListenerMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
    }
}

export class RemoveListenerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): RemoveListenerRequest;
    getName(): string;
    setName(value: string): RemoveListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveListenerRequest): RemoveListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveListenerRequest;
    static deserializeBinaryFromReader(message: RemoveListenerRequest, reader: jspb.BinaryReader): RemoveListenerRequest;
}

export namespace RemoveListenerRequest {
    export type AsObject = {
        loadBalancerId: string,
        name: string,
    }
}

export class RemoveListenerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): RemoveListenerMetadata;
    getListenerName(): string;
    setListenerName(value: string): RemoveListenerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveListenerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveListenerMetadata): RemoveListenerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveListenerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveListenerMetadata;
    static deserializeBinaryFromReader(message: RemoveListenerMetadata, reader: jspb.BinaryReader): RemoveListenerMetadata;
}

export namespace RemoveListenerMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
    }
}

export class UpdateListenerRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateListenerRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateListenerRequest;

    hasListenerSpec(): boolean;
    clearListenerSpec(): void;
    getListenerSpec(): ListenerSpec | undefined;
    setListenerSpec(value?: ListenerSpec): UpdateListenerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenerRequest): UpdateListenerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenerRequest;
    static deserializeBinaryFromReader(message: UpdateListenerRequest, reader: jspb.BinaryReader): UpdateListenerRequest;
}

export namespace UpdateListenerRequest {
    export type AsObject = {
        loadBalancerId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        listenerSpec?: ListenerSpec.AsObject,
    }
}

export class UpdateListenerMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateListenerMetadata;
    getListenerName(): string;
    setListenerName(value: string): UpdateListenerMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateListenerMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateListenerMetadata): UpdateListenerMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateListenerMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateListenerMetadata;
    static deserializeBinaryFromReader(message: UpdateListenerMetadata, reader: jspb.BinaryReader): UpdateListenerMetadata;
}

export namespace UpdateListenerMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
    }
}

export class AddressSpec extends jspb.Message { 

    hasExternalIpv4AddressSpec(): boolean;
    clearExternalIpv4AddressSpec(): void;
    getExternalIpv4AddressSpec(): ExternalIpv4AddressSpec | undefined;
    setExternalIpv4AddressSpec(value?: ExternalIpv4AddressSpec): AddressSpec;

    hasInternalIpv4AddressSpec(): boolean;
    clearInternalIpv4AddressSpec(): void;
    getInternalIpv4AddressSpec(): InternalIpv4AddressSpec | undefined;
    setInternalIpv4AddressSpec(value?: InternalIpv4AddressSpec): AddressSpec;

    hasExternalIpv6AddressSpec(): boolean;
    clearExternalIpv6AddressSpec(): void;
    getExternalIpv6AddressSpec(): ExternalIpv6AddressSpec | undefined;
    setExternalIpv6AddressSpec(value?: ExternalIpv6AddressSpec): AddressSpec;

    getAddressSpecCase(): AddressSpec.AddressSpecCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AddressSpec): AddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressSpec;
    static deserializeBinaryFromReader(message: AddressSpec, reader: jspb.BinaryReader): AddressSpec;
}

export namespace AddressSpec {
    export type AsObject = {
        externalIpv4AddressSpec?: ExternalIpv4AddressSpec.AsObject,
        internalIpv4AddressSpec?: InternalIpv4AddressSpec.AsObject,
        externalIpv6AddressSpec?: ExternalIpv6AddressSpec.AsObject,
    }

    export enum AddressSpecCase {
        ADDRESS_SPEC_NOT_SET = 0,
        EXTERNAL_IPV4_ADDRESS_SPEC = 1,
        INTERNAL_IPV4_ADDRESS_SPEC = 2,
        EXTERNAL_IPV6_ADDRESS_SPEC = 3,
    }

}

export class ExternalIpv4AddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv4AddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv4AddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv4AddressSpec): ExternalIpv4AddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv4AddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv4AddressSpec;
    static deserializeBinaryFromReader(message: ExternalIpv4AddressSpec, reader: jspb.BinaryReader): ExternalIpv4AddressSpec;
}

export namespace ExternalIpv4AddressSpec {
    export type AsObject = {
        address: string,
    }
}

export class InternalIpv4AddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): InternalIpv4AddressSpec;
    getSubnetId(): string;
    setSubnetId(value: string): InternalIpv4AddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalIpv4AddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: InternalIpv4AddressSpec): InternalIpv4AddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalIpv4AddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalIpv4AddressSpec;
    static deserializeBinaryFromReader(message: InternalIpv4AddressSpec, reader: jspb.BinaryReader): InternalIpv4AddressSpec;
}

export namespace InternalIpv4AddressSpec {
    export type AsObject = {
        address: string,
        subnetId: string,
    }
}

export class ExternalIpv6AddressSpec extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ExternalIpv6AddressSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExternalIpv6AddressSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ExternalIpv6AddressSpec): ExternalIpv6AddressSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExternalIpv6AddressSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExternalIpv6AddressSpec;
    static deserializeBinaryFromReader(message: ExternalIpv6AddressSpec, reader: jspb.BinaryReader): ExternalIpv6AddressSpec;
}

export namespace ExternalIpv6AddressSpec {
    export type AsObject = {
        address: string,
    }
}

export class EndpointSpec extends jspb.Message { 
    clearAddressSpecsList(): void;
    getAddressSpecsList(): Array<AddressSpec>;
    setAddressSpecsList(value: Array<AddressSpec>): EndpointSpec;
    addAddressSpecs(value?: AddressSpec, index?: number): AddressSpec;
    clearPortsList(): void;
    getPortsList(): Array<number>;
    setPortsList(value: Array<number>): EndpointSpec;
    addPorts(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointSpec.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointSpec): EndpointSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointSpec;
    static deserializeBinaryFromReader(message: EndpointSpec, reader: jspb.BinaryReader): EndpointSpec;
}

export namespace EndpointSpec {
    export type AsObject = {
        addressSpecsList: Array<AddressSpec.AsObject>,
        portsList: Array<number>,
    }
}

export class ListenerSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): ListenerSpec;
    clearEndpointSpecsList(): void;
    getEndpointSpecsList(): Array<EndpointSpec>;
    setEndpointSpecsList(value: Array<EndpointSpec>): ListenerSpec;
    addEndpointSpecs(value?: EndpointSpec, index?: number): EndpointSpec;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener): ListenerSpec;

    hasTls(): boolean;
    clearTls(): void;
    getTls(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener | undefined;
    setTls(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener): ListenerSpec;

    getListenerCase(): ListenerSpec.ListenerCase;

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
        endpointSpecsList: Array<EndpointSpec.AsObject>,
        http?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener.AsObject,
        tls?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener.AsObject,
    }

    export enum ListenerCase {
        LISTENER_NOT_SET = 0,
        HTTP = 3,
        TLS = 4,
    }

}

export class GetTargetStatesRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): GetTargetStatesRequest;
    getBackendGroupId(): string;
    setBackendGroupId(value: string): GetTargetStatesRequest;
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
        loadBalancerId: string,
        backendGroupId: string,
        targetGroupId: string,
    }
}

export class GetTargetStatesResponse extends jspb.Message { 
    clearTargetStatesList(): void;
    getTargetStatesList(): Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState>;
    setTargetStatesList(value: Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState>): GetTargetStatesResponse;
    addTargetStates(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState, index?: number): yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState;

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
        targetStatesList: Array<yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState.AsObject>,
    }
}

export class AddSniMatchRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): AddSniMatchRequest;
    getListenerName(): string;
    setListenerName(value: string): AddSniMatchRequest;
    getName(): string;
    setName(value: string): AddSniMatchRequest;
    clearServerNamesList(): void;
    getServerNamesList(): Array<string>;
    setServerNamesList(value: Array<string>): AddSniMatchRequest;
    addServerNames(value: string, index?: number): string;

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler | undefined;
    setHandler(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler): AddSniMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSniMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSniMatchRequest): AddSniMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSniMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSniMatchRequest;
    static deserializeBinaryFromReader(message: AddSniMatchRequest, reader: jspb.BinaryReader): AddSniMatchRequest;
}

export namespace AddSniMatchRequest {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        name: string,
        serverNamesList: Array<string>,
        handler?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.AsObject,
    }
}

export class AddSniMatchMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): AddSniMatchMetadata;
    getListenerName(): string;
    setListenerName(value: string): AddSniMatchMetadata;
    getSniMatchName(): string;
    setSniMatchName(value: string): AddSniMatchMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSniMatchMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: AddSniMatchMetadata): AddSniMatchMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSniMatchMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSniMatchMetadata;
    static deserializeBinaryFromReader(message: AddSniMatchMetadata, reader: jspb.BinaryReader): AddSniMatchMetadata;
}

export namespace AddSniMatchMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        sniMatchName: string,
    }
}

export class RemoveSniMatchRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): RemoveSniMatchRequest;
    getListenerName(): string;
    setListenerName(value: string): RemoveSniMatchRequest;
    getSniMatchName(): string;
    setSniMatchName(value: string): RemoveSniMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveSniMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveSniMatchRequest): RemoveSniMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveSniMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveSniMatchRequest;
    static deserializeBinaryFromReader(message: RemoveSniMatchRequest, reader: jspb.BinaryReader): RemoveSniMatchRequest;
}

export namespace RemoveSniMatchRequest {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        sniMatchName: string,
    }
}

export class RemoveSniMatchMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): RemoveSniMatchMetadata;
    getListenerName(): string;
    setListenerName(value: string): RemoveSniMatchMetadata;
    getSniMatchName(): string;
    setSniMatchName(value: string): RemoveSniMatchMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveSniMatchMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveSniMatchMetadata): RemoveSniMatchMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveSniMatchMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveSniMatchMetadata;
    static deserializeBinaryFromReader(message: RemoveSniMatchMetadata, reader: jspb.BinaryReader): RemoveSniMatchMetadata;
}

export namespace RemoveSniMatchMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        sniMatchName: string,
    }
}

export class UpdateSniMatchRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateSniMatchRequest;
    getListenerName(): string;
    setListenerName(value: string): UpdateSniMatchRequest;
    getName(): string;
    setName(value: string): UpdateSniMatchRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSniMatchRequest;
    clearServerNamesList(): void;
    getServerNamesList(): Array<string>;
    setServerNamesList(value: Array<string>): UpdateSniMatchRequest;
    addServerNames(value: string, index?: number): string;

    hasHandler(): boolean;
    clearHandler(): void;
    getHandler(): yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler | undefined;
    setHandler(value?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler): UpdateSniMatchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSniMatchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSniMatchRequest): UpdateSniMatchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSniMatchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSniMatchRequest;
    static deserializeBinaryFromReader(message: UpdateSniMatchRequest, reader: jspb.BinaryReader): UpdateSniMatchRequest;
}

export namespace UpdateSniMatchRequest {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        name: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        serverNamesList: Array<string>,
        handler?: yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.AsObject,
    }
}

export class UpdateSniMatchMetadata extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): UpdateSniMatchMetadata;
    getListenerName(): string;
    setListenerName(value: string): UpdateSniMatchMetadata;
    getSniMatchName(): string;
    setSniMatchName(value: string): UpdateSniMatchMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSniMatchMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSniMatchMetadata): UpdateSniMatchMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSniMatchMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSniMatchMetadata;
    static deserializeBinaryFromReader(message: UpdateSniMatchMetadata, reader: jspb.BinaryReader): UpdateSniMatchMetadata;
}

export namespace UpdateSniMatchMetadata {
    export type AsObject = {
        loadBalancerId: string,
        listenerName: string,
        sniMatchName: string,
    }
}

export class ListLoadBalancerOperationsRequest extends jspb.Message { 
    getLoadBalancerId(): string;
    setLoadBalancerId(value: string): ListLoadBalancerOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListLoadBalancerOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListLoadBalancerOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoadBalancerOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoadBalancerOperationsRequest): ListLoadBalancerOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoadBalancerOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoadBalancerOperationsRequest;
    static deserializeBinaryFromReader(message: ListLoadBalancerOperationsRequest, reader: jspb.BinaryReader): ListLoadBalancerOperationsRequest;
}

export namespace ListLoadBalancerOperationsRequest {
    export type AsObject = {
        loadBalancerId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListLoadBalancerOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListLoadBalancerOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListLoadBalancerOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoadBalancerOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoadBalancerOperationsResponse): ListLoadBalancerOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoadBalancerOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoadBalancerOperationsResponse;
    static deserializeBinaryFromReader(message: ListLoadBalancerOperationsResponse, reader: jspb.BinaryReader): ListLoadBalancerOperationsResponse;
}

export namespace ListLoadBalancerOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}
