// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_iam_v1_awscompatibility_access_key_service_pb = require('../../../../../yandex/cloud/iam/v1/awscompatibility/access_key_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_iam_v1_awscompatibility_access_key_pb = require('../../../../../yandex/cloud/iam/v1/awscompatibility/access_key_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_iam_v1_awscompatibility_AccessKey(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.AccessKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_AccessKey(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.CreateAccessKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyResponse(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_DeleteAccessKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.DeleteAccessKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_DeleteAccessKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_GetAccessKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.GetAccessKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_GetAccessKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.ListAccessKeyOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsResponse(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.ListAccessKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysResponse(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.ListAccessKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysResponse(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_iam_v1_awscompatibility_UpdateAccessKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.iam.v1.awscompatibility.UpdateAccessKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_iam_v1_awscompatibility_UpdateAccessKeyRequest(buffer_arg) {
  return yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing access keys.
var AccessKeyServiceService = exports.AccessKeyServiceService = {
  // Retrieves the list of access keys for the specified service account.
list: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysRequest,
    responseType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeysResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeysResponse,
  },
  // Returns the specified access key.
//
// To get the list of available access keys, make a [List] request.
get: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.GetAccessKeyRequest,
    responseType: yandex_cloud_iam_v1_awscompatibility_access_key_pb.AccessKey,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_GetAccessKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_GetAccessKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_AccessKey,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_AccessKey,
  },
  // Creates an access key for the specified service account.
create: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyRequest,
    responseType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.CreateAccessKeyResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_CreateAccessKeyResponse,
  },
  // Updates the specified access key.
update: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.UpdateAccessKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_UpdateAccessKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_UpdateAccessKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified access key.
delete: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.DeleteAccessKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_DeleteAccessKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_DeleteAccessKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of operations for the specified access key.
listOperations: {
    path: '/yandex.cloud.iam.v1.awscompatibility.AccessKeyService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsRequest,
    responseType: yandex_cloud_iam_v1_awscompatibility_access_key_service_pb.ListAccessKeyOperationsResponse,
    requestSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsRequest,
    responseSerialize: serialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_iam_v1_awscompatibility_ListAccessKeyOperationsResponse,
  },
};

exports.AccessKeyServiceClient = grpc.makeGenericClientConstructor(AccessKeyServiceService);
