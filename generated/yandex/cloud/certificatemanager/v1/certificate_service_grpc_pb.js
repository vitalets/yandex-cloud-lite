// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_certificatemanager_v1_certificate_service_pb = require('../../../../yandex/cloud/certificatemanager/v1/certificate_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_certificatemanager_v1_certificate_pb = require('../../../../yandex/cloud/certificatemanager/v1/certificate_pb.js');
var yandex_cloud_access_access_pb = require('../../../../yandex/cloud/access/access_pb.js');

function serialize_yandex_cloud_access_ListAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_ListAccessBindingsResponse(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.ListAccessBindingsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.access.ListAccessBindingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_ListAccessBindingsResponse(buffer_arg) {
  return yandex_cloud_access_access_pb.ListAccessBindingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_SetAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.SetAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.SetAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_SetAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.SetAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_access_UpdateAccessBindingsRequest(arg) {
  if (!(arg instanceof yandex_cloud_access_access_pb.UpdateAccessBindingsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.access.UpdateAccessBindingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_access_UpdateAccessBindingsRequest(buffer_arg) {
  return yandex_cloud_access_access_pb.UpdateAccessBindingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_Certificate(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_pb.Certificate)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.Certificate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_Certificate(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_pb.Certificate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_CreateCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.CreateCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_CreateCertificateRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_DeleteCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.DeleteCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_DeleteCertificateRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_GetCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.GetCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_GetCertificateRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsResponse(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_ListCertificatesRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.ListCertificatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_ListCertificatesRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_ListCertificatesResponse(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.ListCertificatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_ListCertificatesResponse(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_RequestNewCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_RequestNewCertificateRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_UpdateCertificateRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.UpdateCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_UpdateCertificateRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing certificates.
var CertificateServiceService = exports.CertificateServiceService = {
  // Returns the specified certificate.
//
// To get the list of available certificates, make a [List] request.
get: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.GetCertificateRequest,
    responseType: yandex_cloud_certificatemanager_v1_certificate_pb.Certificate,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_GetCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_GetCertificateRequest,
    responseSerialize: serialize_yandex_cloud_certificatemanager_v1_Certificate,
    responseDeserialize: deserialize_yandex_cloud_certificatemanager_v1_Certificate,
  },
  // Returns the list of certificates in the specified folder.
list: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesRequest,
    responseType: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificatesResponse,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_ListCertificatesRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_ListCertificatesRequest,
    responseSerialize: serialize_yandex_cloud_certificatemanager_v1_ListCertificatesResponse,
    responseDeserialize: deserialize_yandex_cloud_certificatemanager_v1_ListCertificatesResponse,
  },
  // Creates a certificate in the specified folder.
create: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.CreateCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_CreateCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_CreateCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified certificate.
update: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.UpdateCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_UpdateCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_UpdateCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified certificate.
delete: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.DeleteCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_DeleteCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_DeleteCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Request a certificate in the specified folder.
requestNew: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.RequestNewCertificateRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_RequestNewCertificateRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_RequestNewCertificateRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified certificate.
listOperations: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsRequest,
    responseType: yandex_cloud_certificatemanager_v1_certificate_service_pb.ListCertificateOperationsResponse,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsRequest,
    responseSerialize: serialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_certificatemanager_v1_ListCertificateOperationsResponse,
  },
  // Lists existing access bindings for the specified certificate.
listAccessBindings: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.ListAccessBindingsRequest,
    responseType: yandex_cloud_access_access_pb.ListAccessBindingsResponse,
    requestSerialize: serialize_yandex_cloud_access_ListAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_access_ListAccessBindingsResponse,
    responseDeserialize: deserialize_yandex_cloud_access_ListAccessBindingsResponse,
  },
  // Sets access bindings for the certificate.
setAccessBindings: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.SetAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_SetAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_SetAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates access bindings for the specified certificate.
updateAccessBindings: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_access_access_pb.UpdateAccessBindingsRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    requestDeserialize: deserialize_yandex_cloud_access_UpdateAccessBindingsRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.CertificateServiceClient = grpc.makeGenericClientConstructor(CertificateServiceService);
