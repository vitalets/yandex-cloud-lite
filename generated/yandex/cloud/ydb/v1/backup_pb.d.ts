// package: yandex.cloud.ydb.v1
// file: yandex/cloud/ydb/v1/backup.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_type_timeofday_pb from "../../../../google/type/timeofday_pb";
import * as google_type_dayofweek_pb from "../../../../google/type/dayofweek_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class BackupSchedule extends jspb.Message { 

    hasDailyBackupSchedule(): boolean;
    clearDailyBackupSchedule(): void;
    getDailyBackupSchedule(): DailyBackupSchedule | undefined;
    setDailyBackupSchedule(value?: DailyBackupSchedule): BackupSchedule;

    hasWeeklyBackupSchedule(): boolean;
    clearWeeklyBackupSchedule(): void;
    getWeeklyBackupSchedule(): WeeklyBackupSchedule | undefined;
    setWeeklyBackupSchedule(value?: WeeklyBackupSchedule): BackupSchedule;

    hasRecurringBackupSchedule(): boolean;
    clearRecurringBackupSchedule(): void;
    getRecurringBackupSchedule(): RecurringBackupSchedule | undefined;
    setRecurringBackupSchedule(value?: RecurringBackupSchedule): BackupSchedule;

    hasNextExecuteTime(): boolean;
    clearNextExecuteTime(): void;
    getNextExecuteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setNextExecuteTime(value?: google_protobuf_timestamp_pb.Timestamp): BackupSchedule;

    getPolicyCase(): BackupSchedule.PolicyCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: BackupSchedule): BackupSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupSchedule;
    static deserializeBinaryFromReader(message: BackupSchedule, reader: jspb.BinaryReader): BackupSchedule;
}

export namespace BackupSchedule {
    export type AsObject = {
        dailyBackupSchedule?: DailyBackupSchedule.AsObject,
        weeklyBackupSchedule?: WeeklyBackupSchedule.AsObject,
        recurringBackupSchedule?: RecurringBackupSchedule.AsObject,
        nextExecuteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }

    export enum PolicyCase {
        POLICY_NOT_SET = 0,
        DAILY_BACKUP_SCHEDULE = 1,
        WEEKLY_BACKUP_SCHEDULE = 2,
        RECURRING_BACKUP_SCHEDULE = 4,
    }

}

export class RecurringBackupSchedule extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): RecurringBackupSchedule;
    getRecurrence(): string;
    setRecurrence(value: string): RecurringBackupSchedule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecurringBackupSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: RecurringBackupSchedule): RecurringBackupSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecurringBackupSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecurringBackupSchedule;
    static deserializeBinaryFromReader(message: RecurringBackupSchedule, reader: jspb.BinaryReader): RecurringBackupSchedule;
}

export namespace RecurringBackupSchedule {
    export type AsObject = {
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        recurrence: string,
    }
}

export class DaysOfWeekBackupSchedule extends jspb.Message { 
    clearDaysList(): void;
    getDaysList(): Array<google_type_dayofweek_pb.DayOfWeek>;
    setDaysList(value: Array<google_type_dayofweek_pb.DayOfWeek>): DaysOfWeekBackupSchedule;
    addDays(value: google_type_dayofweek_pb.DayOfWeek, index?: number): google_type_dayofweek_pb.DayOfWeek;

    hasExecuteTime(): boolean;
    clearExecuteTime(): void;
    getExecuteTime(): google_type_timeofday_pb.TimeOfDay | undefined;
    setExecuteTime(value?: google_type_timeofday_pb.TimeOfDay): DaysOfWeekBackupSchedule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaysOfWeekBackupSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: DaysOfWeekBackupSchedule): DaysOfWeekBackupSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DaysOfWeekBackupSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaysOfWeekBackupSchedule;
    static deserializeBinaryFromReader(message: DaysOfWeekBackupSchedule, reader: jspb.BinaryReader): DaysOfWeekBackupSchedule;
}

export namespace DaysOfWeekBackupSchedule {
    export type AsObject = {
        daysList: Array<google_type_dayofweek_pb.DayOfWeek>,
        executeTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
    }
}

export class WeeklyBackupSchedule extends jspb.Message { 
    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<DaysOfWeekBackupSchedule>;
    setDaysOfWeekList(value: Array<DaysOfWeekBackupSchedule>): WeeklyBackupSchedule;
    addDaysOfWeek(value?: DaysOfWeekBackupSchedule, index?: number): DaysOfWeekBackupSchedule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeeklyBackupSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: WeeklyBackupSchedule): WeeklyBackupSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeeklyBackupSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeeklyBackupSchedule;
    static deserializeBinaryFromReader(message: WeeklyBackupSchedule, reader: jspb.BinaryReader): WeeklyBackupSchedule;
}

export namespace WeeklyBackupSchedule {
    export type AsObject = {
        daysOfWeekList: Array<DaysOfWeekBackupSchedule.AsObject>,
    }
}

export class DailyBackupSchedule extends jspb.Message { 

    hasExecuteTime(): boolean;
    clearExecuteTime(): void;
    getExecuteTime(): google_type_timeofday_pb.TimeOfDay | undefined;
    setExecuteTime(value?: google_type_timeofday_pb.TimeOfDay): DailyBackupSchedule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DailyBackupSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: DailyBackupSchedule): DailyBackupSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DailyBackupSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DailyBackupSchedule;
    static deserializeBinaryFromReader(message: DailyBackupSchedule, reader: jspb.BinaryReader): DailyBackupSchedule;
}

export namespace DailyBackupSchedule {
    export type AsObject = {
        executeTime?: google_type_timeofday_pb.TimeOfDay.AsObject,
    }
}

export class BackupSettings extends jspb.Message { 
    getName(): string;
    setName(value: string): BackupSettings;
    getDescription(): string;
    setDescription(value: string): BackupSettings;

    hasBackupSchedule(): boolean;
    clearBackupSchedule(): void;
    getBackupSchedule(): BackupSchedule | undefined;
    setBackupSchedule(value?: BackupSchedule): BackupSettings;

    hasBackupTimeToLive(): boolean;
    clearBackupTimeToLive(): void;
    getBackupTimeToLive(): google_protobuf_duration_pb.Duration | undefined;
    setBackupTimeToLive(value?: google_protobuf_duration_pb.Duration): BackupSettings;
    clearSourcePathsList(): void;
    getSourcePathsList(): Array<string>;
    setSourcePathsList(value: Array<string>): BackupSettings;
    addSourcePaths(value: string, index?: number): string;
    clearSourcePathsToExcludeList(): void;
    getSourcePathsToExcludeList(): Array<string>;
    setSourcePathsToExcludeList(value: Array<string>): BackupSettings;
    addSourcePathsToExclude(value: string, index?: number): string;
    getType(): BackupSettings.Type;
    setType(value: BackupSettings.Type): BackupSettings;
    getStorageClass(): BackupSettings.StorageClass;
    setStorageClass(value: BackupSettings.StorageClass): BackupSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupSettings.AsObject;
    static toObject(includeInstance: boolean, msg: BackupSettings): BackupSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupSettings;
    static deserializeBinaryFromReader(message: BackupSettings, reader: jspb.BinaryReader): BackupSettings;
}

export namespace BackupSettings {
    export type AsObject = {
        name: string,
        description: string,
        backupSchedule?: BackupSchedule.AsObject,
        backupTimeToLive?: google_protobuf_duration_pb.Duration.AsObject,
        sourcePathsList: Array<string>,
        sourcePathsToExcludeList: Array<string>,
        type: BackupSettings.Type,
        storageClass: BackupSettings.StorageClass,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    SYSTEM = 1,
    USER = 2,
    }

    export enum StorageClass {
    STORAGE_CLASS_UNSPECIFIED = 0,
    STANDARD = 1,
    REDUCED_REDUNDANCY = 2,
    STANDARD_IA = 3,
    ONEZONE_IA = 4,
    INTELLIGENT_TIERING = 5,
    GLACIER = 6,
    DEEP_ARCHIVE = 7,
    OUTPOSTS = 8,
    }

}

export class BackupConfig extends jspb.Message { 
    clearBackupSettingsList(): void;
    getBackupSettingsList(): Array<BackupSettings>;
    setBackupSettingsList(value: Array<BackupSettings>): BackupConfig;
    addBackupSettings(value?: BackupSettings, index?: number): BackupSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BackupConfig.AsObject;
    static toObject(includeInstance: boolean, msg: BackupConfig): BackupConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BackupConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BackupConfig;
    static deserializeBinaryFromReader(message: BackupConfig, reader: jspb.BinaryReader): BackupConfig;
}

export namespace BackupConfig {
    export type AsObject = {
        backupSettingsList: Array<BackupSettings.AsObject>,
    }
}

export class Backup extends jspb.Message { 
    getId(): string;
    setId(value: string): Backup;
    getName(): string;
    setName(value: string): Backup;
    getFolderId(): string;
    setFolderId(value: string): Backup;
    getDatabaseId(): string;
    setDatabaseId(value: string): Backup;
    getDescription(): string;
    setDescription(value: string): Backup;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;

    hasStartedAt(): boolean;
    clearStartedAt(): void;
    getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;

    hasCompletedAt(): boolean;
    clearCompletedAt(): void;
    getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Backup;
    getStatus(): Backup.Status;
    setStatus(value: Backup.Status): Backup;

    hasBackupSettings(): boolean;
    clearBackupSettings(): void;
    getBackupSettings(): BackupSettings | undefined;
    setBackupSettings(value?: BackupSettings): Backup;
    getType(): Backup.Type;
    setType(value: Backup.Type): Backup;
    getSize(): number;
    setSize(value: number): Backup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Backup.AsObject;
    static toObject(includeInstance: boolean, msg: Backup): Backup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Backup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Backup;
    static deserializeBinaryFromReader(message: Backup, reader: jspb.BinaryReader): Backup;
}

export namespace Backup {
    export type AsObject = {
        id: string,
        name: string,
        folderId: string,
        databaseId: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        status: Backup.Status,
        backupSettings?: BackupSettings.AsObject,
        type: Backup.Type,
        size: number,
    }

    export enum Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    READY = 2,
    ERROR = 3,
    CANCELLED = 4,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    SYSTEM = 1,
    USER = 2,
    }

}
