// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_api_key_service_pb = require('../../../../yandex/cloud/iam/v1/api_key_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_iam_v1_api_key_pb = require('../../../../yandex/cloud/iam/v1/api_key_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_ApiKey(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_pb.ApiKey)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ApiKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ApiKey(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_pb.ApiKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_CreateApiKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateApiKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_CreateApiKeyResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateApiKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateApiKeyResponse(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_DeleteApiKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.DeleteApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_DeleteApiKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_GetApiKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetApiKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListApiKeyOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListApiKeyOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListApiKeyOperationsRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListApiKeyOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListApiKeyOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListApiKeyOperationsResponse(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListApiKeysRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListApiKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListApiKeysRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListApiKeysResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListApiKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListApiKeysResponse(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_UpdateApiKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.UpdateApiKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_UpdateApiKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing API keys.
var ApiKeyServiceService = exports.ApiKeyServiceService = {
  // Retrieves the list of API keys for the specified service account.
list: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysRequest,
    responseType: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeysResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListApiKeysRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListApiKeysRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListApiKeysResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListApiKeysResponse,
  },
  // Returns the specified API key.
//
// To get the list of available API keys, make a [List] request.
get: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.GetApiKeyRequest,
    responseType: yandex_cloud_iam_v1_api_key_pb.ApiKey,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetApiKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetApiKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ApiKey,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ApiKey,
  },
  // Creates an API key for the specified service account.
create: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyRequest,
    responseType: yandex_cloud_iam_v1_api_key_service_pb.CreateApiKeyResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_CreateApiKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_CreateApiKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_CreateApiKeyResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_CreateApiKeyResponse,
  },
  // Updates the specified API key.
update: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.UpdateApiKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_UpdateApiKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_UpdateApiKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified API key.
delete: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.DeleteApiKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_DeleteApiKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_DeleteApiKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of operations for the specified API key.
listOperations: {
    path: '/yandex.cloud.iam.v1.ApiKeyService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsRequest,
    responseType: yandex_cloud_iam_v1_api_key_service_pb.ListApiKeyOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListApiKeyOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListApiKeyOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListApiKeyOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListApiKeyOperationsResponse,
  },
};

exports.ApiKeyServiceClient = grpc.makeGenericClientConstructor(ApiKeyServiceService);
