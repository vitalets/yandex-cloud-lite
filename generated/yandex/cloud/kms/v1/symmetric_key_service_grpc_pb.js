// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_kms_v1_symmetric_key_service_pb = require('../../../../yandex/cloud/kms/v1/symmetric_key_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_kms_v1_symmetric_key_pb = require('../../../../yandex/cloud/kms/v1/symmetric_key_pb.js');

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

function serialize_yandex_cloud_kms_v1_CancelSymmetricKeyVersionDestructionRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.CancelSymmetricKeyVersionDestructionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_CancelSymmetricKeyVersionDestructionRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_CreateSymmetricKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.CreateSymmetricKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_CreateSymmetricKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_DeleteSymmetricKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.DeleteSymmetricKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_DeleteSymmetricKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_GetSymmetricKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.GetSymmetricKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_GetSymmetricKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeyOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeyOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeyVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeyVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeysRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeysRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ListSymmetricKeysResponse(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ListSymmetricKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ListSymmetricKeysResponse(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_RotateSymmetricKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.RotateSymmetricKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_RotateSymmetricKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_ScheduleSymmetricKeyVersionDestructionRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.ScheduleSymmetricKeyVersionDestructionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_ScheduleSymmetricKeyVersionDestructionRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SetPrimarySymmetricKeyVersionRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SetPrimarySymmetricKeyVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SetPrimarySymmetricKeyVersionRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_SymmetricKey(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.SymmetricKey');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_SymmetricKey(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_kms_v1_UpdateSymmetricKeyRequest(arg) {
  if (!(arg instanceof yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.kms.v1.UpdateSymmetricKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_kms_v1_UpdateSymmetricKeyRequest(buffer_arg) {
  return yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Set of methods for managing symmetric KMS keys.
var SymmetricKeyServiceService = exports.SymmetricKeyServiceService = {
  // --- control plane
//
// Creates a symmetric KMS key in the specified folder.
create: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.CreateSymmetricKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_CreateSymmetricKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_CreateSymmetricKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified symmetric KMS key.
//
//  To get the list of available symmetric KMS keys, make a [SymmetricKeyService.List] request.
get: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.GetSymmetricKeyRequest,
    responseType: yandex_cloud_kms_v1_symmetric_key_pb.SymmetricKey,
    requestSerialize: serialize_yandex_cloud_kms_v1_GetSymmetricKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_GetSymmetricKeyRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_SymmetricKey,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_SymmetricKey,
  },
  // Returns the list of symmetric KMS keys in the specified folder.
list: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysRequest,
    responseType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeysResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeysRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeysRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeysResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeysResponse,
  },
  // Returns the list of versions of the specified symmetric KMS key.
listVersions: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsRequest,
    responseType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyVersionsResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeyVersionsResponse,
  },
  // Updates the specified symmetric KMS key.
update: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.UpdateSymmetricKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_UpdateSymmetricKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_UpdateSymmetricKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified symmetric KMS key. This action also automatically schedules
// the destruction of all of the key's versions in 72 hours.
//
// The key and its versions appear absent in [SymmetricKeyService.Get] and [SymmetricKeyService.List]
// requests, but can be restored within 72 hours with a request to tech support.
delete: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.DeleteSymmetricKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_DeleteSymmetricKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_DeleteSymmetricKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Sets the primary version for the specified key. The primary version is used
// by default for all encrypt/decrypt operations where no version ID is specified.
setPrimaryVersion: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetPrimaryVersion',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.SetPrimarySymmetricKeyVersionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_SetPrimarySymmetricKeyVersionRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_SetPrimarySymmetricKeyVersionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Schedules the specified key version for destruction.
//
// Scheduled destruction can be cancelled with the [SymmetricKeyService.CancelVersionDestruction] method.
scheduleVersionDestruction: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/ScheduleVersionDestruction',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.ScheduleSymmetricKeyVersionDestructionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_ScheduleSymmetricKeyVersionDestructionRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_ScheduleSymmetricKeyVersionDestructionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Cancels previously scheduled version destruction, if the version hasn't been destroyed yet.
cancelVersionDestruction: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/CancelVersionDestruction',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.CancelSymmetricKeyVersionDestructionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_CancelSymmetricKeyVersionDestructionRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_CancelSymmetricKeyVersionDestructionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Rotates the specified key: creates a new key version and makes it the primary version.
// The old version remains available for decryption of ciphertext encrypted with it.
rotate: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/Rotate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.RotateSymmetricKeyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_kms_v1_RotateSymmetricKeyRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_RotateSymmetricKeyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified symmetric KMS key.
listOperations: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsRequest,
    responseType: yandex_cloud_kms_v1_symmetric_key_service_pb.ListSymmetricKeyOperationsResponse,
    requestSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsRequest,
    responseSerialize: serialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_kms_v1_ListSymmetricKeyOperationsResponse,
  },
  // Lists existing access bindings for the specified key.
listAccessBindings: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the key.
setAccessBindings: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified key.
updateAccessBindings: {
    path: '/yandex.cloud.kms.v1.SymmetricKeyService/UpdateAccessBindings',
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

exports.SymmetricKeyServiceClient = grpc.makeGenericClientConstructor(SymmetricKeyServiceService);
