// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_serverless_functions_v1_function_service_pb = require('../../../../../yandex/cloud/serverless/functions/v1/function_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_serverless_functions_v1_function_pb = require('../../../../../yandex/cloud/serverless/functions/v1/function_pb.js');
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

function serialize_yandex_cloud_serverless_functions_v1_CreateFunctionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.CreateFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_CreateFunctionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_CreateFunctionVersionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_CreateFunctionVersionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_DeleteFunctionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.DeleteFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_DeleteFunctionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_Function(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_pb.Function)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.Function');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_Function(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_pb.Function.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_GetFunctionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.GetFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_GetFunctionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionByTagRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionByTagRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListRuntimesRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListRuntimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListRuntimesRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListRuntimesResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListRuntimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListRuntimesResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesResponse(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_RemoveFunctionTagRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_RemoveFunctionTagRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_RemoveScalingPolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_RemoveScalingPolicyRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_SetFunctionTagRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.SetFunctionTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_SetFunctionTagRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_SetScalingPolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_SetScalingPolicyRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_UpdateFunctionRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.UpdateFunctionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_UpdateFunctionRequest(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_functions_v1_Version(arg) {
  if (!(arg instanceof yandex_cloud_serverless_functions_v1_function_pb.Version)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.functions.v1.Version');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_functions_v1_Version(buffer_arg) {
  return yandex_cloud_serverless_functions_v1_function_pb.Version.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing serverless functions.
var FunctionServiceService = exports.FunctionServiceService = {
  // Returns the specified function.
//
// To get the list of all available functions, make a [List] request.
get: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_pb.Function,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_GetFunctionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_GetFunctionRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_Function,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_Function,
  },
  // Retrieves the list of functions in the specified folder.
list: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsResponse,
  },
  // Creates a function in the specified folder.
create: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_CreateFunctionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_CreateFunctionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified function.
update: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.UpdateFunctionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_UpdateFunctionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_UpdateFunctionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified function.
delete: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.DeleteFunctionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_DeleteFunctionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_DeleteFunctionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified version of a function.
//
// To get the list of available version, make a [ListVersions] request.
getVersion: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_pb.Version,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_Version,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_Version,
  },
  // Returns all versions with the specified tag.
//
// To get the list of all available versions, make a [ListVersions] request.
getVersionByTag: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/GetVersionByTag',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.GetFunctionVersionByTagRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_pb.Version,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionByTagRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_GetFunctionVersionByTagRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_Version,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_Version,
  },
  // Retrieves the list of versions for the specified function, or of all function versions
// in the specified folder.
listVersions: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListVersions',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionsVersionsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionsVersionsResponse,
  },
  // Set a tag for the specified version of a function.
setTag: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetTag',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.SetFunctionTagRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_SetFunctionTagRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_SetFunctionTagRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Remove a tag from the specified version of a function.
removeTag: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/RemoveTag',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveFunctionTagRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_RemoveFunctionTagRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_RemoveFunctionTagRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the log of tags assigned to versions of the specified function.
listTagHistory: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListTagHistory',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionTagHistoryResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionTagHistoryResponse,
  },
  // Creates a version for the specified function.
createVersion: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/CreateVersion',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.CreateFunctionVersionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_CreateFunctionVersionRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_CreateFunctionVersionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists available runtime environments for the specified function.
listRuntimes: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListRuntimes',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListRuntimesResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListRuntimesRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListRuntimesRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListRuntimesResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListRuntimesResponse,
  },
  // Lists operations for the specified function.
listOperations: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListFunctionOperationsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListFunctionOperationsResponse,
  },
  // Lists existing access bindings for the specified function.
listAccessBindings: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the function.
setAccessBindings: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified function.
updateAccessBindings: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists existing scaling policies for specified function
listScalingPolicies: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/ListScalingPolicies',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesRequest,
    responseType: yandex_cloud_serverless_functions_v1_function_service_pb.ListScalingPoliciesResponse,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesRequest,
    responseSerialize: serialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_functions_v1_ListScalingPoliciesResponse,
  },
  // Set scaling policy for specified function and tag
setScalingPolicy: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/SetScalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.SetScalingPolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_SetScalingPolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_SetScalingPolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Remove scaling policy for specified function and tag
removeScalingPolicy: {
    path: '/yandex.cloud.serverless.functions.v1.FunctionService/RemoveScalingPolicy',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_functions_v1_function_service_pb.RemoveScalingPolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_functions_v1_RemoveScalingPolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_functions_v1_RemoveScalingPolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.FunctionServiceClient = grpc.makeGenericClientConstructor(FunctionServiceService);
