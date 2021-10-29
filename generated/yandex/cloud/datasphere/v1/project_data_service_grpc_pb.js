// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_datasphere_v1_project_data_service_pb = require('../../../../yandex/cloud/datasphere/v1/project_data_service_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_datasphere_v1_DownloadFileRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.DownloadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_DownloadFileRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_DownloadFileResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.DownloadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_DownloadFileResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_UploadFileRequest(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.UploadFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_UploadFileRequest(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_datasphere_v1_UploadFileResponse(arg) {
  if (!(arg instanceof yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse)) {
    throw new Error('Expected argument of type yandex.cloud.datasphere.v1.UploadFileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_datasphere_v1_UploadFileResponse(buffer_arg) {
  return yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A set of methods for managing data of the Project resource.
var ProjectDataServiceService = exports.ProjectDataServiceService = {
  // Uploads a file to the specified project.
uploadFile: {
    path: '/yandex.cloud.datasphere.v1.ProjectDataService/UploadFile',
    requestStream: true,
    responseStream: false,
    requestType: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileRequest,
    responseType: yandex_cloud_datasphere_v1_project_data_service_pb.UploadFileResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_UploadFileRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_UploadFileRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_UploadFileResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_UploadFileResponse,
  },
  // Downloads the specified file from the specified project.
downloadFile: {
    path: '/yandex.cloud.datasphere.v1.ProjectDataService/DownloadFile',
    requestStream: false,
    responseStream: true,
    requestType: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileRequest,
    responseType: yandex_cloud_datasphere_v1_project_data_service_pb.DownloadFileResponse,
    requestSerialize: serialize_yandex_cloud_datasphere_v1_DownloadFileRequest,
    requestDeserialize: deserialize_yandex_cloud_datasphere_v1_DownloadFileRequest,
    responseSerialize: serialize_yandex_cloud_datasphere_v1_DownloadFileResponse,
    responseDeserialize: deserialize_yandex_cloud_datasphere_v1_DownloadFileResponse,
  },
};

exports.ProjectDataServiceClient = grpc.makeGenericClientConstructor(ProjectDataServiceService);
