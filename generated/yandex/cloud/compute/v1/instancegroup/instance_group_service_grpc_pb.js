// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_instancegroup_instance_group_service_pb = require('../../../../../yandex/cloud/compute/v1/instancegroup/instance_group_service_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_instancegroup_instance_group_pb = require('../../../../../yandex/cloud/compute/v1/instancegroup/instance_group_pb.js');
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

function serialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupFromYamlRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupFromYamlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupFromYamlRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.CreateInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_DeleteInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.DeleteInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_DeleteInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_DeleteInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.DeleteInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_DeleteInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_GetInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.GetInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_GetInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_InstanceGroup(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.InstanceGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_InstanceGroup(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupLogRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ListInstanceGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_PauseInstanceGroupProcessesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.PauseInstanceGroupProcessesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_PauseInstanceGroupProcessesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_ResumeInstanceGroupProcessesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.ResumeInstanceGroupProcessesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_ResumeInstanceGroupProcessesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_StartInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.StartInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_StartInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_StopInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.StopInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_StopInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_StopInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.StopInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_StopInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupFromYamlRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupFromYamlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupFromYamlRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.instancegroup.UpdateInstanceGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing InstanceGroup resources.
var InstanceGroupServiceService = exports.InstanceGroupServiceService = {
  // Returns the specified InstanceGroup resource.
//
// To get the list of available InstanceGroup resources, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.GetInstanceGroupRequest,
    responseType: yandex_cloud_compute_v1_instancegroup_instance_group_pb.InstanceGroup,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_GetInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_GetInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_instancegroup_InstanceGroup,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_InstanceGroup,
  },
  // Retrieves the list of InstanceGroup resources in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsRequest,
    responseType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupsResponse,
  },
  // Creates an instance group in the specified folder.
// This method starts an operation that can be cancelled by another operation.
create: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates an instance group in the specified folder from a YAML file.
// This method starts an operation that can be cancelled by another operation.
createFromYaml: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/CreateFromYaml',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.CreateInstanceGroupFromYamlRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupFromYamlRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_CreateInstanceGroupFromYamlRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified instance group.
// This method starts an operation that can be cancelled by another operation.
update: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified instance group from a YAML file.
// This method starts an operation that can be cancelled by another operation.
updateFromYaml: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateFromYaml',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.UpdateInstanceGroupFromYamlRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupFromYamlRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_UpdateInstanceGroupFromYamlRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified instance group.
stop: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstanceGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_StopInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_StopInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified instance group.
start: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StartInstanceGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_StartInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_StartInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified instance group.
delete: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstanceGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_DeleteInstanceGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_DeleteInstanceGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists instances for the specified instance group.
listInstances: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListInstances',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesRequest,
    responseType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupInstancesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupInstancesResponse,
  },
  // Delete instances from the instance group.
deleteInstances: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/DeleteInstances',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.DeleteInstancesRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_DeleteInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_DeleteInstancesRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stop instances from the instance group.
stopInstances: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/StopInstances',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.StopInstancesRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_StopInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_StopInstancesRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified instance group.
listOperations: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsRequest,
    responseType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupOperationsResponse,
  },
  // Lists logs for the specified instance group.
listLogRecords: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListLogRecords',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsRequest,
    responseType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ListInstanceGroupLogRecordsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ListInstanceGroupLogRecordsResponse,
  },
  // Lists existing access bindings for the specified instance group.
listAccessBindings: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the specified instance group.
setAccessBindings: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified instance group.
updateAccessBindings: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Resumes all processes regarding management of the specified instance group,
// i.e. scaling, checking instances' health, auto-healing and updating them.
resumeProcesses: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/ResumeProcesses',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.ResumeInstanceGroupProcessesRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_ResumeInstanceGroupProcessesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_ResumeInstanceGroupProcessesRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Pauses all processes regarding management of the specified instance group,
// i.e. scaling, checking instances' health, auto-healing and updating them. Running instances are not stopped.
pauseProcesses: {
    path: '/yandex.cloud.compute.v1.instancegroup.InstanceGroupService/PauseProcesses',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instancegroup_instance_group_service_pb.PauseInstanceGroupProcessesRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_instancegroup_PauseInstanceGroupProcessesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_instancegroup_PauseInstanceGroupProcessesRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.InstanceGroupServiceClient = grpc.makeGenericClientConstructor(InstanceGroupServiceService);
