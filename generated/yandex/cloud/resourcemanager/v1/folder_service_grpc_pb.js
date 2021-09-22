// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_resourcemanager_v1_folder_service_pb = require('../../../../yandex/cloud/resourcemanager/v1/folder_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_resourcemanager_v1_folder_pb = require('../../../../yandex/cloud/resourcemanager/v1/folder_pb.js');
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

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_CreateFolderRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.CreateFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_CreateFolderRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_DeleteFolderRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.DeleteFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_DeleteFolderRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_Folder(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_pb.Folder)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.Folder');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_Folder(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_pb.Folder.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_GetFolderRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.GetFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_GetFolderRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListFolderOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListFolderOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsResponse(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListFoldersRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListFoldersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListFoldersRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListFoldersResponse(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListFoldersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListFoldersResponse(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_UpdateFolderRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.UpdateFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_UpdateFolderRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Folder resources.
var FolderServiceService = exports.FolderServiceService = {
  // Returns the specified Folder resource.
//
// To get the list of available Folder resources, make a [List] request.
get: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.GetFolderRequest,
    responseType: yandex_cloud_resourcemanager_v1_folder_pb.Folder,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_GetFolderRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_GetFolderRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_Folder,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_Folder,
  },
  // Retrieves the list of Folder resources in the specified cloud.
list: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersRequest,
    responseType: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFoldersResponse,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_ListFoldersRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListFoldersRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_ListFoldersResponse,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListFoldersResponse,
  },
  // Creates a folder in the specified cloud.
create: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.CreateFolderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_CreateFolderRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_CreateFolderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified folder.
update: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.UpdateFolderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_UpdateFolderRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_UpdateFolderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified folder.
//
// The method is temporarily unavailable.
delete: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.DeleteFolderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_DeleteFolderRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_DeleteFolderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified folder.
listOperations: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsRequest,
    responseType: yandex_cloud_resourcemanager_v1_folder_service_pb.ListFolderOperationsResponse,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListFolderOperationsResponse,
  },
  // access
//
// Lists access bindings for the specified folder.
listAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified folder.
setAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified folder.
updateAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.FolderService/UpdateAccessBindings',
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

exports.FolderServiceClient = grpc.makeGenericClientConstructor(FolderServiceService);
