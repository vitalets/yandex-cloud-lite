// package: yandex.cloud.datatransfer.v1
// file: yandex/cloud/datatransfer/v1/endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_datatransfer_v1_endpoint_common_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint/common_pb";
import * as yandex_cloud_datatransfer_v1_endpoint_mysql_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint/mysql_pb";
import * as yandex_cloud_datatransfer_v1_endpoint_postgres_pb from "../../../../yandex/cloud/datatransfer/v1/endpoint/postgres_pb";

export class Endpoint extends jspb.Message { 
    getId(): string;
    setId(value: string): Endpoint;
    getFolderId(): string;
    setFolderId(value: string): Endpoint;
    getName(): string;
    setName(value: string): Endpoint;
    getDescription(): string;
    setDescription(value: string): Endpoint;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): EndpointSettings | undefined;
    setSettings(value?: EndpointSettings): Endpoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        id: string,
        folderId: string,
        name: string,
        description: string,

        labelsMap: Array<[string, string]>,
        settings?: EndpointSettings.AsObject,
    }
}

export class EndpointSettings extends jspb.Message { 

    hasMysqlSource(): boolean;
    clearMysqlSource(): void;
    getMysqlSource(): yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlSource | undefined;
    setMysqlSource(value?: yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlSource): EndpointSettings;

    hasPostgresSource(): boolean;
    clearPostgresSource(): void;
    getPostgresSource(): yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresSource | undefined;
    setPostgresSource(value?: yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresSource): EndpointSettings;

    hasMysqlTarget(): boolean;
    clearMysqlTarget(): void;
    getMysqlTarget(): yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlTarget | undefined;
    setMysqlTarget(value?: yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlTarget): EndpointSettings;

    hasPostgresTarget(): boolean;
    clearPostgresTarget(): void;
    getPostgresTarget(): yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresTarget | undefined;
    setPostgresTarget(value?: yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresTarget): EndpointSettings;

    getSettingsCase(): EndpointSettings.SettingsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndpointSettings.AsObject;
    static toObject(includeInstance: boolean, msg: EndpointSettings): EndpointSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndpointSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndpointSettings;
    static deserializeBinaryFromReader(message: EndpointSettings, reader: jspb.BinaryReader): EndpointSettings;
}

export namespace EndpointSettings {
    export type AsObject = {
        mysqlSource?: yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlSource.AsObject,
        postgresSource?: yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresSource.AsObject,
        mysqlTarget?: yandex_cloud_datatransfer_v1_endpoint_mysql_pb.MysqlTarget.AsObject,
        postgresTarget?: yandex_cloud_datatransfer_v1_endpoint_postgres_pb.PostgresTarget.AsObject,
    }

    export enum SettingsCase {
        SETTINGS_NOT_SET = 0,
        MYSQL_SOURCE = 1,
        POSTGRES_SOURCE = 2,
        MYSQL_TARGET = 101,
        POSTGRES_TARGET = 102,
    }

}
