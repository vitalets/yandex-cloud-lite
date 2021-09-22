// package: yandex.cloud.quota
// file: yandex/cloud/quota/quota.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class QuotaMetric extends jspb.Message { 
    getName(): string;
    setName(value: string): QuotaMetric;
    getLimit(): number;
    setLimit(value: number): QuotaMetric;
    getUsage(): number;
    setUsage(value: number): QuotaMetric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotaMetric.AsObject;
    static toObject(includeInstance: boolean, msg: QuotaMetric): QuotaMetric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuotaMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotaMetric;
    static deserializeBinaryFromReader(message: QuotaMetric, reader: jspb.BinaryReader): QuotaMetric;
}

export namespace QuotaMetric {
    export type AsObject = {
        name: string,
        limit: number,
        usage: number,
    }
}

export class MetricLimit extends jspb.Message { 
    getName(): string;
    setName(value: string): MetricLimit;
    getLimit(): number;
    setLimit(value: number): MetricLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricLimit.AsObject;
    static toObject(includeInstance: boolean, msg: MetricLimit): MetricLimit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricLimit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricLimit;
    static deserializeBinaryFromReader(message: MetricLimit, reader: jspb.BinaryReader): MetricLimit;
}

export namespace MetricLimit {
    export type AsObject = {
        name: string,
        limit: number,
    }
}

export class QuotaFailure extends jspb.Message { 
    clearViolationsList(): void;
    getViolationsList(): Array<QuotaFailure.Violation>;
    setViolationsList(value: Array<QuotaFailure.Violation>): QuotaFailure;
    addViolations(value?: QuotaFailure.Violation, index?: number): QuotaFailure.Violation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuotaFailure.AsObject;
    static toObject(includeInstance: boolean, msg: QuotaFailure): QuotaFailure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuotaFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuotaFailure;
    static deserializeBinaryFromReader(message: QuotaFailure, reader: jspb.BinaryReader): QuotaFailure;
}

export namespace QuotaFailure {
    export type AsObject = {
        violationsList: Array<QuotaFailure.Violation.AsObject>,
    }


    export class Violation extends jspb.Message { 

        hasMetric(): boolean;
        clearMetric(): void;
        getMetric(): QuotaMetric | undefined;
        setMetric(value?: QuotaMetric): Violation;
        getRequired(): number;
        setRequired(value: number): Violation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Violation.AsObject;
        static toObject(includeInstance: boolean, msg: Violation): Violation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Violation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Violation;
        static deserializeBinaryFromReader(message: Violation, reader: jspb.BinaryReader): Violation;
    }

    export namespace Violation {
        export type AsObject = {
            metric?: QuotaMetric.AsObject,
            required: number,
        }
    }

}
