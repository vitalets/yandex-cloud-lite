// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datatransfer_v1_endpoint_service_pb = require('../../../../yandex/cloud/datatransfer/v1/endpoint_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_datatransfer_v1_endpoint_pb = require('../../../../yandex/cloud/datatransfer/v1/endpoint_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');

function serialize_yandex_cloud_datatransfer_v1_CreateEndpointRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.CreateEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_CreateEndpointRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_DeleteEndpointRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.DeleteEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_DeleteEndpointRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_Endpoint(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.Endpoint');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_Endpoint(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_GetEndpointRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.GetEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_GetEndpointRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_ListEndpointsRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.ListEndpointsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_ListEndpointsRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_ListEndpointsResponse(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.ListEndpointsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_ListEndpointsResponse(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datatransfer_v1_UpdateEndpointRequest(arg) {
  if (!(arg instanceof yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datatransfer.v1.UpdateEndpointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datatransfer_v1_UpdateEndpointRequest(buffer_arg) {
  return yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var EndpointServiceService = exports.EndpointServiceService = {
  get: {
    path: '/yandex.cloud.datatransfer.v1.EndpointService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_endpoint_service_pb.GetEndpointRequest,
    responseType: yandex_cloud_datatransfer_v1_endpoint_pb.Endpoint,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_GetEndpointRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_GetEndpointRequest,
    responseSerialize: serialize_yandex_cloud_datatransfer_v1_Endpoint,
    responseDeserialize: deserialize_yandex_cloud_datatransfer_v1_Endpoint,
  },
  list: {
    path: '/yandex.cloud.datatransfer.v1.EndpointService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsRequest,
    responseType: yandex_cloud_datatransfer_v1_endpoint_service_pb.ListEndpointsResponse,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_ListEndpointsRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_ListEndpointsRequest,
    responseSerialize: serialize_yandex_cloud_datatransfer_v1_ListEndpointsResponse,
    responseDeserialize: deserialize_yandex_cloud_datatransfer_v1_ListEndpointsResponse,
  },
  create: {
    path: '/yandex.cloud.datatransfer.v1.EndpointService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_endpoint_service_pb.CreateEndpointRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_CreateEndpointRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_CreateEndpointRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  update: {
    path: '/yandex.cloud.datatransfer.v1.EndpointService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_endpoint_service_pb.UpdateEndpointRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_UpdateEndpointRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_UpdateEndpointRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  delete: {
    path: '/yandex.cloud.datatransfer.v1.EndpointService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datatransfer_v1_endpoint_service_pb.DeleteEndpointRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datatransfer_v1_DeleteEndpointRequest,
    requestDeserialize: deserialize_yandex_cloud_datatransfer_v1_DeleteEndpointRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.EndpointServiceClient = grpc.makeGenericClientConstructor(EndpointServiceService);
