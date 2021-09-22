// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_dataproc_v1_job_service_pb = require('../../../../yandex/cloud/dataproc/v1/job_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var yandex_cloud_dataproc_v1_job_pb = require('../../../../yandex/cloud/dataproc/v1/job_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');

function serialize_yandex_cloud_dataproc_v1_CreateJobRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.CreateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_CreateJobRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_GetJobRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.GetJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_GetJobRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_Job(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_pb.Job)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.Job');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_Job(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_pb.Job.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListJobLogRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListJobLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListJobLogRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListJobLogResponse(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListJobLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListJobLogResponse(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListJobsRequest(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListJobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListJobsRequest(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_dataproc_v1_ListJobsResponse(arg) {
  if (!(arg instanceof yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.dataproc.v1.ListJobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_dataproc_v1_ListJobsResponse(buffer_arg) {
  return yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Data Proc jobs.
var JobServiceService = exports.JobServiceService = {
  // Retrieves a list of jobs for a cluster.
list: {
    path: '/yandex.cloud.dataproc.v1.JobService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_job_service_pb.ListJobsRequest,
    responseType: yandex_cloud_dataproc_v1_job_service_pb.ListJobsResponse,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_ListJobsRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_ListJobsRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_v1_ListJobsResponse,
    responseDeserialize: deserialize_yandex_cloud_dataproc_v1_ListJobsResponse,
  },
  // Creates a job for a cluster.
create: {
    path: '/yandex.cloud.dataproc.v1.JobService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_job_service_pb.CreateJobRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_CreateJobRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_CreateJobRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified job.
get: {
    path: '/yandex.cloud.dataproc.v1.JobService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_job_service_pb.GetJobRequest,
    responseType: yandex_cloud_dataproc_v1_job_pb.Job,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_GetJobRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_GetJobRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_v1_Job,
    responseDeserialize: deserialize_yandex_cloud_dataproc_v1_Job,
  },
  // Returns a log for specified job.
listLog: {
    path: '/yandex.cloud.dataproc.v1.JobService/ListLog',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogRequest,
    responseType: yandex_cloud_dataproc_v1_job_service_pb.ListJobLogResponse,
    requestSerialize: serialize_yandex_cloud_dataproc_v1_ListJobLogRequest,
    requestDeserialize: deserialize_yandex_cloud_dataproc_v1_ListJobLogRequest,
    responseSerialize: serialize_yandex_cloud_dataproc_v1_ListJobLogResponse,
    responseDeserialize: deserialize_yandex_cloud_dataproc_v1_ListJobLogResponse,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService);
