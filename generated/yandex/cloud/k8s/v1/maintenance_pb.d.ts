// package: yandex.cloud.k8s.v1
// file: yandex/cloud/k8s/v1/maintenance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_type_dayofweek_pb from "../../../../google/type/dayofweek_pb";
import * as google_type_timeofday_pb from "../../../../google/type/timeofday_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class MaintenanceWindow extends jspb.Message { 

    hasAnytime(): boolean;
    clearAnytime(): void;
    getAnytime(): AnytimeMaintenanceWindow | undefined;
    setAnytime(value?: AnytimeMaintenanceWindow): MaintenanceWindow;

    hasDailyMaintenanceWindow(): boolean;
    clearDailyMaintenanceWindow(): void;
    getDailyMaintenanceWindow(): DailyMaintenanceWindow | undefined;
    setDailyMaintenanceWindow(value?: DailyMaintenanceWindow): MaintenanceWindow;

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
        dailyMaintenanceWindow?: DailyMaintenanceWindow.AsObject,
        weeklyMaintenanceWindow?: WeeklyMaintenanceWindow.AsObject,
    }

    export enum PolicyCase {
        POLICY_NOT_SET = 0,
        ANYTIME = 1,
        DAILY_MAINTENANCE_WINDOW = 2,
        WEEKLY_MAINTENANCE_WINDOW = 3,
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

export class DailyMaintenanceWindow extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_type_timeofday_pb.TimeOfDay | undefined;
    setStartTime(value?: google_type_timeofday_pb.TimeOfDay): DailyMaintenanceWindow;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): DailyMaintenanceWindow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DailyMaintenanceWindow.AsObject;
    static toObject(includeInstance: boolean, msg: DailyMaintenanceWindow): DailyMaintenanceWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DailyMaintenanceWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DailyMaintenanceWindow;
    static deserializeBinaryFromReader(message: DailyMaintenanceWindow, reader: jspb.BinaryReader): DailyMaintenanceWindow;
}

export namespace DailyMaintenanceWindow {
    export type AsObject = {
        startTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class DaysOfWeekMaintenanceWindow extends jspb.Message { 
    clearDaysList(): void;
    getDaysList(): Array<google_type_dayofweek_pb.DayOfWeek>;
    setDaysList(value: Array<google_type_dayofweek_pb.DayOfWeek>): DaysOfWeekMaintenanceWindow;
    addDays(value: google_type_dayofweek_pb.DayOfWeek, index?: number): google_type_dayofweek_pb.DayOfWeek;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_type_timeofday_pb.TimeOfDay | undefined;
    setStartTime(value?: google_type_timeofday_pb.TimeOfDay): DaysOfWeekMaintenanceWindow;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): DaysOfWeekMaintenanceWindow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaysOfWeekMaintenanceWindow.AsObject;
    static toObject(includeInstance: boolean, msg: DaysOfWeekMaintenanceWindow): DaysOfWeekMaintenanceWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaysOfWeekMaintenanceWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaysOfWeekMaintenanceWindow;
    static deserializeBinaryFromReader(message: DaysOfWeekMaintenanceWindow, reader: jspb.BinaryReader): DaysOfWeekMaintenanceWindow;
}

export namespace DaysOfWeekMaintenanceWindow {
    export type AsObject = {
        daysList: Array<google_type_dayofweek_pb.DayOfWeek>,
        startTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class WeeklyMaintenanceWindow extends jspb.Message { 
    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<DaysOfWeekMaintenanceWindow>;
    setDaysOfWeekList(value: Array<DaysOfWeekMaintenanceWindow>): WeeklyMaintenanceWindow;
    addDaysOfWeek(value?: DaysOfWeekMaintenanceWindow, index?: number): DaysOfWeekMaintenanceWindow;

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
        daysOfWeekList: Array<DaysOfWeekMaintenanceWindow.AsObject>,
    }
}
