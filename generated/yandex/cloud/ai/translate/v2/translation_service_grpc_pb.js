// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ai_translate_v2_translation_service_pb = require('../../../../../yandex/cloud/ai/translate/v2/translation_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_ai_translate_v2_translation_pb = require('../../../../../yandex/cloud/ai/translate/v2/translation_pb.js');

function serialize_yandex_cloud_ai_translate_v2_DetectLanguageRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.DetectLanguageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_DetectLanguageRequest(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_translate_v2_DetectLanguageResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.DetectLanguageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_DetectLanguageResponse(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_translate_v2_ListLanguagesRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.ListLanguagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_ListLanguagesRequest(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_translate_v2_ListLanguagesResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.ListLanguagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_ListLanguagesResponse(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_translate_v2_TranslateRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.TranslateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_TranslateRequest(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_translate_v2_TranslateResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ai.translate.v2.TranslateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_translate_v2_TranslateResponse(buffer_arg) {
  return yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for the Yandex Translate service.
var TranslationServiceService = exports.TranslationServiceService = {
  // Translates the text to the specified language.
translate: {
    path: '/yandex.cloud.ai.translate.v2.TranslationService/Translate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateRequest,
    responseType: yandex_cloud_ai_translate_v2_translation_service_pb.TranslateResponse,
    requestSerialize: serialize_yandex_cloud_ai_translate_v2_TranslateRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_translate_v2_TranslateRequest,
    responseSerialize: serialize_yandex_cloud_ai_translate_v2_TranslateResponse,
    responseDeserialize: deserialize_yandex_cloud_ai_translate_v2_TranslateResponse,
  },
  // Detects the language of the text.
detectLanguage: {
    path: '/yandex.cloud.ai.translate.v2.TranslationService/DetectLanguage',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageRequest,
    responseType: yandex_cloud_ai_translate_v2_translation_service_pb.DetectLanguageResponse,
    requestSerialize: serialize_yandex_cloud_ai_translate_v2_DetectLanguageRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_translate_v2_DetectLanguageRequest,
    responseSerialize: serialize_yandex_cloud_ai_translate_v2_DetectLanguageResponse,
    responseDeserialize: deserialize_yandex_cloud_ai_translate_v2_DetectLanguageResponse,
  },
  // Retrieves the list of supported languages.
listLanguages: {
    path: '/yandex.cloud.ai.translate.v2.TranslationService/ListLanguages',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesRequest,
    responseType: yandex_cloud_ai_translate_v2_translation_service_pb.ListLanguagesResponse,
    requestSerialize: serialize_yandex_cloud_ai_translate_v2_ListLanguagesRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_translate_v2_ListLanguagesRequest,
    responseSerialize: serialize_yandex_cloud_ai_translate_v2_ListLanguagesResponse,
    responseDeserialize: deserialize_yandex_cloud_ai_translate_v2_ListLanguagesResponse,
  },
};

exports.TranslationServiceClient = grpc.makeGenericClientConstructor(TranslationServiceService);
