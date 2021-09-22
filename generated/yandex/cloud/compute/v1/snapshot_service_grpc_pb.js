// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_snapshot_service_pb = require('../../../../yandex/cloud/compute/v1/snapshot_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_snapshot_pb = require('../../../../yandex/cloud/compute/v1/snapshot_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateSnapshotRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateSnapshotRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteSnapshotRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteSnapshotRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetSnapshotRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetSnapshotRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListSnapshotOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListSnapshotOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListSnapshotOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListSnapshotOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListSnapshotOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListSnapshotOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListSnapshotsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListSnapshotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListSnapshotsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListSnapshotsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListSnapshotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListSnapshotsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Snapshot(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_pb.Snapshot)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Snapshot');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Snapshot(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_pb.Snapshot.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateSnapshotRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateSnapshotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateSnapshotRequest(buffer_arg) {
  return yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Snapshot resources.
var SnapshotServiceService = exports.SnapshotServiceService = {
  // Returns the specified Snapshot resource.
//
// To get the list of available Snapshot resources, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.SnapshotService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.GetSnapshotRequest,
    responseType: yandex_cloud_compute_v1_snapshot_pb.Snapshot,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetSnapshotRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetSnapshotRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Snapshot,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Snapshot,
  },
  // Retrieves the list of Snapshot resources in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.SnapshotService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsRequest,
    responseType: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListSnapshotsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListSnapshotsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListSnapshotsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListSnapshotsResponse,
  },
  // Creates a snapshot of the specified disk.
create: {
    path: '/yandex.cloud.compute.v1.SnapshotService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.CreateSnapshotRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateSnapshotRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateSnapshotRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified snapshot.
//
// Values of omitted parameters are not changed.
update: {
    path: '/yandex.cloud.compute.v1.SnapshotService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.UpdateSnapshotRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateSnapshotRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateSnapshotRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified snapshot.
//
// Deleting a snapshot removes its data permanently and is irreversible.
delete: {
    path: '/yandex.cloud.compute.v1.SnapshotService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.DeleteSnapshotRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteSnapshotRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteSnapshotRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified snapshot.
listOperations: {
    path: '/yandex.cloud.compute.v1.SnapshotService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsRequest,
    responseType: yandex_cloud_compute_v1_snapshot_service_pb.ListSnapshotOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListSnapshotOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListSnapshotOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListSnapshotOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListSnapshotOperationsResponse,
  },
};

exports.SnapshotServiceClient = grpc.makeGenericClientConstructor(SnapshotServiceService);
