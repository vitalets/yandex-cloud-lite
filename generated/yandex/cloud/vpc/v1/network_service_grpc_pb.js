// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_vpc_v1_network_service_pb = require('../../../../yandex/cloud/vpc/v1/network_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_vpc_v1_network_pb = require('../../../../yandex/cloud/vpc/v1/network_pb.js');
var yandex_cloud_vpc_v1_subnet_pb = require('../../../../yandex/cloud/vpc/v1/subnet_pb.js');
var yandex_cloud_vpc_v1_security_group_pb = require('../../../../yandex/cloud/vpc/v1/security_group_pb.js');
var yandex_cloud_vpc_v1_route_table_pb = require('../../../../yandex/cloud/vpc/v1/route_table_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_CreateNetworkRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.CreateNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_CreateNetworkRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_DeleteNetworkRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.DeleteNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_DeleteNetworkRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetNetworkRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetNetworkRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkOperationsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkOperationsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkRouteTablesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkRouteTablesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkSecurityGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkSecurityGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkSubnetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkSubnetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkSubnetsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworkSubnetsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworkSubnetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworkSubnetsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworksRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworksRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListNetworksResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListNetworksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListNetworksResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_MoveNetworkRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.MoveNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_MoveNetworkRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_Network(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_pb.Network)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.Network');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_Network(buffer_arg) {
  return yandex_cloud_vpc_v1_network_pb.Network.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateNetworkRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateNetworkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateNetworkRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Network resources.
var NetworkServiceService = exports.NetworkServiceService = {
  // Returns the specified Network resource.
//
// Get the list of available Network resources by making a [List] request.
get: {
    path: '/yandex.cloud.vpc.v1.NetworkService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.GetNetworkRequest,
    responseType: yandex_cloud_vpc_v1_network_pb.Network,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetNetworkRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetNetworkRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_Network,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_Network,
  },
  // Retrieves the list of Network resources in the specified folder.
list: {
    path: '/yandex.cloud.vpc.v1.NetworkService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.ListNetworksRequest,
    responseType: yandex_cloud_vpc_v1_network_service_pb.ListNetworksResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListNetworksRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworksRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListNetworksResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworksResponse,
  },
  // Creates a network in the specified folder using the data specified in the request.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.vpc.v1.NetworkService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.CreateNetworkRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_CreateNetworkRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_CreateNetworkRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified network.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
update: {
    path: '/yandex.cloud.vpc.v1.NetworkService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.UpdateNetworkRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateNetworkRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateNetworkRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified network.
delete: {
    path: '/yandex.cloud.vpc.v1.NetworkService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.DeleteNetworkRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_DeleteNetworkRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_DeleteNetworkRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists subnets from the specified network.
listSubnets: {
    path: '/yandex.cloud.vpc.v1.NetworkService/ListSubnets',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsRequest,
    responseType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSubnetsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkSubnetsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkSubnetsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkSubnetsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkSubnetsResponse,
  },
  // Lists security groups from the specified network.
listSecurityGroups: {
    path: '/yandex.cloud.vpc.v1.NetworkService/ListSecurityGroups',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsRequest,
    responseType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkSecurityGroupsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkSecurityGroupsResponse,
  },
  // Lists route tables from the specified network.
listRouteTables: {
    path: '/yandex.cloud.vpc.v1.NetworkService/ListRouteTables',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesRequest,
    responseType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkRouteTablesResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkRouteTablesResponse,
  },
  // Lists operations for the specified network.
listOperations: {
    path: '/yandex.cloud.vpc.v1.NetworkService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsRequest,
    responseType: yandex_cloud_vpc_v1_network_service_pb.ListNetworkOperationsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkOperationsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListNetworkOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListNetworkOperationsResponse,
  },
  // Move network to another folder.
move: {
    path: '/yandex.cloud.vpc.v1.NetworkService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_network_service_pb.MoveNetworkRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_MoveNetworkRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_MoveNetworkRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService);
