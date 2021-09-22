// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_serverless_apigateway_v1_apigateway_service_pb = require('../../../../../yandex/cloud/serverless/apigateway/v1/apigateway_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_serverless_apigateway_v1_apigateway_pb = require('../../../../../yandex/cloud/serverless/apigateway/v1/apigateway_pb.js');
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

function serialize_yandex_cloud_serverless_apigateway_v1_AddDomainRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.AddDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_AddDomainRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_ApiGateway(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.ApiGateway');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_ApiGateway(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_CreateApiGatewayRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_CreateApiGatewayRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_DeleteApiGatewayRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_DeleteApiGatewayRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_GetApiGatewayRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_GetApiGatewayRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecResponse(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayResponse(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_ListOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.ListOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_ListOperationsRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_ListOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.ListOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_ListOperationsResponse(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_RemoveDomainRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_RemoveDomainRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_apigateway_v1_UpdateApiGatewayRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_apigateway_v1_UpdateApiGatewayRequest(buffer_arg) {
  return yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing API gateways.
var ApiGatewayServiceService = exports.ApiGatewayServiceService = {
  // Returns the specified API gateway. Note that only API gateway basic attributes are returned.
// To get associated openapi specification, make a [GetOpenapiSpec] request.
//
// To get the list of all available API gateways, make a [List] request.
get: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetApiGatewayRequest,
    responseType: yandex_cloud_serverless_apigateway_v1_apigateway_pb.ApiGateway,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_GetApiGatewayRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_GetApiGatewayRequest,
    responseSerialize: serialize_yandex_cloud_serverless_apigateway_v1_ApiGateway,
    responseDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_ApiGateway,
  },
  // Retrieves the list of API gateways in the specified folder.
list: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayRequest,
    responseType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListApiGatewayResponse,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayRequest,
    responseSerialize: serialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_ListApiGatewayResponse,
  },
  // Creates an API gateway in the specified folder.
create: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.CreateApiGatewayRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_CreateApiGatewayRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_CreateApiGatewayRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified API gateway.
update: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.UpdateApiGatewayRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_UpdateApiGatewayRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_UpdateApiGatewayRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified API gateway.
delete: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.DeleteApiGatewayRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_DeleteApiGatewayRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_DeleteApiGatewayRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Attaches domain to the specified API gateway.
addDomain: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.AddDomainRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_AddDomainRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_AddDomainRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Detaches domain from the specified API gateway.
removeDomain: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.RemoveDomainRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_RemoveDomainRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_RemoveDomainRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the OpenAPI specification of specified API gateway.
getOpenapiSpec: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecRequest,
    responseType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.GetOpenapiSpecResponse,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecRequest,
    responseSerialize: serialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_GetOpenapiSpecResponse,
  },
  // Lists operations for the specified API gateway.
listOperations: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsRequest,
    responseType: yandex_cloud_serverless_apigateway_v1_apigateway_service_pb.ListOperationsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_apigateway_v1_ListOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_ListOperationsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_apigateway_v1_ListOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_apigateway_v1_ListOperationsResponse,
  },
  // Lists existing access bindings for the specified API gateway.
listAccessBindings: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified API gateway.
setAccessBindings: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified API gateway.
updateAccessBindings: {
    path: '/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings',
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

exports.ApiGatewayServiceClient = grpc.makeGenericClientConstructor(ApiGatewayServiceService);
