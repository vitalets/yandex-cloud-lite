// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iot_devices_v1_registry_data_service_pb = require('../../../../../yandex/cloud/iot/devices/v1/registry_data_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iot_devices_v1_PublishRegistryDataRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.PublishRegistryDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_PublishRegistryDataRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_PublishRegistryDataResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.PublishRegistryDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_PublishRegistryDataResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods to work with IoT Core messages on behalf of registry
var RegistryDataServiceService = exports.RegistryDataServiceService = {
  // Publishes message on behalf of specified registry
publish: {
    path: '/yandex.cloud.iot.devices.v1.RegistryDataService/Publish',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_data_service_pb.PublishRegistryDataResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_PublishRegistryDataRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_PublishRegistryDataRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_PublishRegistryDataResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_PublishRegistryDataResponse,
  },
};

exports.RegistryDataServiceClient = grpc.makeGenericClientConstructor(RegistryDataServiceService);
