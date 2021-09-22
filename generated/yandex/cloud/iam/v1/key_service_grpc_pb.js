// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_key_service_pb = require('../../../../yandex/cloud/iam/v1/key_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_iam_v1_key_pb = require('../../../../yandex/cloud/iam/v1/key_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_CreateKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_CreateKeyResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.CreateKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_CreateKeyResponse(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_DeleteKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.DeleteKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_DeleteKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_GetKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.GetKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.GetKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_GetKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.GetKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_Key(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_pb.Key)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.Key');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_Key(buffer_arg) {
  return yandex_cloud_iam_v1_key_pb.Key.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListKeyOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListKeyOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListKeyOperationsRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListKeyOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListKeyOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListKeyOperationsResponse(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListKeysRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListKeysRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_ListKeysResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.ListKeysResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.ListKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_ListKeysResponse(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.ListKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_UpdateKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.UpdateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_UpdateKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Key resources.
var KeyServiceService = exports.KeyServiceService = {
  // Returns the specified Key resource.
//
// To get the list of available Key resources, make a [List] request.
get: {
    path: '/yandex.cloud.iam.v1.KeyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.GetKeyRequest,
    responseType: yandex_cloud_iam_v1_key_pb.Key,
    requestSerialize: serialize_yandex_cloud_iam_v1_GetKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_GetKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_Key,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_Key,
  },
  // Retrieves the list of Key resources for the specified service account.
list: {
    path: '/yandex.cloud.iam.v1.KeyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.ListKeysRequest,
    responseType: yandex_cloud_iam_v1_key_service_pb.ListKeysResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListKeysRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListKeysRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListKeysResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListKeysResponse,
  },
  // Creates a key pair for the specified service account.
create: {
    path: '/yandex.cloud.iam.v1.KeyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.CreateKeyRequest,
    responseType: yandex_cloud_iam_v1_key_service_pb.CreateKeyResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_CreateKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_CreateKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_CreateKeyResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_CreateKeyResponse,
  },
  // Updates the specified key pair.
update: {
    path: '/yandex.cloud.iam.v1.KeyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.UpdateKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_UpdateKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_UpdateKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified key pair.
delete: {
    path: '/yandex.cloud.iam.v1.KeyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.DeleteKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_DeleteKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_DeleteKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified key.
listOperations: {
    path: '/yandex.cloud.iam.v1.KeyService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsRequest,
    responseType: yandex_cloud_iam_v1_key_service_pb.ListKeyOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_ListKeyOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_ListKeyOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_ListKeyOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_ListKeyOperationsResponse,
  },
};

exports.KeyServiceClient = grpc.makeGenericClientConstructor(KeyServiceService);
