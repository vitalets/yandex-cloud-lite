// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_lockbox_v1_secret_service_pb = require('../../../../yandex/cloud/lockbox/v1/secret_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_lockbox_v1_secret_pb = require('../../../../yandex/cloud/lockbox/v1/secret_pb.js');
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

function serialize_yandex_cloud_lockbox_v1_ActivateSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ActivateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ActivateSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_AddVersionRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.AddVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_AddVersionRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_CancelVersionDestructionRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.CancelVersionDestructionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_CancelVersionDestructionRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_CreateSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.CreateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_CreateSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_DeactivateSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.DeactivateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_DeactivateSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_DeleteSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.DeleteSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_DeleteSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_GetSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.GetSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_GetSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListSecretOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListSecretOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListSecretOperationsRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListSecretOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListSecretOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListSecretOperationsResponse(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListSecretsRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListSecretsRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListSecretsResponse(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListSecretsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListSecretsResponse(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListVersionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListVersionsRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ListVersionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ListVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ListVersionsResponse(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_ScheduleVersionDestructionRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.ScheduleVersionDestructionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_ScheduleVersionDestructionRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_Secret(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_pb.Secret)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.Secret');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_Secret(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_pb.Secret.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_lockbox_v1_UpdateSecretRequest(arg) {
  if (!(arg instanceof yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest)) {
    throw new Error('Expected argument of type yandex.cloud.lockbox.v1.UpdateSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_lockbox_v1_UpdateSecretRequest(buffer_arg) {
  return yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing secrets.
var SecretServiceService = exports.SecretServiceService = {
  // Returns the specified secret.
//
// To get the list of all available secrets, make a [List] request.
// Use [PayloadService.Get] to get the payload (confidential data themselves) of the secret.
get: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.GetSecretRequest,
    responseType: yandex_cloud_lockbox_v1_secret_pb.Secret,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_GetSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_GetSecretRequest,
    responseSerialize: serialize_yandex_cloud_lockbox_v1_Secret,
    responseDeserialize: deserialize_yandex_cloud_lockbox_v1_Secret,
  },
  // Retrieves the list of secrets in the specified folder.
list: {
    path: '/yandex.cloud.lockbox.v1.SecretService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsRequest,
    responseType: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretsResponse,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_ListSecretsRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_ListSecretsRequest,
    responseSerialize: serialize_yandex_cloud_lockbox_v1_ListSecretsResponse,
    responseDeserialize: deserialize_yandex_cloud_lockbox_v1_ListSecretsResponse,
  },
  // Creates a secret in the specified folder.
create: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.CreateSecretRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_CreateSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_CreateSecretRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified secret.
update: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.UpdateSecretRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_UpdateSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_UpdateSecretRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified secret.
delete: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.DeleteSecretRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_DeleteSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_DeleteSecretRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Activates the specified secret.
activate: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.ActivateSecretRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_ActivateSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_ActivateSecretRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deactivates the specified secret.
deactivate: {
    path: '/yandex.cloud.lockbox.v1.SecretService/Deactivate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.DeactivateSecretRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_DeactivateSecretRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_DeactivateSecretRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Retrieves the list of versions of the specified secret.
listVersions: {
    path: '/yandex.cloud.lockbox.v1.SecretService/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsRequest,
    responseType: yandex_cloud_lockbox_v1_secret_service_pb.ListVersionsResponse,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_ListVersionsRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_ListVersionsRequest,
    responseSerialize: serialize_yandex_cloud_lockbox_v1_ListVersionsResponse,
    responseDeserialize: deserialize_yandex_cloud_lockbox_v1_ListVersionsResponse,
  },
  // Adds new version based on a previous one.
addVersion: {
    path: '/yandex.cloud.lockbox.v1.SecretService/AddVersion',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.AddVersionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_AddVersionRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_AddVersionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Schedules the specified version for destruction.
//
// Scheduled destruction can be cancelled with the [SecretService.CancelVersionDestruction] method.
scheduleVersionDestruction: {
    path: '/yandex.cloud.lockbox.v1.SecretService/ScheduleVersionDestruction',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.ScheduleVersionDestructionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_ScheduleVersionDestructionRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_ScheduleVersionDestructionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Cancels previously scheduled version destruction, if the version hasn't been destroyed yet.
cancelVersionDestruction: {
    path: '/yandex.cloud.lockbox.v1.SecretService/CancelVersionDestruction',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.CancelVersionDestructionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_CancelVersionDestructionRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_CancelVersionDestructionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified secret.
listOperations: {
    path: '/yandex.cloud.lockbox.v1.SecretService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsRequest,
    responseType: yandex_cloud_lockbox_v1_secret_service_pb.ListSecretOperationsResponse,
    requestSerialize: serialize_yandex_cloud_lockbox_v1_ListSecretOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_lockbox_v1_ListSecretOperationsRequest,
    responseSerialize: serialize_yandex_cloud_lockbox_v1_ListSecretOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_lockbox_v1_ListSecretOperationsResponse,
  },
  // Lists existing access bindings for the specified secret.
listAccessBindings: {
    path: '/yandex.cloud.lockbox.v1.SecretService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the secret.
setAccessBindings: {
    path: '/yandex.cloud.lockbox.v1.SecretService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the secret.
updateAccessBindings: {
    path: '/yandex.cloud.lockbox.v1.SecretService/UpdateAccessBindings',
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

exports.SecretServiceClient = grpc.makeGenericClientConstructor(SecretServiceService);
