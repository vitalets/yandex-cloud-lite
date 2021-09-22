// package: yandex.cloud.mdb.sqlserver.v1.config
// file: yandex/cloud/mdb/sqlserver/v1/config/sqlserver2016sp2.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class SQLServerConfig2016sp2std extends jspb.Message { 

    hasMaxDegreeOfParallelism(): boolean;
    clearMaxDegreeOfParallelism(): void;
    getMaxDegreeOfParallelism(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxDegreeOfParallelism(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2std;

    hasCostThresholdForParallelism(): boolean;
    clearCostThresholdForParallelism(): void;
    getCostThresholdForParallelism(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCostThresholdForParallelism(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2std;

    hasAuditLevel(): boolean;
    clearAuditLevel(): void;
    getAuditLevel(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAuditLevel(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2std;

    hasFillFactorPercent(): boolean;
    clearFillFactorPercent(): void;
    getFillFactorPercent(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFillFactorPercent(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2std;

    hasOptimizeForAdHocWorkloads(): boolean;
    clearOptimizeForAdHocWorkloads(): void;
    getOptimizeForAdHocWorkloads(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOptimizeForAdHocWorkloads(value?: google_protobuf_wrappers_pb.BoolValue): SQLServerConfig2016sp2std;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SQLServerConfig2016sp2std.AsObject;
    static toObject(includeInstance: boolean, msg: SQLServerConfig2016sp2std): SQLServerConfig2016sp2std.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SQLServerConfig2016sp2std, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SQLServerConfig2016sp2std;
    static deserializeBinaryFromReader(message: SQLServerConfig2016sp2std, reader: jspb.BinaryReader): SQLServerConfig2016sp2std;
}

export namespace SQLServerConfig2016sp2std {
    export type AsObject = {
        maxDegreeOfParallelism?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        costThresholdForParallelism?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        auditLevel?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fillFactorPercent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        optimizeForAdHocWorkloads?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class SQLServerConfigSet2016sp2std extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): SQLServerConfig2016sp2std | undefined;
    setEffectiveConfig(value?: SQLServerConfig2016sp2std): SQLServerConfigSet2016sp2std;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): SQLServerConfig2016sp2std | undefined;
    setUserConfig(value?: SQLServerConfig2016sp2std): SQLServerConfigSet2016sp2std;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): SQLServerConfig2016sp2std | undefined;
    setDefaultConfig(value?: SQLServerConfig2016sp2std): SQLServerConfigSet2016sp2std;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SQLServerConfigSet2016sp2std.AsObject;
    static toObject(includeInstance: boolean, msg: SQLServerConfigSet2016sp2std): SQLServerConfigSet2016sp2std.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SQLServerConfigSet2016sp2std, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SQLServerConfigSet2016sp2std;
    static deserializeBinaryFromReader(message: SQLServerConfigSet2016sp2std, reader: jspb.BinaryReader): SQLServerConfigSet2016sp2std;
}

export namespace SQLServerConfigSet2016sp2std {
    export type AsObject = {
        effectiveConfig?: SQLServerConfig2016sp2std.AsObject,
        userConfig?: SQLServerConfig2016sp2std.AsObject,
        defaultConfig?: SQLServerConfig2016sp2std.AsObject,
    }
}

export class SQLServerConfig2016sp2ent extends jspb.Message { 

    hasMaxDegreeOfParallelism(): boolean;
    clearMaxDegreeOfParallelism(): void;
    getMaxDegreeOfParallelism(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxDegreeOfParallelism(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2ent;

    hasCostThresholdForParallelism(): boolean;
    clearCostThresholdForParallelism(): void;
    getCostThresholdForParallelism(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setCostThresholdForParallelism(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2ent;

    hasAuditLevel(): boolean;
    clearAuditLevel(): void;
    getAuditLevel(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setAuditLevel(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2ent;

    hasFillFactorPercent(): boolean;
    clearFillFactorPercent(): void;
    getFillFactorPercent(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFillFactorPercent(value?: google_protobuf_wrappers_pb.Int64Value): SQLServerConfig2016sp2ent;

    hasOptimizeForAdHocWorkloads(): boolean;
    clearOptimizeForAdHocWorkloads(): void;
    getOptimizeForAdHocWorkloads(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setOptimizeForAdHocWorkloads(value?: google_protobuf_wrappers_pb.BoolValue): SQLServerConfig2016sp2ent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SQLServerConfig2016sp2ent.AsObject;
    static toObject(includeInstance: boolean, msg: SQLServerConfig2016sp2ent): SQLServerConfig2016sp2ent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SQLServerConfig2016sp2ent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SQLServerConfig2016sp2ent;
    static deserializeBinaryFromReader(message: SQLServerConfig2016sp2ent, reader: jspb.BinaryReader): SQLServerConfig2016sp2ent;
}

export namespace SQLServerConfig2016sp2ent {
    export type AsObject = {
        maxDegreeOfParallelism?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        costThresholdForParallelism?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        auditLevel?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fillFactorPercent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        optimizeForAdHocWorkloads?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class SQLServerConfigSet2016sp2ent extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): SQLServerConfig2016sp2ent | undefined;
    setEffectiveConfig(value?: SQLServerConfig2016sp2ent): SQLServerConfigSet2016sp2ent;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): SQLServerConfig2016sp2ent | undefined;
    setUserConfig(value?: SQLServerConfig2016sp2ent): SQLServerConfigSet2016sp2ent;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): SQLServerConfig2016sp2ent | undefined;
    setDefaultConfig(value?: SQLServerConfig2016sp2ent): SQLServerConfigSet2016sp2ent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SQLServerConfigSet2016sp2ent.AsObject;
    static toObject(includeInstance: boolean, msg: SQLServerConfigSet2016sp2ent): SQLServerConfigSet2016sp2ent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SQLServerConfigSet2016sp2ent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SQLServerConfigSet2016sp2ent;
    static deserializeBinaryFromReader(message: SQLServerConfigSet2016sp2ent, reader: jspb.BinaryReader): SQLServerConfigSet2016sp2ent;
}

export namespace SQLServerConfigSet2016sp2ent {
    export type AsObject = {
        effectiveConfig?: SQLServerConfig2016sp2ent.AsObject,
        userConfig?: SQLServerConfig2016sp2ent.AsObject,
        defaultConfig?: SQLServerConfig2016sp2ent.AsObject,
    }
}
