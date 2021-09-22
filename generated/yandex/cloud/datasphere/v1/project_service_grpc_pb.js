// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datasphere_v1_project_service_pb = require('../../../../yandex/cloud/datasphere/v1/project_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_datasphere_v1_project_pb = require('../../../../yandex/cloud/datasphere/v1/project_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_CellOutputsRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.CellOutputsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_CellOutputsRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_CellOutputsResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.CellOutputsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_CellOutputsResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_CreateProjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_CreateProjectRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_DeleteProjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.DeleteProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_DeleteProjectRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetProjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetProjectRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetStateVariablesRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetStateVariablesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetStateVariablesRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetStateVariablesResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetStateVariablesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetStateVariablesResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetUnitBalanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetUnitBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetUnitBalanceRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_GetUnitBalanceResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.GetUnitBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_GetUnitBalanceResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_ListProjectsRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.ListProjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_ListProjectsRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_ListProjectsResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.ListProjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_ListProjectsResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_OpenProjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.OpenProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_OpenProjectRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_Project(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_pb.Project)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.Project');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_Project(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_pb.Project.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_ProjectExecutionRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.ProjectExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_ProjectExecutionRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_SetUnitBalanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.SetUnitBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_SetUnitBalanceRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_UpdateProjectRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.UpdateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_UpdateProjectRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Project resources.
var ProjectServiceService = exports.ProjectServiceService = {
  // Creates a project in the specified folder.
create: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.CreateProjectRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_CreateProjectRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_CreateProjectRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified project.
update: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.UpdateProjectRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_UpdateProjectRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_UpdateProjectRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified project.
delete: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.DeleteProjectRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_DeleteProjectRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_DeleteProjectRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Opens the specified project.
open: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Open',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.OpenProjectRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_OpenProjectRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_OpenProjectRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified project.
get: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.GetProjectRequest,
    responseType: yandex_cloud_datasphere_v1_project_pb.Project,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_GetProjectRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_GetProjectRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_Project,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_Project,
  },
  // Lists projects for the specified folder.
list: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsRequest,
    responseType: yandex_cloud_datasphere_v1_project_service_pb.ListProjectsResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_ListProjectsRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_ListProjectsRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_ListProjectsResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_ListProjectsResponse,
  },
  // Returns the unit balance of the specified project.
getUnitBalance: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/GetUnitBalance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceRequest,
    responseType: yandex_cloud_datasphere_v1_project_service_pb.GetUnitBalanceResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_GetUnitBalanceRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_GetUnitBalanceRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_GetUnitBalanceResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_GetUnitBalanceResponse,
  },
  // Sets the unit balance of the specified project.
setUnitBalance: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/SetUnitBalance',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.SetUnitBalanceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_SetUnitBalanceRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_SetUnitBalanceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes code in the specified cell or notebook.
execute: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/Execute',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.ProjectExecutionRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_ProjectExecutionRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_ProjectExecutionRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns outputs of the specified cell.
getCellOutputs: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/GetCellOutputs',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsRequest,
    responseType: yandex_cloud_datasphere_v1_project_service_pb.CellOutputsResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_CellOutputsRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_CellOutputsRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_CellOutputsResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_CellOutputsResponse,
  },
  // Returns state variables of the specified notebook.
getStateVariables: {
    path: '/yandex.cloud.datasphere.v1.ProjectService/GetStateVariables',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesRequest,
    responseType: yandex_cloud_datasphere_v1_project_service_pb.GetStateVariablesResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_GetStateVariablesRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_GetStateVariablesRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_GetStateVariablesResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_GetStateVariablesResponse,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService);
