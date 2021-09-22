// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iot_devices_v1_registry_service_pb = require('../../../../../yandex/cloud/iot/devices/v1/registry_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_iot_devices_v1_registry_pb = require('../../../../../yandex/cloud/iot/devices/v1/registry_pb.js');

function serialize_yandex_cloud_iot_devices_v1_AddRegistryCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.AddRegistryCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_AddRegistryCertificateRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_AddRegistryPasswordRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.AddRegistryPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_AddRegistryPasswordRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_CreateRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.CreateRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_CreateRegistryRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteRegistryCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteRegistryCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryCertificateRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteRegistryPasswordRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteRegistryPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryPasswordRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_DeleteRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.DeleteRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_GetByNameRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.GetByNameRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_GetByNameRegistryRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_GetRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.GetRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_GetRegistryRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListDeviceTopicAliasesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistriesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistriesRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistriesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistriesResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryCertificatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryPasswordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.ListRegistryPasswordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsResponse(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_Registry(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_pb.Registry)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.Registry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_Registry(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_pb.Registry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iot_devices_v1_UpdateRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iot.devices.v1.UpdateRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iot_devices_v1_UpdateRegistryRequest(buffer_arg) {
  return yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing registry.
var RegistryServiceService = exports.RegistryServiceService = {
  // Returns the specified registry.
//
// To get the list of available registries, make a [List] request.
get: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.GetRegistryRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_pb.Registry,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_GetRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_GetRegistryRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_Registry,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_Registry,
  },
  getByName: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/GetByName',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.GetByNameRegistryRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_pb.Registry,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_GetByNameRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_GetByNameRegistryRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_Registry,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_Registry,
  },
  // Retrieves the list of registries in the specified folder.
list: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistriesResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistriesRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistriesRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistriesResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistriesResponse,
  },
  // Creates a registry in the specified folder.
create: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.CreateRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_CreateRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_CreateRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified registry.
update: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.UpdateRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_UpdateRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_UpdateRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified registry.
delete: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of registry certificates for the specified registry.
listCertificates: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/ListCertificates',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryCertificatesResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryCertificatesResponse,
  },
  // Adds a certificate.
addCertificate: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/AddCertificate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_AddRegistryCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_AddRegistryCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified registry certificate.
deleteCertificate: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/DeleteCertificate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteRegistryCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of passwords for the specified registry.
listPasswords: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/ListPasswords',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryPasswordsResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryPasswordsResponse,
  },
  // Adds password for the specified registry.
addPassword: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/AddPassword',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.AddRegistryPasswordRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_AddRegistryPasswordRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_AddRegistryPasswordRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified password.
deletePassword: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/DeletePassword',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.DeleteRegistryPasswordRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_DeleteRegistryPasswordRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_DeleteRegistryPasswordRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of device topic aliases for the specified registry.
listDeviceTopicAliases: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/ListDeviceTopicAliases',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_service_pb.ListDeviceTopicAliasesResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListDeviceTopicAliasesResponse,
  },
  // Lists operations for the specified registry.
listOperations: {
    path: '/yandex.cloud.iot.devices.v1.RegistryService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsRequest,
    responseType: yandex_cloud_iot_devices_v1_registry_service_pb.ListRegistryOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iot_devices_v1_ListRegistryOperationsResponse,
  },
};

exports.RegistryServiceClient = grpc.makeGenericClientConstructor(RegistryServiceService);
