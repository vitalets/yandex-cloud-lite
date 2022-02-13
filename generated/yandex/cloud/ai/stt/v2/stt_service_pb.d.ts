// package: yandex.cloud.ai.stt.v2
// file: yandex/cloud/ai/stt/v2/stt_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as yandex_cloud_api_operation_pb from "../../../../../yandex/cloud/api/operation_pb";
import * as yandex_cloud_operation_operation_pb from "../../../../../yandex/cloud/operation/operation_pb";

export class LongRunningRecognitionRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RecognitionConfig | undefined;
    setConfig(value?: RecognitionConfig): LongRunningRecognitionRequest;

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): RecognitionAudio | undefined;
    setAudio(value?: RecognitionAudio): LongRunningRecognitionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongRunningRecognitionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LongRunningRecognitionRequest): LongRunningRecognitionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongRunningRecognitionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongRunningRecognitionRequest;
    static deserializeBinaryFromReader(message: LongRunningRecognitionRequest, reader: jspb.BinaryReader): LongRunningRecognitionRequest;
}

export namespace LongRunningRecognitionRequest {
    export type AsObject = {
        config?: RecognitionConfig.AsObject,
        audio?: RecognitionAudio.AsObject,
    }
}

export class LongRunningRecognitionResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<SpeechRecognitionResult>;
    setChunksList(value: Array<SpeechRecognitionResult>): LongRunningRecognitionResponse;
    addChunks(value?: SpeechRecognitionResult, index?: number): SpeechRecognitionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LongRunningRecognitionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LongRunningRecognitionResponse): LongRunningRecognitionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LongRunningRecognitionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LongRunningRecognitionResponse;
    static deserializeBinaryFromReader(message: LongRunningRecognitionResponse, reader: jspb.BinaryReader): LongRunningRecognitionResponse;
}

export namespace LongRunningRecognitionResponse {
    export type AsObject = {
        chunksList: Array<SpeechRecognitionResult.AsObject>,
    }
}

export class StreamingRecognitionRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): RecognitionConfig | undefined;
    setConfig(value?: RecognitionConfig): StreamingRecognitionRequest;

    hasAudioContent(): boolean;
    clearAudioContent(): void;
    getAudioContent(): Uint8Array | string;
    getAudioContent_asU8(): Uint8Array;
    getAudioContent_asB64(): string;
    setAudioContent(value: Uint8Array | string): StreamingRecognitionRequest;

    getStreamingRequestCase(): StreamingRecognitionRequest.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingRecognitionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingRecognitionRequest): StreamingRecognitionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingRecognitionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingRecognitionRequest;
    static deserializeBinaryFromReader(message: StreamingRecognitionRequest, reader: jspb.BinaryReader): StreamingRecognitionRequest;
}

export namespace StreamingRecognitionRequest {
    export type AsObject = {
        config?: RecognitionConfig.AsObject,
        audioContent: Uint8Array | string,
    }

    export enum StreamingRequestCase {
        STREAMING_REQUEST_NOT_SET = 0,
        CONFIG = 1,
        AUDIO_CONTENT = 2,
    }

}

export class StreamingRecognitionResponse extends jspb.Message { 
    clearChunksList(): void;
    getChunksList(): Array<SpeechRecognitionChunk>;
    setChunksList(value: Array<SpeechRecognitionChunk>): StreamingRecognitionResponse;
    addChunks(value?: SpeechRecognitionChunk, index?: number): SpeechRecognitionChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingRecognitionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingRecognitionResponse): StreamingRecognitionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingRecognitionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResponse;
    static deserializeBinaryFromReader(message: StreamingRecognitionResponse, reader: jspb.BinaryReader): StreamingRecognitionResponse;
}

export namespace StreamingRecognitionResponse {
    export type AsObject = {
        chunksList: Array<SpeechRecognitionChunk.AsObject>,
    }
}

export class RecognitionAudio extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): RecognitionAudio;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): string;
    setUri(value: string): RecognitionAudio;

    getAudioSourceCase(): RecognitionAudio.AudioSourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecognitionAudio.AsObject;
    static toObject(includeInstance: boolean, msg: RecognitionAudio): RecognitionAudio.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecognitionAudio, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecognitionAudio;
    static deserializeBinaryFromReader(message: RecognitionAudio, reader: jspb.BinaryReader): RecognitionAudio;
}

export namespace RecognitionAudio {
    export type AsObject = {
        content: Uint8Array | string,
        uri: string,
    }

    export enum AudioSourceCase {
        AUDIO_SOURCE_NOT_SET = 0,
        CONTENT = 1,
        URI = 2,
    }

}

export class RecognitionConfig extends jspb.Message { 

    hasSpecification(): boolean;
    clearSpecification(): void;
    getSpecification(): RecognitionSpec | undefined;
    setSpecification(value?: RecognitionSpec): RecognitionConfig;
    getFolderId(): string;
    setFolderId(value: string): RecognitionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecognitionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: RecognitionConfig): RecognitionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecognitionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecognitionConfig;
    static deserializeBinaryFromReader(message: RecognitionConfig, reader: jspb.BinaryReader): RecognitionConfig;
}

export namespace RecognitionConfig {
    export type AsObject = {
        specification?: RecognitionSpec.AsObject,
        folderId: string,
    }
}

export class RecognitionSpec extends jspb.Message { 
    getAudioEncoding(): RecognitionSpec.AudioEncoding;
    setAudioEncoding(value: RecognitionSpec.AudioEncoding): RecognitionSpec;
    getSampleRateHertz(): number;
    setSampleRateHertz(value: number): RecognitionSpec;
    getLanguageCode(): string;
    setLanguageCode(value: string): RecognitionSpec;
    getProfanityFilter(): boolean;
    setProfanityFilter(value: boolean): RecognitionSpec;
    getModel(): string;
    setModel(value: string): RecognitionSpec;
    getPartialResults(): boolean;
    setPartialResults(value: boolean): RecognitionSpec;
    getSingleUtterance(): boolean;
    setSingleUtterance(value: boolean): RecognitionSpec;
    getAudioChannelCount(): number;
    setAudioChannelCount(value: number): RecognitionSpec;
    getRawResults(): boolean;
    setRawResults(value: boolean): RecognitionSpec;
    getLiteratureText(): boolean;
    setLiteratureText(value: boolean): RecognitionSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecognitionSpec.AsObject;
    static toObject(includeInstance: boolean, msg: RecognitionSpec): RecognitionSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecognitionSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecognitionSpec;
    static deserializeBinaryFromReader(message: RecognitionSpec, reader: jspb.BinaryReader): RecognitionSpec;
}

export namespace RecognitionSpec {
    export type AsObject = {
        audioEncoding: RecognitionSpec.AudioEncoding,
        sampleRateHertz: number,
        languageCode: string,
        profanityFilter: boolean,
        model: string,
        partialResults: boolean,
        singleUtterance: boolean,
        audioChannelCount: number,
        rawResults: boolean,
        literatureText: boolean,
    }

    export enum AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    LINEAR16_PCM = 1,
    OGG_OPUS = 2,
    MP3 = 3,
    }

}

export class SpeechRecognitionChunk extends jspb.Message { 
    clearAlternativesList(): void;
    getAlternativesList(): Array<SpeechRecognitionAlternative>;
    setAlternativesList(value: Array<SpeechRecognitionAlternative>): SpeechRecognitionChunk;
    addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;
    getFinal(): boolean;
    setFinal(value: boolean): SpeechRecognitionChunk;
    getEndOfUtterance(): boolean;
    setEndOfUtterance(value: boolean): SpeechRecognitionChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpeechRecognitionChunk.AsObject;
    static toObject(includeInstance: boolean, msg: SpeechRecognitionChunk): SpeechRecognitionChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpeechRecognitionChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpeechRecognitionChunk;
    static deserializeBinaryFromReader(message: SpeechRecognitionChunk, reader: jspb.BinaryReader): SpeechRecognitionChunk;
}

export namespace SpeechRecognitionChunk {
    export type AsObject = {
        alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
        pb_final: boolean,
        endOfUtterance: boolean,
    }
}

export class SpeechRecognitionResult extends jspb.Message { 
    clearAlternativesList(): void;
    getAlternativesList(): Array<SpeechRecognitionAlternative>;
    setAlternativesList(value: Array<SpeechRecognitionAlternative>): SpeechRecognitionResult;
    addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;
    getChannelTag(): number;
    setChannelTag(value: number): SpeechRecognitionResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpeechRecognitionResult.AsObject;
    static toObject(includeInstance: boolean, msg: SpeechRecognitionResult): SpeechRecognitionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpeechRecognitionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpeechRecognitionResult;
    static deserializeBinaryFromReader(message: SpeechRecognitionResult, reader: jspb.BinaryReader): SpeechRecognitionResult;
}

export namespace SpeechRecognitionResult {
    export type AsObject = {
        alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
        channelTag: number,
    }
}

export class SpeechRecognitionAlternative extends jspb.Message { 
    getText(): string;
    setText(value: string): SpeechRecognitionAlternative;
    getConfidence(): number;
    setConfidence(value: number): SpeechRecognitionAlternative;
    clearWordsList(): void;
    getWordsList(): Array<WordInfo>;
    setWordsList(value: Array<WordInfo>): SpeechRecognitionAlternative;
    addWords(value?: WordInfo, index?: number): WordInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpeechRecognitionAlternative.AsObject;
    static toObject(includeInstance: boolean, msg: SpeechRecognitionAlternative): SpeechRecognitionAlternative.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpeechRecognitionAlternative, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpeechRecognitionAlternative;
    static deserializeBinaryFromReader(message: SpeechRecognitionAlternative, reader: jspb.BinaryReader): SpeechRecognitionAlternative;
}

export namespace SpeechRecognitionAlternative {
    export type AsObject = {
        text: string,
        confidence: number,
        wordsList: Array<WordInfo.AsObject>,
    }
}

export class WordInfo extends jspb.Message { 

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_duration_pb.Duration | undefined;
    setStartTime(value?: google_protobuf_duration_pb.Duration): WordInfo;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_duration_pb.Duration | undefined;
    setEndTime(value?: google_protobuf_duration_pb.Duration): WordInfo;
    getWord(): string;
    setWord(value: string): WordInfo;
    getConfidence(): number;
    setConfidence(value: number): WordInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WordInfo.AsObject;
    static toObject(includeInstance: boolean, msg: WordInfo): WordInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WordInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WordInfo;
    static deserializeBinaryFromReader(message: WordInfo, reader: jspb.BinaryReader): WordInfo;
}

export namespace WordInfo {
    export type AsObject = {
        startTime?: google_protobuf_duration_pb.Duration.AsObject,
        endTime?: google_protobuf_duration_pb.Duration.AsObject,
        word: string,
        confidence: number,
    }
}
