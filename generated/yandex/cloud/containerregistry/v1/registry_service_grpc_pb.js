// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_containerregistry_v1_registry_service_pb = require('../../../../yandex/cloud/containerregistry/v1/registry_service_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_containerregistry_v1_registry_pb = require('../../../../yandex/cloud/containerregistry/v1/registry_pb.js');
var yandex_cloud_containerregistry_v1_ip_permission_pb = require('../../../../yandex/cloud/containerregistry/v1/ip_permission_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_yandex_cloud_access_ListAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_ListAccessBindingsResponse(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsResponse(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_SetAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.SetAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.SetAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_SetAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.SetAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_UpdateAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.UpdateAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.UpdateAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_UpdateAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.UpdateAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_CreateRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.CreateRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_CreateRegistryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_DeleteRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DeleteRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DeleteRegistryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetRegistryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListIpPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListIpPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListIpPermissionRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListIpPermissionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListIpPermissionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListIpPermissionsResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListRegistriesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListRegistriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListRegistriesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListRegistriesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListRegistriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListRegistriesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_Registry(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_pb.Registry)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.Registry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_Registry(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_pb.Registry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_SetIpPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.SetIpPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_SetIpPermissionRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_UpdateIpPermissionRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.UpdateIpPermissionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_UpdateIpPermissionRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_UpdateRegistryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.UpdateRegistryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_UpdateRegistryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Registry resources.
var RegistryServiceService = exports.RegistryServiceService = {
  // Returns the specified Registry resource.
//
// To get the list of available Registry resources, make a [List] request.
get: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.GetRegistryRequest,
    responseType: yandex_cloud_containerregistry_v1_registry_pb.Registry,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetRegistryRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_Registry,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_Registry,
  },
  // Retrieves the list of Registry resources in the specified folder.
list: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesRequest,
    responseType: yandex_cloud_containerregistry_v1_registry_service_pb.ListRegistriesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListRegistriesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListRegistriesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListRegistriesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListRegistriesResponse,
  },
  // Creates a registry in the specified folder.
create: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.CreateRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_CreateRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_CreateRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified registry.
update: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_UpdateRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_UpdateRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified registry.
delete: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.DeleteRegistryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_DeleteRegistryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_DeleteRegistryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // access
//
// Lists access bindings for the specified registry.
listAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified registry.
setAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified registry.
updateAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // ip permissions
//
// List ip permissions for the specified registry.
listIpPermission: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/ListIpPermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionRequest,
    responseType: yandex_cloud_containerregistry_v1_registry_service_pb.ListIpPermissionsResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListIpPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListIpPermissionRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListIpPermissionsResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListIpPermissionsResponse,
  },
  // Set ip permissions for the specified registry.
setIpPermission: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/SetIpPermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.SetIpPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_SetIpPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_SetIpPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Update ip permissions for the specified registry.
updateIpPermission: {
    path: '/yandex.cloud.containerregistry.v1.RegistryService/UpdateIpPermission',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_registry_service_pb.UpdateIpPermissionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_UpdateIpPermissionRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_UpdateIpPermissionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.RegistryServiceClient = grpc.makeGenericClientConstructor(RegistryServiceService);
