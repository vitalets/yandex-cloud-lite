// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_containerregistry_v1_repository_service_pb = require('../../../../yandex/cloud/containerregistry/v1/repository_service_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_containerregistry_v1_repository_pb = require('../../../../yandex/cloud/containerregistry/v1/repository_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

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

function serialize_yandex_cloud_containerregistry_v1_DeleteRepositoryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DeleteRepositoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DeleteRepositoryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetRepositoryByNameRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetRepositoryByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetRepositoryByNameRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetRepositoryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetRepositoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetRepositoryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListRepositoriesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListRepositoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListRepositoriesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListRepositoriesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListRepositoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListRepositoriesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_Repository(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_pb.Repository)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.Repository');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_Repository(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_pb.Repository.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_UpsertRepositoryRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.UpsertRepositoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_UpsertRepositoryRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Repository resources.
var RepositoryServiceService = exports.RepositoryServiceService = {
  // Returns the specified Repository resource.
//
// To get the list of available Repository resources, make a [List] request.
get: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryRequest,
    responseType: yandex_cloud_containerregistry_v1_repository_pb.Repository,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetRepositoryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetRepositoryRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_Repository,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_Repository,
  },
  // Returns the specified Repository resource.
//
// To get the list of available Repository resources, make a [List] request.
getByName: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/GetByName',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_repository_service_pb.GetRepositoryByNameRequest,
    responseType: yandex_cloud_containerregistry_v1_repository_pb.Repository,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetRepositoryByNameRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetRepositoryByNameRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_Repository,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_Repository,
  },
  // Retrieves the list of Repository resources in the specified registry.
list: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesRequest,
    responseType: yandex_cloud_containerregistry_v1_repository_service_pb.ListRepositoriesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListRepositoriesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListRepositoriesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListRepositoriesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListRepositoriesResponse,
  },
  // access
//
// Lists access bindings for the specified repository.
listAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Upserts a repository in the specified registry.
upsert: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_repository_service_pb.UpsertRepositoryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_UpsertRepositoryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_UpsertRepositoryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified repository.
delete: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_repository_service_pb.DeleteRepositoryRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_DeleteRepositoryRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_DeleteRepositoryRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Sets access bindings for the specified repository.
setAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified repository.
updateAccessBindings: {
    path: '/yandex.cloud.containerregistry.v1.RepositoryService/UpdateAccessBindings',
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

exports.RepositoryServiceClient = grpc.makeGenericClientConstructor(RepositoryServiceService);
