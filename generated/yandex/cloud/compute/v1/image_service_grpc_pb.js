// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_compute_v1_image_service_pb = require('../../../../yandex/cloud/compute/v1/image_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_compute_v1_image_pb = require('../../../../yandex/cloud/compute/v1/image_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');

function serialize_yandex_cloud_compute_v1_CreateImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.CreateImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.CreateImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_CreateImageRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.CreateImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_DeleteImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.DeleteImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_DeleteImageRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetImageLatestByFamilyRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetImageLatestByFamilyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetImageLatestByFamilyRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_GetImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.GetImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.GetImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_GetImageRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.GetImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_Image(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_pb.Image)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.Image');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_Image(buffer_arg) {
  return yandex_cloud_compute_v1_image_pb.Image.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListImageOperationsRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListImageOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListImageOperationsRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListImageOperationsResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListImageOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListImageOperationsResponse(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListImagesRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.ListImagesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListImagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListImagesRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.ListImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_ListImagesResponse(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.ListImagesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.ListImagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_ListImagesResponse(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.ListImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_compute_v1_UpdateImageRequest(arg) {
  if (!(arg instanceof yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest)) {
    throw new Error('Expected argument of type yandex.cloud.compute.v1.UpdateImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_compute_v1_UpdateImageRequest(buffer_arg) {
  return yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Returns the specified Image resource.
//
// To get the list of available Image resources, make a [List] request.
get: {
    path: '/yandex.cloud.compute.v1.ImageService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.GetImageRequest,
    responseType: yandex_cloud_compute_v1_image_pb.Image,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetImageRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetImageRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Image,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Image,
  },
  // Returns the latest image that is part of an image family.
getLatestByFamily: {
    path: '/yandex.cloud.compute.v1.ImageService/GetLatestByFamily',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.GetImageLatestByFamilyRequest,
    responseType: yandex_cloud_compute_v1_image_pb.Image,
    requestSerialize: serialize_yandex_cloud_compute_v1_GetImageLatestByFamilyRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_GetImageLatestByFamilyRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_Image,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_Image,
  },
  // Retrieves the list of Image resources in the specified folder.
list: {
    path: '/yandex.cloud.compute.v1.ImageService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.ListImagesRequest,
    responseType: yandex_cloud_compute_v1_image_service_pb.ListImagesResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListImagesRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListImagesRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListImagesResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListImagesResponse,
  },
  // Creates an image in the specified folder.
//
// You can create an image from a disk, snapshot, other image or URI.
// Method starts an asynchronous operation that can be cancelled while it is in progress.
create: {
    path: '/yandex.cloud.compute.v1.ImageService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.CreateImageRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_CreateImageRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_CreateImageRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified image.
update: {
    path: '/yandex.cloud.compute.v1.ImageService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.UpdateImageRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_UpdateImageRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_UpdateImageRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified image.
//
// Deleting an image removes its data permanently and is irreversible.
delete: {
    path: '/yandex.cloud.compute.v1.ImageService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.DeleteImageRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_compute_v1_DeleteImageRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_DeleteImageRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Lists operations for the specified image.
listOperations: {
    path: '/yandex.cloud.compute.v1.ImageService/ListOperations',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsRequest,
    responseType: yandex_cloud_compute_v1_image_service_pb.ListImageOperationsResponse,
    requestSerialize: serialize_yandex_cloud_compute_v1_ListImageOperationsRequest,
    requestDeserialize: deserialize_yandex_cloud_compute_v1_ListImageOperationsRequest,
    responseSerialize: serialize_yandex_cloud_compute_v1_ListImageOperationsResponse,
    responseDeserialize: deserialize_yandex_cloud_compute_v1_ListImageOperationsResponse,
  },
};

exports.ImageServiceClient = grpc.makeGenericClientConstructor(ImageServiceService);
