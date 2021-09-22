// package: yandex.cloud.serverless.triggers.v1
// file: yandex/cloud/serverless/triggers/v1/predicate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";

export class Predicate extends jspb.Message { 

    hasAndPredicate(): boolean;
    clearAndPredicate(): void;
    getAndPredicate(): AndPredicate | undefined;
    setAndPredicate(value?: AndPredicate): Predicate;

    hasFieldValuePredicate(): boolean;
    clearFieldValuePredicate(): void;
    getFieldValuePredicate(): FieldValuePredicate | undefined;
    setFieldValuePredicate(value?: FieldValuePredicate): Predicate;

    getPredicateCase(): Predicate.PredicateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Predicate.AsObject;
    static toObject(includeInstance: boolean, msg: Predicate): Predicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Predicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Predicate;
    static deserializeBinaryFromReader(message: Predicate, reader: jspb.BinaryReader): Predicate;
}

export namespace Predicate {
    export type AsObject = {
        andPredicate?: AndPredicate.AsObject,
        fieldValuePredicate?: FieldValuePredicate.AsObject,
    }

    export enum PredicateCase {
        PREDICATE_NOT_SET = 0,
        AND_PREDICATE = 2,
        FIELD_VALUE_PREDICATE = 4,
    }

}

export class AndPredicate extends jspb.Message { 
    clearPredicateList(): void;
    getPredicateList(): Array<Predicate>;
    setPredicateList(value: Array<Predicate>): AndPredicate;
    addPredicate(value?: Predicate, index?: number): Predicate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AndPredicate.AsObject;
    static toObject(includeInstance: boolean, msg: AndPredicate): AndPredicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AndPredicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AndPredicate;
    static deserializeBinaryFromReader(message: AndPredicate, reader: jspb.BinaryReader): AndPredicate;
}

export namespace AndPredicate {
    export type AsObject = {
        predicateList: Array<Predicate.AsObject>,
    }
}

export class FieldValuePredicate extends jspb.Message { 
    getFieldPath(): string;
    setFieldPath(value: string): FieldValuePredicate;

    hasExact(): boolean;
    clearExact(): void;
    getExact(): string;
    setExact(value: string): FieldValuePredicate;

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): string;
    setPrefix(value: string): FieldValuePredicate;

    hasSuffix(): boolean;
    clearSuffix(): void;
    getSuffix(): string;
    setSuffix(value: string): FieldValuePredicate;

    getValueCase(): FieldValuePredicate.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldValuePredicate.AsObject;
    static toObject(includeInstance: boolean, msg: FieldValuePredicate): FieldValuePredicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldValuePredicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldValuePredicate;
    static deserializeBinaryFromReader(message: FieldValuePredicate, reader: jspb.BinaryReader): FieldValuePredicate;
}

export namespace FieldValuePredicate {
    export type AsObject = {
        fieldPath: string,
        exact: string,
        prefix: string,
        suffix: string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        EXACT = 3,
        PREFIX = 8,
        SUFFIX = 9,
    }

}
