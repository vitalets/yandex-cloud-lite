// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb = require('../../../../yandex/cloud/loadbalancer/v1/network_load_balancer_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_loadbalancer_v1_network_load_balancer_pb = require('../../../../yandex/cloud/loadbalancer/v1/network_load_balancer_pb.js');

function serialize_yandex_cloud_loadbalancer_v1_AddNetworkLoadBalancerListenerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.AddNetworkLoadBalancerListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_AddNetworkLoadBalancerListenerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_AttachNetworkLoadBalancerTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.AttachNetworkLoadBalancerTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_AttachNetworkLoadBalancerTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_CreateNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.CreateNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_CreateNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_DeleteNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.DeleteNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_DeleteNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_DetachNetworkLoadBalancerTargetGroupRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.DetachNetworkLoadBalancerTargetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_DetachNetworkLoadBalancerTargetGroupRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_GetNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.GetNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_GetNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_GetTargetStatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.GetTargetStatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_GetTargetStatesRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_GetTargetStatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.GetTargetStatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_GetTargetStatesResponse(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancerOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsResponse(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersResponse(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.ListNetworkLoadBalancersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersResponse(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_NetworkLoadBalancer(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.NetworkLoadBalancer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_NetworkLoadBalancer(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_RemoveNetworkLoadBalancerListenerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.RemoveNetworkLoadBalancerListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_RemoveNetworkLoadBalancerListenerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_StartNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.StartNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_StartNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_StopNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.StopNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_StopNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_loadbalancer_v1_UpdateNetworkLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.loadbalancer.v1.UpdateNetworkLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_loadbalancer_v1_UpdateNetworkLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing NetworkLoadBalancer resources.
var NetworkLoadBalancerServiceService = exports.NetworkLoadBalancerServiceService = {
  // Returns the specified NetworkLoadBalancer resource.
//
// Get the list of available NetworkLoadBalancer resources by making a [List] request.
get: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetNetworkLoadBalancerRequest,
    responseType: yandex_cloud_loadbalancer_v1_network_load_balancer_pb.NetworkLoadBalancer,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_GetNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_GetNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_NetworkLoadBalancer,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_NetworkLoadBalancer,
  },
  // Retrieves the list of NetworkLoadBalancer resources in the specified folder.
list: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersRequest,
    responseType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancersResponse,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersResponse,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancersResponse,
  },
  // Creates a network load balancer in the specified folder using the data specified in the request.
create: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.CreateNetworkLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_CreateNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_CreateNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified network load balancer.
update: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.UpdateNetworkLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_UpdateNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_UpdateNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified network load balancer.
delete: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DeleteNetworkLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_DeleteNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_DeleteNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts load balancing and health checking with the specified network load balancer with specified settings.
// Changes network load balancer status to `` ACTIVE ``.
start: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StartNetworkLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_StartNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_StartNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops load balancing and health checking with the specified network load balancer.
// Changes load balancer status to `` STOPPED ``.
stop: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.StopNetworkLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_StopNetworkLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_StopNetworkLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Attaches a target group to the specified network load balancer.
attachTargetGroup: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AttachTargetGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AttachNetworkLoadBalancerTargetGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_AttachNetworkLoadBalancerTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_AttachNetworkLoadBalancerTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Detaches the target group from the specified network load balancer.
detachTargetGroup: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/DetachTargetGroup',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.DetachNetworkLoadBalancerTargetGroupRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_DetachNetworkLoadBalancerTargetGroupRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_DetachNetworkLoadBalancerTargetGroupRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Gets states of target resources in the attached target group.
getTargetStates: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/GetTargetStates',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesRequest,
    responseType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.GetTargetStatesResponse,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_GetTargetStatesRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_GetTargetStatesRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_GetTargetStatesResponse,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_GetTargetStatesResponse,
  },
  // Adds a listener to the specified network load balancer.
addListener: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/AddListener',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.AddNetworkLoadBalancerListenerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_AddNetworkLoadBalancerListenerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_AddNetworkLoadBalancerListenerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes the listener from the specified network load balancer.
removeListener: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/RemoveListener',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.RemoveNetworkLoadBalancerListenerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_RemoveNetworkLoadBalancerListenerRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_RemoveNetworkLoadBalancerListenerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified network load balancer.
listOperations: {
    path: '/yandex.cloud.loadbalancer.v1.NetworkLoadBalancerService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsRequest,
    responseType: yandex_cloud_loadbalancer_v1_network_load_balancer_service_pb.ListNetworkLoadBalancerOperationsResponse,
    requestSerialize: serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsRequest,
    responseSerialize: serialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_loadbalancer_v1_ListNetworkLoadBalancerOperationsResponse,
  },
};

exports.NetworkLoadBalancerServiceClient = grpc.makeGenericClientConstructor(NetworkLoadBalancerServiceService);
