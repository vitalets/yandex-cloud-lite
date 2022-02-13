// package: speechkit.tts.v3
// file: yandex/cloud/ai/tts/v3/tts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AudioContent extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): AudioContent;

    hasAudioSpec(): boolean;
    clearAudioSpec(): void;
    getAudioSpec(): AudioFormatOptions | undefined;
    setAudioSpec(value?: AudioFormatOptions): AudioContent;

    getAudiosourceCase(): AudioContent.AudiosourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioContent.AsObject;
    static toObject(includeInstance: boolean, msg: AudioContent): AudioContent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioContent;
    static deserializeBinaryFromReader(message: AudioContent, reader: jspb.BinaryReader): AudioContent;
}

export namespace AudioContent {
    export type AsObject = {
        content: Uint8Array | string,
        audioSpec?: AudioFormatOptions.AsObject,
    }

    export enum AudiosourceCase {
        AUDIOSOURCE_NOT_SET = 0,
        CONTENT = 1,
    }

}

export class AudioFormatOptions extends jspb.Message { 

    hasRawAudio(): boolean;
    clearRawAudio(): void;
    getRawAudio(): RawAudio | undefined;
    setRawAudio(value?: RawAudio): AudioFormatOptions;

    hasContainerAudio(): boolean;
    clearContainerAudio(): void;
    getContainerAudio(): ContainerAudio | undefined;
    setContainerAudio(value?: ContainerAudio): AudioFormatOptions;

    getAudioformatCase(): AudioFormatOptions.AudioformatCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioFormatOptions.AsObject;
    static toObject(includeInstance: boolean, msg: AudioFormatOptions): AudioFormatOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioFormatOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioFormatOptions;
    static deserializeBinaryFromReader(message: AudioFormatOptions, reader: jspb.BinaryReader): AudioFormatOptions;
}

export namespace AudioFormatOptions {
    export type AsObject = {
        rawAudio?: RawAudio.AsObject,
        containerAudio?: ContainerAudio.AsObject,
    }

    export enum AudioformatCase {
        AUDIOFORMAT_NOT_SET = 0,
        RAW_AUDIO = 1,
        CONTAINER_AUDIO = 2,
    }

}

export class RawAudio extends jspb.Message { 
    getAudioEncoding(): RawAudio.AudioEncoding;
    setAudioEncoding(value: RawAudio.AudioEncoding): RawAudio;
    getSampleRateHertz(): number;
    setSampleRateHertz(value: number): RawAudio;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RawAudio.AsObject;
    static toObject(includeInstance: boolean, msg: RawAudio): RawAudio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RawAudio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RawAudio;
    static deserializeBinaryFromReader(message: RawAudio, reader: jspb.BinaryReader): RawAudio;
}

export namespace RawAudio {
    export type AsObject = {
        audioEncoding: RawAudio.AudioEncoding,
        sampleRateHertz: number,
    }

    export enum AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    LINEAR16_PCM = 1,
    }

}

export class ContainerAudio extends jspb.Message { 
    getContainerAudioType(): ContainerAudio.ContainerAudioType;
    setContainerAudioType(value: ContainerAudio.ContainerAudioType): ContainerAudio;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContainerAudio.AsObject;
    static toObject(includeInstance: boolean, msg: ContainerAudio): ContainerAudio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContainerAudio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContainerAudio;
    static deserializeBinaryFromReader(message: ContainerAudio, reader: jspb.BinaryReader): ContainerAudio;
}

export namespace ContainerAudio {
    export type AsObject = {
        containerAudioType: ContainerAudio.ContainerAudioType,
    }

    export enum ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    WAV = 1,
    OGG_OPUS = 2,
    }

}

export class TextVariable extends jspb.Message { 
    getVariableName(): string;
    setVariableName(value: string): TextVariable;
    getVariableValue(): string;
    setVariableValue(value: string): TextVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextVariable.AsObject;
    static toObject(includeInstance: boolean, msg: TextVariable): TextVariable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextVariable;
    static deserializeBinaryFromReader(message: TextVariable, reader: jspb.BinaryReader): TextVariable;
}

export namespace TextVariable {
    export type AsObject = {
        variableName: string,
        variableValue: string,
    }
}

export class AudioVariable extends jspb.Message { 
    getVariableName(): string;
    setVariableName(value: string): AudioVariable;
    getVariableStartMs(): number;
    setVariableStartMs(value: number): AudioVariable;
    getVariableLengthMs(): number;
    setVariableLengthMs(value: number): AudioVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioVariable.AsObject;
    static toObject(includeInstance: boolean, msg: AudioVariable): AudioVariable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioVariable;
    static deserializeBinaryFromReader(message: AudioVariable, reader: jspb.BinaryReader): AudioVariable;
}

export namespace AudioVariable {
    export type AsObject = {
        variableName: string,
        variableStartMs: number,
        variableLengthMs: number,
    }
}

export class UtteranceSynthesisResponse extends jspb.Message { 

    hasAudioChunk(): boolean;
    clearAudioChunk(): void;
    getAudioChunk(): AudioChunk | undefined;
    setAudioChunk(value?: AudioChunk): UtteranceSynthesisResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtteranceSynthesisResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UtteranceSynthesisResponse): UtteranceSynthesisResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtteranceSynthesisResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtteranceSynthesisResponse;
    static deserializeBinaryFromReader(message: UtteranceSynthesisResponse, reader: jspb.BinaryReader): UtteranceSynthesisResponse;
}

export namespace UtteranceSynthesisResponse {
    export type AsObject = {
        audioChunk?: AudioChunk.AsObject,
    }
}

export class AudioTemplate extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): AudioContent | undefined;
    setAudio(value?: AudioContent): AudioTemplate;

    hasTextTemplate(): boolean;
    clearTextTemplate(): void;
    getTextTemplate(): TextTemplate | undefined;
    setTextTemplate(value?: TextTemplate): AudioTemplate;
    clearVariablesList(): void;
    getVariablesList(): Array<AudioVariable>;
    setVariablesList(value: Array<AudioVariable>): AudioTemplate;
    addVariables(value?: AudioVariable, index?: number): AudioVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: AudioTemplate): AudioTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioTemplate;
    static deserializeBinaryFromReader(message: AudioTemplate, reader: jspb.BinaryReader): AudioTemplate;
}

export namespace AudioTemplate {
    export type AsObject = {
        audio?: AudioContent.AsObject,
        textTemplate?: TextTemplate.AsObject,
        variablesList: Array<AudioVariable.AsObject>,
    }
}

export class AudioChunk extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): AudioChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioChunk.AsObject;
    static toObject(includeInstance: boolean, msg: AudioChunk): AudioChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioChunk;
    static deserializeBinaryFromReader(message: AudioChunk, reader: jspb.BinaryReader): AudioChunk;
}

export namespace AudioChunk {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

export class TextTemplate extends jspb.Message { 
    getTextTemplate(): string;
    setTextTemplate(value: string): TextTemplate;
    clearVariablesList(): void;
    getVariablesList(): Array<TextVariable>;
    setVariablesList(value: Array<TextVariable>): TextTemplate;
    addVariables(value?: TextVariable, index?: number): TextVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: TextTemplate): TextTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextTemplate;
    static deserializeBinaryFromReader(message: TextTemplate, reader: jspb.BinaryReader): TextTemplate;
}

export namespace TextTemplate {
    export type AsObject = {
        textTemplate: string,
        variablesList: Array<TextVariable.AsObject>,
    }
}

export class Hints extends jspb.Message { 

    hasVoice(): boolean;
    clearVoice(): void;
    getVoice(): string;
    setVoice(value: string): Hints;

    hasAudioTemplate(): boolean;
    clearAudioTemplate(): void;
    getAudioTemplate(): AudioTemplate | undefined;
    setAudioTemplate(value?: AudioTemplate): Hints;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): number;
    setSpeed(value: number): Hints;

    hasVolume(): boolean;
    clearVolume(): void;
    getVolume(): number;
    setVolume(value: number): Hints;

    getHintCase(): Hints.HintCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hints.AsObject;
    static toObject(includeInstance: boolean, msg: Hints): Hints.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hints, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hints;
    static deserializeBinaryFromReader(message: Hints, reader: jspb.BinaryReader): Hints;
}

export namespace Hints {
    export type AsObject = {
        voice: string,
        audioTemplate?: AudioTemplate.AsObject,
        speed: number,
        volume: number,
    }

    export enum HintCase {
        HINT_NOT_SET = 0,
        VOICE = 1,
        AUDIO_TEMPLATE = 2,
        SPEED = 3,
        VOLUME = 4,
    }

}

export class UtteranceSynthesisRequest extends jspb.Message { 
    getModel(): string;
    setModel(value: string): UtteranceSynthesisRequest;

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): UtteranceSynthesisRequest;

    hasTextTemplate(): boolean;
    clearTextTemplate(): void;
    getTextTemplate(): TextTemplate | undefined;
    setTextTemplate(value?: TextTemplate): UtteranceSynthesisRequest;
    clearHintsList(): void;
    getHintsList(): Array<Hints>;
    setHintsList(value: Array<Hints>): UtteranceSynthesisRequest;
    addHints(value?: Hints, index?: number): Hints;

    hasOutputAudioSpec(): boolean;
    clearOutputAudioSpec(): void;
    getOutputAudioSpec(): AudioFormatOptions | undefined;
    setOutputAudioSpec(value?: AudioFormatOptions): UtteranceSynthesisRequest;
    getLoudnessNormalizationType(): UtteranceSynthesisRequest.LoudnessNormalizationType;
    setLoudnessNormalizationType(value: UtteranceSynthesisRequest.LoudnessNormalizationType): UtteranceSynthesisRequest;
    getUnsafeMode(): boolean;
    setUnsafeMode(value: boolean): UtteranceSynthesisRequest;

    getUtteranceCase(): UtteranceSynthesisRequest.UtteranceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtteranceSynthesisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UtteranceSynthesisRequest): UtteranceSynthesisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtteranceSynthesisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtteranceSynthesisRequest;
    static deserializeBinaryFromReader(message: UtteranceSynthesisRequest, reader: jspb.BinaryReader): UtteranceSynthesisRequest;
}

export namespace UtteranceSynthesisRequest {
    export type AsObject = {
        model: string,
        text: string,
        textTemplate?: TextTemplate.AsObject,
        hintsList: Array<Hints.AsObject>,
        outputAudioSpec?: AudioFormatOptions.AsObject,
        loudnessNormalizationType: UtteranceSynthesisRequest.LoudnessNormalizationType,
        unsafeMode: boolean,
    }

    export enum LoudnessNormalizationType {
    LOUDNESS_NORMALIZATION_TYPE_UNSPECIFIED = 0,
    MAX_PEAK = 1,
    LUFS = 2,
    }


    export enum UtteranceCase {
        UTTERANCE_NOT_SET = 0,
        TEXT = 2,
        TEXT_TEMPLATE = 3,
    }

}
