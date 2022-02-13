// package: yandex.cloud.mdb.elasticsearch.v1
// file: yandex/cloud/mdb/elasticsearch/v1/maintenance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class MaintenanceWindow extends jspb.Message { 

    hasAnytime(): boolean;
    clearAnytime(): void;
    getAnytime(): AnytimeMaintenanceWindow | undefined;
    setAnytime(value?: AnytimeMaintenanceWindow): MaintenanceWindow;

    hasWeeklyMaintenanceWindow(): boolean;
    clearWeeklyMaintenanceWindow(): void;
    getWeeklyMaintenanceWindow(): WeeklyMaintenanceWindow | undefined;
    setWeeklyMaintenanceWindow(value?: WeeklyMaintenanceWindow): MaintenanceWindow;

    getPolicyCase(): MaintenanceWindow.PolicyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaintenanceWindow.AsObject;
    static toObject(includeInstance: boolean, msg: MaintenanceWindow): MaintenanceWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaintenanceWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaintenanceWindow;
    static deserializeBinaryFromReader(message: MaintenanceWindow, reader: jspb.BinaryReader): MaintenanceWindow;
}

export namespace MaintenanceWindow {
    export type AsObject = {
        anytime?: AnytimeMaintenanceWindow.AsObject,
        weeklyMaintenanceWindow?: WeeklyMaintenanceWindow.AsObject,
    }

    export enum PolicyCase {
        POLICY_NOT_SET = 0,
        ANYTIME = 1,
        WEEKLY_MAINTENANCE_WINDOW = 2,
    }

}

export class AnytimeMaintenanceWindow extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnytimeMaintenanceWindow.AsObject;
    static toObject(includeInstance: boolean, msg: AnytimeMaintenanceWindow): AnytimeMaintenanceWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnytimeMaintenanceWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnytimeMaintenanceWindow;
    static deserializeBinaryFromReader(message: AnytimeMaintenanceWindow, reader: jspb.BinaryReader): AnytimeMaintenanceWindow;
}

export namespace AnytimeMaintenanceWindow {
    export type AsObject = {
    }
}

export class WeeklyMaintenanceWindow extends jspb.Message { 
    getDay(): WeeklyMaintenanceWindow.WeekDay;
    setDay(value: WeeklyMaintenanceWindow.WeekDay): WeeklyMaintenanceWindow;
    getHour(): number;
    setHour(value: number): WeeklyMaintenanceWindow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeeklyMaintenanceWindow.AsObject;
    static toObject(includeInstance: boolean, msg: WeeklyMaintenanceWindow): WeeklyMaintenanceWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeeklyMaintenanceWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeeklyMaintenanceWindow;
    static deserializeBinaryFromReader(message: WeeklyMaintenanceWindow, reader: jspb.BinaryReader): WeeklyMaintenanceWindow;
}

export namespace WeeklyMaintenanceWindow {
    export type AsObject = {
        day: WeeklyMaintenanceWindow.WeekDay,
        hour: number,
    }

    export enum WeekDay {
    WEEK_DAY_UNSPECIFIED = 0,
    MON = 1,
    TUE = 2,
    WED = 3,
    THU = 4,
    FRI = 5,
    SAT = 6,
    SUN = 7,
    }

}

export class MaintenanceOperation extends jspb.Message { 
    getInfo(): string;
    setInfo(value: string): MaintenanceOperation;

    hasDelayedUntil(): boolean;
    clearDelayedUntil(): void;
    getDelayedUntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDelayedUntil(value?: google_protobuf_timestamp_pb.Timestamp): MaintenanceOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaintenanceOperation.AsObject;
    static toObject(includeInstance: boolean, msg: MaintenanceOperation): MaintenanceOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaintenanceOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaintenanceOperation;
    static deserializeBinaryFromReader(message: MaintenanceOperation, reader: jspb.BinaryReader): MaintenanceOperation;
}

export namespace MaintenanceOperation {
    export type AsObject = {
        info: string,
        delayedUntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
