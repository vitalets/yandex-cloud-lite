// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_organizationmanager_v1_organization_service_pb = require('../../../../yandex/cloud/organizationmanager/v1/organization_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_organizationmanager_v1_organization_pb = require('../../../../yandex/cloud/organizationmanager/v1/organization_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

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

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_GetOrganizationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.GetOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_GetOrganizationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListOrganizationOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListOrganizationOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListOrganizationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_ListOrganizationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.ListOrganizationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_Organization(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_pb.Organization)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.Organization');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_Organization(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_pb.Organization.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.UpdateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_UpdateOrganizationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Organization resources.
var OrganizationServiceService = exports.OrganizationServiceService = {
  // Returns the specified Organization resource.
//
// To get the list of available Organization resources, make a [List] request.
get: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_organization_service_pb.GetOrganizationRequest,
    responseType: yandex_cloud_organizationmanager_v1_organization_pb.Organization,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_GetOrganizationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_GetOrganizationRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_Organization,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_Organization,
  },
  // Retrieves the list of Organization resources.
list: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsRequest,
    responseType: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_ListOrganizationsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_ListOrganizationsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationsResponse,
  },
  // Updates the specified organization.
update: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_organization_service_pb.UpdateOrganizationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_UpdateOrganizationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_UpdateOrganizationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified organization.
listOperations: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsRequest,
    responseType: yandex_cloud_organizationmanager_v1_organization_service_pb.ListOrganizationOperationsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_ListOrganizationOperationsResponse,
  },
  // access
//
// Lists access bindings for the specified organization.
listAccessBindings: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified organization.
setAccessBindings: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified organization.
updateAccessBindings: {
    path: '/yandex.cloud.organizationmanager.v1.OrganizationService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService);
