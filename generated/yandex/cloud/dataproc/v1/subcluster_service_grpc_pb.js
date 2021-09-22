// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_dataproc_v1_subcluster_service_pb = require('../../../../yandex/cloud/dataproc/v1/subcluster_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_dataproc_v1_common_pb = require('../../../../yandex/cloud/dataproc/v1/common_pb.js');
var yandex_cloud_dataproc_v1_subcluster_pb = require('../../../../yandex/cloud/dataproc/v1/subcluster_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');

function serialize_yandex_cloud_dataproc_v1_CreateSubclusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.CreateSubclusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_CreateSubclusterRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_DeleteSubclusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.DeleteSubclusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_DeleteSubclusterRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_GetSubclusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.GetSubclusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_GetSubclusterRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListSubclustersRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListSubclustersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListSubclustersRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListSubclustersResponse(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListSubclustersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListSubclustersResponse(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_Subcluster(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_pb.Subcluster)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.Subcluster');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_Subcluster(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_pb.Subcluster.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_UpdateSubclusterRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.UpdateSubclusterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_UpdateSubclusterRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Data Proc subclusters.
var SubclusterServiceService = exports.SubclusterServiceService = {
  // Returns the specified subcluster.
//
// To get the list of all available subclusters, make a [SubclusterService.List] request.
get: {
    path: '/yandex.cloud.dataproc.v1.SubclusterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_subcluster_service_pb.GetSubclusterRequest,
    responseType: yandex_cloud_dataproc_v1_subcluster_pb.Subcluster,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_GetSubclusterRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_GetSubclusterRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_v1_Subcluster,
    responseDeserialize: deserialize_yandex_cloud_dataproc_v1_Subcluster,
  },
  // Retrieves a list of subclusters in the specified cluster.
list: {
    path: '/yandex.cloud.dataproc.v1.SubclusterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersRequest,
    responseType: yandex_cloud_dataproc_v1_subcluster_service_pb.ListSubclustersResponse,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_ListSubclustersRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_ListSubclustersRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_v1_ListSubclustersResponse,
    responseDeserialize: deserialize_yandex_cloud_dataproc_v1_ListSubclustersResponse,
  },
  // Creates a subcluster in the specified cluster.
create: {
    path: '/yandex.cloud.dataproc.v1.SubclusterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_subcluster_service_pb.CreateSubclusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_CreateSubclusterRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_CreateSubclusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified subcluster.
update: {
    path: '/yandex.cloud.dataproc.v1.SubclusterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_subcluster_service_pb.UpdateSubclusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_UpdateSubclusterRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_UpdateSubclusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified subcluster.
delete: {
    path: '/yandex.cloud.dataproc.v1.SubclusterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_subcluster_service_pb.DeleteSubclusterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_DeleteSubclusterRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_DeleteSubclusterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.SubclusterServiceClient = grpc.makeGenericClientConstructor(SubclusterServiceService);
