// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_apploadbalancer_v1_http_router_service_pb = require('../../../../yandex/cloud/apploadbalancer/v1/http_router_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_apploadbalancer_v1_http_router_pb = require('../../../../yandex/cloud/apploadbalancer/v1/http_router_pb.js');
var yandex_cloud_apploadbalancer_v1_virtual_host_pb = require('../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_apploadbalancer_v1_CreateHttpRouterRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.CreateHttpRouterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_CreateHttpRouterRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_DeleteHttpRouterRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.DeleteHttpRouterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_DeleteHttpRouterRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetHttpRouterRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetHttpRouterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetHttpRouterRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_HttpRouter(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.HttpRouter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_HttpRouter(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListHttpRouterOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListHttpRoutersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListHttpRoutersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateHttpRouterRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateHttpRouterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateHttpRouterRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing HTTP routers.
var HttpRouterServiceService = exports.HttpRouterServiceService = {
  // Returns the specified HTTP router.
//
// To get the list of all available HTTP routers, make a [List] request.
get: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.GetHttpRouterRequest,
    responseType: yandex_cloud_apploadbalancer_v1_http_router_pb.HttpRouter,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetHttpRouterRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetHttpRouterRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_HttpRouter,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_HttpRouter,
  },
  // Lists HTTP routers in the specified folder.
list: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersRequest,
    responseType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRoutersResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRoutersResponse,
  },
  // Creates an HTTP router in the specified folder.
create: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.CreateHttpRouterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_CreateHttpRouterRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_CreateHttpRouterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified HTTP router.
update: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.UpdateHttpRouterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateHttpRouterRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateHttpRouterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified HTTP router.
delete: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.DeleteHttpRouterRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_DeleteHttpRouterRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_DeleteHttpRouterRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified HTTP router.
listOperations: {
    path: '/yandex.cloud.apploadbalancer.v1.HttpRouterService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsRequest,
    responseType: yandex_cloud_apploadbalancer_v1_http_router_service_pb.ListHttpRouterOperationsResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListHttpRouterOperationsResponse,
  },
};

exports.HttpRouterServiceClient = grpc.makeGenericClientConstructor(HttpRouterServiceService);
