// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_mdb_elasticsearch_v1_auth_service_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/auth_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_mdb_elasticsearch_v1_auth_pb = require('../../../../../yandex/cloud/mdb/elasticsearch/v1/auth_pb.js');

function serialize_yandex_cloud_mdb_elasticsearch_v1_AddAuthProvidersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.AddAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_AddAuthProvidersRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_AuthProvider(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.AuthProvider');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_AuthProvider(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProviderRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProviderRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProvidersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.DeleteAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProvidersRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_GetAuthProviderRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.GetAuthProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_GetAuthProviderRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersResponse(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.ListAuthProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersResponse(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProviderRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProviderRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProvidersRequest(arg) {
  if (!(arg instanceof yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.mdb.elasticsearch.v1.UpdateAuthProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProvidersRequest(buffer_arg) {
  return yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Elasticsearch Authentication resources.
var AuthServiceService = exports.AuthServiceService = {
  // Retrieves the list of registered auth providers for Elasticsearch cluster.
listProviders: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/ListProviders',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersRequest,
    responseType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.ListAuthProvidersResponse,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersRequest,
    responseSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersResponse,
    responseDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_ListAuthProvidersResponse,
  },
  // Returns registered auth provider by name.
getProvider: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/GetProvider',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.GetAuthProviderRequest,
    responseType: yandex_cloud_mdb_elasticsearch_v1_auth_pb.AuthProvider,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_GetAuthProviderRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_GetAuthProviderRequest,
    responseSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_AuthProvider,
    responseDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_AuthProvider,
  },
  // Adds new auth providers to Elasticsearch cluster.
addProviders: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/AddProviders',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.AddAuthProvidersRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_AddAuthProvidersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_AddAuthProvidersRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Replase the list of auth providers.
updateProviders: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProviders',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProvidersRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProvidersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProvidersRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes auth providers from Elasticsearch cluster by name.
deleteProviders: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProviders',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProvidersRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProvidersRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProvidersRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates registered auth provider.
updateProvider: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/UpdateProvider',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.UpdateAuthProviderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProviderRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_UpdateAuthProviderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes auth provider from Elasticsearch cluster by name.
deleteProvider: {
    path: '/yandex.cloud.mdb.elasticsearch.v1.AuthService/DeleteProvider',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_mdb_elasticsearch_v1_auth_service_pb.DeleteAuthProviderRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProviderRequest,
    requestDeserialize: deserialize_yandex_cloud_mdb_elasticsearch_v1_DeleteAuthProviderRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
