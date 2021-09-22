// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_vpc_v1_address_service_pb = require('../../../../yandex/cloud/vpc/v1/address_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_vpc_v1_address_pb = require('../../../../yandex/cloud/vpc/v1/address_pb.js');
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

function serialize_yandex_cloud_vpc_v1_Address(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_pb.Address)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.Address');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_Address(buffer_arg) {
  return yandex_cloud_vpc_v1_address_pb.Address.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_CreateAddressRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.CreateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_CreateAddressRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_DeleteAddressRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.DeleteAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_DeleteAddressRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetAddressByValueRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetAddressByValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetAddressByValueRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_GetAddressRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.GetAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_GetAddressRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListAddressOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListAddressOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListAddressOperationsRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListAddressOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListAddressOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListAddressOperationsResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListAddressesRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListAddressesRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_ListAddressesResponse(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.ListAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_ListAddressesResponse(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_MoveAddressRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.MoveAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_MoveAddressRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_vpc_v1_UpdateAddressRequest(arg) {
  if (!(arg instanceof yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest)) {
    throw new Error('Expected argument of type yandex.cloud.vpc.v1.UpdateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_vpc_v1_UpdateAddressRequest(buffer_arg) {
  return yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing Address resources.
var AddressServiceService = exports.AddressServiceService = {
  // Returns the specified Address resource.
//
// To get the list of all available Address resources, make a [List] request.
get: {
    path: '/yandex.cloud.vpc.v1.AddressService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.GetAddressRequest,
    responseType: yandex_cloud_vpc_v1_address_pb.Address,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetAddressRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetAddressRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_Address,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_Address,
  },
  // Returns the specified Address resource by a given value.
//
// To get the list of all available Address resources, make a [List] request.
getByValue: {
    path: '/yandex.cloud.vpc.v1.AddressService/GetByValue',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.GetAddressByValueRequest,
    responseType: yandex_cloud_vpc_v1_address_pb.Address,
    requestSerialize: serialize_yandex_cloud_vpc_v1_GetAddressByValueRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_GetAddressByValueRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_Address,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_Address,
  },
  // Retrieves the list of Address resources in the specified folder.
list: {
    path: '/yandex.cloud.vpc.v1.AddressService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.ListAddressesRequest,
    responseType: yandex_cloud_vpc_v1_address_service_pb.ListAddressesResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListAddressesRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListAddressesRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListAddressesResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListAddressesResponse,
  },
  // Creates an address in the specified folder and network.
create: {
    path: '/yandex.cloud.vpc.v1.AddressService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.CreateAddressRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_CreateAddressRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_CreateAddressRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified address.
update: {
    path: '/yandex.cloud.vpc.v1.AddressService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.UpdateAddressRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_UpdateAddressRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_UpdateAddressRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified address.
delete: {
    path: '/yandex.cloud.vpc.v1.AddressService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.DeleteAddressRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_DeleteAddressRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_DeleteAddressRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // List operations for the specified address.
listOperations: {
    path: '/yandex.cloud.vpc.v1.AddressService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsRequest,
    responseType: yandex_cloud_vpc_v1_address_service_pb.ListAddressOperationsResponse,
    requestSerialize: serialize_yandex_cloud_vpc_v1_ListAddressOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_ListAddressOperationsRequest,
    responseSerialize: serialize_yandex_cloud_vpc_v1_ListAddressOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_vpc_v1_ListAddressOperationsResponse,
  },
  // Move an address to another folder
move: {
    path: '/yandex.cloud.vpc.v1.AddressService/Move',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_vpc_v1_address_service_pb.MoveAddressRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_vpc_v1_MoveAddressRequest,
    requestDeserialize: deserialize_yandex_cloud_vpc_v1_MoveAddressRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.AddressServiceClient = grpc.makeGenericClientConstructor(AddressServiceService);
