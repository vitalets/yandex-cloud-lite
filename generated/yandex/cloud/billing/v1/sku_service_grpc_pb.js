// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_billing_v1_sku_service_pb = require('../../../../yandex/cloud/billing/v1/sku_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_billing_v1_sku_pb = require('../../../../yandex/cloud/billing/v1/sku_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_billing_v1_GetSkuRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.GetSkuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_GetSkuRequest(buffer_arg) {
  return yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListSkusRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListSkusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListSkusRequest(buffer_arg) {
  return yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListSkusResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListSkusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListSkusResponse(buffer_arg) {
  return yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_Sku(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_sku_pb.Sku)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.Sku');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_Sku(buffer_arg) {
  return yandex_cloud_billing_v1_sku_pb.Sku.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Sku resources.
var SkuServiceService = exports.SkuServiceService = {
  // Returns the specified SKU.
get: {
    path: '/yandex.cloud.billing.v1.SkuService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_sku_service_pb.GetSkuRequest,
    responseType: yandex_cloud_billing_v1_sku_pb.Sku,
    requestSerialize: serialize_yandex_cloud_billing_v1_GetSkuRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_GetSkuRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_Sku,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_Sku,
  },
  // Retrieves the list of SKUs.
list: {
    path: '/yandex.cloud.billing.v1.SkuService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_sku_service_pb.ListSkusRequest,
    responseType: yandex_cloud_billing_v1_sku_service_pb.ListSkusResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListSkusRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListSkusRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListSkusResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListSkusResponse,
  },
};

exports.SkuServiceClient = grpc.makeGenericClientConstructor(SkuServiceService);
