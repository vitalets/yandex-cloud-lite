// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datatransfer_v1_transfer_service_pb = require('../../../../yandex/cloud/datatransfer/v1/transfer_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_datatransfer_v1_transfer_pb = require('../../../../yandex/cloud/datatransfer/v1/transfer_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');

function serialize_yandex_cloud_datatransfer_v1_ActivateTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.ActivateTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_ActivateTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_CreateTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.CreateTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_CreateTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_DeactivateTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.DeactivateTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_DeactivateTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_DeleteTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.DeleteTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_DeleteTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_GetTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.GetTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_GetTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_ListTransfersRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.ListTransfersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_ListTransfersRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_ListTransfersResponse(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.ListTransfersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_ListTransfersResponse(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_Transfer(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_pb.Transfer)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.Transfer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_Transfer(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_pb.Transfer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_UpdateTransferRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.UpdateTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_UpdateTransferRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var TransferServiceService = exports.TransferServiceService = {
  create: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.CreateTransferRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_CreateTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_CreateTransferRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  update: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.UpdateTransferRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_UpdateTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_UpdateTransferRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  delete: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.DeleteTransferRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_DeleteTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_DeleteTransferRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  list: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersRequest,
    responseType: yandex_cloud_datatransfer_v1_transfer_service_pb.ListTransfersResponse,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_ListTransfersRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_ListTransfersRequest,
    responseSerialize: serialize_yandex_cloud_datatransfer_v1_ListTransfersResponse,
    responseDeserialize: deserialize_yandex_cloud_datatransfer_v1_ListTransfersResponse,
  },
  get: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.GetTransferRequest,
    responseType: yandex_cloud_datatransfer_v1_transfer_pb.Transfer,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_GetTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_GetTransferRequest,
    responseSerialize: serialize_yandex_cloud_datatransfer_v1_Transfer,
    responseDeserialize: deserialize_yandex_cloud_datatransfer_v1_Transfer,
  },
  deactivate: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Deactivate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.DeactivateTransferRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_DeactivateTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_DeactivateTransferRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  activate: {
    path: '/yandex.cloud.datatransfer.v1.TransferService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_transfer_service_pb.ActivateTransferRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_ActivateTransferRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_ActivateTransferRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.TransferServiceClient = grpc.makeGenericClientConstructor(TransferServiceService);
