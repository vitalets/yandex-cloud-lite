// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_dataproc_manager_v1_job_service_pb = require('../../../../../yandex/cloud/dataproc/manager/v1/job_service_pb.js');
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_dataproc_manager_v1_job_pb = require('../../../../../yandex/cloud/dataproc/manager/v1/job_pb.js');

function serialize_yandex_cloud_dataproc_manager_v1_ListJobsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.ListJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_ListJobsRequest(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_manager_v1_ListJobsResponse(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.ListJobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_ListJobsResponse(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusRequest(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusResponse(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusResponse(buffer_arg) {
  return yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var JobServiceService = exports.JobServiceService = {
  // Retrieves a list of jobs for Data Proc cluster.
listActive: {
    path: '/yandex.cloud.dataproc.manager.v1.JobService/ListActive',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsRequest,
    responseType: yandex_cloud_dataproc_manager_v1_job_service_pb.ListJobsResponse,
    requestSerialize: serialize_yandex_cloud_dataproc_manager_v1_ListJobsRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_ListJobsRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_manager_v1_ListJobsResponse,
    responseDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_ListJobsResponse,
  },
  // Currently used to update Job status.
updateStatus: {
    path: '/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusRequest,
    responseType: yandex_cloud_dataproc_manager_v1_job_service_pb.UpdateJobStatusResponse,
    requestSerialize: serialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusResponse,
    responseDeserialize: deserialize_yandex_cloud_dataproc_manager_v1_UpdateJobStatusResponse,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
