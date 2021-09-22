// package: yandex.cloud.vpc.v1
// file: yandex/cloud/vpc/v1/route_table.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RouteTable extends jspb.Message { 
    getId(): string;
    setId(value: string): RouteTable;
    getFolderId(): string;
    setFolderId(value: string): RouteTable;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RouteTable;
    getName(): string;
    setName(value: string): RouteTable;
    getDescription(): string;
    setDescription(value: string): RouteTable;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;
    getNetworkId(): string;
    setNetworkId(value: string): RouteTable;
    clearStaticRoutesList(): void;
    getStaticRoutesList(): Array<StaticRoute>;
    setStaticRoutesList(value: Array<StaticRoute>): RouteTable;
    addStaticRoutes(value?: StaticRoute, index?: number): StaticRoute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteTable.AsObject;
    static toObject(includeInstance: boolean, msg: RouteTable): RouteTable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteTable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteTable;
    static deserializeBinaryFromReader(message: RouteTable, reader: jspb.BinaryReader): RouteTable;
}

export namespace RouteTable {
    export type AsObject = {
        id: string,
        folderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        networkId: string,
        staticRoutesList: Array<StaticRoute.AsObject>,
    }
}

export class StaticRoute extends jspb.Message { 

    hasDestinationPrefix(): boolean;
    clearDestinationPrefix(): void;
    getDestinationPrefix(): string;
    setDestinationPrefix(value: string): StaticRoute;

    hasNextHopAddress(): boolean;
    clearNextHopAddress(): void;
    getNextHopAddress(): string;
    setNextHopAddress(value: string): StaticRoute;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getDestinationCase(): StaticRoute.DestinationCase;
    getNextHopCase(): StaticRoute.NextHopCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StaticRoute.AsObject;
    static toObject(includeInstance: boolean, msg: StaticRoute): StaticRoute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StaticRoute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StaticRoute;
    static deserializeBinaryFromReader(message: StaticRoute, reader: jspb.BinaryReader): StaticRoute;
}

export namespace StaticRoute {
    export type AsObject = {
        destinationPrefix: string,
        nextHopAddress: string,

        labelsMap: Array<[string, string]>,
    }

    export enum DestinationCase {
        DESTINATION_NOT_SET = 0,
        DESTINATION_PREFIX = 1,
    }

    export enum NextHopCase {
        NEXT_HOP_NOT_SET = 0,
        NEXT_HOP_ADDRESS = 2,
    }

}
