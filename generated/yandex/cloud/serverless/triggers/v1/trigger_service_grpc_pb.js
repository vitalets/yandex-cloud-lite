// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_serverless_triggers_v1_trigger_service_pb = require('../../../../../yandex/cloud/serverless/triggers/v1/trigger_service_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_serverless_triggers_v1_trigger_pb = require('../../../../../yandex/cloud/serverless/triggers/v1/trigger_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_CreateTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.CreateTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_CreateTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_DeleteTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_DeleteTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_GetTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.GetTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_GetTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsResponse(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_ListTriggersRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.ListTriggersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_ListTriggersRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_ListTriggersResponse(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.ListTriggersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_ListTriggersResponse(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_PauseTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.PauseTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_PauseTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_ResumeTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_ResumeTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_Trigger(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.Trigger');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_Trigger(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_serverless_triggers_v1_UpdateTriggerRequest(arg) {
  if (!(arg instanceof yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_serverless_triggers_v1_UpdateTriggerRequest(buffer_arg) {
  return yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing triggers for serverless functions.
var TriggerServiceService = exports.TriggerServiceService = {
  // Returns the specified trigger.
//
// To get the list of all available triggers, make a [List] request.
get: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.GetTriggerRequest,
    responseType: yandex_cloud_serverless_triggers_v1_trigger_pb.Trigger,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_GetTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_GetTriggerRequest,
    responseSerialize: serialize_yandex_cloud_serverless_triggers_v1_Trigger,
    responseDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_Trigger,
  },
  // Retrieves the list of triggers in the specified folder.
list: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersRequest,
    responseType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggersResponse,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_ListTriggersRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_ListTriggersRequest,
    responseSerialize: serialize_yandex_cloud_serverless_triggers_v1_ListTriggersResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_ListTriggersResponse,
  },
  // Creates a trigger in the specified folder.
create: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.CreateTriggerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_CreateTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_CreateTriggerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified trigger.
update: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.UpdateTriggerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_UpdateTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_UpdateTriggerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified trigger.
delete: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.DeleteTriggerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_DeleteTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_DeleteTriggerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Pauses the specified trigger.
pause: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Pause',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.PauseTriggerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_PauseTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_PauseTriggerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Restarts the specified trigger.
resume: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/Resume',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ResumeTriggerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_ResumeTriggerRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_ResumeTriggerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified trigger.
listOperations: {
    path: '/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsRequest,
    responseType: yandex_cloud_serverless_triggers_v1_trigger_service_pb.ListTriggerOperationsResponse,
    requestSerialize: serialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsRequest,
    responseSerialize: serialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_serverless_triggers_v1_ListTriggerOperationsResponse,
  },
};

exports.TriggerServiceClient = grpc.makeGenericClientConstructor(TriggerServiceService);
