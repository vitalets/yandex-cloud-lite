// package: yandex.cloud.mdb.mysql.v1alpha.config
// file: yandex/cloud/mdb/mysql/v1alpha/config/mysql5_7.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class MysqlConfig5_7 extends jspb.Message { 

    hasInnodbBufferPoolSize(): boolean;
    clearInnodbBufferPoolSize(): void;
    getInnodbBufferPoolSize(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setInnodbBufferPoolSize(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasMaxConnections(): boolean;
    clearMaxConnections(): void;
    getMaxConnections(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxConnections(value?: google_protobuf_wrappers_pb.Int64Value): MysqlConfig5_7;

    hasLongQueryTime(): boolean;
    clearLongQueryTime(): void;
    getLongQueryTime(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setLongQueryTime(value?: google_protobuf_wrappers_pb.DoubleValue): MysqlConfig5_7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfig5_7.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfig5_7): MysqlConfig5_7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfig5_7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfig5_7;
    static deserializeBinaryFromReader(message: MysqlConfig5_7, reader: jspb.BinaryReader): MysqlConfig5_7;
}

export namespace MysqlConfig5_7 {
    export type AsObject = {
        innodbBufferPoolSize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        maxConnections?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        longQueryTime?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    }
}

export class MysqlConfigSet5_7 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): MysqlConfig5_7 | undefined;
    setEffectiveConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): MysqlConfig5_7 | undefined;
    setUserConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): MysqlConfig5_7 | undefined;
    setDefaultConfig(value?: MysqlConfig5_7): MysqlConfigSet5_7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MysqlConfigSet5_7.AsObject;
    static toObject(includeInstance: boolean, msg: MysqlConfigSet5_7): MysqlConfigSet5_7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MysqlConfigSet5_7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MysqlConfigSet5_7;
    static deserializeBinaryFromReader(message: MysqlConfigSet5_7, reader: jspb.BinaryReader): MysqlConfigSet5_7;
}

export namespace MysqlConfigSet5_7 {
    export type AsObject = {
        effectiveConfig?: MysqlConfig5_7.AsObject,
        userConfig?: MysqlConfig5_7.AsObject,
        defaultConfig?: MysqlConfig5_7.AsObject,
    }
}
