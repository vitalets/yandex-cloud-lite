// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_dataproc_manager_v1_manager_service_pb = require('../../../../../yandex/cloud/dataproc/manager/v1/manager_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_yandex_cloud_dataproc_manager_v1_ReportReply(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.ReportReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_ReportReply(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_manager_v1_ReportRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.ReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_ReportRequest(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Data Proc manager service defifnition
var DataprocManagerServiceService = exports.DataprocManagerServiceService = {
  // Sends a status report from a host
report: {
    path: '/yandex.cloud.dataproc.manager.v1.DataprocManagerService/Report',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportRequest,
    responseType: yandex_cloud_dataproc_manager_v1_manager_service_pb.ReportReply,
    requestSerialize: serialize_yandex_cloud_dataproc_manager_v1_ReportRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_ReportRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_manager_v1_ReportReply,
    responseDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_ReportReply,
  },
};

exports.DataprocManagerServiceClient = grpc.makeGenericClientConstructor(DataprocManagerServiceService);
