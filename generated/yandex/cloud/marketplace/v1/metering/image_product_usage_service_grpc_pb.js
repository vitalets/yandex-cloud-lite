// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb = require('../../../../../yandex/cloud/marketplace/v1/metering/image_product_usage_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_marketplace_v1_metering_usage_record_pb = require('../../../../../yandex/cloud/marketplace/v1/metering/usage_record_pb.js');

function serialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageRequest(arg) {
  if (!(arg instanceof yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.marketplace.v1.metering.WriteImageProductUsageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageRequest(buffer_arg) {
  return yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageResponse(arg) {
  if (!(arg instanceof yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse)) {
    throw new Error('Expected argument of type yandex.cloud.marketplace.v1.metering.WriteImageProductUsageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageResponse(buffer_arg) {
  return yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImageProductUsageServiceService = exports.ImageProductUsageServiceService = {
  // Writes image product's usage (authenticated by user's service account)
write: {
    path: '/yandex.cloud.marketplace.v1.metering.ImageProductUsageService/Write',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageRequest,
    responseType: yandex_cloud_marketplace_v1_metering_image_product_usage_service_pb.WriteImageProductUsageResponse,
    requestSerialize: serialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageRequest,
    requestDeserialize: deserialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageRequest,
    responseSerialize: serialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageResponse,
    responseDeserialize: deserialize_yandex_cloud_marketplace_v1_metering_WriteImageProductUsageResponse,
  },
};

exports.ImageProductUsageServiceClient = grpc.makeGenericClientConstructor(ImageProductUsageServiceService);
