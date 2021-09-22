// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb = require('../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_serverless_mdbproxy_v1_proxy_pb = require('../../../../../yandex/cloud/serverless/mdbproxy/v1/proxy_pb.js');
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

function serialize_yandex_cloud_serverless_mdbproxy_v1_CreateProxyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.CreateProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_CreateProxyRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_DeleteProxyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.DeleteProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_DeleteProxyRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_GetProxyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.GetProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_GetProxyRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.ListProxyOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsResponse(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.ListProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.ListProxyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyResponse(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_Proxy(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.Proxy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_Proxy(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_mdbproxy_v1_UpdateProxyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.mdbproxy.v1.UpdateProxyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_mdbproxy_v1_UpdateProxyRequest(buffer_arg) {
  return yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing serverless MDB proxy.
var ProxyServiceService = exports.ProxyServiceService = {
  // Returns the specified proxy.
//
// To get the list of all available proxies, make a [List] request.
get: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.GetProxyRequest,
    responseType: yandex_cloud_serverless_mdbproxy_v1_proxy_pb.Proxy,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_GetProxyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_GetProxyRequest,
    responseSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_Proxy,
    responseDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_Proxy,
  },
  // Retrieves the list of proxies in the specified folder.
list: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyRequest,
    responseType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyResponse,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyRequest,
    responseSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyResponse,
  },
  // Creates a proxy in the specified folder.
create: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.CreateProxyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_CreateProxyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_CreateProxyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified proxy.
update: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.UpdateProxyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_UpdateProxyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_UpdateProxyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified proxy.
delete: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.DeleteProxyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_DeleteProxyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_DeleteProxyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified proxy.
listOperations: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsRequest,
    responseType: yandex_cloud_serverless_mdbproxy_v1_proxy_service_pb.ListProxyOperationsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_mdbproxy_v1_ListProxyOperationsResponse,
  },
  // Lists existing access bindings for the specified proxy.
listAccessBindings: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the proxy.
setAccessBindings: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified proxy.
updateAccessBindings: {
    path: '/yandex.cloud.serverless.mdbproxy.v1.ProxyService/UpdateAccessBindings',
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

exports.ProxyServiceClient = grpc.makeGenericClientConstructor(ProxyServiceService);
