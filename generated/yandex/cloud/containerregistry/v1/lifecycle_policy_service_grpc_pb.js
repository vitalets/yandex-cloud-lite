// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb = require('../../../../yandex/cloud/containerregistry/v1/lifecycle_policy_service_pb.js');
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
var yandex_cloud_containerregistry_v1_image_pb = require('../../../../yandex/cloud/containerregistry/v1/image_pb.js');
var yandex_cloud_containerregistry_v1_lifecycle_policy_pb = require('../../../../yandex/cloud/containerregistry/v1/lifecycle_policy_pb.js');
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');

function serialize_yandex_cloud_containerregistry_v1_CreateLifecyclePolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.CreateLifecyclePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_CreateLifecyclePolicyRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_DeleteLifecyclePolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DeleteLifecyclePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DeleteLifecyclePolicyRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyResult(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.DryRunLifecyclePolicyResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyResult(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetDryRunLifecyclePolicyResultRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetDryRunLifecyclePolicyResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetDryRunLifecyclePolicyResultRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_GetLifecyclePolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.GetLifecyclePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_GetLifecyclePolicyRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_LifecyclePolicy(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.LifecyclePolicy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_LifecyclePolicy(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultAffectedImagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListDryRunLifecyclePolicyResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListLifecyclePoliciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesResponse(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.ListLifecyclePoliciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesResponse(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_yandex_cloud_containerregistry_v1_UpdateLifecyclePolicyRequest(arg) {
  if (!(arg instanceof yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest)) {
    throw new Error('Expected argument of type yandex.cloud.containerregistry.v1.UpdateLifecyclePolicyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_yandex_cloud_containerregistry_v1_UpdateLifecyclePolicyRequest(buffer_arg) {
  return yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// A set of methods for managing Lifecycle policy resources.
var LifecyclePolicyServiceService = exports.LifecyclePolicyServiceService = {
  // Returns the specified lifecycle policy.
//
// To get the list of all available lifecycle policies, make a [List] request.
get: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Get',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetLifecyclePolicyRequest,
    responseType: yandex_cloud_containerregistry_v1_lifecycle_policy_pb.LifecyclePolicy,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetLifecyclePolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetLifecyclePolicyRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_LifecyclePolicy,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_LifecyclePolicy,
  },
  // Retrieves the list of lifecycle policies in the specified repository.
list: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/List',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesRequest,
    responseType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListLifecyclePoliciesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListLifecyclePoliciesResponse,
  },
  // Creates a lifecycle policy in the specified repository.
create: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Create',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.CreateLifecyclePolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_CreateLifecyclePolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_CreateLifecyclePolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Updates the specified lifecycle policy.
update: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Update',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.UpdateLifecyclePolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_UpdateLifecyclePolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_UpdateLifecyclePolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Deletes the specified lifecycle policy.
delete: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DeleteLifecyclePolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_DeleteLifecyclePolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_DeleteLifecyclePolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Creates a request of a dry run of the lifecycle policy.
dryRun: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/DryRun',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyRequest,
    responseType: yandex_cloud_operation_operation_pb.Operation,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyRequest,
    responseSerialize: serialize_yandex_cloud_operation_Operation,
    responseDeserialize: deserialize_yandex_cloud_operation_Operation,
  },
  // Returns the dry run result of the specified lifecycle policy.
getDryRunResult: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/GetDryRunResult',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.GetDryRunLifecyclePolicyResultRequest,
    responseType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.DryRunLifecyclePolicyResult,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_GetDryRunLifecyclePolicyResultRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_GetDryRunLifecyclePolicyResultRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyResult,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_DryRunLifecyclePolicyResult,
  },
  // Retrieves the list of the dry run results.
listDryRunResults: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResults',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsRequest,
    responseType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultsResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultsResponse,
  },
  // Retrieves the list of the affected images.
listDryRunResultAffectedImages: {
    path: '/yandex.cloud.containerregistry.v1.LifecyclePolicyService/ListDryRunResultAffectedImages',
    requestStream: false,
    responseStream: false,
    requestType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    responseType: yandex_cloud_containerregistry_v1_lifecycle_policy_service_pb.ListDryRunLifecyclePolicyResultAffectedImagesResponse,
    requestSerialize: serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    requestDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesRequest,
    responseSerialize: serialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesResponse,
    responseDeserialize: deserialize_yandex_cloud_containerregistry_v1_ListDryRunLifecyclePolicyResultAffectedImagesResponse,
  },
};

exports.LifecyclePolicyServiceClient = grpc.makeGenericClientConstructor(LifecyclePolicyServiceService);
