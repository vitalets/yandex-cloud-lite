// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iot_devices_v1_device_service_pb = require('../../../../../yandex/cloud/iot/devices/v1/device_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_iot_devices_v1_device_pb = require('../../../../../yandex/cloud/iot/devices/v1/device_pb.js');

function serialize_yandex_cloud_iot_devices_v1_AddDeviceCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_AddDeviceCertificateRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_AddDevicePasswordRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.AddDevicePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_AddDevicePasswordRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_CreateDeviceRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.CreateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_CreateDeviceRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteDeviceCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteDeviceCertificateRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteDevicePasswordRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteDevicePasswordRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteDeviceRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteDeviceRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_Device(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_pb.Device)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.Device');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_Device(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_pb.Device.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_GetByNameDeviceRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.GetByNameDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_GetByNameDeviceRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_GetDeviceRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_GetDeviceRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDevicesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDevicesRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDevicesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDevicesResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_UpdateDeviceRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.UpdateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_UpdateDeviceRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing devices.
var DeviceServiceService = exports.DeviceServiceService = {
  // Returns the specified device.
//
// To get the list of available devices, make a [List] request.
get: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.GetDeviceRequest,
    responseType: yandex_cloud_iot_devices_v1_device_pb.Device,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_GetDeviceRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_GetDeviceRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_Device,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_Device,
  },
  getByName: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/GetByName',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.GetByNameDeviceRequest,
    responseType: yandex_cloud_iot_devices_v1_device_pb.Device,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_GetByNameDeviceRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_GetByNameDeviceRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_Device,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_Device,
  },
  // Retrieves the list of devices in the specified registry.
list: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesRequest,
    responseType: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicesResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListDevicesRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDevicesRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListDevicesResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDevicesResponse,
  },
  // Creates a device in the specified registry.
create: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.CreateDeviceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_CreateDeviceRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_CreateDeviceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified device.
update: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.UpdateDeviceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_UpdateDeviceRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_UpdateDeviceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified device.
delete: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteDeviceRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteDeviceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of device certificates for the specified device.
listCertificates: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesRequest,
    responseType: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceCertificatesResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceCertificatesResponse,
  },
  // Adds a certificate.
addCertificate: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.AddDeviceCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_AddDeviceCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_AddDeviceCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified device certificate.
deleteCertificate: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDeviceCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteDeviceCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteDeviceCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of passwords for the specified device.
listPasswords: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsRequest,
    responseType: yandex_cloud_iot_devices_v1_device_service_pb.ListDevicePasswordsResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDevicePasswordsResponse,
  },
  // Adds password for the specified device.
addPassword: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/AddPassword',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.AddDevicePasswordRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_AddDevicePasswordRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_AddDevicePasswordRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified password.
deletePassword: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.DeleteDevicePasswordRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteDevicePasswordRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteDevicePasswordRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified device.
listOperations: {
    path: '/yandex.cloud.iot.devices.v1.DeviceService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsRequest,
    responseType: yandex_cloud_iot_devices_v1_device_service_pb.ListDeviceOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceOperationsResponse,
  },
};

exports.DeviceServiceClient = grpc.makeGenericClientConstructor(DeviceServiceService);
