// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_vpc_v1_subnet_service_pb = require('../../../../yandex/cloud/vpc/v1/subnet_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_vpc_v1_subnet_pb = require('../../../../yandex/cloud/vpc/v1/subnet_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_reference_reference_pb = require('../../../../yandex/cloud/reference/reference_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_AddSubnetCidrBlocksRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.AddSubnetCidrBlocksRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.AddSubnetCidrBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_AddSubnetCidrBlocksRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.AddSubnetCidrBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_CreateSubnetRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.CreateSubnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_CreateSubnetRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_DeleteSubnetRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.DeleteSubnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_DeleteSubnetRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetSubnetRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetSubnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetSubnetRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSubnetOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSubnetOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSubnetOperationsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSubnetOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSubnetOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSubnetOperationsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSubnetsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSubnetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSubnetsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListSubnetsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListSubnetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListSubnetsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListUsedAddressesRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListUsedAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListUsedAddressesRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListUsedAddressesResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListUsedAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListUsedAddressesResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_MoveSubnetRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.MoveSubnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_MoveSubnetRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_RemoveSubnetCidrBlocksRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.RemoveSubnetCidrBlocksRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.RemoveSubnetCidrBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_RemoveSubnetCidrBlocksRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.RemoveSubnetCidrBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_Subnet(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_pb.Subnet)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.Subnet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_Subnet(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_pb.Subnet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateSubnetRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateSubnetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateSubnetRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Subnet resources.
var SubnetServiceService = exports.SubnetServiceService = {
  // Returns the specified Subnet resource.
//
// To get the list of available Subnet resources, make a [List] request.
get: {
    path: '/yandex.cloud.vpc.v1.SubnetService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.GetSubnetRequest,
    responseType: yandex_cloud_vpc_v1_subnet_pb.Subnet,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetSubnetRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetSubnetRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_Subnet,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_Subnet,
  },
  // Retrieves the list of Subnet resources in the specified folder.
list: {
    path: '/yandex.cloud.vpc.v1.SubnetService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsRequest,
    responseType: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListSubnetsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListSubnetsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListSubnetsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListSubnetsResponse,
  },
  // Creates a subnet in the specified folder and network.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.vpc.v1.SubnetService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.CreateSubnetRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_CreateSubnetRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_CreateSubnetRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified subnet.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
update: {
    path: '/yandex.cloud.vpc.v1.SubnetService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.UpdateSubnetRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateSubnetRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateSubnetRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Adds CIDR blocks to the specified subnet.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
addCidrBlocks: {
    path: '/yandex.cloud.vpc.v1.SubnetService/AddCidrBlocks',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.AddSubnetCidrBlocksRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_AddSubnetCidrBlocksRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_AddSubnetCidrBlocksRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Removes CIDR blocks from the specified subnet.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
removeCidrBlocks: {
    path: '/yandex.cloud.vpc.v1.SubnetService/RemoveCidrBlocks',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.RemoveSubnetCidrBlocksRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_RemoveSubnetCidrBlocksRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_RemoveSubnetCidrBlocksRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified subnet.
delete: {
    path: '/yandex.cloud.vpc.v1.SubnetService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.DeleteSubnetRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_DeleteSubnetRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_DeleteSubnetRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // List operations for the specified subnet.
listOperations: {
    path: '/yandex.cloud.vpc.v1.SubnetService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsRequest,
    responseType: yandex_cloud_vpc_v1_subnet_service_pb.ListSubnetOperationsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListSubnetOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListSubnetOperationsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListSubnetOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListSubnetOperationsResponse,
  },
  // Move subnet to another folder.
move: {
    path: '/yandex.cloud.vpc.v1.SubnetService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.MoveSubnetRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_MoveSubnetRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_MoveSubnetRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // List used addresses in specified subnet.
listUsedAddresses: {
    path: '/yandex.cloud.vpc.v1.SubnetService/ListUsedAddresses',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesRequest,
    responseType: yandex_cloud_vpc_v1_subnet_service_pb.ListUsedAddressesResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListUsedAddressesRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListUsedAddressesRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListUsedAddressesResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListUsedAddressesResponse,
  },
};

exports.SubnetServiceClient = grpc.makeGenericClientConstructor(SubnetServiceService);
