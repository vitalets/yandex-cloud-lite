// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/network_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_network_pb from "../../../../yandex/cloud/vpc/v1/network_pb";
import * as yandex_cloud_vpc_v1_subnet_pb from "../../../../yandex/cloud/vpc/v1/subnet_pb";
import * as yandex_cloud_vpc_v1_security_group_pb from "../../../../yandex/cloud/vpc/v1/security_group_pb";
import * as yandex_cloud_vpc_v1_route_table_pb from "../../../../yandex/cloud/vpc/v1/route_table_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetNetworkRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): GetNetworkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkRequest): GetNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkRequest;
    static deserializeBinaryFromReader(message: GetNetworkRequest, reader: jspb.BinaryReader): GetNetworkRequest;
}

export namespace GetNetworkRequest {
    export type AsObject = {
        networkId: string,
    }
}

export class ListNetworksRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListNetworksRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworksRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworksRequest;
    getFilter(): string;
    setFilter(value: string): ListNetworksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworksRequest): ListNetworksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworksRequest;
    static deserializeBinaryFromReader(message: ListNetworksRequest, reader: jspb.BinaryReader): ListNetworksRequest;
}

export namespace ListNetworksRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListNetworksResponse extends jspb.Message { 
    clearNetworksList(): void;
    getNetworksList(): Array<yandex_cloud_vpc_v1_network_pb.Network>;
    setNetworksList(value: Array<yandex_cloud_vpc_v1_network_pb.Network>): ListNetworksResponse;
    addNetworks(value?: yandex_cloud_vpc_v1_network_pb.Network, index?: number): yandex_cloud_vpc_v1_network_pb.Network;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworksResponse): ListNetworksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworksResponse;
    static deserializeBinaryFromReader(message: ListNetworksResponse, reader: jspb.BinaryReader): ListNetworksResponse;
}

export namespace ListNetworksResponse {
    export type AsObject = {
        networksList: Array<yandex_cloud_vpc_v1_network_pb.Network.AsObject>,
        nextPageToken: string,
    }
}

export class CreateNetworkRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateNetworkRequest;
    getName(): string;
    setName(value: string): CreateNetworkRequest;
    getDescription(): string;
    setDescription(value: string): CreateNetworkRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkRequest): CreateNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkRequest;
    static deserializeBinaryFromReader(message: CreateNetworkRequest, reader: jspb.BinaryReader): CreateNetworkRequest;
}

export namespace CreateNetworkRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class CreateNetworkMetadata extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): CreateNetworkMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkMetadata): CreateNetworkMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkMetadata;
    static deserializeBinaryFromReader(message: CreateNetworkMetadata, reader: jspb.BinaryReader): CreateNetworkMetadata;
}

export namespace CreateNetworkMetadata {
    export type AsObject = {
        networkId: string,
    }
}

export class UpdateNetworkRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): UpdateNetworkRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateNetworkRequest;
    getName(): string;
    setName(value: string): UpdateNetworkRequest;
    getDescription(): string;
    setDescription(value: string): UpdateNetworkRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNetworkRequest): UpdateNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNetworkRequest;
    static deserializeBinaryFromReader(message: UpdateNetworkRequest, reader: jspb.BinaryReader): UpdateNetworkRequest;
}

export namespace UpdateNetworkRequest {
    export type AsObject = {
        networkId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
    }
}

export class UpdateNetworkMetadata extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): UpdateNetworkMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNetworkMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNetworkMetadata): UpdateNetworkMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNetworkMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNetworkMetadata;
    static deserializeBinaryFromReader(message: UpdateNetworkMetadata, reader: jspb.BinaryReader): UpdateNetworkMetadata;
}

export namespace UpdateNetworkMetadata {
    export type AsObject = {
        networkId: string,
    }
}

export class DeleteNetworkRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): DeleteNetworkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNetworkRequest): DeleteNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNetworkRequest;
    static deserializeBinaryFromReader(message: DeleteNetworkRequest, reader: jspb.BinaryReader): DeleteNetworkRequest;
}

export namespace DeleteNetworkRequest {
    export type AsObject = {
        networkId: string,
    }
}

export class DeleteNetworkMetadata extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): DeleteNetworkMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteNetworkMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteNetworkMetadata): DeleteNetworkMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteNetworkMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteNetworkMetadata;
    static deserializeBinaryFromReader(message: DeleteNetworkMetadata, reader: jspb.BinaryReader): DeleteNetworkMetadata;
}

export namespace DeleteNetworkMetadata {
    export type AsObject = {
        networkId: string,
    }
}

export class ListNetworkSubnetsRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): ListNetworkSubnetsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkSubnetsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkSubnetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkSubnetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkSubnetsRequest): ListNetworkSubnetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkSubnetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkSubnetsRequest;
    static deserializeBinaryFromReader(message: ListNetworkSubnetsRequest, reader: jspb.BinaryReader): ListNetworkSubnetsRequest;
}

export namespace ListNetworkSubnetsRequest {
    export type AsObject = {
        networkId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworkSubnetsResponse extends jspb.Message { 
    clearSubnetsList(): void;
    getSubnetsList(): Array<yandex_cloud_vpc_v1_subnet_pb.Subnet>;
    setSubnetsList(value: Array<yandex_cloud_vpc_v1_subnet_pb.Subnet>): ListNetworkSubnetsResponse;
    addSubnets(value?: yandex_cloud_vpc_v1_subnet_pb.Subnet, index?: number): yandex_cloud_vpc_v1_subnet_pb.Subnet;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkSubnetsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkSubnetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkSubnetsResponse): ListNetworkSubnetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkSubnetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkSubnetsResponse;
    static deserializeBinaryFromReader(message: ListNetworkSubnetsResponse, reader: jspb.BinaryReader): ListNetworkSubnetsResponse;
}

export namespace ListNetworkSubnetsResponse {
    export type AsObject = {
        subnetsList: Array<yandex_cloud_vpc_v1_subnet_pb.Subnet.AsObject>,
        nextPageToken: string,
    }
}

export class ListNetworkSecurityGroupsRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): ListNetworkSecurityGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkSecurityGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkSecurityGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkSecurityGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkSecurityGroupsRequest): ListNetworkSecurityGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkSecurityGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkSecurityGroupsRequest;
    static deserializeBinaryFromReader(message: ListNetworkSecurityGroupsRequest, reader: jspb.BinaryReader): ListNetworkSecurityGroupsRequest;
}

export namespace ListNetworkSecurityGroupsRequest {
    export type AsObject = {
        networkId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworkSecurityGroupsResponse extends jspb.Message { 
    clearSecurityGroupsList(): void;
    getSecurityGroupsList(): Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>;
    setSecurityGroupsList(value: Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup>): ListNetworkSecurityGroupsResponse;
    addSecurityGroups(value?: yandex_cloud_vpc_v1_security_group_pb.SecurityGroup, index?: number): yandex_cloud_vpc_v1_security_group_pb.SecurityGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkSecurityGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkSecurityGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkSecurityGroupsResponse): ListNetworkSecurityGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkSecurityGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkSecurityGroupsResponse;
    static deserializeBinaryFromReader(message: ListNetworkSecurityGroupsResponse, reader: jspb.BinaryReader): ListNetworkSecurityGroupsResponse;
}

export namespace ListNetworkSecurityGroupsResponse {
    export type AsObject = {
        securityGroupsList: Array<yandex_cloud_vpc_v1_security_group_pb.SecurityGroup.AsObject>,
        nextPageToken: string,
    }
}

export class ListNetworkRouteTablesRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): ListNetworkRouteTablesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkRouteTablesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkRouteTablesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkRouteTablesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkRouteTablesRequest): ListNetworkRouteTablesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkRouteTablesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkRouteTablesRequest;
    static deserializeBinaryFromReader(message: ListNetworkRouteTablesRequest, reader: jspb.BinaryReader): ListNetworkRouteTablesRequest;
}

export namespace ListNetworkRouteTablesRequest {
    export type AsObject = {
        networkId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworkRouteTablesResponse extends jspb.Message { 
    clearRouteTablesList(): void;
    getRouteTablesList(): Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable>;
    setRouteTablesList(value: Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable>): ListNetworkRouteTablesResponse;
    addRouteTables(value?: yandex_cloud_vpc_v1_route_table_pb.RouteTable, index?: number): yandex_cloud_vpc_v1_route_table_pb.RouteTable;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkRouteTablesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkRouteTablesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkRouteTablesResponse): ListNetworkRouteTablesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkRouteTablesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkRouteTablesResponse;
    static deserializeBinaryFromReader(message: ListNetworkRouteTablesResponse, reader: jspb.BinaryReader): ListNetworkRouteTablesResponse;
}

export namespace ListNetworkRouteTablesResponse {
    export type AsObject = {
        routeTablesList: Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable.AsObject>,
        nextPageToken: string,
    }
}

export class ListNetworkOperationsRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): ListNetworkOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListNetworkOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListNetworkOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkOperationsRequest): ListNetworkOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkOperationsRequest;
    static deserializeBinaryFromReader(message: ListNetworkOperationsRequest, reader: jspb.BinaryReader): ListNetworkOperationsRequest;
}

export namespace ListNetworkOperationsRequest {
    export type AsObject = {
        networkId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListNetworkOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListNetworkOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListNetworkOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListNetworkOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListNetworkOperationsResponse): ListNetworkOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListNetworkOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListNetworkOperationsResponse;
    static deserializeBinaryFromReader(message: ListNetworkOperationsResponse, reader: jspb.BinaryReader): ListNetworkOperationsResponse;
}

export namespace ListNetworkOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class MoveNetworkRequest extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): MoveNetworkRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveNetworkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveNetworkRequest): MoveNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveNetworkRequest;
    static deserializeBinaryFromReader(message: MoveNetworkRequest, reader: jspb.BinaryReader): MoveNetworkRequest;
}

export namespace MoveNetworkRequest {
    export type AsObject = {
        networkId: string,
        destinationFolderId: string,
    }
}

export class MoveNetworkMetadata extends jspb.Message { 
    getNetworkId(): string;
    setNetworkId(value: string): MoveNetworkMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveNetworkMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveNetworkMetadata): MoveNetworkMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveNetworkMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveNetworkMetadata;
    static deserializeBinaryFromReader(message: MoveNetworkMetadata, reader: jspb.BinaryReader): MoveNetworkMetadata;
}

export namespace MoveNetworkMetadata {
    export type AsObject = {
        networkId: string,
    }
}
