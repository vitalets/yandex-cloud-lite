// package: yandex.cloud.ai.translate.v2
// file: yandex/cloud/ai/translate/v2/translation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TranslatedText extends jspb.Message { 
    getText(): string;
    setText(value: string): TranslatedText;
    getDetectedLanguageCode(): string;
    setDetectedLanguageCode(value: string): TranslatedText;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranslatedText.AsObject;
    static toObject(includeInstance: boolean, msg: TranslatedText): TranslatedText.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranslatedText, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranslatedText;
    static deserializeBinaryFromReader(message: TranslatedText, reader: jspb.BinaryReader): TranslatedText;
}

export namespace TranslatedText {
    export type AsObject = {
        text: string,
        detectedLanguageCode: string,
    }
}

export class Language extends jspb.Message { 
    getCode(): string;
    setCode(value: string): Language;
    getName(): string;
    setName(value: string): Language;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Language.AsObject;
    static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Language;
    static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
    export type AsObject = {
        code: string,
        name: string,
    }
}
