// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_billing_v1_billing_account_service_pb = require('../../../../yandex/cloud/billing/v1/billing_account_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_billing_v1_billing_account_pb = require('../../../../yandex/cloud/billing/v1/billing_account_pb.js');
var yandex_cloud_billing_v1_billable_object_pb = require('../../../../yandex/cloud/billing/v1/billable_object_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
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

function serialize_yandex_cloud_access_UpdateAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.UpdateAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.UpdateAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_UpdateAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.UpdateAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_BillingAccount(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_pb.BillingAccount)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.BillingAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_BillingAccount(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_pb.BillingAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_BindBillableObjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.BindBillableObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_BindBillableObjectRequest(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_GetBillingAccountRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.GetBillingAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_GetBillingAccountRequest(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBillableObjectBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBillableObjectBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBillableObjectBindingsRequest(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBillableObjectBindingsResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBillableObjectBindingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBillableObjectBindingsResponse(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBillingAccountsRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBillingAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBillingAccountsRequest(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBillingAccountsResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBillingAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBillingAccountsResponse(buffer_arg) {
  return yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing BillingAccount resources.
var BillingAccountServiceService = exports.BillingAccountServiceService = {
  // Returns the specified billing account.
get: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_billing_account_service_pb.GetBillingAccountRequest,
    responseType: yandex_cloud_billing_v1_billing_account_pb.BillingAccount,
    requestSerialize: serialize_yandex_cloud_billing_v1_GetBillingAccountRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_GetBillingAccountRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_BillingAccount,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_BillingAccount,
  },
  // Retrieves the list of billing accounts available for current user.
list: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsRequest,
    responseType: yandex_cloud_billing_v1_billing_account_service_pb.ListBillingAccountsResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListBillingAccountsRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListBillingAccountsRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListBillingAccountsResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListBillingAccountsResponse,
  },
  // Retrieves the list of billable object bindings associated with the specified billing account.
listBillableObjectBindings: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/ListBillableObjectBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsRequest,
    responseType: yandex_cloud_billing_v1_billing_account_service_pb.ListBillableObjectBindingsResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListBillableObjectBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListBillableObjectBindingsRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListBillableObjectBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListBillableObjectBindingsResponse,
  },
  // Binds billable object to the specified billing account.
bindBillableObject: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/BindBillableObject',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_billing_account_service_pb.BindBillableObjectRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_billing_v1_BindBillableObjectRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_BindBillableObjectRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists access bindings for the specified billing account.
listAccessBindings: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Updates access bindings for the specified billing account.
updateAccessBindings: {
    path: '/yandex.cloud.billing.v1.BillingAccountService/UpdateAccessBindings',
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

exports.BillingAccountServiceClient = grpc.makeGenericClientConstructor(BillingAccountServiceService);
