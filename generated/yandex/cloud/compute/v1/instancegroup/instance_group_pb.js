// source: yandex/cloud/compute/v1/instancegroup/instance_group.proto
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

var yandex_cloud_validation_pb = require('../../../../../yandex/cloud/validation_pb.js');
goog.object.extend(proto, yandex_cloud_validation_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.SourceOneofCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.DnsRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HealthCheckOptionsCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.IpVersion', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.LogRecord', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.ScaleTypeCase', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec', null, global);
goog.exportSymbol('proto.yandex.cloud.compute.v1.instancegroup.Variable', null, global);
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
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup';
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState';
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
proto.yandex.cloud.compute.v1.instancegroup.Variable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.Variable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.Variable.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.Variable';
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState';
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState';
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses';
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy';
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale';
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule';
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule';
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale';
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
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy';
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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy';
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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone';
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
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate';
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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy';
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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule';
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
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy';
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings';
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.oneofGroups_);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec';
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions';
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions';
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance';
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface';
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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress';
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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.repeatedFields_, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat';
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.DnsRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.DnsRecord';
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
proto.yandex.cloud.compute.v1.instancegroup.LogRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.yandex.cloud.compute.v1.instancegroup.LogRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.yandex.cloud.compute.v1.instancegroup.LogRecord.displayName = 'proto.yandex.cloud.compute.v1.instancegroup.LogRecord';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.repeatedFields_ = [18];



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
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    folderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    instanceTemplate: (f = msg.getInstanceTemplate()) && proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.toObject(includeInstance, f),
    scalePolicy: (f = msg.getScalePolicy()) && proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.toObject(includeInstance, f),
    deployPolicy: (f = msg.getDeployPolicy()) && proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.toObject(includeInstance, f),
    allocationPolicy: (f = msg.getAllocationPolicy()) && proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.toObject(includeInstance, f),
    loadBalancerState: (f = msg.getLoadBalancerState()) && proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.toObject(includeInstance, f),
    managedInstancesState: (f = msg.getManagedInstancesState()) && proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.toObject(includeInstance, f),
    loadBalancerSpec: (f = msg.getLoadBalancerSpec()) && proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.toObject(includeInstance, f),
    healthChecksSpec: (f = msg.getHealthChecksSpec()) && proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.toObject(includeInstance, f),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    status: jspb.Message.getFieldWithDefault(msg, 17, 0),
    variablesList: jspb.Message.toObjectList(msg.getVariablesList(),
    proto.yandex.cloud.compute.v1.instancegroup.Variable.toObject, includeInstance),
    deletionProtection: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    applicationLoadBalancerSpec: (f = msg.getApplicationLoadBalancerSpec()) && proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.toObject(includeInstance, f),
    applicationLoadBalancerState: (f = msg.getApplicationLoadBalancerState()) && proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup;
  return proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 7:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.deserializeBinaryFromReader);
      msg.setInstanceTemplate(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.deserializeBinaryFromReader);
      msg.setScalePolicy(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.deserializeBinaryFromReader);
      msg.setDeployPolicy(value);
      break;
    case 10:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.deserializeBinaryFromReader);
      msg.setAllocationPolicy(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.deserializeBinaryFromReader);
      msg.setLoadBalancerState(value);
      break;
    case 12:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.deserializeBinaryFromReader);
      msg.setManagedInstancesState(value);
      break;
    case 14:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.deserializeBinaryFromReader);
      msg.setLoadBalancerSpec(value);
      break;
    case 15:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.deserializeBinaryFromReader);
      msg.setHealthChecksSpec(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 17:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 18:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.Variable;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.Variable.deserializeBinaryFromReader);
      msg.addVariables(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeletionProtection(value);
      break;
    case 20:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.deserializeBinaryFromReader);
      msg.setApplicationLoadBalancerSpec(value);
      break;
    case 21:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.deserializeBinaryFromReader);
      msg.setApplicationLoadBalancerState(value);
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
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getInstanceTemplate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.serializeBinaryToWriter
    );
  }
  f = message.getScalePolicy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.serializeBinaryToWriter
    );
  }
  f = message.getDeployPolicy();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.serializeBinaryToWriter
    );
  }
  f = message.getAllocationPolicy();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.serializeBinaryToWriter
    );
  }
  f = message.getLoadBalancerState();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.serializeBinaryToWriter
    );
  }
  f = message.getManagedInstancesState();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.serializeBinaryToWriter
    );
  }
  f = message.getLoadBalancerSpec();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.serializeBinaryToWriter
    );
  }
  f = message.getHealthChecksSpec();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.serializeBinaryToWriter
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.Variable.serializeBinaryToWriter
    );
  }
  f = message.getDeletionProtection();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getApplicationLoadBalancerSpec();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.serializeBinaryToWriter
    );
  }
  f = message.getApplicationLoadBalancerState();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status = {
  STATUS_UNSPECIFIED: 0,
  STARTING: 1,
  ACTIVE: 2,
  STOPPING: 3,
  STOPPED: 4,
  DELETING: 5,
  PAUSED: 6
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string folder_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional InstanceTemplate instance_template = 7;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getInstanceTemplate = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate, 7));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setInstanceTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearInstanceTemplate = function() {
  return this.setInstanceTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasInstanceTemplate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ScalePolicy scale_policy = 8;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getScalePolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy, 8));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setScalePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearScalePolicy = function() {
  return this.setScalePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasScalePolicy = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DeployPolicy deploy_policy = 9;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getDeployPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy, 9));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setDeployPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearDeployPolicy = function() {
  return this.setDeployPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasDeployPolicy = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AllocationPolicy allocation_policy = 10;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getAllocationPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy, 10));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setAllocationPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearAllocationPolicy = function() {
  return this.setAllocationPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasAllocationPolicy = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional LoadBalancerState load_balancer_state = 11;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getLoadBalancerState = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState, 11));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setLoadBalancerState = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearLoadBalancerState = function() {
  return this.setLoadBalancerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasLoadBalancerState = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ManagedInstancesState managed_instances_state = 12;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getManagedInstancesState = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState, 12));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setManagedInstancesState = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearManagedInstancesState = function() {
  return this.setManagedInstancesState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasManagedInstancesState = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional LoadBalancerSpec load_balancer_spec = 14;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getLoadBalancerSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec, 14));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setLoadBalancerSpec = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearLoadBalancerSpec = function() {
  return this.setLoadBalancerSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasLoadBalancerSpec = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional HealthChecksSpec health_checks_spec = 15;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getHealthChecksSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec, 15));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setHealthChecksSpec = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearHealthChecksSpec = function() {
  return this.setHealthChecksSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasHealthChecksSpec = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string service_account_id = 16;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional Status status = 17;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.Status} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * repeated Variable variables = 18;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.Variable>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getVariablesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.Variable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.Variable, 18));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.Variable>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.Variable=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.Variable}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.addVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.yandex.cloud.compute.v1.instancegroup.Variable, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearVariablesList = function() {
  return this.setVariablesList([]);
};


/**
 * optional bool deletion_protection = 19;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getDeletionProtection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setDeletionProtection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional ApplicationLoadBalancerSpec application_load_balancer_spec = 20;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getApplicationLoadBalancerSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec, 20));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setApplicationLoadBalancerSpec = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearApplicationLoadBalancerSpec = function() {
  return this.setApplicationLoadBalancerSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasApplicationLoadBalancerSpec = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ApplicationLoadBalancerState application_load_balancer_state = 21;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.getApplicationLoadBalancerState = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState, 21));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.setApplicationLoadBalancerState = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.clearApplicationLoadBalancerState = function() {
  return this.setApplicationLoadBalancerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceGroup.prototype.hasApplicationLoadBalancerState = function() {
  return jspb.Message.getField(this, 21) != null;
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState;
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target_group_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.getTargetGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.setTargetGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status_message = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerState.prototype.setStatusMessage = function(value) {
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
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.Variable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.Variable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.Variable}
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.Variable;
  return proto.yandex.cloud.compute.v1.instancegroup.Variable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.Variable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.Variable}
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.Variable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.Variable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.Variable} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.Variable} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.Variable.prototype.setValue = function(value) {
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState;
  return proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetGroupId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string target_group_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.getTargetGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.setTargetGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status_message = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerState.prototype.setStatusMessage = function(value) {
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    runningActualCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    runningOutdatedCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    processingCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState;
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRunningActualCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRunningOutdatedCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProcessingCount(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRunningActualCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRunningOutdatedCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getProcessingCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.toObject = function(includeInstance, msg) {
  var f, obj = {
    creating: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starting: jspb.Message.getFieldWithDefault(msg, 2, 0),
    opening: jspb.Message.getFieldWithDefault(msg, 3, 0),
    warming: jspb.Message.getFieldWithDefault(msg, 4, 0),
    running: jspb.Message.getFieldWithDefault(msg, 5, 0),
    closing: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stopping: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updating: jspb.Message.getFieldWithDefault(msg, 8, 0),
    deleting: jspb.Message.getFieldWithDefault(msg, 9, 0),
    failed: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses;
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreating(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarting(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpening(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWarming(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRunning(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClosing(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStopping(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdating(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeleting(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFailed(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreating();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStarting();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getOpening();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getWarming();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRunning();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getClosing();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getStopping();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUpdating();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getDeleting();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFailed();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional int64 creating = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getCreating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setCreating = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 starting = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getStarting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setStarting = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 opening = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getOpening = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setOpening = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 warming = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getWarming = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setWarming = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 running = 5;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getRunning = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setRunning = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 closing = 6;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getClosing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setClosing = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 stopping = 7;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getStopping = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setStopping = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 updating = 8;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getUpdating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setUpdating = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 deleting = 9;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getDeleting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setDeleting = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 failed = 10;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.getFailed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.Statuses.prototype.setFailed = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 target_size = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.getTargetSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.setTargetSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 running_actual_count = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.getRunningActualCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.setRunningActualCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 running_outdated_count = 5;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.getRunningOutdatedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.setRunningOutdatedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 processing_count = 6;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.getProcessingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstancesState.prototype.setProcessingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.ScaleTypeCase = {
  SCALE_TYPE_NOT_SET: 0,
  FIXED_SCALE: 1,
  AUTO_SCALE: 2
};

/**
 * @return {proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.ScaleTypeCase}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.getScaleTypeCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.ScaleTypeCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    fixedScale: (f = msg.getFixedScale()) && proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.toObject(includeInstance, f),
    autoScale: (f = msg.getAutoScale()) && proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.toObject(includeInstance, f),
    testAutoScale: (f = msg.getTestAutoScale()) && proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy;
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.deserializeBinaryFromReader);
      msg.setFixedScale(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.deserializeBinaryFromReader);
      msg.setAutoScale(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.deserializeBinaryFromReader);
      msg.setTestAutoScale(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFixedScale();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.serializeBinaryToWriter
    );
  }
  f = message.getAutoScale();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.serializeBinaryToWriter
    );
  }
  f = message.getTestAutoScale();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.repeatedFields_ = [8];



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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.toObject = function(includeInstance, msg) {
  var f, obj = {
    minZoneSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    measurementDuration: (f = msg.getMeasurementDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    warmupDuration: (f = msg.getWarmupDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    stabilizationDuration: (f = msg.getStabilizationDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    initialSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cpuUtilizationRule: (f = msg.getCpuUtilizationRule()) && proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.toObject(includeInstance, f),
    customRulesList: jspb.Message.toObjectList(msg.getCustomRulesList(),
    proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.toObject, includeInstance),
    autoScaleType: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale;
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinZoneSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxSize(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMeasurementDuration(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWarmupDuration(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStabilizationDuration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitialSize(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.deserializeBinaryFromReader);
      msg.setCpuUtilizationRule(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.deserializeBinaryFromReader);
      msg.addCustomRules(value);
      break;
    case 9:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType} */ (reader.readEnum());
      msg.setAutoScaleType(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinZoneSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMaxSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMeasurementDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getWarmupDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStabilizationDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getInitialSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCpuUtilizationRule();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.serializeBinaryToWriter
    );
  }
  f = message.getCustomRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.serializeBinaryToWriter
    );
  }
  f = message.getAutoScaleType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType = {
  AUTO_SCALE_TYPE_UNSPECIFIED: 0,
  ZONAL: 1,
  REGIONAL: 2
};

/**
 * optional int64 min_zone_size = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getMinZoneSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setMinZoneSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 max_size = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getMaxSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setMaxSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Duration measurement_duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getMeasurementDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setMeasurementDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.clearMeasurementDuration = function() {
  return this.setMeasurementDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.hasMeasurementDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration warmup_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getWarmupDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setWarmupDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.clearWarmupDuration = function() {
  return this.setWarmupDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.hasWarmupDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration stabilization_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getStabilizationDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setStabilizationDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.clearStabilizationDuration = function() {
  return this.setStabilizationDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.hasStabilizationDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 initial_size = 6;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getInitialSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setInitialSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional CpuUtilizationRule cpu_utilization_rule = 7;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getCpuUtilizationRule = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule, 7));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setCpuUtilizationRule = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.clearCpuUtilizationRule = function() {
  return this.setCpuUtilizationRule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.hasCpuUtilizationRule = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CustomRule custom_rules = 8;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule>}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getCustomRulesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setCustomRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.addCustomRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.clearCustomRulesList = function() {
  return this.setCustomRulesList([]);
};


/**
 * optional AutoScaleType auto_scale_type = 9;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.getAutoScaleType = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.AutoScaleType} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale.prototype.setAutoScaleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    utilizationTarget: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule;
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setUtilizationTarget(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUtilizationTarget();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double utilization_target = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.prototype.getUtilizationTarget = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CpuUtilizationRule.prototype.setUtilizationTarget = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    ruleType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    metricType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    metricName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    target: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    folderId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    service: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule;
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType} */ (reader.readEnum());
      msg.setRuleType(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType} */ (reader.readEnum());
      msg.setMetricType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetricName(value);
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTarget(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolderId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuleType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMetricType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMetricName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getFolderId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType = {
  RULE_TYPE_UNSPECIFIED: 0,
  UTILIZATION: 1,
  WORKLOAD: 2
};

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType = {
  METRIC_TYPE_UNSPECIFIED: 0,
  GAUGE: 1,
  COUNTER: 2
};

/**
 * optional RuleType rule_type = 1;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getRuleType = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.RuleType} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setRuleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional MetricType metric_type = 2;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getMetricType = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.MetricType} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setMetricType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string metric_name = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getMetricName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setMetricName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional double target = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getTarget = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setTarget = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string folder_id = 6;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getFolderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setFolderId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string service = 7;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.CustomRule.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale;
  return proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 size = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional FixedScale fixed_scale = 1;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.getFixedScale = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale, 1));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.FixedScale|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.setFixedScale = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.clearFixedScale = function() {
  return this.setFixedScale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.hasFixedScale = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AutoScale auto_scale = 2;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.getAutoScale = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.setAutoScale = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.clearAutoScale = function() {
  return this.setAutoScale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.hasAutoScale = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AutoScale test_auto_scale = 3;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.getTestAutoScale = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale, 3));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.AutoScale|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.setTestAutoScale = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.clearTestAutoScale = function() {
  return this.setTestAutoScale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ScalePolicy.prototype.hasTestAutoScale = function() {
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
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxUnavailable: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxDeleting: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxCreating: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxExpansion: jspb.Message.getFieldWithDefault(msg, 6, 0),
    startupDuration: (f = msg.getStartupDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    strategy: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy;
  return proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxUnavailable(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxDeleting(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxCreating(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxExpansion(value);
      break;
    case 7:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartupDuration(value);
      break;
    case 8:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy} */ (reader.readEnum());
      msg.setStrategy(value);
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
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxUnavailable();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMaxDeleting();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMaxCreating();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMaxExpansion();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getStartupDuration();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy = {
  STRATEGY_UNSPECIFIED: 0,
  PROACTIVE: 1,
  OPPORTUNISTIC: 2
};

/**
 * optional int64 max_unavailable = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getMaxUnavailable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setMaxUnavailable = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 max_deleting = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getMaxDeleting = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setMaxDeleting = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 max_creating = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getMaxCreating = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setMaxCreating = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 max_expansion = 6;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getMaxExpansion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setMaxExpansion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Duration startup_duration = 7;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getStartupDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 7));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setStartupDuration = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.clearStartupDuration = function() {
  return this.setStartupDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.hasStartupDuration = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Strategy strategy = 8;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy}
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.getStrategy = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.Strategy} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DeployPolicy.prototype.setStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.repeatedFields_ = [1];



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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    zonesList: jspb.Message.toObjectList(msg.getZonesList(),
    proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy;
  return proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.deserializeBinaryFromReader);
      msg.addZones(value);
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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZonesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.serializeBinaryToWriter
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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone;
  return proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
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
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string zone_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Zone zones = 1;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone>}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.getZonesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.setZonesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone}
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.addZones = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.Zone, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AllocationPolicy.prototype.clearZonesList = function() {
  return this.setZonesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.repeatedFields_ = [7,8];



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
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    platformId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourcesSpec: (f = msg.getResourcesSpec()) && proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.toObject(includeInstance, f),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : [],
    bootDiskSpec: (f = msg.getBootDiskSpec()) && proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.toObject(includeInstance, f),
    secondaryDiskSpecsList: jspb.Message.toObjectList(msg.getSecondaryDiskSpecsList(),
    proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.toObject, includeInstance),
    networkInterfaceSpecsList: jspb.Message.toObjectList(msg.getNetworkInterfaceSpecsList(),
    proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.toObject, includeInstance),
    schedulingPolicy: (f = msg.getSchedulingPolicy()) && proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.toObject(includeInstance, f),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    networkSettings: (f = msg.getNetworkSettings()) && proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 12, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 13, ""),
    placementPolicy: (f = msg.getPlacementPolicy()) && proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate;
  return proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformId(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.deserializeBinaryFromReader);
      msg.setResourcesSpec(value);
      break;
    case 5:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.deserializeBinaryFromReader);
      msg.setBootDiskSpec(value);
      break;
    case 7:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.deserializeBinaryFromReader);
      msg.addSecondaryDiskSpecs(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.deserializeBinaryFromReader);
      msg.addNetworkInterfaceSpecs(value);
      break;
    case 9:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.deserializeBinaryFromReader);
      msg.setSchedulingPolicy(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 11:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.deserializeBinaryFromReader);
      msg.setNetworkSettings(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 14:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.deserializeBinaryFromReader);
      msg.setPlacementPolicy(value);
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
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPlatformId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResourcesSpec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.serializeBinaryToWriter
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getBootDiskSpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecondaryDiskSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.serializeBinaryToWriter
    );
  }
  f = message.getNetworkInterfaceSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.serializeBinaryToWriter
    );
  }
  f = message.getSchedulingPolicy();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.serializeBinaryToWriter
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getNetworkSettings();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPlacementPolicy();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional string platform_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getPlatformId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setPlatformId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ResourcesSpec resources_spec = 4;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getResourcesSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec, 4));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setResourcesSpec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearResourcesSpec = function() {
  return this.setResourcesSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.hasResourcesSpec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * map<string, string> metadata = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;};


/**
 * optional AttachedDiskSpec boot_disk_spec = 6;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getBootDiskSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec, 6));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setBootDiskSpec = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearBootDiskSpec = function() {
  return this.setBootDiskSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.hasBootDiskSpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated AttachedDiskSpec secondary_disk_specs = 7;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getSecondaryDiskSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec, 7));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setSecondaryDiskSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.addSecondaryDiskSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearSecondaryDiskSpecsList = function() {
  return this.setSecondaryDiskSpecsList([]);
};


/**
 * repeated NetworkInterfaceSpec network_interface_specs = 8;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec>}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getNetworkInterfaceSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setNetworkInterfaceSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.addNetworkInterfaceSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearNetworkInterfaceSpecsList = function() {
  return this.setNetworkInterfaceSpecsList([]);
};


/**
 * optional SchedulingPolicy scheduling_policy = 9;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getSchedulingPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy, 9));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setSchedulingPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearSchedulingPolicy = function() {
  return this.setSchedulingPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.hasSchedulingPolicy = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string service_account_id = 10;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional NetworkSettings network_settings = 11;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getNetworkSettings = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings, 11));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setNetworkSettings = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearNetworkSettings = function() {
  return this.setNetworkSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.hasNetworkSettings = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string name = 12;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string hostname = 13;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional PlacementPolicy placement_policy = 14;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.getPlacementPolicy = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy, 14));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.setPlacementPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.clearPlacementPolicy = function() {
  return this.setPlacementPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.InstanceTemplate.prototype.hasPlacementPolicy = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.repeatedFields_ = [2];



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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    placementGroupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hostAffinityRulesList: jspb.Message.toObjectList(msg.getHostAffinityRulesList(),
    proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy;
  return proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlacementGroupId(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.deserializeBinaryFromReader);
      msg.addHostAffinityRules(value);
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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlacementGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHostAffinityRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    op: jspb.Message.getFieldWithDefault(msg, 2, 0),
    valuesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule;
  return proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator} */ (reader.readEnum());
      msg.setOp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
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
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOp();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator = {
  OPERATOR_UNSPECIFIED: 0,
  IN: 1,
  NOT_IN: 2
};

/**
 * optional string key = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Operator op = 2;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.getOp = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.Operator} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.setOp = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string values = 3;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


/**
 * optional string placement_group_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.getPlacementGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.setPlacementGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HostAffinityRule host_affinity_rules = 2;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule>}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.getHostAffinityRulesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.setHostAffinityRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule}
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.addHostAffinityRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.HostAffinityRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PlacementPolicy.prototype.clearHostAffinityRulesList = function() {
  return this.setHostAffinityRulesList([]);
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
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    memory: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cores: jspb.Message.getFieldWithDefault(msg, 2, 0),
    coreFraction: jspb.Message.getFieldWithDefault(msg, 3, 0),
    gpus: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemory(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCores(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCoreFraction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGpus(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemory();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCores();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCoreFraction();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getGpus();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 memory = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.getMemory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.setMemory = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cores = 2;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.getCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.setCores = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 core_fraction = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.getCoreFraction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.setCoreFraction = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 gpus = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.getGpus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ResourcesSpec.prototype.setGpus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    diskSpec: (f = msg.getDiskSpec()) && proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.toObject(includeInstance, f),
    diskId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader);
      msg.setDiskSpec(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiskId(value);
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDiskSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter
    );
  }
  f = message.getDiskId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode = {
  MODE_UNSPECIFIED: 0,
  READ_ONLY: 1,
  READ_WRITE: 2
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.SourceOneofCase = {
  SOURCE_ONEOF_NOT_SET: 0,
  IMAGE_ID: 4,
  SNAPSHOT_ID: 5
};

/**
 * @return {proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.SourceOneofCase}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getSourceOneofCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.SourceOneofCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    typeId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0),
    imageId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    preserveAfterInstanceDelete: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreserveAfterInstanceDelete(value);
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
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTypeId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPreserveAfterInstanceDelete();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string image_id = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setImageId = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.clearImageId = function() {
  return jspb.Message.setOneofField(this, 4, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.hasImageId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string snapshot_id = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setSnapshotId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.clearSnapshotId = function() {
  return jspb.Message.setOneofField(this, 5, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.hasSnapshotId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool preserve_after_instance_delete = 6;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.getPreserveAfterInstanceDelete = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec.prototype.setPreserveAfterInstanceDelete = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Mode mode = 1;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.getMode = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.Mode} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.setDeviceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DiskSpec disk_spec = 3;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.getDiskSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec, 3));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.DiskSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.setDiskSpec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.clearDiskSpec = function() {
  return this.setDiskSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.hasDiskSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string disk_id = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.getDiskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.AttachedDiskSpec.prototype.setDiskId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.repeatedFields_ = [2,5];



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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subnetIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    primaryV4AddressSpec: (f = msg.getPrimaryV4AddressSpec()) && proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.toObject(includeInstance, f),
    primaryV6AddressSpec: (f = msg.getPrimaryV6AddressSpec()) && proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.toObject(includeInstance, f),
    securityGroupIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubnetIds(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV4AddressSpec(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.deserializeBinaryFromReader);
      msg.setPrimaryV6AddressSpec(value);
      break;
    case 5:
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubnetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPrimaryV4AddressSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryV6AddressSpec();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecurityGroupIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string network_id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.getNetworkId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string subnet_ids = 2;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.getSubnetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.setSubnetIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.addSubnetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.clearSubnetIdsList = function() {
  return this.setSubnetIdsList([]);
};


/**
 * optional PrimaryAddressSpec primary_v4_address_spec = 3;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.getPrimaryV4AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec, 3));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.setPrimaryV4AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.clearPrimaryV4AddressSpec = function() {
  return this.setPrimaryV4AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.hasPrimaryV4AddressSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PrimaryAddressSpec primary_v6_address_spec = 4;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.getPrimaryV6AddressSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec, 4));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.setPrimaryV6AddressSpec = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.clearPrimaryV6AddressSpec = function() {
  return this.setPrimaryV6AddressSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.hasPrimaryV6AddressSpec = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string security_group_ids = 5;
 * @return {!Array<string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.getSecurityGroupIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.setSecurityGroupIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.addSecurityGroupIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterfaceSpec.prototype.clearSecurityGroupIdsList = function() {
  return this.setSecurityGroupIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.repeatedFields_ = [2];



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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    oneToOneNatSpec: (f = msg.getOneToOneNatSpec()) && proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.toObject(includeInstance, f),
    dnsRecordSpecsList: jspb.Message.toObjectList(msg.getDnsRecordSpecsList(),
    proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.toObject, includeInstance),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.deserializeBinaryFromReader);
      msg.setOneToOneNatSpec(value);
      break;
    case 2:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.deserializeBinaryFromReader);
      msg.addDnsRecordSpecs(value);
      break;
    case 3:
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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOneToOneNatSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.serializeBinaryToWriter
    );
  }
  f = message.getDnsRecordSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional OneToOneNatSpec one_to_one_nat_spec = 1;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.getOneToOneNatSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec, 1));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.setOneToOneNatSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.clearOneToOneNatSpec = function() {
  return this.setOneToOneNatSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.hasOneToOneNatSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DnsRecordSpec dns_record_specs = 2;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.getDnsRecordSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec, 2));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.setDnsRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.addDnsRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.clearDnsRecordSpecsList = function() {
  return this.setDnsRecordSpecsList([]);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddressSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dnsRecordSpecsList: jspb.Message.toObjectList(msg.getDnsRecordSpecsList(),
    proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} */ (reader.readEnum());
      msg.setIpVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.deserializeBinaryFromReader);
      msg.addDnsRecordSpecs(value);
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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsRecordSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional IpVersion ip_version = 1;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.getIpVersion = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.setIpVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated DnsRecordSpec dns_record_specs = 3;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.getDnsRecordSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.setDnsRecordSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.addDnsRecordSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNatSpec.prototype.clearDnsRecordSpecsList = function() {
  return this.setDnsRecordSpecsList([]);
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    fqdn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dnsZoneId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ptr: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqdn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsZoneId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPtr(value);
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFqdn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsZoneId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPtr();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string fqdn = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.setFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_zone_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.getDnsZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.setDnsZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool ptr = 4;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.getPtr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecordSpec.prototype.setPtr = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    preemptible: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy;
  return proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy}
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreemptible(value);
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
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreemptible();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool preemptible = 1;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.prototype.getPreemptible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.SchedulingPolicy.prototype.setPreemptible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings;
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type = {
  TYPE_UNSPECIFIED: 0,
  STANDARD: 1,
  SOFTWARE_ACCELERATED: 2,
  HARDWARE_ACCELERATED: 3
};

/**
 * optional Type type = 1;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.prototype.getType = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.Type} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkSettings.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetGroupSpec: (f = msg.getTargetGroupSpec()) && proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.toObject(includeInstance, f),
    maxOpeningTrafficDuration: (f = msg.getMaxOpeningTrafficDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.deserializeBinaryFromReader);
      msg.setTargetGroupSpec(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxOpeningTrafficDuration(value);
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
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetGroupSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.serializeBinaryToWriter
    );
  }
  f = message.getMaxOpeningTrafficDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional TargetGroupSpec target_group_spec = 1;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.getTargetGroupSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec, 1));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.setTargetGroupSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.clearTargetGroupSpec = function() {
  return this.setTargetGroupSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.hasTargetGroupSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max_opening_traffic_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.getMaxOpeningTrafficDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.setMaxOpeningTrafficDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.clearMaxOpeningTrafficDuration = function() {
  return this.setMaxOpeningTrafficDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.LoadBalancerSpec.prototype.hasMaxOpeningTrafficDuration = function() {
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
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
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
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.TargetGroupSpec.prototype.clearLabelsMap = function() {
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetGroupSpec: (f = msg.getTargetGroupSpec()) && proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.toObject(includeInstance, f),
    maxOpeningTrafficDuration: (f = msg.getMaxOpeningTrafficDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.deserializeBinaryFromReader);
      msg.setTargetGroupSpec(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxOpeningTrafficDuration(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetGroupSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.serializeBinaryToWriter
    );
  }
  f = message.getMaxOpeningTrafficDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional ApplicationTargetGroupSpec target_group_spec = 1;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.getTargetGroupSpec = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec, 1));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.setTargetGroupSpec = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.clearTargetGroupSpec = function() {
  return this.setTargetGroupSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.hasTargetGroupSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max_opening_traffic_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.getMaxOpeningTrafficDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.setMaxOpeningTrafficDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.clearMaxOpeningTrafficDuration = function() {
  return this.setMaxOpeningTrafficDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationLoadBalancerSpec.prototype.hasMaxOpeningTrafficDuration = function() {
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
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
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ApplicationTargetGroupSpec.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.repeatedFields_ = [1];



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
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    healthCheckSpecsList: jspb.Message.toObjectList(msg.getHealthCheckSpecsList(),
    proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.toObject, includeInstance),
    maxCheckingHealthDuration: (f = msg.getMaxCheckingHealthDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.deserializeBinaryFromReader);
      msg.addHealthCheckSpecs(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxCheckingHealthDuration(value);
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
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealthCheckSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.serializeBinaryToWriter
    );
  }
  f = message.getMaxCheckingHealthDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated HealthCheckSpec health_check_specs = 1;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec>}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.getHealthCheckSpecsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec, 1));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.setHealthCheckSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.addHealthCheckSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.clearHealthCheckSpecsList = function() {
  return this.setHealthCheckSpecsList([]);
};


/**
 * optional google.protobuf.Duration max_checking_health_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.getMaxCheckingHealthDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.setMaxCheckingHealthDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.clearMaxCheckingHealthDuration = function() {
  return this.setMaxCheckingHealthDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthChecksSpec.prototype.hasMaxCheckingHealthDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HealthCheckOptionsCase = {
  HEALTH_CHECK_OPTIONS_NOT_SET: 0,
  TCP_OPTIONS: 5,
  HTTP_OPTIONS: 6
};

/**
 * @return {proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HealthCheckOptionsCase}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getHealthCheckOptionsCase = function() {
  return /** @type {proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HealthCheckOptionsCase} */(jspb.Message.computeOneofCase(this, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.oneofGroups_[0]));
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    interval: (f = msg.getInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    unhealthyThreshold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    healthyThreshold: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tcpOptions: (f = msg.getTcpOptions()) && proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.toObject(includeInstance, f),
    httpOptions: (f = msg.getHttpOptions()) && proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec;
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnhealthyThreshold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHealthyThreshold(value);
      break;
    case 5:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.deserializeBinaryFromReader);
      msg.setTcpOptions(value);
      break;
    case 6:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.deserializeBinaryFromReader);
      msg.setHttpOptions(value);
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getUnhealthyThreshold();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHealthyThreshold();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTcpOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.serializeBinaryToWriter
    );
  }
  f = message.getHttpOptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.serializeBinaryToWriter
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions;
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPort(value);
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 port = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions;
  return proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 port = 1;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Duration interval = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 unhealthy_threshold = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getUnhealthyThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setUnhealthyThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 healthy_threshold = 4;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getHealthyThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setHealthyThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional TcpOptions tcp_options = 5;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getTcpOptions = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions, 5));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.TcpOptions|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setTcpOptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.clearTcpOptions = function() {
  return this.setTcpOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.hasTcpOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HttpOptions http_options = 6;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.getHttpOptions = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions, 6));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.HttpOptions|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.setHttpOptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.clearHttpOptions = function() {
  return this.setHttpOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.HealthCheckSpec.prototype.hasHttpOptions = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.repeatedFields_ = [8];



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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    instanceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fqdn: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    statusMessage: jspb.Message.getFieldWithDefault(msg, 6, ""),
    zoneId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    networkInterfacesList: jspb.Message.toObjectList(msg.getNetworkInterfacesList(),
    proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.toObject, includeInstance),
    statusChangedAt: (f = msg.getStatusChangedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance;
  return proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqdn(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusMessage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setZoneId(value);
      break;
    case 8:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.deserializeBinaryFromReader);
      msg.addNetworkInterfaces(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStatusChangedAt(value);
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
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInstanceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFqdn();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatusMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getZoneId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNetworkInterfacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.serializeBinaryToWriter
    );
  }
  f = message.getStatusChangedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status = {
  STATUS_UNSPECIFIED: 0,
  CREATING_INSTANCE: 11,
  UPDATING_INSTANCE: 12,
  DELETING_INSTANCE: 13,
  STARTING_INSTANCE: 14,
  STOPPING_INSTANCE: 15,
  AWAITING_STARTUP_DURATION: 16,
  CHECKING_HEALTH: 17,
  OPENING_TRAFFIC: 18,
  AWAITING_WARMUP_DURATION: 19,
  CLOSING_TRAFFIC: 20,
  RUNNING_ACTUAL: 21,
  RUNNING_OUTDATED: 22,
  STOPPED: 23,
  DELETED: 24,
  PREPARING_RESOURCES: 25
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getStatus = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.Status} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string instance_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getInstanceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setInstanceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fqdn = 4;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status_message = 6;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getStatusMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setStatusMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string zone_id = 7;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated NetworkInterface network_interfaces = 8;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface>}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getNetworkInterfacesList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface, 8));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setNetworkInterfacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.addNetworkInterfaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.clearNetworkInterfacesList = function() {
  return this.setNetworkInterfacesList([]);
};


/**
 * optional google.protobuf.Timestamp status_changed_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.getStatusChangedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.setStatusChangedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.clearStatusChangedAt = function() {
  return this.setStatusChangedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.ManagedInstance.prototype.hasStatusChangedAt = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, ""),
    macAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subnetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    primaryV4Address: (f = msg.getPrimaryV4Address()) && proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.toObject(includeInstance, f),
    primaryV6Address: (f = msg.getPrimaryV6Address()) && proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.toObject(includeInstance, f)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface;
  return proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMacAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubnetId(value);
      break;
    case 4:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.deserializeBinaryFromReader);
      msg.setPrimaryV4Address(value);
      break;
    case 5:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.deserializeBinaryFromReader);
      msg.setPrimaryV6Address(value);
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
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMacAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubnetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrimaryV4Address();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.serializeBinaryToWriter
    );
  }
  f = message.getPrimaryV6Address();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional string index = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string mac_address = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.getMacAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.setMacAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subnet_id = 3;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.getSubnetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.setSubnetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PrimaryAddress primary_v4_address = 4;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.getPrimaryV4Address = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress, 4));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.setPrimaryV4Address = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.clearPrimaryV4Address = function() {
  return this.setPrimaryV4Address(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.hasPrimaryV4Address = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PrimaryAddress primary_v6_address = 5;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.getPrimaryV6Address = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress, 5));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.setPrimaryV6Address = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.clearPrimaryV6Address = function() {
  return this.setPrimaryV6Address(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.NetworkInterface.prototype.hasPrimaryV6Address = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oneToOneNat: (f = msg.getOneToOneNat()) && proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.toObject(includeInstance, f),
    dnsRecordsList: jspb.Message.toObjectList(msg.getDnsRecordsList(),
    proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress;
  return proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.deserializeBinaryFromReader);
      msg.setOneToOneNat(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecord;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.deserializeBinaryFromReader);
      msg.addDnsRecords(value);
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
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOneToOneNat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.serializeBinaryToWriter
    );
  }
  f = message.getDnsRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OneToOneNat one_to_one_nat = 2;
 * @return {?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.getOneToOneNat = function() {
  return /** @type{?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} */ (
    jspb.Message.getWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat, 2));
};


/**
 * @param {?proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.setOneToOneNat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.clearOneToOneNat = function() {
  return this.setOneToOneNat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.hasOneToOneNat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated DnsRecord dns_records = 3;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.getDnsRecordsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.DnsRecord, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.setDnsRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.addDnsRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.compute.v1.instancegroup.DnsRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.PrimaryAddress.prototype.clearDnsRecordsList = function() {
  return this.setDnsRecordsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.repeatedFields_ = [3];



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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dnsRecordsList: jspb.Message.toObjectList(msg.getDnsRecordsList(),
    proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.toObject, includeInstance)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat;
  return proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} */ (reader.readEnum());
      msg.setIpVersion(value);
      break;
    case 3:
      var value = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecord;
      reader.readMessage(value,proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.deserializeBinaryFromReader);
      msg.addDnsRecords(value);
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
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDnsRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IpVersion ip_version = 2;
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.getIpVersion = function() {
  return /** @type {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.IpVersion} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.setIpVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated DnsRecord dns_records = 3;
 * @return {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.getDnsRecordsList = function() {
  return /** @type{!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.yandex.cloud.compute.v1.instancegroup.DnsRecord, 3));
};


/**
 * @param {!Array<!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord>} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.setDnsRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.addDnsRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.yandex.cloud.compute.v1.instancegroup.DnsRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.OneToOneNat.prototype.clearDnsRecordsList = function() {
  return this.setDnsRecordsList([]);
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    fqdn: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dnsZoneId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ttl: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ptr: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.DnsRecord;
  return proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqdn(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsZoneId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPtr(value);
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
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFqdn();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDnsZoneId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTtl();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPtr();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string fqdn = 1;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.setFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dns_zone_id = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.getDnsZoneId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.setDnsZoneId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ttl = 3;
 * @return {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.getTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.setTtl = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool ptr = 4;
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.getPtr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.DnsRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.DnsRecord.prototype.setPtr = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.yandex.cloud.compute.v1.instancegroup.LogRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.yandex.cloud.compute.v1.instancegroup.LogRecord;
  return proto.yandex.cloud.compute.v1.instancegroup.LogRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord}
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.yandex.cloud.compute.v1.instancegroup.LogRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} returns this
*/
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.yandex.cloud.compute.v1.instancegroup.LogRecord} returns this
 */
proto.yandex.cloud.compute.v1.instancegroup.LogRecord.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.yandex.cloud.compute.v1.instancegroup.IpVersion = {
  IP_VERSION_UNSPECIFIED: 0,
  IPV4: 1,
  IPV6: 2
};

goog.object.extend(exports, proto.yandex.cloud.compute.v1.instancegroup);
