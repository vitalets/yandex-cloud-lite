// package: yandex.cloud.ai.vision.v1
// file: yandex/cloud/ai/vision/v1/vision_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as yandex_cloud_ai_vision_v1_text_detection_pb from "../../../../../yandex/cloud/ai/vision/v1/text_detection_pb";
import * as yandex_cloud_ai_vision_v1_classification_pb from "../../../../../yandex/cloud/ai/vision/v1/classification_pb";
import * as yandex_cloud_ai_vision_v1_face_detection_pb from "../../../../../yandex/cloud/ai/vision/v1/face_detection_pb";
import * as yandex_cloud_ai_vision_v1_image_copy_search_pb from "../../../../../yandex/cloud/ai/vision/v1/image_copy_search_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class BatchAnalyzeRequest extends jspb.Message { 
    clearAnalyzeSpecsList(): void;
    getAnalyzeSpecsList(): Array<AnalyzeSpec>;
    setAnalyzeSpecsList(value: Array<AnalyzeSpec>): BatchAnalyzeRequest;
    addAnalyzeSpecs(value?: AnalyzeSpec, index?: number): AnalyzeSpec;
    getFolderId(): string;
    setFolderId(value: string): BatchAnalyzeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchAnalyzeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchAnalyzeRequest): BatchAnalyzeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchAnalyzeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchAnalyzeRequest;
    static deserializeBinaryFromReader(message: BatchAnalyzeRequest, reader: jspb.BinaryReader): BatchAnalyzeRequest;
}

export namespace BatchAnalyzeRequest {
    export type AsObject = {
        analyzeSpecsList: Array<AnalyzeSpec.AsObject>,
        folderId: string,
    }
}

export class AnalyzeSpec extends jspb.Message { 

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): AnalyzeSpec;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): string;
    setSignature(value: string): AnalyzeSpec;
    clearFeaturesList(): void;
    getFeaturesList(): Array<Feature>;
    setFeaturesList(value: Array<Feature>): AnalyzeSpec;
    addFeatures(value?: Feature, index?: number): Feature;
    getMimeType(): string;
    setMimeType(value: string): AnalyzeSpec;

    getSourceCase(): AnalyzeSpec.SourceCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzeSpec.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzeSpec): AnalyzeSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzeSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzeSpec;
    static deserializeBinaryFromReader(message: AnalyzeSpec, reader: jspb.BinaryReader): AnalyzeSpec;
}

export namespace AnalyzeSpec {
    export type AsObject = {
        content: Uint8Array | string,
        signature: string,
        featuresList: Array<Feature.AsObject>,
        mimeType: string,
    }

    export enum SourceCase {
        SOURCE_NOT_SET = 0,
        CONTENT = 1,
        SIGNATURE = 5,
    }

}

export class Feature extends jspb.Message { 
    getType(): Feature.Type;
    setType(value: Feature.Type): Feature;

    hasClassificationConfig(): boolean;
    clearClassificationConfig(): void;
    getClassificationConfig(): FeatureClassificationConfig | undefined;
    setClassificationConfig(value?: FeatureClassificationConfig): Feature;

    hasTextDetectionConfig(): boolean;
    clearTextDetectionConfig(): void;
    getTextDetectionConfig(): FeatureTextDetectionConfig | undefined;
    setTextDetectionConfig(value?: FeatureTextDetectionConfig): Feature;

    getConfigCase(): Feature.ConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feature.AsObject;
    static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feature;
    static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
    export type AsObject = {
        type: Feature.Type,
        classificationConfig?: FeatureClassificationConfig.AsObject,
        textDetectionConfig?: FeatureTextDetectionConfig.AsObject,
    }

    export enum Type {
    TYPE_UNSPECIFIED = 0,
    TEXT_DETECTION = 1,
    CLASSIFICATION = 2,
    FACE_DETECTION = 3,
    IMAGE_COPY_SEARCH = 4,
    }


    export enum ConfigCase {
        CONFIG_NOT_SET = 0,
        CLASSIFICATION_CONFIG = 2,
        TEXT_DETECTION_CONFIG = 3,
    }

}

export class FeatureClassificationConfig extends jspb.Message { 
    getModel(): string;
    setModel(value: string): FeatureClassificationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureClassificationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureClassificationConfig): FeatureClassificationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureClassificationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureClassificationConfig;
    static deserializeBinaryFromReader(message: FeatureClassificationConfig, reader: jspb.BinaryReader): FeatureClassificationConfig;
}

export namespace FeatureClassificationConfig {
    export type AsObject = {
        model: string,
    }
}

export class FeatureTextDetectionConfig extends jspb.Message { 
    clearLanguageCodesList(): void;
    getLanguageCodesList(): Array<string>;
    setLanguageCodesList(value: Array<string>): FeatureTextDetectionConfig;
    addLanguageCodes(value: string, index?: number): string;
    getModel(): string;
    setModel(value: string): FeatureTextDetectionConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureTextDetectionConfig.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureTextDetectionConfig): FeatureTextDetectionConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureTextDetectionConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureTextDetectionConfig;
    static deserializeBinaryFromReader(message: FeatureTextDetectionConfig, reader: jspb.BinaryReader): FeatureTextDetectionConfig;
}

export namespace FeatureTextDetectionConfig {
    export type AsObject = {
        languageCodesList: Array<string>,
        model: string,
    }
}

export class BatchAnalyzeResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<AnalyzeResult>;
    setResultsList(value: Array<AnalyzeResult>): BatchAnalyzeResponse;
    addResults(value?: AnalyzeResult, index?: number): AnalyzeResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchAnalyzeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchAnalyzeResponse): BatchAnalyzeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchAnalyzeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchAnalyzeResponse;
    static deserializeBinaryFromReader(message: BatchAnalyzeResponse, reader: jspb.BinaryReader): BatchAnalyzeResponse;
}

export namespace BatchAnalyzeResponse {
    export type AsObject = {
        resultsList: Array<AnalyzeResult.AsObject>,
    }
}

export class AnalyzeResult extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<FeatureResult>;
    setResultsList(value: Array<FeatureResult>): AnalyzeResult;
    addResults(value?: FeatureResult, index?: number): FeatureResult;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): AnalyzeResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnalyzeResult.AsObject;
    static toObject(includeInstance: boolean, msg: AnalyzeResult): AnalyzeResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnalyzeResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnalyzeResult;
    static deserializeBinaryFromReader(message: AnalyzeResult, reader: jspb.BinaryReader): AnalyzeResult;
}

export namespace AnalyzeResult {
    export type AsObject = {
        resultsList: Array<FeatureResult.AsObject>,
        error?: google_rpc_status_pb.Status.AsObject,
    }
}

export class FeatureResult extends jspb.Message { 

    hasTextDetection(): boolean;
    clearTextDetection(): void;
    getTextDetection(): yandex_cloud_ai_vision_v1_text_detection_pb.TextAnnotation | undefined;
    setTextDetection(value?: yandex_cloud_ai_vision_v1_text_detection_pb.TextAnnotation): FeatureResult;

    hasClassification(): boolean;
    clearClassification(): void;
    getClassification(): yandex_cloud_ai_vision_v1_classification_pb.ClassAnnotation | undefined;
    setClassification(value?: yandex_cloud_ai_vision_v1_classification_pb.ClassAnnotation): FeatureResult;

    hasFaceDetection(): boolean;
    clearFaceDetection(): void;
    getFaceDetection(): yandex_cloud_ai_vision_v1_face_detection_pb.FaceAnnotation | undefined;
    setFaceDetection(value?: yandex_cloud_ai_vision_v1_face_detection_pb.FaceAnnotation): FeatureResult;

    hasImageCopySearch(): boolean;
    clearImageCopySearch(): void;
    getImageCopySearch(): yandex_cloud_ai_vision_v1_image_copy_search_pb.ImageCopySearchAnnotation | undefined;
    setImageCopySearch(value?: yandex_cloud_ai_vision_v1_image_copy_search_pb.ImageCopySearchAnnotation): FeatureResult;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): FeatureResult;

    getFeatureCase(): FeatureResult.FeatureCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeatureResult.AsObject;
    static toObject(includeInstance: boolean, msg: FeatureResult): FeatureResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeatureResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeatureResult;
    static deserializeBinaryFromReader(message: FeatureResult, reader: jspb.BinaryReader): FeatureResult;
}

export namespace FeatureResult {
    export type AsObject = {
        textDetection?: yandex_cloud_ai_vision_v1_text_detection_pb.TextAnnotation.AsObject,
        classification?: yandex_cloud_ai_vision_v1_classification_pb.ClassAnnotation.AsObject,
        faceDetection?: yandex_cloud_ai_vision_v1_face_detection_pb.FaceAnnotation.AsObject,
        imageCopySearch?: yandex_cloud_ai_vision_v1_image_copy_search_pb.ImageCopySearchAnnotation.AsObject,
        error?: google_rpc_status_pb.Status.AsObject,
    }

    export enum FeatureCase {
        FEATURE_NOT_SET = 0,
        TEXT_DETECTION = 2,
        CLASSIFICATION = 3,
        FACE_DETECTION = 4,
        IMAGE_COPY_SEARCH = 5,
    }

}
