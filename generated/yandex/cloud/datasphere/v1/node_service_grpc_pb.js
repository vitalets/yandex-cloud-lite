// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datasphere_v1_node_service_pb = require('../../../../yandex/cloud/datasphere/v1/node_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_yandex_cloud_datasphere_v1_NodeExecutionRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.NodeExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_NodeExecutionRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_NodeExecutionResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.NodeExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_NodeExecutionResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Node resources.
var NodeServiceService = exports.NodeServiceService = {
  // Executes deployed Node.
execute: {
    path: '/yandex.cloud.datasphere.v1.NodeService/Execute',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionRequest,
    responseType: yandex_cloud_datasphere_v1_node_service_pb.NodeExecutionResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_NodeExecutionRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_NodeExecutionRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_NodeExecutionResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_NodeExecutionResponse,
  },
};

exports.NodeServiceClient = grpc.makeGenericClientConstructor(NodeServiceService);
