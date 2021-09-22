// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iot_devices_v1_device_data_service_pb = require('../../../../../yandex/cloud/iot/devices/v1/device_data_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iot_devices_v1_PublishDeviceDataRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.PublishDeviceDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_PublishDeviceDataRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_PublishDeviceDataResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.PublishDeviceDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_PublishDeviceDataResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods to work with IoT Core messages on behalf of device
var DeviceDataServiceService = exports.DeviceDataServiceService = {
  // Publishes message on behalf of specified device
publish: {
    path: '/yandex.cloud.iot.devices.v1.DeviceDataService/Publish',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataRequest,
    responseType: yandex_cloud_iot_devices_v1_device_data_service_pb.PublishDeviceDataResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_PublishDeviceDataRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_PublishDeviceDataRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_PublishDeviceDataResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_PublishDeviceDataResponse,
  },
};

exports.DeviceDataServiceClient = grpc.makeGenericClientConstructor(DeviceDataServiceService);
