// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/classification.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ClassAnnotation extends jspb.Message { 
    clearPropertiesList(): void;
    getPropertiesList(): Array<Property>;
    setPropertiesList(value: Array<Property>): ClassAnnotation;
    addProperties(value?: Property, index?: number): Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: ClassAnnotation): ClassAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassAnnotation;
    static deserializeBinaryFromReader(message: ClassAnnotation, reader: jspb.BinaryReader): ClassAnnotation;
}

export namespace ClassAnnotation {
    export type AsObject = {
        propertiesList: Array<Property.AsObject>,
    }
}

export class Property extends jspb.Message { 
    getName(): string;
    setName(value: string): Property;
    getProbability(): number;
    setProbability(value: number): Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
    export type AsObject = {
        name: string,
        probability: number,
    }
}
