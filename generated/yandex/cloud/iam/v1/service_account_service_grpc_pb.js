// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_service_account_service_pb = require('../../../../yandex/cloud/iam/v1/service_account_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_iam_v1_service_account_pb = require('../../../../yandex/cloud/iam/v1/service_account_pb.js');
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

function serialize_yandex_cloud_iam_v1_CreateServiceAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateServiceAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_DeleteServiceAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.DeleteServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_DeleteServiceAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_GetServiceAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetServiceAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListServiceAccountOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListServiceAccountOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListServiceAccountOperationsRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListServiceAccountOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListServiceAccountOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListServiceAccountOperationsResponse(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListServiceAccountsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListServiceAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListServiceAccountsRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListServiceAccountsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListServiceAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListServiceAccountsResponse(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ServiceAccount(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_pb.ServiceAccount)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ServiceAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ServiceAccount(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_pb.ServiceAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_UpdateServiceAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.UpdateServiceAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_UpdateServiceAccountRequest(buffer_arg) {
  return yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing ServiceAccount resources.
var ServiceAccountServiceService = exports.ServiceAccountServiceService = {
  // Returns the specified ServiceAccount resource.
//
// To get the list of available ServiceAccount resources, make a [List] request.
get: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.GetServiceAccountRequest,
    responseType: yandex_cloud_iam_v1_service_account_pb.ServiceAccount,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetServiceAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetServiceAccountRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ServiceAccount,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ServiceAccount,
  },
  // Retrieves the list of ServiceAccount resources in the specified folder.
list: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsRequest,
    responseType: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountsResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListServiceAccountsRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListServiceAccountsRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListServiceAccountsResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListServiceAccountsResponse,
  },
  // Creates a service account in the specified folder.
create: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.CreateServiceAccountRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_CreateServiceAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_CreateServiceAccountRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified service account.
update: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.UpdateServiceAccountRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_UpdateServiceAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_UpdateServiceAccountRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified service account.
delete: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.DeleteServiceAccountRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_DeleteServiceAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_DeleteServiceAccountRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // access
//
// Lists access bindings for the specified service account.
listAccessBindings: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the service account.
setAccessBindings: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified service account.
updateAccessBindings: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified service account.
listOperations: {
    path: '/yandex.cloud.iam.v1.ServiceAccountService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsRequest,
    responseType: yandex_cloud_iam_v1_service_account_service_pb.ListServiceAccountOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListServiceAccountOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListServiceAccountOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListServiceAccountOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListServiceAccountOperationsResponse,
  },
};

exports.ServiceAccountServiceClient = grpc.makeGenericClientConstructor(ServiceAccountServiceService);
