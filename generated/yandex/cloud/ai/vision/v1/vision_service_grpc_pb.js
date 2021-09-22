// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_ai_vision_v1_vision_service_pb = require('../../../../../yandex/cloud/ai/vision/v1/vision_service_pb.js');
var yandex_cloud_ai_vision_v1_text_detection_pb = require('../../../../../yandex/cloud/ai/vision/v1/text_detection_pb.js');
var yandex_cloud_ai_vision_v1_classification_pb = require('../../../../../yandex/cloud/ai/vision/v1/classification_pb.js');
var yandex_cloud_ai_vision_v1_face_detection_pb = require('../../../../../yandex/cloud/ai/vision/v1/face_detection_pb.js');
var yandex_cloud_ai_vision_v1_image_copy_search_pb = require('../../../../../yandex/cloud/ai/vision/v1/image_copy_search_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_yandex_cloud_ai_vision_v1_BatchAnalyzeRequest(arg) {
  if (!(arg instanceof yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest)) {
    throw new Error('Expected argument of type yandex.cloud.ai.vision.v1.BatchAnalyzeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_vision_v1_BatchAnalyzeRequest(buffer_arg) {
  return yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_ai_vision_v1_BatchAnalyzeResponse(arg) {
  if (!(arg instanceof yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse)) {
    throw new Error('Expected argument of type yandex.cloud.ai.vision.v1.BatchAnalyzeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_ai_vision_v1_BatchAnalyzeResponse(buffer_arg) {
  return yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for the Yandex Vision service.
var VisionServiceService = exports.VisionServiceService = {
  // Analyzes a batch of images and returns results with annotations.
batchAnalyze: {
    path: '/yandex.cloud.ai.vision.v1.VisionService/BatchAnalyze',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeRequest,
    responseType: yandex_cloud_ai_vision_v1_vision_service_pb.BatchAnalyzeResponse,
    requestSerialize: serialize_yandex_cloud_ai_vision_v1_BatchAnalyzeRequest,
    requestDeserialize: deserialize_yandex_cloud_ai_vision_v1_BatchAnalyzeRequest,
    responseSerialize: serialize_yandex_cloud_ai_vision_v1_BatchAnalyzeResponse,
    responseDeserialize: deserialize_yandex_cloud_ai_vision_v1_BatchAnalyzeResponse,
  },
};

exports.VisionServiceClient = grpc.makeGenericClientConstructor(VisionServiceService);
