// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/text_detection.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ai_vision_v1_primitives_pb from "../../../../../yandex/cloud/ai/vision/v1/primitives_pb";

export class TextAnnotation extends jspb.Message { 
    clearPagesList(): void;
    getPagesList(): Array<Page>;
    setPagesList(value: Array<Page>): TextAnnotation;
    addPages(value?: Page, index?: number): Page;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: TextAnnotation): TextAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextAnnotation;
    static deserializeBinaryFromReader(message: TextAnnotation, reader: jspb.BinaryReader): TextAnnotation;
}

export namespace TextAnnotation {
    export type AsObject = {
        pagesList: Array<Page.AsObject>,
    }
}

export class Page extends jspb.Message { 
    getWidth(): number;
    setWidth(value: number): Page;
    getHeight(): number;
    setHeight(value: number): Page;
    clearBlocksList(): void;
    getBlocksList(): Array<Block>;
    setBlocksList(value: Array<Block>): Page;
    addBlocks(value?: Block, index?: number): Block;
    clearEntitiesList(): void;
    getEntitiesList(): Array<Entity>;
    setEntitiesList(value: Array<Entity>): Page;
    addEntities(value?: Entity, index?: number): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
    export type AsObject = {
        width: number,
        height: number,
        blocksList: Array<Block.AsObject>,
        entitiesList: Array<Entity.AsObject>,
    }
}

export class Entity extends jspb.Message { 
    getName(): string;
    setName(value: string): Entity;
    getText(): string;
    setText(value: string): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
    export type AsObject = {
        name: string,
        text: string,
    }
}

export class Block extends jspb.Message { 

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): yandex_cloud_ai_vision_v1_primitives_pb.Polygon | undefined;
    setBoundingBox(value?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon): Block;
    clearLinesList(): void;
    getLinesList(): Array<Line>;
    setLinesList(value: Array<Line>): Block;
    addLines(value?: Line, index?: number): Line;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        boundingBox?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon.AsObject,
        linesList: Array<Line.AsObject>,
    }
}

export class Line extends jspb.Message { 

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): yandex_cloud_ai_vision_v1_primitives_pb.Polygon | undefined;
    setBoundingBox(value?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon): Line;
    clearWordsList(): void;
    getWordsList(): Array<Word>;
    setWordsList(value: Array<Word>): Line;
    addWords(value?: Word, index?: number): Word;
    getConfidence(): number;
    setConfidence(value: number): Line;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Line.AsObject;
    static toObject(includeInstance: boolean, msg: Line): Line.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Line, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Line;
    static deserializeBinaryFromReader(message: Line, reader: jspb.BinaryReader): Line;
}

export namespace Line {
    export type AsObject = {
        boundingBox?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon.AsObject,
        wordsList: Array<Word.AsObject>,
        confidence: number,
    }
}

export class Word extends jspb.Message { 

    hasBoundingBox(): boolean;
    clearBoundingBox(): void;
    getBoundingBox(): yandex_cloud_ai_vision_v1_primitives_pb.Polygon | undefined;
    setBoundingBox(value?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon): Word;
    getText(): string;
    setText(value: string): Word;
    getConfidence(): number;
    setConfidence(value: number): Word;
    clearLanguagesList(): void;
    getLanguagesList(): Array<Word.DetectedLanguage>;
    setLanguagesList(value: Array<Word.DetectedLanguage>): Word;
    addLanguages(value?: Word.DetectedLanguage, index?: number): Word.DetectedLanguage;
    getEntityIndex(): number;
    setEntityIndex(value: number): Word;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Word.AsObject;
    static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Word;
    static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
    export type AsObject = {
        boundingBox?: yandex_cloud_ai_vision_v1_primitives_pb.Polygon.AsObject,
        text: string,
        confidence: number,
        languagesList: Array<Word.DetectedLanguage.AsObject>,
        entityIndex: number,
    }


    export class DetectedLanguage extends jspb.Message { 
        getLanguageCode(): string;
        setLanguageCode(value: string): DetectedLanguage;
        getConfidence(): number;
        setConfidence(value: number): DetectedLanguage;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DetectedLanguage.AsObject;
        static toObject(includeInstance: boolean, msg: DetectedLanguage): DetectedLanguage.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DetectedLanguage, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DetectedLanguage;
        static deserializeBinaryFromReader(message: DetectedLanguage, reader: jspb.BinaryReader): DetectedLanguage;
    }

    export namespace DetectedLanguage {
        export type AsObject = {
            languageCode: string,
            confidence: number,
        }
    }

}
