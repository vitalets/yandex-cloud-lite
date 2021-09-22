// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_k8s_v1_version_service_pb = require('../../../../yandex/cloud/k8s/v1/version_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_k8s_v1_cluster_pb = require('../../../../yandex/cloud/k8s/v1/cluster_pb.js');

function serialize_yandex_cloud_k8s_v1_ListVersionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListVersionsRequest(buffer_arg) {
  return yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_k8s_v1_ListVersionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.k8s.v1.ListVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_k8s_v1_ListVersionsResponse(buffer_arg) {
  return yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Kubernetes versions.
var VersionServiceService = exports.VersionServiceService = {
  // Retrieves the list of versions in the specified release channel.
list: {
    path: '/yandex.cloud.k8s.v1.VersionService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_k8s_v1_version_service_pb.ListVersionsRequest,
    responseType: yandex_cloud_k8s_v1_version_service_pb.ListVersionsResponse,
    requestSerialize: serialize_yandex_cloud_k8s_v1_ListVersionsRequest,
    requestDeserialize: deserialize_yandex_cloud_k8s_v1_ListVersionsRequest,
    responseSerialize: serialize_yandex_cloud_k8s_v1_ListVersionsResponse,
    responseDeserialize: deserialize_yandex_cloud_k8s_v1_ListVersionsResponse,
  },
};

exports.VersionServiceClient = grpc.makeGenericClientConstructor(VersionServiceService);
