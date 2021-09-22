// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_vpc_v1_route_table_service_pb = require('../../../../yandex/cloud/vpc/v1/route_table_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
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

function serialize_yandex_cloud_vpc_v1_CreateRouteTableRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.CreateRouteTableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_CreateRouteTableRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_DeleteRouteTableRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.DeleteRouteTableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_DeleteRouteTableRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetRouteTableRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetRouteTableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetRouteTableRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListRouteTableOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListRouteTableOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListRouteTableOperationsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListRouteTableOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListRouteTableOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListRouteTableOperationsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListRouteTablesRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListRouteTablesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListRouteTablesRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListRouteTablesResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListRouteTablesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListRouteTablesResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_MoveRouteTableRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.MoveRouteTableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_MoveRouteTableRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_RouteTable(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_pb.RouteTable)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.RouteTable');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_RouteTable(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_pb.RouteTable.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateRouteTableRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateRouteTableRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateRouteTableRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing RouteTable resources.
var RouteTableServiceService = exports.RouteTableServiceService = {
  // Returns the specified RouteTable resource.
//
// To get the list of available RouteTable resources, make a [List] request.
get: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.GetRouteTableRequest,
    responseType: yandex_cloud_vpc_v1_route_table_pb.RouteTable,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetRouteTableRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetRouteTableRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_RouteTable,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_RouteTable,
  },
  // Retrieves the list of RouteTable resources in the specified folder.
list: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesRequest,
    responseType: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTablesResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListRouteTablesRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListRouteTablesRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListRouteTablesResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListRouteTablesResponse,
  },
  // Creates a route table in the specified folder and network.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.CreateRouteTableRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_CreateRouteTableRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_CreateRouteTableRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified route table.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
update: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.UpdateRouteTableRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateRouteTableRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateRouteTableRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified route table.
delete: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.DeleteRouteTableRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_DeleteRouteTableRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_DeleteRouteTableRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // List operations for the specified route table.
listOperations: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsRequest,
    responseType: yandex_cloud_vpc_v1_route_table_service_pb.ListRouteTableOperationsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListRouteTableOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListRouteTableOperationsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListRouteTableOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListRouteTableOperationsResponse,
  },
  // Move route table to another folder.
move: {
    path: '/yandex.cloud.vpc.v1.RouteTableService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_route_table_service_pb.MoveRouteTableRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_MoveRouteTableRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_MoveRouteTableRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.RouteTableServiceClient = grpc.makeGenericClientConstructor(RouteTableServiceService);
