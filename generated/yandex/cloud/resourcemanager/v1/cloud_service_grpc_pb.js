// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_resourcemanager_v1_cloud_service_pb = require('../../../../yandex/cloud/resourcemanager/v1/cloud_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_resourcemanager_v1_cloud_pb = require('../../../../yandex/cloud/resourcemanager/v1/cloud_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
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

function serialize_yandex_cloud_resourcemanager_v1_Cloud(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_pb.Cloud)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.Cloud');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_Cloud(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_pb.Cloud.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_CreateCloudRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.CreateCloudRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.CreateCloudRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_CreateCloudRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.CreateCloudRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_DeleteCloudRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.DeleteCloudRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_DeleteCloudRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_GetCloudRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.GetCloudRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_GetCloudRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListCloudOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListCloudOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsResponse(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListCloudsRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListCloudsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListCloudsRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_ListCloudsResponse(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.ListCloudsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_ListCloudsResponse(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_resourcemanager_v1_UpdateCloudRequest(arg) {
  if (!(arg instanceof yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest)) {
    throw new Error('Expected argument of type yandex.cloud.resourcemanager.v1.UpdateCloudRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_resourcemanager_v1_UpdateCloudRequest(buffer_arg) {
  return yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Cloud resources.
var CloudServiceService = exports.CloudServiceService = {
  // Returns the specified Cloud resource.
//
// To get the list of available Cloud resources, make a [List] request.
get: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.GetCloudRequest,
    responseType: yandex_cloud_resourcemanager_v1_cloud_pb.Cloud,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_GetCloudRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_GetCloudRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_Cloud,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_Cloud,
  },
  // Retrieves the list of Cloud resources.
list: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsRequest,
    responseType: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudsResponse,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_ListCloudsRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListCloudsRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_ListCloudsResponse,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListCloudsResponse,
  },
  // Creates a cloud in the specified organization.
create: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.CreateCloudRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_CreateCloudRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_CreateCloudRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified cloud.
update: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.UpdateCloudRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_UpdateCloudRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_UpdateCloudRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified cloud.
delete: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.DeleteCloudRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_DeleteCloudRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_DeleteCloudRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified cloud.
listOperations: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsRequest,
    responseType: yandex_cloud_resourcemanager_v1_cloud_service_pb.ListCloudOperationsResponse,
    requestSerialize: serialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsRequest,
    responseSerialize: serialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_resourcemanager_v1_ListCloudOperationsResponse,
  },
  // access
//
// Lists access bindings for the specified cloud.
listAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified cloud.
setAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified cloud.
updateAccessBindings: {
    path: '/yandex.cloud.resourcemanager.v1.CloudService/UpdateAccessBindings',
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

exports.CloudServiceClient = grpc.makeGenericClientConstructor(CloudServiceService);
