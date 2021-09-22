// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_organizationmanager_v1_saml_federation_service_pb = require('../../../../../yandex/cloud/organizationmanager/v1/saml/federation_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_organizationmanager_v1_user_account_pb = require('../../../../../yandex/cloud/organizationmanager/v1/user_account_pb.js');
var yandex_cloud_organizationmanager_v1_saml_federation_pb = require('../../../../../yandex/cloud/organizationmanager/v1/saml/federation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_AddFederatedUserAccountsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.AddFederatedUserAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_AddFederatedUserAccountsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_CreateFederationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.CreateFederationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_CreateFederationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_DeleteFederationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.DeleteFederationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_DeleteFederationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_Federation(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.Federation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_Federation(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_GetFederationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.GetFederationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_GetFederationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederatedUserAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederationOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListFederationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_UpdateFederationRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.UpdateFederationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_UpdateFederationRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing federations.
var FederationServiceService = exports.FederationServiceService = {
  // Returns the specified federation.
//
// To get the list of available federations, make a [List] request.
get: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.GetFederationRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_federation_pb.Federation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_GetFederationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_GetFederationRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_Federation,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_Federation,
  },
  // Retrieves the list of federations in the specified organization.
list: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationsResponse,
  },
  // Creates a federation in the specified organization.
create: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.CreateFederationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_CreateFederationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_CreateFederationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified federation.
update: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.UpdateFederationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_UpdateFederationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_UpdateFederationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified federation.
delete: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.DeleteFederationRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_DeleteFederationRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_DeleteFederationRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds users to the specified federation.
addUserAccounts: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/AddUserAccounts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.AddFederatedUserAccountsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_AddFederatedUserAccountsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_AddFederatedUserAccountsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists users for the specified federation.
listUserAccounts: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListUserAccounts',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederatedUserAccountsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederatedUserAccountsResponse,
  },
  // Lists operations for the specified federation.
listOperations: {
    path: '/yandex.cloud.organizationmanager.v1.saml.FederationService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_federation_service_pb.ListFederationOperationsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListFederationOperationsResponse,
  },
};

exports.FederationServiceClient = grpc.makeGenericClientConstructor(FederationServiceService);
