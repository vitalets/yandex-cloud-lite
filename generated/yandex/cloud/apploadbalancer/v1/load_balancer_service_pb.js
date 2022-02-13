// source: yandex/cloud/apploadbalancer/v1/load_balancer_service.proto
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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var yandex_cloud_api_operation_pb = require('../../../../yandex/cloud/api/operation_pb.js');
goog.object.extend(proto, yandex_cloud_api_operation_pb);
var yandex_cloud_operation_operation_pb = require('../../../../yandex/cloud/operation/operation_pb.js');
goog.object.extend(proto, yandex_cloud_operation_operation_pb);
var yandex_cloud_apploadbalancer_v1_load_balancer_pb = require('../../../../yandex/cloud/apploadbalancer/v1/load_balancer_pb.js');
goog.object.extend(proto, yandex_cloud_apploadbalancer_v1_load_balancer_pb);
var yandex_cloud_validation_pb = require('../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.AddressSpec.AddressSpecCase', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.EndpointSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListenerSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.ListenerCase', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata', null, global);
goog.exportSymbol('proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest', null, global);
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
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest';
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse';
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.AddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.AddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.AddressSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.AddressSpec';
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec';
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
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec';
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec';
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
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.EndpointSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.EndpointSpec';
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
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.repeatedFields_, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ListenerSpec';
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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest';
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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.displayName = 'proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse';
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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest';
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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest';
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest';
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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.displayName = 'proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata';
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest';
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.displayName = 'proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse';
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
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.GetLoadBalancerRequest.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest;
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string filter = 4;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersRequest.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancersList: jspb.Message.toObjectList(msg.getLoadBalancersList(),
    yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer.toObject, includeInstance),
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse;
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer.deserializeBinaryFromReader);
      msg.addLoadBalancers(value);
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer.serializeBinaryToWriter
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
 * repeated LoadBalancer load_balancers = 1;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.LoadBalancer>}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.getLoadBalancersList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.LoadBalancer>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.LoadBalancer, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.LoadBalancer>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.setLoadBalancersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.LoadBalancer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.LoadBalancer}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.addLoadBalancers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.apploadbalancer.v1.LoadBalancer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.clearLoadBalancersList = function() {
  return this.setLoadBalancersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancersResponse.prototype.setNextPageToken = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerRequest.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.DeleteLoadBalancerMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.repeatedFields_ = [6,8];



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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    listenerSpecsList: jspb.Message.toObjectList(msg.getListenerSpecsList(),
    proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject, includeInstance),
    allocationPolicy: (f = msg.getAllocationPolicy()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
    case 6:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ListenerSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader);
      msg.addListenerSpecs(value);
      break;
    case 7:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.deserializeBinaryFromReader);
      msg.setAllocationPolicy(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
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
  f = message.getListenerSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter
    );
  }
  f = message.getAllocationPolicy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated ListenerSpec listener_specs = 6;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getListenerSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, 6));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setListenerSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.addListenerSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.clearListenerSpecsList = function() {
  return this.setListenerSpecsList([]);
};


/**
 * optional AllocationPolicy allocation_policy = 7;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getAllocationPolicy = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy, 7));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setAllocationPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.clearAllocationPolicy = function() {
  return this.setAllocationPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.hasAllocationPolicy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string security_group_ids = 8;
 * @return {!Array<string>}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateLoadBalancerMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.repeatedFields_ = [7,9];



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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    folderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    regionId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    networkId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    listenerSpecsList: jspb.Message.toObjectList(msg.getListenerSpecsList(),
    proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject, includeInstance),
    allocationPolicy: (f = msg.getAllocationPolicy()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ListenerSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader);
      msg.addListenerSpecs(value);
      break;
    case 8:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.deserializeBinaryFromReader);
      msg.setAllocationPolicy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addSecurityGroupIds(value);
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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRegionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getListenerSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter
    );
  }
  f = message.getAllocationPolicy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string folder_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string region_id = 5;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getRegionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setRegionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string network_id = 6;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated ListenerSpec listener_specs = 7;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getListenerSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setListenerSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.addListenerSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.clearListenerSpecsList = function() {
  return this.setListenerSpecsList([]);
};


/**
 * optional AllocationPolicy allocation_policy = 8;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getAllocationPolicy = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.AllocationPolicy, 8));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.AllocationPolicy|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setAllocationPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.clearAllocationPolicy = function() {
  return this.setAllocationPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.hasAllocationPolicy = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string security_group_ids = 9;
 * @return {!Array<string>}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerRequest.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.CreateLoadBalancerMetadata.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerRequest.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.StartLoadBalancerMetadata.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerRequest.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.StopLoadBalancerMetadata.prototype.setLoadBalancerId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerSpec: (f = msg.getListenerSpec()) && proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ListenerSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader);
      msg.setListenerSpec(value);
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ListenerSpec listener_spec = 2;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.getListenerSpec = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.setListenerSpec = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.clearListenerSpec = function() {
  return this.setListenerSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerRequest.prototype.hasListenerSpec = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
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
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddListenerMetadata.prototype.setListenerName = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
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
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerRequest.prototype.setName = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveListenerMetadata.prototype.setListenerName = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    listenerSpec: (f = msg.getListenerSpec()) && proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ListenerSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader);
      msg.setListenerSpec(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
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
  f = message.getListenerSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ListenerSpec listener_spec = 3;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.getListenerSpec = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec, 3));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.ListenerSpec|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.setListenerSpec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.clearListenerSpec = function() {
  return this.setListenerSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerRequest.prototype.hasListenerSpec = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateListenerMetadata.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.AddressSpecCase = {
  ADDRESS_SPEC_NOT_SET: 0,
  EXTERNAL_IPV4_ADDRESS_SPEC: 1,
  INTERNAL_IPV4_ADDRESS_SPEC: 2,
  EXTERNAL_IPV6_ADDRESS_SPEC: 3
};

/**
 * @return {proto.yandex.cloud.apploadbalancer.v1.AddressSpec.AddressSpecCase}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.getAddressSpecCase = function() {
  return /** @type {proto.yandex.cloud.apploadbalancer.v1.AddressSpec.AddressSpecCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_[0]));
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
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.AddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    externalIpv4AddressSpec: (f = msg.getExternalIpv4AddressSpec()) && proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.toObject(includeInstance, f),
    internalIpv4AddressSpec: (f = msg.getInternalIpv4AddressSpec()) && proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.toObject(includeInstance, f),
    externalIpv6AddressSpec: (f = msg.getExternalIpv6AddressSpec()) && proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.AddressSpec;
  return proto.yandex.cloud.apploadbalancer.v1.AddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.deserializeBinaryFromReader);
      msg.setExternalIpv4AddressSpec(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.deserializeBinaryFromReader);
      msg.setInternalIpv4AddressSpec(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.deserializeBinaryFromReader);
      msg.setExternalIpv6AddressSpec(value);
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
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.AddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExternalIpv4AddressSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getInternalIpv4AddressSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getExternalIpv6AddressSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExternalIpv4AddressSpec external_ipv4_address_spec = 1;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.getExternalIpv4AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec, 1));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.setExternalIpv4AddressSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.clearExternalIpv4AddressSpec = function() {
  return this.setExternalIpv4AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.hasExternalIpv4AddressSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional InternalIpv4AddressSpec internal_ipv4_address_spec = 2;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.getInternalIpv4AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec, 2));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.setInternalIpv4AddressSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.clearInternalIpv4AddressSpec = function() {
  return this.setInternalIpv4AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.hasInternalIpv4AddressSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ExternalIpv6AddressSpec external_ipv6_address_spec = 3;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.getExternalIpv6AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec, 3));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.setExternalIpv6AddressSpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.apploadbalancer.v1.AddressSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.clearExternalIpv6AddressSpec = function() {
  return this.setExternalIpv6AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.AddressSpec.prototype.hasExternalIpv6AddressSpec = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec;
  return proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv4AddressSpec.prototype.setAddress = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subnetId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec;
  return proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
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
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subnet_id = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.InternalIpv4AddressSpec.prototype.setSubnetId = function(value) {
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec;
  return proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ExternalIpv6AddressSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.repeatedFields_ = [1,2];



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
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressSpecsList: jspb.Message.toObjectList(msg.getAddressSpecsList(),
    proto.yandex.cloud.apploadbalancer.v1.AddressSpec.toObject, includeInstance),
    portsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.EndpointSpec;
  return proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.apploadbalancer.v1.AddressSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.AddressSpec.deserializeBinaryFromReader);
      msg.addAddressSpecs(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPorts(values[i]);
      }
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
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.apploadbalancer.v1.AddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated AddressSpec address_specs = 1;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.AddressSpec>}
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.getAddressSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.AddressSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.AddressSpec, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.AddressSpec>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.setAddressSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddressSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.addAddressSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.apploadbalancer.v1.AddressSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.clearAddressSpecsList = function() {
  return this.setAddressSpecsList([]);
};


/**
 * repeated int64 ports = 2;
 * @return {!Array<number>}
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.getPortsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.setPortsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.addPorts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.ListenerCase = {
  LISTENER_NOT_SET: 0,
  HTTP: 3,
  TLS: 4,
  STREAM: 5
};

/**
 * @return {proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.ListenerCase}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getListenerCase = function() {
  return /** @type {proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.ListenerCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_[0]));
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
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endpointSpecsList: jspb.Message.toObjectList(msg.getEndpointSpecsList(),
    proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.toObject, includeInstance),
    http: (f = msg.getHttp()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener.toObject(includeInstance, f),
    tls: (f = msg.getTls()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener.toObject(includeInstance, f),
    stream: (f = msg.getStream()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.StreamListener.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ListenerSpec;
  return proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.apploadbalancer.v1.EndpointSpec;
      reader.readMessage(value,proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.deserializeBinaryFromReader);
      msg.addEndpointSpecs(value);
      break;
    case 3:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener.deserializeBinaryFromReader);
      msg.setHttp(value);
      break;
    case 4:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener.deserializeBinaryFromReader);
      msg.setTls(value);
      break;
    case 5:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.StreamListener;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.StreamListener.deserializeBinaryFromReader);
      msg.setStream(value);
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
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndpointSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.apploadbalancer.v1.EndpointSpec.serializeBinaryToWriter
    );
  }
  f = message.getHttp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener.serializeBinaryToWriter
    );
  }
  f = message.getTls();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener.serializeBinaryToWriter
    );
  }
  f = message.getStream();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.StreamListener.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EndpointSpec endpoint_specs = 2;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec>}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getEndpointSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.apploadbalancer.v1.EndpointSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.setEndpointSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.EndpointSpec}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.addEndpointSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.apploadbalancer.v1.EndpointSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.clearEndpointSpecsList = function() {
  return this.setEndpointSpecsList([]);
};


/**
 * optional HttpListener http = 3;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.HttpListener}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getHttp = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.HttpListener} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.HttpListener, 3));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.HttpListener|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.setHttp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.clearHttp = function() {
  return this.setHttp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TlsListener tls = 4;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.TlsListener}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getTls = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.TlsListener} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsListener, 4));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.TlsListener|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.setTls = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.clearTls = function() {
  return this.setTls(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.hasTls = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StreamListener stream = 5;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.StreamListener}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.getStream = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.StreamListener} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.StreamListener, 5));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.StreamListener|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.setStream = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListenerSpec} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.clearStream = function() {
  return this.setStream(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.ListenerSpec.prototype.hasStream = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    backendGroupId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetGroupId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest;
  return proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackendGroupId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetGroupId(value);
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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBackendGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetGroupId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string backend_group_id = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.getBackendGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.setBackendGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string target_group_id = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.getTargetGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesRequest.prototype.setTargetGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetStatesList: jspb.Message.toObjectList(msg.getTargetStatesList(),
    yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse;
  return proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState.deserializeBinaryFromReader);
      msg.addTargetStates(value);
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
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TargetState target_states = 1;
 * @return {!Array<!proto.yandex.cloud.apploadbalancer.v1.TargetState>}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.getTargetStatesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.apploadbalancer.v1.TargetState>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.TargetState, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.apploadbalancer.v1.TargetState>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.setTargetStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.apploadbalancer.v1.TargetState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.TargetState}
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.addTargetStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.apploadbalancer.v1.TargetState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.GetTargetStatesResponse.prototype.clearTargetStatesList = function() {
  return this.setTargetStatesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.repeatedFields_ = [4];



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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    serverNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    handler: (f = msg.getHandler()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest;
  return proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addServerNames(value);
      break;
    case 5:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.deserializeBinaryFromReader);
      msg.setHandler(value);
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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getServerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getHandler();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.serializeBinaryToWriter
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string server_names = 4;
 * @return {!Array<string>}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.getServerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.setServerNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.addServerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.clearServerNamesList = function() {
  return this.setServerNamesList([]);
};


/**
 * optional TlsHandler handler = 5;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.TlsHandler}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.getHandler = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.TlsHandler} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler, 5));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.TlsHandler|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.setHandler = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.clearHandler = function() {
  return this.setHandler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchRequest.prototype.hasHandler = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sniMatchName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSniMatchName(value);
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
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSniMatchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sni_match_name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.getSniMatchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.AddSniMatchMetadata.prototype.setSniMatchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sniMatchName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest;
  return proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSniMatchName(value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSniMatchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sni_match_name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.getSniMatchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchRequest.prototype.setSniMatchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sniMatchName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSniMatchName(value);
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
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSniMatchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sni_match_name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.getSniMatchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.RemoveSniMatchMetadata.prototype.setSniMatchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.repeatedFields_ = [5];



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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    serverNamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    handler: (f = msg.getHandler()) && yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addServerNames(value);
      break;
    case 6:
      var value = new yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler;
      reader.readMessage(value,yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.deserializeBinaryFromReader);
      msg.setHandler(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getServerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getHandler();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler.serializeBinaryToWriter
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string server_names = 5;
 * @return {!Array<string>}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getServerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setServerNamesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.addServerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.clearServerNamesList = function() {
  return this.setServerNamesList([]);
};


/**
 * optional TlsHandler handler = 6;
 * @return {?proto.yandex.cloud.apploadbalancer.v1.TlsHandler}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.getHandler = function() {
  return /** @type{?proto.yandex.cloud.apploadbalancer.v1.TlsHandler} */ (
    jspb.Message.getWrapperField(this, yandex_cloud_apploadbalancer_v1_load_balancer_pb.TlsHandler, 6));
};


/**
 * @param {?proto.yandex.cloud.apploadbalancer.v1.TlsHandler|undefined} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.setHandler = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.clearHandler = function() {
  return this.setHandler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchRequest.prototype.hasHandler = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    listenerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sniMatchName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata;
  return proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setListenerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSniMatchName(value);
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
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getListenerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSniMatchName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string listener_name = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.getListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.setListenerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sni_match_name = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.getSniMatchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.UpdateSniMatchMetadata.prototype.setSniMatchName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loadBalancerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest;
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoadBalancerId(value);
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoadBalancerId();
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
 * optional string load_balancer_id = 1;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.getLoadBalancerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.setLoadBalancerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 page_size = 2;
 * @return {number}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.repeatedFields_ = [1];



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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse;
  return proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.operation.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, yandex_cloud_operation_operation_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.operation.Operation>} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} returns this
*/
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.operation.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.operation.Operation}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.operation.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse} returns this
 */
proto.yandex.cloud.apploadbalancer.v1.ListLoadBalancerOperationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.yandex.cloud.apploadbalancer.v1);
