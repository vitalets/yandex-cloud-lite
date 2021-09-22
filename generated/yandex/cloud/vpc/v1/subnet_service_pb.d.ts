// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/subnet_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_subnet_pb from "../../../../yandex/cloud/vpc/v1/subnet_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_reference_reference_pb from "../../../../yandex/cloud/reference/reference_pb";

export class GetSubnetRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): GetSubnetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSubnetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSubnetRequest): GetSubnetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSubnetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSubnetRequest;
    static deserializeBinaryFromReader(message: GetSubnetRequest, reader: jspb.BinaryReader): GetSubnetRequest;
}

export namespace GetSubnetRequest {
    export type AsObject = {
        subnetId: string,
    }
}

export class ListSubnetsRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListSubnetsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSubnetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSubnetsRequest;
    getFilter(): string;
    setFilter(value: string): ListSubnetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubnetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubnetsRequest): ListSubnetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubnetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubnetsRequest;
    static deserializeBinaryFromReader(message: ListSubnetsRequest, reader: jspb.BinaryReader): ListSubnetsRequest;
}

export namespace ListSubnetsRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListSubnetsResponse extends jspb.Message { 
    clearSubnetsList(): void;
    getSubnetsList(): Array<yandex_cloud_vpc_v1_subnet_pb.Subnet>;
    setSubnetsList(value: Array<yandex_cloud_vpc_v1_subnet_pb.Subnet>): ListSubnetsResponse;
    addSubnets(value?: yandex_cloud_vpc_v1_subnet_pb.Subnet, index?: number): yandex_cloud_vpc_v1_subnet_pb.Subnet;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSubnetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubnetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubnetsResponse): ListSubnetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubnetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubnetsResponse;
    static deserializeBinaryFromReader(message: ListSubnetsResponse, reader: jspb.BinaryReader): ListSubnetsResponse;
}

export namespace ListSubnetsResponse {
    export type AsObject = {
        subnetsList: Array<yandex_cloud_vpc_v1_subnet_pb.Subnet.AsObject>,
        nextPageToken: string,
    }
}

export class CreateSubnetRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateSubnetRequest;
    getName(): string;
    setName(value: string): CreateSubnetRequest;
    getDescription(): string;
    setDescription(value: string): CreateSubnetRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): CreateSubnetRequest;
    getZoneId(): string;
    setZoneId(value: string): CreateSubnetRequest;
    clearV4CidrBlocksList(): void;
    getV4CidrBlocksList(): Array<string>;
    setV4CidrBlocksList(value: Array<string>): CreateSubnetRequest;
    addV4CidrBlocks(value: string, index?: number): string;
    getRouteTableId(): string;
    setRouteTableId(value: string): CreateSubnetRequest;

    hasDhcpOptions(): boolean;
    clearDhcpOptions(): void;
    getDhcpOptions(): yandex_cloud_vpc_v1_subnet_pb.DhcpOptions | undefined;
    setDhcpOptions(value?: yandex_cloud_vpc_v1_subnet_pb.DhcpOptions): CreateSubnetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubnetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubnetRequest): CreateSubnetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubnetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubnetRequest;
    static deserializeBinaryFromReader(message: CreateSubnetRequest, reader: jspb.BinaryReader): CreateSubnetRequest;
}

export namespace CreateSubnetRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        zoneId: string,
        v4CidrBlocksList: Array<string>,
        routeTableId: string,
        dhcpOptions?: yandex_cloud_vpc_v1_subnet_pb.DhcpOptions.AsObject,
    }
}

export class CreateSubnetMetadata extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): CreateSubnetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSubnetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSubnetMetadata): CreateSubnetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSubnetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSubnetMetadata;
    static deserializeBinaryFromReader(message: CreateSubnetMetadata, reader: jspb.BinaryReader): CreateSubnetMetadata;
}

export namespace CreateSubnetMetadata {
    export type AsObject = {
        subnetId: string,
    }
}

export class UpdateSubnetRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): UpdateSubnetRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSubnetRequest;
    getName(): string;
    setName(value: string): UpdateSubnetRequest;
    getDescription(): string;
    setDescription(value: string): UpdateSubnetRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getRouteTableId(): string;
    setRouteTableId(value: string): UpdateSubnetRequest;

    hasDhcpOptions(): boolean;
    clearDhcpOptions(): void;
    getDhcpOptions(): yandex_cloud_vpc_v1_subnet_pb.DhcpOptions | undefined;
    setDhcpOptions(value?: yandex_cloud_vpc_v1_subnet_pb.DhcpOptions): UpdateSubnetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubnetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubnetRequest): UpdateSubnetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubnetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubnetRequest;
    static deserializeBinaryFromReader(message: UpdateSubnetRequest, reader: jspb.BinaryReader): UpdateSubnetRequest;
}

export namespace UpdateSubnetRequest {
    export type AsObject = {
        subnetId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        routeTableId: string,
        dhcpOptions?: yandex_cloud_vpc_v1_subnet_pb.DhcpOptions.AsObject,
    }
}

export class UpdateSubnetMetadata extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): UpdateSubnetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSubnetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSubnetMetadata): UpdateSubnetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSubnetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSubnetMetadata;
    static deserializeBinaryFromReader(message: UpdateSubnetMetadata, reader: jspb.BinaryReader): UpdateSubnetMetadata;
}

export namespace UpdateSubnetMetadata {
    export type AsObject = {
        subnetId: string,
    }
}

export class DeleteSubnetRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): DeleteSubnetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSubnetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSubnetRequest): DeleteSubnetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSubnetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSubnetRequest;
    static deserializeBinaryFromReader(message: DeleteSubnetRequest, reader: jspb.BinaryReader): DeleteSubnetRequest;
}

export namespace DeleteSubnetRequest {
    export type AsObject = {
        subnetId: string,
    }
}

export class DeleteSubnetMetadata extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): DeleteSubnetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSubnetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSubnetMetadata): DeleteSubnetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSubnetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSubnetMetadata;
    static deserializeBinaryFromReader(message: DeleteSubnetMetadata, reader: jspb.BinaryReader): DeleteSubnetMetadata;
}

export namespace DeleteSubnetMetadata {
    export type AsObject = {
        subnetId: string,
    }
}

export class ListSubnetOperationsRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): ListSubnetOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListSubnetOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListSubnetOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubnetOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubnetOperationsRequest): ListSubnetOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubnetOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubnetOperationsRequest;
    static deserializeBinaryFromReader(message: ListSubnetOperationsRequest, reader: jspb.BinaryReader): ListSubnetOperationsRequest;
}

export namespace ListSubnetOperationsRequest {
    export type AsObject = {
        subnetId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListSubnetOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListSubnetOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListSubnetOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubnetOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubnetOperationsResponse): ListSubnetOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubnetOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubnetOperationsResponse;
    static deserializeBinaryFromReader(message: ListSubnetOperationsResponse, reader: jspb.BinaryReader): ListSubnetOperationsResponse;
}

export namespace ListSubnetOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class MoveSubnetRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): MoveSubnetRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveSubnetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSubnetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSubnetRequest): MoveSubnetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSubnetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSubnetRequest;
    static deserializeBinaryFromReader(message: MoveSubnetRequest, reader: jspb.BinaryReader): MoveSubnetRequest;
}

export namespace MoveSubnetRequest {
    export type AsObject = {
        subnetId: string,
        destinationFolderId: string,
    }
}

export class MoveSubnetMetadata extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): MoveSubnetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSubnetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSubnetMetadata): MoveSubnetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSubnetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSubnetMetadata;
    static deserializeBinaryFromReader(message: MoveSubnetMetadata, reader: jspb.BinaryReader): MoveSubnetMetadata;
}

export namespace MoveSubnetMetadata {
    export type AsObject = {
        subnetId: string,
    }
}

export class ListUsedAddressesRequest extends jspb.Message { 
    getSubnetId(): string;
    setSubnetId(value: string): ListUsedAddressesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListUsedAddressesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListUsedAddressesRequest;
    getFilter(): string;
    setFilter(value: string): ListUsedAddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsedAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsedAddressesRequest): ListUsedAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsedAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsedAddressesRequest;
    static deserializeBinaryFromReader(message: ListUsedAddressesRequest, reader: jspb.BinaryReader): ListUsedAddressesRequest;
}

export namespace ListUsedAddressesRequest {
    export type AsObject = {
        subnetId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListUsedAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<UsedAddress>;
    setAddressesList(value: Array<UsedAddress>): ListUsedAddressesResponse;
    addAddresses(value?: UsedAddress, index?: number): UsedAddress;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUsedAddressesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsedAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsedAddressesResponse): ListUsedAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsedAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsedAddressesResponse;
    static deserializeBinaryFromReader(message: ListUsedAddressesResponse, reader: jspb.BinaryReader): ListUsedAddressesResponse;
}

export namespace ListUsedAddressesResponse {
    export type AsObject = {
        addressesList: Array<UsedAddress.AsObject>,
        nextPageToken: string,
    }
}

export class UsedAddress extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): UsedAddress;
    getIpVersion(): yandex_cloud_vpc_v1_subnet_pb.IpVersion;
    setIpVersion(value: yandex_cloud_vpc_v1_subnet_pb.IpVersion): UsedAddress;
    clearReferencesList(): void;
    getReferencesList(): Array<yandex_cloud_reference_reference_pb.Reference>;
    setReferencesList(value: Array<yandex_cloud_reference_reference_pb.Reference>): UsedAddress;
    addReferences(value?: yandex_cloud_reference_reference_pb.Reference, index?: number): yandex_cloud_reference_reference_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsedAddress.AsObject;
    static toObject(includeInstance: boolean, msg: UsedAddress): UsedAddress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsedAddress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsedAddress;
    static deserializeBinaryFromReader(message: UsedAddress, reader: jspb.BinaryReader): UsedAddress;
}

export namespace UsedAddress {
    export type AsObject = {
        address: string,
        ipVersion: yandex_cloud_vpc_v1_subnet_pb.IpVersion,
        referencesList: Array<yandex_cloud_reference_reference_pb.Reference.AsObject>,
    }
}
