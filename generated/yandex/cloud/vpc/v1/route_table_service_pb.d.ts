// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/route_table_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_vpc_v1_route_table_pb from "../../../../yandex/cloud/vpc/v1/route_table_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetRouteTableRequest extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): GetRouteTableRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRouteTableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRouteTableRequest): GetRouteTableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRouteTableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRouteTableRequest;
    static deserializeBinaryFromReader(message: GetRouteTableRequest, reader: jspb.BinaryReader): GetRouteTableRequest;
}

export namespace GetRouteTableRequest {
    export type AsObject = {
        routeTableId: string,
    }
}

export class ListRouteTablesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListRouteTablesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRouteTablesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRouteTablesRequest;
    getFilter(): string;
    setFilter(value: string): ListRouteTablesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRouteTablesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRouteTablesRequest): ListRouteTablesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRouteTablesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRouteTablesRequest;
    static deserializeBinaryFromReader(message: ListRouteTablesRequest, reader: jspb.BinaryReader): ListRouteTablesRequest;
}

export namespace ListRouteTablesRequest {
    export type AsObject = {
        folderId: string,
        pageSize: number,
        pageToken: string,
        filter: string,
    }
}

export class ListRouteTablesResponse extends jspb.Message { 
    clearRouteTablesList(): void;
    getRouteTablesList(): Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable>;
    setRouteTablesList(value: Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable>): ListRouteTablesResponse;
    addRouteTables(value?: yandex_cloud_vpc_v1_route_table_pb.RouteTable, index?: number): yandex_cloud_vpc_v1_route_table_pb.RouteTable;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRouteTablesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRouteTablesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRouteTablesResponse): ListRouteTablesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRouteTablesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRouteTablesResponse;
    static deserializeBinaryFromReader(message: ListRouteTablesResponse, reader: jspb.BinaryReader): ListRouteTablesResponse;
}

export namespace ListRouteTablesResponse {
    export type AsObject = {
        routeTablesList: Array<yandex_cloud_vpc_v1_route_table_pb.RouteTable.AsObject>,
        nextPageToken: string,
    }
}

export class CreateRouteTableRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): CreateRouteTableRequest;
    getName(): string;
    setName(value: string): CreateRouteTableRequest;
    getDescription(): string;
    setDescription(value: string): CreateRouteTableRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): CreateRouteTableRequest;
    clearStaticRoutesList(): void;
    getStaticRoutesList(): Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute>;
    setStaticRoutesList(value: Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute>): CreateRouteTableRequest;
    addStaticRoutes(value?: yandex_cloud_vpc_v1_route_table_pb.StaticRoute, index?: number): yandex_cloud_vpc_v1_route_table_pb.StaticRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRouteTableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRouteTableRequest): CreateRouteTableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRouteTableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRouteTableRequest;
    static deserializeBinaryFromReader(message: CreateRouteTableRequest, reader: jspb.BinaryReader): CreateRouteTableRequest;
}

export namespace CreateRouteTableRequest {
    export type AsObject = {
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        staticRoutesList: Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute.AsObject>,
    }
}

export class CreateRouteTableMetadata extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): CreateRouteTableMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRouteTableMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRouteTableMetadata): CreateRouteTableMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRouteTableMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRouteTableMetadata;
    static deserializeBinaryFromReader(message: CreateRouteTableMetadata, reader: jspb.BinaryReader): CreateRouteTableMetadata;
}

export namespace CreateRouteTableMetadata {
    export type AsObject = {
        routeTableId: string,
    }
}

export class UpdateRouteTableRequest extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): UpdateRouteTableRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateRouteTableRequest;
    getName(): string;
    setName(value: string): UpdateRouteTableRequest;
    getDescription(): string;
    setDescription(value: string): UpdateRouteTableRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearStaticRoutesList(): void;
    getStaticRoutesList(): Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute>;
    setStaticRoutesList(value: Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute>): UpdateRouteTableRequest;
    addStaticRoutes(value?: yandex_cloud_vpc_v1_route_table_pb.StaticRoute, index?: number): yandex_cloud_vpc_v1_route_table_pb.StaticRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRouteTableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRouteTableRequest): UpdateRouteTableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRouteTableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRouteTableRequest;
    static deserializeBinaryFromReader(message: UpdateRouteTableRequest, reader: jspb.BinaryReader): UpdateRouteTableRequest;
}

export namespace UpdateRouteTableRequest {
    export type AsObject = {
        routeTableId: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        staticRoutesList: Array<yandex_cloud_vpc_v1_route_table_pb.StaticRoute.AsObject>,
    }
}

export class UpdateRouteTableMetadata extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): UpdateRouteTableMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRouteTableMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRouteTableMetadata): UpdateRouteTableMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRouteTableMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRouteTableMetadata;
    static deserializeBinaryFromReader(message: UpdateRouteTableMetadata, reader: jspb.BinaryReader): UpdateRouteTableMetadata;
}

export namespace UpdateRouteTableMetadata {
    export type AsObject = {
        routeTableId: string,
    }
}

export class DeleteRouteTableRequest extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): DeleteRouteTableRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRouteTableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRouteTableRequest): DeleteRouteTableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRouteTableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRouteTableRequest;
    static deserializeBinaryFromReader(message: DeleteRouteTableRequest, reader: jspb.BinaryReader): DeleteRouteTableRequest;
}

export namespace DeleteRouteTableRequest {
    export type AsObject = {
        routeTableId: string,
    }
}

export class DeleteRouteTableMetadata extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): DeleteRouteTableMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRouteTableMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRouteTableMetadata): DeleteRouteTableMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRouteTableMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRouteTableMetadata;
    static deserializeBinaryFromReader(message: DeleteRouteTableMetadata, reader: jspb.BinaryReader): DeleteRouteTableMetadata;
}

export namespace DeleteRouteTableMetadata {
    export type AsObject = {
        routeTableId: string,
    }
}

export class ListRouteTableOperationsRequest extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): ListRouteTableOperationsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListRouteTableOperationsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListRouteTableOperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRouteTableOperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRouteTableOperationsRequest): ListRouteTableOperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRouteTableOperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRouteTableOperationsRequest;
    static deserializeBinaryFromReader(message: ListRouteTableOperationsRequest, reader: jspb.BinaryReader): ListRouteTableOperationsRequest;
}

export namespace ListRouteTableOperationsRequest {
    export type AsObject = {
        routeTableId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListRouteTableOperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<yandex_cloud_operation_operation_pb.Operation>;
    setOperationsList(value: Array<yandex_cloud_operation_operation_pb.Operation>): ListRouteTableOperationsResponse;
    addOperations(value?: yandex_cloud_operation_operation_pb.Operation, index?: number): yandex_cloud_operation_operation_pb.Operation;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListRouteTableOperationsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRouteTableOperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRouteTableOperationsResponse): ListRouteTableOperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRouteTableOperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRouteTableOperationsResponse;
    static deserializeBinaryFromReader(message: ListRouteTableOperationsResponse, reader: jspb.BinaryReader): ListRouteTableOperationsResponse;
}

export namespace ListRouteTableOperationsResponse {
    export type AsObject = {
        operationsList: Array<yandex_cloud_operation_operation_pb.Operation.AsObject>,
        nextPageToken: string,
    }
}

export class MoveRouteTableRequest extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): MoveRouteTableRequest;
    getDestinationFolderId(): string;
    setDestinationFolderId(value: string): MoveRouteTableRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveRouteTableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MoveRouteTableRequest): MoveRouteTableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveRouteTableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveRouteTableRequest;
    static deserializeBinaryFromReader(message: MoveRouteTableRequest, reader: jspb.BinaryReader): MoveRouteTableRequest;
}

export namespace MoveRouteTableRequest {
    export type AsObject = {
        routeTableId: string,
        destinationFolderId: string,
    }
}

export class MoveRouteTableMetadata extends jspb.Message { 
    getRouteTableId(): string;
    setRouteTableId(value: string): MoveRouteTableMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveRouteTableMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MoveRouteTableMetadata): MoveRouteTableMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveRouteTableMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveRouteTableMetadata;
    static deserializeBinaryFromReader(message: MoveRouteTableMetadata, reader: jspb.BinaryReader): MoveRouteTableMetadata;
}

export namespace MoveRouteTableMetadata {
    export type AsObject = {
        routeTableId: string,
    }
}
