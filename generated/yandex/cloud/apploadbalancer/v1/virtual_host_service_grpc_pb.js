// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_apploadbalancer_v1_virtual_host_service_pb = require('../../../../yandex/cloud/apploadbalancer/v1/virtual_host_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_apploadbalancer_v1_virtual_host_pb = require('../../../../yandex/cloud/apploadbalancer/v1/virtual_host_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_apploadbalancer_v1_CreateVirtualHostRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.CreateVirtualHostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_CreateVirtualHostRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_DeleteVirtualHostRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.DeleteVirtualHostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_DeleteVirtualHostRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_GetVirtualHostRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.GetVirtualHostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_GetVirtualHostRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListVirtualHostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsResponse(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.ListVirtualHostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsResponse(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_RemoveRouteRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.RemoveRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_RemoveRouteRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateRouteRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateRouteRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_UpdateVirtualHostRequest(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.UpdateVirtualHostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_UpdateVirtualHostRequest(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_apploadbalancer_v1_VirtualHost(arg) {
  if (!(arg instanceof yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost)) {
    throw new Error('Expected argument of type yandex.cloud.apploadbalancer.v1.VirtualHost');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_apploadbalancer_v1_VirtualHost(buffer_arg) {
  return yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing virtual hosts of HTTP routers.
var VirtualHostServiceService = exports.VirtualHostServiceService = {
  // Returns the specified virtual host.
//
// To get the list of all virtual hosts of an HTTP router, make a [List] request.
get: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.GetVirtualHostRequest,
    responseType: yandex_cloud_apploadbalancer_v1_virtual_host_pb.VirtualHost,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_GetVirtualHostRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_GetVirtualHostRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_VirtualHost,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_VirtualHost,
  },
  // Lists virtual hosts of the specified HTTP router.
list: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsRequest,
    responseType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.ListVirtualHostsResponse,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsRequest,
    responseSerialize: serialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsResponse,
    responseDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_ListVirtualHostsResponse,
  },
  // Creates a virtual host in the specified HTTP router.
create: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.CreateVirtualHostRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_CreateVirtualHostRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_CreateVirtualHostRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified virtual host of the specified HTTP router.
update: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateVirtualHostRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateVirtualHostRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateVirtualHostRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified virtual host.
delete: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.DeleteVirtualHostRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_DeleteVirtualHostRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_DeleteVirtualHostRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified route from the specified virtual host.
removeRoute: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/RemoveRoute',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.RemoveRouteRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_RemoveRouteRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_RemoveRouteRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified route of the specified virtual host.
updateRoute: {
    path: '/yandex.cloud.apploadbalancer.v1.VirtualHostService/UpdateRoute',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_apploadbalancer_v1_virtual_host_service_pb.UpdateRouteRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_apploadbalancer_v1_UpdateRouteRequest,
    requestDeserialize: deserialize_yandex_cloud_apploadbalancer_v1_UpdateRouteRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.VirtualHostServiceClient = grpc.makeGenericClientConstructor(VirtualHostServiceService);
