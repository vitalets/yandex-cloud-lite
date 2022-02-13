// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_instance_service_pb = require('../../../../yandex/cloud/compute/v1/instance_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_disk_pb = require('../../../../yandex/cloud/compute/v1/disk_pb.js');
var yandex_cloud_compute_v1_instance_pb = require('../../../../yandex/cloud/compute/v1/instance_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_AddInstanceOneToOneNatRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_AddInstanceOneToOneNatRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_AttachInstanceDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.AttachInstanceDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_AttachInstanceDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_AttachInstanceFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.AttachInstanceFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_AttachInstanceFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_CreateInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DetachInstanceDiskRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DetachInstanceDiskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DetachInstanceDiskRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DetachInstanceFilesystemRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DetachInstanceFilesystemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DetachInstanceFilesystemRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Instance(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_pb.Instance)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Instance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Instance(buffer_arg) {
  return yandex_cloud_compute_v1_instance_pb.Instance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListInstanceOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListInstanceOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListInstanceOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListInstanceOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListInstanceOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListInstanceOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListInstancesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListInstancesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListInstancesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListInstancesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_MoveInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.MoveInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.MoveInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_MoveInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.MoveInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_RemoveInstanceOneToOneNatRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_RemoveInstanceOneToOneNatRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_RestartInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.RestartInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_RestartInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_StartInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.StartInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_StartInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_StopInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.StopInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_StopInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateInstanceMetadataRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateInstanceMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateInstanceMetadataRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateInstanceNetworkInterfaceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateInstanceNetworkInterfaceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateInstanceRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateInstanceRequest(buffer_arg) {
  return yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Instance resources.
var InstanceServiceService = exports.InstanceServiceService = {
  // Returns the specified Instance resource.
//
// To get the list of available Instance resources, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.InstanceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.GetInstanceRequest,
    responseType: yandex_cloud_compute_v1_instance_pb.Instance,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetInstanceRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Instance,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Instance,
  },
  // Retrieves the list of Instance resources in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.InstanceService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.ListInstancesRequest,
    responseType: yandex_cloud_compute_v1_instance_service_pb.ListInstancesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListInstancesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListInstancesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListInstancesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListInstancesResponse,
  },
  // Creates an instance in the specified folder.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.compute.v1.InstanceService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.CreateInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified instance.
update: {
    path: '/yandex.cloud.compute.v1.InstanceService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified instance.
delete: {
    path: '/yandex.cloud.compute.v1.InstanceService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.DeleteInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the metadata of the specified instance.
updateMetadata: {
    path: '/yandex.cloud.compute.v1.InstanceService/UpdateMetadata',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceMetadataRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateInstanceMetadataRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateInstanceMetadataRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the serial port output of the specified Instance resource.
getSerialPortOutput: {
    path: '/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputRequest,
    responseType: yandex_cloud_compute_v1_instance_service_pb.GetInstanceSerialPortOutputResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_GetInstanceSerialPortOutputResponse,
  },
  // Stops the running instance.
//
// You can start the instance later using the [InstanceService.Start] method.
stop: {
    path: '/yandex.cloud.compute.v1.InstanceService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.StopInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_StopInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_StopInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the stopped instance.
start: {
    path: '/yandex.cloud.compute.v1.InstanceService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.StartInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_StartInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_StartInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Restarts the running instance.
restart: {
    path: '/yandex.cloud.compute.v1.InstanceService/Restart',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.RestartInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_RestartInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_RestartInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Attaches the disk to the instance.
attachDisk: {
    path: '/yandex.cloud.compute.v1.InstanceService/AttachDisk',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceDiskRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_AttachInstanceDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_AttachInstanceDiskRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Detaches the disk from the instance.
detachDisk: {
    path: '/yandex.cloud.compute.v1.InstanceService/DetachDisk',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceDiskRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DetachInstanceDiskRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DetachInstanceDiskRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Attaches the filesystem to the instance.
//
// The instance and the filesystem must reside in the same availability zone.
//
// To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
// To check the instance status, make a [InstanceService.Get] request.
// To stop the running instance, make a [InstanceService.Stop] request.
//
// To use the instance with an attached filesystem, the latter must be mounted.
// For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
attachFilesystem: {
    path: '/yandex.cloud.compute.v1.InstanceService/AttachFilesystem',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.AttachInstanceFilesystemRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_AttachInstanceFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_AttachInstanceFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Detaches the filesystem from the instance.
//
// To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
// To check the instance status, make a [InstanceService.Get] request.
// To stop the running instance, make a [InstanceService.Stop] request.
detachFilesystem: {
    path: '/yandex.cloud.compute.v1.InstanceService/DetachFilesystem',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.DetachInstanceFilesystemRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DetachInstanceFilesystemRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DetachInstanceFilesystemRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Enables One-to-one NAT on the network interface.
addOneToOneNat: {
    path: '/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.AddInstanceOneToOneNatRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_AddInstanceOneToOneNatRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_AddInstanceOneToOneNatRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes One-to-one NAT from the network interface.
removeOneToOneNat: {
    path: '/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.RemoveInstanceOneToOneNatRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_RemoveInstanceOneToOneNatRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_RemoveInstanceOneToOneNatRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified instance network interface.
updateNetworkInterface: {
    path: '/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.UpdateInstanceNetworkInterfaceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateInstanceNetworkInterfaceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateInstanceNetworkInterfaceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified instance.
listOperations: {
    path: '/yandex.cloud.compute.v1.InstanceService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsRequest,
    responseType: yandex_cloud_compute_v1_instance_service_pb.ListInstanceOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListInstanceOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListInstanceOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListInstanceOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListInstanceOperationsResponse,
  },
  // Moves the specified instance between folders
move: {
    path: '/yandex.cloud.compute.v1.InstanceService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_instance_service_pb.MoveInstanceRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_MoveInstanceRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_MoveInstanceRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.InstanceServiceClient = grpc.makeGenericClientConstructor(InstanceServiceService);
