// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_billing_v1_customer_service_pb = require('../../../../yandex/cloud/billing/v1/customer_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_billing_v1_customer_pb = require('../../../../yandex/cloud/billing/v1/customer_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_billing_v1_ActivateCustomerRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ActivateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ActivateCustomerRequest(buffer_arg) {
  return yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_InviteCustomerRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.InviteCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_InviteCustomerRequest(buffer_arg) {
  return yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListCustomersRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListCustomersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListCustomersRequest(buffer_arg) {
  return yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_ListCustomersResponse(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.ListCustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_ListCustomersResponse(buffer_arg) {
  return yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_billing_v1_SuspendCustomerRequest(arg) {
  if (!(arg instanceof yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest)) {
    throw new Error('Expected argument of type yandex.cloud.billing.v1.SuspendCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_billing_v1_SuspendCustomerRequest(buffer_arg) {
  return yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Customer resources.
var CustomerServiceService = exports.CustomerServiceService = {
  // Retrieves the list of customers associated with the specified reseller.
list: {
    path: '/yandex.cloud.billing.v1.CustomerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_customer_service_pb.ListCustomersRequest,
    responseType: yandex_cloud_billing_v1_customer_service_pb.ListCustomersResponse,
    requestSerialize: serialize_yandex_cloud_billing_v1_ListCustomersRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ListCustomersRequest,
    responseSerialize: serialize_yandex_cloud_billing_v1_ListCustomersResponse,
    responseDeserialize: deserialize_yandex_cloud_billing_v1_ListCustomersResponse,
  },
  // Invites customer to the specified reseller.
invite: {
    path: '/yandex.cloud.billing.v1.CustomerService/Invite',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_customer_service_pb.InviteCustomerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_billing_v1_InviteCustomerRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_InviteCustomerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Activates specified customer. After customer is activated, he can use resources associated with his billing account.
activate: {
    path: '/yandex.cloud.billing.v1.CustomerService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_customer_service_pb.ActivateCustomerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_billing_v1_ActivateCustomerRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_ActivateCustomerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account.
suspend: {
    path: '/yandex.cloud.billing.v1.CustomerService/Suspend',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_billing_v1_customer_service_pb.SuspendCustomerRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_billing_v1_SuspendCustomerRequest,
    requestDeserialize: deserialize_yandex_cloud_billing_v1_SuspendCustomerRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
