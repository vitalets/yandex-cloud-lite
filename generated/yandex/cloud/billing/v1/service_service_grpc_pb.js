// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_billing_v1_service_service_pb = require('../../../../yandex/cloud/billing/v1/service_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_billing_v1_service_pb = require('../../../../yandex/cloud/billing/v1/service_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_billing_v1_GetServiceRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_service_service_pb.GetServiceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.GetServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_GetServiceRequest(buffer_arg) {
  return yandex_cloud_billing_v1_service_service_pb.GetServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListServicesRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_service_service_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListServicesRequest(buffer_arg) {
  return yandex_cloud_billing_v1_service_service_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListServicesResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_service_service_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListServicesResponse(buffer_arg) {
  return yandex_cloud_billing_v1_service_service_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_Service(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_service_pb.Service)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.Service');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_Service(buffer_arg) {
  return yandex_cloud_billing_v1_service_pb.Service.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Service resources.
var ServiceServiceService = exports.ServiceServiceService = {
  // Returns the specified service.
get: {
    path: '/yandex.cloud.billing.v1.ServiceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_service_service_pb.GetServiceRequest,
    responseType: yandex_cloud_billing_v1_service_pb.Service,
    requestSerialize: serialize_yandex_cloud_billing_v1_GetServiceRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_GetServiceRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_Service,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_Service,
  },
  // Retrieves the list of services.
list: {
    path: '/yandex.cloud.billing.v1.ServiceService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_service_service_pb.ListServicesRequest,
    responseType: yandex_cloud_billing_v1_service_service_pb.ListServicesResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListServicesRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListServicesRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListServicesResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListServicesResponse,
  },
};

exports.ServiceServiceClient = grpc.makeGenericClientConstructor(ServiceServiceService);
