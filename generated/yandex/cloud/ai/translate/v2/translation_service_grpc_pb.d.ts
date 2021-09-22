// package: yandex.cloud.ai.translate.v2
// file: yandex/cloud/ai/translate/v2/translation_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as yandex_cloud_ai_translate_v2_translation_service_pb from "../../../../../yandex/cloud/ai/translate/v2/translation_service_pb";
import * as yandex_cloud_validation_pb from "../../../../../yandex/cloud/validation_pb";
import * as yandex_cloud_ai_translate_v2_translation_pb from "../../../../../yandex/cloud/ai/translate/v2/translation_pb";

interface ITranslationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    translate: ITranslationServiceService_ITranslate;
    detectLanguage: ITranslationServiceService_IDetectLanguage;
    listLanguages: ITranslationServiceService_IListLanguages;
}

interface ITranslationServiceService_ITranslate extends grpc.MethodDefinition<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse> {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/Translate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse>;
}
interface ITranslationServiceService_IDetectLanguage extends grpc.MethodDefinition<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse> {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse>;
}
interface ITranslationServiceService_IListLanguages extends grpc.MethodDefinition<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse> {
    path: "/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest>;
    requestDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest>;
    responseSerialize: grpc.serialize<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse>;
    responseDeserialize: grpc.deserialize<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse>;
}

export const TranslationServiceService: ITranslationServiceService;

export interface ITranslationServiceServer {
    translate: grpc.handleUnaryCall<yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse>;
    detectLanguage: grpc.handleUnaryCall<yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse>;
    listLanguages: grpc.handleUnaryCall<yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse>;
}

export interface ITranslationServiceClient {
    translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
    listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
    listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
}

export class TranslationServiceClient extends grpc.Client implements ITranslationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    public translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    public translate(request: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse) => void): grpc.ClientUnaryCall;
    public listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
    public listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
    public listLanguages(request: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse) => void): grpc.ClientUnaryCall;
}
