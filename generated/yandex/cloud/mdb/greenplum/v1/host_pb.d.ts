// package: yandex.cloud.mdb.greenplum.v1
// file: yandex/cloud/mdb/greenplum/v1/host.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_mdb_greenplum_v1_config_pb from "../../../../../yandex/cloud/mdb/greenplum/v1/config_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Host extends jspb.Message { 
    getName(): string;
    setName(value: string): Host;
    getClusterId(): string;
    setClusterId(value: string): Host;
    getZoneId(): string;
    setZoneId(value: string): Host;
    getType(): Host.Type;
    setType(value: Host.Type): Host;

    hasResources(): boolean;
    clearResources(): void;
    getResources(): yandex_cloud_mdb_greenplum_v1_config_pb.Resources | undefined;
    setResources(value?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources): Host;
    getHealth(): Host.Health;
    setHealth(value: Host.Health): Host;
    getSubnetId(): string;
    setSubnetId(value: string): Host;
    getAssignPublicIp(): boolean;
    setAssignPublicIp(value: boolean): Host;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Host.AsObject;
    static toObject(includeInstance: boolean, msg: Host): Host.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Host, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Host;
    static deserializeBinaryFromReader(message: Host, reader: jspb.BinaryReader): Host;
}

export namespace Host {
    export type AsObject = {
        name: string,
        clusterId: string,
        zoneId: string,
        type: Host.Type,
        resources?: yandex_cloud_mdb_greenplum_v1_config_pb.Resources.AsObject,
        health: Host.Health,
        subnetId: string,
        assignPublicIp: boolean,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    MASTER = 1,
    REPLICA = 2,
    SEGMENT = 3,
    }

    export enum Health {
    UNKNOWN = 0,
    ALIVE = 1,
    DEAD = 2,
    DEGRADED = 3,
    }

}
