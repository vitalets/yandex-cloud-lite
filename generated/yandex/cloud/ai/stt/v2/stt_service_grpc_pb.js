// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ai_stt_v2_stt_service_pb = require('../../../../../yandex/cloud/ai/stt/v2/stt_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');

function serialize_yandex_cloud_ai_stt_v2_LongRunningRecognitionRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.stt.v2.LongRunningRecognitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_stt_v2_LongRunningRecognitionRequest(buffer_arg) {
  return yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_stt_v2_StreamingRecognitionRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.stt.v2.StreamingRecognitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_stt_v2_StreamingRecognitionRequest(buffer_arg) {
  return yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_stt_v2_StreamingRecognitionResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ai.stt.v2.StreamingRecognitionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_stt_v2_StreamingRecognitionResponse(buffer_arg) {
  return yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


var SttServiceService = exports.SttServiceService = {
  longRunningRecognize: {
    path: '/yandex.cloud.ai.stt.v2.SttService/LongRunningRecognize',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ai_stt_v2_stt_service_pb.LongRunningRecognitionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_ai_stt_v2_LongRunningRecognitionRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_stt_v2_LongRunningRecognitionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  streamingRecognize: {
    path: '/yandex.cloud.ai.stt.v2.SttService/StreamingRecognize',
    requestStream: true,
    responseStream: true,
    requestType: yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionRequest,
    responseType: yandex_cloud_ai_stt_v2_stt_service_pb.StreamingRecognitionResponse,
    requestSerialize: serialize_yandex_cloud_ai_stt_v2_StreamingRecognitionRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_stt_v2_StreamingRecognitionRequest,
    responseSerialize: serialize_yandex_cloud_ai_stt_v2_StreamingRecognitionResponse,
    responseDeserialize: deserialize_yandex_cloud_ai_stt_v2_StreamingRecognitionResponse,
  },
};

exports.SttServiceClient = grpc.makeGenericClientConstructor(SttServiceService);
