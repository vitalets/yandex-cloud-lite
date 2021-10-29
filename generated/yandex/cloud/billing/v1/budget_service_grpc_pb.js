// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_billing_v1_budget_service_pb = require('../../../../yandex/cloud/billing/v1/budget_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_billing_v1_budget_pb = require('../../../../yandex/cloud/billing/v1/budget_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_billing_v1_Budget(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_budget_pb.Budget)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.Budget');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_Budget(buffer_arg) {
  return yandex_cloud_billing_v1_budget_pb.Budget.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_CreateBudgetRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.CreateBudgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_CreateBudgetRequest(buffer_arg) {
  return yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_GetBudgetRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.GetBudgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_GetBudgetRequest(buffer_arg) {
  return yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBudgetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBudgetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBudgetsRequest(buffer_arg) {
  return yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListBudgetsResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListBudgetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListBudgetsResponse(buffer_arg) {
  return yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Budget resources.
var BudgetServiceService = exports.BudgetServiceService = {
  // Returns the specified budget.
get: {
    path: '/yandex.cloud.billing.v1.BudgetService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_budget_service_pb.GetBudgetRequest,
    responseType: yandex_cloud_billing_v1_budget_pb.Budget,
    requestSerialize: serialize_yandex_cloud_billing_v1_GetBudgetRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_GetBudgetRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_Budget,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_Budget,
  },
  // Retrieves the list of budgets corresponding to the specified billing account.
list: {
    path: '/yandex.cloud.billing.v1.BudgetService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsRequest,
    responseType: yandex_cloud_billing_v1_budget_service_pb.ListBudgetsResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListBudgetsRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListBudgetsRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListBudgetsResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListBudgetsResponse,
  },
  // Creates a budget for the specified billing account.
create: {
    path: '/yandex.cloud.billing.v1.BudgetService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_budget_service_pb.CreateBudgetRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_billing_v1_CreateBudgetRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_CreateBudgetRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.BudgetServiceClient = grpc.makeGenericClientConstructor(BudgetServiceService);
