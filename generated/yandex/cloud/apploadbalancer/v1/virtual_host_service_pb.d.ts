// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/virtual_host_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as yandex_cloud_api_operation_pb from "../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../yandex/cloud/operation/operation_pb";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class GetVirtualHostRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): GetVirtualHostRequest;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): GetVirtualHostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetVirtualHostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetVirtualHostRequest): GetVirtualHostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetVirtualHostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetVirtualHostRequest;
    static deserializeBinaryFromReader(message: GetVirtualHostRequest, reader: jspb.BinaryReader): GetVirtualHostRequest;
}

export namespace GetVirtualHostRequest {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
    }
}

export class ListVirtualHostsRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): ListVirtualHostsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListVirtualHostsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListVirtualHostsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVirtualHostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListVirtualHostsRequest): ListVirtualHostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVirtualHostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVirtualHostsRequest;
    static deserializeBinaryFromReader(message: ListVirtualHostsRequest, reader: jspb.BinaryReader): ListVirtualHostsRequest;
}

export namespace ListVirtualHostsRequest {
    export type AsObject = {
        httpRouterId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListVirtualHostsResponse extends jspb.Message { 
    clearVirtualHostsList(): void;
    getVirtualHostsList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    setVirtualHostsList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>): ListVirtualHostsResponse;
    addVirtualHosts(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListVirtualHostsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListVirtualHostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListVirtualHostsResponse): ListVirtualHostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListVirtualHostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListVirtualHostsResponse;
    static deserializeBinaryFromReader(message: ListVirtualHostsResponse, reader: jspb.BinaryReader): ListVirtualHostsResponse;
}

export namespace ListVirtualHostsResponse {
    export type AsObject = {
        virtualHostsList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost.AsObject>,
        nextPageToken: string,
    }
}

export class CreateVirtualHostRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): CreateVirtualHostRequest;
    getName(): string;
    setName(value: string): CreateVirtualHostRequest;
    clearAuthorityList(): void;
    getAuthorityList(): Array<string>;
    setAuthorityList(value: Array<string>): CreateVirtualHostRequest;
    addAuthority(value: string, index?: number): string;
    clearRoutesList(): void;
    getRoutesList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route>;
    setRoutesList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route>): CreateVirtualHostRequest;
    addRoutes(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route;
    clearModifyRequestHeadersList(): void;
    getModifyRequestHeadersList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>;
    setModifyRequestHeadersList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>): CreateVirtualHostRequest;
    addModifyRequestHeaders(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification;
    clearModifyResponseHeadersList(): void;
    getModifyResponseHeadersList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>;
    setModifyResponseHeadersList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>): CreateVirtualHostRequest;
    addModifyResponseHeaders(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateVirtualHostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateVirtualHostRequest): CreateVirtualHostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateVirtualHostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateVirtualHostRequest;
    static deserializeBinaryFromReader(message: CreateVirtualHostRequest, reader: jspb.BinaryReader): CreateVirtualHostRequest;
}

export namespace CreateVirtualHostRequest {
    export type AsObject = {
        httpRouterId: string,
        name: string,
        authorityList: Array<string>,
        routesList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route.AsObject>,
        modifyRequestHeadersList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification.AsObject>,
        modifyResponseHeadersList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification.AsObject>,
    }
}

export class CreateVirtualHostMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): CreateVirtualHostMetadata;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): CreateVirtualHostMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateVirtualHostMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: CreateVirtualHostMetadata): CreateVirtualHostMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateVirtualHostMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateVirtualHostMetadata;
    static deserializeBinaryFromReader(message: CreateVirtualHostMetadata, reader: jspb.BinaryReader): CreateVirtualHostMetadata;
}

export namespace CreateVirtualHostMetadata {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
    }
}

export class UpdateVirtualHostRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateVirtualHostRequest;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): UpdateVirtualHostRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVirtualHostRequest;
    clearAuthorityList(): void;
    getAuthorityList(): Array<string>;
    setAuthorityList(value: Array<string>): UpdateVirtualHostRequest;
    addAuthority(value: string, index?: number): string;
    clearRoutesList(): void;
    getRoutesList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route>;
    setRoutesList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route>): UpdateVirtualHostRequest;
    addRoutes(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route;
    clearModifyRequestHeadersList(): void;
    getModifyRequestHeadersList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>;
    setModifyRequestHeadersList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>): UpdateVirtualHostRequest;
    addModifyRequestHeaders(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification;
    clearModifyResponseHeadersList(): void;
    getModifyResponseHeadersList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>;
    setModifyResponseHeadersList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification>): UpdateVirtualHostRequest;
    addModifyResponseHeaders(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVirtualHostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVirtualHostRequest): UpdateVirtualHostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVirtualHostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVirtualHostRequest;
    static deserializeBinaryFromReader(message: UpdateVirtualHostRequest, reader: jspb.BinaryReader): UpdateVirtualHostRequest;
}

export namespace UpdateVirtualHostRequest {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        authorityList: Array<string>,
        routesList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.Route.AsObject>,
        modifyRequestHeadersList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification.AsObject>,
        modifyResponseHeadersList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.HeaderModification.AsObject>,
    }
}

export class UpdateVirtualHostMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateVirtualHostMetadata;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): UpdateVirtualHostMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVirtualHostMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVirtualHostMetadata): UpdateVirtualHostMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVirtualHostMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVirtualHostMetadata;
    static deserializeBinaryFromReader(message: UpdateVirtualHostMetadata, reader: jspb.BinaryReader): UpdateVirtualHostMetadata;
}

export namespace UpdateVirtualHostMetadata {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
    }
}

export class DeleteVirtualHostRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): DeleteVirtualHostRequest;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): DeleteVirtualHostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteVirtualHostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteVirtualHostRequest): DeleteVirtualHostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteVirtualHostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteVirtualHostRequest;
    static deserializeBinaryFromReader(message: DeleteVirtualHostRequest, reader: jspb.BinaryReader): DeleteVirtualHostRequest;
}

export namespace DeleteVirtualHostRequest {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
    }
}

export class DeleteVirtualHostMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): DeleteVirtualHostMetadata;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): DeleteVirtualHostMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteVirtualHostMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteVirtualHostMetadata): DeleteVirtualHostMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteVirtualHostMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteVirtualHostMetadata;
    static deserializeBinaryFromReader(message: DeleteVirtualHostMetadata, reader: jspb.BinaryReader): DeleteVirtualHostMetadata;
}

export namespace DeleteVirtualHostMetadata {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
    }
}

export class RemoveRouteRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): RemoveRouteRequest;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): RemoveRouteRequest;
    getRouteName(): string;
    setRouteName(value: string): RemoveRouteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRouteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRouteRequest): RemoveRouteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRouteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRouteRequest;
    static deserializeBinaryFromReader(message: RemoveRouteRequest, reader: jspb.BinaryReader): RemoveRouteRequest;
}

export namespace RemoveRouteRequest {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
        routeName: string,
    }
}

export class RemoveRouteMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): RemoveRouteMetadata;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): RemoveRouteMetadata;
    getRouteName(): string;
    setRouteName(value: string): RemoveRouteMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRouteMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRouteMetadata): RemoveRouteMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRouteMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRouteMetadata;
    static deserializeBinaryFromReader(message: RemoveRouteMetadata, reader: jspb.BinaryReader): RemoveRouteMetadata;
}

export namespace RemoveRouteMetadata {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
        routeName: string,
    }
}

export class UpdateRouteRequest extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateRouteRequest;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): UpdateRouteRequest;
    getRouteName(): string;
    setRouteName(value: string): UpdateRouteRequest;

    hasUpdateMask(): boolean;
    clearUpdateMask(): void;
    getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
    setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateRouteRequest;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): yandex_cloud_apploadbalancer_v1_virtual_host_pb.HttpRoute | undefined;
    setHttp(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HttpRoute): UpdateRouteRequest;

    hasGrpc(): boolean;
    clearGrpc(): void;
    getGrpc(): yandex_cloud_apploadbalancer_v1_virtual_host_pb.GrpcRoute | undefined;
    setGrpc(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.GrpcRoute): UpdateRouteRequest;

    getRouteCase(): UpdateRouteRequest.RouteCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRouteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRouteRequest): UpdateRouteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRouteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRouteRequest;
    static deserializeBinaryFromReader(message: UpdateRouteRequest, reader: jspb.BinaryReader): UpdateRouteRequest;
}

export namespace UpdateRouteRequest {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
        routeName: string,
        updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
        http?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.HttpRoute.AsObject,
        grpc?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.GrpcRoute.AsObject,
    }

    export enum RouteCase {
        ROUTE_NOT_SET = 0,
        HTTP = 5,
        GRPC = 6,
    }

}

export class UpdateRouteMetadata extends jspb.Message { 
    getHttpRouterId(): string;
    setHttpRouterId(value: string): UpdateRouteMetadata;
    getVirtualHostName(): string;
    setVirtualHostName(value: string): UpdateRouteMetadata;
    getRouteName(): string;
    setRouteName(value: string): UpdateRouteMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRouteMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRouteMetadata): UpdateRouteMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRouteMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRouteMetadata;
    static deserializeBinaryFromReader(message: UpdateRouteMetadata, reader: jspb.BinaryReader): UpdateRouteMetadata;
}

export namespace UpdateRouteMetadata {
    export type AsObject = {
        httpRouterId: string,
        virtualHostName: string,
        routeName: string,
    }
}
