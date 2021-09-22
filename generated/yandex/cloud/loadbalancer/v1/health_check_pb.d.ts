// package: yandex.cloud.loadbalancer.v1
// file: yandex/cloud/loadbalancer/v1/health_check.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_validation_pb from "../../../../yandex/cloud/validation_pb";

export class HealthCheck extends jspb.Message { 
    getName(): string;
    setName(value: string): HealthCheck;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): google_protobuf_duration_pb.Duration | undefined;
    setInterval(value?: google_protobuf_duration_pb.Duration): HealthCheck;

    hasTimeout(): boolean;
    clearTimeout(): void;
    getTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setTimeout(value?: google_protobuf_duration_pb.Duration): HealthCheck;
    getUnhealthyThreshold(): number;
    setUnhealthyThreshold(value: number): HealthCheck;
    getHealthyThreshold(): number;
    setHealthyThreshold(value: number): HealthCheck;

    hasTcpOptions(): boolean;
    clearTcpOptions(): void;
    getTcpOptions(): HealthCheck.TcpOptions | undefined;
    setTcpOptions(value?: HealthCheck.TcpOptions): HealthCheck;

    hasHttpOptions(): boolean;
    clearHttpOptions(): void;
    getHttpOptions(): HealthCheck.HttpOptions | undefined;
    setHttpOptions(value?: HealthCheck.HttpOptions): HealthCheck;

    getOptionsCase(): HealthCheck.OptionsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheck.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheck): HealthCheck.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheck, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheck;
    static deserializeBinaryFromReader(message: HealthCheck, reader: jspb.BinaryReader): HealthCheck;
}

export namespace HealthCheck {
    export type AsObject = {
        name: string,
        interval?: google_protobuf_duration_pb.Duration.AsObject,
        timeout?: google_protobuf_duration_pb.Duration.AsObject,
        unhealthyThreshold: number,
        healthyThreshold: number,
        tcpOptions?: HealthCheck.TcpOptions.AsObject,
        httpOptions?: HealthCheck.HttpOptions.AsObject,
    }


    export class TcpOptions extends jspb.Message { 
        getPort(): number;
        setPort(value: number): TcpOptions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TcpOptions.AsObject;
        static toObject(includeInstance: boolean, msg: TcpOptions): TcpOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TcpOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TcpOptions;
        static deserializeBinaryFromReader(message: TcpOptions, reader: jspb.BinaryReader): TcpOptions;
    }

    export namespace TcpOptions {
        export type AsObject = {
            port: number,
        }
    }

    export class HttpOptions extends jspb.Message { 
        getPort(): number;
        setPort(value: number): HttpOptions;
        getPath(): string;
        setPath(value: string): HttpOptions;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HttpOptions.AsObject;
        static toObject(includeInstance: boolean, msg: HttpOptions): HttpOptions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HttpOptions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HttpOptions;
        static deserializeBinaryFromReader(message: HttpOptions, reader: jspb.BinaryReader): HttpOptions;
    }

    export namespace HttpOptions {
        export type AsObject = {
            port: number,
            path: string,
        }
    }


    export enum OptionsCase {
        OPTIONS_NOT_SET = 0,
        TCP_OPTIONS = 6,
        HTTP_OPTIONS = 7,
    }

}
