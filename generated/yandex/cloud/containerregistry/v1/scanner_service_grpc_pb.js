// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_containerregistry_v1_scanner_service_pb = require('../../../../yandex/cloud/containerregistry/v1/scanner_service_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_containerregistry_v1_scanner_pb = require('../../../../yandex/cloud/containerregistry/v1/scanner_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_yandex_cloud_containerregistry_v1_GetLastScanResultRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetLastScanResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetLastScanResultRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetScanResultRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetScanResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetScanResultRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListScanResultsRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListScanResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListScanResultsRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListScanResultsResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListScanResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListScanResultsResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ScanRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ScanRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ScanResult(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_scanner_pb.ScanResult)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ScanResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ScanResult(buffer_arg) {
  return yandex_cloud_containerregistry_v1_scanner_pb.ScanResult.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for scanning Docker images.
var ScannerServiceService = exports.ScannerServiceService = {
  // Executes scanning of specified image.
scan: {
    path: '/yandex.cloud.containerregistry.v1.ScannerService/Scan',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_scanner_service_pb.ScanRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ScanRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ScanRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the specified ScanResult resource.
//
// To get the list of ScanResults for specified Image, make a [List] request.
get: {
    path: '/yandex.cloud.containerregistry.v1.ScannerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_scanner_service_pb.GetScanResultRequest,
    responseType: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetScanResultRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetScanResultRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ScanResult,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ScanResult,
  },
  // Returns the last finished ScanResult for the specified Image.
getLast: {
    path: '/yandex.cloud.containerregistry.v1.ScannerService/GetLast',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_scanner_service_pb.GetLastScanResultRequest,
    responseType: yandex_cloud_containerregistry_v1_scanner_pb.ScanResult,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetLastScanResultRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetLastScanResultRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ScanResult,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ScanResult,
  },
  // Retrieves the list of ScanResults for specified Image.
list: {
    path: '/yandex.cloud.containerregistry.v1.ScannerService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsRequest,
    responseType: yandex_cloud_containerregistry_v1_scanner_service_pb.ListScanResultsResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListScanResultsRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListScanResultsRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListScanResultsResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListScanResultsResponse,
  },
  // Retrieves the list of vulnerabilities found in particular scan.
listVulnerabilities: {
    path: '/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesRequest,
    responseType: yandex_cloud_containerregistry_v1_scanner_service_pb.ListVulnerabilitiesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListVulnerabilitiesResponse,
  },
};

exports.ScannerServiceClient = grpc.makeGenericClientConstructor(ScannerServiceService);
