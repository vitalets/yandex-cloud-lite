// package: yandex.cloud.billing.v1
// file: yandex/cloud/billing/v1/sku.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Sku extends jspb.Message { 
    getId(): string;
    setId(value: string): Sku;
    getName(): string;
    setName(value: string): Sku;
    getDescription(): string;
    setDescription(value: string): Sku;
    getServiceId(): string;
    setServiceId(value: string): Sku;
    getPricingUnit(): string;
    setPricingUnit(value: string): Sku;
    clearPricingVersionsList(): void;
    getPricingVersionsList(): Array<PricingVersion>;
    setPricingVersionsList(value: Array<PricingVersion>): Sku;
    addPricingVersions(value?: PricingVersion, index?: number): PricingVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sku.AsObject;
    static toObject(includeInstance: boolean, msg: Sku): Sku.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sku, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sku;
    static deserializeBinaryFromReader(message: Sku, reader: jspb.BinaryReader): Sku;
}

export namespace Sku {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        serviceId: string,
        pricingUnit: string,
        pricingVersionsList: Array<PricingVersion.AsObject>,
    }
}

export class PricingVersion extends jspb.Message { 
    getType(): PricingVersionType;
    setType(value: PricingVersionType): PricingVersion;

    hasEffectiveTime(): boolean;
    clearEffectiveTime(): void;
    getEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): PricingVersion;
    clearPricingExpressionsList(): void;
    getPricingExpressionsList(): Array<PricingExpression>;
    setPricingExpressionsList(value: Array<PricingExpression>): PricingVersion;
    addPricingExpressions(value?: PricingExpression, index?: number): PricingExpression;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PricingVersion.AsObject;
    static toObject(includeInstance: boolean, msg: PricingVersion): PricingVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PricingVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PricingVersion;
    static deserializeBinaryFromReader(message: PricingVersion, reader: jspb.BinaryReader): PricingVersion;
}

export namespace PricingVersion {
    export type AsObject = {
        type: PricingVersionType,
        effectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pricingExpressionsList: Array<PricingExpression.AsObject>,
    }
}

export class PricingExpression extends jspb.Message { 
    clearRatesList(): void;
    getRatesList(): Array<Rate>;
    setRatesList(value: Array<Rate>): PricingExpression;
    addRates(value?: Rate, index?: number): Rate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PricingExpression.AsObject;
    static toObject(includeInstance: boolean, msg: PricingExpression): PricingExpression.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PricingExpression, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PricingExpression;
    static deserializeBinaryFromReader(message: PricingExpression, reader: jspb.BinaryReader): PricingExpression;
}

export namespace PricingExpression {
    export type AsObject = {
        ratesList: Array<Rate.AsObject>,
    }
}

export class Rate extends jspb.Message { 
    getStartPricingQuantity(): string;
    setStartPricingQuantity(value: string): Rate;
    getUnitPrice(): string;
    setUnitPrice(value: string): Rate;
    getCurrency(): string;
    setCurrency(value: string): Rate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
}

export namespace Rate {
    export type AsObject = {
        startPricingQuantity: string,
        unitPrice: string,
        currency: string,
    }
}

export enum PricingVersionType {
    PRICING_VERSION_TYPE_UNSPECIFIED = 0,
    STREET_PRICE = 1,
    CONTRACT_PRICE = 2,
}
