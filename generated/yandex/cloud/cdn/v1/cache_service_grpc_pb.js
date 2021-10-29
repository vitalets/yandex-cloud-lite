// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_cdn_v1_cache_service_pb = require('../../../../yandex/cloud/cdn/v1/cache_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_cdn_v1_PrefetchCacheRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.PrefetchCacheRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_PrefetchCacheRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_cdn_v1_PurgeCacheRequest(arg) {
  if (!(arg instanceof yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest)) {
    throw new Error('Expected argument of type yandex.cloud.cdn.v1.PurgeCacheRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_cdn_v1_PurgeCacheRequest(buffer_arg) {
  return yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Cache Service resources.
var CacheServiceService = exports.CacheServiceService = {
  // Removes specified files from the cache of the specified resource. For details about purging, see [documentation](/docs/cdn/concepts/caching#purge).
purge: {
    path: '/yandex.cloud.cdn.v1.CacheService/Purge',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_cache_service_pb.PurgeCacheRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_PurgeCacheRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_PurgeCacheRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Uploads specified files from origins to cache of the specified resource. For defails about prefetching, see [documentation](/docs/cdn/concepts/caching#prefetch).
prefetch: {
    path: '/yandex.cloud.cdn.v1.CacheService/Prefetch',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_cdn_v1_cache_service_pb.PrefetchCacheRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_cdn_v1_PrefetchCacheRequest,
    requestDeserialize: deserialize_yandex_cloud_cdn_v1_PrefetchCacheRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.CacheServiceClient = grpc.makeGenericClientConstructor(CacheServiceService);
