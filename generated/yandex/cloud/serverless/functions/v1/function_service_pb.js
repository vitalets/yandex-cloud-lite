// source: yandex/cloud/serverless/functions/v1/function_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var yandex_cloud_api_operation_pb = require('../../../../../yandex/cloud/api/operation_pb.js');
goog.object.extend(proto, yandex_cloud_api_operation_pb);
var yandex_cloud_access_access_pb = require('../../../../../yandex/cloud/access/access_pb.js');
goog.object.extend(proto, yandex_cloud_access_access_pb);
var yandex_cloud_serverless_functions_v1_function_pb = require('../../../../../yandex/cloud/serverless/functions/v1/function_pb.js');
goog.object.extend(proto, yandex_cloud_serverless_functions_v1_function_pb);
var yandex_cloud_operation_operation_pb = require('../../../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.PackageSourceCase', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.IdCase', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.repeatedFields_, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.displayName = 'proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.displayName = 'proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.displayName = 'proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest;
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest;
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionRequest.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest;
  return proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.GetFunctionVersionByTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionsList: jspb.Message.toObjectList(msg.getFunctionsList(),
    yandex_cloud_serverless_functions_v1_function_pb.Function.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Function;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Function.deserializeBinaryFromReader);
      msg.addFunctions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Function.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Function functions = 1;
 * @return {!Array<!proto.yandex.cloud.serverless.functions.v1.Function>}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.getFunctionsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.serverless.functions.v1.Function>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Function, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.serverless.functions.v1.Function>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.setFunctionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.serverless.functions.v1.Function=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.Function}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.addFunctions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.serverless.functions.v1.Function, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.clearFunctionsList = function() {
  return this.setFunctionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest;
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata;
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionMetadata.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest;
  return proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata;
  return proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.UpdateFunctionMetadata.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest;
  return proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata;
  return proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.DeleteFunctionMetadata.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtimesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRuntimes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntimesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string runtimes = 1;
 * @return {!Array<string>}
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.getRuntimesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.setRuntimesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.addRuntimes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListRuntimesResponse.prototype.clearRuntimesList = function() {
  return this.setRuntimesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.IdCase = {
  ID_NOT_SET: 0,
  FOLDER_ID: 1,
  FUNCTION_ID: 2
};

/**
 * @return {proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.IdCase}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getIdCase = function() {
  return /** @type {proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.IdCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    functionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.clearFolderId = function() {
  return jspb.Message.setOneofField(this, 1, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.hasFolderId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string function_id = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.clearFunctionId = function() {
  return jspb.Message.setOneofField(this, 2, proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.hasFunctionId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 page_size = 3;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string filter = 5;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    yandex_cloud_serverless_functions_v1_function_pb.Version.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Version;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Version.deserializeBinaryFromReader);
      msg.addVersions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Version.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Version versions = 1;
 * @return {!Array<!proto.yandex.cloud.serverless.functions.v1.Version>}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.serverless.functions.v1.Version>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Version, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.serverless.functions.v1.Version>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.setVersionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.serverless.functions.v1.Version=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.Version}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.serverless.functions.v1.Version, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionsVersionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    yandex_cloud_operation_operation_pb.Operation.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_operation_operation_pb.Operation;
      reader.readMessage(value,yandex_cloud_operation_operation_pb.Operation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_operation_operation_pb.Operation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated yandex.cloud.operation.Operation operations = 1;
 * @return {!Array<!proto.yandex.cloud.operation.Operation>}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionOperationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.repeatedFields_ = [13,18];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_ = [[9,10,11]];

/**
 * @enum {number}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.PackageSourceCase = {
  PACKAGE_SOURCE_NOT_SET: 0,
  PACKAGE: 9,
  CONTENT: 10,
  VERSION_ID: 11
};

/**
 * @return {proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.PackageSourceCase}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getPackageSourceCase = function() {
  return /** @type {proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.PackageSourceCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runtime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resources: (f = msg.getResources()) && yandex_cloud_serverless_functions_v1_function_pb.Resources.toObject(includeInstance, f),
    executionTimeout: (f = msg.getExecutionTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pb_package: (f = msg.getPackage()) && yandex_cloud_serverless_functions_v1_function_pb.Package.toObject(includeInstance, f),
    content: msg.getContent_asB64(),
    versionId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    environmentMap: (f = msg.getEnvironmentMap()) ? f.toObject(includeInstance, undefined) : [],
    tagList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    connectivity: (f = msg.getConnectivity()) && yandex_cloud_serverless_functions_v1_function_pb.Connectivity.toObject(includeInstance, f),
    namedServiceAccountsMap: (f = msg.getNamedServiceAccountsMap()) ? f.toObject(includeInstance, undefined) : [],
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    yandex_cloud_serverless_functions_v1_function_pb.Secret.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest;
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    case 5:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Resources;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Resources.deserializeBinaryFromReader);
      msg.setResources(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExecutionTimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 9:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Package;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Package.deserializeBinaryFromReader);
      msg.setPackage(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionId(value);
      break;
    case 12:
      var value = msg.getEnvironmentMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addTag(value);
      break;
    case 17:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Connectivity;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Connectivity.deserializeBinaryFromReader);
      msg.setConnectivity(value);
      break;
    case 15:
      var value = msg.getNamedServiceAccountsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 18:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.Secret;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.Secret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResources();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Resources.serializeBinaryToWriter
    );
  }
  f = message.getExecutionTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPackage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Package.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBytes(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEnvironmentMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTagList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getConnectivity();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Connectivity.serializeBinaryToWriter
    );
  }
  f = message.getNamedServiceAccountsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string runtime = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string entrypoint = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Resources resources = 5;
 * @return {?proto.yandex.cloud.serverless.functions.v1.Resources}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getResources = function() {
  return /** @type{?proto.yandex.cloud.serverless.functions.v1.Resources} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Resources, 5));
};


/**
 * @param {?proto.yandex.cloud.serverless.functions.v1.Resources|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setResources = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearResources = function() {
  return this.setResources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasResources = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration execution_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getExecutionTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setExecutionTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearExecutionTimeout = function() {
  return this.setExecutionTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasExecutionTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string service_account_id = 7;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Package package = 9;
 * @return {?proto.yandex.cloud.serverless.functions.v1.Package}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getPackage = function() {
  return /** @type{?proto.yandex.cloud.serverless.functions.v1.Package} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Package, 9));
};


/**
 * @param {?proto.yandex.cloud.serverless.functions.v1.Package|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setPackage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearPackage = function() {
  return this.setPackage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasPackage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bytes content = 10;
 * @return {!(string|Uint8Array)}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * optional bytes content = 10;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setContent = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearContent = function() {
  return jspb.Message.setOneofField(this, 10, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string version_id = 11;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setVersionId = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearVersionId = function() {
  return jspb.Message.setOneofField(this, 11, proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasVersionId = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, string> environment = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getEnvironmentMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearEnvironmentMap = function() {
  this.getEnvironmentMap().clear();
  return this;};


/**
 * repeated string tag = 13;
 * @return {!Array<string>}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getTagList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setTagList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.addTag = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearTagList = function() {
  return this.setTagList([]);
};


/**
 * optional Connectivity connectivity = 17;
 * @return {?proto.yandex.cloud.serverless.functions.v1.Connectivity}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getConnectivity = function() {
  return /** @type{?proto.yandex.cloud.serverless.functions.v1.Connectivity} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Connectivity, 17));
};


/**
 * @param {?proto.yandex.cloud.serverless.functions.v1.Connectivity|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setConnectivity = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearConnectivity = function() {
  return this.setConnectivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.hasConnectivity = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * map<string, string> named_service_accounts = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getNamedServiceAccountsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearNamedServiceAccountsMap = function() {
  this.getNamedServiceAccountsMap().clear();
  return this;};


/**
 * repeated Secret secrets = 18;
 * @return {!Array<!proto.yandex.cloud.serverless.functions.v1.Secret>}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.serverless.functions.v1.Secret>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.Secret, 18));
};


/**
 * @param {!Array<!proto.yandex.cloud.serverless.functions.v1.Secret>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
*/
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.yandex.cloud.serverless.functions.v1.Secret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.Secret}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.yandex.cloud.serverless.functions.v1.Secret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionRequest.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata;
  return proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.CreateFunctionVersionMetadata.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest;
  return proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest;
  return proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata;
  return proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetFunctionTagMetadata.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata;
  return proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_version_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveFunctionTagMetadata.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    filter: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 page_size = 3;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string filter = 5;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionTagHistoryRecordList: jspb.Message.toObjectList(msg.getFunctionTagHistoryRecordList(),
    proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord;
      reader.readMessage(value,proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.deserializeBinaryFromReader);
      msg.addFunctionTagHistoryRecord(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionTagHistoryRecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    functionVersionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    effectiveFrom: (f = msg.getEffectiveFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    effectiveTo: (f = msg.getEffectiveTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord;
  return proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionVersionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectiveFrom(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEffectiveTo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFunctionVersionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEffectiveFrom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEffectiveTo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string function_version_id = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.getFunctionVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.setFunctionVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp effective_from = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.getEffectiveFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.setEffectiveFrom = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.clearEffectiveFrom = function() {
  return this.setEffectiveFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.hasEffectiveFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp effective_to = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.getEffectiveTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.setEffectiveTo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.clearEffectiveTo = function() {
  return this.setEffectiveTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord.prototype.hasEffectiveTo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated FunctionTagHistoryRecord function_tag_history_record = 1;
 * @return {!Array<!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord>}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.getFunctionTagHistoryRecordList = function() {
  return /** @type{!Array<!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.setFunctionTagHistoryRecordList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.addFunctionTagHistoryRecord = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.FunctionTagHistoryRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.clearFunctionTagHistoryRecordList = function() {
  return this.setFunctionTagHistoryRecordList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListFunctionTagHistoryResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest;
  return proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scalingPoliciesList: jspb.Message.toObjectList(msg.getScalingPoliciesList(),
    yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse;
  return proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy;
      reader.readMessage(value,yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy.deserializeBinaryFromReader);
      msg.addScalingPolicies(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScalingPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ScalingPolicy scaling_policies = 1;
 * @return {!Array<!proto.yandex.cloud.serverless.functions.v1.ScalingPolicy>}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.getScalingPoliciesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.serverless.functions.v1.ScalingPolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_serverless_functions_v1_function_pb.ScalingPolicy, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.serverless.functions.v1.ScalingPolicy>} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} returns this
*/
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.setScalingPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.serverless.functions.v1.ScalingPolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.serverless.functions.v1.ScalingPolicy}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.addScalingPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.serverless.functions.v1.ScalingPolicy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.clearScalingPoliciesList = function() {
  return this.setScalingPoliciesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse} returns this
 */
proto.yandex.cloud.serverless.functions.v1.ListScalingPoliciesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    provisionedInstancesCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    zoneInstancesLimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    zoneRequestsLimit: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest;
  return proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProvisionedInstancesCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setZoneInstancesLimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setZoneRequestsLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProvisionedInstancesCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getZoneInstancesLimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getZoneRequestsLimit();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 provisioned_instances_count = 4;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.getProvisionedInstancesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.setProvisionedInstancesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 zone_instances_limit = 5;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.getZoneInstancesLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.setZoneInstancesLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 zone_requests_limit = 6;
 * @return {number}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.getZoneRequestsLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyRequest.prototype.setZoneRequestsLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata;
  return proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.SetScalingPolicyMetadata.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest;
  return proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyRequest.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    functionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata;
  return proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunctionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFunctionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string function_id = 1;
 * @return {string}
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.prototype.getFunctionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata} returns this
 */
proto.yandex.cloud.serverless.functions.v1.RemoveScalingPolicyMetadata.prototype.setFunctionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.yandex.cloud.serverless.functions.v1);
