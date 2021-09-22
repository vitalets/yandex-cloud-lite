// package: yandex.cloud.mdb.elasticsearch.v1.config
// file: yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as yandex_cloud_validation_pb from "../../../../../../yandex/cloud/validation_pb";

export class ElasticsearchConfig7 extends jspb.Message { 

    hasMaxClauseCount(): boolean;
    clearMaxClauseCount(): void;
    getMaxClauseCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setMaxClauseCount(value?: google_protobuf_wrappers_pb.Int64Value): ElasticsearchConfig7;
    getFielddataCacheSize(): string;
    setFielddataCacheSize(value: string): ElasticsearchConfig7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElasticsearchConfig7.AsObject;
    static toObject(includeInstance: boolean, msg: ElasticsearchConfig7): ElasticsearchConfig7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElasticsearchConfig7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElasticsearchConfig7;
    static deserializeBinaryFromReader(message: ElasticsearchConfig7, reader: jspb.BinaryReader): ElasticsearchConfig7;
}

export namespace ElasticsearchConfig7 {
    export type AsObject = {
        maxClauseCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
        fielddataCacheSize: string,
    }
}

export class ElasticsearchConfigSet7 extends jspb.Message { 

    hasEffectiveConfig(): boolean;
    clearEffectiveConfig(): void;
    getEffectiveConfig(): ElasticsearchConfig7 | undefined;
    setEffectiveConfig(value?: ElasticsearchConfig7): ElasticsearchConfigSet7;

    hasUserConfig(): boolean;
    clearUserConfig(): void;
    getUserConfig(): ElasticsearchConfig7 | undefined;
    setUserConfig(value?: ElasticsearchConfig7): ElasticsearchConfigSet7;

    hasDefaultConfig(): boolean;
    clearDefaultConfig(): void;
    getDefaultConfig(): ElasticsearchConfig7 | undefined;
    setDefaultConfig(value?: ElasticsearchConfig7): ElasticsearchConfigSet7;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElasticsearchConfigSet7.AsObject;
    static toObject(includeInstance: boolean, msg: ElasticsearchConfigSet7): ElasticsearchConfigSet7.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElasticsearchConfigSet7, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElasticsearchConfigSet7;
    static deserializeBinaryFromReader(message: ElasticsearchConfigSet7, reader: jspb.BinaryReader): ElasticsearchConfigSet7;
}

export namespace ElasticsearchConfigSet7 {
    export type AsObject = {
        effectiveConfig?: ElasticsearchConfig7.AsObject,
        userConfig?: ElasticsearchConfig7.AsObject,
        defaultConfig?: ElasticsearchConfig7.AsObject,
    }
}
