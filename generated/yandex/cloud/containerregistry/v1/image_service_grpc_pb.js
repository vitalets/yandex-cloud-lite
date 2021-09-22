// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_containerregistry_v1_image_service_pb = require('../../../../yandex/cloud/containerregistry/v1/image_service_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_containerregistry_v1_image_pb = require('../../../../yandex/cloud/containerregistry/v1/image_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_yandex_cloud_containerregistry_v1_DeleteImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DeleteImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DeleteImageRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetImageRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_Image(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_image_pb.Image)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.Image');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_Image(buffer_arg) {
  return yandex_cloud_containerregistry_v1_image_pb.Image.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListImagesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListImagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListImagesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListImagesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListImagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListImagesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Image resources.
var ImageServiceService = exports.ImageServiceService = {
  // Retrieves the list of Image resources in the specified registry or repository.
list: {
    path: '/yandex.cloud.containerregistry.v1.ImageService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesRequest,
    responseType: yandex_cloud_containerregistry_v1_image_service_pb.ListImagesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListImagesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListImagesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListImagesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListImagesResponse,
  },
  // Returns the specified Image resource.
//
// To get the list of available Image resources, make a [List] request.
get: {
    path: '/yandex.cloud.containerregistry.v1.ImageService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_image_service_pb.GetImageRequest,
    responseType: yandex_cloud_containerregistry_v1_image_pb.Image,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetImageRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetImageRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_Image,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_Image,
  },
  // Deletes the specified Docker image.
delete: {
    path: '/yandex.cloud.containerregistry.v1.ImageService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_image_service_pb.DeleteImageRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_DeleteImageRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_DeleteImageRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
};

exports.ImageServiceClient = grpc.makeGenericClientConstructor(ImageServiceService);
