// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_serverless_containers_v1_container_service_pb = require('../../../../../yandex/cloud/serverless/containers/v1/container_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_serverless_containers_v1_container_pb = require('../../../../../yandex/cloud/serverless/containers/v1/container_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

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

function serialize_yandex_cloud_serverless_containers_v1_Container(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_pb.Container)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.Container');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_Container(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_pb.Container.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_CreateContainerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.CreateContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_CreateContainerRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_DeleteContainerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.DeleteContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_DeleteContainerRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_DeployContainerRevisionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_DeployContainerRevisionRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_GetContainerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.GetContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_GetContainerRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_GetContainerRevisionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_GetContainerRevisionRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsResponse(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainersRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainersRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainersResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainersResponse(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsResponse(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_Revision(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_pb.Revision)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.Revision');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_Revision(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_pb.Revision.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_containers_v1_UpdateContainerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.containers.v1.UpdateContainerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_containers_v1_UpdateContainerRequest(buffer_arg) {
  return yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContainerServiceService = exports.ContainerServiceService = {
  get: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRequest,
    responseType: yandex_cloud_serverless_containers_v1_container_pb.Container,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_GetContainerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_GetContainerRequest,
    responseSerialize: serialize_yandex_cloud_serverless_containers_v1_Container,
    responseDeserialize: deserialize_yandex_cloud_serverless_containers_v1_Container,
  },
  list: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRequest,
    responseType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersResponse,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainersRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainersRequest,
    responseSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainersResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainersResponse,
  },
  create: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.CreateContainerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_CreateContainerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_CreateContainerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  update: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.UpdateContainerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_UpdateContainerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_UpdateContainerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  delete: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.DeleteContainerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_DeleteContainerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_DeleteContainerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  deployRevision: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.DeployContainerRevisionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_DeployContainerRevisionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_DeployContainerRevisionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  getRevision: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.GetContainerRevisionRequest,
    responseType: yandex_cloud_serverless_containers_v1_container_pb.Revision,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_GetContainerRevisionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_GetContainerRevisionRequest,
    responseSerialize: serialize_yandex_cloud_serverless_containers_v1_Revision,
    responseDeserialize: deserialize_yandex_cloud_serverless_containers_v1_Revision,
  },
  listRevisions: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsRequest,
    responseType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainersRevisionsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainersRevisionsResponse,
  },
  listOperations: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsRequest,
    responseType: yandex_cloud_serverless_containers_v1_container_service_pb.ListContainerOperationsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_containers_v1_ListContainerOperationsResponse,
  },
  listAccessBindings: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  setAccessBindings: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  updateAccessBindings: {
    path: '/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings',
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

exports.ContainerServiceClient = grpc.makeGenericClientConstructor(ContainerServiceService);
