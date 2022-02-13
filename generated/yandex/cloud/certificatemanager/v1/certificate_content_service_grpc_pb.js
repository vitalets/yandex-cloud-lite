// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_certificatemanager_v1_certificate_content_service_pb = require('../../../../yandex/cloud/certificatemanager/v1/certificate_content_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_yandex_cloud_certificatemanager_v1_GetCertificateContentRequest(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.GetCertificateContentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_GetCertificateContentRequest(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_certificatemanager_v1_GetCertificateContentResponse(arg) {
  if (!(arg instanceof yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse)) {
    throw new Error('Expected argument of type yandex.cloud.certificatemanager.v1.GetCertificateContentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_certificatemanager_v1_GetCertificateContentResponse(buffer_arg) {
  return yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing certificate content.
var CertificateContentServiceService = exports.CertificateContentServiceService = {
  // Returns chain and private key of the specified certificate.
get: {
    path: '/yandex.cloud.certificatemanager.v1.CertificateContentService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentRequest,
    responseType: yandex_cloud_certificatemanager_v1_certificate_content_service_pb.GetCertificateContentResponse,
    requestSerialize: serialize_yandex_cloud_certificatemanager_v1_GetCertificateContentRequest,
    requestDeserialize: deserialize_yandex_cloud_certificatemanager_v1_GetCertificateContentRequest,
    responseSerialize: serialize_yandex_cloud_certificatemanager_v1_GetCertificateContentResponse,
    responseDeserialize: deserialize_yandex_cloud_certificatemanager_v1_GetCertificateContentResponse,
  },
};

exports.CertificateContentServiceClient = grpc.makeGenericClientConstructor(CertificateContentServiceService);
