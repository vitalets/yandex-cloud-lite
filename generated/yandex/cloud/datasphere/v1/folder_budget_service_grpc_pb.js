// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datasphere_v1_folder_budget_service_pb = require('../../../../yandex/cloud/datasphere/v1/folder_budget_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetFolderBudgetRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetFolderBudgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetFolderBudgetRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetFolderBudgetResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetFolderBudgetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetFolderBudgetResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_SetFolderBudgetRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.SetFolderBudgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_SetFolderBudgetRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Datasphere folder budgets.
var FolderBudgetServiceService = exports.FolderBudgetServiceService = {
  // Returns the specified folder budget.
get: {
    path: '/yandex.cloud.datasphere.v1.FolderBudgetService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetRequest,
    responseType: yandex_cloud_datasphere_v1_folder_budget_service_pb.GetFolderBudgetResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_GetFolderBudgetRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_GetFolderBudgetRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_GetFolderBudgetResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_GetFolderBudgetResponse,
  },
  // Sets the unit balance and the limits of the specified folder budget.
set: {
    path: '/yandex.cloud.datasphere.v1.FolderBudgetService/Set',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_folder_budget_service_pb.SetFolderBudgetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_SetFolderBudgetRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_SetFolderBudgetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.FolderBudgetServiceClient = grpc.makeGenericClientConstructor(FolderBudgetServiceService);
