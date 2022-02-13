// package: yandex.cloud.apploadbalancer.v1
// file: yandex/cloud/apploadbalancer/v1/http_router.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_apploadbalancer_v1_virtual_host_pb from "../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb";

export class HttpRouter extends jspb.Message { 
    getId(): string;
    setId(value: string): HttpRouter;
    getName(): string;
    setName(value: string): HttpRouter;
    getDescription(): string;
    setDescription(value: string): HttpRouter;
    getFolderId(): string;
    setFolderId(value: string): HttpRouter;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    clearVirtualHostsList(): void;
    getVirtualHostsList(): Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>;
    setVirtualHostsList(value: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost>): HttpRouter;
    addVirtualHosts(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost, index?: number): yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): HttpRouter;

    hasRouteOptions(): boolean;
    clearRouteOptions(): void;
    getRouteOptions(): yandex_cloud_apploadbalancer_v1_virtual_host_pb.RouteOptions | undefined;
    setRouteOptions(value?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.RouteOptions): HttpRouter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpRouter.AsObject;
    static toObject(includeInstance: boolean, msg: HttpRouter): HttpRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpRouter;
    static deserializeBinaryFromReader(message: HttpRouter, reader: jspb.BinaryReader): HttpRouter;
}

export namespace HttpRouter {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        folderId: string,

        labelsMap: Array<[string, string]>,
        virtualHostsList: Array<yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        routeOptions?: yandex_cloud_apploadbalancer_v1_virtual_host_pb.RouteOptions.AsObject,
    }
}
