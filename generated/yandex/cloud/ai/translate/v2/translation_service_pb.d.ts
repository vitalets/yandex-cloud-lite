// package: yandex.cloud.ai.translate.v2
// file: yandex/cloud/ai/translate/v2/translation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ai_translate_v2_translation_pb from "../../../../../yandex/cloud/ai/translate/v2/translation_pb";

export class TranslateRequest extends jspb.Message { 
    getSourceLanguageCode(): string;
    setSourceLanguageCode(value: string): TranslateRequest;
    getTargetLanguageCode(): string;
    setTargetLanguageCode(value: string): TranslateRequest;
    getFormat(): TranslateRequest.Format;
    setFormat(value: TranslateRequest.Format): TranslateRequest;
    clearTextsList(): void;
    getTextsList(): Array<string>;
    setTextsList(value: Array<string>): TranslateRequest;
    addTexts(value: string, index?: number): string;
    getFolderId(): string;
    setFolderId(value: string): TranslateRequest;
    getModel(): string;
    setModel(value: string): TranslateRequest;

    hasGlossaryConfig(): boolean;
    clearGlossaryConfig(): void;
    getGlossaryConfig(): TranslateGlossaryConfig | undefined;
    setGlossaryConfig(value?: TranslateGlossaryConfig): TranslateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranslateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TranslateRequest): TranslateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranslateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranslateRequest;
    static deserializeBinaryFromReader(message: TranslateRequest, reader: jspb.BinaryReader): TranslateRequest;
}

export namespace TranslateRequest {
    export type AsObject = {
        sourceLanguageCode: string,
        targetLanguageCode: string,
        format: TranslateRequest.Format,
        textsList: Array<string>,
        folderId: string,
        model: string,
        glossaryConfig?: TranslateGlossaryConfig.AsObject,
    }

    export enum Format {
    FORMAT_UNSPECIFIED = 0,
    PLAIN_TEXT = 1,
    HTML = 2,
    }

}

export class TranslateGlossaryConfig extends jspb.Message { 

    hasGlossaryData(): boolean;
    clearGlossaryData(): void;
    getGlossaryData(): GlossaryData | undefined;
    setGlossaryData(value?: GlossaryData): TranslateGlossaryConfig;

    getGlossarySourceCase(): TranslateGlossaryConfig.GlossarySourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranslateGlossaryConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TranslateGlossaryConfig): TranslateGlossaryConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranslateGlossaryConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranslateGlossaryConfig;
    static deserializeBinaryFromReader(message: TranslateGlossaryConfig, reader: jspb.BinaryReader): TranslateGlossaryConfig;
}

export namespace TranslateGlossaryConfig {
    export type AsObject = {
        glossaryData?: GlossaryData.AsObject,
    }

    export enum GlossarySourceCase {
        GLOSSARY_SOURCE_NOT_SET = 0,
        GLOSSARY_DATA = 1,
    }

}

export class GlossaryData extends jspb.Message { 
    clearGlossaryPairsList(): void;
    getGlossaryPairsList(): Array<GlossaryPair>;
    setGlossaryPairsList(value: Array<GlossaryPair>): GlossaryData;
    addGlossaryPairs(value?: GlossaryPair, index?: number): GlossaryPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlossaryData.AsObject;
    static toObject(includeInstance: boolean, msg: GlossaryData): GlossaryData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlossaryData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlossaryData;
    static deserializeBinaryFromReader(message: GlossaryData, reader: jspb.BinaryReader): GlossaryData;
}

export namespace GlossaryData {
    export type AsObject = {
        glossaryPairsList: Array<GlossaryPair.AsObject>,
    }
}

export class GlossaryPair extends jspb.Message { 
    getSourceText(): string;
    setSourceText(value: string): GlossaryPair;
    getTranslatedText(): string;
    setTranslatedText(value: string): GlossaryPair;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlossaryPair.AsObject;
    static toObject(includeInstance: boolean, msg: GlossaryPair): GlossaryPair.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlossaryPair, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlossaryPair;
    static deserializeBinaryFromReader(message: GlossaryPair, reader: jspb.BinaryReader): GlossaryPair;
}

export namespace GlossaryPair {
    export type AsObject = {
        sourceText: string,
        translatedText: string,
    }
}

export class TranslateResponse extends jspb.Message { 
    clearTranslationsList(): void;
    getTranslationsList(): Array<yandex_cloud_ai_translate_v2_translation_pb.TranslatedText>;
    setTranslationsList(value: Array<yandex_cloud_ai_translate_v2_translation_pb.TranslatedText>): TranslateResponse;
    addTranslations(value?: yandex_cloud_ai_translate_v2_translation_pb.TranslatedText, index?: number): yandex_cloud_ai_translate_v2_translation_pb.TranslatedText;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranslateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TranslateResponse): TranslateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranslateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranslateResponse;
    static deserializeBinaryFromReader(message: TranslateResponse, reader: jspb.BinaryReader): TranslateResponse;
}

export namespace TranslateResponse {
    export type AsObject = {
        translationsList: Array<yandex_cloud_ai_translate_v2_translation_pb.TranslatedText.AsObject>,
    }
}

export class DetectLanguageRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): DetectLanguageRequest;
    clearLanguageCodeHintsList(): void;
    getLanguageCodeHintsList(): Array<string>;
    setLanguageCodeHintsList(value: Array<string>): DetectLanguageRequest;
    addLanguageCodeHints(value: string, index?: number): string;
    getFolderId(): string;
    setFolderId(value: string): DetectLanguageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectLanguageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetectLanguageRequest): DetectLanguageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectLanguageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectLanguageRequest;
    static deserializeBinaryFromReader(message: DetectLanguageRequest, reader: jspb.BinaryReader): DetectLanguageRequest;
}

export namespace DetectLanguageRequest {
    export type AsObject = {
        text: string,
        languageCodeHintsList: Array<string>,
        folderId: string,
    }
}

export class DetectLanguageResponse extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): DetectLanguageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectLanguageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DetectLanguageResponse): DetectLanguageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectLanguageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectLanguageResponse;
    static deserializeBinaryFromReader(message: DetectLanguageResponse, reader: jspb.BinaryReader): DetectLanguageResponse;
}

export namespace DetectLanguageResponse {
    export type AsObject = {
        languageCode: string,
    }
}

export class ListLanguagesRequest extends jspb.Message { 
    getFolderId(): string;
    setFolderId(value: string): ListLanguagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLanguagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLanguagesRequest): ListLanguagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLanguagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLanguagesRequest;
    static deserializeBinaryFromReader(message: ListLanguagesRequest, reader: jspb.BinaryReader): ListLanguagesRequest;
}

export namespace ListLanguagesRequest {
    export type AsObject = {
        folderId: string,
    }
}

export class ListLanguagesResponse extends jspb.Message { 
    clearLanguagesList(): void;
    getLanguagesList(): Array<yandex_cloud_ai_translate_v2_translation_pb.Language>;
    setLanguagesList(value: Array<yandex_cloud_ai_translate_v2_translation_pb.Language>): ListLanguagesResponse;
    addLanguages(value?: yandex_cloud_ai_translate_v2_translation_pb.Language, index?: number): yandex_cloud_ai_translate_v2_translation_pb.Language;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLanguagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLanguagesResponse): ListLanguagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLanguagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLanguagesResponse;
    static deserializeBinaryFromReader(message: ListLanguagesResponse, reader: jspb.BinaryReader): ListLanguagesResponse;
}

export namespace ListLanguagesResponse {
    export type AsObject = {
        languagesList: Array<yandex_cloud_ai_translate_v2_translation_pb.Language.AsObject>,
    }
}
