// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_apploadbalancer_v1_load_balancer_service_pb = require('../../../../yandex/cloud/apploadbalancer/v1/load_balancer_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_apploadbalancer_v1_load_balancer_pb = require('../../../../yandex/cloud/apploadbalancer/v1/load_balancer_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_apploadbalancer_v1_AddListenerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.AddListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_AddListenerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_AddSniMatchRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.AddSniMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_AddSniMatchRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_CreateLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_CreateLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_DeleteLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_DeleteLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_LoadBalancer(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.LoadBalancer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_LoadBalancer(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_RemoveListenerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.RemoveListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_RemoveListenerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_RemoveSniMatchRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_RemoveSniMatchRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_StartLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_StartLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_StopLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_StopLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateListenerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateListenerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateListenerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateLoadBalancerRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateLoadBalancerRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateSniMatchRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateSniMatchRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing application load balancers.
var LoadBalancerServiceService = exports.LoadBalancerServiceService = {
  // Returns the specified application load balancer.
//
// To get the list of all available application load balancers, make a [List] request.
get: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetLoadBalancerRequest,
    responseType: yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_LoadBalancer,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_LoadBalancer,
  },
  // Lists application load balancers in the specified folder.
list: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersRequest,
    responseType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancersResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancersResponse,
  },
  // Creates an application load balancer in the specified folder.
create: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.CreateLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_CreateLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_CreateLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified application load balancer.
update: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified application load balancer.
delete: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.DeleteLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_DeleteLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_DeleteLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Starts the specified application load balancer.
start: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Start',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StartLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_StartLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_StartLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Stops the specified application load balancer.
stop: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/Stop',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.StopLoadBalancerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_StopLoadBalancerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_StopLoadBalancerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // AddListener/UpdateListener technically do the same, but have different semantics.
//
// Adds a listener to the specified application load balancer.
addListener: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddListener',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddListenerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_AddListenerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_AddListenerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified listener.
removeListener: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveListener',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveListenerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_RemoveListenerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_RemoveListenerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified listener of the specified application load balancer.
updateListener: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateListener',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateListenerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateListenerRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateListenerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds a SNI handler to the specified listener.
//
// This request does not allow to add [TlsListener.default_handler]. Make an [UpdateListener] request instead.
addSniMatch: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/AddSniMatch',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.AddSniMatchRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_AddSniMatchRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_AddSniMatchRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified SNI handler of the specified listener.
//
// This request does not allow to update [TlsListener.default_handler]. Make an [UpdateListener] request instead.
updateSniMatch: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/UpdateSniMatch',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.UpdateSniMatchRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateSniMatchRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateSniMatchRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified SNI handler.
//
// This request does not allow to delete [TlsListener.default_handler].
removeSniMatch: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/RemoveSniMatch',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.RemoveSniMatchRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_RemoveSniMatchRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_RemoveSniMatchRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the statuses of all targets of the specified backend group in all their availability zones.
getTargetStates: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/GetTargetStates',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesRequest,
    responseType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.GetTargetStatesResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetTargetStatesResponse,
  },
  // Lists operations for the specified application load balancer.
listOperations: {
    path: '/yandex.cloud.apploadbalancer.v1.LoadBalancerService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsRequest,
    responseType: yandex_cloud_apploadbalancer_v1_load_balancer_service_pb.ListLoadBalancerOperationsResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListLoadBalancerOperationsResponse,
  },
};

exports.LoadBalancerServiceClient = grpc.makeGenericClientConstructor(LoadBalancerServiceService);
