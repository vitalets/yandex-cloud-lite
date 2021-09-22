// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_organizationmanager_v1_saml_certificate_service_pb = require('../../../../../yandex/cloud/organizationmanager/v1/saml/certificate_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_organizationmanager_v1_saml_certificate_pb = require('../../../../../yandex/cloud/organizationmanager/v1/saml/certificate_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_operation_Operation(arg) {
  if (!(arg instanceof yandex_cloud_operation_operation_pb.Operation)) {
    throw new Error('Expected argument of type yandex.cloud.operation.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_operation_Operation(buffer_arg) {
  return yandex_cloud_operation_operation_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_Certificate(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.Certificate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_Certificate(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_CreateCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.CreateCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.CreateCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_CreateCertificateRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.CreateCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_DeleteCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.DeleteCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.DeleteCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_DeleteCertificateRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.DeleteCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_GetCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.GetCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.GetCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_GetCertificateRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.GetCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListCertificateOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.ListCertificatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesResponse(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_organizationmanager_v1_saml_UpdateCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.UpdateCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.organizationmanager.v1.saml.UpdateCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_organizationmanager_v1_saml_UpdateCertificateRequest(buffer_arg) {
  return yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.UpdateCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing certificates.
var CertificateServiceService = exports.CertificateServiceService = {
  // Returns the specified certificate.
//
// To get the list of available certificates, make a [List] request.
get: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.GetCertificateRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_certificate_pb.Certificate,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_GetCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_GetCertificateRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_Certificate,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_Certificate,
  },
  // Retrieves the list of certificates in the specified federation.
list: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificatesResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificatesResponse,
  },
  // Creates a certificate in the specified federation.
create: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.CreateCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_CreateCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_CreateCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified certificate.
update: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.UpdateCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_UpdateCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_UpdateCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified certificate.
delete: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.DeleteCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_DeleteCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_DeleteCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified certificate.
listOperations: {
    path: '/yandex.cloud.organizationmanager.v1.saml.CertificateService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsRequest,
    responseType: yandex_cloud_organizationmanager_v1_saml_certificate_service_pb.ListCertificateOperationsResponse,
    requestSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsRequest,
    responseSerialize: serialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_organizationmanager_v1_saml_ListCertificateOperationsResponse,
  },
};

exports.CertificateServiceClient = grpc.makeGenericClientConstructor(CertificateServiceService);
